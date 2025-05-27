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
// Typewriter effect
    //const phrases = [
       // "Chinese Here😉",
       // "Startup CEO in Beta",
       // "AI Talks. I Listen.",
       // "Running on Caffeine & Commits",
     //   "Still Debugging Life"
   // ];
    const phrases = [
    // Your original one
    "Hey there",
    "I'm",
    "Deon.",

    // 1
    "nicknamed",
    "chinese",
    "i love.",

    // 2
    "AI",
    "more than",
    "my imaginary .",

    // 3
    "rich ",
    "girlfriend",
    "isn't ",
    "that an.",

    // 4
    " obsession",
    "well",
    "go ahead.",

    // 5
    "check my ",
    "profile ",
    "if i impress",
    "you, get me.",

    // 6
    "some gig",
    "so as i ",
    "can get a .",

    // 7
    "life and ",
    "a real ",
    "Girlfriend .",

    // 8
    "c'amon",
    "now",
    "lers focus."
];

    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;

    const typewriter = document.getElementById('typewriter');

    function loopTyping() {
        isEnd = false;
        typewriter.innerHTML = currentPhrase.join('');

        if (i < phrases.length) {
            if (!isDeleting && j <= phrases[i].length) {
                currentPhrase.push(phrases[i][j]);
                j++;
            }

            if (isDeleting && j <= phrases[i].length) {
                currentPhrase.pop();
                j--;
            }

            if (j === phrases[i].length) {
                isEnd = true;
                isDeleting = true;
            }

            if (isDeleting && j === 0) {
                currentPhrase = [];
                isDeleting = false;
                i++;
                if (i === phrases.length) i = 0;
            }
        }

        const speed = isEnd ? 1000 : isDeleting ? 50 : 100;
        setTimeout(loopTyping, speed);
    }

    if (typewriter) {
        loopTyping();
    } else {
        console.warn("Typewriter span not found in DOM.");
    }
