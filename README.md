# Spinlist

A no-build album-discovery site. Browse MusicBrainz's album catalog across all
genres or narrow it using the full genre list; refine picks by release year,
mood, and similar artists. Pick one random album at a time, and save favorites
in your browser.

MusicBrainz supplies genre and album metadata through a Cloudflare Worker.
Cover Art Archive artwork is shown when available, with generated covers as a
fallback. Album listening links open Spotify search. You can also connect your
own Spotify developer app to search its catalog; Spotify sign-in uses OAuth
Authorization Code with PKCE and never asks for or stores a client secret.

## Run locally

Run `python -m http.server 8000` from the repository root, then open
`http://localhost:8000`. This serves the curated crate and supports the local
Worker's CORS allowlist. Spotify sign-in also requires HTTPS or localhost;
`file://` does not support its OAuth redirect flow.

## Enable MusicBrainz

1. Create a Cloudflare account and install or run Wrangler from the repository
   root. The Worker and its Durable Object definition are in `worker.mjs` and
   `wrangler.toml`.
2. Authenticate and deploy:

   In Windows PowerShell, use the `.cmd` launchers so PowerShell's script
   execution policy does not block `npm.ps1` or `npx.ps1`:

   ```powershell
   npm.cmd -v
   npx.cmd wrangler login
   npx.cmd wrangler deploy
   ```

   On macOS, Linux, or a terminal that allows the standard launchers:

   ```sh
   npx wrangler login
   npx wrangler deploy
   ```

3. Copy the deployed Worker URL (usually ending in `.workers.dev`) into
   `musicbrainz-config.js`:

   ```js
   window.SPINLIST_MUSICBRAINZ_API = "https://your-worker.your-subdomain.workers.dev";
   ```

4. Publish the site again with that configuration. The Worker allows the
   current GitHub Pages origin (`https://croutons12.github.io`) and local
   development on port 8000. If your Pages site uses another origin, add it to
   `ALLOWED_ORIGINS` in `worker.mjs` before deploying.

The Worker caches the complete genre list for 24 hours and album results for
each genre (including the all-genres sample) for 6 hours. A single Durable
Object serializes upstream calls to keep requests within MusicBrainz's rate
limit. MusicBrainz search results are release groups filtered to albums; the
interface samples up to 100 matches and randomly picks from the sample. Mood
labels and similar-artist relationships remain curated Spinlist data.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)`, then save.

The site is static and can be served directly from the repository root.

## Connect Spotify

1. Create a Web API app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
2. Deploy the site over HTTPS (GitHub Pages works) and copy its exact URL from
   **Connect Spotify** in the site.
3. Add that exact URL as a redirect URI in the Spotify app settings.
4. Enter the app's **Client ID** in Spinlist and connect. Never enter a
   Spotify client secret; this static site does not need one.

Spotify's Development Mode and API quota rules apply to the app you create.
See [privacy.html](./privacy.html) for information about locally stored
favorites, Spotify session data, and MusicBrainz requests.
