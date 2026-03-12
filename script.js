document.addEventListener('DOMContentLoaded', () => {
    const menutoggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.barra-navegacion ul');

    // Abrir y cerrar el menu
    menutoggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menutoggle.classList.toggle('active');
    });
    // Cerrar el menu al hacer clic en un enlace
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnToggle = menutoggle.contains(event.target);

        if (isClickInsideMenu || isClickOnToggle) {
            return; // No hacer nada si se hace clic dentro del menú o en el botón de menú
        }
        menu.classList.remove('active'); // Cerrar el menú si se hace clic fuera de él
        menutoggle.classList.remove('active'); // Cambiar el estado del botón de menú
    });
});
// scroll top navigation
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.menu');
    if (this.window.scrollY > 0) {
        nav.classList.add('affix');
    } else {
        nav.classList.remove('affix');
    }
});
// Cerrar el menú al hacer clic en un enlace
const links = document.querySelectorAll('.barra-navegacion ul');
const nav = document.querySelector('.barra-navegacion ul');
links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        const menutoggle = document.querySelector('.menu-toggle');
        menutoggle.classList.remove('active');
    });

});

// --- Efecto Typewriter ---
const textArray = ["Frontend Developer", "UI/UX Diseñador", "Programador Web", "Desarrollador de Software"];
let textIndex = 0;
let charIndex = 0;
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Tiempo de espera tras escribir una frase
const typeWriterSpan = document.querySelector(".typewriter");

function type() {
    if (charIndex < textArray[textIndex].length) {
        if (!typeWriterSpan.classList.contains("typing")) {
            typeWriterSpan.classList.add("typing");
        }
        typeWriterSpan.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        typeWriterSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!typeWriterSpan.classList.contains("typing")) {
            typeWriterSpan.classList.add("typing");
        }
        typeWriterSpan.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        typeWriterSpan.classList.remove("typing");
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// --- Scroll Reveal Animations ---
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Solo animar la primera vez
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Se activa cuando al menos el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
});