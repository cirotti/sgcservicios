// Animación al desplazarse
const elementosAnimados = document.querySelectorAll('[data-scroll]');

window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight / 5 * 4;

    elementosAnimados.forEach(elemento => {
        const topElemento = elemento.getBoundingClientRect().top;

        if (topElemento < triggerPoint) {
            elemento.classList.add('in-view');
        }
    });
});

// Slider para testimonios
let currentIndex = 0;
const testimonios = document.querySelectorAll('.testimonio-item');

// Mostrar el primer testimonio al inicio
testimonios[currentIndex].style.display = 'block';

setInterval(() => {
    testimonios[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % testimonios.length;
    testimonios[currentIndex].style.display = 'block';
}, 3000);

// Menú hamburguesa para versión móvil
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
