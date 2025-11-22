// DOM Elements for accessibility
const increaseFontBtn = document.getElementById('increaseFont');
const decreaseFontBtn = document.getElementById('decreaseFont');
const resetAccessibilityBtn = document.getElementById('resetAccessibility');
const footerIncreaseFont = document.getElementById('footerIncreaseFont');

// Toolbar state
let isToolbarExpanded = false;

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', function() {
    loadAccessibilitySettings();
    setupAccessibilityControls();
    setupKeyboardNavigation();
    //setupSkipLinks();
    createToolbarToggle();
});

// Load saved accessibility settings
function loadAccessibilitySettings() {
    // Load stored root font size (px). If not set, don't change the browser default.
    const rootFontSize = localStorage.getItem('rootFontSize');
    if (rootFontSize) {
        document.documentElement.style.fontSize = rootFontSize;
    }

    updateAccessibilityButtons();
}

// Create toolbar toggle button
function createToolbarToggle() {
    const existingToggle = document.getElementById('accessibilityToggle');
    if (existingToggle) return;

    const toggle = document.createElement('button');
    toggle.id = 'accessibilityToggle';
    toggle.className = 'accessibility-toggle';
    toggle.innerHTML = '♿';
    toggle.setAttribute('aria-label', 'Open accessibility toolbar');
    toggle.setAttribute('title', 'Accessibility Settings');
    
    const controls = document.querySelector('.accessibility-controls');
    if (controls) {
        document.body.insertBefore(toggle, controls);
        
        toggle.addEventListener('click', function() {
            toggleToolbar();
        });
        
        // Close toolbar when clicking outside
        document.addEventListener('click', function(event) {
            if (!controls.contains(event.target) && !toggle.contains(event.target) && isToolbarExpanded) {
                closeToolbar();
            }
        });
        
        // Close toolbar on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isToolbarExpanded) {
                closeToolbar();
                toggle.focus();
            }
        });
    }
}

// Toggle toolbar open/close
function toggleToolbar() {
    const controls = document.querySelector('.accessibility-controls');
    const toggle = document.getElementById('accessibilityToggle');
    
    if (!isToolbarExpanded) {
        openToolbar();
    } else {
        closeToolbar();
    }
}

// In the openToolbar function, add:
function openToolbar() {
    const controls = document.querySelector('.accessibility-controls');
    const toggle = document.getElementById('accessibilityToggle');
    
    if (controls && toggle) {
        controls.classList.add('expanded');
        toggle.classList.add('active');
        toggle.setAttribute('aria-label', 'Close accessibility toolbar');
        isToolbarExpanded = true;
        
        // Ensure toggle stays on top
        toggle.style.zIndex = '1002';
        
        // Focus first button when opening
        const firstButton = controls.querySelector('button');
        if (firstButton) {
            setTimeout(() => firstButton.focus(), 100);
        }
    }
}

// In the closeToolbar function, add:
function closeToolbar() {
    const controls = document.querySelector('.accessibility-controls');
    const toggle = document.getElementById('accessibilityToggle');
    
    if (controls && toggle) {
        controls.classList.remove('expanded');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-label', 'Open accessibility toolbar');
        toggle.style.zIndex = '1001'; // Reset z-index
        isToolbarExpanded = false;
    }
}

// Setup accessibility controls
function setupAccessibilityControls() {
    // Increase font size
    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', function() {
            increaseFontSize();
            closeToolbar();
        });
    }
    if (footerIncreaseFont) {
        footerIncreaseFont.addEventListener('click', increaseFontSize);
    }

    // Decrease font size
    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener('click', function() {
            decreaseFontSize();
            closeToolbar();
        });
    }

    // (High contrast removed)

    // Reset all accessibility settings
    if (resetAccessibilityBtn) {
        resetAccessibilityBtn.addEventListener('click', function() {
            resetAccessibility();
            closeToolbar();
        });
    }
}

// Font size functions
function increaseFontSize() {
    // Increase root font-size so rem-based sizes scale across the site
    const current = window.getComputedStyle(document.documentElement).fontSize;
    const currentPx = parseFloat(current);
    const next = Math.min(currentPx + 2, 24); // cap at 24px
    document.documentElement.style.fontSize = next + 'px';
    localStorage.setItem('rootFontSize', next + 'px');
    updateAccessibilityButtons();
}

function decreaseFontSize() {
    const current = window.getComputedStyle(document.documentElement).fontSize;
    const currentPx = parseFloat(current);
    const next = Math.max(currentPx - 2, 12); // don't go below 12px
    document.documentElement.style.fontSize = next + 'px';
    localStorage.setItem('rootFontSize', next + 'px');
    updateAccessibilityButtons();
}

// High contrast removed: controls and styles no longer toggle from JS

// Reset accessibility
function resetAccessibility() {
    // Reset root font-size and remove custom setting
    document.documentElement.style.fontSize = '';
    localStorage.removeItem('rootFontSize');
    updateAccessibilityButtons();
    showAccessibilityFeedback('Accessibility settings reset');
}

// Update button states
function updateAccessibilityButtons() {
    // Determine whether a custom root font size is set
    const rootFontSize = document.documentElement.style.fontSize || localStorage.getItem('rootFontSize');
    const isCustomSize = !!rootFontSize;

    // Update main accessibility buttons
    if (increaseFontBtn) {
        increaseFontBtn.classList.toggle('active', isCustomSize);
        increaseFontBtn.setAttribute('aria-pressed', isCustomSize);
    }
    if (decreaseFontBtn) {
        decreaseFontBtn.classList.toggle('active', isCustomSize);
        decreaseFontBtn.setAttribute('aria-pressed', isCustomSize);
    }
    if (resetAccessibilityBtn) {
        resetAccessibilityBtn.classList.toggle('active', isCustomSize);
    }
    
    // Update footer buttons
    if (footerIncreaseFont) {
        footerIncreaseFont.classList.toggle('active', isCustomSize);
    }
}

// Show accessibility feedback
function showAccessibilityFeedback(message) {
    // Remove existing feedback if any
    const existingFeedback = document.getElementById('accessibilityFeedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    const feedback = document.createElement('div');
    feedback.id = 'accessibilityFeedback';
    feedback.className = 'accessibility-feedback';
    feedback.textContent = message;
    feedback.setAttribute('aria-live', 'polite');
    feedback.setAttribute('role', 'status');
    
    document.body.appendChild(feedback);
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        feedback.classList.add('fade-out');
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.remove();
            }
        }, 300);
    }, 3000);
}

// Keyboard navigation support
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Tab key for navigation
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        
        // Escape key to close mobile menu and accessibility toolbar
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('navMenu');
            const hamburger = document.getElementById('hamburger');
            
            // Close mobile menu
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (hamburger) {
                    hamburger.setAttribute('aria-expanded', 'false');
                    hamburger.focus();
                }
            }
            
            // Close accessibility toolbar
            if (isToolbarExpanded) {
                closeToolbar();
                const toggle = document.getElementById('accessibilityToggle');
                if (toggle) toggle.focus();
            }
        }
        
        // Enter key to activate buttons when focused
        if (e.key === 'Enter') {
            if (e.target.classList.contains('disability-card') || 
                e.target.closest('.disability-card')) {
                e.target.click();
            }
        }
    });

    // Remove keyboard navigation class when mouse is used
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Setup skip links
function setupSkipLinks() {
    // Create skip link if it doesn't exist
    if (!document.getElementById('skipToMain')) {
        const skipLink = document.createElement('a');
        skipLink.id = 'skipToMain';
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    // Add main content ID to main element if it exists
    const mainElement = document.querySelector('main');
    if (mainElement && !mainElement.id) {
        mainElement.id = 'main-content';
    }
}

// Enhanced focus styles for keyboard navigation
const focusStyles = `
.keyboard-navigation button:focus,
.keyboard-navigation a:focus,
.keyboard-navigation input:focus,
.keyboard-navigation select:focus,
.keyboard-navigation textarea:focus {
    outline: 3px solid var(--accent-color) !important;
    outline-offset: 2px !important;
}

.keyboard-navigation .disability-card:focus {
    transform: translateY(-8px) !important;
    box-shadow: 0 0 0 3px var(--accent-color), var(--box-shadow-hover) !important;
}

.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--accent-color);
    color: white;
    padding: 12px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 10001;
    font-weight: bold;
    transition: top 0.3s ease;
}

.skip-link:focus {
    top: 6px;
}
`;

// Inject enhanced focus styles
const focusStyleSheet = document.createElement('style');
focusStyleSheet.textContent = focusStyles;
document.head.appendChild(focusStyleSheet);

// Auto-hide accessibility controls when scrolling (only when expanded)
let scrollTimer;
window.addEventListener('scroll', function() {
    const controls = document.querySelector('.accessibility-controls');
    if (controls && isToolbarExpanded) {
        controls.style.transform = 'scale(0.95) translateY(20px)';
        
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            controls.style.transform = 'scale(1) translateY(0)';
        }, 500);
    }
});

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const reducedMotionStyles = `
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    `;
    const reducedMotionSheet = document.createElement('style');
    reducedMotionSheet.textContent = reducedMotionStyles;
    document.head.appendChild(reducedMotionSheet);
}

// Screen reader announcements
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

// SR-only class for screen readers
const srOnlyStyles = `
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
`;

const srOnlySheet = document.createElement('style');
srOnlySheet.textContent = srOnlyStyles;
document.head.appendChild(srOnlySheet);

