// CONTROLADOR DE PESTAÑAS (TABS) PARA MADERA Y CAMARÓN
function openTab(evt, tabId) {
    // 1. Ocultar todos los paneles
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => pane.classList.remove('active'));

    // 2. Desactivar todos los botones
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));

    // 3. Mostrar el seleccionado y activar su botón
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// EFECTO NAVBAR AL HACER SCROLL
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 40) {
        navbar.style.borderBottomColor = 'rgba(194, 167, 92, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    }
});

// CONTROLADOR DEL MENÚ MÓVIL
const mobileMenuBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if(mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Cerrar el menú al tocar un enlace
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}