import assert from "node:assert/strict";
import test from "node:test";
import { MusicBrainzGateway } from "./worker.mjs";

test("random album queries a fresh release-group ID prefix for the selected genre", async () => {
  const originalFetch = globalThis.fetch;
  const queries = [];
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
  }
});
