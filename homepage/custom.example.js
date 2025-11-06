// Clean Homelab Dashboard JavaScript
// Minimal enhancements for a professional look

// Professional color palette
const homelabTheme = {
    primary: '#3b82f6',
    secondary: '#2563eb',
    accent: '#06b6d4',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444'
};

// Add subtle enhancements to service cards
function enhanceServiceCards() {
    const cards = document.querySelectorAll('.service-card, .bookmark-card');
    
    cards.forEach(card => {
        // Add smooth transitions
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Enhance hover state
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = `0 4px 12px rgba(0, 0, 0, 0.2), 0 0 0 1px ${homelabTheme.primary}`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });
}

// Add status indicators with clean styling
function addStatusIndicators() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        if (!card.querySelector('.status-dot')) {
            const statusDot = document.createElement('div');
            statusDot.className = 'status-dot';
            statusDot.style.cssText = `
                position: absolute;
                top: 12px;
                right: 12px;
                width: 8px;
                height: 8px;
                background: ${homelabTheme.success};
                border-radius: 50%;
                box-shadow: 0 0 8px ${homelabTheme.success};
                z-index: 10;
            `;
            
            // Make parent relative if not already
            if (getComputedStyle(card).position === 'static') {
                card.style.position = 'relative';
            }
            
            card.appendChild(statusDot);
        }
    });
}

// Enhance widgets with smooth interactions
function enhanceWidgets() {
    const widgets = document.querySelectorAll('.widget');
    
    widgets.forEach(widget => {
        widget.style.transition = 'all 0.3s ease';
        
        widget.addEventListener('mouseenter', () => {
            widget.style.transform = 'translateY(-2px)';
            widget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
        });
        
        widget.addEventListener('mouseleave', () => {
            widget.style.transform = '';
            widget.style.boxShadow = '';
        });
    });
}

// Add smooth scroll behavior
function enableSmoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Initialize all enhancements
function initializeHomelab() {
    enhanceServiceCards();
    addStatusIndicators();
    enhanceWidgets();
    enableSmoothScroll();
}

// Run initialization when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHomelab);
} else {
    initializeHomelab();
}

// Re-apply enhancements for dynamically loaded content
const observer = new MutationObserver(() => {
    enhanceServiceCards();
    addStatusIndicators();
    enhanceWidgets();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log('Homelab Dashboard initialized successfully');
