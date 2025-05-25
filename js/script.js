document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }

    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Active Nav Link (Basic - highlights based on current URL)
    // More robust solutions might be needed for complex pathing
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            // Remove active from all first
            navLinks.forEach(l => l.classList.remove('active'));
            // Add to current
            link.classList.add('active');
        }
    });

    // Special case for homepage if URL is just "/" or "/index.html"
    if (currentPath === '' || currentPath === 'index.html') {
        const homeLink = document.querySelector('nav ul li a[href="index.html"]');
        if (homeLink) {
            navLinks.forEach(l => l.classList.remove('active')); // Ensure no other is active
            homeLink.classList.add('active');
        }
    }
});
// Add custom JS if needed. Navbar toggling could go here in the future.
