/**
 * HoneyVibesCL - Módulo de Intro Cinematográfica (Versión Premium Logo Pro)
 */
document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap !== 'undefined') {
        runCinematicIntro();
    } else {
        const loader = document.getElementById("cinema-loader");
        const mainContent = document.getElementById("main-content");
        if (loader) loader.style.display = "none";
        if (mainContent) mainContent.classList.add("visible-content");
    }
});

function runCinematicIntro() {
    const tl = gsap.timeline({
        onComplete: () => {
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }
    });

    // 1. Configuración de estados de inicio
    tl.set("#cinema-loader", { opacity: 1, visibility: "visible" });
    tl.set(".loader-brand-img-pro", { scale: 0.82, opacity: 0 });
    tl.set(".loader-subtitle", { opacity: 0, y: 15 });
    tl.set(".loader-welcome", { opacity: 0, scale: 0.9 });

    // 2. Despliegue premium de tu logotipo completo
    tl.to(".loader-brand-img-pro", {
        scale: 1,
        opacity: 1,
        duration: 1.3,
        ease: "power4.out"
    });

    // 3. Activación de flotación orgánica infinita para el logo
    gsap.to(".loader-brand-img-pro", {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // 4. Emerge el eslogan "La verdadera miel"
    tl.to(".loader-subtitle", {
        opacity: 0.8,
        y: 0,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.4");

    // 5. Transición: El logo y subtítulo se elevan y disuelven
    tl.to([".loader-brand-img-pro", ".loader-subtitle"], {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: 1.6, 
        ease: "power2.in"
    });

    // 6. Aparece la bienvenida corporativa
    tl.to(".loader-welcome", {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out"
    });

    // 7. Cierre definitivo de la cortina del Loader
    tl.to("#cinema-loader", {
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
            const loader = document.getElementById("cinema-loader");
            if (loader) loader.style.display = "none";
        }
    });

    // 8. Entrada fluida de la landing page completa
    tl.to("#main-content", {
        onStart: () => {
            const mainContent = document.getElementById("main-content");
            if (mainContent) mainContent.classList.add("visible-content");
        },
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    }, "-=0.6");
}