document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Debug: Log number of nav links and their text
    console.log(`Found ${navLinks.length} nav links`);
    navLinks.forEach((link, index) => {
        console.log(`Link ${index}: ${link.querySelector('a').textContent}`);
    });
    
    // Reset menu state on page load
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
    navLinks.forEach(link => {
        link.style.animation = '';
        link.style.opacity = '1'; // Fallback
    });
    
    // Toggle menu on burger click
    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                console.log(`Removing animation from link ${index}`);
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                link.style.opacity = '1'; // Fallback
                console.log(`Applying animation to link ${index}`);
            }
        });
        burger.classList.toggle('toggle');
    });
    
    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => {
                link.style.animation = '';
                link.style.opacity = '1';
            });
        });
    });
    
    // Keyboard accessibility
    burger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                    console.log(`Removing animation from link ${index} (keyboard)`);
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                    link.style.opacity = '1';
                    console.log(`Applying animation to link ${index} (keyboard)`);
                }
            });
            burger.classList.toggle('toggle');
        }
    });
});