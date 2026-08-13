const DATA_URL = new URL("./data/proverbs.json?v=20260813-3", import.meta.url);
const PAGE_SIZE = 30;

const cultureMeta = {
  France: { mark: "FR", label: "Français" },
  Anglais: { mark: "EN", label: "Anglais" },
  Hébreu: { mark: "עב", label: "Hébreu" },
  "Grec ancien": { mark: "ΕΛ", label: "Grec ancien" },
  Latin: { mark: "LA", label: "Latin" },
  Chine: { mark: "中", label: "Chine" },
  Inde: { mark: "अ", label: "Inde" },
  Monde: { mark: "∞", label: "Monde" },
};

const sourceLabels = {
  text: "Texte identifié",
  lexicographic: "Attestation",
  derived: "Formule dérivée",
  traditional: "Tradition orale",
  attributed: "Attribution",
};

const state = {
  proverbs: [],
  summary: {},
  culture: "all",
  source: "all",
  query: "",
  favoritesOnly: false,
  visible: PAGE_SIZE,
  favorites: new Set(JSON.parse(localStorage.getItem("sagesse-favorites") || "[]")),
};

const elements = {
  proverbCount: document.querySelector("#proverbCount"),
  languageCount: document.querySelector("#languageCount"),
  cultureGrid: document.querySelector("#cultureGrid"),
  filterRow: document.querySelector("#filterRow"),
  searchInput: document.querySelector("#searchInput"),
  sourceSelect: document.querySelector("#sourceSelect"),
  resultCount: document.querySelector("#resultCount"),
  activeFilter: document.querySelector("#activeFilter"),
  cardGrid: document.querySelector("#cardGrid"),
  cardTemplate: document.querySelector("#cardTemplate"),
  loadMoreWrap: document.querySelector("#loadMoreWrap"),
  loadMoreButton: document.querySelector("#loadMoreButton"),
  visibleCount: document.querySelector("#visibleCount"),
  emptyState: document.querySelector("#emptyState"),
  favoritesButton: document.querySelector("#favoritesButton"),
  favoritesCount: document.querySelector("#favoritesCount"),
  randomButton: document.querySelector("#randomButton"),
  dialog: document.querySelector("#detailDialog"),
  dialogContent: document.querySelector("#dialogContent"),
  dialogClose: document.querySelector("#dialogClose"),
};

const normalize = (value = "") => value
  .normalize("NFKD")
  .replace(/\p{M}/gu, "")
  .toLocaleLowerCase("fr")
  .replace(/[’'`´]/g, " ")
  .replace(/[^\p{L}\p{N}]+/gu, " ")
  .trim();

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const safeExternalUrl = (value) => {
  if (!value) return null;
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
};

const cultureCounts = () => Object.keys(cultureMeta).map((culture) => ({
  culture,
  count: state.proverbs.filter((entry) => entry.culture === culture).length,
  ...cultureMeta[culture],
})).filter((entry) => entry.count > 0);

const filteredProverbs = () => {
  const query = normalize(state.query);
  return state.proverbs.filter((entry) => {
    if (state.culture !== "all" && entry.culture !== state.culture) return false;
    if (state.favoritesOnly && !state.favorites.has(entry.id)) return false;
    if (state.source === "text" && entry.sourceKind !== "text") return false;
    if (state.source === "linked" && !entry.sourceUrl) return false;
    if (state.source === "traditional" && entry.sourceKind !== "traditional") return false;
    if (query && !entry.searchText.includes(query)) return false;
    return true;
  });
};

const saveFavorites = () => {
  localStorage.setItem("sagesse-favorites", JSON.stringify([...state.favorites]));
  elements.favoritesCount.textContent = state.favorites.size;
};

const toggleFavorite = (id) => {
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  saveFavorites();
  renderCards();
};

const copyText = async (entry, button) => {
  const lines = [entry.original];
  if (entry.french && entry.french !== entry.original) lines.push(entry.french);
  lines.push(`— ${entry.source}`);
  const text = lines.join("\n");
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.append(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  const original = button.textContent;
  button.textContent = "Copié";
  window.setTimeout(() => { button.textContent = original; }, 1200);
};

const showDetails = (entry) => {
  const sourceUrl = safeExternalUrl(entry.sourceUrl);
  elements.dialogContent.innerHTML = `
    <div class="dialog-body">
      <p class="dialog-meta">${escapeHtml(entry.place)} · ${escapeHtml(sourceLabels[entry.sourceKind] || "Provenance")}</p>
      <h2 class="dialog-original" id="dialogTitle" lang="${escapeHtml(entry.lang || "")}" dir="${entry.rtl ? "rtl" : "ltr"}">${escapeHtml(entry.original)}</h2>
      ${entry.transliteration ? `<p class="dialog-transliteration">${escapeHtml(entry.transliteration)}</p>` : ""}
      <p class="dialog-french">${escapeHtml(entry.french)}</p>
      <p class="dialog-meaning">${escapeHtml(entry.meaning)}</p>
      <div class="dialog-source-box">
        <h4>Provenance</h4>
        <p>${escapeHtml(entry.source)}</p>
        <small>${escapeHtml(entry.sourceNote)}</small>
        ${sourceUrl ? `<a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">Consulter la source ↗</a>` : ""}
      </div>
    </div>`;
  elements.dialog.showModal();
};

const buildCultureButtons = () => {
  const counts = cultureCounts();
  elements.cultureGrid.replaceChildren(...counts.map(({ culture, count, mark, label }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "culture-button";
    button.innerHTML = `
      <span class="culture-mark">${escapeHtml(mark)}</span>
      <span class="culture-arrow" aria-hidden="true">↘</span>
      <span class="culture-name">${escapeHtml(label)}</span>
      <span class="culture-count">${count} entrées</span>`;
    button.addEventListener("click", () => {
      state.culture = culture;
      state.favoritesOnly = false;
      state.visible = PAGE_SIZE;
      syncControls();
      renderCards();
      document.querySelector("#collection").scrollIntoView({ behavior: "smooth" });
    });
    return button;
  }));

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = "filter-button";
  allButton.dataset.culture = "all";
  allButton.textContent = "Tous";
  allButton.addEventListener("click", () => setCulture("all"));

  const buttons = counts.map(({ culture, label }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.dataset.culture = culture;
    button.textContent = label;
    button.addEventListener("click", () => setCulture(culture));
    return button;
  });
  elements.filterRow.replaceChildren(allButton, ...buttons);
};

const setCulture = (culture) => {
  state.culture = culture;
  state.favoritesOnly = false;
  state.visible = PAGE_SIZE;
  syncControls();
  renderCards();
};

const syncControls = () => {
  elements.filterRow.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-pressed", String(!state.favoritesOnly && button.dataset.culture === state.culture));
  });
  elements.favoritesButton.setAttribute("aria-pressed", String(state.favoritesOnly));
};

const createCard = (entry, index) => {
  const fragment = elements.cardTemplate.content.cloneNode(true);
  const article = fragment.querySelector("article");
  article.id = `proverbe-${entry.id}`;
  fragment.querySelector(".card-place").textContent = entry.place;
  fragment.querySelector(".card-mark").textContent = entry.mark;
  const badge = fragment.querySelector(".source-badge");
  badge.textContent = sourceLabels[entry.sourceKind] || "Provenance";
  badge.dataset.kind = entry.sourceKind;
  fragment.querySelector(".card-number").textContent = String(index + 1).padStart(3, "0");
  const original = fragment.querySelector(".card-original");
  original.textContent = entry.original;
  original.lang = entry.lang || "";
  original.dir = entry.rtl ? "rtl" : "ltr";
  const transliteration = fragment.querySelector(".card-transliteration");
  if (entry.transliteration) {
    transliteration.hidden = false;
    transliteration.querySelector("b").textContent = entry.transliteration;
  }
  fragment.querySelector(".card-translation").textContent = entry.french;
  fragment.querySelector(".card-source").textContent = entry.source;
  const tags = fragment.querySelector(".mini-tags");
  tags.replaceChildren(...entry.tags.map((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    return span;
  }));
  fragment.querySelector(".details-button").addEventListener("click", () => showDetails(entry));
  const copyButton = fragment.querySelector(".copy-button");
  copyButton.addEventListener("click", () => copyText(entry, copyButton));
  const favoriteButton = fragment.querySelector(".favorite-card-button");
  const isFavorite = state.favorites.has(entry.id);
  favoriteButton.setAttribute("aria-pressed", String(isFavorite));
  favoriteButton.setAttribute("aria-label", isFavorite ? "Retirer des favoris" : "Ajouter aux favoris");
  favoriteButton.textContent = isFavorite ? "♥" : "♡";
  favoriteButton.addEventListener("click", () => toggleFavorite(entry.id));
  return fragment;
};

const renderCards = () => {
  const filtered = filteredProverbs();
  const visible = filtered.slice(0, state.visible);
  elements.cardGrid.replaceChildren(...visible.map(createCard));
  elements.resultCount.textContent = `${filtered.length} ${filtered.length > 1 ? "entrées" : "entrée"}`;
  const labels = [];
  if (state.favoritesOnly) labels.push("Favoris");
  else if (state.culture !== "all") labels.push(cultureMeta[state.culture]?.label || state.culture);
  else labels.push("Toutes les traditions");
  if (state.source !== "all") labels.push(elements.sourceSelect.selectedOptions[0].textContent);
  if (state.query.trim()) labels.push(`« ${state.query.trim()} »`);
  elements.activeFilter.textContent = labels.join(" · ");
  elements.visibleCount.textContent = `${visible.length} sur ${filtered.length}`;
  elements.loadMoreWrap.hidden = visible.length >= filtered.length || filtered.length === 0;
  elements.emptyState.hidden = filtered.length !== 0;
  saveFavorites();
};

const bindEvents = () => {
  elements.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    state.visible = PAGE_SIZE;
    renderCards();
  });
  elements.sourceSelect.addEventListener("change", (event) => {
    state.source = event.target.value;
    state.visible = PAGE_SIZE;
    renderCards();
  });
  elements.loadMoreButton.addEventListener("click", () => {
    state.visible += PAGE_SIZE;
    renderCards();
  });
  elements.favoritesButton.addEventListener("click", () => {
    state.favoritesOnly = !state.favoritesOnly;
    state.culture = "all";
    state.visible = PAGE_SIZE;
    syncControls();
    renderCards();
    document.querySelector("#collection").scrollIntoView({ behavior: "smooth" });
  });
  elements.randomButton.addEventListener("click", () => {
    const pool = filteredProverbs().length ? filteredProverbs() : state.proverbs;
    showDetails(pool[Math.floor(Math.random() * pool.length)]);
  });
  elements.dialogClose.addEventListener("click", () => elements.dialog.close());
  elements.dialog.addEventListener("click", (event) => {
    if (event.target === elements.dialog) elements.dialog.close();
  });
};

const initialize = async () => {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    state.proverbs = payload.proverbs;
    state.summary = payload.summary;
    elements.proverbCount.textContent = payload.summary.count;
    elements.languageCount.textContent = payload.summary.languageCount;
    buildCultureButtons();
    bindEvents();
    syncControls();
    renderCards();
  } catch (error) {
    console.error("Impossible de charger le corpus", error);
    elements.emptyState.hidden = false;
    elements.emptyState.textContent = "Le corpus n’a pas pu être chargé. Rechargez la page dans un instant.";
  }
};

initialize();
