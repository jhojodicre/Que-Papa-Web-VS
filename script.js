const WHATSAPP_NUMBER = "59892921712";
const PAGE = document.body.dataset.page || "home";

const products = [
  {
    id: "ajo",
    name: "Ajo",
    category: "verduras",
    unitType: "unit",
    unitLabel: "unidad",
    price: 35,
    offer: { label: "2 x $56", qty: 2, total: 56 },
    image: "img/ajo.jpeg",
    desc: "Ajo firme y aromatico para cocina diaria.",
    searchTerms: ["ajo"],
  },
  {
    id: "acelga",
    name: "Acelga",
    category: "verduras",
    unitType: "unit",
    unitLabel: "unidad",
    price: 70,
    image: "img/acelga.jpeg",
    desc: "Hojas frescas para salteados y tartas.",
    searchTerms: ["acelga"],
  },
  {
    id: "albahaca",
    name: "Albahaca",
    category: "verduras",
    unitType: "unit",
    unitLabel: "unidad",
    price: 77,
    image: "img/albahaca.jpeg",
    desc: "Hierba aromatica fresca, ideal para pastas y pizzas.",
    searchTerms: ["albahaca"],
  },
  {
    id: "apio",
    name: "Apio",
    category: "verduras",
    unitType: "variant",
    variants: [
      { key: "unidad", label: "Unidad", price: 47, qty: 1 },
      { key: "atado", label: "Atado", price: 150, qty: 1 },
    ],
    image: "img/apio.jpeg",
    desc: "Crocante y fresco, ideal para jugos y sopas.",
    searchTerms: ["apio", "atado"],
  },
  {
    id: "banana",
    name: "Banana",
    category: "frutas",
    unitType: "kg",
    price: 69,
    offer: { label: "2 kg por $110", qtyKg: 2, total: 110 },
    image: "img/banana.jpeg",
    desc: "Banana dulce y pareja, ideal para todos los dias.",
    searchTerms: ["banana", "platano"],
  },
  {
    id: "boniato-criollo",
    name: "Boniato criollo",
    category: "verduras",
    unitType: "kg",
    price: 89,
    image: "img/boniato criollo.jpeg",
    desc: "Textura cremosa y sabor tradicional.",
    searchTerms: ["boniato", "criollo"],
  },
  {
    id: "boniato-zanahoria",
    name: "Boniato zanahoria",
    category: "verduras",
    unitType: "kg",
    price: 89,
    image: "img/zapallo de zanahoria.jpeg",
    desc: "Color intenso y gran sabor.",
    searchTerms: ["boniato", "zanahoria"],
  },
  {
    id: "cebolla",
    name: "Cebolla",
    category: "verduras",
    unitType: "kg",
    price: 77,
    image: "img/cebolla.jpeg",
    desc: "Cebolla clasica para todo tipo de recetas.",
    searchTerms: ["cebolla"],
  },
  {
    id: "cebolla-colorada",
    name: "Cebolla colorada",
    category: "verduras",
    unitType: "kg",
    price: 93,
    offer: { label: "2 kg por $149", qtyKg: 2, total: 149 },
    image: "img/cebolla colorada.jpeg",
    desc: "Sabor suave para ensaladas y cocciones.",
    searchTerms: ["cebolla", "colorada"],
  },
  {
    id: "cebolla-verdeo",
    name: "Cebolla de verdeo",
    category: "verduras",
    unitType: "variant",
    variants: [
      { key: "unidad", label: "Unidad", price: 55, qty: 1 },
      { key: "atado-grande", label: "Atado grande", price: 130, qty: 1 },
    ],
    image: "img/cebolla de verdeo.jpeg",
    desc: "Fresca y aromatica para salteados.",
    searchTerms: ["verdeo", "cebolla de verdeo", "atado"],
  },
  {
    id: "choclo",
    name: "Choclo",
    category: "verduras",
    unitType: "unit",
    unitLabel: "unidad",
    price: 63,
    image: "img/choclo.jpeg",
    desc: "Choclo tierno para hervir o grillar.",
    searchTerms: ["choclo", "maiz"],
  },
  {
    id: "coliflor",
    name: "Coliflor",
    category: "verduras",
    unitType: "unit",
    unitLabel: "unidad",
    price: 155,
    image: "img/coliflor.jpeg",
    desc: "Coliflor fresca y firme, ideal para horno o vapor.",
    searchTerms: ["coliflor"],
  },
  {
    id: "espinaca",
    name: "Espinaca",
    category: "verduras",
    unitType: "unit",
    unitLabel: "unidad",
    price: 72,
    image: "img/espinaca.jpeg",
    desc: "Hojas tiernas para ensaladas y salteados.",
    searchTerms: ["espinaca"],
  },
  {
    id: "kiwi",
    name: "Kiwi",
    category: "frutas",
    unitType: "kg",
    price: 263,
    image: "img/kiwi.jpeg",
    desc: "Sabor intenso, ideal para desayunos.",
    searchTerms: ["kiwi"],
  },
  {
    id: "frutilla",
    name: "Frutilla",
    category: "frutas",
    unitType: "kg",
    price: 379,
    image: "img/frutilla.jpeg",
    desc: "Frutillas frescas y dulces.",
    searchTerms: ["frutilla", "fresa"],
  },
  {
    id: "lechuga",
    name: "Lechuga",
    category: "verduras",
    unitType: "unit",
    unitLabel: "unidad",
    price: 47,
    image: "img/lechuga.jpeg",
    desc: "Lechuga crocante y fresca.",
    searchTerms: ["lechuga"],
  },
  {
    id: "limon",
    name: "Limon",
    category: "frutas",
    unitType: "kg",
    price: 56,
    image: "img/limon.jpeg",
    desc: "Jugo natural para comidas y bebidas.",
    searchTerms: ["limon"],
  },
  {
    id: "mandarina",
    name: "Mandarina",
    category: "frutas",
    unitType: "kg",
    price: 69,
    offer: { label: "2 kg por $110", qtyKg: 2, total: 110 },
    image: "img/mandarina.jpeg",
    desc: "Mandarina dulce y facil de pelar.",
    searchTerms: ["mandarina"],
  },
  {
    id: "manzana-red",
    name: "Manzana Red",
    category: "frutas",
    unitType: "kg",
    price: 179,
    image: "img/manzana red.jpeg",
    desc: "Crujiente y dulce, ideal para colaciones.",
    searchTerms: ["manzana", "red"],
  },
  {
    id: "manzana-gala",
    name: "Manzana Royal Gala",
    category: "frutas",
    unitType: "kg",
    price: 95,
    image: "img/manzana royal.jpeg",
    desc: "Equilibrio perfecto entre dulzor y jugosidad.",
    searchTerms: ["manzana", "gala", "royal gala"],
  },
  {
    id: "manzana-granny",
    name: "Manzana Granny Smith",
    category: "frutas",
    unitType: "kg",
    price: 189,
    image: "img/manzana granny.jpeg",
    desc: "Manzana verde, fresca y acida.",
    searchTerms: ["manzana", "granny", "smith"],
  },
  {
    id: "morron-rojo",
    name: "Morron rojo",
    category: "verduras",
    unitType: "kg",
    price: 359,
    image: "img/morron rojo.jpeg",
    desc: "Color y sabor para tus comidas.",
    searchTerms: ["morron", "rojo"],
  },
  {
    id: "morron-verde",
    name: "Morron verde",
    category: "verduras",
    unitType: "kg",
    price: 290,
    image: "img/morron verde.jpeg",
    desc: "Morron verde de excelente firmeza.",
    searchTerms: ["morron", "verde"],
  },
  {
    id: "naranja",
    name: "Naranja",
    category: "frutas",
    unitType: "kg",
    price: 49,
    offer: { label: "2 kg por $80", qtyKg: 2, total: 80 },
    image: "img/naranja.jpeg",
    desc: "Naranja jugosa para jugos y colaciones.",
    searchTerms: ["naranja"],
  },
  {
    id: "palta",
    name: "Palta",
    category: "frutas",
    unitType: "unit",
    unitLabel: "unidad",
    price: 49,
    offer: { label: "2 x $80", qty: 2, total: 80 },
    image: "img/palta.jpeg",
    desc: "Palta cremosa para ensaladas y tostadas.",
    searchTerms: ["palta"],
  },
  {
    id: "papa-especial",
    name: "Papa especial",
    category: "verduras",
    unitType: "kg",
    price: 69,
    offer: { label: "2 kg por $110", qtyKg: 2, total: 110 },
    image: "img/papa.jpeg",
    desc: "La mas pedida para todo tipo de comidas.",
    searchTerms: ["papa", "especial"],
  },
  {
    id: "pera-williams",
    name: "Pera Williams",
    category: "frutas",
    unitType: "kg",
    price: 195,
    image: "img/pera williams.jpeg",
    desc: "Pera dulce y fragante.",
    searchTerms: ["pera", "williams"],
  },
  {
    id: "perejil",
    name: "Perejil",
    category: "verduras",
    unitType: "variant",
    variants: [
      { key: "unidad", label: "Unidad", price: 55, qty: 1 },
      { key: "atado", label: "Atado", price: 150, qty: 1 },
    ],
    image: "img/perejil.jpeg",
    desc: "Aroma intenso para tus recetas.",
    searchTerms: ["perejil", "atado"],
  },
  {
    id: "puerro",
    name: "Puerro",
    category: "verduras",
    unitType: "variant",
    variants: [
      { key: "unidad", label: "Unidad", price: 55, qty: 1 },
      { key: "x6", label: "x6", price: 150, qty: 1 },
    ],
    image: "img/puerro.jpeg",
    desc: "Puerro fresco para sopas y salteados.",
    searchTerms: ["puerro", "x6"],
  },
  {
    id: "pepino",
    name: "Pepino",
    category: "verduras",
    unitType: "kg",
    price: 150,
    image: "img/pepino.jpeg",
    desc: "Pepino fresco y crocante para ensaladas.",
    searchTerms: ["pepino"],
  },
  {
    id: "remolacha",
    name: "Remolacha",
    category: "verduras",
    unitType: "fixedPack",
    fixedLabel: "6 unidades",
    fixedQty: 1,
    price: 155,
    image: "img/remolacha.jpeg",
    desc: "Pack de 6 unidades frescas.",
    searchTerms: ["remolacha"],
  },
  {
    id: "tomate",
    name: "Tomate",
    category: "verduras",
    unitType: "kg",
    price: 265,
    image: "img/tomate.jpeg",
    desc: "Tomate rojo, firme y sabroso.",
    searchTerms: ["tomate"],
  },
  {
    id: "zanahoria",
    name: "Zanahoria",
    category: "verduras",
    unitType: "kg",
    price: 65,
    offer: { label: "2 kg por $100", qtyKg: 2, total: 100 },
    image: "img/zanahoria.jpeg",
    desc: "Zanahoria fresca para todo tipo de preparaciones.",
    searchTerms: ["zanahoria"],
  },
  {
    id: "zapallitos",
    name: "Zapallitos",
    category: "verduras",
    unitType: "kg",
    price: 130,
    offer: { label: "2 kg por $208", qtyKg: 2, total: 208 },
    image: "img/zapallitos.jpeg",
    desc: "Zapallitos tiernos y parejos.",
    searchTerms: ["zapallito", "zapallitos"],
  },
  {
    id: "zapallo-calabacin",
    name: "Zapallo Calabacin",
    category: "verduras",
    unitType: "kg",
    price: 65,
    image: "img/zapallo calabacin.jpeg",
    desc: "Ideal para pure y horno.",
    searchTerms: ["zapallo", "calabacin"],
  },
  {
    id: "zapallo-kabutia",
    name: "Zapallo Kabutia",
    category: "verduras",
    unitType: "kg",
    price: 65,
    image: "img/zapallo kabutia.jpeg",
    desc: "Dulce y cremoso para comidas de invierno.",
    searchTerms: ["zapallo", "kabutia"],
  },
  {
    id: "zuchini",
    name: "Zuchini",
    category: "verduras",
    unitType: "kg",
    price: 139,
    image: "img/zuchini.jpeg",
    desc: "Zuchini tierno para grillar o saltear.",
    searchTerms: ["zuchini", "zucchini"],
  },
  {
    id: "huevos",
    name: "Huevos",
    category: "huevos",
    unitType: "variant",
    variants: [
      { key: "docena", label: "Docena", price: 140, qty: 1 },
      { key: "maple", label: "Maple", price: 325, qty: 1 },
    ],
    image: "img/huevo.jpeg",
    desc: "Huevos frescos en docena o maple.",
    searchTerms: ["huevos", "docena", "maple"],
  },
  {
    id: "toky-perro",
    name: "Toky Perro",
    category: "mascotas",
    unitType: "pet",
    kgPrice: 65,
    bag: { label: "Bolsa 7 kg", kg: 7, total: 390 },
    image: "img/tokyperro.jpeg",
    desc: "Alimento para perro por kilo o bolsa completa.",
    searchTerms: ["toky", "perro", "mascotas"],
  },
  {
    id: "wits-perro",
    name: "Wits Perro",
    category: "mascotas",
    unitType: "pet",
    kgPrice: 85,
    bag: { label: "Bolsa 8 kg", kg: 8, total: 491 },
    image: "img/wits perro.jpeg",
    desc: "Nutricion balanceada para perro.",
    searchTerms: ["wits", "perro", "mascotas"],
  },
  {
    id: "witts-gato",
    name: "Witts Gato",
    category: "mascotas",
    unitType: "pet",
    kgPrice: 130,
    bag: { label: "Bolsa 8 kg", kg: 8, total: 941 },
    image: "img/procat.jpeg",
    desc: "Alimento para gato por kilo o bolsa.",
    searchTerms: ["witts", "gato", "mascotas"],
  },
];

const state = {
  search: "",
  filter: "todos",
  cart: [],
  selectedProduct: null,
  selectedVariantKey: null,
  selectedQty: 0,
  selectedUseOffer: false,
};

const $ = (selector) => document.querySelector(selector);

const catalogGrid = $("#catalogGrid");
const offersGrid = $("#offersGrid");
const filterChips = $("#filterChips");
const searchInput = $("#searchInput");
const catalogCount = $("#catalogCount");
const productModal = $("#productModal");
const productModalContent = $("#productModalContent");
const closeProductModal = $("#closeProductModal");
const cartFab = $("#cartFab");
const cartFabCount = $("#cartFabCount");
const cartPanel = $("#cartPanel");
const closeCart = $("#closeCart");
const cartItems = $("#cartItems");
const cartTotal = $("#cartTotal");
const clearCart = $("#clearCart");
const checkoutBtn = $("#checkoutBtn");
const checkoutModal = $("#checkoutModal");
const closeCheckoutModal = $("#closeCheckoutModal");
const checkoutForm = $("#checkoutForm");
const toast = $("#toast");
const header = $(".header");
const menuBtn = $("#menuBtn");
const mobileDrawer = $("#mobileDrawer");

const numberUY = new Intl.NumberFormat("es-UY", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatMoney(value) {
  return "$" + numberUY.format(value);
}

function productPriceLabel(product) {
  if (product.unitType === "kg") return `${formatMoney(product.price)}/kg`;
  if (product.unitType === "unit") return `${formatMoney(product.price)} c/u`;
  if (product.unitType === "variant") {
    const first = product.variants[0];
    return `${first.label} ${formatMoney(first.price)}`;
  }
  if (product.unitType === "pet") {
    return `${formatMoney(product.kgPrice)}/kg | ${product.bag.label} ${formatMoney(product.bag.total)}`;
  }
  return `${formatMoney(product.price)}`;
}

function productPriceShort(product) {
  if (product.unitType === "kg") return formatMoney(product.price);
  if (product.unitType === "unit") return formatMoney(product.price);
  if (product.unitType === "variant") return formatMoney(product.variants[0].price);
  if (product.unitType === "pet") return formatMoney(product.kgPrice);
  return formatMoney(product.price);
}

function buildChips() {
  if (!filterChips) return;

  const chips = [
    { key: "todos",     label: "Todos" },
    { key: "frutas",    label: "Frutas" },
    { key: "verduras",  label: "Verduras" },
    { key: "mascotas",  label: "Alimentos para mascotas" },
    { key: "huevos",    label: "Huevos" },
  ];

  filterChips.innerHTML = chips
    .map(
      (chip) =>
        `<button class="chip ${chip.key === state.filter ? "is-active" : ""}" data-filter="${chip.key}">${chip.label}</button>`
    )
    .join("");

  filterChips.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.filter = chip.dataset.filter;
      renderCatalog();
      buildChips();
    });
  });
}

function filteredProducts() {
  let list = [...products];

  if (state.filter && state.filter !== "todos") {
    list = list.filter((p) => p.category === state.filter);
  }

  if (state.search.trim()) {
    const term = state.search.trim().toLowerCase();
    list = list.filter((p) => {
      const base = `${p.name} ${p.category} ${(p.searchTerms || []).join(" ")}`.toLowerCase();
      return base.includes(term);
    });
  }

  list.sort((a, b) => a.name.localeCompare(b.name, "es"));

  return list;
}

function renderCatalog() {
  if (!catalogGrid || !catalogCount) return;

  const list = filteredProducts();
  catalogCount.textContent = `${list.length} productos disponibles`;

  catalogGrid.innerHTML = list
    .map(
      (product) => `
      <article class="catalog-card">
        <div class="product-thumb">
          ${product.offer ? '<span class="offer-label">Oferta</span>' : ""}
          <img loading="lazy" src="${product.image}" alt="${product.name}" />
        </div>
        <h3>${product.name}</h3>
        <p class="price">${productPriceShort(product)}</p>
        ${product.offer ? `<span class="offer-badge-card">OFERTA · ${product.offer.label}</span>` : '<p class="meta">Producto fresco</p>'}
        <button class="btn btn--primary" data-open="${product.id}">Ver producto</button>
      </article>
    `
    )
    .join("");

  catalogGrid.querySelectorAll("button[data-open]").forEach((btn) => {
    btn.addEventListener("click", () => openProduct(btn.dataset.open));
  });
}

function renderOffers() {
  if (!offersGrid) return;

  const offers = products.filter((p) => p.offer);
  offersGrid.innerHTML = offers
    .map(
      (product) => `
      <article>
        <div class="product-thumb">
          <span class="offer-label">🔥 Oferta</span>
          <img loading="lazy" src="${product.image}" alt="${product.name}" />
        </div>
        <h3>${product.name}</h3>
        <p class="old-price">${productPriceLabel(product)}</p>
        <p class="promo-price">${product.offer.label}</p>
        <button class="btn ${PAGE === "catalogo" ? "btn--primary" : "btn--ghost"}" data-open="${product.id}">${PAGE === "catalogo" ? "Agregar al carrito" : "Ver producto"}</button>
      </article>
    `
    )
    .join("");

  offersGrid.querySelectorAll("button[data-open]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (PAGE === "catalogo") {
        openProduct(btn.dataset.open);
      } else {
        window.location.href = "catalogo.html?filtro=ofertas#promociones-catalogo";
      }
    });
  });
}

function calcTotal(product, qty, useOffer, variantKey) {
  if (product.unitType === "kg") {
    if (useOffer && product.offer) return product.offer.total;
    return qty * product.price;
  }

  if (product.unitType === "unit") {
    if (useOffer && product.offer) return product.offer.total;
    return qty * product.price;
  }

  if (product.unitType === "variant") {
    const selectedVariant = product.variants.find((v) => v.key === variantKey) || product.variants[0];
    return qty * selectedVariant.price;
  }

  if (product.unitType === "fixedPack") {
    return qty * product.price;
  }

  if (product.unitType === "pet") {
    if (variantKey === "bag") return qty * product.bag.total;
    return qty * product.kgPrice;
  }

  return qty * product.price;
}

function qtyLabel(product, qty, useOffer, variantKey) {
  if (product.unitType === "kg") {
    if (useOffer && product.offer) return `${product.offer.qtyKg} kg (oferta)`;
    return `${qty.toFixed(1)} kg`;
  }

  if (product.unitType === "unit") {
    if (useOffer && product.offer) return `${product.offer.qty} unidades (oferta)`;
    return `${qty} unidad${qty > 1 ? "es" : ""}`;
  }

  if (product.unitType === "variant") {
    const variant = product.variants.find((v) => v.key === variantKey) || product.variants[0];
    return `${qty} x ${variant.label}`;
  }

  if (product.unitType === "fixedPack") {
    return `${qty} x ${product.fixedLabel}`;
  }

  if (product.unitType === "pet") {
    if (variantKey === "bag") return `${qty} x ${product.bag.label}`;
    return `${qty.toFixed(1)} kg`;
  }

  return `${qty}`;
}

function openProduct(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  state.selectedProduct = product;
  state.selectedUseOffer = false;
  state.selectedVariantKey = null;

  if (product.unitType === "kg") {
    state.selectedQty = 0;
  } else {
    state.selectedQty = 1;
  }

  if (product.unitType === "variant") {
    state.selectedVariantKey = product.variants[0].key;
  }

  if (product.unitType === "pet") {
    state.selectedVariantKey = "kg";
    state.selectedQty = 0;
  }

  if (product.unitType === "fixedPack") {
    state.selectedQty = 1;
  }

  renderProductModal();
  productModal.showModal();
}

function renderProductModal() {
  const product = state.selectedProduct;
  if (!product) return;

  let qtyBlock = "";
  const total = calcTotal(product, state.selectedQty, state.selectedUseOffer, state.selectedVariantKey);

  const isOffer = state.selectedUseOffer && !!product.offer;
  const priceDisplay = productPriceLabel(product);
  const priceClass = "";
  const offerBadge = product.offer
    ? `<span class="modal-offer-badge">${product.offer.label} — oferta</span>`
    : "";

  if (product.unitType === "kg") {
    const qtyVal = state.selectedUseOffer ? `${product.offer.qtyKg} kg` : `${state.selectedQty.toFixed(1)} kg`;
    qtyBlock = `
      <p class="modal-section-label">Elegi la cantidad</p>
      <div class="modal-qty-control">
        <button type="button" class="modal-qty-btn modal-qty-btn--minus" data-action="minus-100">−</button>
        <div class="modal-qty-center">
          <span class="modal-qty-unit">Cantidad</span>
          <span class="modal-qty-display">${qtyVal}</span>
        </div>
        <button type="button" class="modal-qty-btn modal-qty-btn--plus" data-action="plus-100">+</button>
      </div>
      <p class="modal-qty-hint">Cada toque suma o quita 100 g</p>
      <div class="modal-presets">
        <button type="button" data-action="set-half">½ kg</button>
        <button type="button" data-action="set-1kg">1 kg</button>
        ${product.offer ? `<button type="button" data-action="set-offer">2 kg ★</button>` : ""}
      </div>`;
  }

  if (product.unitType === "unit") {
    const qtyVal = state.selectedUseOffer && product.offer ? `${product.offer.qty}` : `${state.selectedQty}`;
    qtyBlock = `
      <p class="modal-section-label">Elegi la cantidad</p>
      <div class="modal-qty-control">
        <button type="button" class="modal-qty-btn modal-qty-btn--minus" data-action="minus-unit">−</button>
        <div class="modal-qty-center">
          <span class="modal-qty-unit">Cantidad</span>
          <span class="modal-qty-display">${qtyVal}</span>
        </div>
        <button type="button" class="modal-qty-btn modal-qty-btn--plus" data-action="plus-unit">+</button>
      </div>
      ${product.offer ? `<div class="modal-presets"><button type="button" data-action="set-offer">${product.offer.label} ★</button></div>` : ""}`;
  }

  if (product.unitType === "variant") {
    qtyBlock = `
      <p class="modal-section-label">Elegi la opcion</p>
      <div class="modal-variants">
        ${product.variants.map(v =>
          `<button type="button" class="modal-variant-btn ${state.selectedVariantKey === v.key ? "is-active" : ""}" data-action="pick-variant" data-variant="${v.key}">
            <span>${v.qty || 1} ${v.label}</span><span class="modal-variant-price">${formatMoney(v.price)}</span>
          </button>`
        ).join("")}
      </div>
      <p class="modal-section-label" style="margin-top:14px">Cantidad</p>
      <div class="modal-qty-control">
        <button type="button" class="modal-qty-btn modal-qty-btn--minus" data-action="minus-unit">−</button>
        <div class="modal-qty-center"><span class="modal-qty-unit">Cantidad</span><span class="modal-qty-display">${state.selectedQty}</span></div>
        <button type="button" class="modal-qty-btn modal-qty-btn--plus" data-action="plus-unit">+</button>
      </div>`;
  }

  if (product.unitType === "fixedPack") {
    qtyBlock = `
      <p class="modal-section-label">${product.fixedLabel}</p>
      <div class="modal-qty-control">
        <button type="button" class="modal-qty-btn modal-qty-btn--minus" data-action="minus-unit">−</button>
        <div class="modal-qty-center"><span class="modal-qty-unit">Cantidad</span><span class="modal-qty-display">${state.selectedQty}</span></div>
        <button type="button" class="modal-qty-btn modal-qty-btn--plus" data-action="plus-unit">+</button>
      </div>`;
  }

  if (product.unitType === "pet") {
    const isBag = state.selectedVariantKey === "bag";
    const qtyVal = isBag ? `${state.selectedQty}` : `${state.selectedQty.toFixed(1)} kg`;
    qtyBlock = `
      <p class="modal-section-label">Presentacion</p>
      <div class="modal-variants">
        <button type="button" class="modal-variant-btn ${!isBag ? "is-active" : ""}" data-action="pet-kg">
          <span>Por kilo</span><span class="modal-variant-price">${formatMoney(product.kgPrice)}/kg</span>
        </button>
        <button type="button" class="modal-variant-btn ${isBag ? "is-active" : ""}" data-action="pet-bag">
          <span>${product.bag.label}</span><span class="modal-variant-price">${formatMoney(product.bag.total)}</span>
        </button>
      </div>
      <p class="modal-section-label" style="margin-top:14px">Cantidad</p>
      <div class="modal-qty-control">
        <button type="button" class="modal-qty-btn modal-qty-btn--minus" data-action="${isBag ? "minus-unit" : "minus-100"}">−</button>
        <div class="modal-qty-center"><span class="modal-qty-unit">Cantidad</span><span class="modal-qty-display">${qtyVal}</span></div>
        <button type="button" class="modal-qty-btn modal-qty-btn--plus" data-action="${isBag ? "plus-unit" : "plus-100"}">+</button>
      </div>`;
  }

  productModalContent.innerHTML = `
    <div class="modal-img-col">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="modal-detail">
      <div class="modal-detail__scroll">
        <span class="modal-category-tag">${product.category}</span>
        <h2 class="modal-title">${product.name}</h2>
        <p class="modal-desc">${product.desc}</p>
        <div class="modal-price-box">
          <p class="modal-price-label">Precio</p>
          <div class="modal-price-row">
            <span class="modal-price-value ${priceClass}">${priceDisplay}</span>
            ${offerBadge}
          </div>
        </div>
        ${qtyBlock}
      </div>
      <div class="modal-footer">
        <div>
          <p class="modal-subtotal__label">Subtotal</p>
          <p class="modal-subtotal__value ${isOffer ? "modal-subtotal__value--offer" : ""}">${formatMoney(total)}</p>
        </div>
        <button class="modal-add-btn" type="button" id="addToCartBtn" ${total <= 0 ? "disabled" : ""}>
          <i data-lucide="shopping-cart"></i> Agregar al carrito
        </button>
      </div>
    </div>
  `;

  productModalContent.querySelectorAll("button[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;

      if (action === "plus-100") {
        state.selectedUseOffer = false;
        state.selectedQty += 0.1;
      }
      if (action === "minus-100") {
        state.selectedUseOffer = false;
        state.selectedQty = Math.max(0, state.selectedQty - 0.1);
      }
      if (action === "set-half") {
        state.selectedUseOffer = false;
        state.selectedQty = 0.5;
      }
      if (action === "set-1kg") {
        state.selectedUseOffer = false;
        state.selectedQty = 1;
      }
      if (action === "set-offer") {
        state.selectedUseOffer = true;
        state.selectedQty = product.unitType === "kg" ? product.offer.qtyKg : product.offer.qty;
      }
      if (action === "plus-unit") state.selectedQty += 1;
      if (action === "minus-unit") state.selectedQty = Math.max(1, state.selectedQty - 1);
      if (action === "pick-variant") state.selectedVariantKey = btn.dataset.variant;
      if (action === "pet-kg") {
        state.selectedVariantKey = "kg";
        state.selectedQty = Math.max(state.selectedQty, 0.1);
      }
      if (action === "pet-bag") {
        state.selectedVariantKey = "bag";
        state.selectedQty = Math.max(1, Math.round(state.selectedQty));
      }

      if (product.unitType === "kg" || (product.unitType === "pet" && state.selectedVariantKey === "kg")) {
        state.selectedQty = Number(state.selectedQty.toFixed(1));
      }

      renderProductModal();
    });
  });

  $("#addToCartBtn").addEventListener("click", addCurrentProductToCart);
}

function addCurrentProductToCart() {
  const product = state.selectedProduct;
  if (!product) return;

  if (product.unitType === "kg" && !state.selectedUseOffer && state.selectedQty <= 0) {
    showToast("Selecciona al menos 100 g.");
    return;
  }

  if (product.unitType === "pet" && state.selectedVariantKey === "kg" && state.selectedQty <= 0) {
    showToast("Selecciona al menos 100 g.");
    return;
  }

  const qty =
    product.unitType === "kg" && state.selectedUseOffer
      ? product.offer.qtyKg
      : product.unitType === "unit" && state.selectedUseOffer
      ? product.offer.qty
      : state.selectedQty;

  const lineTotal = calcTotal(product, qty, state.selectedUseOffer, state.selectedVariantKey);
  const label = qtyLabel(product, qty, state.selectedUseOffer, state.selectedVariantKey);

  const cartItem = {
    uid: `${product.id}-${Date.now()}`,
    productId: product.id,
    name: product.name,
    image: product.image,
    qty,
    label,
    total: lineTotal,
    variantKey: state.selectedVariantKey,
    useOffer: state.selectedUseOffer,
  };

  state.cart.push(cartItem);
  renderCart();
  if (productModal) productModal.close();
  showToast("Producto agregado.");
}

function renderCart() {
  if (!cartItems || !cartTotal || !cartFabCount) return;

  if (state.cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <i data-lucide="shopping-basket"></i>
        <p>Tu carrito esta vacio.</p>
        <a class="btn btn--primary" href="catalogo.html">Ver catalogo</a>
      </div>`;
    if (window.lucide) window.lucide.createIcons();
  } else {
    cartItems.innerHTML = state.cart
      .map(
        (item) => `
      <article class="cart-item">
        <div class="cart-item__img">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="cart-item__body">
          <div class="cart-item__top">
            <strong>${item.name}</strong>
            <button class="cart-item__del" data-delete="${item.uid}" aria-label="Eliminar">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
          <p class="cart-item__label">${item.label}</p>
          <p class="cart-item__price">${formatMoney(item.total)}</p>
        </div>
      </article>
    `
      )
      .join("");
    if (window.lucide) window.lucide.createIcons();
  }

  const total = state.cart.reduce((sum, item) => sum + item.total, 0);
  cartTotal.textContent = formatMoney(total);
  cartFabCount.textContent = state.cart.length;
  const cartHeaderCount = document.getElementById("cartHeaderCount");
  if (cartHeaderCount) cartHeaderCount.textContent = state.cart.length;

  cartItems.querySelectorAll("button[data-delete],.cart-item__del[data-delete]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.cart = state.cart.filter((item) => item.uid !== btn.dataset.delete);
      renderCart();
    });
  });

  cartItems.querySelectorAll("button[data-edit]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = state.cart.find((entry) => entry.uid === btn.dataset.edit);
      if (!item) return;
      openProduct(item.productId);
      state.cart = state.cart.filter((entry) => entry.uid !== item.uid);
      renderCart();
    });
  });
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function openCart() {
  if (!cartPanel) return;
  cartPanel.classList.add("is-open");
  cartPanel.setAttribute("aria-hidden", "false");
}

function closeCartPanel() {
  if (!cartPanel) return;
  cartPanel.classList.remove("is-open");
  cartPanel.setAttribute("aria-hidden", "true");
}

function getWhatsappMessage(formData) {
  const total = state.cart.reduce((sum, item) => sum + item.total, 0);
  const lines = state.cart
    .map((item) => `• ${item.name} — ${item.label} — ${formatMoney(item.total)}`)
    .join("\n\n");

  const delivery = formData.delivery || "Entrega a Domicilio";
  const address = delivery === "Entrega a Domicilio" ? `\n📍 Direccion: ${formData.address || "Sin indicar"}` : "\n🏪 Retira en el local";

  return `🛒 Nuevo pedido - Que Papa\n\n📦 Productos:\n\n${lines}\n\n💰 Total:\n${formatMoney(total)}\n\n👤 Cliente:\n${formData.name}\n\n📞 ${formData.phone}\n\n📧 ${formData.email}${address}\n\n💳 Pago: ${formData.payment}\n\n---\nMuchas gracias por elegir Que Papa 🍎🥬\nDe la tierra a tu hogar.`;
}

function bindEvents() {
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.search = searchInput.value;
      renderCatalog();
    });
  }

  if (closeProductModal && productModal) {
    closeProductModal.addEventListener("click", () => productModal.close());
    productModal.addEventListener("click", (event) => {
      const rect = productModal.getBoundingClientRect();
      const isOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;
      if (isOutside) productModal.close();
    });
  }

  if (cartFab) cartFab.addEventListener("click", openCart);
  const cartHeaderBtn = document.getElementById("cartHeaderBtn");
  if (cartHeaderBtn) cartHeaderBtn.addEventListener("click", openCart);
  if (closeCart) closeCart.addEventListener("click", closeCartPanel);

  if (clearCart) {
    clearCart.addEventListener("click", () => {
      state.cart = [];
      renderCart();
    });
  }

  // Checkout panel logic
  const cartView = document.getElementById("cartView");
  const checkoutView = document.getElementById("checkoutView");
  const backToCart = document.getElementById("backToCart");
  const backToCart2 = document.getElementById("backToCart2");
  const closeCheckoutPanel = document.getElementById("closeCheckoutPanel");
  const addressField = document.getElementById("addressField");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const checkoutSubmitBtn = document.getElementById("checkoutSubmitBtn");

  function showCheckout() {
    if (cartView) cartView.classList.add("is-hidden");
    if (checkoutView) checkoutView.classList.add("is-active");
    if (checkoutTotal) {
      const total = state.cart.reduce((sum, item) => sum + item.total, 0);
      checkoutTotal.textContent = formatMoney(total);
    }
    if (window.lucide) window.lucide.createIcons();
  }

  function showCart() {
    if (cartView) cartView.classList.remove("is-hidden");
    if (checkoutView) checkoutView.classList.remove("is-active");
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (state.cart.length === 0) {
        showToast("Agrega productos antes de finalizar.");
        return;
      }
      showCheckout();
    });
  }

  if (backToCart) backToCart.addEventListener("click", showCart);
  if (backToCart2) backToCart2.addEventListener("click", showCart);
  if (closeCheckoutPanel) closeCheckoutPanel.addEventListener("click", () => { closeCartPanel(); showCart(); });

  // Show/hide address field based on delivery radio
  document.querySelectorAll("input[name='delivery']").forEach((radio) => {
    radio.addEventListener("change", () => {
      if (addressField) {
        addressField.style.display = radio.value === "Entrega a Domicilio" ? "" : "none";
      }
    });
  });

  // Submit via external button
  if (checkoutSubmitBtn && checkoutForm) {
    checkoutSubmitBtn.addEventListener("click", () => checkoutForm.requestSubmit());
  }

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (state.cart.length === 0) return;
      const formData = Object.fromEntries(new FormData(checkoutForm));
      const text = getWhatsappMessage(formData);
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(whatsappURL, "_blank", "noopener,noreferrer");
      closeCartPanel();
      showCart();
      checkoutForm.reset();
      state.cart = [];
      renderCart();
    });
  }

  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    });
  }

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("is-open");
      mobileDrawer.setAttribute("aria-hidden", String(!isOpen));
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (mobileDrawer && menuBtn) {
    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("is-open");
        mobileDrawer.setAttribute("aria-hidden", "true");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );
  revealItems.forEach((item) => observer.observe(item));

  const counters = document.querySelectorAll(".js-count");
  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.countTo || "0");
        const suffix = el.dataset.suffix || "";
        const duration = 1200;
        const start = performance.now();

        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const value = Math.floor(target * eased);
          el.textContent = `${value}${suffix}`;
          if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    },
    { threshold: 0.55 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

function init() {
  renderOffers();
  buildChips();

  renderCatalog();
  renderCart();
  bindEvents();

  if (PAGE === "catalogo") {
    const fromHomeProduct = new URLSearchParams(window.location.search).get("producto");
    if (fromHomeProduct) openProduct(fromHomeProduct);
  }

  if (window.lucide) window.lucide.createIcons();
}

init();
