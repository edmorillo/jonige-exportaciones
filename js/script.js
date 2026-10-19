document.addEventListener('DOMContentLoaded', () => {
    
    // 1. EFECTO DEL NAVBAR AL HACER SCROLL
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. ANIMACIÓN DE APARICIÓN AL HACER SCROLL (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Píxeles antes de que aparezca

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    // Disparar la función una vez al inicio por si ya hay elementos visibles
    revealOnScroll();
    
    // Disparar cada vez que el usuario haga scroll
    window.addEventListener('scroll', revealOnScroll);
});