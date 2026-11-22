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
const musicBrainzApiBase = (window.SPINLIST_MUSICBRAINZ_API || "").trim().replace(/\/+$/, "");
const elements = {
  genre: document.querySelector("#genre-filter"),
  genreChoices: document.querySelector("#genre-choices"),
  genreCount: document.querySelector("#genre-count"),
  genreSearch: document.querySelector("#genre-search"),
  genreNote: document.querySelector("#genre-note"),
  customGenre: document.querySelector("#custom-genre"),
  refinements: document.querySelector("#refinements"),
  artist: document.querySelector("#artist-filter"),
  yearFrom: document.querySelector("#year-from"),
  yearTo: document.querySelector("#year-to"),
  search: document.querySelector("#search-input"),
  moods: document.querySelector("#mood-chips"),
  grid: document.querySelector("#album-grid"),
  count: document.querySelector("#results-count"),
  pickCaption: document.querySelector("#pick-caption"),
  surpriseButton: document.querySelector("#surprise-button"),
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
const localGenreOptions = [...new Set(albums.map((album) => album.genre))].sort((a, b) => a.localeCompare(b));
let genreOptions = [...localGenreOptions];
const genreCounts = new Map(genreOptions.map((genre) => [genre, albums.filter((album) => album.genre === genre).length]));
let savedAlbums = readSavedAlbums();
let savedAlbumDetails = readSavedAlbumDetails();
savedAlbums = new Set([...savedAlbums].filter((id) => albums.some((album) => album.id === id) || savedAlbumDetails.has(id)));
let showSavedOnly = false;
let currentResults = [];
let pickedAlbum = null;
let spotifyAccessToken = "";
let spotifyTokenExpiresAt = 0;
let spotifyRefreshToken = "";
let spotifyAlbums = [];
let spotifyCatalogMode = false;
let spotifySearchTimer;
let spotifySearchRequest = 0;
let musicBrainzAlbums = [];
let musicBrainzGenresLoaded = false;
let musicBrainzCatalogLoaded = false;
let musicBrainzRandomMode = false;
let musicBrainzSearchPending = false;
let musicBrainzGenreError = "";
let musicBrainzStatusMessage = "";
let musicBrainzSearchTimer;
let musicBrainzSearchRequest = 0;

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

function populateGenreSelect(options, selectedGenre = "") {
  elements.genre.replaceChildren();
  const anyGenre = document.createElement("option");
  anyGenre.value = "all";
  anyGenre.textContent = "Any genre";
  elements.genre.append(anyGenre);
  populateSelect(elements.genre, options, "Any genre");
  const customGenreOption = document.createElement("option");
  customGenreOption.value = "custom";
  customGenreOption.textContent = "Other genre…";
  elements.genre.append(customGenreOption);

  const exactGenre = options.find((genre) => genre.toLowerCase() === selectedGenre.toLowerCase());
  if (exactGenre) {
    elements.genre.value = exactGenre;
    elements.customGenre.value = "";
    elements.customGenre.hidden = true;
  } else if (selectedGenre) {
    elements.genre.value = "custom";
    elements.customGenre.value = selectedGenre;
    elements.customGenre.hidden = false;
  } else {
    elements.genre.value = "all";
    elements.customGenre.value = "";
    elements.customGenre.hidden = true;
  }
}

populateGenreSelect(genreOptions);
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

function setGenreOptions(options) {
  const selectedGenre = getSelectedGenre();
  genreOptions = [...new Set(options.filter((genre) => typeof genre === "string" && genre.trim()))]
    .map((genre) => genre.trim())
    .sort((a, b) => a.localeCompare(b));
  populateGenreSelect(genreOptions, selectedGenre);
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

function renderGenreChoices() {
  const searchTerm = elements.genreSearch.value.trim().toLowerCase();
  const matchingGenres = genreOptions.filter((genre) => genre.toLowerCase().includes(searchTerm));
  const preferredGenres = musicBrainzGenresLoaded
    ? localGenreOptions.filter((genre) => genreOptions.some((option) => option.toLowerCase() === genre.toLowerCase()))
    : genreOptions;
  const visibleGenres = (searchTerm ? matchingGenres : preferredGenres).slice(0, 40);
  const choices = [
    { value: "all", label: "Any genre", count: null },
    ...visibleGenres.map((genre) => ({ value: genre, label: genre, count: genreCounts.get(genre) })),
    { value: "custom", label: "Other genre…", count: null },
  ];
  elements.genreCount.textContent = `${genreOptions.length.toLocaleString()} GENRES`;
  elements.genreChoices.replaceChildren();
  if (musicBrainzGenresLoaded) {
    elements.genreNote.textContent = searchTerm
      ? matchingGenres.length > visibleGenres.length
        ? `Showing 40 of ${matchingGenres.length.toLocaleString()} matches. Refine your search.`
        : `${matchingGenres.length.toLocaleString()} matching MusicBrainz genres.`
      : `Search all ${genreOptions.length.toLocaleString()} MusicBrainz genres, or choose a starting genre.`;
  } else if (musicBrainzGenreError) {
    elements.genreNote.textContent = `Could not load MusicBrainz genres: ${musicBrainzGenreError}`;
  } else if (musicBrainzApiBase) {
    elements.genreNote.textContent = "Loading the MusicBrainz genre list…";
  } else {
    elements.genreNote.textContent = "Set up the MusicBrainz Worker to browse the full genre list. Curated genres are available now.";
  }

  for (const choice of choices) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "genre-choice";
    button.dataset.genre = choice.value;
    button.setAttribute("aria-pressed", String(elements.genre.value === choice.value));
    const label = document.createElement("span");
    label.textContent = choice.label;
    button.append(label);
    if (choice.count !== null && choice.count !== undefined) {
      const count = document.createElement("span");
      count.className = "genre-choice-count";
      count.textContent = String(choice.count).padStart(2, "0");
      button.append(count);
    }
    button.addEventListener("click", () => {
      elements.genre.value = choice.value;
      elements.customGenre.hidden = choice.value !== "custom";
      if (choice.value !== "custom") elements.customGenre.value = "";
      else elements.refinements.open = true;
      pickedAlbum = null;
      render();
      scheduleSpotifySearch();
      scheduleMusicBrainzSearch();
      if (choice.value === "custom") elements.customGenre.focus();
    });
    elements.genreChoices.append(button);
  }
}

function getFilteredAlbums(source = albums) {
  const search = elements.search.value.trim().toLowerCase();
  const genre = getSelectedGenre();
  const artist = elements.artist.value;
  const from = elements.yearFrom.value === "" ? -Infinity : Number(elements.yearFrom.value);
  const to = elements.yearTo.value === "" ? Infinity : Number(elements.yearTo.value);

  return source.filter((album) => {
    const searchable = [album.title, album.artist, album.genre, ...album.related].join(" ").toLowerCase();
    const matchesSearch = !search || source === spotifyAlbums || searchable.includes(search);
    const matchesGenre = source === spotifyAlbums || source === musicBrainzAlbums || !genre || album.genre === genre;
    const matchesArtist = artist === "all" || album.artist === artist || album.related.includes(artist);
    const matchesYears = album.year
      ? album.year >= from && album.year <= to
      : from === -Infinity && to === Infinity;
    const matchesMoods = [...selectedMoods].every((mood) => album.moods.includes(mood));
    const matchesSaved = !showSavedOnly || savedAlbums.has(album.id);
    return matchesSearch && matchesGenre && matchesArtist && matchesYears && matchesMoods && matchesSaved;
  });
}

function renderGeneratedCover(cover, album, albumIndex) {
  cover.className = `cover-art cover--${(Math.max(albumIndex, 0) % 8) + 1}`;
  cover.replaceChildren();
  const tone = document.createElement("span");
  tone.className = "cover-tone";
  const geometry = document.createElement("span");
  geometry.className = "cover-geometry";
  const topline = document.createElement("span");
  topline.className = "cover-topline";
  topline.textContent = `SPINLIST  /  ${album.year || "YEAR UNKNOWN"}`;
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
    image.addEventListener("error", () => {
      renderGeneratedCover(cover, album, albumIndex);
      cover.closest(".cover-button")?.classList.remove("spotify-cover-button");
    }, { once: true });
    cover.append(image);
    return cover;
  }
  renderGeneratedCover(cover, album, albumIndex);
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
  year.textContent = album.year || "YEAR UNKNOWN";
  const mood = document.createElement("span");
  mood.textContent = (album.moods[0] || (album.id.startsWith("musicbrainz:") ? "MUSICBRAINZ PICK" : "SPOTIFY PICK")).toUpperCase();
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
      scheduleMusicBrainzSearch();
    });
    chip.append(clear);
    elements.activeFilters.append(chip);
  }
}

async function musicBrainzRequest(path) {
  if (!musicBrainzApiBase) throw new Error("The MusicBrainz Worker is not configured.");
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 20_000);
  let response;
  try {
    response = await fetch(`${musicBrainzApiBase}${path}`, { signal: controller.signal });
  } catch (error) {
    if (error.name === "AbortError") throw new Error("MusicBrainz took too long to respond. Please try again.");
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || `MusicBrainz request failed (${response.status}).`);
  return data;
}

async function loadMusicBrainzGenres() {
  if (!musicBrainzApiBase) return;
  elements.genreNote.textContent = "Loading the MusicBrainz genre list…";
  try {
    const data = await musicBrainzRequest("/genres");
    if (!Array.isArray(data.genres) || data.genres.length === 0) {
      throw new Error("The MusicBrainz Worker returned no genres.");
    }
    setGenreOptions(data.genres);
    musicBrainzGenresLoaded = true;
    musicBrainzGenreError = "";
    render();
    scheduleMusicBrainzSearch();
  } catch (error) {
    console.error("Could not load MusicBrainz genres.", error);
    musicBrainzGenreError = error.message;
    musicBrainzStatusMessage = `Could not load MusicBrainz genres: ${error.message}`;
    render();
  }
}

function mapMusicBrainzAlbums(data, genre) {
  return (data.albums || [])
    .filter((album) => album && album.id && album.title && album.artist)
    .map((album) => {
      const year = Number.parseInt(album.firstReleaseDate, 10) || null;
      const seed = albums.find((item) => item.artist.toLowerCase() === album.artist.toLowerCase());
      return {
        id: `musicbrainz:${album.id}`,
        title: album.title,
        artist: album.artist,
        year,
        genre: genre || "Various genres",
        moods: seed ? seed.moods : [],
        related: seed ? seed.related : [],
        description: `${album.title} by ${album.artist}, listed in MusicBrainz.`,
        imageUrl: `https://coverartarchive.org/release-group/${encodeURIComponent(album.id)}/front-250`,
        musicBrainzUrl: `https://musicbrainz.org/release-group/${encodeURIComponent(album.id)}`,
        spotifyUrl: `https://open.spotify.com/search/${encodeURIComponent(`${album.artist} ${album.title}`)}`,
      };
    });
}

async function loadMusicBrainzCatalog(genre, requestId, randomMode) {
  try {
    const params = new URLSearchParams();
    if (genre) params.set("genre", genre);
    const query = params.toString();
    const data = await musicBrainzRequest(`${randomMode ? "/random-album" : "/albums"}${query ? `?${query}` : ""}`);
    if (requestId !== musicBrainzSearchRequest) return;
    musicBrainzSearchPending = false;
    musicBrainzAlbums = mapMusicBrainzAlbums(randomMode ? { albums: data.album ? [data.album] : [] } : data, genre);
    musicBrainzCatalogLoaded = true;
    musicBrainzStatusMessage = musicBrainzAlbums.length
      ? randomMode
        ? `Randomly picked from ${Number(data.count || 0).toLocaleString()} MusicBrainz albums${genre ? ` tagged ${genre}` : " across all genres"}.`
        : genre
          ? `Found ${musicBrainzAlbums.length.toLocaleString()} MusicBrainz albums for ${genre} (${Number(data.count || musicBrainzAlbums.length).toLocaleString()} matches).`
          : `Loaded ${musicBrainzAlbums.length.toLocaleString()} albums across genres from ${Number(data.count || musicBrainzAlbums.length).toLocaleString()} MusicBrainz album groups.`
      : `No MusicBrainz albums${genre ? ` matched ${genre}` : " were found"}; showing curated picks.`;
    render();
  } catch (error) {
    if (requestId !== musicBrainzSearchRequest) return;
    musicBrainzSearchPending = false;
    console.error("Could not search MusicBrainz albums.", error);
    musicBrainzAlbums = [];
    musicBrainzCatalogLoaded = false;
    musicBrainzStatusMessage = `MusicBrainz search failed: ${error.message} Showing curated picks instead.`;
    render();
  }
}

function scheduleMusicBrainzSearch() {
  window.clearTimeout(musicBrainzSearchTimer);
  const requestId = ++musicBrainzSearchRequest;
  const genre = getSelectedGenre();
  musicBrainzRandomMode = Boolean(musicBrainzApiBase)
    && !showSavedOnly
    && selectedMoods.size === 0
    && elements.artist.value === "all"
    && !elements.yearFrom.value
    && !elements.yearTo.value
    && !elements.search.value.trim();
  musicBrainzAlbums = [];
  musicBrainzCatalogLoaded = false;
  musicBrainzSearchPending = false;
  musicBrainzStatusMessage = "";
  if (!musicBrainzApiBase || showSavedOnly || selectedMoods.size > 0) {
    render();
    return;
  }
  musicBrainzStatusMessage = musicBrainzRandomMode
    ? `Finding a random MusicBrainz album${genre ? ` tagged ${genre}` : " across all genres"}…`
    : genre
      ? `Searching MusicBrainz for ${genre} albums…`
      : "Searching MusicBrainz albums across all genres…";
  musicBrainzSearchPending = true;
  render();
  musicBrainzSearchTimer = window.setTimeout(() => loadMusicBrainzCatalog(genre, requestId, musicBrainzRandomMode), 350);
}

function render() {
  const selectedGenre = getSelectedGenre();
  let isMusicBrainzSearch = Boolean(musicBrainzApiBase && !showSavedOnly && selectedMoods.size === 0 && musicBrainzCatalogLoaded && musicBrainzAlbums.length > 0);
  let isSpotifySearch = !isMusicBrainzSearch
    && spotifyCatalogMode
    && !musicBrainzApiBase
    && !showSavedOnly
    && selectedMoods.size === 0
    && spotifyAlbums.length > 0;
  const source = isMusicBrainzSearch
    ? musicBrainzAlbums
    : isSpotifySearch
      ? spotifyAlbums
    : showSavedOnly
      ? [...albums, ...savedAlbumDetails.values()].filter((album, index, all) => all.findIndex((item) => item.id === album.id) === index)
      : albums;
  currentResults = getFilteredAlbums(source);
  if (isMusicBrainzSearch && currentResults.length === 0) {
    isMusicBrainzSearch = false;
    currentResults = getFilteredAlbums(albums);
    musicBrainzStatusMessage = "No MusicBrainz albums match those refinements. Showing matching curated picks instead.";
  }
  if (isSpotifySearch && currentResults.length === 0) {
    isSpotifySearch = false;
    currentResults = getFilteredAlbums(albums);
  }
  if (!currentResults.some((album) => album.id === pickedAlbum?.id)) {
    pickedAlbum = currentResults.length ? currentResults[Math.floor(Math.random() * currentResults.length)] : null;
  }
  const fragment = document.createDocumentFragment();
  if (pickedAlbum) fragment.append(renderCard(pickedAlbum));
  elements.grid.replaceChildren(fragment);
  elements.grid.hidden = !pickedAlbum;
  elements.emptyState.hidden = Boolean(pickedAlbum);
  elements.count.textContent = `${String(currentResults.length).padStart(2, "0")} ${showSavedOnly ? "SAVED ALBUMS" : isMusicBrainzSearch ? "MUSICBRAINZ ALBUMS" : spotifyCatalogMode && isSpotifySearch ? "SPOTIFY ALBUMS" : "ALBUMS TO PICK FROM"}`;
  elements.pickCaption.textContent = pickedAlbum
    ? `${pickedAlbum.genre.toUpperCase()}  ·  ${pickedAlbum.year || "YEAR UNKNOWN"}  ·  PICKED AT RANDOM`
    : "No albums match these filters.";
  elements.surpriseButton.disabled = musicBrainzRandomMode && musicBrainzSearchPending
    ? true
    : musicBrainzRandomMode && isMusicBrainzSearch
      ? false
      : currentResults.length < 2;
  renderGenreChoices();
  if (musicBrainzStatusMessage) {
    elements.catalogStatus.textContent = musicBrainzStatusMessage;
  } else if (musicBrainzApiBase && musicBrainzGenresLoaded && !showSavedOnly && !selectedGenre) {
    elements.catalogStatus.textContent = `Browsing MusicBrainz across all genres. Search ${genreOptions.length.toLocaleString()} genres to narrow the crate.`;
  } else if (selectedGenre && !musicBrainzApiBase && isSpotifySearch && !showSavedOnly) {
    elements.catalogStatus.textContent = "Browsing Spotify’s catalog. Mood and similar-artist discovery use Spinlist’s curated picks.";
  } else if (selectedGenre && !musicBrainzApiBase && !showSavedOnly) {
    elements.catalogStatus.textContent = "MusicBrainz Worker is not configured. Showing the curated crate.";
  } else if (musicBrainzApiBase && !showSavedOnly && selectedMoods.size === 0) {
    elements.catalogStatus.textContent = "Searching MusicBrainz…";
  } else if (spotifyCatalogMode && selectedMoods.size > 0 && !showSavedOnly) {
    elements.catalogStatus.textContent = "Mood tags are editorial, not part of Spotify’s catalog. Showing curated picks for your selected mood.";
  } else if (musicBrainzApiBase && selectedMoods.size > 0 && !showSavedOnly) {
    elements.catalogStatus.textContent = "Mood tags are editorial. Showing curated picks for your selected mood.";
  } else if (isMusicBrainzSearch) {
    elements.catalogStatus.textContent = "Album data by MusicBrainz; cover images by Cover Art Archive.";
  } else if (spotifyCatalogMode && !showSavedOnly && isSpotifySearch) {
    elements.catalogStatus.textContent = "Browsing Spotify’s catalog. Mood and similar-artist discovery use Spinlist’s curated picks.";
  } else if (spotifyCatalogMode && !showSavedOnly) {
    elements.catalogStatus.textContent = "No matching Spotify albums. Showing matching picks from Spinlist’s curated crate.";
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
  year.textContent = `${album.year || "YEAR UNKNOWN"}${album.moods.length ? `  ·  ${album.moods.join("  /  ").toUpperCase()}` : ""}`;
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
  elements.genreSearch.value = "";
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
  scheduleSpotifySearch();
  scheduleMusicBrainzSearch();
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

function getSpotifyMarket() {
  const country = (navigator.language || "").match(/-([a-z]{2})$/i)?.[1];
  return country ? country.toUpperCase() : "US";
}

async function searchSpotifyAlbums(query) {
  const params = new URLSearchParams({ q: query, type: "album", limit: "10", market: getSpotifyMarket() });
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
        genre: getSelectedGenre() || "Spotify catalog",
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
        market: getSpotifyMarket(),
      });
      const artistData = await spotifyRequest(`https://api.spotify.com/v1/search?${genreQuery}`);
      const spotifyArtists = (artistData.artists?.items || []).map((artist) => artist.name).filter(Boolean);
      const curatedArtists = albums
        .filter((album) => album.genre.toLowerCase() === genre.toLowerCase())
        .flatMap((album) => [album.artist, ...album.related]);
      const matchingArtists = [...new Set([...spotifyArtists, ...curatedArtists])]
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
        ? "Spotify didn’t find albums for that genre. Showing matching picks from Spinlist’s curated crate instead."
        : "Spotify didn’t find matching albums. Showing matching picks from Spinlist’s curated crate instead.";
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
  if (!spotifyCatalogMode) return;
  if (musicBrainzApiBase) {
    window.clearTimeout(spotifySearchTimer);
    spotifySearchRequest += 1;
    return;
  }
  if (showSavedOnly || selectedMoods.size > 0) return;
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

for (const control of [elements.genre, elements.artist, elements.yearFrom, elements.yearTo, elements.search, elements.customGenre]) {
  control.addEventListener(control === elements.search || control === elements.yearFrom || control === elements.yearTo ? "input" : "change", () => {
    if (control === elements.genre) {
      elements.customGenre.hidden = control.value !== "custom";
      if (control.value !== "custom") elements.customGenre.value = "";
    }
    render();
    scheduleSpotifySearch();
    scheduleMusicBrainzSearch();
  });
}
elements.genreSearch.addEventListener("input", renderGenreChoices);
elements.customGenre.addEventListener("input", () => {
  render();
  scheduleSpotifySearch();
  scheduleMusicBrainzSearch();
});

elements.moods.addEventListener("click", (event) => {
  const button = event.target.closest(".mood-chip");
  if (!button) return;
  if (selectedMoods.has(button.dataset.mood)) selectedMoods.delete(button.dataset.mood);
  else selectedMoods.add(button.dataset.mood);
  updateMoodState();
  render();
  scheduleSpotifySearch();
  scheduleMusicBrainzSearch();
});

document.querySelector("#clear-filters").addEventListener("click", clearFilters);
document.querySelector("#empty-clear").addEventListener("click", clearFilters);
elements.savedToggle.addEventListener("click", () => {
  showSavedOnly = !showSavedOnly;
  updateSavedState();
  render();
  scheduleSpotifySearch();
  scheduleMusicBrainzSearch();
});
elements.surpriseButton.addEventListener("click", () => {
  if (musicBrainzRandomMode) {
    pickedAlbum = null;
    scheduleMusicBrainzSearch();
    return;
  }
  const options = currentResults.filter((album) => album.id !== pickedAlbum?.id);
  if (options.length) pickedAlbum = options[Math.floor(Math.random() * options.length)];
  else if (currentResults.length) pickedAlbum = currentResults[0];
  render();
});
document.querySelector("#dialog-close").addEventListener("click", () => elements.dialog.close());
elements.dialog.addEventListener("click", (event) => {
  if (event.target === elements.dialog) elements.dialog.close();
});

restoreSpotifySession();
updateSavedState();
render();
if (spotifyCatalogMode) scheduleSpotifySearch();
loadMusicBrainzGenres();
handleSpotifyCallback().catch((error) => {
  showSpotifyError(error.message);
  elements.spotifyDialog.showModal();
});
