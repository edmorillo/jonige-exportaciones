// 1. CONTROLADOR DE PESTAÑAS (TABS) PARA MADERA Y CAMARÓN
function openTab(evt, tabId) {
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => pane.classList.remove('active'));

    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// 2. EFECTO NAVBAR AL HACER SCROLL
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 40) {
            navbar.style.borderBottomColor = 'rgba(194, 167, 92, 0.3)';
        } else {
            navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
        }
    }
});

// 3. MENÚ A PANTALLA COMPLETA (ESTILO VIDEO 1)
const mobileMenuBtn = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const closeLinks = document.querySelectorAll('.fs-close-link');

if (mobileMenuBtn && fullscreenMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        fullscreenMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita que el fondo se mueva con el menú abierto
    });
}

if (closeMenuBtn && fullscreenMenu) {
    closeMenuBtn.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
}

closeLinks.forEach(link => {
    link.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// 4. CARRUSEL DE PORTADA CON CONTROLES Y PAUSA (ESTILO VIDEO 2)
const slides = document.querySelectorAll('.hero-slide');
const bars = document.querySelectorAll('.slider-bar');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
const pauseBtn = document.getElementById('pause-slide');
const pauseIcon = document.getElementById('pause-icon');

let currentSlide = 0;
let isPaused = false;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    bars.forEach((bar, i) => {
        bar.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

function startSlider() {
    slideInterval = setInterval(() => {
        if (!isPaused) {
            nextSlide();
        }
    }, 5500);
}

function resetTimer() {
    clearInterval(slideInterval);
    startSlider();
}

if (slides.length > 0) {
    startSlider();

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        if (isPaused) {
            pauseIcon.classList.remove('fa-pause');
            pauseIcon.classList.add('fa-play');
        } else {
            pauseIcon.classList.remove('fa-play');
            pauseIcon.classList.add('fa-pause');
        }
    });

    bars.forEach((bar, index) => {
        bar.addEventListener('click', () => {
            showSlide(index);
            resetTimer();
        });
    });
}