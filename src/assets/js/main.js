// Security Portfolio - Main JavaScript
// Progressive enhancement for navigation and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initNavigation();
    initProgressAnimations();
    initTypewriterEffect();
    initScrollToTop();

    console.log('Security Portfolio initialized successfully');
});

// Navigation enhancement
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for internal links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Progress bar animations
function initProgressAnimations() {
    const progressBars = document.querySelectorAll('.progress-fill');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                progressBar.style.width = '0%';
                progressBar.style.transition = 'width 2s ease-out';

                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 100);
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// Typewriter effect for hero section
function initTypewriterEffect() {
    const codeLines = document.querySelectorAll('.code-line');
    let delay = 0;

    codeLines.forEach((line, index) => {
        if (line.classList.contains('output')) {
            setTimeout(() => {
                line.style.opacity = '0';
                line.style.transform = 'translateY(10px)';
                line.style.transition = 'all 0.5s ease';

                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'translateY(0)';
                }, 50);
            }, delay);
            delay += 800;
        }
    });
}

// Scroll to top functionality
function initScrollToTop() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);

    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Timeline animation on scroll
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// Card hover effects
function initCardAnimations() {
    const cards = document.querySelectorAll('.update-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = 'var(--shadow-lg)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--shadow-sm)';
        });
    });
}

// Security-focused console message
function securityConsoleMessage() {
    console.log('%c🔒 Security Portfolio', 'color: #0078d4; font-size: 20px; font-weight: bold;');
    console.log('%cThis portfolio demonstrates Azure security best practices.', 'color: #666; font-size: 14px;');
    console.log('%cIf you\'re interested in cybersecurity or Azure, feel free to connect!', 'color: #666; font-size: 14px;');

    // Security warning for curious developers
    console.log('%c⚠️ Security Notice', 'color: #ff8800; font-size: 16px; font-weight: bold;');
    console.log('%cThis site implements Content Security Policy and other security headers.', 'color: #666; font-size: 12px;');
    console.log('%cAny attempts to bypass security measures are logged and monitored.', 'color: #666; font-size: 12px;');
}

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initTimelineAnimations();
    initCardAnimations();
    securityConsoleMessage();
});

// Performance monitoring
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Page loaded in ${Math.round(loadTime)}ms`);

            // Track Core Web Vitals if available
            if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        console.log(`${entry.name}: ${Math.round(entry.value)}ms`);
                    }
                });

                observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
            }
        });
    }
}

// Initialize performance tracking
trackPerformance();

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initNavigation,
        initProgressAnimations,
        initTypewriterEffect,
        initScrollToTop
    };
}
