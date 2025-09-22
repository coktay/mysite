// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initFAQ();
    initCopyReferralLink();
    initContactForm();
    initCookieBanner();
    initSmoothScrolling();
    initScrollAnimations();
    initSEOReadMore();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// FAQ Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// SEO Read More Functionality
function initSEOReadMore() {
    // This function is called from HTML onclick events
    // No need for event listeners here as we use onclick
}

// Global function for read more toggle
function toggleReadMore(button) {
    const seoText = button.parentElement;
    const preview = seoText.querySelector('.seo-preview');
    const full = seoText.querySelector('.seo-full');
    
    if (full.style.display === 'none') {
        // Show full text
        preview.style.display = 'none';
        full.style.display = 'block';
        button.textContent = 'Daha az göster';
        button.classList.add('expanded');
    } else {
        // Show preview text
        preview.style.display = 'block';
        full.style.display = 'none';
        button.textContent = '... Devamı için tıkla';
        button.classList.remove('expanded');
    }
}

// Copy Referral Link Functionality
function initCopyReferralLink() {
    // FAQ Section Copy Button
    const copyButton = document.getElementById('copyButton');
    const referralInput = document.getElementById('referralLink');
    const copySuccess = document.getElementById('copySuccess');

    if (copyButton && referralInput && copySuccess) {
        copyButton.addEventListener('click', async function() {
            await copyToClipboard(referralInput, copySuccess, copyButton);
        });
    }
}

// Global copy function for hero card
function copyReferralLink() {
    const url = 'https://share.octopus.energy/rainy-toffee-775';
    const copyMessage = document.getElementById('copyMessage');
    
    // Try modern clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(function() {
            showCopySuccess(copyMessage);
        }).catch(function(err) {
            console.error('Could not copy text: ', err);
            fallbackCopyTextToClipboard(url, copyMessage);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(url, copyMessage);
    }
}

// Fallback copy function
function fallbackCopyTextToClipboard(text, copyMessage) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess(copyMessage);
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
}

// Show success message
function showCopySuccess(copyMessage) {
    copyMessage.classList.add('show');
    setTimeout(() => {
        copyMessage.classList.remove('show');
    }, 2000);
}

// Shared copy function for FAQ section
async function copyToClipboard(input, successElement, buttonElement) {
    try {
        // Select the text in the input
        input.select();
        input.setSelectionRange(0, 99999); // For mobile devices
        
        // Copy to clipboard
        await navigator.clipboard.writeText(input.value);
        
        // Show success message
        successElement.classList.add('show');
        
        // Change button text temporarily
        const originalText = buttonElement.innerHTML;
        buttonElement.innerHTML = '<i class="fas fa-check"></i><span>Copied!</span>';
        buttonElement.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        // Reset after 2 seconds
        setTimeout(() => {
            successElement.classList.remove('show');
            buttonElement.innerHTML = originalText;
            buttonElement.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
        }, 2000);
        
    } catch (err) {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        input.select();
        document.execCommand('copy');
        
        // Show success message
        successElement.classList.add('show');
        setTimeout(() => {
            successElement.classList.remove('show');
        }, 2000);
    }
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                e.preventDefault();
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                e.preventDefault();
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            showLoadingState();
            
            // Submit form to Formspree
            fetch('https://formspree.io/f/mdkwnbzo', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Success - show modal
                    hideLoadingState();
                    showSuccessModal();
                    contactForm.reset();
                } else {
                    // Error
                    hideLoadingState();
                    showNotification('An error occurred while sending your message. Please try again.', 'error');
                }
            })
            .catch(error => {
                // Network error
                hideLoadingState();
                showNotification('An error occurred while sending your message. Please try again.', 'error');
            });
            
            // Prevent default form submission
            e.preventDefault();
        });
    }
}

// Cookie Banner Functionality
function initCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    
    // Check if cookies were already accepted/rejected
    const cookieStatus = localStorage.getItem('cookieStatus');
    
    if (!cookieStatus && cookieBanner) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.referans-card, .featured-deal, .hakkimda-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1500;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function showLoadingState() {
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    if (submitButton) {
        submitButton.innerHTML = '<span>Sending...</span>';
        submitButton.disabled = true;
        submitButton.classList.add('loading');
    }
}

function hideLoadingState() {
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    if (submitButton) {
        submitButton.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Cookie Functions
function acceptCookies() {
    localStorage.setItem('cookieStatus', 'accepted');
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner) {
        cookieBanner.classList.remove('show');
    }
    showNotification('Cookies accepted.', 'success');
}

function rejectCookies() {
    localStorage.setItem('cookieStatus', 'rejected');
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner) {
        cookieBanner.classList.remove('show');
    }
    showNotification('Cookies rejected.', 'info');
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('successModal');
    const closeBtn = document.querySelector('.close');
    
    if (event.target === modal) {
        closeModal();
    }
    
    if (event.target === closeBtn) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-success {
        background: #27ae60 !important;
    }
    
    .notification-error {
        background: #e74c3c !important;
    }
    
    .notification-info {
        background: #3498db !important;
    }
`;
document.head.appendChild(style);

// Lazy loading for images (if any are added later)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.referans-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add click tracking for referral links (placeholder)
function trackReferralClick(serviceName) {
    console.log(`Referral link clicked: ${serviceName}`);
    // Here you would typically send analytics data
    // Example: gtag('event', 'click', { 'event_category': 'referral', 'event_label': serviceName });
}

// Add click handlers to referral buttons
document.addEventListener('DOMContentLoaded', function() {
    const referralButtons = document.querySelectorAll('.referans-card .btn-primary');
    
    referralButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.referans-card');
            const serviceName = card.querySelector('h3').textContent;
            trackReferralClick(serviceName);
            
            // Show a message that this is a demo
            showNotification('Redirecting to Octopus Energy...', 'success');
        });
    });
});

// Add search functionality (if needed in the future)
function initSearch() {
    const searchInput = document.querySelector('#searchInput');
    const searchResults = document.querySelector('#searchResults');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const cards = document.querySelectorAll('.referans-card');
            
            cards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                if (cardText.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll-based animations or effects can be added here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading animation for the page
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);
