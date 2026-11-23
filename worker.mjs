const ALLOWED_ORIGINS = new Set([
  "https://croutons12.github.io",
  "http://localhost:8000",
  "http://127.0.0.1:8000",
]);
const MUSICBRAINZ_BASE_URL = "https://musicbrainz.org/ws/2";
const DEEZER_BASE_URL = "https://api.deezer.com";
const USER_AGENT = "Spinlist/1.0 (https://github.com/Croutons12/needle-drop-2)";
const LUCENE_SPECIAL_CHARACTERS = new Set(["+", "-", "!", "(", ")", "{", "}", "[", "]", "^", "\"", "~", "*", "?", ":", "\\", "/", "|", "&"]);
const DEEZER_GENRES = [
  { id: 2, name: "African Music" },
  { id: 85, name: "Alternative" },
  { id: 16, name: "Asian Music" },
  { id: 153, name: "Blues" },
  { id: 75, name: "Brazilian Music" },
  { id: 186, name: "Christian" },
  { id: 98, name: "Classical" },
  { id: 84, name: "Country" },
  { id: 113, name: "Dance" },
  { id: 106, name: "Electro" },
  { id: 173, name: "Films/Games" },
  { id: 466, name: "Folk" },
  { id: 81, name: "Indian Music" },
  { id: 129, name: "Jazz" },
  { id: 95, name: "Kids" },
  { id: 197, name: "Latin" },
  { id: 464, name: "Metal" },
  { id: 132, name: "Pop" },
  { id: 165, name: "R&B" },
  { id: 116, name: "Rap/Hip Hop" },
  { id: 144, name: "Reggae" },
  { id: 122, name: "Reggaeton" },
  { id: 152, name: "Rock" },
  { id: 67, name: "Salsa" },
  { id: 169, name: "Soul & Funk" },
  { id: 65, name: "Traditional Mexicano" },
];

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

function getDeezerGenre(genre) {
  const normalized = genre.toLowerCase();
  const genreId = normalized.includes("hip-hop") || normalized.includes("hip hop") || /\b(rap|grime|trap)\b/.test(normalized)
    ? 116
    : normalized.includes("jazz")
      ? 129
      : normalized.includes("metal")
        ? 464
        : normalized.includes("blues")
          ? 153
          : normalized.includes("classical") || normalized.includes("orchestral") || normalized.includes("opera")
            ? 98
            : normalized.includes("country")
              ? 84
              : normalized.includes("reggaeton")
                ? 122
                : normalized.includes("reggae")
                  ? 144
                  : normalized.includes("salsa")
                    ? 67
                    : normalized.includes("brazil") || normalized.includes("bossa nova")
                      ? 75
                      : normalized.includes("latin")
                        ? 197
                        : normalized.includes("r&b") || normalized.includes("rnb")
                          ? 165
                          : normalized.includes("soul") || normalized.includes("funk")
                            ? 169
                            : normalized.includes("folk")
                              ? 466
                              : normalized.includes("indian")
                                ? 81
                                : normalized.includes("asian")
                                  ? 16
                                  : normalized.includes("african") || normalized.includes("world")
                                    ? 2
                                    : normalized.includes("christian") || normalized.includes("gospel")
                                      ? 186
                                      : normalized.includes("film") || normalized.includes("soundtrack") || normalized.includes("game")
                                        ? 173
                                        : normalized.includes("kids")
                                          ? 95
                                          : normalized.includes("alternative") || normalized.includes("trip-hop") || normalized.includes("trip hop")
                                            ? 85
                                            : normalized.includes("dance") || normalized.includes("disco")
                                              ? 113
                                              : normalized.includes("electronic") || normalized.includes("electro") || normalized.includes("house") || normalized.includes("techno")
                                                ? 106
                                                : normalized.includes("rock") || normalized.includes("punk") || normalized.includes("psychedelic")
                                                  ? 152
                                                  : normalized.includes("pop")
                                                    ? 132
                                                    : null;
  return DEEZER_GENRES.find((item) => item.id === genreId) || null;
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
        if (Math.random() < 0.5) {
          try {
            const deezerAlbum = await this.searchRandomDeezerAlbum(genre);
            if (deezerAlbum) return jsonResponse({ source: "deezer", count: 0, album: deezerAlbum }, 200, origin);
          } catch (error) {
            console.warn("Could not pick a Deezer album; trying MusicBrainz.", error);
          }
        }

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
        return jsonResponse({ source: "musicbrainz", count: catalog.count, album }, 200, origin);
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

  async searchRandomDeezerAlbum(genre) {
    const category = genre ? getDeezerGenre(genre) : DEEZER_GENRES[randomIndex(DEEZER_GENRES.length)];
    if (!category) return null;

    const fetchPage = async (index) => this.getCached(`deezer:genre-search:${category.id}:${index}`, 6 * 60 * 60 * 1000, async () => {
      const search = new URL(`${DEEZER_BASE_URL}/search/album`);
      search.searchParams.set("q", category.name);
      search.searchParams.set("limit", "100");
      search.searchParams.set("index", String(index));
      const result = await this.fetchDeezer(search.toString());
      return { total: Number(result.total) || 0, albums: result.data || [] };
    });

    const firstPage = await fetchPage(0);
    if (!firstPage.total || !firstPage.albums.length) return null;
    const pageCount = Math.min(Math.ceil(firstPage.total / 100), 100);
    const triedPages = new Set();

    for (let attempt = 0; attempt < Math.min(5, pageCount); attempt += 1) {
      const pageIndexes = Array.from({ length: pageCount }, (_, index) => index)
        .filter((index) => !triedPages.has(index));
      if (!pageIndexes.length) break;
      const pageIndex = pageIndexes[randomIndex(pageIndexes.length)];
      triedPages.add(pageIndex);
      const page = pageIndex === 0 ? firstPage : await fetchPage(pageIndex * 100);
      const candidates = page.albums.filter((album) =>
        album && album.id && album.title && album.record_type === "album" && album.genre_id === category.id && album.artist?.name);
      if (!candidates.length) continue;

      const album = candidates[randomIndex(candidates.length)];
      return {
        id: String(album.id),
        title: album.title,
        artist: album.artist.name,
        firstReleaseDate: album.release_date || "",
        genre: category.name,
        source: "deezer",
        coverUrl: album.cover_xl || album.cover_big || album.cover_medium || "",
        deezerUrl: album.link || `https://www.deezer.com/album/${album.id}`,
      };
    }

    return null;
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

  async fetchDeezer(url) {
    const wait = Math.max(0, 1000 - (Date.now() - this.lastRequestAt));
    if (wait) await new Promise((resolve) => setTimeout(resolve, wait));
    this.lastRequestAt = Date.now();
    const response = await fetch(url, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`Deezer responded with HTTP ${response.status}.`);
    const result = await response.json();
    if (result.error) {
      throw new Error(`Deezer request failed: ${result.error.message || "unknown API error"}.`);
    }
    return result;
  }
}
