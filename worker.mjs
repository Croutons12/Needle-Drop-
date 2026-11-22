const ALLOWED_ORIGINS = new Set([
  "https://croutons12.github.io",
  "http://localhost:8000",
  "http://127.0.0.1:8000",
]);
const MUSICBRAINZ_BASE_URL = "https://musicbrainz.org/ws/2";
const USER_AGENT = "Spinlist/1.0 (https://github.com/Croutons12/needle-drop-2)";
const LUCENE_SPECIAL_CHARACTERS = new Set(["+", "-", "!", "(", ")", "{", "}", "[", "]", "^", "\"", "~", "*", "?", ":", "\\", "/", "|", "&"]);

function jsonResponse(data, status, origin) {
  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Vary", "Origin");
  }
  return new Response(JSON.stringify(data), { status, headers });
}

function isAllowedOrigin(origin) {
  return !origin || ALLOWED_ORIGINS.has(origin);
}

function escapeLucenePhrase(value) {
  return Array.from(value, (character) => LUCENE_SPECIAL_CHARACTERS.has(character) ? `\\${character}` : character).join("");
}

function randomHex(length) {
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(bytes, (byte) => (byte & 15).toString(16)).join("");
}

function randomIndex(length) {
  const range = 0x100000000;
  const limit = Math.floor(range / length) * length;
  let value;
  do {
    value = crypto.getRandomValues(new Uint32Array(1))[0];
  } while (value >= limit);
  return value % length;
}

async function getFreshCache(storage, key) {
  const cached = await storage.get(key);
  return cached && cached.expiresAt > Date.now() ? cached.data : null;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    if (!isAllowedOrigin(origin)) return jsonResponse({ error: "Origin is not allowed." }, 403, null);
    if (request.method === "OPTIONS") {
      const response = new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      });
      if (origin) {
        response.headers.set("Access-Control-Allow-Origin", origin);
        response.headers.set("Vary", "Origin");
      }
      return response;
    }
    if (request.method !== "GET") return jsonResponse({ error: "Only GET requests are supported." }, 405, origin);

    const url = new URL(request.url);
    if (url.pathname !== "/genres" && url.pathname !== "/albums" && url.pathname !== "/random-album") {
      return jsonResponse({ error: "Endpoint not found." }, 404, origin);
    }
    const id = env.MUSICBRAINZ_GATEWAY.idFromName("global");
    return env.MUSICBRAINZ_GATEWAY.get(id).fetch(request);
  },
};

export class MusicBrainzGateway {
  constructor(state) {
    this.state = state;
    this.upstreamQueue = Promise.resolve();
    this.lastRequestAt = 0;
  }

  async fetch(request) {
    const origin = request.headers.get("Origin");
    const url = new URL(request.url);

    try {
      if (url.pathname === "/genres") {
        const genres = await this.getCached("genres", 24 * 60 * 60 * 1000, async () => {
          const response = await this.fetchMusicBrainz(`${MUSICBRAINZ_BASE_URL}/genre/all?fmt=txt`);
          const names = (await response.text())
            .split(/\r?\n/)
            .map((name) => name.trim())
            .filter(Boolean);
          if (!names.length) throw new Error("MusicBrainz returned an empty genre list.");
          return [...new Set(names)].sort((a, b) => a.localeCompare(b));
        });
        return jsonResponse({ genres }, 200, origin);
      }

      if (url.pathname === "/albums") {
        const genre = (url.searchParams.get("genre") || "").trim().slice(0, 100);
        const cacheKey = `albums:${genre.toLowerCase() || "any"}`;
        const data = await this.getCached(cacheKey, 6 * 60 * 60 * 1000, () => this.searchMusicBrainzAlbums(genre));
        return jsonResponse(data, 200, origin);
      }

      if (url.pathname === "/random-album") {
        const genre = (url.searchParams.get("genre") || "").trim().slice(0, 100);
        const cacheKey = `albums:${genre.toLowerCase() || "any"}`;
        const catalog = await this.getCached(cacheKey, 6 * 60 * 60 * 1000, () => this.searchMusicBrainzAlbums(genre));
        if (!catalog.albums.length) return jsonResponse({ count: catalog.count, album: null }, 200, origin);

        let album;
        if (catalog.count <= catalog.albums.length) {
          album = catalog.albums[randomIndex(catalog.albums.length)];
        } else {
          const prefixLength = Math.max(1, Math.ceil(Math.log(catalog.count / 50) / Math.log(16)));
          for (let attempt = 0; attempt < 12 && !album; attempt += 1) {
            let prefix = randomHex(prefixLength);
            for (let depth = 0; depth < 5; depth += 1) {
              const sample = await this.enqueue(() => this.searchMusicBrainzAlbums(genre, `rgid:${prefix}*`));
              if (sample.count > 100) {
                prefix += randomHex(1);
                continue;
              }
              if (sample.albums.length) album = sample.albums[randomIndex(sample.albums.length)];
              break;
            }
          }
        }

        if (!album) throw new Error("Could not find a random album from this MusicBrainz catalog. Please try again.");
        return jsonResponse({ count: catalog.count, album }, 200, origin);
      }

      return jsonResponse({ error: "Endpoint not found." }, 404, origin);
    } catch (error) {
      console.error("MusicBrainz request failed.", error);
      const status = Number.isInteger(error.status) ? error.status : 502;
      return jsonResponse({ error: error.message || "MusicBrainz request failed." }, status, origin);
    }
  }

  async getCached(key, ttl, fetchData) {
    const cached = await getFreshCache(this.state.storage, key);
    if (cached) return cached;

    return this.enqueue(async () => {
      const latest = await getFreshCache(this.state.storage, key);
      if (latest) return latest;
      const data = await fetchData();
      await this.state.storage.put(key, { data, expiresAt: Date.now() + ttl });
      return data;
    });
  }

  async searchMusicBrainzAlbums(genre, additionalQuery = "") {
    const terms = [];
    if (genre) terms.push(`tag:"${escapeLucenePhrase(genre)}"`);
    if (additionalQuery) terms.push(additionalQuery);
    terms.push("primarytype:album");

    const search = new URL(`${MUSICBRAINZ_BASE_URL}/release-group/`);
    search.searchParams.set("query", terms.join(" AND "));
    search.searchParams.set("fmt", "json");
    search.searchParams.set("limit", "100");
    const response = await this.fetchMusicBrainz(search.toString());
    const result = await response.json();
    const albums = (result["release-groups"] || [])
      .filter((group) => group.id && group.title && group["primary-type"] === "Album")
      .map((group) => ({
        id: group.id,
        title: group.title,
        artist: (group["artist-credit"] || [])
          .map((credit) => typeof credit === "string"
            ? credit
            : `${credit.name || credit.artist?.name || ""}${credit.joinphrase || ""}`)
          .join("")
          .trim(),
        firstReleaseDate: group["first-release-date"] || "",
      }))
      .filter((album) => album.artist);
    return { count: Number.isInteger(result.count) ? result.count : albums.length, albums };
  }

  enqueue(operation) {
    const result = this.upstreamQueue.then(operation, operation);
    this.upstreamQueue = result.then(() => undefined, () => undefined);
    return result;
  }

  async fetchMusicBrainz(url) {
    for (let attempt = 0; attempt < 3; attempt += 1) {
      const wait = Math.max(0, 1000 - (Date.now() - this.lastRequestAt));
      if (wait) await new Promise((resolve) => setTimeout(resolve, wait));
      this.lastRequestAt = Date.now();
      const response = await fetch(url, {
        headers: {
          Accept: "application/json, text/plain",
          "User-Agent": USER_AGENT,
        },
      });
      if (response.ok) return response;
      if (response.status === 503 && attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
        continue;
      }

      const error = new Error(`MusicBrainz responded with HTTP ${response.status}.`);
      error.status = response.status;
      throw error;
    }
    throw new Error("MusicBrainz request failed after retrying temporary service errors.");
  }
}
