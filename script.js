document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.querySelector('.year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.skill-card, .project-card, .about-image img, .about-text, .detail-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animated elements
    document.querySelectorAll('.skill-card, .project-card, .about-image img, .about-text, .detail-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Matrix effect
    function createMatrixEffect() {
        const container = document.querySelector('.matrix-effect');
        const characters = "01";
        const fontSize = 14;
        const columns = Math.floor(window.innerWidth / fontSize);
        const rows = Math.floor(window.innerHeight / fontSize);
        
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.left = `${i * fontSize}px`;
            column.style.animationDelay = `${Math.random() * 5}s`;
            column.style.animationDuration = `${5 + Math.random() * 10}s`;
            
            for (let j = 0; j < rows; j++) {
                const char = document.createElement('span');
                char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
                char.style.opacity = Math.random();
                char.style.animationDelay = `${Math.random() * 2}s`;
                column.appendChild(char);
            }
            
            container.appendChild(column);
        }
    }
    
    createMatrixEffect();

    // Terminal typing effect for project cards
    function initTerminalTyping() {
        const terminals = document.querySelectorAll('.terminal-content');
        terminals.forEach(terminal => {
            const lines = terminal.querySelectorAll('.terminal-line');
            lines.forEach((line, index) => {
                line.style.animation = `typing 3s steps(30) ${index * 1.5}s forwards`;
            });
        });

        const consoles = document.querySelectorAll('.console-content');
        consoles.forEach(console => {
            const lines = console.querySelectorAll('.console-line');
            lines.forEach((line, index) => {
                line.style.animation = `typing 3s steps(30) ${index * 1.5}s forwards`;
            });
        });
    }

    // Initialize after a delay to allow for animations
    setTimeout(initTerminalTyping, 1000);
});