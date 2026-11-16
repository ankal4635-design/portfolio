const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    navbar.classList.toggle('active', !isExpanded);
});

navbar.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
        navbar.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});
