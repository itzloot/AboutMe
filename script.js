// script.js - Ultra Smooth Portfolio

const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Super smooth scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.9s ease-out';
    observer.observe(el);
});

// Header effect on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10,10,10,0.98)';
        header.style.boxShadow = '0 10px 40px rgba(0,0,0,0.7)';
    } else {
        header.style.background = 'rgba(10,10,10,0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
    }
});

// Hero image parallax
const heroImg = document.querySelector('.hero-image img');
window.addEventListener('scroll', () => {
    if (heroImg) heroImg.style.transform = `translateY(${window.scrollY * 0.4}px)`;
});