document.addEventListener('DOMContentLoaded', () => {
    // 1. Check if the user is logged in
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    const navLinks = document.querySelectorAll('nav a[data-section]');
    const sections = document.querySelectorAll('.page-section');
    const logoutLink = document.querySelector('a[href="#logout"]');

    // 2. Navigation Functionality
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // 3. Logout logic
    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        sessionStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    });

    // Set default view
    showSection('home');
});