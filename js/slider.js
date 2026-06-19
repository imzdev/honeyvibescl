/**
 * HoneyVibesCL - Configuración de Carruseles y Sliders
 * Inicializa y gestiona las instancias de Swiper.js de forma dinámica.
 */

let productSwiperInstance = null;

/**
 * Inicializa o actualiza el slider de imágenes dentro del modal de producto.
 * Se ejecuta dinámicamente cada vez que el usuario abre un producto.
 */
function initProductSwiper() {
    // Si ya existe una instancia activa, la destruimos para evitar duplicados en memoria
    if (productSwiperInstance !== null) {
        productSwiperInstance.destroy(true, true);
    }

    // Inicializar Swiper para la galería del producto
    productSwiperInstance = new Swiper('.product-swiper', {
        loop: true,
        speed: 600,
        grabCursor: true,
        effect: 'fade', // Transición elegante y suave tipo Apple
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/**
 * Inicializa el carrusel de testimonios de clientes de forma global.
 */
function initTestimonialsSwiper() {
    new Swiper('.testimonials-swiper', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.testimonials-section .swiper-pagination',
            clickable: true,
        },
        // Adaptabilidad premium para pantallas grandes
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    });
}

// Inicializar el carrusel de testimonios cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    if (typeof Swiper !== 'undefined') {
        initTestimonialsSwiper();
    }
});