// UI Interactions & DOM Scripts
document.addEventListener('DOMContentLoaded', () => {

    // WhatsApp Form Submission
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('waName').value;
            const date = document.getElementById('waDate').value;
            const msg = document.getElementById('waMsg').value;
            
            const phoneNumber = "919842468803"; // Provided phone number
            const text = `Hello Sri Pandian Kalyana Mahal,\n\nI would like to inquire about a booking.\n\n*Name:* ${name}\n*Event Date:* ${date}\n*Message:* ${msg || 'Please contact me.'}`;
            
            const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
            window.open(waUrl, '_blank');
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallBack = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallBack, revealOptions);
    
    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Initial check for navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }

    // Initialize Parallax
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if(scrolled < window.innerHeight && heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
    
    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        if(navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#fff';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            
            // Adjust links colors for mobile menu
            const links = navLinks.querySelectorAll('a');
            links.forEach(a => {
                a.style.color = '#2c241b';
                a.style.padding = '10px 0';
            });
        }
    });
});
