:root {
  --color-negro:    #111111;
  --color-blanco:   #ffffff;
  --color-gris-claro: #f5f5f5;
  --color-gris-medio: #e0e0e0;
  --color-gris-texto: #666666;
  --color-acento:   #e63946;
  --color-acento-oscuro: #c1121f;
  --sombra:         0 4px 20px rgba(0, 0, 0, 0.10);
  --sombra-hover:   0 8px 30px rgba(0, 0, 0, 0.18);
  --radio:          10px;
  --transicion:     0.25s ease;
  --fuente:         'Segoe UI', system-ui, -apple-system, sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--fuente);
  background-color: var(--color-blanco);
  color: var(--color-negro);
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

a { text-decoration: none; color: inherit; }
ul { list-style: none; }
img { max-width: 100%; display: block; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

.btn {
  display: inline-block;
  padding: 12px 28px;
  border: none;
  border-radius: var(--radio);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transicion), transform var(--transicion), box-shadow var(--transicion);
  text-align: center;
}

.btn-primary { background-color: var(--color-acento); color: var(--color-blanco); }
.btn-primary:hover {
  background-color: var(--color-acento-oscuro);
  transform: translateY(-2px);
  box-shadow: var(--sombra-hover);
}
.btn-full { width: 100%; display: block; }

.section-title { font-size: 2rem; font-weight: 700; text-align: center; margin-bottom: 10px; }
.section-subtitle { text-align: center; color: var(--color-gris-texto); margin-bottom: 40px; font-size: 1.05rem; }

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-negro);
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  transition: background-color 0.3s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;
}

.logo {
  font-size: 1.7rem;
  font-weight: 900;
  letter-spacing: 3px;
  color: var(--color-blanco);
  flex-shrink: 0;
}

.logo span { color: var(--color-acento); }

.nav-menu { display: flex; }
.nav-list { display: flex; gap: 30px; }

.nav-link {
  color: #cccccc;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 5px 0;
  position: relative;
  transition: color var(--transicion);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-acento);
  transition: width var(--transicion);
}

.nav-link:hover { color: var(--color-blanco); }
.nav-link:hover::after { width: 100%; }

.nav-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* =========================================
   🌙 BOTÓN MODO OSCURO (con SVG)
   ========================================= */
.theme-btn {
  background: transparent;
  border: 2px solid var(--color-acento);
  color: #ffffff;                 /* siempre blanco */
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: background-color var(--transicion), transform var(--transicion);
  flex-shrink: 0;
}

.theme-btn:hover {
  background-color: var(--color-acento);
  transform: translateY(-1px);
}

.theme-btn:focus-visible {
  outline: 2px solid var(--color-acento);
  outline-offset: 2px;
}

/* Dentro del botón, los SVG ocupan el tamaño correcto */
.theme-btn svg {
  display: block;
  width: 18px;
  height: 18px;
  stroke: currentColor;   /* hereda el color del botón (blanco) */
  fill: none;
}

/* Estado por defecto (modo claro): se ve la luna, se oculta el sol */
.theme-btn .icon-sun  { display: none; }
.theme-btn .icon-moon { display: block; }

/* Estado modo oscuro: se ve el sol, se oculta la luna */
body.dark .theme-btn .icon-moon { display: none; }
body.dark .theme-btn .icon-sun  { display: block; }

/* =========================================
   ◐ BOTÓN ALTO / BAJO CONTRASTE
   ========================================= */
.contrast-btn {
  background: transparent;
  border: 2px solid var(--color-acento);
  color: #ffffff;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: background-color var(--transicion), transform var(--transicion);
  flex-shrink: 0;
}

.contrast-btn:hover {
  background-color: var(--color-acento);
  transform: translateY(-1px);
}

.contrast-btn:focus-visible {
  outline: 2px solid var(--color-acento);
  outline-offset: 2px;
}

.contrast-btn svg { display: block; width: 18px; height: 18px; }

/* Botón carrito */
.cart-btn {
  background: none;
  border: 2px solid var(--color-acento);
  color: var(--color-blanco);
  border-radius: 50px;
  padding: 6px 16px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color var(--transicion), color var(--transicion);
  display: flex;
  align-items: center;
  gap: 6px;
}

.cart-btn:hover { background-color: var(--color-acento); }

.cart-count {
  background-color: var(--color-acento);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-blanco);
  border-radius: 2px;
  transition: transform var(--transicion), opacity var(--transicion);
}

.hamburger.activo span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.activo span:nth-child(2) { opacity: 0; }
.hamburger.activo span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* HERO */
.hero { position: relative; height: 90vh; min-height: 500px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.25)); z-index: 1; }
.hero-content { position: relative; z-index: 2; max-width: 600px; padding: 0 30px; text-align: left; }
.hero-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; color: var(--color-blanco); line-height: 1.1; margin-bottom: 20px; }
.hero-title span { color: var(--color-acento); }
.hero-text { color: #cccccc; font-size: 1.15rem; margin-bottom: 35px; max-width: 420px; }

/* CATEGORÍAS */
.categorias { padding: 60px 0 20px; }
.categorias-grid { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 30px; }
.categoria-btn {
  padding: 10px 24px;
  border: 2px solid var(--color-gris-medio);
  border-radius: 50px;
  background: var(--color-blanco);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicion);
  color: var(--color-negro);
}
.categoria-btn:hover, .categoria-btn.activo {
  background-color: var(--color-negro);
  color: var(--color-blanco);
  border-color: var(--color-negro);
  transform: translateY(-2px);
}

/* BUSCADOR */
.buscador-seccion { padding: 30px 0; background-color: var(--color-gris-claro); transition: background-color 0.3s ease; }
.buscador-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 500px;
  margin: 0 auto;
  background: var(--color-blanco);
  border: 2px solid var(--color-gris-medio);
  border-radius: 50px;
  padding: 10px 20px;
  transition: border-color var(--transicion), box-shadow var(--transicion), background-color 0.3s ease;
}
.buscador-wrapper:focus-within { border-color: var(--color-acento); box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.15); }
.buscador-icono { font-size: 1.1rem; }
.buscador-input { border: none; outline: none; font-size: 1rem; width: 100%; background: transparent; color: inherit; }

/* PRODUCTOS */
.productos-seccion { padding: 60px 0; }
.productos-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 28px; margin-top: 40px; }
.producto-card {
  background: var(--color-blanco);
  border-radius: var(--radio);
  box-shadow: var(--sombra);
  overflow: hidden;
  transition: transform var(--transicion), box-shadow var(--transicion), background-color 0.3s ease;
  display: flex;
  flex-direction: column;
}
.producto-card:hover { transform: translateY(-6px); box-shadow: var(--sombra-hover); }
.producto-img-wrapper { width: 100%; height: 240px; overflow: hidden; background-color: var(--color-gris-claro); }
.producto-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.producto-card:hover .producto-img-wrapper img { transform: scale(1.05); }
.producto-info { padding: 18px; flex: 1; display: flex; flex-direction: column; gap: 8px; }
.producto-categoria { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-acento); }
.producto-nombre { font-size: 1.05rem; font-weight: 700; color: var(--color-negro); }
.producto-precio { font-size: 1.2rem; font-weight: 800; color: var(--color-negro); margin-top: auto; }
.producto-btn {
  margin: 0 18px 18px;
  padding: 10px;
  background-color: var(--color-negro);
  color: var(--color-blanco);
  border: none;
  border-radius: var(--radio);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transicion), transform var(--transicion);
}
.producto-btn:hover { background-color: var(--color-acento); transform: translateY(-1px); }
.sin-resultados { display: none; text-align: center; color: var(--color-gris-texto); font-size: 1.1rem; margin-top: 40px; }

/* OFERTAS */
.ofertas-seccion { padding: 60px 0; background-color: var(--color-negro); transition: background-color 0.3s ease; }
.ofertas-seccion .section-title { color: var(--color-blanco); }
.ofertas-seccion .section-subtitle { color: #aaaaaa; }
.ofertas-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 28px; margin-top: 40px; }
.oferta-card { background: #1e1e1e; border-radius: var(--radio); overflow: hidden; transition: transform var(--transicion), box-shadow var(--transicion); display: flex; flex-direction: column; position: relative; }
.oferta-card:hover { transform: translateY(-6px); box-shadow: 0 10px 30px rgba(230, 57, 70, 0.3); }
.oferta-badge { position: absolute; top: 12px; right: 12px; background-color: var(--color-acento); color: var(--color-blanco); font-size: 0.8rem; font-weight: 700; padding: 4px 10px; border-radius: 50px; z-index: 2; }
.oferta-img-wrapper { width: 100%; height: 230px; overflow: hidden; background-color: #2a2a2a; }
.oferta-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.oferta-card:hover .oferta-img-wrapper img { transform: scale(1.05); }
.oferta-info { padding: 18px; flex: 1; display: flex; flex-direction: column; gap: 6px; }
.oferta-nombre { font-size: 1rem; font-weight: 700; color: var(--color-blanco); }
.oferta-precios { display: flex; align-items: center; gap: 10px; margin-top: 6px; }
.precio-antes { color: #888; text-decoration: line-through; font-size: 0.95rem; }
.precio-ahora { color: var(--color-acento); font-size: 1.25rem; font-weight: 800; }
.oferta-btn { margin: 0 18px 18px; padding: 10px; background-color: var(--color-acento); color: var(--color-blanco); border: none; border-radius: var(--radio); font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: background-color var(--transicion), transform var(--transicion); }
.oferta-btn:hover { background-color: var(--color-acento-oscuro); transform: translateY(-1px); }

/* CONTACTO */
.contacto-seccion { padding: 80px 0; background-color: var(--color-gris-claro); transition: background-color 0.3s ease; }
.contacto-wrapper { display: grid; grid-template-columns: 1fr 1.4fr; gap: 60px; margin-top: 50px; align-items: start; }
.contacto-info h3 { font-size: 1.5rem; font-weight: 700; margin-bottom: 10px; }
.contacto-info > p { color: var(--color-gris-texto); margin-bottom: 25px; }
.contacto-lista { display: flex; flex-direction: column; gap: 14px; margin-bottom: 30px; }
.contacto-lista li { font-size: 0.95rem; color: var(--color-negro); }
.contacto-lista a { color: var(--color-acento); transition: color var(--transicion); }
.contacto-lista a:hover { color: var(--color-acento-oscuro); }
.horario { background: var(--color-blanco); border-left: 4px solid var(--color-acento); padding: 15px 20px; border-radius: 0 var(--radio) var(--radio) 0; font-size: 0.9rem; color: var(--color-gris-texto); line-height: 1.8; transition: background-color 0.3s ease; }
.contacto-form { background: var(--color-blanco); padding: 35px; border-radius: var(--radio); box-shadow: var(--sombra); display: flex; flex-direction: column; gap: 20px; transition: background-color 0.3s ease; }
.form-grupo { display: flex; flex-direction: column; gap: 6px; }
.form-grupo label { font-size: 0.9rem; font-weight: 600; color: var(--color-negro); }
.form-grupo input, .form-grupo textarea { padding: 12px 15px; border: 2px solid var(--color-gris-medio); border-radius: var(--radio); font-size: 0.95rem; font-family: var(--fuente); color: var(--color-negro); background-color: var(--color-blanco); transition: border-color var(--transicion), box-shadow var(--transicion), background-color 0.3s ease, color 0.3s ease; resize: vertical; }
.form-grupo input:focus, .form-grupo textarea:focus { outline: none; border-color: var(--color-acento); box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.15); }
.form-confirmacion { text-align: center; font-weight: 600; color: #2a9d5c; font-size: 0.95rem; min-height: 24px; }

/* FOOTER */
.footer { background-color: var(--color-negro); padding: 35px 20px; transition: background-color 0.3s ease; }
.footer-contenido { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; }
.footer-contenido .logo { font-size: 1.4rem; }
.footer-contenido p { color: #888; font-size: 0.85rem; }
.footer-small { color: #555 !important; font-size: 0.8rem !important; }

/* ANIMACIÓN BOUNCE DEL CARRITO */
@keyframes bounce {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.25); }
  70%  { transform: scale(0.92); }
  100% { transform: scale(1); }
}
.cart-btn.bounce { animation: bounce 0.4s ease; }

/* CARRITO MODAL */
.carrito-overlay { position: fixed; inset: 0; background-color: rgba(0,0,0,0.55); z-index: 200; opacity: 0; pointer-events: none; transition: opacity var(--transicion); }
.carrito-overlay.visible { opacity: 1; pointer-events: all; }
.carrito-modal { position: fixed; top: 0; right: 0; width: 380px; max-width: 100vw; height: 100vh; background-color: var(--color-blanco); color: var(--color-negro); z-index: 201; display: flex; flex-direction: column; transform: translateX(100%); transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease; box-shadow: -4px 0 30px rgba(0,0,0,0.2); }
.carrito-modal.visible { transform: translateX(0); }
.carrito-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; border-bottom: 1px solid var(--color-gris-medio); }
.carrito-header h2 { font-size: 1.2rem; font-weight: 700; }
.carrito-cerrar { background: none; border: none; font-size: 1.3rem; cursor: pointer; color: var(--color-gris-texto); transition: color var(--transicion); line-height: 1; }
.carrito-cerrar:hover { color: var(--color-acento); }
.carrito-cuerpo { flex: 1; overflow-y: auto; padding: 20px 24px; display: flex; flex-direction: column; gap: 16px; }
.carrito-vacio { text-align: center; color: var(--color-gris-texto); padding: 60px 20px; font-size: 1rem; }
.carrito-vacio span { display: block; font-size: 3rem; margin-bottom: 15px; }
.carrito-item { display: flex; align-items: center; gap: 14px; background: var(--color-gris-claro); border-radius: var(--radio); padding: 12px; transition: background-color 0.3s ease; }
.carrito-item img { width: 65px; height: 65px; object-fit: cover; border-radius: 8px; flex-shrink: 0; }
.carrito-item-info { flex: 1; min-width: 0; }
.carrito-item-nombre { font-size: 0.9rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.carrito-item-precio { color: var(--color-acento); font-weight: 700; font-size: 0.95rem; margin-top: 3px; }
.carrito-item-eliminar { background: none; border: none; font-size: 1.1rem; cursor: pointer; color: #999; flex-shrink: 0; transition: color var(--transicion); padding: 4px; }
.carrito-item-eliminar:hover { color: var(--color-acento); }
.carrito-footer { padding: 20px 24px; border-top: 1px solid var(--color-gris-medio); display: flex; flex-direction: column; gap: 16px; }
.carrito-total { display: flex; justify-content: space-between; align-items: center; font-size: 1.1rem; }
.carrito-total strong { font-size: 1.4rem; color: var(--color-acento); }

/* 🌙 MODO OSCURO */
body.dark {
  --color-negro:  #f5f5f5;
  --color-blanco: #121212;
  --color-gris-claro: #1a1a1a;
  --color-gris-medio: #333333;
  --color-gris-texto: #aaaaaa;
  background-color: #121212;
  color: #f5f5f5;
}
body.dark .header { background-color: #0a0a0a; }
body.dark .buscador-seccion, body.dark .contacto-seccion { background-color: #161616; }
body.dark .buscador-wrapper { background-color: #1e1e1e; border-color: #333; }
body.dark .categoria-btn { background-color: #1e1e1e; color: #f5f5f5; border-color: #333; }
body.dark .categoria-btn:hover, body.dark .categoria-btn.activo { background-color: var(--color-acento); color: #ffffff; border-color: var(--color-acento); }
body.dark .producto-card { background-color: #1e1e1e; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
body.dark .producto-nombre, body.dark .producto-precio { color: #f5f5f5; }
body.dark .producto-btn { background-color: #2a2a2a; color: #f5f5f5; }
body.dark .producto-btn:hover { background-color: var(--color-acento); }
body.dark .contacto-form { background-color: #1e1e1e; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
body.dark .horario { background-color: #1e1e1e; }
body.dark .form-grupo input, body.dark .form-grupo textarea { background-color: #2a2a2a; border-color: #333; color: #f5f5f5; }
body.dark .form-grupo input::placeholder, body.dark .form-grupo textarea::placeholder { color: #888; }
body.dark .form-grupo label { color: #f5f5f5; }
body.dark .contacto-lista li { color: #dddddd; }
body.dark .carrito-modal { background-color: #1e1e1e; color: #f5f5f5; }
body.dark .carrito-header, body.dark .carrito-footer { border-color: #333; }
body.dark .carrito-item { background-color: #2a2a2a; }
body.dark .carrito-item-nombre { color: #f5f5f5; }
body.dark .carrito-vacio { color: #aaaaaa; }

/* =========================================================
   ◐ ALTO CONTRASTE
   Negro puro / blanco puro / amarillo. Solo colores y bordes:
   las imágenes no se modifican (sin filtros ni ocultarlas).
   Va después del modo oscuro para prevalecer sobre él.
   ========================================================= */
body.contraste {
  --color-negro:  #ffffff;
  --color-blanco: #000000;
  --color-gris-claro: #000000;
  --color-gris-medio: #ffffff;
  --color-gris-texto: #ffffff;
  --color-acento: #ffff00;
  --color-acento-oscuro: #ffffff;
  --sombra: none;
  --sombra-hover: none;
  background-color: #000000;
  color: #ffffff;
}

/* Textos */
body.contraste a:focus-visible,
body.contraste button:focus-visible,
body.contraste input:focus-visible,
body.contraste textarea:focus-visible {
  outline: 3px solid #ffff00;
  outline-offset: 2px;
}
body.contraste .nav-link,
body.contraste .hero-text,
body.contraste .section-subtitle,
body.contraste .ofertas-seccion .section-subtitle,
body.contraste .footer-contenido p,
body.contraste .footer-small { color: #ffffff !important; }
body.contraste .nav-link:hover { color: #ffff00; }
body.contraste .logo,
body.contraste .hero-title,
body.contraste .oferta-nombre,
body.contraste .ofertas-seccion .section-title { color: #ffffff; }
body.contraste .precio-antes { color: #ffffff; }
body.contraste .contacto-lista a { text-decoration: underline; }
body.contraste .form-confirmacion { color: #ffffff !important; }

/* Cabecera, secciones oscuras y footer */
body.contraste .header,
body.contraste .ofertas-seccion,
body.contraste .footer,
body.contraste .buscador-seccion,
body.contraste .contacto-seccion { background-color: #000000; }
body.contraste .header { border-bottom: 3px solid #ffffff; box-shadow: none; }
body.contraste .footer { border-top: 3px solid #ffffff; }
body.contraste .buscador-seccion,
body.contraste .contacto-seccion,
body.contraste .ofertas-seccion { border-top: 2px solid #ffffff; }

/* Hero: la imagen se mantiene; solo se refuerza el velo para leer el texto */
body.contraste .hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.88) 45%, rgba(0,0,0,0.45)); }

/* Botones */
body.contraste .btn-primary,
body.contraste .oferta-btn,
body.contraste .producto-btn {
  background-color: #ffff00;
  color: #000000;
  border: 2px solid #ffffff;
}
body.contraste .btn-primary:hover,
body.contraste .oferta-btn:hover,
body.contraste .producto-btn:hover {
  background-color: #ffffff;
  color: #000000;
  box-shadow: none;
}
body.contraste .categoria-btn {
  background-color: #000000;
  color: #ffffff;
  border: 2px solid #ffffff;
}
body.contraste .categoria-btn:hover,
body.contraste .categoria-btn.activo {
  background-color: #ffff00;
  color: #000000;
  border-color: #ffffff;
}
body.contraste .theme-btn,
body.contraste .contrast-btn,
body.contraste .cart-btn {
  border: 2px solid #ffffff;
  color: #ffffff;
}
body.contraste .theme-btn:hover,
body.contraste .contrast-btn:hover,
body.contraste .cart-btn:hover { background-color: #ffff00; color: #000000; }
body.contraste .cart-count { background-color: #ffff00; color: #000000; }
body.contraste .hamburger span { background-color: #ffffff; }

/* Tarjetas */
body.contraste .producto-card,
body.contraste .oferta-card,
body.contraste .contacto-form,
body.contraste .horario {
  background-color: #000000;
  border: 2px solid #ffffff;
  box-shadow: none;
}
body.contraste .horario { border-left: 6px solid #ffff00; color: #ffffff; }
body.contraste .oferta-card:hover,
body.contraste .producto-card:hover { box-shadow: none; border-color: #ffff00; }
body.contraste .producto-nombre,
body.contraste .producto-precio,
body.contraste .contacto-lista li { color: #ffffff; }
body.contraste .producto-categoria,
body.contraste .precio-ahora { color: #ffff00; }
body.contraste .oferta-badge { background-color: #ffff00; color: #000000; border: 2px solid #ffffff; }
body.contraste .producto-img-wrapper,
body.contraste .oferta-img-wrapper { background-color: #000000; border-bottom: 2px solid #ffffff; }

/* Buscador y formulario */
body.contraste .buscador-wrapper { background-color: #000000; border: 2px solid #ffffff; }
body.contraste .buscador-wrapper:focus-within { border-color: #ffff00; box-shadow: 0 0 0 3px #ffff00; }
body.contraste .form-grupo label { color: #ffffff; }
body.contraste .form-grupo input,
body.contraste .form-grupo textarea {
  background-color: #000000;
  color: #ffffff;
  border: 2px solid #ffffff;
}
body.contraste .form-grupo input::placeholder,
body.contraste .form-grupo textarea::placeholder { color: #dddddd; }
body.contraste .form-grupo input:focus,
body.contraste .form-grupo textarea:focus { border-color: #ffff00; box-shadow: 0 0 0 3px #ffff00; }

/* Carrito */
body.contraste .carrito-modal { background-color: #000000; color: #ffffff; border-left: 3px solid #ffffff; box-shadow: none; }
body.contraste .carrito-header,
body.contraste .carrito-footer { border-color: #ffffff; }
body.contraste .carrito-item { background-color: #000000; border: 2px solid #ffffff; }
body.contraste .carrito-item-nombre { color: #ffffff; }
body.contraste .carrito-item-precio,
body.contraste .carrito-total strong { color: #ffff00; }
body.contraste .carrito-cerrar,
body.contraste .carrito-item-eliminar,
body.contraste .carrito-vacio { color: #ffffff; }
body.contraste .carrito-overlay { background-color: rgba(0,0,0,0.85); }

/* Menú móvil */
body.contraste .nav-menu { background-color: #000000; }
body.contraste .nav-menu.abierto { border-top: 2px solid #ffffff; }

/* RESPONSIVE */
@media (max-width: 900px) {
  .contacto-wrapper { grid-template-columns: 1fr; gap: 40px; }
}

@media (max-width: 700px) {
  .hamburger { display: flex; }
  .nav-menu { position: absolute; top: 65px; left: 0; right: 0; background-color: var(--color-negro); padding: 0; max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.35s ease; }
  body.dark .nav-menu { background-color: #0a0a0a; }
  .nav-menu.abierto { max-height: 300px; padding: 20px 0; border-top: 1px solid #333; }
  .nav-list { flex-direction: column; align-items: center; gap: 20px; }
  .nav-link { font-size: 1.05rem; }
  .hero { height: 70vh; }
  .hero-content { text-align: center; align-items: center; display: flex; flex-direction: column; }
  .hero-text { max-width: 100%; }
  .productos-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 18px; }
  .ofertas-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 18px; }
  .contacto-form { padding: 25px 20px; }
  .section-title { font-size: 1.6rem; }
  .carrito-modal { width: 100vw; }
  .theme-btn, .contrast-btn { width: 34px; height: 34px; }
  .theme-btn svg, .contrast-btn svg { width: 16px; height: 16px; }
  .nav-actions { gap: 10px; }
}
