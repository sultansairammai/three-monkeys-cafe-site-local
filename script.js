// Minimal interactions for the pure desktop layout landing page
// Dark canvas/GSAP sequence has been cleanly fully removed as requested

console.log('The 3 Monkeys Café - Core interactions running');

// Menu Filters selection state
document.querySelectorAll('.menu-filters span').forEach(item => {
    item.addEventListener('click', (e) => {
        // Exclude buttons which contain different mechanics
        if (e.target.tagName !== 'BUTTON') {
            e.target.parentElement.querySelectorAll('span').forEach(sib => sib.classList.remove('active'));
            e.target.classList.add('active');
        }
    });
});

// Hamburger Mobile Menu Logic
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });
}

// Pagination state
document.querySelectorAll('.pagination span').forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.innerText !== '...') {
            e.target.parentElement.querySelectorAll('span').forEach(sib => sib.classList.remove('active'));
            e.target.classList.add('active');
        }
    });
});

// Smooth scroll for nav
document.querySelectorAll('.nav-links a, .mobile-cta-bar a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (hamburger && hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinksContainer.classList.remove('active');
                }
            }
        }
    });
});

// Update active state on scroll
const sections = Array.from(document.querySelectorAll('section[id], .find-us-block[id]'));
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.pageYOffset - navbarHeight - 50;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    // Force highlight the last section if scrolled to the absolute bottom of the page
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 10) {
        current = sections[sections.length - 1].getAttribute('id');
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
