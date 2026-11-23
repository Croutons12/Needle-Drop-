import assert from "node:assert/strict";
import test from "node:test";
import { MusicBrainzGateway } from "./worker.mjs";

test("random album queries a fresh release-group ID prefix for the selected genre", async () => {
  const originalFetch = globalThis.fetch;
  const originalRandom = Math.random;
  const queries = [];
  Math.random = () => 0.99;
  globalThis.fetch = async (input) => {
    const url = new URL(input);
    const query = url.searchParams.get("query");
    queries.push(query);

    const groups = query.includes("rgid:")
      ? [
          { id: "random-group-1", title: "First result", "primary-type": "Album", "artist-credit": [{ name: "Artist One" }] },
          { id: "random-group-2", title: "Second result", "primary-type": "Album", "artist-credit": [{ name: "Artist Two" }] },
        ]
      : Array.from({ length: 100 }, (_, index) => ({
          id: `catalog-group-${index}`,
          title: `Catalog album ${index}`,
          "primary-type": "Album",
          "artist-credit": [{ name: `Catalog artist ${index}` }],
        }));
    return Response.json({
      count: query.includes("rgid:") ? 2 : 200000,
      "release-groups": groups,
    });
  };

  const values = new Map();
  const gateway = new MusicBrainzGateway({
    storage: {
      get: async (key) => values.get(key),
      put: async (key, value) => values.set(key, value),
    },
  });

  try {
    const response = await gateway.fetch(new Request("https://worker.example/random-album?genre=jazz"));
    const result = await response.json();

    assert.equal(response.status, 200);
    assert.equal(result.count, 200000);
    assert.ok(["random-group-1", "random-group-2"].includes(result.album.id));
    assert.match(queries[0], /^tag:"jazz" AND primarytype:album$/);
    assert.match(queries[1], /^tag:"jazz" AND rgid:[0-9a-f]{3}\* AND primarytype:album$/);
  } finally {
    globalThis.fetch = originalFetch;
    Math.random = originalRandom;
  }
});

test("random album can pick a Deezer album from its matching genre", async () => {
  const originalFetch = globalThis.fetch;
  const originalRandom = Math.random;
  const urls = [];
  Math.random = () => 0;
  globalThis.fetch = async (input) => {
    const url = new URL(input);
    urls.push(url.toString());
    if (url.pathname === "/search/album") {
      return Response.json({
        total: 2,
        data: [
          {
            id: 1,
            title: "Wrong genre",
            record_type: "album",
            genre_id: 152,
            artist: { name: "Rock Artist" },
          },
          {
            id: 2,
            title: "Jazz Album",
            record_type: "album",
            genre_id: 129,
            release_date: "2020-01-01",
            cover_xl: "https://cdn.example/cover.jpg",
            link: "https://www.deezer.com/album/2",
            artist: { name: "Jazz Artist" },
          },
        ],
      });
    }
    throw new Error(`Unexpected Deezer request: ${url}`);
  };

  const values = new Map();
  const gateway = new MusicBrainzGateway({
    storage: {
      get: async (key) => values.get(key),
      put: async (key, value) => values.set(key, value),
    },
  });

  try {
    const response = await gateway.fetch(new Request("https://worker.example/random-album?genre=jazz"));
    const result = await response.json();

    assert.equal(response.status, 200);
    assert.equal(result.source, "deezer");
    assert.equal(result.album.id, "2");
    assert.equal(result.album.genre, "Jazz");
    assert.equal(result.album.coverUrl, "https://cdn.example/cover.jpg");
    assert.equal(urls.length, 1);
    assert.match(urls[0], /\/search\/album\?q=Jazz&limit=100&index=0$/);
  } finally {
    globalThis.fetch = originalFetch;
    Math.random = originalRandom;
  }
});
