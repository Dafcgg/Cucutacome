/* =========================================================
   Cúcuta Come · interacciones de la web comercial
   Sin dependencias externas.
   ========================================================= */

/* ─────────────────────────────────────────────────────────
   CONFIGURACIÓN
   WhatsApp y contacto del equipo comercial.
   ───────────────────────────────────────────────────────── */
const CONFIG = {
  whatsapp: "573203138714",
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Selector de idioma para textos principales ────────── */
const translations = {
  es: {
    "hero-title": "Descubre restaurantes.<br>Haz tu pedido.<br><span class='text-red-highlight'>Gestiona tu negocio.</span>",
    "hero-sub": "Los clientes ven el menú y piden desde el celular. Cada restaurante recibe el pedido en su panel y organiza su cocina y sus propios domicilios.",
    "btn-explore": "Explorar restaurantes <span aria-hidden='true'>&rarr;</span>",
    "btn-restaurant": "Tengo un restaurante",
    "how-title": "Así trabaja Cúcuta Come con tu restaurante.",
    "how-lead": "Publica el perfil y menú de tu negocio en Cúcuta Come, recibe los pedidos en tu panel y organiza las comandas. Cada restaurante administra y coordina a sus propios domiciliarios desde la plataforma; el inventario depende del plan.",
    "plans-title": "Elige el plan de tu restaurante",
    "plans-lead": "Instalamos, cargamos tu menú y capacitamos a tu equipo. Cada restaurante administra y coordina a sus propios domiciliarios desde la plataforma. Pregúntanos por el plan que te interesa y te enviamos su precio.",
    "faq-title": "Lo que suelen preguntar",
    "faq-lead": "Lo que más nos preguntan antes de instalar el sistema.",
    "demo-title": "Haz un pedido. Mira cómo llega al panel.",
    "demo-lead": "Este recorrido simula en vivo lo que vive tu cliente al pedir y lo que ve tu cocina en el panel de Cúcuta Come. No cobra ni necesita cuenta: los datos son de ejemplo."
  },
  en: {
    "hero-title": "Discover restaurants.<br>Place your order.<br><span class='text-red-highlight'>Manage your business.</span>",
    "hero-sub": "Customers browse menus and order from their phones. Each restaurant receives orders in its dashboard and coordinates its own kitchen and deliveries.",
    "btn-explore": "Explore restaurants <span aria-hidden='true'>&rarr;</span>",
    "btn-restaurant": "I have a restaurant",
    "how-title": "See how Cúcuta Come works with your restaurant.",
    "how-lead": "Publish your business profile and menu on Cúcuta Come, receive orders in your dashboard, and organize kitchen tickets. Each restaurant manages and coordinates its own delivery staff on the platform; inventory depends on the plan.",
    "plans-title": "Choose a plan for your restaurant",
    "plans-lead": "We set up your menu and train your team. Each restaurant manages and coordinates its own delivery staff on the platform. Ask us about a plan and we will send you its price.",
    "faq-title": "Frequently asked questions",
    "faq-lead": "Answers to common questions before installing the system.",
    "demo-title": "Place an order. See it reach the dashboard.",
    "demo-lead": "This live walkthrough simulates your customer's ordering experience and what your kitchen sees in the Cúcuta Come dashboard. It is free to try, needs no account, and uses sample data."
  }
};

const languageToggles = $$("[data-language-toggle]");
let currentLanguage = "es";

const setLanguage = (language) => {
  currentLanguage = language;
  document.documentElement.lang = language;
  $$("[data-i18n]").forEach((element) => {
    const translation = translations[language][element.dataset.i18n];
    if (translation) element.innerHTML = translation;
  });
  languageToggles.forEach((button) => {
    button.setAttribute("aria-pressed", String(language === "en"));
    button.setAttribute(
      "aria-label",
      language === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish"
    );
  });
};

languageToggles.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(currentLanguage === "es" ? "en" : "es");
  });
});

/* ── 1. Cabecera ────────────────────────────────────────── */
const header = $("#main-header");

/* ── 2. Menú móvil ──────────────────────────────────────── */
const burger = $("#burger");
const navLinks = $$(".nav a");

const setMenu = (open) => {
  if (!header || !burger) return;
  header.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
};

burger?.addEventListener("click", () => {
  setMenu(!header.classList.contains("is-open"));
});

navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && header?.classList.contains("is-open")) {
    setMenu(false);
    burger?.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!header?.classList.contains("is-open")) return;
  if (!header.contains(event.target)) setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1100) setMenu(false);
});

/* ── Logo interactivo: mordisco ─────────────────────────── */
const interactiveHeaderLogo = $("#header-interactive-logo");

if (interactiveHeaderLogo) {
  let logoAnimationTimer;

  interactiveHeaderLogo.addEventListener("click", (event) => {
    const path = window.location.pathname;
    const isHomePage = path.endsWith("index.html") || path === "/" || path.endsWith("/");

    window.clearTimeout(logoAnimationTimer);
    interactiveHeaderLogo.classList.remove("is-bitten");

    window.requestAnimationFrame(() => {
      interactiveHeaderLogo.classList.add("is-bitten");
    });

    logoAnimationTimer = window.setTimeout(() => {
      interactiveHeaderLogo.classList.remove("is-bitten");
    }, 480);

    if (isHomePage) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    }
  });
}

/* ── 3. Aparición de bloques al hacer scroll ────────────── */
const revealItems = $$("[data-reveal], .scroll-reveal");

if ("IntersectionObserver" in window) {
  revealItems.forEach((el) => {
    const siblings = $$("[data-reveal]", el.parentElement);
    const index = siblings.indexOf(el);
    el.style.transitionDelay = `${Math.min(index, 4) * 70}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  revealItems.forEach((el) => revealObserver.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add("is-visible"));
}

/* ── Botón volver arriba ────────────────────────────────── */
const backToTopButton = $("#btn-back-to-top") || document.createElement("button");
if (!backToTopButton.id) {
  backToTopButton.id = "btn-back-to-top";
  backToTopButton.className = "btn-back-to-top";
  backToTopButton.type = "button";
  backToTopButton.textContent = "↑";
  backToTopButton.setAttribute("aria-label", "Volver arriba");
  document.body.append(backToTopButton);
}

const updateBackToTop = () => {
  backToTopButton.classList.toggle("is-visible", window.scrollY > 400);
};
window.addEventListener("scroll", updateBackToTop, { passive: true });
updateBackToTop();
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
});

/* ── Feedback de carga de la demo ───────────────────────── */
if ($(".demo-workspace-grid")) {
  document.documentElement.classList.add("demo-loading");
  window.setTimeout(() => {
    document.documentElement.classList.remove("demo-loading");
  }, 240);
}

/* ── Efecto ripple para CTA principales ─────────────────── */
document.addEventListener("pointerdown", (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest(
    ".btn--primary, .btn-hero-primary, .btn-orders-primary, .btn-primary-animated, .btn-insta-follow"
  );
  if (!button || button.matches(":disabled")) return;

  const bounds = button.getBoundingClientRect();
  const diameter = Math.max(bounds.width, bounds.height);
  const ripple = document.createElement("span");
  ripple.className = "ui-ripple";
  ripple.setAttribute("aria-hidden", "true");
  ripple.style.width = `${diameter}px`;
  ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - bounds.left - diameter / 2}px`;
  ripple.style.top = `${event.clientY - bounds.top - diameter / 2}px`;
  button.classList.add("ui-ripple-host");
  button.append(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
});

/* ── Activación de la escena de problemas al entrar al viewport ── */
const painPointsSection = $(".pain-points-dark-section");

if (painPointsSection && "IntersectionObserver" in window) {
  const painPointsObserver = new IntersectionObserver(
    ([entry]) => {
      painPointsSection.classList.toggle("is-in-view", entry.isIntersecting);
      document.body.classList.toggle("pain-points-in-view", entry.isIntersecting);
    },
    { threshold: 0.15 }
  );

  painPointsObserver.observe(painPointsSection);
} else {
  painPointsSection?.classList.add("is-in-view");
}

const ordersControlSection = $(".orders-in-control-section");

if (ordersControlSection && "IntersectionObserver" in window) {
  const ordersControlObserver = new IntersectionObserver(
    ([entry]) => {
      document.body.classList.toggle("orders-control-in-view", entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  ordersControlObserver.observe(ordersControlSection);
}

/* ── Comanda ilustrativa: aceptar y consultar detalle ── */
const ticketAcceptButton = $("[data-ticket-accept]");
const ticketDetailButton = $("[data-ticket-detail]");
const ticketDetails = $("[data-ticket-details]");
const ticketFeedback = $("[data-ticket-feedback]");

ticketAcceptButton?.addEventListener("click", () => {
  const isAccepted = ticketAcceptButton.getAttribute("aria-pressed") === "true";
  if (isAccepted) return;

  ticketAcceptButton.setAttribute("aria-pressed", "true");
  ticketAcceptButton.classList.add("is-accepted");
  ticketAcceptButton.textContent = "Pedido aceptado";
  ticketAcceptButton.disabled = true;

  const statusChip = $("[data-ticket-status]");
  const statusLabel = $("[data-ticket-status-label]");
  if (statusChip) statusChip.textContent = "ACEPTADO";
  if (statusLabel) statusLabel.textContent = "En preparación";
  if (ticketFeedback) ticketFeedback.textContent = "Pedido aceptado en el panel de cocina";
});

ticketDetailButton?.addEventListener("click", () => {
  if (!ticketDetails) return;
  const isExpanded = ticketDetailButton.getAttribute("aria-expanded") === "true";
  ticketDetailButton.setAttribute("aria-expanded", String(!isExpanded));
  ticketDetails.hidden = isExpanded;
  ticketDetailButton.textContent = isExpanded ? "Detalle" : "Ocultar detalle";
});

/* ── 3.0.1. Progreso visual de la demo interactiva ─────── */
const demoStepsIndicator = $(".demo-steps-indicator");

if (demoStepsIndicator) {
  const demoStepPills = $$(".step-pill", demoStepsIndicator);
  const setDemoStep = (step) => {
    demoStepPills.forEach((pill, index) => {
      const active = index === step;
      pill.classList.toggle("active", active);
      if (active) {
        pill.setAttribute("aria-current", "step");
      } else {
        pill.removeAttribute("aria-current");
      }
    });
  };

  const activeDemoStep = demoStepPills.findIndex((pill) => pill.classList.contains("active"));
  setDemoStep(activeDemoStep >= 0 ? activeDemoStep : 0);

  document.addEventListener("demo:stepchange", (event) => {
    const step = Number(event.detail?.step);
    if (Number.isInteger(step) && step >= 0 && step < demoStepPills.length) {
      setDemoStep(step);
    }
  });
}

/* ── 3.1. Restaurantes por sector ───────────────────────── */
const sectorTabs = $$(".location-catalog-card .sector-pill[data-sector]");
const restaurantsContainer = $("#restaurants-container");

const restaurantsBySector = {
  caobos: [
    { name: "Asadero & Pizzería La 10", type: "Comidas rápidas · Caobos", emoji: "🍔" },
    { name: "Tacos & Sabor Cúcuta", type: "Comida Mexicana · Caobos", emoji: "🌮" },
  ],
  atalaya: [
    { name: "Hamburguesas El Corralito", type: "Comidas rápidas · Atalaya", emoji: "🍔" },
    { name: "Arepas & Parrilla Atalaya", type: "Comida Típica · Atalaya", emoji: "🍳" },
  ],
  "san-luis": [
    { name: "Pizzería San Luis", type: "Pizzas & Pastas · San Luis", emoji: "🍕" },
    { name: "Pollo Broaster El Rey", type: "Pollos & Asados · San Luis", emoji: "🍗" },
  ],
  "la-libertad": [
    { name: "La Esquina del Sabor", type: "Comida Rápida · La Libertad", emoji: "🌭" },
    { name: "Sazón Criollo La Libertad", type: "Comida Casera · La Libertad", emoji: "🍲" },
  ],
};

let pendingRestaurantRender;
const renderRestaurants = (sector, animate = true) => {
  if (!restaurantsContainer || !restaurantsBySector[sector]) return;

  window.clearTimeout(pendingRestaurantRender);
  if (animate) restaurantsContainer.classList.add("is-changing");

  const update = () => {
    const fragment = document.createDocumentFragment();
    restaurantsBySector[sector].forEach((restaurant, index) => {
      const card = document.createElement("a");
      card.className = "restaurant-item-card fade-item";
      card.href = "demo.html";
      card.style.animationDelay = `${index * 80}ms`;

      const avatar = document.createElement("span");
      avatar.className = "rest-avatar";
      avatar.setAttribute("aria-hidden", "true");
      avatar.textContent = restaurant.emoji;

      const info = document.createElement("span");
      info.className = "rest-info";

      const name = document.createElement("span");
      name.className = "rest-name";
      name.textContent = restaurant.name;

      const type = document.createElement("span");
      type.className = "rest-type";
      type.textContent = restaurant.type;
      info.append(name, type);

      const menu = document.createElement("span");
      menu.className = "menu-status-badge";
      menu.textContent = "Ver menú →";

      card.append(avatar, info, menu);
      fragment.append(card);
    });

    restaurantsContainer.replaceChildren(fragment);
    const activeTab = sectorTabs.find((tab) => tab.dataset.sector === sector);
    if (activeTab) restaurantsContainer.setAttribute("aria-labelledby", activeTab.id);
    restaurantsContainer.classList.remove("is-changing");
  };

  if (animate) pendingRestaurantRender = window.setTimeout(update, 180);
  else update();
};

sectorTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    if (tab.getAttribute("aria-selected") === "true") return;

    sectorTabs.forEach((sectorTab) => {
      const isSelected = sectorTab === tab;
      sectorTab.classList.toggle("is-active", isSelected);
      sectorTab.setAttribute("aria-selected", String(isSelected));
      sectorTab.tabIndex = isSelected ? 0 : -1;
    });

    tab.classList.remove("btn-pop");
    window.requestAnimationFrame(() => tab.classList.add("btn-pop"));
    window.setTimeout(() => tab.classList.remove("btn-pop"), 320);
    renderRestaurants(tab.dataset.sector);
  });

  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + sectorTabs.length) % sectorTabs.length;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % sectorTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = sectorTabs.length - 1;
    sectorTabs[nextIndex].focus();
    sectorTabs[nextIndex].click();
  });
});

if (restaurantsContainer && sectorTabs.length) {
  renderRestaurants(sectorTabs.find((tab) => tab.getAttribute("aria-selected") === "true")?.dataset.sector || "caobos", false);
}

/* ── 4. Enlace activo en la navegación (Multipágina) ────── */
const currentPath = window.location.pathname.split("/").pop() || "index.html";

$$(".nav__list a").forEach((link) => {
  const linkHref = link.getAttribute("href") || "";
  const linkPage = linkHref.split("#")[0].split("/").pop() || "index.html";
  if (!linkHref.includes("#") && linkPage === currentPath) {
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
  }
});

/* ── 5. Microinteracciones y acordeón de preguntas ───────── */
$$(".btn--primary, .plan__cta, .plan-chip, .nav__cta").forEach((button) => {
  button.classList.add("btn-primary-animated");
  button.querySelectorAll('svg use[href="#i-arrow"]').forEach((arrow) => {
    arrow.closest("svg")?.classList.add("btn-arrow");
  });
});

const faqItems = $$(".faq__item");
if (faqItems.length) document.documentElement.classList.add("faq-enhanced");

faqItems.forEach((item) => {
  const summary = $("summary", item);
  const answer = $("p", item);
  if (!summary || !answer) return;

  let closeTimer;
  const finishClose = () => {
    if (!item.classList.contains("is-closing")) return;
    item.open = false;
    item.classList.remove("is-closing");
    answer.classList.remove("is-expanded");
    answer.style.maxHeight = "";
    window.clearTimeout(closeTimer);
  };

  answer.addEventListener("transitionend", (event) => {
    if (event.target === answer && event.propertyName === "max-height") finishClose();
  });

  if (item.open) {
    answer.classList.add("is-expanded");
    answer.style.maxHeight = "none";
  }

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (item.open && !item.classList.contains("is-closing")) {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
      item.classList.add("is-closing");
      window.requestAnimationFrame(() => {
        answer.classList.remove("is-expanded");
        answer.style.maxHeight = "0px";
      });
      closeTimer = window.setTimeout(finishClose, 400);
      return;
    }

    window.clearTimeout(closeTimer);
    item.classList.remove("is-closing");
    item.open = true;
    answer.classList.add("is-expanded");
    answer.style.maxHeight = "0px";
    window.requestAnimationFrame(() => {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    });
    answer.addEventListener("transitionend", function expandAnswer(event) {
      if (event.target !== answer || event.propertyName !== "max-height") return;
      if (!item.open || item.classList.contains("is-closing")) return;
      answer.style.maxHeight = "none";
      answer.removeEventListener("transitionend", expandAnswer);
    });
  });
});

/* ── 6. Elegir plan desde parámetros o enlaces ──────────── */
const planSelect = $("#f-plan");
const nameInput = $("#f-nombre");
const requestedPlan = new URLSearchParams(window.location.search).get("plan");

if (planSelect && requestedPlan) {
  const matchingOption = [...planSelect.options].find(
    (opt) => opt.value.toLowerCase() === requestedPlan.toLowerCase()
  );
  if (matchingOption) {
    planSelect.value = matchingOption.value;
    window.setTimeout(() => {
      nameInput?.focus({ preventScroll: false });
    }, 450);
  }
}

$$("[data-plan]").forEach((link) => {
  link.addEventListener("click", () => {
    if (!planSelect) return;
    planSelect.value = link.dataset.plan;
    window.setTimeout(() => nameInput?.focus({ preventScroll: true }), 450);
  });
});

/* ── 7. Formulario de demostración ──────────────────────── */
const form = $("#demo-form");
const success = $("#form-success");
const errorBox = $("#form-error");
let formSubmitted = false;

const markInvalid = (field, invalid) => {
  field.closest(".field")?.classList.toggle("is-invalid", invalid);
  const control = field.closest(".field")?.querySelector("input, select, textarea");
  if (control) control.setAttribute("aria-invalid", String(invalid));
};

const validate = () => {
  let firstInvalid = null;
  const required = [$("#f-nombre"), $("#f-restaurante"), $("#f-barrio"), $("#f-whatsapp")].filter(Boolean);

  required.forEach((field) => {
    const empty = !field.value.trim();
    const digits = field.value.replace(/\D/g, "");
    const badPhone =
      field.id === "f-whatsapp" && !empty && !/^(?:57)?3\d{9}$/.test(digits);

    const invalid = empty || badPhone;
    markInvalid(field, invalid);
    if (invalid && !firstInvalid) firstInvalid = field;
  });

  return firstInvalid;
};

if (form) {
  form.addEventListener("input", (event) => {
    const field = event.target;
    if (!field.matches("input, select, textarea") || !formSubmitted) return;
    const invalid = validate();
    if (errorBox) errorBox.hidden = !invalid;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formSubmitted = true;
    const invalid = validate();

    if (errorBox) errorBox.hidden = !invalid;
    if (invalid) {
      form.classList.remove("shake-error");
      window.requestAnimationFrame(() => form.classList.add("shake-error"));
      window.setTimeout(() => form.classList.remove("shake-error"), 500);
      invalid.focus();
      return;
    }

    const nombre = $("#f-nombre").value.trim();
    const restaurante = $("#f-restaurante").value.trim();
    const barrio = $("#f-barrio")?.value.trim() || "";
    const whatsapp = $("#f-whatsapp").value.trim();
    const planRaw = planSelect?.value || "";
    const plan = planRaw ? `Plan ${planRaw}` : "Aún no lo sé";
    const mensaje = $("#f-mensaje")?.value.trim() || "";

    const firstName = nombre.split(" ")[0];
    const successName = $("#success-name");
    const successRest = $("#success-restaurant");
    if (successName) successName.textContent = firstName;
    if (successRest) successRest.textContent = restaurante;

    if (CONFIG.whatsapp) {
      const text = [
        `Hola, soy ${nombre} de ${restaurante}${barrio ? ` (Barrio ${barrio}, Cúcuta)` : ""}.`,
        `Quiero conocer el precio y agendar una demostración de Cúcuta Come para mi negocio.`,
        `Plan de interés: ${plan}.`,
        `WhatsApp: ${whatsapp}.`,
        mensaje ? `Nota: ${mensaje}` : "",
      ]
        .filter(Boolean)
        .join(" ");

      const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

      // Ocultar formulario y mostrar panel de éxito
      form.hidden = true;
      if (errorBox) errorBox.hidden = true;
      if (success) {
        success.hidden = false;
        const waActionBtn = $("#btn-open-wa");
        if (waActionBtn) waActionBtn.href = waUrl;
        success.focus();
      }

    } else {
      if (errorBox) {
        errorBox.textContent = "El contacto por WhatsApp todavía no está configurado.";
        errorBox.hidden = false;
      }
    }
  });

  $("#form-again")?.addEventListener("click", () => {
    form.reset();
    formSubmitted = false;
    $$(".field", form).forEach((field) => field.classList.remove("is-invalid"));
    if (errorBox) errorBox.hidden = true;
    if (success) success.hidden = true;
    form.hidden = false;
    nameInput?.focus();
  });
}

/* ── 7. Año del pie ────────────────────────────────────── */
const year = $("#year");
if (year) year.textContent = new Date().getFullYear();

/* ── Vista previa animada del mockup de Inicio ─────────── */
const heroPreviewButton = $(".player-play-btn");
const heroPreviewProgress = $(".player-progress-track");
const heroPreviewFill = $(".player-progress-fill");
const heroPreviewTime = $(".player-time");

if (heroPreviewButton && heroPreviewProgress && heroPreviewFill && heroPreviewTime) {
  const previewDuration = 30;
  let previewElapsed = 0;
  let previewTimer;

  const renderHeroPreview = () => {
    heroPreviewFill.style.width = `${(previewElapsed / previewDuration) * 100}%`;
    heroPreviewProgress.setAttribute("aria-valuenow", String(previewElapsed));
    heroPreviewTime.textContent = `00:${String(previewElapsed).padStart(2, "0")} / 00:${previewDuration}`;
  };

  const setHeroPreviewPlaying = (playing) => {
    window.clearInterval(previewTimer);
    heroPreviewButton.setAttribute("aria-pressed", String(playing));
    heroPreviewButton.setAttribute(
      "aria-label",
      playing ? "Pausar vista previa" : "Reproducir vista previa"
    );
    heroPreviewButton.textContent = playing ? "Ⅱ" : "▶";

    if (!playing) return;

    if (previewElapsed >= previewDuration) {
      previewElapsed = 0;
      renderHeroPreview();
    }

    previewTimer = window.setInterval(() => {
      previewElapsed = Math.min(previewElapsed + 1, previewDuration);
      renderHeroPreview();
      if (previewElapsed === previewDuration) setHeroPreviewPlaying(false);
    }, 1000);
  };

  heroPreviewButton.addEventListener("click", () => {
    setHeroPreviewPlaying(heroPreviewButton.getAttribute("aria-pressed") !== "true");
  });
  renderHeroPreview();
}

const heroSection = $("#inicio");

if (heroSection && "IntersectionObserver" in window) {
  const heroObserver = new IntersectionObserver(([entry]) => {
    document.body.classList.toggle("hero-main-in-view", entry.isIntersecting);
  }, { threshold: 0.1 });
  heroObserver.observe(heroSection);
}

const demoVideo = $("#demo-video-player");
if (demoVideo) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let videoIsVisible = false;

  demoVideo.muted = true;
  demoVideo.defaultMuted = true;

  const playDemoVideo = () => {
    if (reducedMotion.matches) return;

    const playback = demoVideo.play();
    if (playback) {
      playback.catch((error) => {
        if (error.name !== "AbortError") {
          console.warn("No se pudo iniciar automáticamente el video demo:", error);
        }
      });
    }
  };

  const updatePlaybackPreference = () => {
    if (reducedMotion.matches) {
      demoVideo.autoplay = false;
      demoVideo.pause();
    } else {
      demoVideo.autoplay = true;
      if (videoIsVisible) playDemoVideo();
    }
  };

  if ("IntersectionObserver" in window) {
    const demoVideoObserver = new IntersectionObserver(([entry]) => {
      videoIsVisible = entry.isIntersecting;
      if (videoIsVisible) {
        playDemoVideo();
      } else {
        demoVideo.pause();
      }
    }, { threshold: 0.2 });

    demoVideoObserver.observe(demoVideo);
  } else {
    videoIsVisible = true;
    playDemoVideo();
  }

  if (reducedMotion.matches) updatePlaybackPreference();
  reducedMotion.addEventListener("change", updatePlaybackPreference);
}

/* ── 8. Header cápsula fijo y estado al desplazarse ─────── */
const capsuleHeader = $("#main-header");
const updateCapsuleHeader = () => {
  capsuleHeader?.classList.toggle("is-scrolled", window.scrollY > 20);
};

if (capsuleHeader) {
  window.addEventListener("scroll", updateCapsuleHeader, { passive: true });
  updateCapsuleHeader();
}

/* ── 9. Asistente flotante ──────────────────────────────── */
const chatbotLauncher = $("#chatbot-launcher");
const chatbotWindow = $("#chatbot-window");
const chatbotClose = $("#chatbot-close-btn");
const chatbotTooltip = $("#chatbot-tooltip");
const chatbotTooltipClose = $("#chatbot-tooltip-close");
const chatbotMessages = $("#chatbot-messages");
const chatbotQuickOptions = $("#chatbot-quick-options");
const chatbotForm = $("#chatbot-form");
const chatbotInput = $("#chatbot-input");

if (
  chatbotLauncher &&
  chatbotWindow &&
  chatbotClose &&
  chatbotMessages &&
  chatbotQuickOptions &&
  chatbotForm &&
  chatbotInput
) {
  const chatbotAnswers = {
    pedido: "Para pedir, explora los restaurantes, elige uno, consulta su menú digital, selecciona tus productos y envía el pedido online.",
    restaurante: "Tu restaurante puede tener su menú digital y un panel para organizar pedidos y comandas. Agenda una demostración desde el formulario de contacto.",
    domicilios: "Cada restaurante administra y coordina a sus propios domiciliarios desde la plataforma.",
    planes: "Conoce las características de los planes Esencial, Pro y Premium en la sección Planes. Los precios se comparten por WhatsApp, sin compromiso.",
    default: "Gracias por escribirnos. Para atención personalizada, contáctanos por WhatsApp al 320 313 8714 o déjanos tu solicitud en el formulario de contacto.",
  };
  let tooltipTimer;
  let tooltipDismissed = false;
  let tooltipDelayElapsed = false;
  let chatbotTypingTimer = 0;
  let currentTypingMessage = null;
  let quizRun = 0;
  let quizState = null;

  const syncChatbotTooltip = () => {
    if (!chatbotTooltip) return;
    const shouldShow = tooltipDelayElapsed &&
      !tooltipDismissed &&
      !chatbotWindow.classList.contains("is-open");
    chatbotTooltip.classList.toggle("is-visible", shouldShow);
  };

  const setChatbotOpen = (open) => {
    chatbotWindow.classList.toggle("is-open", open);
    chatbotLauncher.classList.toggle("is-active", open);
    document.body.classList.toggle("chatbot-active", open);
    chatbotLauncher.setAttribute("aria-expanded", String(open));
    chatbotWindow.setAttribute("aria-hidden", String(!open));
    chatbotWindow.inert = !open;

    if (open) {
      window.clearTimeout(tooltipTimer);
      syncChatbotTooltip();
      chatbotInput.focus();
    } else {
      chatbotLauncher.focus();
    }
  };

  const appendChatbotMessage = (text, sender = "bot") => {
    const message = document.createElement("div");
    message.className = `chat-msg msg-${sender}`;
    message.textContent = text;
    chatbotMessages.append(message);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  };

  const appendChatbotElement = (element) => {
    const message = document.createElement("div");
    message.className = "chat-msg msg-bot";
    message.append(element);
    chatbotMessages.append(message);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    return message;
  };

  const showChatbotTyping = (callback) => {
    window.clearTimeout(chatbotTypingTimer);
    currentTypingMessage?.remove();

    const typing = document.createElement("div");
    typing.className = "chat-msg msg-bot msg-typing";
    typing.setAttribute("aria-label", "Escribiendo");
    typing.textContent = "...";
    chatbotMessages.append(typing);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    currentTypingMessage = typing;

    chatbotTypingTimer = window.setTimeout(() => {
      typing.remove();
      if (currentTypingMessage === typing) currentTypingMessage = null;
      callback();
    }, 650);
  };

  const replyToChatbotMessage = (key) => {
    showChatbotTyping(() => appendChatbotMessage(chatbotAnswers[key] || chatbotAnswers.default));
  };

  const quizQuestions = [
    {
      key: "metodo",
      prompt: "¿Cómo recibes la mayoría de tus pedidos actualmente?",
      options: ["WhatsApp", "Papel o comandas", "Llamadas telefónicas", "Canal digital"],
    },
    {
      key: "repartidores",
      prompt: "¿Tu restaurante coordina domiciliarios propios?",
      options: ["Sí, tenemos domiciliarios propios", "No, trabajamos mesa o para recoger"],
    },
    {
      key: "sedes",
      prompt: "¿Cuántas sedes o locales administras?",
      options: ["1 sede", "2 a 3 sedes", "Más de 3 sedes"],
    },
  ];

  const renderQuizQuestion = (questionIndex, runId) => {
    if (!quizState || quizRun !== runId) return;
    const question = quizQuestions[questionIndex];
    quizState.step = questionIndex;

    const box = document.createElement("div");
    box.className = "quiz-step-box";
    const title = document.createElement("p");
    title.className = "quiz-q-title";
    const stepNumber = document.createElement("strong");
    stepNumber.textContent = `Pregunta ${questionIndex + 1} de ${quizQuestions.length}: `;
    title.append(stepNumber, document.createTextNode(question.prompt));

    const options = document.createElement("div");
    options.className = "quiz-options-grid";
    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.className = "quiz-opt-btn";
      button.type = "button";
      button.dataset.quizStep = String(questionIndex);
      button.dataset.quizKey = question.key;
      button.dataset.quizValue = option;
      button.textContent = option;
      button.setAttribute("aria-label", option);
      options.append(button);
    });

    box.append(title, options);
    appendChatbotElement(box);
    options.querySelector("button")?.focus({ preventScroll: true });
  };

  const startPlanQuiz = () => {
    quizRun += 1;
    const runId = quizRun;
    quizState = { step: -1, answers: {} };
    appendChatbotMessage("🎯 Te ayudamos a identificar qué plan vale la pena revisar para tu restaurante, en tres preguntas rápidas.");
    showChatbotTyping(() => renderQuizQuestion(0, runId));
  };

  const finishPlanQuiz = (runId) => {
    if (!quizState || quizRun !== runId) return;
    const answers = { ...quizState.answers };
    quizState = null;

    const multipleSites = answers.sedes !== "1 sede";
    const recommendation = multipleSites
      ? {
          plan: "Plan Premium",
          summary: "Por manejar varias sedes, te recomendamos conversar con el equipo sobre una solución a medida. Premium incluye funciones adicionales por cotización; el alcance para tus locales se confirma contigo.",
        }
      : {
          plan: "Plan Esencial",
          summary: "Para una sede, Esencial ofrece perfil y menú en Cúcuta Come, panel de pedidos y comandas para mesero, cocina y caja. Si además quieres controlar inventario, costos y márgenes, pregunta también por Pro.",
        };
    const message = [
      "Hola Cúcuta Come, completé el diagnóstico de mi restaurante:",
      `- Cómo recibo pedidos: ${answers.metodo}`,
      `- Domiciliarios propios: ${answers.repartidores}`,
      `- Sedes: ${answers.sedes}`,
      `Me recomendaron revisar ${recommendation.plan}. ¿Me orientan sobre el alcance y el precio para mi negocio?`,
    ].join("\n");
    const whatsappUrl = new URL(`https://wa.me/${CONFIG.whatsapp}`);
    whatsappUrl.searchParams.set("text", message);

    const card = document.createElement("div");
    card.className = "chat-plan-card";
    const tag = document.createElement("span");
    tag.className = "plan-card-tag";
    tag.textContent = "Diagnóstico completado";
    const title = document.createElement("h4");
    title.append(document.createTextNode("Te recomendamos revisar "));
    const planName = document.createElement("strong");
    planName.textContent = recommendation.plan;
    title.append(planName);
    const summary = document.createElement("p");
    summary.textContent = recommendation.summary;
    const detail = document.createElement("p");
    detail.className = "quiz-summary";
    detail.textContent = `Tu operación: ${answers.metodo}; ${answers.repartidores.toLowerCase()}; ${answers.sedes}.`;
    const contactLink = document.createElement("a");
    contactLink.className = "btn-plan-wa";
    contactLink.href = whatsappUrl.href;
    contactLink.target = "_blank";
    contactLink.rel = "noopener noreferrer";
    contactLink.textContent = "Consultar por WhatsApp →";
    card.append(tag, title, summary, detail, contactLink);
    appendChatbotElement(card);
  };

  chatbotMessages.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest(".quiz-opt-btn");
    if (!button || !quizState || Number(button.dataset.quizStep) !== quizState.step) return;

    const question = quizQuestions[quizState.step];
    const value = button.dataset.quizValue;
    if (!question || !value || question.key !== button.dataset.quizKey) return;

    button.closest(".quiz-options-grid").querySelectorAll(".quiz-opt-btn").forEach((option) => {
      option.disabled = true;
    });
    quizState.answers[question.key] = value;
    appendChatbotMessage(value, "user");

    const runId = quizRun;
    const nextQuestion = quizState.step + 1;
    if (nextQuestion < quizQuestions.length) {
      showChatbotTyping(() => renderQuizQuestion(nextQuestion, runId));
    } else {
      showChatbotTyping(() => finishPlanQuiz(runId));
    }
  });

  chatbotLauncher.addEventListener("click", () => {
    setChatbotOpen(chatbotWindow.getAttribute("aria-hidden") === "true");
  });
  chatbotClose.addEventListener("click", () => setChatbotOpen(false));

  chatbotTooltipClose?.addEventListener("click", () => {
    window.clearTimeout(tooltipTimer);
    tooltipDismissed = true;
    syncChatbotTooltip();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && chatbotWindow.classList.contains("is-open")) {
      setChatbotOpen(false);
    }
  });

  tooltipTimer = window.setTimeout(() => {
    tooltipDelayElapsed = true;
    syncChatbotTooltip();
  }, 4000);

  chatbotQuickOptions.querySelectorAll(".quick-pill").forEach((button) => {
    button.addEventListener("click", () => {
      const question = button.dataset.question;
      if (question === "quiz") {
        startPlanQuiz();
        return;
      }

      appendChatbotMessage(button.textContent.trim(), "user");
      replyToChatbotMessage(question);
    });
  });

  chatbotForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = chatbotInput.value.trim();
    if (!text) return;

    appendChatbotMessage(text, "user");
    chatbotInput.value = "";

    const normalizedText = text
      .toLocaleLowerCase("es")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    let matchedKey = "default";

    if (/\b(quiz|test|diagnostico|diagnosticar)\b|plan ideal/.test(normalizedText)) {
      startPlanQuiz();
      return;
    }

    if (/\b(pedir|pedidos?|menus?|comidas?)\b/.test(normalizedText)) matchedKey = "pedido";
    else if (/\b(restaurantes?|locales?|negocios?)\b/.test(normalizedText)) matchedKey = "restaurante";
    else if (/\b(domicilios?|entregas?|entregan|repartidores?)\b/.test(normalizedText)) matchedKey = "domicilios";
    else if (/\b(planes?|precios?|costos?|cuesta|tarifas?)\b/.test(normalizedText)) matchedKey = "planes";

    replyToChatbotMessage(matchedKey);
  });
}

/* ── 10. Atención periódica y no invasiva de botones flotantes ── */
const floatingWhatsappButton = $(".wa-fab");
const floatingChatbotButton = $("#chatbot-launcher");
const reducedMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

if (floatingWhatsappButton || floatingChatbotButton) {
  const pulseAttention = (button, interval, canPulse = () => true) => {
    if (!button) return;
    window.setInterval(() => {
      if (
        document.visibilityState !== "visible" ||
        reducedMotionPreference.matches ||
        !canPulse()
      ) return;

      button.classList.remove("attention-wiggle");
      window.requestAnimationFrame(() => {
        if (
          document.visibilityState !== "visible" ||
          reducedMotionPreference.matches ||
          !canPulse()
        ) return;

        button.classList.add("attention-wiggle");
        window.setTimeout(() => button.classList.remove("attention-wiggle"), 650);
      });
    }, interval);
  };

  pulseAttention(
    floatingChatbotButton,
    7000,
    () => !floatingChatbotButton.classList.contains("is-active")
  );
  pulseAttention(
    floatingWhatsappButton,
    9500,
    () => !floatingWhatsappButton.classList.contains("is-hidden")
  );

  reducedMotionPreference.addEventListener("change", (event) => {
    if (!event.matches) return;
    floatingChatbotButton?.classList.remove("attention-wiggle");
    floatingWhatsappButton?.classList.remove("attention-wiggle");
  });
}
