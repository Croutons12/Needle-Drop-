# Needle Drop

A no-build album-discovery site. Browse a curated crate of records by genre,
release year, mood, and artists you already love. Search, sort, save favorites,
and deal yourself a random wild card. Saved albums stay in your browser.

Connect your own Spotify developer app to search Spotify's catalog for albums,
artists, release dates, and artwork. Spotify search uses OAuth Authorization
Code with PKCE; the site never asks for or stores a client secret. Spotify
catalog results can be saved locally and opened in Spotify. Mood and similar
artist discovery remain based on the curated crate because those aren't
available as reliable Spotify catalog recommendation data.

## Run locally

Open `index.html` in a browser to use the curated crate. Spotify sign-in requires
serving the site from HTTPS or localhost; `file://` does not support the
OAuth redirect flow.

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
4. Enter the app's **Client ID** in Needle Drop and connect. Never enter a
   Spotify client secret; this static site does not need one.

Spotify's Development Mode and API quota rules apply to the app you create.
See [privacy.html](./privacy.html) for information about locally stored favorites
and Spotify session data.
