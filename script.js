/* =========================================================
   URBANOVA — Datos
   ========================================================= */
const productos = [
  { id: 1,  nombre: "Camiseta Urban Black",      categoria: "camiseta",   precio: 24.99, imagen: "https://images.pexels.com/photos/13995911/pexels-photo-13995911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 2,  nombre: "Camiseta White Essential",  categoria: "camiseta",   precio: 19.99, imagen: "https://images.pexels.com/photos/7045179/pexels-photo-7045179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 3,  nombre: "Camiseta Street Drop",      categoria: "camiseta",   precio: 22.99, imagen: "https://images.pexels.com/photos/7045185/pexels-photo-7045185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 4,  nombre: "Pantalón Cargo Verde",      categoria: "pantalon",   precio: 44.99, imagen: "https://images.pexels.com/photos/28666269/pexels-photo-28666269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 5,  nombre: "Pantalón Street Slim",      categoria: "pantalon",   precio: 39.99, imagen: "https://images.pexels.com/photos/28666275/pexels-photo-28666275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 6,  nombre: "Pantalón Urban Fit",        categoria: "pantalon",   precio: 49.99, imagen: "https://images.pexels.com/photos/28902694/pexels-photo-28902694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 7,  nombre: "Sudadera Basic Grey",       categoria: "sudadera",   precio: 39.99, imagen: "https://images.pexels.com/photos/35240862/pexels-photo-35240862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 8,  nombre: "Sudadera Urban Black",      categoria: "sudadera",   precio: 44.99, imagen: "https://images.pexels.com/photos/35240866/pexels-photo-35240866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 9,  nombre: "Sudadera Sky Blue",         categoria: "sudadera",   precio: 42.99, imagen: "https://images.pexels.com/photos/35240860/pexels-photo-35240860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 10, nombre: "Zapatillas Street Runner",  categoria: "zapatillas", precio: 59.99, imagen: "https://images.pexels.com/photos/30755567/pexels-photo-30755567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 11, nombre: "Zapatillas Skate Low",      categoria: "zapatillas", precio: 54.99, imagen: "https://images.pexels.com/photos/34229916/pexels-photo-34229916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 12, nombre: "Zapatillas Urban Walk",     categoria: "zapatillas", precio: 64.99, imagen: "https://images.pexels.com/photos/10399158/pexels-photo-10399158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }
];

const ofertas = [
  { id: 101, nombre: "Sudadera Hoodie Pro",     precioAntes: 49.99, precioAhora: 34.99, descuento: "-30%", categoria: "sudadera",   imagen: "https://images.pexels.com/photos/35240866/pexels-photo-35240866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 102, nombre: "Pantalón Cargo Black",    precioAntes: 59.99, precioAhora: 39.99, descuento: "-33%", categoria: "pantalon",   imagen: "https://images.pexels.com/photos/28666271/pexels-photo-28666271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 103, nombre: "Zapatillas Classic White",precioAntes: 74.99, precioAhora: 49.99, descuento: "-33%", categoria: "zapatillas", imagen: "https://images.pexels.com/photos/30755567/pexels-photo-30755567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 104, nombre: "Camiseta Logo Pack",      precioAntes: 29.99, precioAhora: 19.99, descuento: "-33%", categoria: "camiseta",   imagen: "https://images.pexels.com/photos/7045174/pexels-photo-7045174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }
];

/* Estado */
let carrito = [];
let categoriaActiva = "todo";
let textoBusqueda = "";

/* DOM */
const productosGrid    = document.getElementById("productos-grid");
const ofertasGrid      = document.getElementById("ofertas-grid");
const sinResultados    = document.getElementById("sin-resultados");
const buscador         = document.getElementById("buscador");
const cartBtn          = document.getElementById("cart-btn");
const cartCount        = document.getElementById("cart-count");
const carritoModal     = document.getElementById("carrito-modal");
const carritoOverlay   = document.getElementById("carrito-overlay");
const carritoTotal     = document.getElementById("carrito-total");
const carritoCuerpo    = document.getElementById("carrito-cuerpo");
const carritoCerrar    = document.getElementById("carrito-cerrar");
const hamburger        = document.getElementById("hamburger");
const navMenu          = document.getElementById("nav-menu");
const contactoForm     = document.getElementById("contacto-form");
const formConfirmacion = document.getElementById("form-confirmacion");
const categoriaBtns    = document.querySelectorAll(".categoria-btn");
const themeBtn         = document.getElementById("theme-btn");
const contrastBtn      = document.getElementById("contrast-btn");

/* Render productos */
function mostrarProductos() {
  productosGrid.innerHTML = "";

  const filtrados = productos.filter(function(p) {
    const okCat = categoriaActiva === "todo" || p.categoria === categoriaActiva;
    const okBus = p.nombre.toLowerCase().includes(textoBusqueda.toLowerCase());
    return okCat && okBus;
  });

  sinResultados.style.display = filtrados.length === 0 ? "block" : "none";

  filtrados.forEach(function(p) {
    const card = document.createElement("div");
    card.classList.add("producto-card");
    card.innerHTML = `
      <div class="producto-img-wrapper">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" />
      </div>
      <div class="producto-info">
        <span class="producto-categoria">${p.categoria}</span>
        <h3 class="producto-nombre">${p.nombre}</h3>
        <p class="producto-precio">${formatearPrecio(p.precio)}</p>
      </div>
      <button class="producto-btn" data-id="${p.id}">🛒 Añadir al carrito</button>
    `;
    card.querySelector(".producto-btn").addEventListener("click", function() { añadirAlCarrito(p); });
    productosGrid.appendChild(card);
  });
}

/* Render ofertas */
function mostrarOfertas() {
  ofertasGrid.innerHTML = "";

  ofertas.forEach(function(o) {
    const card = document.createElement("div");
    card.classList.add("oferta-card");
    card.innerHTML = `
      <span class="oferta-badge">${o.descuento}</span>
      <div class="oferta-img-wrapper">
        <img src="${o.imagen}" alt="${o.nombre}" loading="lazy" />
      </div>
      <div class="oferta-info">
        <h3 class="oferta-nombre">${o.nombre}</h3>
        <div class="oferta-precios">
          <span class="precio-antes">${formatearPrecio(o.precioAntes)}</span>
          <span class="precio-ahora">${formatearPrecio(o.precioAhora)}</span>
        </div>
      </div>
      <button class="oferta-btn" data-id="${o.id}">🛒 Añadir al carrito</button>
    `;
    card.querySelector(".oferta-btn").addEventListener("click", function() {
      añadirAlCarrito({ id: o.id, nombre: o.nombre, precio: o.precioAhora, imagen: o.imagen });
    });
    ofertasGrid.appendChild(card);
  });
}

/* Precio formateado */
function formatearPrecio(precio) {
  return precio.toFixed(2).replace(".", ",") + " €";
}

/* Carrito */
function añadirAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
  animarBotonCarrito();
}

function eliminarDelCarrito(indice) {
  carrito.splice(indice, 1);
  actualizarCarrito();
  renderizarCarrito();
}

function actualizarCarrito() {
  cartCount.textContent = carrito.length;
}

function renderizarCarrito() {
  carritoCuerpo.innerHTML = "";

  if (carrito.length === 0) {
    carritoCuerpo.innerHTML = `
      <div class="carrito-vacio">
        <span>🛒</span>
        <p>Tu carrito está vacío.</p>
        <p>¡Añade algo de la colección!</p>
      </div>`;
    carritoTotal.textContent = "0,00 €";
    return;
  }

  let total = 0;

  carrito.forEach(function(p, i) {
    total += p.precio;

    const item = document.createElement("div");
    item.classList.add("carrito-item");
    item.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" />
      <div class="carrito-item-info">
        <p class="carrito-item-nombre">${p.nombre}</p>
        <p class="carrito-item-precio">${formatearPrecio(p.precio)}</p>
      </div>
      <button class="carrito-item-eliminar" data-indice="${i}" aria-label="Eliminar">🗑️</button>
    `;
    item.querySelector(".carrito-item-eliminar").addEventListener("click", function() {
      eliminarDelCarrito(parseInt(this.getAttribute("data-indice")));
    });
    carritoCuerpo.appendChild(item);
  });

  carritoTotal.textContent = formatearPrecio(total);
}

function animarBotonCarrito() {
  cartBtn.classList.add("bounce");
  setTimeout(function() { cartBtn.classList.remove("bounce"); }, 400);
}

function abrirCarrito() {
  renderizarCarrito();
  carritoModal.classList.add("visible");
  carritoOverlay.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function cerrarCarrito() {
  carritoModal.classList.remove("visible");
  carritoOverlay.classList.remove("visible");
  document.body.style.overflow = "";
}

/* Filtros */
function filtrarCategoria(categoria) {
  categoriaActiva = categoria;
  categoriaBtns.forEach(function(btn) { btn.classList.remove("activo"); });
  const btnActivo = document.querySelector(`[data-categoria="${categoria}"]`);
  if (btnActivo) btnActivo.classList.add("activo");
  mostrarProductos();
}

/* Formulario */
function enviarFormulario(evento) {
  evento.preventDefault();

  const nombre  = document.getElementById("nombre").value.trim();
  const email   = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    formConfirmacion.style.color = "#e63946";
    formConfirmacion.textContent = "⚠️ Por favor, rellena todos los campos.";
    return;
  }

  formConfirmacion.style.color = "#2a9d5c";
  formConfirmacion.textContent = `✅ ¡Gracias, ${nombre}! Tu mensaje ha sido enviado.`;
  contactoForm.reset();
  setTimeout(function() { formConfirmacion.textContent = ""; }, 4000);
}

/* Menú móvil */
function toggleMenu() {
  hamburger.classList.toggle("activo");
  navMenu.classList.toggle("abierto");
}

function cerrarMenuMovil() {
  hamburger.classList.remove("activo");
  navMenu.classList.remove("abierto");
}

/* =========================================================
   🌙 MODO OSCURO
   =========================================================
   Nota: ahora NO se cambia el textContent del botón,
   porque el icono son dos SVG que se muestran/ocultan
   automáticamente mediante CSS (body.dark).
   ========================================================= */
function aplicarTema(tema) {
  const esOscuro = tema === "dark";

  document.body.classList.toggle("dark", esOscuro);

  themeBtn.setAttribute(
    "aria-label",
    esOscuro ? "Activar modo claro" : "Activar modo oscuro"
  );
  themeBtn.setAttribute("aria-pressed", esOscuro);

  localStorage.setItem("tema", tema);
}

function iniciarTema() {
  const temaGuardado = localStorage.getItem("tema");
  const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (temaGuardado) {
    aplicarTema(temaGuardado);
  } else {
    aplicarTema(prefiereOscuro ? "dark" : "light");
  }
}

themeBtn.addEventListener("click", function () {
  const temaActual = document.body.classList.contains("dark") ? "dark" : "light";
  aplicarTema(temaActual === "dark" ? "light" : "dark");
});

/* =========================================================
   ◐ ALTO / BAJO CONTRASTE
   Solo cambia colores y bordes mediante la clase body.contraste.
   Las imágenes NO se tocan.
   ========================================================= */
function aplicarContraste(activo) {
  document.body.classList.toggle("contraste", activo);

  contrastBtn.setAttribute(
    "aria-label",
    activo ? "Volver a contraste normal" : "Activar alto contraste"
  );
  contrastBtn.setAttribute("aria-pressed", activo);

  localStorage.setItem("contraste", activo ? "alto" : "bajo");
}

function iniciarContraste() {
  const guardado = localStorage.getItem("contraste");
  const prefiereAlto = window.matchMedia("(prefers-contrast: more)").matches;

  if (guardado) {
    aplicarContraste(guardado === "alto");
  } else {
    aplicarContraste(prefiereAlto);
  }
}

contrastBtn.addEventListener("click", function () {
  aplicarContraste(!document.body.classList.contains("contraste"));
});

/* Eventos */
cartBtn.addEventListener("click", abrirCarrito);
carritoCerrar.addEventListener("click", cerrarCarrito);
carritoOverlay.addEventListener("click", cerrarCarrito);

document.getElementById("btn-comprar").addEventListener("click", function() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío. ¡Añade algún producto primero!");
    return;
  }
  carrito = [];
  actualizarCarrito();
  renderizarCarrito();
  cerrarCarrito();
  alert("✅ ¡Gracias por tu compra! Te enviaremos un email de confirmación.");
});

buscador.addEventListener("input", function() {
  textoBusqueda = this.value;
  mostrarProductos();
});

categoriaBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    filtrarCategoria(this.getAttribute("data-categoria"));
  });
});

contactoForm.addEventListener("submit", enviarFormulario);
hamburger.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-link").forEach(function(enlace) {
  enlace.addEventListener("click", cerrarMenuMovil);
});

document.addEventListener("keydown", function(evento) {
  if (evento.key === "Escape") cerrarCarrito();
});

/* Inicialización */
iniciarTema();
iniciarContraste();
mostrarProductos();
mostrarOfertas();