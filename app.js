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
    id: "pulse-halo",
    label: "Pulse Halo",
    category: "Pulse",
    tags: ["glow", "loop"],
    description: "Неоновый пульс и дыхание света вокруг кнопки.",
    generator: ({ slug, palette }) => {
      const keyframe = `pulseHalo-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(120deg, ${palette.primary}, ${palette.secondary});
  box-shadow: 0 14px 32px ${palette.shadow};
  border: 1px solid transparent;
  animation: ${keyframe} 2.4s ease-in-out infinite;
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: inherit;
  border: 1px solid ${palette.glow};
  opacity: 0.35;
}

@keyframes ${keyframe} {
  0%, 100% {
    box-shadow: 0 10px 24px ${palette.shadow};
    transform: translateY(0) scale(1);
  }
  50% {
    box-shadow: 0 16px 40px ${palette.shadow};
    transform: translateY(-3px) scale(1.04);
  }
}
`;
    },
  },
  {
    id: "gradient-shift",
    label: "Gradient Shift",
    category: "Flow",
    tags: ["gradient", "smooth"],
    description: "Медленный сдвиг градиента с эффектом параллакса.",
    generator: ({ slug, palette }) => {
      const keyframe = `gradientShift-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background-image: linear-gradient(135deg, ${palette.primary}, ${palette.secondary}, ${palette.accent});
  background-size: 220% 220%;
  animation: ${keyframe} 7s ease infinite;
}

.button-base.btn-${slug}:hover {
  transform: translateY(-4px);
}

@keyframes ${keyframe} {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;
    },
  },
  {
    id: "magnetic-slide",
    label: "Magnetic Slide",
    category: "Slide",
    tags: ["highlight", "sweep"],
    description: "Светящаяся полоска скользит поверх кнопки.",
    generator: ({ slug, palette }) => {
      const keyframe = `magneticSweep-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  letter-spacing: 0.08em;
  background: linear-gradient(120deg, ${palette.primary}, ${palette.secondary});
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  mix-blend-mode: screen;
  transform: translateX(-120%);
  animation: ${keyframe} 2.4s linear infinite;
}

@keyframes ${keyframe} {
  0% { transform: translateX(-120%); }
  50% { transform: translateX(120%); }
  100% { transform: translateX(120%); }
}
`;
    },
  },
  {
    id: "outline-trace",
    label: "Outline Trace",
    category: "Outline",
    tags: ["stroke", "minimal"],
    description: "Контур кнопки подсвечивается бегущей волной.",
    generator: ({ slug, palette }) => {
      const keyframe = `outlineTrace-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.primary};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${palette.primary};
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  border: 2px solid transparent;
  animation: ${keyframe} 2.6s linear infinite;
}

@keyframes ${keyframe} {
  0% {
    border-color: transparent;
    opacity: 0;
  }
  35% {
    border-color: ${palette.primary};
    opacity: 0.6;
  }
  100% {
    border-color: transparent;
    opacity: 0;
  }
}
`;
    },
  },
  {
    id: "parallax-press",
    label: "Parallax Press",
    category: "Depth",
    tags: ["3d", "lift"],
    description: "Объёмный параллакс, реагирующий на нажатие.",
    generator: ({ slug, palette }) => {
      const keyframe = `parallaxTilt-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: radial-gradient(circle at 20% 20%, ${palette.accent}, ${palette.primary});
  box-shadow: 0 20px 35px ${palette.shadow};
  transform-style: preserve-3d;
  animation: ${keyframe} 6s ease-in-out infinite;
}

.button-base.btn-${slug}:active {
  transform: translateY(4px) scale(0.98);
  box-shadow: 0 10px 20px ${palette.shadow};
}

@keyframes ${keyframe} {
  0% { transform: rotateX(0) rotateY(0); }
  30% { transform: rotateX(4deg) rotateY(-3deg); }
  60% { transform: rotateX(-4deg) rotateY(3deg); }
  100% { transform: rotateX(0) rotateY(0); }
}
`;
    },
  },
  {
    id: "ripple-diffuse",
    label: "Ripple Diffuse",
    category: "Ripple",
    tags: ["wave", "loop"],
    description: "Расходящаяся волна с мягким свечением.",
    generator: ({ slug, palette }) => {
      const keyframe = `rippleDiffuse-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(100deg, ${palette.primary}, ${palette.secondary});
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: -25%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.45), transparent 65%);
  opacity: 0.45;
  animation: ${keyframe} 2.8s ease-out infinite;
}

@keyframes ${keyframe} {
  0% {
    transform: scale(0.2);
    opacity: 0.7;
  }
  70% {
    transform: scale(1);
    opacity: 0;
  }
  100% {
    transform: scale(0.2);
    opacity: 0;
  }
}
`;
    },
  },
  {
    id: "orbit-lines",
    label: "Orbit Lines",
    category: "Orbit",
    tags: ["loop", "neon"],
    description: "Две орбитальные линии вращаются в разные стороны.",
    generator: ({ slug, palette }) => {
      const keyframe = `orbitLines-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(120deg, ${palette.primary}, ${palette.secondary});
  box-shadow: 0 16px 36px ${palette.shadow};
}

.button-base.btn-${slug}::before,
.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: inherit;
  border: 1px solid ${palette.accent};
  mix-blend-mode: screen;
}

.button-base.btn-${slug}::before {
  opacity: 0.55;
  animation: ${keyframe} 5s linear infinite;
}

.button-base.btn-${slug}::after {
  opacity: 0.35;
  animation: ${keyframe} 5s linear infinite reverse;
}

@keyframes ${keyframe} {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
    },
  },
  {
    id: "split-border",
    label: "Split Border",
    category: "Duality",
    tags: ["gradient", "border"],
    description: "Двойной цвет с бегущей границей по периметру.",
    generator: ({ slug, palette }) => {
      const keyframe = `splitBorder-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(90deg, ${palette.primary}, ${palette.secondary});
  background-size: 200% 100%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: ${keyframe} 4s ease-in-out infinite;
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: 3px;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.35);
  opacity: 0.6;
}

@keyframes ${keyframe} {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;
    },
  },
  {
    id: "neon-underline",
    label: "Neon Underline",
    category: "Neon",
    tags: ["underline", "glow"],
    description: "Линия под кнопкой мерцает неоновым лучом.",
    generator: ({ slug, palette }) => {
      const keyframe = `neonUnderline-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.primary};
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: none;
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 10px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, ${palette.accent}, transparent);
  animation: ${keyframe} 2.4s ease-in-out infinite;
}

@keyframes ${keyframe} {
  0% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
}
`;
    },
  },
  {
    id: "skew-switch",
    label: "Skew Switch",
    category: "Motion",
    tags: ["skew", "energy"],
    description: "Динамичный наклон с резким бластом света.",
    generator: ({ slug, palette }) => {
      const keyframe = `skewSwitch-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(100deg, ${palette.secondary}, ${palette.primary});
}

.button-base.btn-${slug}:hover {
  transform: translateY(-3px) skewX(-3deg);
}

.button-base.btn-${slug}::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.45), transparent);
  transform: translateX(-110%) skewX(-12deg);
  animation: ${keyframe} 2.2s ease-in-out infinite;
}

@keyframes ${keyframe} {
  0% { transform: translateX(-110%) skewX(-12deg); }
  55% { transform: translateX(110%) skewX(12deg); }
  100% { transform: translateX(110%) skewX(12deg); }
}
`;
    },
  },
  {
    id: "spark-shimmer",
    label: "Spark Shimmer",
    category: "Shimmer",
    tags: ["spark", "shine"],
    description: "Искра пробегает по поверхности, добавляя блеск.",
    generator: ({ slug, palette }) => {
      const keyframe = `sparkShimmer-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.text};
  background: linear-gradient(120deg, ${palette.primary}, ${palette.secondary});
  box-shadow: 0 10px 28px ${palette.shadow};
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  top: 12px;
  left: 12px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%);
  animation: ${keyframe} 2.6s linear infinite;
}

@keyframes ${keyframe} {
  0% { transform: translate(0, 0) scale(0.6); opacity: 0; }
  10% { opacity: 1; }
  45% { transform: translate(110px, 6px) scale(1); opacity: 0.8; }
  80% { transform: translate(180px, -4px) scale(0.4); opacity: 0; }
  100% { opacity: 0; }
}
`;
    },
  },
  {
    id: "dash-charge",
    label: "Dash Charge",
    category: "Border",
    tags: ["dashed", "loop"],
    description: "Пунктирная рамка заряжается и сияет.",
    generator: ({ slug, palette }) => {
      const keyframe = `dashCharge-${slug}`;
      return `
.button-base.btn-${slug} {
  color: ${palette.primary};
  background: transparent;
  border: 2px dashed ${palette.primary};
  box-shadow: none;
  letter-spacing: 0.1em;
}

.button-base.btn-${slug}::after {
  content: "";
  position: absolute;
  inset: 4px;
  border-radius: inherit;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  animation: ${keyframe} 1.6s linear infinite;
}

@keyframes ${keyframe} {
  0% { transform: rotate(0deg); opacity: 0.4; }
  100% { transform: rotate(360deg); opacity: 0.8; }
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
    previewButton.textContent = "CTA";
    previewButton.className = `button-base preview-btn btn-${variant.id}`;
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
  preview.textContent = "Call to action";
  preview.className = `button-base btn-${variant.id}`;
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

