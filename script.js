// Animación al desplazarse
const elementosAnimados = document.querySelectorAll('[data-scroll]');

window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight / 5 * 4;

    elementosAnimados.forEach(elemento => {
        const topElemento = elemento.getBoundingClientRect().top;

        if (topElemento < triggerPoint) {
            elemento.style.transform = 'translateY(0)';
            elemento.style.opacity = '1';
        }
    });
});

// Slider para testimonios
let currentIndex = 0;
const testimonios = document.querySelectorAll('.testimonio-item');

setInterval(() => {
    testimonios[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % testimonios.length;
    testimonios[currentIndex].style.display = 'block';
}, 3000);
