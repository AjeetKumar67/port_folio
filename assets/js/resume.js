/**
 * Resume Page JavaScript
 * Handles all interactive functionality for the resume page
 */

/**
 * Sets the current date in the cover letter
 * Formats date as: Month Day, Year (e.g., May 30, 2025)
 */
function setCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    const dateElement = document.getElementById('current-date');
    
    if (dateElement) {
        dateElement.textContent = currentDate;
    }
}

/**
 * Initializes all resume page functionality
 */
function initResumePage() {
    // Set current date when DOM is loaded
    setCurrentDate();
    
    // Add any future resume page specific functionality here
}

// Initialize resume functionality when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initResumePage);
