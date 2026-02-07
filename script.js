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
});
});

