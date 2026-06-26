// Funcionalidade 1: Modo Escuro (Dark Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    // Alterna o atributo de tema no body
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// Funcionalidade 2: Menu Responsivo Mobile
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.querySelector('#nav-menu ul');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});