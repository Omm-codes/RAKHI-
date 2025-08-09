// Floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    const heartsContainer = document.querySelector('.floating-hearts');
    if (heartsContainer) {
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);

// Initial floating hearts
for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingHeart, i * 1000);
}

// Reveal hidden content on the intro page
function revealContent() {
    const introScreen = document.querySelector('.intro-screen');
    const hiddenContent = document.querySelector('.hidden-content');
    
    if (introScreen && hiddenContent) {
        introScreen.style.opacity = '0';
        introScreen.style.transform = 'translateY(-30px)';
        introScreen.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            introScreen.style.display = 'none';
            hiddenContent.classList.add('show');
            
            // Reveal fade-in elements with delay
            const fadeElements = document.querySelectorAll('.fade-in-element');
            fadeElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('show');
                }, index * 300);
            });
        }, 500);
    }
}

// Journey page card navigation
function showCard(cardNumber) {
    const cards = document.querySelectorAll('.journey-card');
    const dots = document.querySelectorAll('.nav-dot');
    const progress = document.querySelector('.progress');
    
    if (cards.length > 0 && dots.length > 0) {
        // Update cards
        cards.forEach(card => card.classList.remove('active'));
        if (cards[cardNumber-1]) {
            cards[cardNumber-1].classList.add('active');
        }
        
        // Update navigation dots
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[cardNumber-1]) {
            dots[cardNumber-1].classList.add('active');
        }
        
        // Update progress bar
        if (progress) {
            const progressPercent = (cardNumber / cards.length) * 100;
            progress.style.width = `${progressPercent}%`;
        }
    }
}

// Create a burst of hearts
function createHeartBurst() {
    // Create multiple hearts in different directions
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 100);
    }
    
    // Show a message
    const finalMessage = document.getElementById('finalMessage');
    if (finalMessage) {
        const messages = [
            "Love you always! ❤️",
            "You're the best sister ever! 💕",
            "Sending you all my love! 💖",
            "Sisters forever! 💗"
        ];
        
        finalMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
        finalMessage.classList.add('show');
        
        setTimeout(() => {
            finalMessage.classList.remove('show');
        }, 3000);
    }
}

// Tie virtual rakhi
function tieVirtualRakhi() {
    // Create sparkle effect
    const finaleRakhi = document.querySelector('.finale-rakhi');
    if (finaleRakhi) {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.style.position = 'absolute';
                sparkle.style.width = '6px';
                sparkle.style.height = '6px';
                sparkle.style.background = '#D4AF37';
                sparkle.style.borderRadius = '50%';
                sparkle.style.top = Math.random() * 150 + 'px';
                sparkle.style.left = Math.random() * 150 + 'px';
                sparkle.style.boxShadow = '0 0 10px #D4AF37';
                sparkle.style.animation = 'sparkle 1.5s ease-out forwards';
                sparkle.style.zIndex = '10';
                
                finaleRakhi.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 1500);
            }, i * 150);
        }
    }
    
    // Show a message
    const finalMessage = document.getElementById('finalMessage');
    if (finalMessage) {
        const messages = [
            "This virtual rakhi carries my promise to always protect you ❤️",
            "Distance can't weaken our bond 🌟",
            "Consider this rakhi tied with love 💖",
            "May our bond grow stronger each year 💕"
        ];
        
        finalMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
        finalMessage.classList.add('show');
        
        setTimeout(() => {
            finalMessage.classList.remove('show');
        }, 3000);
    }
}

// Floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);

// Initial floating hearts
for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingHeart, i * 1000);
}

// Show love message function
function showLove() {
    const loveMessage = document.getElementById('loveMessage');
    if (loveMessage) {
        loveMessage.classList.add('show');
        
        // Create burst of hearts
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 100);
        }
        
        // Hide message after 3 seconds
        setTimeout(() => {
            loveMessage.classList.remove('show');
        }, 3000);
    }
}

// Add sparkle effect to rakhi
function createSparkle() {
    const rakhiElements = document.querySelectorAll('.rakhi');
    if (rakhiElements.length === 0) return;
    
    const rakhi = rakhiElements[Math.floor(Math.random() * rakhiElements.length)];
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.width = '5px';
    sparkle.style.height = '5px';
    sparkle.style.background = '#D4AF37';
    sparkle.style.borderRadius = '50%';
    sparkle.style.top = Math.random() * 120 + 'px';
    sparkle.style.left = Math.random() * 120 + 'px';
    sparkle.style.animation = 'sparkle 1.5s ease-out forwards';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '2';
    
    rakhi.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}

// Add sparkle keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        50% {
            opacity: 1;
            transform: scale(1.2);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);

// Create sparkles on rakhi periodically
setInterval(createSparkle, 1000);

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Mobile navigation
function setupMobileNav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');
            
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
}

// Special message function
function showSpecialMessage() {
    const message = document.getElementById('specialMessage');
    if (!message) return;
    
    const button = document.querySelector('.modern-button');
    
    message.classList.add('show');
    if (button) button.style.pointerEvents = 'none';
    
    // Add subtle particle effect
    createParticles();
    
    setTimeout(() => {
        message.classList.remove('show');
        if (button) button.style.pointerEvents = 'auto';
    }, 4000);
}

// Simple particle effect
function createParticles() {
    const colors = ['#722F37', '#9A4A54', '#D4AF37'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            
            const angle = (Math.PI * 2 * i) / 20;
            const velocity = 100 + Math.random() * 80;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            document.body.appendChild(particle);
            
            let x = 0, y = 0, gravity = 300;
            const startTime = Date.now();
            
            function animate() {
                const elapsed = (Date.now() - startTime) / 1000;
                x = vx * elapsed;
                y = vy * elapsed + 0.5 * gravity * elapsed * elapsed;
                
                particle.style.transform = `translate(${x}px, ${y}px)`;
                particle.style.opacity = Math.max(0, 1 - elapsed / 1.5);
                
                if (elapsed < 1.5) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            }
            
            animate();
        }, i * 50);
    }
}

// Virtual Rakhi functionality
function tieVirtualRakhi() {
    const rakhiMessage = document.getElementById('rakhiMessage');
    if (!rakhiMessage) return;
    
    // Display tying animation
    const rakhiDisplay = document.querySelector('.rakhi-display');
    if (rakhiDisplay) {
        rakhiDisplay.classList.add('tying');
        setTimeout(() => {
            rakhiDisplay.classList.remove('tying');
        }, 1500);
    }
    
    // Show different messages on each click
    const messages = [
        "I promise to always protect you! ❤️",
        "This virtual rakhi carries all my love! 💖",
        "Distance can't weaken our bond! 🌟",
        "You're the best sister ever! 💕"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    rakhiMessage.textContent = randomMessage;
    rakhiMessage.classList.add('show');
    
    // Create a burst of sparkles
    for (let i = 0; i < 10; i++) {
        setTimeout(createSparkle, i * 100);
    }
    
    setTimeout(() => {
        rakhiMessage.classList.remove('show');
    }, 3000);
}

// Highlight quality card
function highlightQuality(element) {
    const qualityCards = document.querySelectorAll('.quality-card');
    qualityCards.forEach(card => {
        card.classList.remove('highlight');
    });
    element.classList.add('highlight');
}

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Wishes carousel functionality
let currentWishIndex = 1;
const totalWishes = 5;

function showWish(index) {
    // Validate index
    if (index < 1) index = totalWishes;
    if (index > totalWishes) index = 1;
    
    currentWishIndex = index;
    
    // Update wish cards
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach(card => {
        const cardIndex = parseInt(card.getAttribute('data-wish'));
        
        if (cardIndex === currentWishIndex) {
            card.style.transform = 'translateX(0)';
            card.style.opacity = '1';
        } else if (cardIndex < currentWishIndex) {
            card.style.transform = 'translateX(-100%)';
            card.style.opacity = '0';
        } else {
            card.style.transform = 'translateX(100%)';
            card.style.opacity = '0';
        }
    });
    
    // Update indicators
    const indicators = document.querySelectorAll('.wish-indicator');
    indicators.forEach(indicator => {
        const indicatorIndex = parseInt(indicator.getAttribute('data-index'));
        if (indicatorIndex === currentWishIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    
    // Add sparkle effect to current wish
    createWishSparkle();
}

function nextWish() {
    showWish(currentWishIndex + 1);
}

function previousWish() {
    showWish(currentWishIndex - 1);
}

function createWishSparkle() {
    const currentWishCard = document.querySelector(`.wish-card[data-wish="${currentWishIndex}"]`);
    if (!currentWishCard) return;
    
    // Create multiple sparkles
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'absolute';
            sparkle.style.width = '6px';
            sparkle.style.height = '6px';
            sparkle.style.background = '#D4AF37';
            sparkle.style.borderRadius = '50%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.boxShadow = '0 0 10px #D4AF37';
            sparkle.style.animation = 'sparkle 1.5s ease-out forwards';
            sparkle.style.zIndex = '2';
            
            currentWishCard.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1500);
        }, i * 150);
    }
}

// Set up wish indicators as clickable
function setupWishIndicators() {
    const wishIndicators = document.querySelectorAll('.wish-indicator');
    if (wishIndicators.length === 0) return;
    
    wishIndicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.getAttribute('data-index'));
            showWish(index);
        });
    });
    
    // Initialize first wish
    showWish(1);
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    // Fade in the page content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = '0';
        setTimeout(() => {
            mainContent.style.transition = 'opacity 0.8s ease';
            mainContent.style.opacity = '1';
        }, 100);
    }
    
    // Set up mobile navigation
    setupMobileNav();
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.quality, .wish-card, .memory-card, .interactive-card, .letter');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Parallax effect for background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.1;
        const bgPattern = document.querySelector('.bg-pattern');
        if (bgPattern) {
            bgPattern.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Setup wishes carousel
    setupWishIndicators();
});

// Handle link clicks with transitions
document.addEventListener('click', (e) => {
    // Check if the clicked element is a link to another page in our site
    const link = e.target.closest('a');
    if (link && link.href && link.href.startsWith(window.location.origin) && 
        !link.hasAttribute('data-no-transition') && 
        !e.ctrlKey && !e.metaKey) {
        
        e.preventDefault();
        const mainContent = document.querySelector('main');
        
        // Fade out
        if (mainContent) {
            mainContent.style.transition = 'opacity 0.4s ease';
            mainContent.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = link.href;
            }, 400);
        } else {
            window.location.href = link.href;
        }
    }
});

// Improve touch interactions for mobile devices
function addTouchSupport() {
    // Add touch event listeners to all interactive elements
    document.querySelectorAll('.quality, .rakhi, .begin-button, .minimal-button')
        .forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            }, { passive: true });
            
            element.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            }, { passive: true });
        });
    
    // Fix iOS hover stuck issues
    document.addEventListener('touchstart', function() {}, { passive: true });
}

// Dynamically adjust for smaller screens
function optimizeForMobile() {
    const isMobile = window.innerWidth < 768;
    
    // Reduce number of floating hearts on mobile
    if (isMobile) {
        // Clear existing intervals
        if (window.heartInterval) {
            clearInterval(window.heartInterval);
        }
        
        // Set new interval with reduced frequency
        window.heartInterval = setInterval(createFloatingHeart, 5000);
    }
    
    // Adjust animation speed for mobile
    document.documentElement.style.setProperty('--animation-speed', 
        isMobile ? '1.3' : '1');
}

// Handle orientation changes
function handleOrientationChange() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Re-optimize for the new orientation
    optimizeForMobile();
}

// Initialize mobile-specific features
document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...
    
    // Add mobile optimizations
    addTouchSupport();
    optimizeForMobile();
    handleOrientationChange();
    
    // Set --vh custom property for mobile browsers
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Listen for orientation changes
    window.addEventListener('resize', handleOrientationChange);
    
    // Prevent double-tap to zoom on mobile devices
    document.addEventListener('dblclick', function(e) {
        e.preventDefault();
    }, { passive: false });
});

// Enhanced mobile touch support
document.addEventListener('DOMContentLoaded', function() {
    // Add existing event listeners...
    
    // Add touch classes to make touch feedback more responsive
    const touchElements = document.querySelectorAll('.begin-button, .minimal-button, .special-button, .quality, .rakhi');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        }, {passive: true});
        
        element.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        }, {passive: true});
        
        element.addEventListener('touchcancel', function() {
            this.classList.remove('touch-active');
        }, {passive: true});
    });
    
    // Fix iOS 100vh issue
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    
    // Optimize floating hearts for mobile
    if (window.innerWidth < 768) {
        const heartIntervals = setInterval(createFloatingHeart, 3000);
        // Reduce initial hearts on mobile
        const initialHearts = document.querySelectorAll('.heart');
        if (initialHearts.length > 5) {
            for (let i = 5; i < initialHearts.length; i++) {
                initialHearts[i].remove();
            }
        }
    }
    
    // Prevent double tap zoom on mobile
    document.addEventListener('touchend', function(e) {
        // Prevent zoom on double tap for interactive elements
        if (e.target.classList.contains('quality') || 
            e.target.classList.contains('begin-button') || 
            e.target.classList.contains('minimal-button') || 
            e.target.classList.contains('special-button') || 
            e.target.classList.contains('rakhi')) {
            e.preventDefault();
        }
    }, {passive: false});
});

// Function to highlight quality with better mobile support
function highlightQuality(element) {
    const qualities = document.querySelectorAll('.quality');
    qualities.forEach(quality => {
        quality.classList.remove('highlight');
    });
    element.classList.add('highlight');
    
    // Add slight delay to improve touch response feel
    setTimeout(() => {
        element.classList.add('touch-active');
        setTimeout(() => {
            element.classList.remove('touch-active');
        }, 150);
    }, 50);
}
