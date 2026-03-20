// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send this to a server
        console.log('Form Data:', data);
        
        // Show success message
        const successMessage = document.querySelector('.success-message');
        if (successMessage) {
            successMessage.style.display = 'block';
            successMessage.textContent = 'Thank you! We will contact you shortly to confirm your appointment.';
        }
        
        // Reset form
        this.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            if (successMessage) {
                successMessage.style.display = 'none';
            }
        }, 5000);
    });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send this to a server
        console.log('Contact Form Data:', data);
        
        // Show success message
        const successMessage = document.querySelector('.success-message');
        if (successMessage) {
            successMessage.style.display = 'block';
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        }
        
        // Reset form
        this.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            if (successMessage) {
                successMessage.style.display = 'none';
            }
        }, 5000);
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Responsive mobile menu
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth <= 768) {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
    }
}

window.addEventListener('resize', toggleMobileMenu);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    toggleMobileMenu();
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card, .stat-card, .testimonial-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
});

// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Photo Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentIndex = 0;

// Gallery data
const galleryData = [
    { title: 'Operating Theatre', desc: 'State-of-the-art surgical facility' },
    { title: 'Waiting Area', desc: 'Comfortable environment for pets' },
    { title: 'Laboratory', desc: 'Advanced diagnostic equipment' },
    { title: 'Consultation Room', desc: 'Private consultation spaces' },
    { title: 'Inpatient Ward', desc: 'Comfortable patient care facilities' },
    { title: 'Grooming Spa', desc: 'Professional pet spa services' },
    { title: 'Pet Store', desc: 'Pet products and supplies' },
    { title: 'Expert Team', desc: 'Dedicated veterinary professionals' }
];

function openLightbox(index) {
    currentIndex = index;
    const item = galleryItems[index];
    const img = item.querySelector('img');
    const info = galleryData[index];
    
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxTitle.textContent = info.title;
    lightboxDesc.textContent = info.desc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showPrevious() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentIndex];
    const img = item.querySelector('img');
    const info = galleryData[currentIndex];
    
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxTitle.textContent = info.title;
    lightboxDesc.textContent = info.desc;
}

function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    const item = galleryItems[currentIndex];
    const img = item.querySelector('img');
    const info = galleryData[currentIndex];
    
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxTitle.textContent = info.title;
    lightboxDesc.textContent = info.desc;
}

// Add click listeners to gallery items
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
});

// Add lightbox controls
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevious);
lightboxNext.addEventListener('click', showNext);

// Close lightbox when clicking outside the content
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevious();
    if (e.key === 'ArrowRight') showNext();
});
