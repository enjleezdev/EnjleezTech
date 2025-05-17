document.addEventListener('DOMContentLoaded', function() {
    // Initialize UI elements
    initializeUI();
    
    // Initialize language settings
    initializeLanguage();
    
    // Initialize navigation and menu
    initializeNavigation();
    
    // Initialize form validation
    initializeForm();
});

// UI Initialization
function initializeUI() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    
    // Ensure navigation elements are visible
    if (header) header.style.display = 'block';
    if (nav) nav.style.display = 'block';
    if (navUl) navUl.style.display = 'flex';
}

// Language Management
function initializeLanguage() {
    const languageToggle = document.getElementById('language-toggle');
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        setLanguage(savedLanguage);
    }
    
    // Language toggle event handler
    languageToggle.addEventListener('click', function() {
        const currentLang = document.documentElement.getAttribute('lang');
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    });
}

function setLanguage(lang) {
    const htmlElement = document.documentElement;
    const languageToggle = document.getElementById('language-toggle');
    
    // Update HTML attributes
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    languageToggle.textContent = lang === 'ar' ? 'English' : 'العربية';
    
    // Toggle visibility of language-specific elements
    const enElements = document.querySelectorAll('.en-text');
    const arElements = document.querySelectorAll('.ar-text');
    
    enElements.forEach(el => {
        el.style.display = lang === 'en' ? '' : 'none';
    });
    
    arElements.forEach(el => {
        el.style.display = lang === 'ar' ? '' : 'none';
    });
    
    // Save language preference
    localStorage.setItem('language', lang);
}
// Navigation and Menu Management
function initializeNavigation() {
    initializeDrawers();
    initializePopupMenu();
}

function initializeDrawers() {
    const footerToggles = document.querySelectorAll('.footer-toggle');
    const closeButtons = document.querySelectorAll('.close-drawer');
    
    // Footer toggles event handlers
    footerToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const drawer = document.getElementById(targetId);
            
            // Close other open drawers
            document.querySelectorAll('.drawer.active').forEach(activeDrawer => {
                if (activeDrawer.id !== targetId) {
                    activeDrawer.classList.remove('active');
                }
            });
            
            // Open target drawer
            drawer.classList.add('active');
        });
    });
    
    // Close button event handlers
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const drawer = this.closest('.drawer');
            drawer.classList.remove('active');
        });
    });
    
    // Close drawer when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.drawer')) {
            document.querySelectorAll('.drawer.active').forEach(drawer => {
                drawer.classList.remove('active');
            });
        }
    });
}
    
function initializePopupMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const popupMenu = document.getElementById('popup-menu');
    
    // Menu toggle event handlers
    menuToggle?.addEventListener('click', () => popupMenu.classList.add('active'));
    closeMenu?.addEventListener('click', () => popupMenu.classList.remove('active'));
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.popup-menu') && !event.target.closest('.menu-toggle')) {
            popupMenu?.classList.remove('active');
        }
    });
    
    // Close menu when clicking a link
    const popupMenuLinks = document.querySelectorAll('.popup-menu-link');
    popupMenuLinks.forEach(link => {
        link.addEventListener('click', () => popupMenu.classList.remove('active'));
    });
}

// Form Validation
function initializeForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', {
            name: name.value,
            email: email.value,
            subject: document.getElementById('subject')?.value,
            message: message.value
        });
        
        // Clear form
        form.reset();
        alert('Thank you for your message. We will get back to you soon.');
    });
}
