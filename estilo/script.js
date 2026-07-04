
const data = {
  empezar: [
    { q: "¿Qué es URUN?", a: "URUN nace de la creencia de que las grandes historias no comienzan siendo grandes. Acompañamos a personas y pequeños negocios que están construyendo algo propio, ayudándolos a crecer y evolucionar a través del diseño." },

    { q: "¿Necesito saber de diseño?", a: "No. Nuestro trabajo es ayudarte a tomar decisiones visuales sin que necesites conocimientos técnicos. " },

    { q: "¿Puedo empezar desde cero?", a: "Sí. Muchas de las marcas con las que trabajamos comienzan desde una idea o un negocio que apenas está iniciando. " },

    { q: "¿Cómo empiezo?", a: "Puedes elegir un paquete o activar el Plan Activo según las necesidades de tu proyecto. ." }
    
  ],


  plan: [
    { q: "¿Qué es el Plan Activo? ", a: "Es un servicio de diseño por plan mensual pensado para marcas que necesitan apoyo gráfico constante. " },

    { q: "¿Qué significa solicitudes durante todo el mes? ", a: "Puedes enviar nuevas solicitudes a medida que avanzamos en el trabajo." },

    { q: "¿Por qué una solicitud activa a la vez?", a: "Nos permite mantener un flujo organizado y entregar cada trabajo con rapidez." },

    { q: "¿Puedo trabajar varias marcas?  ", a: "El plan está pensado para una sola marca por mes activo. No existen contratos de permanencia." }
  ],




  paquetes: [
    { q: "¿Qué son los paquetes? ", a: "Son servicios con precio fijo para necesidades puntuales. " },



    { q: "¿Cómo sé qué paquete elegir? ", a: "Cada paquete indica qué incluye y para qué tipo de necesidad está pensado." },



    { q: "¿Puedo comprar varios paquetes? ", a: "Sí. Puedes combinar los servicios que necesites. " },



    { q: "¿Los paquetes tienen ajustes? ", a: "Sí. Cada servicio incluye ajustes para garantizar un buen resultado." }
  ],




   proceso: [
    { q: "¿Cómo trabajamos? ", a: "Recibimos tu solicitud, desarrollamos la propuesta, realizamos los ajustes y entregamos los archivos finales. " },


    { q: "¿Cómo envío el material? ", a: "Puedes compartir textos, imágenes y referencias por los canales acordados. " },


    { q: "¿Puedo solicitar cambios? ", a: "Sí. Los ajustes están incluidos dentro del alcance del proyecto. " },


    { q: "¿Trabajan con clientes de otros países? ", a: "Sí. Podemos trabajar con marcas de cualquier lugar. " }
  ],



  soporte: [
    { q: "¿Cómo me comunico con URUN? ", a: "A través de los canales de contacto definidos para el proyecto. " },


    { q: "¿Qué pasa después de la entrega? ", a: "Puedes volver cuando necesites un nuevo paquete o continuar con el Plan Activo." },


    { q: "¿Puedo cambiar del paquete al Plan Activo? ", a: "Sí. Muchos clientes comienzan con un servicio puntual y luego continúan con el plan mensual. " },

    { q: "¿Qué pasa si mi proyecto necesita algo diferente? ", a: "Podemos revisar tu necesidad y orientarte sobre la mejor alternativa. " }
  ]
};

const container = document.getElementById("faqQuestions");
const tabs = document.querySelectorAll(".faq-tab");

// Render
function render(category) {
  container.innerHTML = "";

  data[category].forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("faq-item");

    div.innerHTML = `
      <div class="faq-question" aria-expanded="false">
        <h4>${item.q}</h4>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <p>${item.a}</p>
      </div>
    `;

    container.appendChild(div);
  });

  initAccordion();
}

// Acordeón PRO
function initAccordion() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

   

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // cerrar todos
      items.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-answer").style.height = 0;
        i.querySelector(".faq-icon").textContent = "+";
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      // abrir actual
      if (!isOpen) {
        item.classList.add("active");
        answer.style.height = answer.scrollHeight + "px";
        icon.textContent = "-";
        question.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// Tabs
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    render(tab.dataset.category);
  });
});


// Init
render("empezar");
/* =========================
   CONFIG
========================= */
const pkTrack = document.getElementById("pkTrack");
const pkFilters = document.querySelectorAll(".pk-item");

let pkIndex = 0;
let pkCurrent = [];
let currentFilter = "dev";

/* 🔥 TU NÚMERO */
const PHONE = "573234689288";

/* =========================
   DATA
========================= */
/* =========================
   DATA MEJORADA
========================= */


const pkData = [
/* LOGOS */


{
  cat: "webflow",
  name: "Logo inicio",
  subtitle: "Ideal para emprendedores",
  icon: "assets/diseñodelogo1-28.svg",
  desc: `
2 propuestas de logotipo
Paleta de color básica
Tipografía principal
Archivos JPG y PNG
Imagen para redes sociales
Guía básica de uso 


<span class="no-incluye">
No incluye Papelería ni piezas gráficas
</span>
`,
  price: "$260.000 COP",
  paymentType: "Pago único",
  tags: ["Básico", "Digital" , "Inicio"]
},



{
  cat: "webflow",
  name: "Logo impulso",
  subtitle: "Marca lista para crecer",
 icon: "assets/diseñodelogo1-29.svg",
  desc: `
2 propuestas de logotipo
Variantes de logo
Paleta de color completa
Manual de marca
Papelería corporativa
2 piezas para redes


<span class="no-incluye">
No incluye Material de impresión 
</span>
`,
  price: "$360.000 COP",
  paymentType: "50% inicial",
  tags: ["Más vendido", "Digital" , "Inicio"]
},



{
  cat: "webflow",
  name: "Logo Premium",
  subtitle: "Identidad visual completa",
   icon: "assets/diseñodelogo1-30.svg",
  desc: `
2 propuestas creativas
Sistema de variantes
Colores y tipografías
Manual de marca avanzado
Papelería corporativa
Kit para redes y web 


<span class="no-incluye">
No incluye Material de impresión 
</span>
`,
  price: "$530.000 COP",
   paymentType: "50% inicial",
  tags: ["Pro", "Digital" , "Inicio"]
},

/* CREACION DE MARCA */

{
  cat: "marca",
  name: "Marca inicial",
  subtitle: "Ideal para nuevos negocios",
  icon: "assets/creaciondemarca-28.svg",
  desc: `
Creación del nombre
2 propuestas de logotipo
Paleta de color
Tipografías oficiales
Manual de marca básico
Archivos digitales 


<span class="no-incluye">
No incluye Material de impresión 
</span>
`,
  price: "$520.000 COP",
   paymentType: "50% inicial",
  tags: ["Básico", "Digital" , "Inicio"]
},





{
  cat: "marca",
  name: "Marca impulso",
  subtitle: "Identidad lista para crecer",
   icon: "assets/creaciondemarca-29.svg",
  desc: `
Creación o validación del nombre
Logotipo con variantes
Manual de marca
Papelería corporativa
Kit para redes sociales
Archivos digitales 


<span class="no-incluye">
No incluye Papelería ni piezas gráficas
</span>
`,
  price: "$580.000 COP",
   paymentType: "50% inicial",
  tags: ["Más vendido", "Digital" , "Inicio"]
},



{
  cat: "marca",
  name: "Marca premium",
  subtitle: "Sistema completo de identidad",
   icon: "assets/creaciondemarca-30.svg",
  desc: `
Estrategia de marca
Naming y logotipo
Sistema de variantes
Manual avanzado
Papelería corporativa
Kit digital para redes


<span class="no-incluye">
No incluye Desarrollo web ni gestión de contenido
</span>
`,
  price: "$750.000 COP",
  paymentType: "50% inicial",
  tags: ["Pro", "Digital" , "Inicio"]
},






/* REDISEÑO DE MARCA */

{
  cat: "rediseño",
  name: "Rediseño esencial",
  subtitle: "Renueva tu imagen actual",
  icon: "assets/rediseñodemarca1-28.svg",
  desc: `
Actualización del logotipo
Mejora de colores
Optimización tipográfica
Versiones digitales
Archivos JPG, PNG y PDF
Ajustes para uso digital 


<span class="no-incluye">
No incluye Manual de marca ni estrategia visual 
</span>
`,
  price: "$280.000 COP",
   paymentType: "50% inicial",
  tags: ["Básico", "Digital" , "Inicio"]
},


{
  cat: "rediseño",
  name: "Rediseño impulso",
  subtitle: "Una identidad lista para crecer",
 icon: "assets/rediseñodemarca1-29.svg",
  desc: `
Rediseño completo del logotipo
Variantes del logo
Paleta de color actualizada
Tipografías corporativas
Manual básico de marca
Archivos digitales


<span class="no-incluye">
No incluye Desarrollo de identidad completo 
</span>
`,
  price: "$380.000 COP",
   paymentType: "50% inicial",
  tags: ["Más vendido", "Digital" , "Inicio"]
},


{
  cat: "rediseño",
  name: "Evolución de marca",
  subtitle: "Transformación integral de tu marca",
  icon: "assets/rediseñodemarca1-30.svg",
  desc: `
Rediseño estratégico
Sistema gráfico completo
Manual de marca profesional
Adaptación para redes
Papelería corporativa
Kit de identidad digital


<span class="no-incluye">
No incluye Creación de naming
</span>
`,
  price: "$520.000 COP",
   paymentType: "50% inicial",
  tags: ["Pro", "Digital" , "Inicio"]
},





/* REDES SOCIALES */

{
  cat: "framer",
  name: "Diseño único",
  subtitle: "Ideal para una publicación puntual",
  icon: "assets/rd1-29.svg",
  desc: `
1 diseño para redes
Formato feed o historia
Adaptado a tu marca
Diseño personalizado
Archivo listo para publicar
Exportación optimizada 


<span class="no-incluye">
No incluye Copywriting ni gestión de publicaciones 
</span>
`,
  price: "$40.000 COP",
  paymentType: "Pago único",
  tags: ["Básico", "Digital" , "Inicio"]
},



{
  cat: "framer",
  name: "Contenido activo",
  subtitle: "Ideal para 2 semanas de publicaciones",
 icon: "assets/rd1-28.svg",
  desc: `
6 diseños para redes
Feed o historias
Diseño alineado a tu marca
Estilo visual consistente
Archivos listos para publicar
Exportación optimizada

<span class="no-incluye">
No incluye Copywriting ni gestión de publicaciones 
</span>
`,
  price: "$140.000 COP",
  paymentType: "Pago único",
  tags: ["Más vendido", "Digital" , "Inicio"]
},



{
  cat: "framer",
  name: "Contenido mensual",
  subtitle: "Ideal para contenido activo",
  icon: "assets/rd1-30.svg",
  desc: `
12 diseños para redes
Feed o historias
Diseño estratégico mensual
Identidad visual unificada
Archivos optimizados
Plan visual continuo

<span class="no-incluye">
No incluye Copywriting ni gestión de publicaciones 
</span>
`,
  price: "$230.000 COP",
   paymentType: "50% inicial",
  tags: ["Pro", "Digital" , "Inicio"]
},




/* IDENTIDAD VISUAL */

{
  cat: "identidad",
  name: "Corporativo",
  subtitle: "Proyecta una imagen profesional",
  icon: "assets/identidadvisual-28.svg",
  desc: `
Tarjeta de presentación
Hoja membrete
Firma de correo
Flyer corporativo
Archivos para impresión
Versiones digitales


<span class="no-incluye">
No incluye Impresión ni rediseño de logo
</span>
`,
  price: "$180.000 COP",
  paymentType: "Pago único",
  tags: ["Básico", "Digital" , "Inicio"]
},


{
  cat: "identidad",
  name: "Manual de marca",
  subtitle: "Mantén una identidad consistente",
   icon: "assets/identidadvisual-29.svg",
  desc: `
Versiones del logotipo
Paleta de color
Tipografías oficiales
Guía de uso
Aplicaciones de marca
Documento PDF profesional


<span class="no-incluye">
No incluye Rediseño de logo ni piezas corporativas
</span>
`,
  price: "$260.000 COP",
   paymentType: "50% inicial",
  tags: ["Más vendido", "Digital" , "Inicio"]
},



{
  cat: "identidad",
  name: "Kit de Identidad Visual",
  subtitle: "Unifica toda tu imagen corporativa",
   icon: "assets/identidadvisual-30.svg",
  desc: `
Manual de marca
Papelería corporativa
Adaptaciones del logotipo
Kit para redes sociales
Archivos maestros
Recursos digitale


<span class="no-incluye">
No incluye Rediseño de logo
</span>
`,
  price: "$450.000 COP",
   paymentType: "50% inicial",
  tags: ["Pro", "Digital" , "Inicio"]
},







/* PRESENTACION COMERCIAL */

{
  cat: "comercial",
  name: "Flyer comercial",
  subtitle: "Promociona tu negocio con impacto",
  icon: "assets/pc-28.svg",
  desc: `
Diseño profesional
Adaptado a tu marca
Formato digital
Archivo para impresión
Diseño de una cara
Exportación optimizada


<span class="no-incluye">
No incluye Impresión física
</span>
`,
  price: "$60.000 COP",
  paymentType: "Pago único",
  tags: ["Único", "Digital" , "Inicio"]
},


{
  cat: "comercial",
  name: "Portafolio esencial",
  subtitle: "Presenta tus servicios de forma clara",
   icon: "assets/pc-29.svg",
  desc: `
Hasta 6 páginas
Diseño organizado
Adaptado a tu marca
Archivo PDF
Listo para compartir
Exportación optimizada


<span class="no-incluye">
No incluye Redacción de textos comerciales
</span>
`,
  price: "$150.000 COP",
  paymentType: "Pago único",
  tags: ["Básico", "Digital" , "Inicio"]
},



{
  cat: "comercial",
  name: "Portafolio digital",
  subtitle: "Impulsa tu propuesta comercial",
   icon: "assets/pc-30.svg",
  desc: `
Hasta 15 páginas
Diseño estratégico
Adaptación completa a la marca
PDF profesional
Flyer comercial incluido
Listo para presentar


<span class="no-incluye">
No incluye Redacción de textos comerciales
</span>
`,
  price: "$200.000 COP",
   paymentType: "50% inicial",
  tags: ["Más vendido", "Digital" , "Inicio"]
},


{
  cat: "comercial",
  name: "Presentación Corp.",
  subtitle: "Comunica tu empresa con autoridad",
   icon: "assets/pc-46.svg",
  desc: `
Diseño corporativo
Hasta 15 páginas
Diagramación estratégica
Adaptación a tu marca
PDF y archivo editable
Presentación profesional


<span class="no-incluye">
No incluye Redacción de textos comerciales
</span>
`,
  price: "$250.000 COP",
   paymentType: "50% inicial",
  tags: ["Pro", "Digital" , "Inicio"]
},




/* VIDEO */

{
  cat: "video",
  name: "Logo animado",
  subtitle: "Dale movimiento a tu marca",
  icon: "assets/vm-28.svg",
  desc: `
Animación del logotipo
Duración de 3 a 5 segundos
Formato MP4
Adaptado a tu marca
Entrega en alta calidad
Listo para usar


<span class="no-incluye">
No incluye Rediseño del logotipo
</span>
`,
  price: "$80.000 COP",
  paymentType: "Pago único",
  tags: ["Básico", "Digital" , "Inicio"]
},


{
  cat: "video",
  name: "Reel Corp.",
  subtitle: "Promociona tu negocio con video",
   icon: "assets/vm-29.svg",
  desc: `
1 reel animado
Formato vertical
Diseño alineado a tu marca
Animaciones dinámicas
Archivo listo para publicar
Exportación optimizada


<span class="no-incluye">
No incluye Grabación o edición de video real
</span>
`,
  price: "$130.000 COP",
  paymentType: "Pago único",
  tags: ["Más vendido", "Digital" , "Inicio"]
},


{
  cat: "video",
  name: "Reels Animados",
  subtitle: "Contenido visual para tus redes",
   icon: "assets/vm-30.svg",
  desc: `
3 reels animados
Formato vertical
Diseño alineado a tu marca
Animaciones dinámicas
Archivos listos para publicar
Exportación optimizada


<span class="no-incluye">
No incluye Grabación o edición de video real
</span>
`,
  price: "$320.000 COP",
   paymentType: "50% inicial",
  tags: ["Pro", "Digital" , "Inicio"]
},




/* ETIQUETA */

{
  cat: "etiqueta",
  name: "Etiqueta inicial",
  subtitle: "Presenta tu producto con estilo",
  icon: "assets/etiqueta-28.svg",
  desc: `
Diseño frontal
Adaptado a tu marca
Archivo para impresión
Mockup básico
Ajustes de información
Exportación optimizada


<span class="no-incluye">
No incluye Impresión física ni variantes del producto
</span>
`,
  price: "$120.000 COP",
  paymentType: "Pago único",
  tags: ["Básico", "Digital" , "Inicio"]
},


{
  cat: "etiqueta",
  name: "Etiqueta impulso",
  subtitle: "Lista para llegar al mercado",
  icon: "assets/etiqueta-29.svg",
  desc: `
Diseño frontal y reverso
Organización del contenido
Adaptación a tu marca
Mockup profesional
Archivo para impresión
Exportación optimizada


<span class="no-incluye">
No incluye Producción o impresión física
</span>
`,
  price: "$180.000 COP",
  paymentType: "50% inicial",
  tags: ["Más vendido", "Digital" , "Inicio"]
},


{
  cat: "etiqueta",
  name: "Rediseño de Etiqueta",
  subtitle: "Renueva la imagen de tu producto",
  icon: "assets/etiqueta-30.svg",
  desc: `
Actualización del diseño
Mejora de composición
Optimización de colores
Ajuste de tipografías
Adaptación del contenido
Mockup y archivo final


<span class="no-incluye">
No incluye Cambios extensos ni impresión físicaa
</span>
`,
  price: "$160.000 COP",
  paymentType: "Pago único",
  tags: ["Pro", "Digital" , "Inicio"]
},





/* DISEÑO WEB */

{
  cat: "diseñoweb",
  name: "Banner web",
  subtitle: "Destaca tu sitio con impacto",
  icon: "assets/dw-28.svg",
  desc: `
3 banners web
Adaptados a tu marca
Formato optimizado
Listos para slider
Archivos digitales
Exportación para web


<span class="no-incluye">
No incluye Animaciones o programación
</span>
`,
  price: "$70.000 COP",
  paymentType: "Pago único",
  tags: ["Básico", "Digital" , "Inicio"]
},



{
  cat: "diseñoweb",
  name: "Iconos web",
  subtitle: "Mejora la experiencia visual",
 icon: "assets/dw-29.svg",
  desc: `
Pack de iconos
Formatos SVG y PNG
Optimizados para web
Adaptados a tu estilo
Archivos organizados
Recursos listos para usar


<span class="no-incluye">
No incluye Integración en desarrollo web
</span>
`,
  price: "$90.000 COP",
  paymentType: "Pago único",
  tags: ["UI", "Digital" , "Inicio"]
},


{
  cat: "diseñoweb",
  name: "Landing visual",
  subtitle: "Diseñada para generar conversiones",
   icon: "assets/dw-30.svg",
  desc: `
Diseño en Figma
Versión desktop y móvil
Estructura estratégica
Prototipo interactivo
UI alineada a tu marca
Archivos organizados


<span class="no-incluye">
No incluye Desarrollo web ni dominio
</span>
`,
  price: '<span class="price-label">Desde:</span> $350.000 COP',
  // paymentType: "Pago único",
  tags: ["Más vendido", "Digital" , "Inicio"]
},



{
  cat: "diseñoweb",
  name: "Sistema Visual Web",
  subtitle: "Una interfaz completa para tu proyecto",
   icon: "assets/dw.svg",
  desc: `
Múltiples secciones web
Sistema de componentes
Iconografía personalizada
Prototipo interactivo
Guía visual para desarrollo
Archivos organizados


<span class="no-incluye">
No incluye Programación del sitio web
</span>
`,
  price: '<span class="price-label">Desde:</span> $450.000 COP',
  // paymentType: "Pago único",
  tags: ["Pro", "Digital" , "Inicio"]
},




/* DESARROLLO WEB */

{
  cat: "desarrollo",
  name: "Página de ventas",
  subtitle: "Convierte visitas en clientes",
  icon: "assets/desarrolloweb-28.svg",
  desc: `
Landing page responsive
Formulario de contacto
Botón de WhatsApp
Optimizada para móviles
Integraciones básicas
Lista para publicar
SEO básico inicial
Mapa de ubicación integrado



<span class="no-incluye">
No incluye Creación de textos o contenido comercial
</span>
`,
 
  paymentType: "Pago único",
  tags: ["Básico", "Digital" , "Inicio"]
},


{
  cat: "desarrollo",
  name: "Web Corporativa",
  subtitle: "La presencia digital de tu negocio",
   icon: "assets/desarrolloweb-29.svg",
  desc: `
Sitio web administrable
Diseño responsive
Formularios de contacto
Hosting, dominio y SSL
Google Analytics
Capacitación básica
Integración con redes sociales
SEO técnico inicial



<span class="no-incluye">
No incluye Creación de contenido o fotografía
</span>
`,
 
  paymentType: "Pago único",
  tags: ["Más vendido", "Digital" , "Inicio"]
},






{
  cat: "desarrollo",
  name: "Tienda Online",
  subtitle: "Empieza a vender por internet",
   icon: "assets/desarrolloweb-30.svg",
  desc: `
Tienda con WooCommerce
Carrito de compras
Métodos de pago
WhatsApp integrado
Capacitación básica
Lista para vender
Gestión básica de inventario
Configuración de envíos



<span class="no-incluye">
No incluye Carga masiva de productos
</span>
`,
 
  paymentType: "Pago único",
  tags: ["Ecommerce", "Digital" , "Inicio"]
},



{
  cat: "desarrollo",
  name: "Plataforma Web",
  subtitle: "Soluciones digitales a tu medida",
  icon: "assets/desarrolloweb-46.svg",
  desc: `
Desarrollo personalizado
Módulos a medida
Panel administrativo
Integraciones avanzadas
Acompañamiento inicial
Base escalable
Gestión de usuarios y roles
Arquitectura preparada para crecer



<span class="no-incluye">
No incluye Mantenimiento mensual
</span>
`,
 
  paymentType: "Pago único",
  tags: ["Pro", "Digital" , "Inicio"]
},





/* SERVICIOS RAPIDOS */

{
  cat: "rapido",
  name: "Vectorización",
  subtitle: "Convierte tu diseño a formato editable",
  icon: "assets/vectorizar.svg",
  desc: `
Vectorización del diseño
Corrección de proporciones
Optimización para impresión
Ajuste básico de color
Archivos AI, PDF y PNG
Listo para producción



<span class="no-incluye">
No incluye Rediseño del logotipo
</span>
`,
   price: "$70.000 COP",
  paymentType: "Pago único",
  tags: ["Esencial", "Digital" , "Inicio"]
},


{
  cat: "rapido",
  name: "Kit Redes",
  subtitle: "Prepara tu marca para redes sociales",
  icon: "assets/vectorizar2.svg",
  desc: `
Foto de perfil
Ajuste para Instagram
Ajuste para Facebook
Versión para historias
Exportación optimizada
Archivos listos para usar



<span class="no-incluye">
No incluye Rediseño completo de la marca
</span>
`,
   price: "$70.000 COP",
  paymentType: "Pago único",
  tags: ["Básico", "Digital" , "Inicio"]
},



{
  cat: "rapido",
  name: "Kit Social Visual",
  subtitle: "Dale identidad a tus redes sociales",
  icon: "assets/vectorizar3.svg",
  desc: `
Foto de perfil
Portada para Facebook
Destacadas para Instagram
Plantilla para historias
Plantilla para publicaciones
Archivos organizados



<span class="no-incluye">
No incluye Gestión de contenido
</span>
`,
   price: "$90.000 COP",
  paymentType: "Pago único",
  tags: ["Más vendido", "Digital" , "Inicio"]
},




{
  cat: "rapido",
  name: "Favicon Web",
  subtitle: "Haz que tu marca destaque en la web",
icon: "assets/vectorizar4.svg",
  desc: `
Favicon personalizado
Versiones PNG e ICO
Tamaños optimizados
Compatible con navegadores
Archivos digitales
Listo para implementar



<span class="no-incluye">
No incluye Rediseño del logotipo
</span>
`,
   price: "$70.000 COP",
  paymentType: "Pago único",
  tags: ["Web", "Digital" , "Inicio"]
},



{
  cat: "rapido",
  name: "Tarjeta Digital",
  subtitle: "Comparte tu marca de forma moderna",
  icon: "assets/vectorizar5.svg",
  desc: `
Diseño de tarjeta digital
Información organizada
Adaptada a tu marca
Lista para WhatsApp
Archivos digitales
Exportación optimizada



<span class="no-incluye">
No incluye Impresión física
</span>
`,
   price: "$70.000 COP",
  paymentType: "Pago único",
  tags: ["Corp", "Digital" , "Inicio"]
},













];
/* =========================
   WHATSAPP 🔥
========================= */
function cleanText(html){

  return html
    .replace(/<strong>/g, "*")
    .replace(/<\/strong>/g, "*")
    .replace(/<span class="no-incluye">/g, "\n")
    .replace(/<\/span>/g, "")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/No incluye:/gi, "")
    .replace(/\n+/g, "\n")
    .trim();

}


function getWhatsAppLink(d){

 const text = `Hola 👋

Estoy interesad@ en el paquete *${d.name}*

${cleanText(d.desc)}

${d.price ? `

Precio:
${d.price}` : ""}

¿Me puedes dar más información?`;

 return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

}



/* =========================
   TAG CLASS (CORREGIDO)
========================= */
function getTagClass(tag){

  const classes = {
    "Básico": "tag-basico",
    "Esencial": "tag-Esencial",
    "Impulso": "tag-impulso",
    "Más vendido": "tag-mas-vendido",
    "Pro": "tag-pro",
    "Social": "tag-social",
    "UI": "tag-ui",
    "Corp": "tag-corp",
    "Ecommerce": "tag-ecommerce",
    "Web": "tag-Web",
    "Único": "tag-unico"
  };

  return classes[tag] || "tag-basico";
}

/* =========================
   RENDER
========================= */
function pkRender(filter){
  pkTrack.innerHTML = "";
  pkIndex = 0;

  pkCurrent = pkData.filter(d => d.cat === filter);

  pkCurrent.forEach(d=>{
    const el = document.createElement("div");
    el.className = "pk-card";

    // separar incluye / no incluye
    const allItems = extractList(d.desc);

    const incluye = allItems.filter(i => !/no incluye/i.test(i));
    const noIncluye = allItems.filter(i => /no incluye/i.test(i));

    el.innerHTML = `
      <div class="pk-card-content">
        <div class="pk-head">
          <div class="pk-user">
            <img src="${d.icon || getAvatar(d.name)}" class="pk-icon">
            <div>
              <strong>${d.name}</strong>
              <p>Entrega rápida</p>
            </div>
          </div>
        </div>

        <div class="pk-tag-top">
          ${
            d.tags && d.tags.length
              ? `<span class="${getTagClass(d.tags[0])}">${d.tags[0]}</span>`
              : ""
          }
        </div>

        <div class="pk-desc">

          ${d.subtitle ? `<p class="pk-subtitle">${d.subtitle}</p>` : ""}

          <p class="pk-incluye">Incluye:</p>
          ${formatList(incluye)}

          ${
            noIncluye.length
              ? `
              <p class="pk-no-title">No incluye:</p>
              ${formatList(noIncluye, true)}
            `
              : ""
          }

        </div>
      </div>

      <div class="pk-footer">
        <div class="pk-divider"></div>
${d.price ? `
  <div class="pk-price">
    <strong>${d.price}</strong>

    ${d.paymentType ? `
      <div class="pk-badge">${d.paymentType}</div>
    ` : ""}

  </div>
` : ""}
        <a class="pk-btn" href="${getWhatsAppLink(d)}" target="_blank">
          Solicitar
        </a>
      </div>
    `;

    pkTrack.appendChild(el);
  });

  pkMove();
}

/* =========================
   CARRUSEL
========================= */
function pkMove(){
  const card = document.querySelector(".pk-card");
  if (!card) return;

  const gap = 24;
  const cardWidth = card.offsetWidth + gap;

  pkTrack.style.transform = `translateX(-${pkIndex * cardWidth}px)`;
}

function getVisibleCards(){
  const viewport = document.querySelector(".pk-viewport");
  const card = document.querySelector(".pk-card");
  if (!card) return 1;

  return Math.floor(viewport.offsetWidth / (card.offsetWidth + 24));
}

/* CONTROLES */
document.querySelector(".pk-right").onclick = ()=>{
  const visible = getVisibleCards();
  if (pkIndex < pkCurrent.length - visible){
    pkIndex++;
    pkMove();
  }
};

document.querySelector(".pk-left").onclick = ()=>{
  if (pkIndex > 0){
    pkIndex--;
    pkMove();
  }
};

/* FILTRO */
pkFilters.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const newFilter = btn.dataset.pk;
    if (newFilter === currentFilter) return;

    currentFilter = newFilter;

    pkFilters.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    pkRender(newFilter);
  });
});

/* HELPERS */
function extractList(html){
  return html
    .replace(/<[^>]*>/g, "")
    .split(/\n|\+|·/)
    .map(t => t.trim())
    .filter(t => t.length > 0);
}

function formatList(items, isNo = false){
  return items.map(i => `
    <div class="pk-item-line ${isNo ? 'no' : 'yes'}">
      <span class="pk-icon-check"></span>
      <span>${i.replace(/no incluye:?/i, '').trim()}</span>
    </div>
  `).join("");
}

/* =========================
   INIT
========================= */
currentFilter = "webflow";

pkFilters.forEach(b => b.classList.remove("active"));

const first = document.querySelector('[data-pk="webflow"]');
if (first) first.classList.add("active");

pkRender("webflow");

/* RESIZE */
window.addEventListener("resize", ()=>{
  pkIndex = 0;
  pkMove();
});



/* =========================
   ACORDEONES SIDEBAR
========================= */

document.querySelectorAll(".pk-group-title").forEach(btn => {
  btn.addEventListener("click", () => {

    const group = btn.parentElement;

    document.querySelectorAll(".pk-group").forEach(g => {
      if (g !== group) g.classList.remove("active");
    });

    group.classList.toggle("active");

  });
});


const menu = document.querySelector(".pk-menu");
const fadeTop = document.querySelector(".pk-scroll-fade.top");
const fadeBottom = document.querySelector(".pk-scroll-fade.bottom");

function updateScrollFade() {
  if (!menu) return;

  const scrollTop = menu.scrollTop;
  const scrollHeight = menu.scrollHeight;
  const clientHeight = menu.clientHeight;

  // TOP
  if (scrollTop > 5) {
    fadeTop.style.opacity = "1";
  } else {
    fadeTop.style.opacity = "0";
  }

  // BOTTOM
  if (scrollTop + clientHeight < scrollHeight - 5) {
    fadeBottom.style.opacity = "1";
  } else {
    fadeBottom.style.opacity = "0";
  }
}

// init
if (menu) {
  menu.addEventListener("scroll", updateScrollFade);
  window.addEventListener("load", updateScrollFade);
  window.addEventListener("resize", updateScrollFade);
}


























document.addEventListener("DOMContentLoaded", () => {

  const ground = document.getElementById("ground");
  const walker = document.querySelector(".walker");

  const blocks = [];
  const TOTAL = 40;

  // CREAR BLOQUES
  for (let i = 0; i < TOTAL; i++) {
    const b = document.createElement("div");
    b.className = "block";

    const x = i * 25;
    const offset = Math.random() * 10;

    b.style.left = x + "px";
    b.style.bottom = offset + "px";

    ground.appendChild(b);

    blocks.push({
      el: b,
      x: x,
      offset: offset,
      clean: false
    });
  }

  function animate() {

    // 👇 posición REAL dentro del contenedor
    const walkerX = walker.offsetLeft;

    blocks.forEach(block => {

      // CUANDO EL PERSONAJE PASA POR ENCIMA
      if (!block.clean && walkerX > block.x - 10) {
        block.el.classList.add("clean");
        block.el.style.bottom = "0px";
        block.clean = true;
      }

      // RESET (cuando vuelve al inicio del loop)
      if (walkerX < 5 && block.clean) {
        block.el.classList.remove("clean");
        block.el.style.bottom = block.offset + "px";
        block.clean = false;
      }

    });

    requestAnimationFrame(animate);
  }

  animate();

});





// ANIMACION DEL PLAN MENSUAL 



document.addEventListener("DOMContentLoaded", () => {

  const simulator = document.getElementById("simulator");
  const switchInput = document.getElementById("autoSwitch");
  const modoTexto = document.getElementById("modoTexto");

  let isPlan = true;

  function setPlan() {
    simulator.classList.add("simulator-plan");
    simulator.classList.remove("simulator-packages");
    modoTexto.textContent = "Plan mensual activo";
    switchInput.checked = true;
    isPlan = true;
  }

  function setPackages() {
    simulator.classList.add("simulator-packages");
    simulator.classList.remove("simulator-plan");
    modoTexto.textContent = "Compra por paquetes";
    switchInput.checked = false;
    isPlan = false;
  }

  setPlan();

  setInterval(() => {
    isPlan ? setPackages() : setPlan();
  }, 4500);

  function rotate(selector) {
    const top = document.querySelector(`${selector}.top`);
    const active = document.querySelector(`${selector}.active`);
    const bottom = document.querySelector(`${selector}.bottom`);

    if (!top || !active || !bottom) return;

    top.classList.replace('top','bottom');
    active.classList.replace('active','top');
    bottom.classList.replace('bottom','active');
  }

  setInterval(() => {
    if (simulator.classList.contains('simulator-plan')) {
      rotate('.urun-card');
    }
  }, 2600);

  setInterval(() => {
    if (simulator.classList.contains('simulator-packages')) {
      rotate('.urun-package');
    }
  }, 2600);

  switchInput.addEventListener("change", () => {
    switchInput.checked ? setPlan() : setPackages();
  });

});



const cards = document.querySelectorAll('.card-ui');

function rotateCards() {
  const top = document.querySelector('.card-ui.top');
  const active = document.querySelector('.card-ui.active');
  const bottom = document.querySelector('.card-ui.bottom');

  if (!top || !active || !bottom) return;

  // transición suave (opcional micro efecto)
  active.style.transition = "all 0.4s ease";

  // rotación lógica
  top.classList.remove('top');
  top.classList.add('bottom');

  active.classList.remove('active');
  active.classList.add('top');

  bottom.classList.remove('bottom');
  bottom.classList.add('active');
}

// intervalo estable
setInterval(rotateCards, 2500);





















// ANIMACION DEL hero


const hero = document.querySelector('#heroSim');

if (hero) {

  const switchInput = hero.querySelector('#autoSwitch');
  const simulator = hero.querySelector('#simulator');

  let isPlan = true;

  /* =========================
  SET PLAN
  ========================= */

  function setPlan() {

    simulator.classList.add('simulator-plan');
    simulator.classList.remove('simulator-packages');

    switchInput.checked = false;

    isPlan = true;
  }

  /* =========================
  SET PACKAGES
  ========================= */

  function setPackages() {

    simulator.classList.add('simulator-packages');
    simulator.classList.remove('simulator-plan');

    switchInput.checked = true;

    isPlan = false;
  }

  /* =========================
  INITIAL
  ========================= */

  setPlan();

  /* =========================
  AUTO LOOP
  ========================= */

  setInterval(() => {

    isPlan
      ? setPackages()
      : setPlan();

  }, 4200);

  /* =========================
  ROTATE
  ========================= */

  function rotate(selector) {

    const top = hero.querySelector(`${selector}.top`);
    const active = hero.querySelector(`${selector}.active`);
    const bottom = hero.querySelector(`${selector}.bottom`);

    if (!top || !active || !bottom) return;

    top.classList.replace('top', 'bottom');
    active.classList.replace('active', 'top');
    bottom.classList.replace('bottom', 'active');
  }

  /* =========================
  PLAN ANIMATION
  ========================= */

  setInterval(() => {

    if (
      simulator.classList.contains('simulator-plan')
    ) {
      rotate('.urun-card');
    }

  }, 2500);

  /* =========================
  PACKAGE ANIMATION
  ========================= */

  setInterval(() => {

    if (
      simulator.classList.contains('simulator-packages')
    ) {
      rotate('.urun-package');
    }

  }, 2500);

  /* =========================
  MANUAL SWITCH
  ========================= */

  switchInput.addEventListener('change', () => {

    switchInput.checked
      ? setPackages()
      : setPlan();

  });

}



// ACORDEÓN MANIFIESTO

const esenciaBtn = document.querySelector(".esencia-toggle");
const historia = document.querySelector(".vision-story");

const manifestReading = document.querySelector(".manifest-reading");
const manifestParagraphs = document.querySelectorAll(".manifest-text p");

const buttonText = document.querySelector(".vision-btn-text");
const buttonArrow = document.querySelector(".vision-toggle-icon");

const progressBar = document.querySelector(".manifest-progress-bar");

/* =========================
   ABRIR / CERRAR
========================= */

esenciaBtn.addEventListener("click", () => {

    const isOpen = historia.classList.contains("active");

    historia.classList.toggle("active");
    esenciaBtn.classList.toggle("active");

    if (!isOpen) {

        buttonText.textContent = "Ocultar esencia";
        buttonArrow.textContent = "-";

        setTimeout(() => {

            manifestReading.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            updateManifest();
            updateProgress();

        }, 250);

    } else {

        buttonText.textContent = "Nuestra esencia";
        buttonArrow.textContent = "+";

    }

});

/* =========================
   EFECTO LECTURA
========================= */

function updateManifest() {

    const focusPoint =
        manifestReading.scrollTop +
        (manifestReading.offsetHeight * 0.60);

    manifestParagraphs.forEach(paragraph => {

        paragraph.classList.remove(
            "active",
            "near",
            "past"
        );

        const paragraphCenter =
            paragraph.offsetTop +
            (paragraph.offsetHeight / 2);

        const distance =
            paragraphCenter - focusPoint;

       if (Math.abs(distance) < 180) {

    paragraph.classList.add("active");

}


else if (distance < -380) {

    paragraph.classList.add("past");

}

    });

}

/* =========================
   BARRA PROGRESO
========================= */

function updateProgress() {

    const maxScroll =
        manifestReading.scrollHeight -
        manifestReading.clientHeight;

    const currentScroll =
        manifestReading.scrollTop;

    const progress =
        (currentScroll / maxScroll) * 100;

    progressBar.style.width = `${progress}%`;

}

/* =========================
   SCROLL
========================= */

let ticking = false;

manifestReading.addEventListener("scroll", () => {

    if (!ticking) {

        requestAnimationFrame(() => {

            updateManifest();
            updateProgress();

            ticking = false;

        });

        ticking = true;

    }

});

/* =========================
   INICIAL
========================= */

window.addEventListener("load", () => {

    updateManifest();
    updateProgress();

});








/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
(entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

            observer.unobserve(entry.target);

        }

    });

},
{
    threshold: 0.05,
    rootMargin: '0px 0px -80px 0px'
}
);

revealElements.forEach(el => {
    revealObserver.observe(el);
});





// ===============================
// MENU MOBILE
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");

});


// cerrar al tocar un enlace

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");

  });

});




/*==================================================
      EXPERIENCIA MÓVIL PREMIUM
==================================================*/
/*==========================================================

/*==================================================
      EXPERIENCIA MÓVIL PREMIUM
==================================================*/


document.addEventListener("DOMContentLoaded", () => {



    /*==================================================
    ELEMENTOS
    ==================================================*/


    const media = window.matchMedia("(max-width:768px)");

    const sidebar = document.querySelector(".pk-sidebar");

    const filterCard = document.querySelector(".pk-filter-card");

    const mobileMenu = document.getElementById("pkMobileMenu");

    const sheet = document.getElementById("pkSheet");

    const overlay = document.getElementById("pkOverlay");

    const openButton = document.getElementById("pkOpenSelector");

    const closeButton = document.getElementById("pkCloseSelector");

    const selector = document.querySelector(".pk-service-selector");

    const mobileCategoryList =
    document.getElementById("pkMobileCategoryList");



    if(
        !sidebar ||
        !filterCard ||
        !mobileMenu ||
        !sheet
    ) return;



    /*==================================================
    ESTADO
    ==================================================*/


    let isOpen = false;



    /*==================================================
    MOVER FILTRO
    ==================================================*/


    function moveMenu(){


        if(media.matches){


            if(filterCard.parentElement !== mobileMenu){


                mobileMenu.appendChild(filterCard);


            }


        }else{


            if(filterCard.parentElement !== sidebar){


                sidebar.appendChild(filterCard);


            }


            closeSheet();


        }


    }



    moveMenu();


    media.addEventListener(
        "change",
        moveMenu
    );





    /*==================================================
    BLOQUEO SCROLL
    ==================================================*/


    function lockScroll(){

        document.body.style.overflow="hidden";

    }


    function unlockScroll(){

        document.body.style.overflow="";

    }





    /*==================================================
    ABRIR SHEET
    ==================================================*/


    function openSheet(){


        if(!media.matches) return;


        isOpen=true;


        sheet.classList.add("show");

        overlay.classList.add("show");

        selector?.classList.add("active");


        lockScroll();


    }





    /*==================================================
    CERRAR SHEET
    ==================================================*/


    function closeSheet(){


        isOpen=false;


        sheet.classList.remove("show");

        overlay.classList.remove("show");

        selector?.classList.remove("active");


        unlockScroll();


    }





    /*==================================================
    EVENTOS
    ==================================================*/


    openButton?.addEventListener(
        "click",
        openSheet
    );



    closeButton?.addEventListener(
        "click",
        closeSheet
    );



    overlay?.addEventListener(
        "click",
        closeSheet
    );





    /*==================================================
    ESC
    ==================================================*/


    document.addEventListener(
        "keydown",
        e=>{


            if(
                e.key==="Escape" &&
                isOpen
            ){

                closeSheet();

            }


        }
    );





    /*==================================================
    CATEGORÍAS VISIBLES
    ==================================================
    Reutiliza los items existentes
    del filtro sin duplicar lógica
    ==================================================*/


    function buildMobileCategories(){


        if(!mobileCategoryList) return;



        mobileCategoryList.innerHTML="";



        const items =
        mobileMenu.querySelectorAll(
            ".pk-item"
        );



        items.forEach(item=>{


            const clone =
            item.cloneNode(true);



            clone.addEventListener(
                "click",
                ()=>{


                    item.click();


                    document
                    .querySelectorAll(
                        ".pk-mobile-category-list .active"
                    )
                    .forEach(active=>{

                        active.classList.remove(
                            "active"
                        );

                    });



                    clone.classList.add(
                        "active"
                    );



                }
            );



            mobileCategoryList.appendChild(
                clone
            );



        });


    }




    setTimeout(
        buildMobileCategories,
        300
    );





    window.addEventListener(
        "resize",
        ()=>{


            moveMenu();

            buildMobileCategories();


        }
    );





    /*==================================================
    API GLOBAL
    ==================================================*/


    window.pkMobile={


        open:openSheet,


        close:closeSheet,


        media,


        selector,


        sheet


    };



});