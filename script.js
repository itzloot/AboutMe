// script.js - Ultra Smooth Animations for Free De Le Hoya Portfolio

// 1. Mobile Menu Toggle (Hamburger)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 2. Smooth Scroll Reveal Animations (better than basic CSS)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        }
    });
}, observerOptions);

// Apply to all elements with animate-on-scroll
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    // Initial state
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);
});

// 3. Hero image floating + subtle parallax effect
const heroImage = document.querySelector('.hero-image img');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
});

// 4. Navbar background on scroll (elegant effect)
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = "rgba(15, 23, 42, 0.98)";
        header.style.backdropFilter = "blur(15px)";
        header.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
    } else {
        header.style.backgroundColor = "rgba(15, 23, 42, 0.95)";
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
    }
});

// 5. Language cards hover tilt effect (optional cool 3D feel)
document.querySelectorAll('.language-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 12;
        const rotateY = (centerX - x) / 12;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
});

// 6. Smooth scroll for anchor links (extra smooth)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});