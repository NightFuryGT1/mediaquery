const menu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
});