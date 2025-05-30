/**
 * Header Component JavaScript
 * Handles all interactive functionality for the site header
 * Including mobile navigation, active page highlighting, and theme toggling
 */

document.addEventListener('DOMContentLoaded', function() {
    /**
     * Mobile Navigation Toggle
     * Toggles the mobile navigation menu and updates the icon accordingly
     */
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const headerNav = document.querySelector('.header-nav');
    
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            const isExpanded = headerNav.classList.contains('active');
            headerNav.classList.toggle('active');
            
            // Update the button's icon and accessibility attributes
            this.setAttribute('aria-expanded', !isExpanded);
            const icon = this.querySelector('i');
            icon.className = isExpanded ? 'fas fa-bars' : 'fas fa-times';
            icon.setAttribute('aria-hidden', 'true');
        });
    }
    
    /**
     * Active Page Detection
     * Highlights the current page in the navigation menu
     * Maps filename to navigation section
     */
    const currentPage = window.location.pathname.split('/').pop().split('.')[0] || 'index';
    const pageMappings = {
        'index': 'home',
        'about': 'about',
        'resume': 'resume',
        'services': 'services',
        'portfolio': 'portfolio',
        'contact': 'contact'
    };
    
    const currentSection = pageMappings[currentPage] || 'home';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentSection) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
    
    /**
     * Theme Toggle Functionality
     * Switches between light and dark themes
     * Persists user preference in localStorage
     */
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    
    if (themeToggle) {
        // Initialize theme from saved preference or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        
        // Update button icon and accessibility labels
        const icon = themeToggle.querySelector('i');
        icon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        icon.setAttribute('aria-hidden', 'true');
        
        themeToggle.setAttribute('aria-label', savedTheme === 'light' ? 
            'Switch to dark theme' : 'Switch to light theme');
        
        // Theme toggle event
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Update theme
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update button icon and accessibility labels
            icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            themeToggle.setAttribute('aria-label', newTheme === 'light' ? 
                'Switch to dark theme' : 'Switch to light theme');
        });
    }
});
