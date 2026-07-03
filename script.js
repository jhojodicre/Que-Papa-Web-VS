const WHATSAPP_NUMBER = "59899999999";
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
    image:
      "https://images.unsplash.com/photo-1615477550927-b7b18f29db15?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    desc: "Hojas frescas para salteados y tartas.",
    searchTerms: ["acelga"],
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
    image:
      "https://images.unsplash.com/photo-1615485737651-8f0f4f770300?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=900&q=80",
    desc: "Banana dulce y pareja, ideal para todos los dias.",
    searchTerms: ["banana", "platano"],
  },
  {
    id: "boniato-criollo",
    name: "Boniato criollo",
    category: "verduras",
    unitType: "kg",
    price: 88,
    image:
      "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&w=900&q=80",
    desc: "Textura cremosa y sabor tradicional.",
    searchTerms: ["boniato", "criollo"],
  },
  {
    id: "boniato-zanahoria",
    name: "Boniato zanahoria",
    category: "verduras",
    unitType: "kg",
    price: 123,
    offer: { label: "2 kg por $197", qtyKg: 2, total: 197 },
    image:
      "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=900&q=80",
    desc: "Color intenso y gran sabor.",
    searchTerms: ["boniato", "zanahoria"],
  },
  {
    id: "cebolla",
    name: "Cebolla",
    category: "verduras",
    unitType: "kg",
    price: 66,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=80",
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
      { key: "atado-grande", label: "Atado grande", price: 100, qty: 1 },
    ],
    image:
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=80",
    desc: "Choclo tierno para hervir o grillar.",
    searchTerms: ["choclo", "maiz"],
  },
  {
    id: "kiwi",
    name: "Kiwi",
    category: "frutas",
    unitType: "kg",
    price: 263,
    image:
      "https://images.unsplash.com/photo-1610917047732-9f8ebbbe2536?auto=format&fit=crop&w=900&q=80",
    desc: "Sabor intenso, ideal para desayunos.",
    searchTerms: ["kiwi"],
  },
  {
    id: "lechuga",
    name: "Lechuga",
    category: "verduras",
    unitType: "unit",
    unitLabel: "unidad",
    price: 43,
    image:
      "https://images.unsplash.com/photo-1622205313162-be1d5712a43e?auto=format&fit=crop&w=900&q=80",
    desc: "Lechuga crocante y fresca.",
    searchTerms: ["lechuga"],
  },
  {
    id: "limon",
    name: "Limon",
    category: "frutas",
    unitType: "kg",
    price: 82,
    image:
      "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=900&q=80",
    desc: "Mandarina dulce y facil de pelar.",
    searchTerms: ["mandarina"],
  },
  {
    id: "manzana-red",
    name: "Manzana Red",
    category: "frutas",
    unitType: "kg",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=900&q=80",
    desc: "Crujiente y dulce, ideal para colaciones.",
    searchTerms: ["manzana", "red"],
  },
  {
    id: "manzana-gala",
    name: "Manzana Royal Gala",
    category: "frutas",
    unitType: "kg",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1576179635662-9d1983e97e1a?auto=format&fit=crop&w=900&q=80",
    desc: "Equilibrio perfecto entre dulzor y jugosidad.",
    searchTerms: ["manzana", "gala", "royal gala"],
  },
  {
    id: "manzana-granny",
    name: "Manzana Granny Smith",
    category: "frutas",
    unitType: "kg",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1610397962076-02407a169a5b?auto=format&fit=crop&w=900&q=80",
    desc: "Manzana verde, fresca y acida.",
    searchTerms: ["manzana", "granny", "smith"],
  },
  {
    id: "morron-rojo",
    name: "Morron rojo",
    category: "verduras",
    unitType: "kg",
    price: 246,
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=900&q=80",
    desc: "Color y sabor para tus comidas.",
    searchTerms: ["morron", "rojo"],
  },
  {
    id: "morron-verde",
    name: "Morron verde",
    category: "verduras",
    unitType: "kg",
    price: 218,
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
    desc: "La mas pedida para todo tipo de comidas.",
    searchTerms: ["papa", "especial"],
  },
  {
    id: "pera-williams",
    name: "Pera Williams",
    category: "frutas",
    unitType: "kg",
    price: 195,
    image:
      "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&w=900&q=80",
    desc: "Puerro fresco para sopas y salteados.",
    searchTerms: ["puerro", "x6"],
  },
  {
    id: "remolacha",
    name: "Remolacha",
    category: "verduras",
    unitType: "fixedPack",
    fixedLabel: "6 unidades",
    fixedQty: 1,
    price: 155,
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=80",
    desc: "Pack de 6 unidades frescas.",
    searchTerms: ["remolacha"],
  },
  {
    id: "repollo-blanco",
    name: "Repollo blanco",
    category: "verduras",
    unitType: "unit",
    unitLabel: "unidad",
    price: 144,
    image:
      "https://images.unsplash.com/photo-1598030343246-f1e8dd0d8ca8?auto=format&fit=crop&w=900&q=80",
    desc: "Repollo firme y rendidor.",
    searchTerms: ["repollo", "blanco"],
  },
  {
    id: "tomate",
    name: "Tomate",
    category: "verduras",
    unitType: "kg",
    price: 169,
    image:
      "https://images.unsplash.com/photo-1546470427-e5ac89d1f7b8?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1447175008436-170170753d52?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1566383444833-43d57e6fb1d4?auto=format&fit=crop&w=900&q=80",
    desc: "Zapallitos tiernos y parejos.",
    searchTerms: ["zapallito", "zapallitos"],
  },
  {
    id: "zapallo-calabacin",
    name: "Zapallo Calabacin",
    category: "verduras",
    unitType: "kg",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1502741126161-b048400d85fe?auto=format&fit=crop&w=900&q=80",
    desc: "Ideal para pure y horno.",
    searchTerms: ["zapallo", "calabacin"],
  },
  {
    id: "zapallo-kabutia",
    name: "Zapallo Kabutia",
    category: "verduras",
    unitType: "kg",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=900&q=80",
    desc: "Dulce y cremoso para comidas de invierno.",
    searchTerms: ["zapallo", "kabutia"],
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
    image:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=900&q=80",
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

function buildChips() {
  if (!filterChips) return;

  const chips = [
    { key: "todos", label: "Todos" },
    { key: "verduras", label: "Verduras" },
    { key: "frutas", label: "Frutas" },
    { key: "huevos", label: "Huevos" },
    { key: "mascotas", label: "Mascotas" },
    { key: "ofertas", label: "Ofertas" },
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

  if (state.filter !== "todos") {
    if (state.filter === "ofertas") {
      list = list.filter((p) => p.offer);
    } else {
      list = list.filter((p) => p.category === state.filter);
    }
  }

  if (state.search.trim()) {
    const term = state.search.trim().toLowerCase();
    list = list.filter((p) => {
      const base = `${p.name} ${p.category} ${(p.searchTerms || []).join(" ")}`.toLowerCase();
      return base.includes(term);
    });
  }

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
        <p class="price">${productPriceLabel(product)}</p>
        ${product.offer ? `<p class="meta">${product.offer.label}</p>` : '<p class="meta">Producto fresco</p>'}
        <button class="btn btn--ghost" data-open="${product.id}">Ver producto</button>
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
        window.location.href = `catalogo.html?producto=${encodeURIComponent(btn.dataset.open)}`;
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

  let controls = "";

  if (product.unitType === "kg") {
    controls = `
      <div class="qty-panel">
        <p><strong>Cantidad:</strong> ${state.selectedUseOffer ? `${product.offer.qtyKg} kg (oferta)` : `${state.selectedQty.toFixed(1)} kg`}</p>
        <div class="qty-actions">
          <button type="button" data-action="minus-100">-100 g</button>
          <button type="button" data-action="plus-100">+100 g</button>
          <button type="button" data-action="set-1kg">1 kg</button>
          ${product.offer ? '<button type="button" data-action="set-offer">2 kg</button>' : ""}
        </div>
      </div>
    `;
  }

  if (product.unitType === "unit") {
    controls = `
      <div class="qty-panel">
        <p><strong>Cantidad:</strong> ${state.selectedUseOffer && product.offer ? `${product.offer.qty} unidades (oferta)` : `${state.selectedQty} unidad${state.selectedQty > 1 ? "es" : ""}`}</p>
        <div class="qty-actions">
          <button type="button" data-action="minus-unit">-</button>
          <button type="button" data-action="plus-unit">+</button>
          ${product.offer ? '<button type="button" data-action="set-offer">2x oferta</button>' : ""}
        </div>
      </div>
    `;
  }

  if (product.unitType === "variant") {
    controls = `
      <div class="qty-panel">
        <p><strong>Presentacion</strong></p>
        <div class="qty-actions">
          ${product.variants
            .map(
              (v) =>
                `<button type="button" data-action="pick-variant" data-variant="${v.key}">${v.label} ${formatMoney(v.price)}</button>`
            )
            .join("")}
        </div>
        <p><strong>Cantidad:</strong> ${state.selectedQty}</p>
        <div class="qty-actions">
          <button type="button" data-action="minus-unit">-</button>
          <button type="button" data-action="plus-unit">+</button>
        </div>
      </div>
    `;
  }

  if (product.unitType === "fixedPack") {
    controls = `
      <div class="qty-panel">
        <p><strong>Presentacion:</strong> ${product.fixedLabel}</p>
        <p><strong>Cantidad:</strong> ${state.selectedQty}</p>
        <div class="qty-actions">
          <button type="button" data-action="minus-unit">-</button>
          <button type="button" data-action="plus-unit">+</button>
        </div>
      </div>
    `;
  }

  if (product.unitType === "pet") {
    controls = `
      <div class="qty-panel">
        <p><strong>Presentacion</strong></p>
        <div class="qty-actions">
          <button type="button" data-action="pet-kg">1 kg</button>
          <button type="button" data-action="pet-bag">${product.bag.label}</button>
        </div>
        <p><strong>Cantidad:</strong> ${state.selectedVariantKey === "bag" ? `${state.selectedQty} bolsa${state.selectedQty > 1 ? "s" : ""}` : `${state.selectedQty.toFixed(1)} kg`}</p>
        <div class="qty-actions">
          ${
            state.selectedVariantKey === "bag"
              ? '<button type="button" data-action="minus-unit">-</button><button type="button" data-action="plus-unit">+</button>'
              : '<button type="button" data-action="minus-100">-100 g</button><button type="button" data-action="plus-100">+100 g</button><button type="button" data-action="set-1kg">1 kg</button>'
          }
        </div>
      </div>
    `;
  }

  const total = calcTotal(product, state.selectedQty, state.selectedUseOffer, state.selectedVariantKey);

  productModalContent.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div>
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <p><strong>Precio:</strong> ${productPriceLabel(product)} ${product.offer ? `| ${product.offer.label}` : ""}</p>
      ${controls}
      <p><strong>Total:</strong> ${formatMoney(total)}</p>
      <button class="btn btn--primary" type="button" id="addToCartBtn">Agregar al carrito</button>
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
    cartItems.innerHTML = "<p>Tu carrito esta vacio.</p>";
  } else {
    cartItems.innerHTML = state.cart
      .map(
        (item) => `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <strong>${item.name}</strong>
          <p>${item.label}</p>
          <small>${formatMoney(item.total)}</small>
        </div>
        <div>
          <button data-edit="${item.uid}">Editar</button>
          <button data-delete="${item.uid}">Eliminar</button>
        </div>
      </article>
    `
      )
      .join("");
  }

  const total = state.cart.reduce((sum, item) => sum + item.total, 0);
  cartTotal.textContent = formatMoney(total);
  cartFabCount.textContent = state.cart.length;

  cartItems.querySelectorAll("button[data-delete]").forEach((btn) => {
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

  return `🛒 Nuevo pedido - Que Papa\n\n📦 Productos:\n\n${lines}\n\n💰 Total:\n${formatMoney(total)}\n\n👤 Cliente:\n${formData.name}\n\n📞 ${formData.phone}\n\n📍 ${formData.address}\n\n💳 Metodo de pago: ${formData.payment}\n\n📝 Observaciones: ${formData.notes || "Sin observaciones."}`;
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
  if (closeCart) closeCart.addEventListener("click", closeCartPanel);

  if (clearCart) {
    clearCart.addEventListener("click", () => {
      state.cart = [];
      renderCart();
    });
  }

  if (checkoutBtn && checkoutModal) {
    checkoutBtn.addEventListener("click", () => {
      if (state.cart.length === 0) {
        showToast("Agrega productos antes de finalizar.");
        return;
      }
      checkoutModal.showModal();
    });
  }

  if (closeCheckoutModal && checkoutModal) {
    closeCheckoutModal.addEventListener("click", () => checkoutModal.close());
  }

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (state.cart.length === 0) return;

      const formData = Object.fromEntries(new FormData(checkoutForm));
      const text = getWhatsappMessage(formData);
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(whatsappURL, "_blank", "noopener,noreferrer");

      if (checkoutModal) checkoutModal.close();
      closeCartPanel();
      checkoutForm.reset();
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
