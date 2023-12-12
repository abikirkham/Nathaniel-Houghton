document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navList.style.display = (navList.style.display === 'block' || navList.style.display === '') ? 'none' : 'block';
    });
});