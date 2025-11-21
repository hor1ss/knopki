const paletteCatalog = [
  {
    id: "aurora",
    name: "Aurora Drift",
    primary: "#7F7FD5",
    secondary: "#86A8E7",
    accent: "#91EAE4",
    text: "#F7FBFF",
    shadow: "rgba(108, 99, 255, 0.32)",
    glow: "rgba(145, 234, 228, 0.55)",
  },
  {
    id: "voltage",
    name: "Voltage Bloom",
    primary: "#FF6A88",
    secondary: "#FF9A8B",
    accent: "#FFD36E",
    text: "#FFF9F3",
    shadow: "rgba(255, 133, 136, 0.35)",
    glow: "rgba(255, 196, 111, 0.55)",
  },
  {
    id: "midnight",
    name: "Midnight Prism",
    primary: "#4776E6",
    secondary: "#8E54E9",
    accent: "#5EFCE8",
    text: "#F5F3FF",
    shadow: "rgba(79, 84, 217, 0.4)",
    glow: "rgba(94, 252, 232, 0.55)",
  },
  {
    id: "citrus",
    name: "Citrus Pop",
    primary: "#FAD961",
    secondary: "#F76B1C",
    accent: "#FFE985",
    text: "#2B190F",
    shadow: "rgba(247, 107, 28, 0.35)",
    glow: "rgba(255, 218, 121, 0.55)",
  },
  {
    id: "tide",
    name: "Tidal Bloom",
    primary: "#00C9FF",
    secondary: "#92FE9D",
    accent: "#F4FFFD",
    text: "#01302F",
    shadow: "rgba(0, 201, 255, 0.35)",
    glow: "rgba(146, 254, 157, 0.55)",
  },
  {
    id: "velvet",
    name: "Velvet Fog",
    primary: "#C779D0",
    secondary: "#4BC0C8",
    accent: "#FEAC5E",
    text: "#FFF6FF",
    shadow: "rgba(199, 121, 208, 0.4)",
    glow: "rgba(254, 172, 94, 0.45)",
  },
  {
    id: "mono",
    name: "Mono Chrome",
    primary: "#232526",
    secondary: "#414345",
    accent: "#8E9EAB",
    text: "#F6FBFF",
    shadow: "rgba(0, 0, 0, 0.45)",
    glow: "rgba(142, 158, 171, 0.4)",
  },
  {
    id: "cyber",
    name: "Cyber Lime",
    primary: "#00F5A0",
    secondary: "#00D9F5",
    accent: "#F5FBFF",
    text: "#00120B",
    shadow: "rgba(0, 245, 160, 0.35)",
    glow: "rgba(0, 217, 245, 0.5)",
  },
  {
    id: "plasma",
    name: "Plasma Rose",
    primary: "#AD5389",
    secondary: "#3C1053",
    accent: "#FF9A8B",
    text: "#FFF5F2",
    shadow: "rgba(173, 83, 137, 0.45)",
    glow: "rgba(255, 154, 139, 0.45)",
  },
  {
    id: "terra",
    name: "Terra Heat",
    primary: "#FFB88C",
    secondary: "#DE6262",
    accent: "#FFE29F",
    text: "#2A1B18",
    shadow: "rgba(222, 98, 98, 0.35)",
    glow: "rgba(255, 182, 140, 0.5)",
  },
];

const effectTemplates = [
  {
    id: "tilt-press",
    label: "Tilt Press",
    category: "Interactive",
    tags: ["tilt", "3d"],
    description: "Лёгкий 3D‑наклон при наведении и мягкое вдавливание при клике.",
    generator: ({ slug, palette }) => {
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(120deg, ${palette.primary}, ${palette.secondary});
  box-shadow: 0 14px 28px ${palette.shadow};
  transform-origin: center;
  transform-style: preserve-3d;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.button-base.btn-${slug}:hover {
  transform: perspective(900px) rotateX(-4deg) rotateY(3deg) translateY(-2px);
  box-shadow: 0 20px 38px ${palette.shadow};
}

.button-base.btn-${slug}:active {
  transform: perspective(900px) rotateX(0deg) rotateY(0deg) translateY(2px) scale(0.97);
  box-shadow: 0 8px 18px ${palette.shadow};
}
`;
    },
  },
  {
    id: "cursor-ripple",
    label: "Cursor Ripple",
    category: "Click",
    tags: ["ripple", "click"],
    description: "Кольцевая рябь расходится из центра при клике.",
    generator: ({ slug, palette }) => {
      const keyframe = `cursorRipple-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: radial-gradient(circle at 50% 0%, ${palette.accent}, ${palette.primary});
  box-shadow: 0 12px 26px ${palette.shadow};
  overflow: hidden;
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent 70%);
  opacity: 0;
  transform: scale(0.2);
}

.button-base.btn-${slug}:active::after {
  animation: ${keyframe} 420ms ease-out forwards;
}

@keyframes ${keyframe} {
  0% {
    transform: scale(0.2);
    opacity: 0.9;
  }
  70% {
    transform: scale(1.1);
    opacity: 0;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}
`;
    },
  },
  {
    id: "morph-pill",
    label: "Morph Pill",
    category: "Shape",
    tags: ["morph", "press"],
    description: "При наведении таблетка растягивается, при клике плющится как резина.",
    generator: ({ slug, palette }) => {
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(90deg, ${palette.primary}, ${palette.secondary});
  border-radius: 999px;
  transition: transform 0.18s ease, border-radius 0.18s ease, box-shadow 0.18s ease;
  box-shadow: 0 10px 24px ${palette.shadow};
}

.button-base.btn-${slug}:hover {
  border-radius: 40px;
  transform: scaleX(1.05) scaleY(1.02);
  box-shadow: 0 16px 32px ${palette.shadow};
}

.button-base.btn-${slug}:active {
  border-radius: 999px;
  transform: scaleX(1.08) scaleY(0.9) translateY(1px);
  box-shadow: 0 6px 16px ${palette.shadow};
}
`;
    },
  },
  {
    id: "underline-wave",
    label: "Underline Wave",
    category: "Click",
    tags: ["underline", "wave"],
    description: "Ударная волна проходит под кнопкой при клике.",
    generator: ({ slug, palette }) => {
      const keyframe = `underlineWave-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.primary};
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: none;
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 8px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, ${palette.accent}, transparent);
  transform-origin: center;
  opacity: 0;
}

.button-base.btn-${slug}:active::after {
  animation: ${keyframe} 360ms ease-out forwards;
}

@keyframes ${keyframe} {
  0% {
    transform: scaleX(0.2);
    opacity: 0.9;
  }
  60% {
    transform: scaleX(1.1);
    opacity: 1;
  }
  100% {
    transform: scaleX(1.4);
    opacity: 0;
  }
}
`;
    },
  },
  {
    id: "jelly-press",
    label: "Jelly Press",
    category: "Feedback",
    tags: ["jelly", "bounce"],
    description: "После клика кнопка дрожит как желе.",
    generator: ({ slug, palette }) => {
      const keyframe = `jellyPress-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(120deg, ${palette.primary}, ${palette.secondary});
  box-shadow: 0 12px 26px ${palette.shadow};
}

.button-base.btn-${slug}:active {
  animation: ${keyframe} 420ms ease-out;
}

@keyframes ${keyframe} {
  0% { transform: scale(1); }
  25% { transform: scaleX(0.9) scaleY(1.08) translateY(2px); }
  50% { transform: scaleX(1.08) scaleY(0.92); }
  75% { transform: scaleX(0.97) scaleY(1.03); }
  100% { transform: scale(1); }
}
`;
    },
  },
  {
    id: "spotlight-hover",
    label: "Spotlight Hover",
    category: "Hover",
    tags: ["spotlight", "hover"],
    description: "При наведении по кнопке скользит световое пятно.",
    generator: ({ slug, palette }) => {
      const keyframe = `spotlightSlide-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(120deg, ${palette.primary}, ${palette.secondary});
  position: relative;
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle at 0% 50%, rgba(255,255,255,0.7), transparent 55%);
  opacity: 0;
  transform: translateX(-40%);
}

.button-base.btn-${slug}:hover::after {
  opacity: 1;
  animation: ${keyframe} 1.2s ease-out forwards;
}

@keyframes ${keyframe} {
  0% { transform: translateX(-40%); opacity: 0.4; }
  70% { transform: translateX(40%); opacity: 1; }
  100% { transform: translateX(60%); opacity: 0; }
}
`;
    },
  },
  {
    id: "badge-pop",
    label: "Badge Pop",
    category: "Click",
    tags: ["badge", "pop"],
    description: "Из угла кнопки выстреливает маленький бейдж при клике.",
    generator: ({ slug, palette }) => {
      const keyframe = `badgePop-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(120deg, ${palette.primary}, ${palette.secondary});
  position: relative;
}

.button-base.btn-${slug}::after {
  content: "+1";
  position: absolute;
  right: 10px;
  top: 6px;
  font-size: 10px;
  line-height: 1;
  padding: 4px 6px;
  border-radius: 999px;
  background: ${palette.accent};
  color: #05060f;
  opacity: 0;
  transform: translateY(4px) scale(0.5);
}

.button-base.btn-${slug}:active::after {
  animation: ${keyframe} 480ms ease-out forwards;
}

@keyframes ${keyframe} {
  0% { opacity: 0; transform: translateY(4px) scale(0.5); }
  30% { opacity: 1; transform: translateY(-4px) scale(1); }
  80% { opacity: 1; transform: translateY(-10px) scale(1); }
  100% { opacity: 0; transform: translateY(-14px) scale(0.9); }
}
`;
    },
  },
  {
    id: "progress-hold",
    label: "Progress Hold",
    category: "Hold",
    tags: ["progress", "hold"],
    description: "Пока держишь кнопку, заполняется прогресс‑бар внутри неё.",
    generator: ({ slug, palette }) => {
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(120deg, ${palette.primary}, ${palette.secondary});
  position: relative;
  overflow: hidden;
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, ${palette.accent}, rgba(255,255,255,0.2));
  transform-origin: left center;
  transform: scaleX(0);
  opacity: 0.8;
  transition: transform 1.4s linear;
}

.button-base.btn-${slug}:active::after {
  transform: scaleX(1);
}
`;
    },
  },
  {
    id: "glitch-click",
    label: "Glitch Click",
    category: "Feedback",
    tags: ["glitch", "noise"],
    description: "Текст кнопки на мгновение “глючит” при клике.",
    generator: ({ slug, palette }) => {
      const keyframe = `glitchClick-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(120deg, ${palette.primary}, ${palette.secondary});
  position: relative;
  overflow: hidden;
}

.button-base.btn-${slug}::before,
.button-base.btn-${slug}::after {
  content: attr(data-label);
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  mix-blend-mode: screen;
  opacity: 0;
}

.button-base.btn-${slug}::before {
  color: #ff3b6c;
}

.button-base.btn-${slug}::after {
  color: #3bf5ff;
}

.button-base.btn-${slug}:active::before,
.button-base.btn-${slug}:active::after {
  animation: ${keyframe} 180ms steps(2, end);
}

@keyframes ${keyframe} {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  50% {
    opacity: 1;
    transform: translate(-2px, 1px);
  }
  100% {
    opacity: 0;
    transform: translate(2px, -1px);
  }
}
`;
    },
  },
  {
    id: "shadow-warp",
    label: "Shadow Warp",
    category: "Hover",
    tags: ["shadow", "depth"],
    description: "Тень вытягивается при наведении и схлопывается при клике.",
    generator: ({ slug, palette }) => {
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(120deg, ${palette.primary}, ${palette.secondary});
  box-shadow: 0 10px 22px ${palette.shadow};
  transition: box-shadow 0.18s ease, transform 0.18s ease;
}

.button-base.btn-${slug}:hover {
  box-shadow: 0 20px 40px ${palette.shadow};
  transform: translateY(-2px);
}

.button-base.btn-${slug}:active {
  box-shadow: 0 4px 10px ${palette.shadow};
  transform: translateY(2px);
}
`;
    },
  },
  {
    id: "icon-launch",
    label: "Icon Launch",
    category: "Click",
    tags: ["icon", "launch"],
    description: "Иконка‑стрелка вылетает из кнопки при клике.",
    generator: ({ slug, palette }) => {
      const keyframe = `iconLaunch-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(120deg, ${palette.primary}, ${palette.secondary});
  position: relative;
  padding-right: 40px;
}

.button-base.btn-${slug}::after {
  content: "➜";
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  transition: transform 0.18s ease;
}

.button-base.btn-${slug}:hover::after {
  transform: translateY(-50%) translateX(4px);
}

.button-base.btn-${slug}:active::after {
  animation: ${keyframe} 420ms ease-out;
}

@keyframes ${keyframe} {
  0% { transform: translateY(-50%) translateX(0); opacity: 1; }
  40% { transform: translateY(-140%) translateX(6px); opacity: 1; }
  80% { transform: translateY(-200%) translateX(10px); opacity: 0; }
  100% { transform: translateY(-50%) translateX(0); opacity: 0; }
}
`;
    },
  },
  {
    id: "border-flash",
    label: "Border Flash",
    category: "Click",
    tags: ["border", "flash"],
    description: "При клике граница вспыхивает вокруг кнопки.",
    generator: ({ slug, palette }) => {
      const keyframe = `borderFlash-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: radial-gradient(circle at 20% 0%, ${palette.accent}, ${palette.primary});
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 12px 26px ${palette.shadow};
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: inherit;
  border: 2px solid ${palette.accent};
  opacity: 0;
}

.button-base.btn-${slug}:active::after {
  animation: ${keyframe} 320ms ease-out;
}

@keyframes ${keyframe} {
  0% { opacity: 1; transform: scale(0.9); }
  60% { opacity: 1; transform: scale(1.02); }
  100% { opacity: 0; transform: scale(1.05); }
}
`;
    },
  },
  {
    id: "bubble-press",
    label: "Bubble Press",
    category: "Click",
    tags: ["press", "bubble"],
    description: "При клике кнопка вспухает, давая мягкий bubble‑эффект.",
    generator: ({ slug, palette }) => {
      const rippleKeyframe = `bubbleRipple-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: radial-gradient(circle at 20% 0%, ${palette.accent}, ${palette.primary});
  box-shadow: 0 12px 26px ${palette.shadow};
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: 10%;
  border-radius: inherit;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent 70%);
  opacity: 0;
}

.button-base.btn-${slug}:active {
  transform: translateY(2px) scale(1.06);
  box-shadow: 0 6px 16px ${palette.shadow};
}

.button-base.btn-${slug}:active::after {
  animation: ${rippleKeyframe} 420ms ease-out forwards;
}

@keyframes ${rippleKeyframe} {
  0% {
    transform: scale(0.4);
    opacity: 0.9;
  }
  60% {
    transform: scale(1.25);
    opacity: 0;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
`;
    },
  },
  {
    id: "magnetic-orbit",
    label: "Magnetic Orbit",
    category: "Interactive",
    tags: ["magnetic", "cursor"],
    description: "Кнопка реагирует на курсор магнитным притяжением и орбитами.",
    behavior: "magnetic",
    generator: ({ slug, palette }) => {
      const orbitKeyframe = `magneticOrbit-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: radial-gradient(circle at 10% 0%, ${palette.accent}, ${palette.primary});
  box-shadow: 0 16px 40px ${palette.shadow};
}

.button-base.btn-${slug}::before,
.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.3);
  mix-blend-mode: screen;
}

.button-base.btn-${slug}::after {
  border-color: ${palette.accent};
  opacity: 0.7;
  animation: ${orbitKeyframe} 4s linear infinite;
}

@keyframes ${orbitKeyframe} {
  0% { clip-path: inset(0 60% 0 0); }
  50% { clip-path: inset(0 0 0 60%); }
  100% { clip-path: inset(0 60% 0 0); }
}
`;
    },
  },
];

const baseButtonSnippet = `.button-base {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border: none;
  border-radius: 999px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}`;

let variantStyleTag = null;
const variantLibrary = buildVariantLibrary();
const variantMap = new Map(variantLibrary.map((variant) => [variant.id, variant]));
const originalOrder = [...variantLibrary];
const categories = [...new Set(effectTemplates.map((effect) => effect.category))];

const state = {
  search: "",
  category: "all",
  activeId: null,
  sequence: [...originalOrder],
};

const dom = {
  grid: document.getElementById("buttonGrid"),
  template: document.getElementById("buttonCardTemplate"),
  searchInput: document.getElementById("searchInput"),
  clearSearch: document.getElementById("clearSearch"),
  resetFilters: document.getElementById("resetFilters"),
  shuffle: document.getElementById("shuffleDataset"),
  visibleCount: document.getElementById("visibleCount"),
  filterRow: document.getElementById("filterRow"),
  variantTotal: document.getElementById("variantTotal"),
  categoryTotal: document.getElementById("categoryTotal"),
  inspector: document.getElementById("inspector"),
  inspectorTitle: document.getElementById("inspectorTitle"),
  inspectorCategory: document.getElementById("inspectorCategory"),
  inspectorDesc: document.getElementById("inspectorDescription"),
  inspectorPalette: document.getElementById("inspectorPalette"),
  inspectorTags: document.getElementById("inspectorTags"),
  inspectorPreview: document.getElementById("inspectorPreview"),
  inspectorClose: document.getElementById("inspectorClose"),
  htmlSnippet: document.getElementById("htmlSnippet"),
  cssSnippet: document.getElementById("cssSnippet"),
  colorPrimary: document.getElementById("primaryColor"),
  colorSecondary: document.getElementById("secondaryColor"),
  colorAccent: document.getElementById("accentColor"),
};

init();

function init() {
  dom.variantTotal.textContent = variantLibrary.length;
  dom.categoryTotal.textContent = categories.length;
  buildFilterControls();
  injectVariantStyles();
  bindEvents();
  dom.inspector.classList.add("is-visible");
  applyFilters();
}

function buildVariantLibrary() {
  return effectTemplates.map((effect, index) => {
    const sourcePalette = paletteCatalog[index % paletteCatalog.length];
    const palette = { ...sourcePalette };
    const slug = effect.id;
    return {
      id: slug,
      slug,
      label: effect.label,
      name: effect.label,
      description: effect.description,
      category: effect.category,
      tags: effect.tags,
      behavior: effect.behavior || null,
      palette,
      css: effect.generator({ slug, palette }).trim(),
      html: `<button class="button-base btn-${slug}">${effect.label}</button>`,
    };
  });
}

function injectVariantStyles() {
  if (variantStyleTag) {
    variantStyleTag.remove();
  }
  variantStyleTag = document.createElement("style");
  variantStyleTag.id = "buttonVariantStyles";
  variantStyleTag.textContent = variantLibrary.map((variant) => variant.css).join("\n\n");
  document.head.appendChild(variantStyleTag);
}

function buildFilterControls() {
  const fragment = document.createDocumentFragment();
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip chip--ghost";
    button.textContent = category;
    button.dataset.category = category;
    button.addEventListener("click", () => {
      state.category = state.category === category ? "all" : category;
      updateFilterButtons();
      applyFilters();
    });
    fragment.appendChild(button);
  });
  dom.filterRow.appendChild(fragment);
  updateFilterButtons();
}

function updateFilterButtons() {
  [...dom.filterRow.querySelectorAll("button")].forEach((button) => {
    const active = state.category === button.dataset.category;
    button.classList.toggle("chip--active", active);
    button.classList.toggle("chip--ghost", !active);
  });
}

function bindEvents() {
  dom.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    applyFilters();
  });

  dom.clearSearch.addEventListener("click", () => {
    state.search = "";
    dom.searchInput.value = "";
    applyFilters();
  });

  dom.resetFilters.addEventListener("click", () => {
    state.category = "all";
    state.search = "";
    state.sequence = [...originalOrder];
    dom.searchInput.value = "";
    updateFilterButtons();
    applyFilters();
  });

  dom.shuffle.addEventListener("click", () => {
    state.sequence = shuffleArray([...variantLibrary]);
    applyFilters();
  });

  dom.grid.addEventListener("click", (event) => {
    const card = event.target.closest(".button-card");
    if (!card) return;
    openInspector(card.dataset.id);
  });

  dom.grid.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const card = event.target.closest(".button-card");
    if (!card) return;
    event.preventDefault();
    openInspector(card.dataset.id);
  });

  dom.inspector.addEventListener("click", (event) => {
    const button = event.target.closest("[data-copy]");
    if (!button) return;
    const type = button.dataset.copy;
    const payload = type === "html" ? dom.htmlSnippet.textContent : dom.cssSnippet.textContent;
    copyToClipboard(payload, button);
  });

  dom.inspectorClose.addEventListener("click", () => {
    dom.inspector.classList.remove("is-visible");
    state.activeId = null;
    highlightActiveCard();
  });

  const handleColorChange = (key, value) => {
    const active = state.activeId ? variantMap.get(state.activeId) : null;
    if (!active) return;

    active.palette = { ...active.palette, [key]: value };
    const template = effectTemplates.find((effect) => effect.id === active.slug);
    if (!template) return;

    active.css = template.generator({ slug: active.slug, palette: active.palette }).trim();
    injectVariantStyles();

    if (state.activeId === active.id) {
      dom.cssSnippet.textContent = `${baseButtonSnippet}\n\n${active.css}`;
      dom.inspectorPalette.textContent = `${active.palette.primary}, ${active.palette.secondary}`;
    }
  };

  if (dom.colorPrimary) {
    dom.colorPrimary.addEventListener("input", (event) =>
      handleColorChange("primary", event.target.value)
    );
  }
  if (dom.colorSecondary) {
    dom.colorSecondary.addEventListener("input", (event) =>
      handleColorChange("secondary", event.target.value)
    );
  }
  if (dom.colorAccent) {
    dom.colorAccent.addEventListener("input", (event) =>
      handleColorChange("accent", event.target.value)
    );
  }

  // Магнитное поведение для отдельных кнопок
  let magneticTarget = null;
  let magneticFrame = null;
  const magneticOffset = { x: 0, y: 0 };

  const applyMagneticTransform = () => {
    if (!magneticTarget) {
      magneticFrame = null;
      return;
    }
    magneticTarget.style.transform = `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`;
    magneticFrame = requestAnimationFrame(applyMagneticTransform);
  };

  dom.grid.addEventListener("mousemove", (event) => {
    const btn = event.target.closest('button[data-behavior="magnetic"]');
    if (!btn) {
      if (magneticTarget) {
        magneticTarget.style.transform = "";
        magneticTarget = null;
      }
      return;
    }

    const rect = btn.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    const strength = 10;

    magneticOffset.x = (relX / rect.width) * strength;
    magneticOffset.y = (relY / rect.height) * strength;
    magneticTarget = btn;

    if (!magneticFrame) {
      magneticFrame = requestAnimationFrame(applyMagneticTransform);
    }
  });

  dom.grid.addEventListener("mouseleave", () => {
    if (magneticTarget) {
      magneticTarget.style.transform = "";
      magneticTarget = null;
    }
    if (magneticFrame) {
      cancelAnimationFrame(magneticFrame);
      magneticFrame = null;
    }
  });

  document.querySelectorAll("[data-scroll]").forEach((control) => {
    control.addEventListener("click", () => {
      const target = document.querySelector(control.dataset.scroll);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function applyFilters() {
  const query = state.search.trim().toLowerCase();
  const filtered = state.sequence.filter((variant) => {
    const matchesCategory = state.category === "all" || variant.category === state.category;
    if (!matchesCategory) return false;
    if (!query) return true;
    const haystack = `${variant.name} ${variant.category} ${variant.tags.join(" ")}`.toLowerCase();
    return haystack.includes(query);
  });

  dom.visibleCount.textContent = filtered.length;
  renderGrid(filtered);
}

function renderGrid(collection) {
  dom.grid.innerHTML = "";

  if (!collection.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Нет совпадений — попробуй изменить фильтры или поиск.";
    dom.grid.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  collection.forEach((variant) => {
    const instance = dom.template.content.cloneNode(true);
    const card = instance.querySelector(".button-card");
    card.dataset.id = variant.id;
    card.querySelector(".button-card__category").textContent = variant.category;
    card.querySelector(".button-card__title").textContent = variant.label;
    card.querySelector(".button-card__palette").textContent = variant.palette.name;

    const tagsWrap = card.querySelector(".button-card__tags");
    tagsWrap.innerHTML = "";
    variant.tags.forEach((tag) => {
      const tagChip = document.createElement("span");
      tagChip.textContent = tag;
      tagsWrap.appendChild(tagChip);
    });

    const previewButton = card.querySelector(".preview-btn");
    previewButton.textContent = variant.label;
    previewButton.className = `button-base preview-btn btn-${variant.id}`;
    previewButton.setAttribute("data-label", variant.label);
    if (variant.behavior) {
      previewButton.dataset.behavior = variant.behavior;
    }

    fragment.appendChild(instance);
  });

  dom.grid.appendChild(fragment);
  highlightActiveCard();
}

function openInspector(variantId) {
  const variant = variantMap.get(variantId);
  if (!variant) return;

  state.activeId = variantId;
  dom.inspector.classList.add("is-visible");
  dom.inspectorTitle.textContent = variant.name;
  dom.inspectorCategory.textContent = variant.category;
  dom.inspectorDesc.textContent = variant.description;
  dom.inspectorPalette.textContent = `${variant.palette.primary}, ${variant.palette.secondary}`;
  dom.inspectorTags.textContent = variant.tags.join(" · ");

  if (dom.colorPrimary && dom.colorSecondary && dom.colorAccent) {
    dom.colorPrimary.value = variant.palette.primary;
    dom.colorSecondary.value = variant.palette.secondary;
    dom.colorAccent.value = variant.palette.accent || "#ffffff";
  }

  dom.inspectorPreview.innerHTML = "";
  const preview = document.createElement("button");
  preview.type = "button";
  preview.textContent = variant.label;
  preview.className = `button-base btn-${variant.id}`;
  preview.setAttribute("data-label", variant.label);
  if (variant.behavior) {
    preview.dataset.behavior = variant.behavior;
  }
  dom.inspectorPreview.appendChild(preview);

  dom.htmlSnippet.textContent = variant.html;
  dom.cssSnippet.textContent = `${baseButtonSnippet}\n\n${variant.css}`;

  highlightActiveCard();
}

function highlightActiveCard() {
  dom.grid.querySelectorAll(".button-card").forEach((card) => {
    card.classList.toggle("button-card--active", card.dataset.id === state.activeId);
  });
}

async function copyToClipboard(text, trigger) {
  if (!text) return;
  const original = trigger.textContent;
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.top = "-1000px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    trigger.textContent = "Готово!";
  } catch (error) {
    trigger.textContent = "Ошибка";
    console.error("Clipboard error:", error);
  } finally {
    trigger.disabled = true;
    setTimeout(() => {
      trigger.textContent = original;
      trigger.disabled = false;
    }, 1400);
  }
}

function shuffleArray(list) {
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

