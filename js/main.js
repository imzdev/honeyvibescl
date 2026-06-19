/**
 * HoneyVibesCL - Módulo de Control General Unificado (Completo con Rutas /img/producto/)
 */

// --- 1. BASE DE DATOS DE PRODUCTOS PREMIUM ---
const PRODUCTS_DATA = [
    {
        id: "royal-honey",
        name: "Royal Honey",
        tagline: "Energía Inmediata & Potencia Máxima",
        image: "img/producto/honey1.png", 
        gallery: ["img/producto/honey1.png", "img/producto/honey2.png"],
        includes: [
            "Eurycoma longifolia (Tongkat Ali)",
            "Panax ginseng C.A. Meyer",
            "Royal Jelly (Jalea Real)",
            "Bee Pollen Extract",
            "Lepidium meyenii Walp. (Maca Peruana)",
            "Natural Honey Concentrate"
            ],
        benefits: [
        "Vitalidad Natural",
        "Energía Duradera",
        "Bienestar Integral",
        "Resistencia Potenciada"
                ],
        usage: "Tomar un sobre completo de 15g vía oral entre 30 a 45 minutos antes de la actividad física o cuando se requiera un golpe de energía. Se recomienda acompañar con un vaso de jugo frio.",
        indications: "Diseñado para adultos que buscan optimizar su rendimiento físico diario, romper la fatiga crónica y potenciar su vitalidad de forma orgánica.",
        precautions: "Evitar su uso si se padecen enfermedades cardíacas o se toman medicamentos para la presión, No apto para personas con problemas cardíacos crónicos, hipertensión severa no controlada, ni menores de 18 años. Mantener en un lugar fresco y seco."
    },
    {
        id: "black-leopard",
        name: "Black Leopard",
        tagline: "Fórmula de Resistencia & Vitalidad Avanzada",
        image: "img/producto/black1.png",
        gallery: ["img/producto/black1.png", "img/producto/black2.png"],
        includes: [
            "Eurycoma longifolia (Tongkat Ali)",
            "Lepidium meyenii (Maca Peruana)",
            "Panax ginseng (Ginseng Asiático)",
            "Royal Jelly (Jalea Real)",
            "Bee Pollen (Polen de Abeja)",
            "Natural Honey Extract"
            ],
        benefits: [
        "Efecto Prolongado",
        "Energía Sostenida",
        "Resistencia Mejorada",
        "Fórmula 100% Herbal"
            ],
        usage: "Consumir medio sobre o un sobre completo dependiendo de la tolerancia individual. Tomar preferentemente con el estómago ligero para una absorción óptima.",
        indications: "Ideal para los que buscan un efecto prolongado y una óptima oxigenación celular durante rutinas de alta exigencia.",
        precautions: "Evitar su uso si se padecen enfermedades cardíacas o se toman medicamentos para la presión, Evitar su consumo junto con bebidas alcohólicas destiladas en exceso. No apto para personas con problemas cardíacos crónicos, hipertensión severa no controlada, ni menores de 18 años. Mantener en un lugar fresco y seco."
    },

    {
        id: "honey-female",
        name: "Honey Female Libido Booster",
        tagline: "Vitalidad & Estímulo Femenino Enriquecido",
        image: "img/producto/female1.png",
        gallery: ["img/producto/female1.png", "img/producto/female2.png"],
        includes: [
            "Pueraria mirifica Root Powder",
            "Asparagus racemosus (Shatavari)",
            "Lepidium meyenii Walp. (Maca Peruana)",
            "Panax ginseng Extract",
            "Zingiber officinale (Jengibre)",
            "Herbal Botanical Blend"
            ],
        benefits: [
        "Vitalidad Femenina",
        "Equilibrio Corporal",
        "Energía Renovada",
        "Ingredientes de Origen Natural"
],
        usage: "Consumir un sobre completo vía oral por la tarde o de 30 a 45 minutos antes de la actividad. Puede mezclarse con un té tibio si se prefiere.",
        indications: "Especialmente formulado para mujeres que buscan potenciar su energía vital, balancear el cansancio diario y mejorar la sensibilidad física.",
        precautions: "Evitar su uso si se padecen enfermedades cardíacas o se toman medicamentos para la presión, No recomendado durante periodos de embarazo, lactancia ni para menores de 18 años. Almacenar protegido de la luz solar directa."
    },

    {
        id: "gummies-afro",
        name: "Gummies Afrodisíacas",
        tagline: "Potencia & Vitalidad en Gomitas",
        image: "img/producto/g1.png",
        gallery: ["img/producto/g1.png", "img/producto/g2.png"],
        includes: [
        "Extracto concentrado de Horny Goat Weed",
        "L-Arginina pura de grado alimentario",
        "Vitamina B6 y B12 activas",
        "Saborizante natural a frutos del bosque",
        "Withania somnifera (Ashwagandha)",
        "Tribulus terrestris Extract"
            ],
        benefits: [
    "Deseo Potenciado",
    "Energía y Vitalidad",
    "Resistencia Mejorada",
    "Sabor Delicioso"
],
        usage: "Consumir 1 gomita unos 30 minutos antes del momento deseado. No exceder más de 2 gomitas en un periodo de 24 horas.",
        indications: "Perfecto para parejas que desean encender la chispa, mejorar el ánimo, la disposición física y disfrutar de un formato moderno, discreto y delicioso.",
        precautions: "Evitar su uso si se padecen enfermedades cardíacas o se toman medicamentos para la presión, No apto para personas con problemas cardíacos crónicos, hipertensión severa no controlada, ni menores de 18 años. Aunque su sabor es delicioso, respete la dosis máxima diaria recomendada."
    }
    
];

let productSwiperInstance = null;

// --- 2. LOGICA DE INICIALIZACIÓN GENERAL ---
document.addEventListener("DOMContentLoaded", () => {
    // NUEVO: Obliga al navegador a restaurar el scroll al inicio arriba del todo
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0); 

    initParticlesBackground();
    renderProductsGrid();
    setupModalEvents();
    setupAccordionEvents();
    initTestimonialsSlider();
    runCinematicIntro();
});

// --- 3. INTRO CINEMATOGRÁFICA (GSAP) ---
function runCinematicIntro() {
    if (typeof gsap === 'undefined') {
        document.getElementById("cinema-loader").style.display = "none";
        document.getElementById("main-content").classList.add("visible-content");
        if (typeof AOS !== 'undefined') AOS.init({ duration: 1000, once: true });
        return;
    }

    const tl = gsap.timeline({
        onComplete: () => {
            if (typeof AOS !== 'undefined') AOS.init({ duration: 1000, once: true });
        }
    });

    tl.set("#cinema-loader", { opacity: 1 });
    tl.set(".loader-brand-img", { scale: 0.85, opacity: 0 });
    tl.set(".loader-subtitle", { opacity: 0, y: 15 });
    tl.set(".loader-welcome", { opacity: 0, scale: 0.95 });

    tl.to(".loader-brand-img", { scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" });
    gsap.to(".loader-brand-img", { y: -6, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    tl.to(".loader-subtitle", { opacity: 0.8, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.3");
    tl.to([".loader-brand-img", ".loader-subtitle"], { opacity: 0, y: -15, duration: 0.5, delay: 1.5, ease: "power2.in" });
    tl.to(".loader-welcome", { opacity: 1, scale: 1, duration: 0.1, ease: "power3.out" });
    
    tl.to("#cinema-loader", { opacity: 0, duration: 0.7, delay: 0.6, ease: "power2.inOut", onComplete: () => {
        document.getElementById("cinema-loader").style.display = "none";
    }});

    tl.to("#main-content", { onStart: () => {
        document.getElementById("main-content").classList.add("visible-content");
    }, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.5");
}

// --- 4. RENDERIZACIÓN DE TARJETAS EN EL HOME ---
function renderProductsGrid() {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    let html = "";
    PRODUCTS_DATA.forEach(p => {
        html += `
            <div class="product-card glass-morphism" data-aos="fade-up">
                <div class="product-card-img-container">
                    <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy">
                </div>
                <div class="product-card-info">
                    <div class="product-card-meta">
                        <span class="product-card-tagline">${p.tagline}</span>
                        <h3 class="product-card-title">${p.name}</h3>
                    </div>
                    <button class="btn-view-product" onclick="openProductModal('${p.id}')">Ver Detalles</button>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

// --- 5. CONTROL DEL MODAL (COMPATIBILIDAD DOBLE CLASE) ---
function setupModalEvents() {
    const modal = document.getElementById("product-modal");
    const closeBtn = document.getElementById("close-modal");

    if (modal && closeBtn) {
        closeBtn.addEventListener("click", closeProductModal);
        modal.addEventListener("click", (e) => { if (e.target === modal) closeProductModal(); });
    }
}

function openProductModal(productId) {
    const p = PRODUCTS_DATA.find(item => item.id === productId);
    if (!p) return;

    // Seteo de textos básicos
    document.getElementById("modal-product-name").innerText = p.name;
    document.getElementById("modal-product-tagline").innerText = p.tagline;
    document.getElementById("modal-product-usage").innerText = p.usage;
    document.getElementById("modal-product-indications").innerText = p.indications;
    document.getElementById("modal-product-precautions").innerText = p.precautions;

    // Inyectar listas de contenido y tags de beneficios
    document.getElementById("modal-product-includes").innerHTML = p.includes.map(i => `<li>• ${i}</li>`).join("");
    document.getElementById("modal-product-benefits").innerHTML = p.benefits.map(b => `<span class="benefit-tag">${b}</span>`).join("");

    // Generar dinámicamente las fotos dobles del Swiper
    const sliderWrapper = document.getElementById("modal-slider-wrapper");
    sliderWrapper.innerHTML = p.gallery.map(imgSrc => `
        <div class="swiper-slide">
            <img src="${imgSrc}" class="modal-swiper-img" alt="${p.name}">
        </div>
    `).join("");

    // Enlace de WhatsApp dinámico
    const whatsappBtn = document.getElementById("modal-whatsapp-btn");
    const encodedMsg = encodeURIComponent(`Hola HoneyVibesCL, me interesa agendar una compra discreta y segura del producto: *${p.name}*. Quedo atento a la disponibilidad.`);
    whatsappBtn.href = `https://wa.me/56936545303?text=${encodedMsg}`;

    // Desplegar modal removiendo y agregando ambos tipos de clases
    const modalElement = document.getElementById("product-modal");
    modalElement.classList.remove("hidden-modal", "c-hidden");
    modalElement.classList.add("visible-modal", "c-visible");
    document.body.style.overflow = "hidden";

    // Inicializar o actualizar Swiper interno
    if (typeof Swiper !== 'undefined') {
        setTimeout(initProductSlider, 150);
    }
}

function closeProductModal() {
    const modalElement = document.getElementById("product-modal");
    if (modalElement) {
        modalElement.classList.remove("visible-modal", "c-visible");
        modalElement.classList.add("hidden-modal", "c-hidden");
        document.body.style.overflow = "auto";
    }
    // Limpiar colapsables abiertos
    document.querySelectorAll(".accordion-item.active").forEach(item => {
        item.classList.remove("active");
        item.querySelector(".accordion-content").style.maxHeight = null;
        item.querySelector(".accordion-trigger span").innerText = "+";
    });
}

// --- 6. SISTEMA DE ACORDEONES ---
function setupAccordionEvents() {
    document.querySelectorAll(".accordion-trigger").forEach(trigger => {
        trigger.addEventListener("click", function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;
            const indicator = this.querySelector("span");

            if (item.classList.contains("active")) {
                content.style.maxHeight = null;
                item.classList.remove("active");
                indicator.innerText = "+";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                item.classList.add("active");
                indicator.innerText = "-";
            }
        });
    });
}

// --- 7. INICIALIZADORES SWIPER ---
function initProductSlider() {
    if (productSwiperInstance) productSwiperInstance.destroy(true, true);
    productSwiperInstance = new Swiper('.product-swiper', {
        loop: true,
        spaceBetween: 10,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });
}

function initTestimonialsSlider() {
    if (typeof Swiper === 'undefined') return;
    new Swiper('.testimonials-swiper', {
        loop: true,
        spaceBetween: 20,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
    });
}

// --- 8. FONDO DE ESTRELLAS Y CONSTELACIONES MEJORADO (MÁS ANIMADO) ---
function initParticlesBackground() {
    if (typeof particlesJS === 'undefined') return;
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 90, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": ["#b77b15", "#ffffff"] },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.4, "random": false },
            "size": { "value": 2.5, "random": true },
            "line_linked": { "enable": true, "distance": 110, "color": "#b77b15", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "grab" } }, // Efecto magnético
            "modes": { "grab": { "distance": 200, "line_linked": { "opacity": 0.6 } } }
        },
        "retina_detect": true
    });
}