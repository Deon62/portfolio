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
    "How does a computer",
    "get drunk?",
    "By taking screenshots.",

    // 1
    "Why do programmers hate",
    "going outside?",
    "There are too many bugs.",

    // 2
    "Why did the startup founder",
    "quit caffeine?",
    "Too many Java exceptions.",

    // 3
    "Why don't AI models",
    "tell good jokes?",
    "They haven't been ",
    "fine-tuned for humor.",

    // 4
    "Why did the developer",
    "go broke?",
    "Because he used up all his cache.",

    // 5
    "How do devs flirt?",
    "They say:",
    "You're the semicolon",
    "to my statements.",

    // 6
    "What's a blockchain dev’s",
    "favorite party?",
    "A consensus party.",

    // 7
    "Why was the neural network",
    "so dramatic?",
    "It kept overfitting to the past.",

    // 8
    "How do full-stack devs",
    "stay balanced?",
    "They keep everything in scope."
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
