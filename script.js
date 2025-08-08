// Clean landing page script - templates removed
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeMobileMenu();
});

function initializeEventListeners() {
    // Mobile menu functionality
    initializeMobileMenu();
    
    // Remove template-related functionality
    console.log('Landing page initialized - templates removed');
}

function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            console.log('Mobile menu toggled');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}