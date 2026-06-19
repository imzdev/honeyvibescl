/**
 * HoneyVibesCL - Configuración de Partículas Doradas
 * Utiliza Particles.js para crear el efecto de polvo de oro y atmósfera premium.
 */
document.addEventListener("DOMContentLoaded", () => {
    if (typeof particlesJS !== 'undefined') {
        initGoldParticles();
    }
});

function initGoldParticles() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 60, // Densidad elegante, no sobrecarga la pantalla
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#b77b15", "#d79a19", "#f8d56c"] // Variación de tonos dorados oficiales
            },
            "shape": {
                "type": "circle", // Círculos para simular polvo flotante orgánico
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.6,
                "random": true, // Brillos con distinta opacidad para dar profundidad
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true, // Diferentes tamaños para emular perspectiva tridimensional
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false // Desactivamos líneas para que no parezca una red tecnológica, sino un fluido orgánico
            },
            "move": {
                "enable": true,
                "speed": 0.8, // Movimiento ultra pausado y sofisticado
                "direction": "top", // Las partículas flotan hacia arriba suavemente
                "random": true,
                "straight": false,
                "out_mode": "out", // Reaparecen de manera constante
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble" // Al pasar el mouse, las partículas reaccionan como destellos
                },
                "onclick": {
                    "enable": false
                },
                "resize": true
            },
            "modes": {
                "bubble": {
                    "distance": 150,
                    "size": 5,
                    "duration": 2,
                    "opacity": 0.9,
                    "speed": 3
                }
            }
        },
        "retina_detect": true
    });
}