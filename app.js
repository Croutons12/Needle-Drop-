const albums = [
  {
    id: "in-rainbows", title: "In Rainbows", artist: "Radiohead", year: 2007, genre: "Art rock",
    moods: ["Dreamy", "Introspective", "Late night"],
    related: ["Portishead", "Talk Talk", "The Smile"],
    description: "Warm, weightless, and a little bit strange. A love song to the human voice hiding inside a beautifully restless record.",
  },
  {
    id: "blue", title: "Blue", artist: "Joni Mitchell", year: 1971, genre: "Folk",
    moods: ["Introspective", "Heartbroken", "Quiet"],
    related: ["Nick Drake", "Laura Marling", "Joan Baez"],
    description: "A voice, a guitar, and nothing left unsaid. One of those rare records that somehow feels like it was made just for you.",
  },
  {
    id: "currents", title: "Currents", artist: "Tame Impala", year: 2015, genre: "Psychedelic",
    moods: ["Dreamy", "Restless", "Upbeat"],
    related: ["Toro y Moi", "Unknown Mortal Orchestra", "MGMT"],
    description: "A breakup record that moves like a dance floor. Psychedelia dissolves into synths, big feelings, and one perfect beat.",
  },
  {
    id: "vespertine", title: "Vespertine", artist: "Björk", year: 2001, genre: "Electronic",
    moods: ["Dreamy", "Intimate", "Late night"],
    related: ["FKA twigs", "Kate Bush", "Caroline Polachek"],
    description: "An entire universe built from whispers, music-box melodies, and the quiet thrill of letting somebody in.",
  },
  {
    id: "dummy", title: "Dummy", artist: "Portishead", year: 1994, genre: "Trip-hop",
    moods: ["Late night", "Melancholy", "Introspective"],
    related: ["Massive Attack", "Tricky", "Beth Gibbons"],
    description: "Noir-soaked beats and a voice that sounds like a secret. The soundtrack for the rain-slicked walk home.",
  },
  {
    id: "glow-on", title: "Glow On", artist: "Turnstile", year: 2021, genre: "Post-hardcore",
    moods: ["Euphoric", "Restless", "Upbeat"],
    related: ["IDLES", "Title Fight", "Drug Church"],
    description: "Hardcore's sunny side: urgent, openhearted, and impossible to sit still through. A blast of fresh air at full volume.",
  },
  {
    id: "punisher", title: "Punisher", artist: "Phoebe Bridgers", year: 2020, genre: "Indie folk",
    moods: ["Heartbroken", "Introspective", "Late night"],
    related: ["Julien Baker", "Elliott Smith", "Lucy Dacus"],
    description: "Funny, devastating, and quietly cinematic. For the people who like their existential dread with a melody.",
  },
  {
    id: "discovery", title: "Discovery", artist: "Daft Punk", year: 2001, genre: "Electronic",
    moods: ["Upbeat", "Euphoric", "Nostalgic"],
    related: ["Justice", "Air", "Cassius"],
    description: "Sampled disco, starry-eyed hooks, and pure unfiltered joy. Like remembering the future exactly as you imagined it.",
  },
  {
    id: "moon-safari", title: "Moon Safari", artist: "Air", year: 1998, genre: "Downtempo",
    moods: ["Dreamy", "Quiet", "Nostalgic"],
    related: ["Zero 7", "Stereolab", "The Avalanches"],
    description: "A soft-focus postcard from outer space. Set it playing, make a drink, and let the room float away.",
  },
  {
    id: "illmatic", title: "Illmatic", artist: "Nas", year: 1994, genre: "Hip-hop",
    moods: ["Introspective", "Restless", "Focused"],
    related: ["A Tribe Called Quest", "Jay-Z", "The Notorious B.I.G."],
    description: "Ten tracks, zero filler. Street-level poetry over some of the most considered production hip-hop has ever heard.",
  },
  {
    id: "songs-in-key-of-life", title: "Songs in the Key of Life", artist: "Stevie Wonder", year: 1976, genre: "Soul",
    moods: ["Upbeat", "Euphoric", "Nostalgic"],
    related: ["Marvin Gaye", "Donny Hathaway", "Curtis Mayfield"],
    description: "A whole world in a double album: tender, joyful, restless, and so generous it feels like a celebration you were invited to.",
  },
  {
    id: "kind-of-blue", title: "Kind of Blue", artist: "Miles Davis", year: 1959, genre: "Jazz",
    moods: ["Quiet", "Dreamy", "Late night"],
    related: ["John Coltrane", "Bill Evans", "Chet Baker"],
    description: "Five musicians, one room, and a little room to breathe. The easy first step into a lifetime of listening.",
  },
  {
    id: "blonde", title: "Blonde", artist: "Frank Ocean", year: 2016, genre: "Alternative R&B",
    moods: ["Introspective", "Heartbroken", "Dreamy"],
    related: ["Blood Orange", "Steve Lacy", "SZA"],
    description: "Fragments of memory caught in warm light. An album about change that somehow gets more beautiful the less it explains.",
  },
  {
    id: "blue-train", title: "Blue Train", artist: "John Coltrane", year: 1957, genre: "Jazz",
    moods: ["Focused", "Upbeat", "Late night"],
    related: ["Miles Davis", "Sonny Rollins", "Art Blakey"],
    description: "That brass, that pace, that first horn line. A bright and generous jazz record with all the room in the world to move.",
  },
  {
    id: "pink-moon", title: "Pink Moon", artist: "Nick Drake", year: 1972, genre: "Folk",
    moods: ["Quiet", "Melancholy", "Introspective"],
    related: ["Elliott Smith", "Bert Jansch", "Vashti Bunyan"],
    description: "Just voice, guitar, and space. Forty minutes that sound like the world slowing down around one person in a room.",
  },
  {
    id: "melodrama", title: "Melodrama", artist: "Lorde", year: 2017, genre: "Pop",
    moods: ["Restless", "Heartbroken", "Euphoric"],
    related: ["Robyn", "Carly Rae Jepsen", "Charli xcx"],
    description: "A party's last hour, stretched into a full, luminous night. Every feeling dialed up; not a single one wasted.",
  },
  {
    id: "endtroducing", title: "Endtroducing…..", artist: "DJ Shadow", year: 1996, genre: "Instrumental hip-hop",
    moods: ["Focused", "Dreamy", "Late night"],
    related: ["J Dilla", "Madlib", "The Avalanches"],
    description: "A crate-digger's daydream assembled into a world of its own. All instrumental, endlessly surprising, perfectly atmospheric.",
  },
  {
    id: "to-pimp-a-butterfly", title: "To Pimp a Butterfly", artist: "Kendrick Lamar", year: 2015, genre: "Hip-hop",
    moods: ["Restless", "Focused", "Euphoric"],
    related: ["D'Angelo", "OutKast", "Anderson .Paak"],
    description: "A fearless, restless record with jazz and funk in its bones. The kind of album that gets bigger every time you come back.",
  },
  {
    id: "hounds-of-love", title: "Hounds of Love", artist: "Kate Bush", year: 1985, genre: "Art pop",
    moods: ["Dreamy", "Euphoric", "Restless"],
    related: ["Björk", "Florence + the Machine", "Weyes Blood"],
    description: "Grand emotions and wild invention, held together by an artist who can make a pop song feel like entering a dream.",
  },
  {
    id: "titanic-rising", title: "Titanic Rising", artist: "Weyes Blood", year: 2019, genre: "Art pop",
    moods: ["Nostalgic", "Dreamy", "Melancholy"],
    related: ["Joni Mitchell", "Karen Carpenter", "Kate Bush"],
    description: "The end of the world, but make it gorgeous. Big-hearted '70s pop songs drift through a very modern kind of uncertainty.",
  },
  {
    id: "blue-lines", title: "Blue Lines", artist: "Massive Attack", year: 1991, genre: "Trip-hop",
    moods: ["Late night", "Dreamy", "Focused"],
    related: ["Portishead", "Tricky", "UNKLE"],
    description: "A slow-burning collision of sound-system culture, soul, and studio experimentation. Everything in its own time.",
  },
  {
    id: "lonerism", title: "Lonerism", artist: "Tame Impala", year: 2012, genre: "Psychedelic",
    moods: ["Restless", "Dreamy", "Nostalgic"],
    related: ["Pond", "Melody's Echo Chamber", "MGMT"],
    description: "Daydreams and distorted guitar find each other in the middle. Made for solitary dancing, wherever you happen to be.",
  },
  {
    id: "the-miseducation", title: "The Miseducation of Lauryn Hill", artist: "Lauryn Hill", year: 1998, genre: "Neo-soul",
    moods: ["Heartbroken", "Upbeat", "Introspective"],
    related: ["Erykah Badu", "D'Angelo", "Jill Scott"],
    description: "An album that makes space for every side of a person. Wise, warm, and musically generous from first track to last.",
  },
  {
    id: "for-emma", title: "For Emma, Forever Ago", artist: "Bon Iver", year: 2007, genre: "Indie folk",
    moods: ["Heartbroken", "Quiet", "Introspective"],
    related: ["Sufjan Stevens", "Nick Drake", "Fleet Foxes"],
    description: "A voice wrapped in enough layers to make a cabin in the woods feel like a universe. A quietly unforgettable debut.",
  },
];

const moods = ["Dreamy", "Upbeat", "Introspective", "Late night", "Heartbroken", "Euphoric", "Quiet", "Restless", "Nostalgic", "Focused", "Melancholy", "Intimate"];
const savedStorageKey = "needle-drop-saved-albums";
const savedDetailsStorageKey = "needle-drop-saved-album-details";
const spotifyClientStorageKey = "needle-drop-spotify-client-id";
const spotifyTokenStorageKey = "needle-drop-spotify-token";
const elements = {
  genre: document.querySelector("#genre-filter"),
  customGenre: document.querySelector("#custom-genre"),
  artist: document.querySelector("#artist-filter"),
  yearFrom: document.querySelector("#year-from"),
  yearTo: document.querySelector("#year-to"),
  search: document.querySelector("#search-input"),
  sort: document.querySelector("#sort-filter"),
  moods: document.querySelector("#mood-chips"),
  grid: document.querySelector("#album-grid"),
  count: document.querySelector("#results-count"),
  activeFilters: document.querySelector("#active-filters"),
  emptyState: document.querySelector("#empty-state"),
  savedToggle: document.querySelector("#saved-toggle"),
  savedCount: document.querySelector("#saved-count"),
  dialog: document.querySelector("#album-dialog"),
  dialogContent: document.querySelector("#dialog-content"),
  catalogStatus: document.querySelector("#catalog-status"),
  spotifyOpen: document.querySelector("#spotify-open"),
  spotifyButtonLabel: document.querySelector("#spotify-button-label"),
  spotifyDialog: document.querySelector("#spotify-dialog"),
  spotifyClientId: document.querySelector("#spotify-client-id"),
  spotifyRedirectUri: document.querySelector("#spotify-redirect-uri"),
  spotifyError: document.querySelector("#spotify-error"),
  spotifyDisconnect: document.querySelector("#spotify-disconnect"),
};

const selectedMoods = new Set();
let savedAlbums = readSavedAlbums();
let savedAlbumDetails = readSavedAlbumDetails();
savedAlbums = new Set([...savedAlbums].filter((id) => albums.some((album) => album.id === id) || savedAlbumDetails.has(id)));
let showSavedOnly = false;
let currentResults = [];
let spotifyAccessToken = "";
let spotifyTokenExpiresAt = 0;
let spotifyRefreshToken = "";
let spotifyAlbums = [];
let spotifyCatalogMode = false;
let spotifySearchTimer;
let spotifySearchRequest = 0;

function readSavedAlbums() {
  try {
    const saved = JSON.parse(localStorage.getItem(savedStorageKey) || "[]");
    return new Set(Array.isArray(saved) ? saved.filter((id) => typeof id === "string") : []);
  } catch (error) {
    console.warn("Could not read saved albums from local storage.", error);
    return new Set();
  }
}

function readSavedAlbumDetails() {
  try {
    const saved = JSON.parse(localStorage.getItem(savedDetailsStorageKey) || "[]");
    if (!Array.isArray(saved)) return new Map();
    return new Map(saved.filter((album) => album && typeof album.id === "string").map((album) => [album.id, album]));
  } catch (error) {
    console.warn("Could not read saved album details from local storage.", error);
    return new Map();
  }
}

function populateSelect(select, options, firstLabel) {
  for (const option of options) {
    const element = document.createElement("option");
    element.value = option;
    element.textContent = option;
    select.append(element);
  }
  select.options[0].textContent = firstLabel;
}

populateSelect(elements.genre, [...new Set(albums.map((album) => album.genre))].sort(), "Any genre");
const customGenreOption = document.createElement("option");
customGenreOption.value = "custom";
customGenreOption.textContent = "Other genre…";
elements.genre.append(customGenreOption);
populateSelect(
  elements.artist,
  [...new Set(albums.flatMap((album) => [album.artist, ...album.related]))].sort(),
  "Surprise me",
);
try {
  elements.spotifyClientId.value = localStorage.getItem(spotifyClientStorageKey) || "";
} catch (error) {
  console.warn("Could not read the Spotify Client ID from local storage.", error);
}
elements.spotifyRedirectUri.textContent = getSpotifyRedirectUri();

function getSpotifyRedirectUri() {
  return `${window.location.origin}${window.location.pathname}`;
}

function getSelectedGenre() {
  if (elements.genre.value === "custom") return elements.customGenre.value.trim();
  return elements.genre.value === "all" ? "" : elements.genre.value;
}

for (const mood of moods) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "mood-chip";
  button.dataset.mood = mood;
  button.textContent = mood;
  button.setAttribute("aria-pressed", "false");
  elements.moods.append(button);
}

function getFilteredAlbums(source = albums) {
  const search = elements.search.value.trim().toLowerCase();
  const genre = getSelectedGenre();
  const artist = elements.artist.value;
  const from = elements.yearFrom.value === "" ? -Infinity : Number(elements.yearFrom.value);
  const to = elements.yearTo.value === "" ? Infinity : Number(elements.yearTo.value);

  const matches = source.filter((album) => {
    const searchable = [album.title, album.artist, album.genre, ...album.related].join(" ").toLowerCase();
    const matchesSearch = !search || source === spotifyAlbums || searchable.includes(search);
    const matchesGenre = source === spotifyAlbums || !genre || album.genre === genre;
    const matchesArtist = artist === "all" || album.artist === artist || album.related.includes(artist);
    const matchesYears = album.year >= from && album.year <= to;
    const matchesMoods = [...selectedMoods].every((mood) => album.moods.includes(mood));
    const matchesSaved = !showSavedOnly || savedAlbums.has(album.id);
    return matchesSearch && matchesGenre && matchesArtist && matchesYears && matchesMoods && matchesSaved;
  });

  switch (elements.sort.value) {
    case "newest":
      return matches.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
    case "oldest":
      return matches.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
    case "title":
      return matches.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return matches;
  }
}

function createCover(album) {
  const cover = document.createElement("span");
  const albumIndex = albums.indexOf(album);
  cover.className = album.imageUrl ? "cover-art spotify-cover" : `cover-art cover--${(Math.max(albumIndex, 0) % 8) + 1}`;
  cover.setAttribute("aria-hidden", "true");
  if (album.imageUrl) {
    const image = document.createElement("img");
    image.className = "spotify-cover-image";
    image.src = album.imageUrl;
    image.alt = "";
    image.loading = "lazy";
    image.referrerPolicy = "no-referrer";
    cover.append(image);
    return cover;
  }
  const tone = document.createElement("span");
  tone.className = "cover-tone";
  const geometry = document.createElement("span");
  geometry.className = "cover-geometry";
  const topline = document.createElement("span");
  topline.className = "cover-topline";
  topline.textContent = `NEEDLE DROP  /  ${album.year}`;
  const bigtitle = document.createElement("span");
  bigtitle.className = "cover-bigtitle";
  bigtitle.textContent = album.title;
  const smalltitle = document.createElement("span");
  smalltitle.className = "cover-smalltitle";
  smalltitle.textContent = album.artist.toUpperCase();
  const catalog = document.createElement("span");
  catalog.className = "cover-catalog";
  catalog.textContent = "FULL ALBUM  ·  33⅓ RPM";
  cover.append(tone, geometry, topline, bigtitle, smalltitle, catalog);
  return cover;
}

function createSpotifyMark() {
  const mark = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  mark.setAttribute("class", "spotify-mark");
  mark.setAttribute("viewBox", "0 0 24 24");
  mark.setAttribute("aria-hidden", "true");
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "12");
  circle.setAttribute("cy", "12");
  circle.setAttribute("r", "12");
  const arcs = document.createElementNS("http://www.w3.org/2000/svg", "path");
  arcs.setAttribute("d", "M5.1 9.2c4.3-1.3 9.8-.9 13.2 1.2M6.3 12.1c3.5-1 7.8-.6 10.6 1M7.2 15c2.7-.8 5.8-.4 8.3.8");
  mark.append(circle, arcs);
  return mark;
}

function makeFavoriteButton(album) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "favorite-button";
  button.setAttribute("aria-label", savedAlbums.has(album.id) ? `Remove ${album.title} from saved albums` : `Save ${album.title}`);
  button.setAttribute("aria-pressed", String(savedAlbums.has(album.id)));
  button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></svg>';
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleSaved(album.id, album);
  });
  return button;
}

function renderCard(album) {
  const card = document.createElement("article");
  card.className = "album-card";

  const coverWrap = document.createElement("div");
  coverWrap.className = "cover-wrap";
  const coverButton = document.createElement("button");
  coverButton.type = "button";
  coverButton.className = album.imageUrl ? "cover-button spotify-cover-button" : "cover-button";
  coverButton.setAttribute("aria-label", `View ${album.title} by ${album.artist}`);
  coverButton.append(createCover(album));
  coverButton.addEventListener("click", () => openAlbum(album));
  const favoriteButton = makeFavoriteButton(album);
  if (album.spotifyUrl) {
    favoriteButton.classList.add("inline-favorite");
    coverWrap.append(coverButton);
  } else {
    coverWrap.append(coverButton, favoriteButton);
  }

  const info = document.createElement("div");
  info.className = "album-info";
  const genre = document.createElement("span");
  genre.className = "album-genre";
  genre.textContent = album.genre.toUpperCase();

  const detailButton = document.createElement("button");
  detailButton.type = "button";
  detailButton.className = "album-detail-button";
  detailButton.addEventListener("click", () => openAlbum(album));
  const title = document.createElement("h3");
  title.className = "album-title";
  title.textContent = album.title;
  const artist = document.createElement("p");
  artist.className = "album-artist";
  artist.textContent = album.artist;
  detailButton.append(title, artist);
  const titleRow = document.createElement("div");
  titleRow.className = "album-title-row";
  titleRow.append(detailButton);
  if (album.spotifyUrl) titleRow.append(favoriteButton);

  const meta = document.createElement("div");
  meta.className = "album-meta";
  const year = document.createElement("span");
  year.textContent = album.year;
  const mood = document.createElement("span");
  mood.textContent = (album.moods[0] || "SPOTIFY PICK").toUpperCase();
  meta.append(year, mood);

  info.append(genre, titleRow, meta);
  if (album.spotifyUrl) {
    const spotifyLink = document.createElement("a");
    spotifyLink.className = "spotify-card-link";
    spotifyLink.href = album.spotifyUrl;
    spotifyLink.target = "_blank";
    spotifyLink.rel = "noopener noreferrer";
    spotifyLink.append(createSpotifyMark(), document.createTextNode("Listen on Spotify ↗"));
    info.append(spotifyLink);
  }
  card.append(coverWrap, info);
  return card;
}

function renderActiveFilters() {
  elements.activeFilters.replaceChildren();
  const filters = [];
  if (getSelectedGenre()) filters.push({ label: getSelectedGenre(), clear: () => { elements.genre.value = "all"; elements.customGenre.value = ""; elements.customGenre.hidden = true; } });
  if (elements.artist.value !== "all") filters.push({ label: `Like ${elements.artist.value}`, clear: () => { elements.artist.value = "all"; } });
  if (elements.yearFrom.value || elements.yearTo.value) {
    const from = elements.yearFrom.value || "1950";
    const to = elements.yearTo.value || "2026";
    filters.push({ label: `${from}–${to}`, clear: () => { elements.yearFrom.value = ""; elements.yearTo.value = ""; } });
  }
  if (elements.search.value.trim()) filters.push({ label: `“${elements.search.value.trim()}”`, clear: () => { elements.search.value = ""; } });
  if (showSavedOnly) filters.push({ label: "Saved albums", clear: () => { showSavedOnly = false; updateSavedState(); } });
  for (const mood of selectedMoods) filters.push({ label: mood, clear: () => { selectedMoods.delete(mood); updateMoodState(); } });

  for (const filter of filters) {
    const chip = document.createElement("span");
    chip.className = "active-filter";
    chip.append(document.createTextNode(filter.label));
    const clear = document.createElement("button");
    clear.type = "button";
    clear.textContent = "×";
    clear.setAttribute("aria-label", `Remove ${filter.label} filter`);
    clear.addEventListener("click", () => {
      filter.clear();
      render();
      scheduleSpotifySearch();
    });
    chip.append(clear);
    elements.activeFilters.append(chip);
  }
}

function render() {
  const isSpotifySearch = spotifyCatalogMode && !showSavedOnly && selectedMoods.size === 0;
  const source = isSpotifySearch
    ? spotifyAlbums
    : showSavedOnly
      ? [...albums, ...savedAlbumDetails.values()].filter((album, index, all) => all.findIndex((item) => item.id === album.id) === index)
      : albums;
  currentResults = getFilteredAlbums(source);
  const fragment = document.createDocumentFragment();
  for (const album of currentResults) fragment.append(renderCard(album));
  elements.grid.replaceChildren(fragment);
  elements.grid.hidden = currentResults.length === 0;
  elements.emptyState.hidden = currentResults.length > 0;
  elements.count.textContent = `${String(currentResults.length).padStart(2, "0")} ${showSavedOnly ? "SAVED RECORDS" : spotifyCatalogMode && isSpotifySearch ? "SPOTIFY RESULTS" : currentResults.length === 1 ? "RECORD FOUND" : "RECORDS FOUND"}`;
  if (spotifyCatalogMode && selectedMoods.size > 0 && !showSavedOnly) {
    elements.catalogStatus.textContent = "Mood tags are editorial, not part of Spotify’s catalog. Showing curated picks for your selected mood.";
  } else if (spotifyCatalogMode && !showSavedOnly) {
    elements.catalogStatus.textContent = "Browsing Spotify’s catalog. Mood and similar-artist discovery use Needle Drop’s curated picks.";
  } else {
    elements.catalogStatus.textContent = "";
  }
  renderActiveFilters();
}

function updateSavedState() {
  try {
    localStorage.setItem(savedStorageKey, JSON.stringify([...savedAlbums]));
    localStorage.setItem(savedDetailsStorageKey, JSON.stringify([...savedAlbumDetails.values()]));
  } catch (error) {
    console.warn("Could not save your albums in local storage.", error);
  }
  elements.savedCount.textContent = String(savedAlbums.size);
  elements.savedToggle.setAttribute("aria-pressed", String(showSavedOnly));
  elements.savedToggle.setAttribute("aria-label", `${showSavedOnly ? "Show all albums" : "Show saved albums"}; ${savedAlbums.size} saved`);
  elements.spotifyButtonLabel.textContent = spotifyCatalogMode ? "Spotify connected" : elements.spotifyClientId.value ? "Spotify settings" : "Connect Spotify";
  elements.spotifyDisconnect.hidden = !spotifyCatalogMode;
}

function updateMoodState() {
  for (const button of elements.moods.querySelectorAll(".mood-chip")) {
    button.setAttribute("aria-pressed", String(selectedMoods.has(button.dataset.mood)));
  }
}

function toggleSaved(id, album) {
  if (savedAlbums.has(id)) {
    savedAlbums.delete(id);
    savedAlbumDetails.delete(id);
  } else {
    savedAlbums.add(id);
    const savedAlbum = album || albums.find((item) => item.id === id);
    if (savedAlbum) savedAlbumDetails.set(id, savedAlbum);
  }
  updateSavedState();
  render();
  if (elements.dialog.open) {
    const savedAlbum = album || albums.find((item) => item.id === id) || savedAlbumDetails.get(id);
    if (savedAlbum) renderAlbumDialog(savedAlbum);
  }
}

function renderAlbumDialog(album) {
  const layout = document.createElement("div");
  layout.className = "dialog-inner";
  const cover = document.createElement("div");
  cover.className = "dialog-cover";
  cover.append(createCover(album));
  const copy = document.createElement("div");
  copy.className = "dialog-copy";
  const genre = document.createElement("span");
  genre.className = "album-genre";
  genre.textContent = album.genre.toUpperCase();
  const title = document.createElement("h2");
  title.className = "dialog-title";
  title.id = "dialog-title";
  title.textContent = album.title;
  const artist = document.createElement("p");
  artist.className = "dialog-artist";
  artist.textContent = album.artist;
  const year = document.createElement("p");
  year.className = "album-detail-year";
  year.textContent = `${album.year}${album.moods.length ? `  ·  ${album.moods.join("  /  ").toUpperCase()}` : ""}`;
  const description = document.createElement("p");
  description.className = "dialog-description";
  description.textContent = album.description;
  const relatedLabel = document.createElement("span");
  relatedLabel.className = "album-related-label";
  relatedLabel.textContent = "IF YOU LOVE THIS, TRY…";
  const related = document.createElement("div");
  related.className = "album-related";
  related.textContent = album.related.length ? album.related.join("  ·  ") : "Explore the curated crate for artist connections.";
  const save = document.createElement("button");
  save.type = "button";
  save.className = "dialog-save";
  save.setAttribute("aria-pressed", String(savedAlbums.has(album.id)));
  save.textContent = savedAlbums.has(album.id) ? "♥  SAVED TO YOUR CRATE" : "♡  SAVE TO YOUR CRATE";
  save.addEventListener("click", () => toggleSaved(album.id, album));
  copy.append(genre, title, artist, year, description, relatedLabel, related, save);
  if (album.spotifyUrl) {
    const spotifyLink = document.createElement("a");
    spotifyLink.className = "spotify-link";
    spotifyLink.href = album.spotifyUrl;
    spotifyLink.target = "_blank";
    spotifyLink.rel = "noopener noreferrer";
    spotifyLink.append(createSpotifyMark(), document.createTextNode("OPEN IN SPOTIFY ↗"));
    copy.append(spotifyLink);
  }
  layout.append(cover, copy);
  elements.dialogContent.replaceChildren(layout);
}

function openAlbum(album) {
  renderAlbumDialog(album);
  elements.dialog.showModal();
}

function clearFilters() {
  elements.genre.value = "all";
  elements.customGenre.value = "";
  elements.customGenre.hidden = true;
  elements.artist.value = "all";
  elements.yearFrom.value = "";
  elements.yearTo.value = "";
  elements.search.value = "";
  selectedMoods.clear();
  showSavedOnly = false;
  updateMoodState();
  updateSavedState();
  render();
  if (spotifyCatalogMode) scheduleSpotifySearch();
}

function showSpotifyError(message) {
  elements.spotifyError.textContent = message;
  elements.spotifyError.hidden = false;
}

function clearSpotifyError() {
  elements.spotifyError.textContent = "";
  elements.spotifyError.hidden = true;
}

function getRandomString(length) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
}

async function createCodeChallenge(verifier) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
  const bytes = String.fromCharCode(...new Uint8Array(digest));
  return btoa(bytes).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

async function connectToSpotify() {
  const clientId = elements.spotifyClientId.value.trim();
  if (!clientId) {
    showSpotifyError("Enter your Spotify app’s Client ID first.");
    return;
  }
  if (window.location.protocol !== "https:" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
    showSpotifyError("Spotify sign-in needs an HTTPS site. Publish this project with GitHub Pages, then add its exact URL as a Spotify redirect URI.");
    return;
  }

  try {
    localStorage.setItem(spotifyClientStorageKey, clientId);
  } catch (error) {
    showSpotifyError(`Could not save your Spotify Client ID in this browser: ${error.message}`);
    return;
  }

  const verifier = getRandomString(64);
  const state = getRandomString(32);
  const challenge = await createCodeChallenge(verifier);
  sessionStorage.setItem("needle-drop-spotify-verifier", verifier);
  sessionStorage.setItem("needle-drop-spotify-state", state);

  const authorizeUrl = new URL("https://accounts.spotify.com/authorize");
  authorizeUrl.search = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: getSpotifyRedirectUri(),
    code_challenge_method: "S256",
    code_challenge: challenge,
    state,
  }).toString();
  window.location.assign(authorizeUrl);
}

function clearSpotifyCallback() {
  const cleanUrl = new URL(window.location.href);
  cleanUrl.searchParams.delete("code");
  cleanUrl.searchParams.delete("state");
  cleanUrl.searchParams.delete("error");
  window.history.replaceState({}, document.title, cleanUrl);
}

async function exchangeSpotifyCode(code, verifier) {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: elements.spotifyClientId.value.trim(),
      grant_type: "authorization_code",
      code,
      redirect_uri: getSpotifyRedirectUri(),
      code_verifier: verifier,
    }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error_description || data.error || "Spotify could not complete sign-in.");
  setSpotifyToken(data);
}

function setSpotifyToken(data) {
  spotifyAccessToken = data.access_token;
  spotifyTokenExpiresAt = Date.now() + data.expires_in * 1000;
  if (data.refresh_token) spotifyRefreshToken = data.refresh_token;
  sessionStorage.setItem(spotifyTokenStorageKey, JSON.stringify({
    accessToken: spotifyAccessToken,
    refreshToken: spotifyRefreshToken,
    expiresAt: spotifyTokenExpiresAt,
  }));
}

async function getSpotifyAccessToken(forceRefresh = false) {
  if (!forceRefresh && spotifyAccessToken && Date.now() < spotifyTokenExpiresAt - 60_000) {
    return spotifyAccessToken;
  }
  if (!spotifyRefreshToken) throw new Error("Your Spotify session expired. Connect to Spotify again.");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: elements.spotifyClientId.value.trim(),
      grant_type: "refresh_token",
      refresh_token: spotifyRefreshToken,
    }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error_description || data.error || "Spotify sign-in expired. Please connect again.");
  setSpotifyToken(data);
  return spotifyAccessToken;
}

async function spotifyRequest(url, retry = true) {
  const token = await getSpotifyAccessToken();
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15_000);
  let response;
  try {
    response = await fetch(url, { headers: { Authorization: `Bearer ${token}` }, signal: controller.signal });
  } catch (error) {
    if (error.name === "AbortError") throw new Error("Spotify took too long to respond. Please try again.");
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
  if (response.status === 401 && retry && spotifyRefreshToken) {
    await getSpotifyAccessToken(true);
    return spotifyRequest(url, false);
  }
  const data = await response.json();
  if (!response.ok) {
    const message = data.error && data.error.message ? data.error.message : `Spotify request failed (${response.status}).`;
    throw new Error(message);
  }
  return data;
}

function getYearQuery() {
  const from = elements.yearFrom.value.trim();
  const to = elements.yearTo.value.trim();
  if (from && to) return `year:${from}-${to}`;
  if (from) return `year:${from}-2026`;
  if (to) return `year:1950-${to}`;
  return "year:1950-2026";
}

function getSpotifyArtistSearch(artist) {
  const search = elements.search.value.trim();
  return [`artist:"${artist.replace(/["\\]/g, "")}"`, getYearQuery(), search].filter(Boolean).join(" ");
}

async function searchSpotifyAlbums(query) {
  const params = new URLSearchParams({ q: query, type: "album", limit: "10" });
  const data = await spotifyRequest(`https://api.spotify.com/v1/search?${params}`);
  return (data.albums?.items || [])
    .filter((album) => album && album.id && album.name && album.artists?.length)
    .map((album) => {
      const artistNames = album.artists.map((artist) => artist.name).filter(Boolean);
      const artistName = artistNames.join(", ");
      const seed = albums.find((item) => artistNames.includes(item.artist));
      return {
        id: `spotify:${album.id}`,
        title: album.name,
        artist: artistName,
        year: Number.parseInt(album.release_date, 10) || 0,
        genre: "Spotify catalog",
        moods: [],
        related: seed ? seed.related : [],
        description: `${album.name} by ${artistName}, from Spotify’s catalog.`,
        imageUrl: album.images?.[0]?.url || "",
        spotifyUrl: album.external_urls?.spotify || `https://open.spotify.com/album/${album.id}`,
      };
    });
}

async function loadSpotifyCatalog(requestId) {
  if (!spotifyCatalogMode || showSavedOnly || selectedMoods.size > 0) return;
  elements.catalogStatus.textContent = "Searching Spotify’s catalog…";

  try {
    let results;
    const genre = getSelectedGenre();
    if (genre) {
      const cleanGenre = genre.replace(/["\\]/g, "");
      const artistFilter = elements.artist.value === "all" ? "" : ` artist:"${elements.artist.value.replace(/["\\]/g, "")}"`;
      const genreQuery = new URLSearchParams({
        q: `genre:"${cleanGenre}"${artistFilter}`,
        type: "artist",
        limit: "10",
      });
      const artistData = await spotifyRequest(`https://api.spotify.com/v1/search?${genreQuery}`);
      const matchingArtists = [...new Set((artistData.artists?.items || []).map((artist) => artist.name).filter(Boolean))]
        .filter((artist) => elements.artist.value === "all" || artist.toLowerCase() === elements.artist.value.toLowerCase())
        .slice(0, 5);
      const artistAlbums = await Promise.all(matchingArtists.map((artist) => searchSpotifyAlbums(getSpotifyArtistSearch(artist))));
      results = artistAlbums.flat();
    } else {
      const query = elements.artist.value !== "all"
        ? getSpotifyArtistSearch(elements.artist.value)
        : [elements.search.value.trim(), getYearQuery()].filter(Boolean).join(" ");
      results = await searchSpotifyAlbums(query);
    }

    if (requestId !== spotifySearchRequest) return;
    spotifyAlbums = results.filter((album, index, all) => all.findIndex((candidate) => candidate.id === album.id) === index).slice(0, 20);
    render();
    if (spotifyAlbums.length === 0) {
      elements.catalogStatus.textContent = getSelectedGenre()
        ? "Spotify didn’t return matching artists for that genre. Try a broader genre or switch back to the curated crate."
        : "Spotify didn’t find matching albums. Try a broader search or release-year range.";
    }
  } catch (error) {
    if (requestId !== spotifySearchRequest) return;
    elements.catalogStatus.textContent = `Spotify search failed: ${error.message}`;
    if (error.message.includes("session expired") || error.message.includes("connect to Spotify")) {
      spotifyCatalogMode = false;
      updateSavedState();
      render();
      showSpotifyError(error.message);
      elements.spotifyDialog.showModal();
    }
  }
}

function scheduleSpotifySearch() {
  if (!spotifyCatalogMode || showSavedOnly || selectedMoods.size > 0) return;
  window.clearTimeout(spotifySearchTimer);
  spotifySearchTimer = window.setTimeout(() => {
    spotifySearchRequest += 1;
    loadSpotifyCatalog(spotifySearchRequest);
  }, 350);
}

async function handleSpotifyCallback() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const error = params.get("error");
  if (!code && !error) return;

  const expectedState = sessionStorage.getItem("needle-drop-spotify-state");
  const actualState = params.get("state");
  const verifier = sessionStorage.getItem("needle-drop-spotify-verifier");
  sessionStorage.removeItem("needle-drop-spotify-state");
  sessionStorage.removeItem("needle-drop-spotify-verifier");
  clearSpotifyCallback();

  if (error) throw new Error(error === "access_denied" ? "Spotify access was declined." : `Spotify sign-in failed: ${error}`);
  if (!expectedState || actualState !== expectedState) throw new Error("Spotify sign-in could not be verified. Please try connecting again.");
  if (!verifier) throw new Error("Spotify sign-in expired before it could finish. Please try connecting again.");

  await exchangeSpotifyCode(code, verifier);
  spotifyCatalogMode = true;
  updateSavedState();
  render();
  scheduleSpotifySearch();
}

function restoreSpotifySession() {
  try {
    const stored = JSON.parse(sessionStorage.getItem(spotifyTokenStorageKey) || "null");
    if (stored && stored.accessToken && stored.expiresAt && stored.refreshToken) {
      spotifyAccessToken = stored.accessToken;
      spotifyRefreshToken = stored.refreshToken;
      spotifyTokenExpiresAt = stored.expiresAt;
      spotifyCatalogMode = true;
    }
  } catch (error) {
    console.warn("Could not restore the Spotify session.", error);
  }
}

elements.spotifyOpen.addEventListener("click", () => {
  clearSpotifyError();
  elements.spotifyDialog.showModal();
});
document.querySelector("#spotify-dialog-close").addEventListener("click", () => elements.spotifyDialog.close());
elements.spotifyDialog.addEventListener("click", (event) => {
  if (event.target === elements.spotifyDialog) elements.spotifyDialog.close();
});
document.querySelector("#spotify-connect").addEventListener("click", () => {
  connectToSpotify().catch((error) => showSpotifyError(error.message));
});
elements.spotifyDisconnect.addEventListener("click", () => {
  window.clearTimeout(spotifySearchTimer);
  spotifySearchRequest += 1;
  spotifyAccessToken = "";
  spotifyRefreshToken = "";
  spotifyTokenExpiresAt = 0;
  spotifyCatalogMode = false;
  spotifyAlbums = [];
  let storageError = "";
  try {
    sessionStorage.removeItem(spotifyTokenStorageKey);
    localStorage.removeItem(spotifyClientStorageKey);
  } catch (error) {
    storageError = error.message;
    console.error("Could not completely clear Spotify connection data.", error);
  }
  elements.spotifyClientId.value = "";
  render();
  updateSavedState();
  elements.spotifyDialog.close();
  if (storageError) {
    showSpotifyError(`Could not completely clear Spotify connection data: ${storageError}`);
    elements.spotifyDialog.showModal();
  }
});

for (const control of [elements.genre, elements.artist, elements.yearFrom, elements.yearTo, elements.search, elements.sort, elements.customGenre]) {
  control.addEventListener(control === elements.search || control === elements.yearFrom || control === elements.yearTo ? "input" : "change", () => {
    if (control === elements.genre) {
      elements.customGenre.hidden = control.value !== "custom";
      if (control.value !== "custom") elements.customGenre.value = "";
    }
    render();
    scheduleSpotifySearch();
  });
}
elements.customGenre.addEventListener("input", () => {
  render();
  scheduleSpotifySearch();
});

elements.moods.addEventListener("click", (event) => {
  const button = event.target.closest(".mood-chip");
  if (!button) return;
  if (selectedMoods.has(button.dataset.mood)) selectedMoods.delete(button.dataset.mood);
  else selectedMoods.add(button.dataset.mood);
  updateMoodState();
  render();
  scheduleSpotifySearch();
});

document.querySelector("#clear-filters").addEventListener("click", clearFilters);
document.querySelector("#empty-clear").addEventListener("click", clearFilters);
elements.savedToggle.addEventListener("click", () => {
  showSavedOnly = !showSavedOnly;
  updateSavedState();
  render();
  scheduleSpotifySearch();
});
document.querySelector("#surprise-button").addEventListener("click", () => {
  const options = currentResults.length ? currentResults : albums;
  openAlbum(options[Math.floor(Math.random() * options.length)]);
});
document.querySelector("#dialog-close").addEventListener("click", () => elements.dialog.close());
elements.dialog.addEventListener("click", (event) => {
  if (event.target === elements.dialog) elements.dialog.close();
});

restoreSpotifySession();
updateSavedState();
render();
if (spotifyCatalogMode) scheduleSpotifySearch();
handleSpotifyCallback().catch((error) => {
  showSpotifyError(error.message);
  elements.spotifyDialog.showModal();
});
