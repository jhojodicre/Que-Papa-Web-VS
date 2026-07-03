# Que Papa — Documentación del Proyecto Web

Verdulería y frutería ubicada en Paso de los Toros, Uruguay.  
El sitio tiene **dos páginas** y un archivo JavaScript compartido que contiene todos los productos.

---

## Estructura de archivos

```
/
├── index.html        → Página principal (landing page)
├── catalogo.html     → Página de catálogo con carrito de compras
├── script.js         → Toda la lógica: productos, carrito, filtros, modales
├── styles.css        → Todos los estilos visuales del sitio
├── robots.txt        → Instrucciones para buscadores
├── sitemap.xml       → Mapa del sitio para SEO
└── img/              → Imágenes de los productos (formato .jpeg)
```

---

## PÁGINA 1 — `index.html` (Página Principal)

La página principal es una **landing page** de una sola hoja. Tiene las siguientes secciones de arriba hacia abajo:

---

### 1. `<head>` — Configuración de la página
- Título, descripción y palabras clave (SEO)
- Fuentes de Google: `Inter`, `Poppins`, `Playfair Display`
- Iconos con la librería `Lucide`
- Enlace a `styles.css`

---

### 2. `header.header` — Barra de navegación superior
- **ID:** `#inicio`
- **Logo** con nombre "Que Papa" y slogan
- **Menú de navegación** (escritorio): Inicio, Catálogo, Nosotros, Horarios, Contacto
- **Botones de acción**: botón "Catálogo" (ghost) y botón "Carrito" (primary) → ambos llevan a `catalogo.html`
- **Botón hamburguesa** (`#menuBtn`) para abrir el menú móvil

> Para modificar: cambiar links del menú, agregar/quitar ítems de navegación, cambiar el logo.

---

### 3. `aside.mobile-drawer` — Menú lateral móvil
- **ID:** `#mobileDrawer`
- Se abre al tocar el botón hamburguesa en pantallas pequeñas
- Contiene los mismos links que la navegación de escritorio
- Botón "Ver catálogo completo" al fondo

> Para modificar: agregar links, cambiar el botón de acción inferior.

---

### 4. `section.hero` — Sección Hero (portada principal)
- Lado izquierdo (`hero__content`):
  - Logo de la tienda
  - **Kicker** (etiqueta verde): "Lunes de mercadería entrante"
  - Título `<h1>`: "Que Papa"
  - Subtítulo: "Frutas y verduras frescas"
  - Slogan: "De la tierra a tu hogar."
  - Dos botones: "Ver catálogo completo" y "Pedir por WhatsApp"
- Lado derecho (`hero__media`):
  - Imagen principal de frutas y verduras (Unsplash)
  - Cuatro etiquetas flotantes (`float-tag`): 🌿 Lunes Mercadería Nueva, Calidad premium, Entrega rápida, Pedidos por WhatsApp

> Para modificar: cambiar el título, slogan, imagen principal, texto de las etiquetas flotantes, número de WhatsApp.

---

### 5. `section.info-band` — Banda de información
- 4 tarjetas con iconos (`info-band__item`):
  1. **Mercadería nueva** — Todos los lunes
  2. **Selección semanal** — Productos elegidos
  3. **Stock renovado** — Recién ingresados
  4. **Feria del sábado** — 10-30% OFF

> Para modificar: cambiar los textos, iconos (Lucide) o cantidad de tarjetas.

---

### 6. `section.experience` — Sección Experiencia
- **ID:** `#experiencia`
- Lado izquierdo:
  - Título: "Un catálogo más claro, moderno y cómodo para elegir"
  - **Contadores animados** (`js-count`):
    - Productos: 42+
    - Categorías: 4
    - Feria sábado: 30%
  - Dos botones: "Explorar productos" y "Pedir por WhatsApp"
- Lado derecho (`experience-right`):
  - Tres tarjetas de características: Frutas frescas, Verduras ordenadas, Huevos y mascotas
  - Tarjeta "Entrada al catálogo" con botón "Ver catálogo"

> Para modificar: actualizar los números de los contadores, cambiar textos de características.

---

### 7. `section.sabados` — Sección Sábados especiales
- **ID:** `#sabados`
- Título: "Sábados con descuentos reales y visibles"
- Tres tarjetas de datos: día destacado (Sábados), rango (10–30%), ofertas activas (10+)
- Nota con link a WhatsApp

> Para modificar: cambiar los porcentajes de descuento, cantidad de ofertas activas, o texto descriptivo.

---

### 8. `section.about` — Sección Nosotros
- **ID:** `#nosotros`
- Descripción del negocio ("Una verdulería con alma de barrio")
- 4 tarjetas de valores con iconos:
  1. Productos frescos
  2. Atención familiar
  3. Confianza
  4. Calidad garantizada

> Para modificar: cambiar la descripción del negocio, los valores o los iconos.

---

### 9. `section` — Sección Horarios
- **ID:** `#horarios`
- Tres tarjetas de horario (`hour-card`):
  - **Lunes a Viernes**: 9:00–13:00 / 16:00–20:00
  - **Sábados** (destacada): 9:00–13:00, con badge "10% al 30% OFF"
  - **Domingos**: Cerrado

> Para modificar: cambiar los horarios, agregar o quitar días.

---

### 10. `section.payments` — Medios de pago
- Título: "Paga como te resulte más cómodo"
- 5 tarjetas de métodos: Getnet, Handy, Tarjetas de crédito, Tarjetas de débito, Pagos electrónicos

> Para modificar: agregar/quitar métodos de pago.

---

### 11. `section` — Reseñas de clientes
- **ID:** `#resenas`
- 6 reseñas en formato `<blockquote>` con estrellas, texto y autor

> Para modificar: cambiar textos, autores, o agregar/quitar reseñas.

---

### 12. `section.contact` — Contacto
- **ID:** `#contacto`
- Información de contacto: dirección, WhatsApp, Instagram, email, horarios
- Tres botones: "Escribir por WhatsApp", "Seguir en Instagram", "Cómo llegar"
- **Mapa** embebido de Google Maps con la ubicación del local

> Para modificar: cambiar dirección, número de teléfono, email, links de redes sociales.

---

### 13. `footer.footer` — Pie de página
- Logo + nombre + slogan
- Links de navegación rápida
- Links a Instagram y WhatsApp

---

### 14. `a.whatsapp-float` — Botón flotante de WhatsApp
- Círculo verde fijo en la esquina inferior derecha en toda la página

---

## PÁGINA 2 — `catalogo.html` (Catálogo de Productos)

---

### 1. `header.header` — Barra de navegación
- Igual que en `index.html`
- El botón "Carrito" muestra un contador de items (`#cartHeaderCount`)

---

### 2. `aside.mobile-drawer` — Menú móvil
- Igual que en `index.html`

---

### 3. `section` — Hero del catálogo
- Botón "Volver al inicio" (`catalog-back`)
- Etiqueta y título: "Explora el mercado con más calma"
- Descripción de cómo funciona el catálogo
- **Tarjeta informativa** (`catalog-info-card`): "Mercadería nueva todos los lunes" + nota de descuentos del sábado

---

### 4. `section.catalog-products-section` — Sección de productos
- **ID:** `#catalogo`
- **Buscador** (`#searchInput`): campo de texto para filtrar productos en tiempo real
- **Chips de categoría** (`#filterChips`): generados por JS (Todos, Frutas, Verduras, Mascotas, Huevos)
- **Contador** (`#catalogCount`): muestra cuántos productos hay visibles
- **Grilla de productos** (`#catalogGrid`): tarjetas de producto generadas por JS

> Para modificar: cambiar categorías de filtro (en `script.js`), el diseño de las tarjetas.

---

### 5. `section.steps` — Cómo comprar
- **ID:** `#como-comprar`
- 3 pasos numerados:
  1. Elegí productos
  2. Armá tu carrito
  3. Enviá por WhatsApp

---

### 6. `footer.footer` — Pie de página

---

### 7. `button.cart-fab` — Botón flotante del carrito
- **ID:** `#cartFab`
- Círculo fijo en la esquina inferior derecha con contador de items

---

### 8. `aside.cart-panel` — Panel lateral del carrito
- **ID:** `#cartPanel`
- Tiene **dos vistas internas**:

#### Vista Carrito (`#cartView`)
- Lista de productos agregados (`#cartItems`)
- Badge "Envío SIN COSTO"
- Total del pedido (`#cartTotal`)
- Botones: "Vaciar" (`#clearCart`) y "Continuar" (`#checkoutBtn`)

#### Vista Checkout (`#checkoutView`)
- Formulario `#checkoutForm` con campos:
  - **Nombre completo** (`#inputName`)
  - **Teléfono** (`#inputPhone`)
  - **Email** (`#inputEmail`) — para enviar factura
  - **Método de entrega** (radio): Retiro en local / Entrega a domicilio (GRATIS)
  - **Dirección** (`#inputAddress`) — aparece solo si elige domicilio
  - **Método de pago** (radio): Efectivo / Tarjeta
  - **Total aproximado** (`#checkoutTotal`)
- Botón "Finalizar pedido" → genera mensaje de WhatsApp con todos los datos

> Para modificar: agregar campos al formulario, cambiar métodos de pago/entrega.

---

### 9. `dialog.modal#productModal` — Modal de detalle de producto
- Se abre al hacer click en una tarjeta del catálogo
- Contenido generado por JS (`#productModalContent`): imagen, nombre, precio, variantes, descripción, selector de cantidad, botón "Agregar al carrito"

---

### 10. `div.toast#toast` — Notificación emergente
- Aparece brevemente en pantalla al agregar un producto al carrito

---

## ARCHIVO `script.js` — Lógica JavaScript

### Datos de productos (`products[]`)
Array con todos los productos. Cada producto tiene:
- `id` — identificador único (ej: `"ajo"`)
- `name` — nombre visible
- `category` — `"frutas"`, `"verduras"`, `"mascotas"`, `"huevos"`
- `unitType` — `"kg"`, `"unit"` (unidad), o `"variant"` (variantes como Unidad/Atado)
- `price` — precio en pesos uruguayos
- `offer` — (opcional) oferta especial con etiqueta y precio total
- `variants` — (opcional) lista de variantes con precios individuales
- `image` — ruta a la imagen en `img/`
- `desc` — descripción breve
- `searchTerms` — palabras clave para el buscador

> Para **agregar un producto**: agregar un nuevo objeto al array `products[]` en `script.js`.  
> Para **cambiar un precio**: buscar el producto por `id` y modificar `price`.  
> Para **agregar una oferta**: agregar la propiedad `offer` al producto.

### Categorías de filtros
Las categorías se generan automáticamente a partir de los valores `category` únicos que existen en el array `products[]`.

### Número de WhatsApp
```js
const WHATSAPP_NUMBER = "59892921712";
```
Se usa para el botón flotante, los links del menú y el envío del pedido desde el checkout.

---

## Carpeta `img/` — Imágenes de productos

Contiene las imágenes de los productos en formato `.jpeg`. Los nombres de archivo deben coincidir exactamente con la propiedad `image` de cada producto en `script.js`.

**Productos con imagen actualmente:**
acelga, ajo, apio, banana, berenjena, boniato criollo, cebolla, cebolla colorada, cebolla de verdeo, choclo, huevo, kiwi, lechuga, limón, mandarina, manzana (granny / red / royal), morrón (rojo / verde), naranja, palta, papa, pera williams, perejil, pomelo rosado, puerro, remolacha, repollo, rúcula, tomate, zanahoria, zapallitos, zapallo (calabacín / de zanahoria / kabutia), y productos para mascotas (procat, tokyperro, wits perro).

---

## Guía de referencia rápida para pedir modificaciones

| Qué querés cambiar | Dónde está | Referencia |
|---|---|---|
| Título o slogan de la portada | `index.html` | Sección Hero (`section.hero`) |
| Horarios del negocio | `index.html` | Sección `#horarios` |
| Información de contacto o dirección | `index.html` | Sección `#contacto` |
| Texto "Quiénes somos" | `index.html` | Sección `#nosotros` |
| Reseñas de clientes | `index.html` | Sección `#resenas` |
| Medios de pago aceptados | `index.html` | Sección `payments` |
| Descuentos del sábado | `index.html` | Sección `#sabados` |
| Número de WhatsApp | `script.js` | `const WHATSAPP_NUMBER` |
| Agregar / editar un producto | `script.js` | Array `products[]` |
| Cambiar precio de un producto | `script.js` | Propiedad `price` del producto |
| Agregar una oferta a un producto | `script.js` | Propiedad `offer` del producto |
| Campos del formulario de pedido | `catalogo.html` | Sección `#checkoutView` |
| Colores, fuentes, tamaños | `styles.css` | Variables CSS al inicio del archivo |
| SEO: título y descripción | `index.html` / `catalogo.html` | `<head>` de cada página |
