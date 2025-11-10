// DOM Elements - REMOVE search elements
const disabilitiesGrid = document.getElementById('disabilitiesGrid');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
// REMOVE THESE LINES:
// const searchInput = document.getElementById('searchInput');
// const searchButton = document.getElementById('searchButton');
// const searchResultsInfo = document.getElementById('searchResultsInfo');
// const resultsCount = document.getElementById('resultsCount');
// const clearSearch = document.getElementById('clearSearch');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // REMOVE THIS LINE if disabilitiesGrid doesn't exist on homepage anymore:
    // renderDisabilityCards(disabilities);
    setupEventListeners();
    // REMOVE: handleSearchParam();
    updateActiveNavLink();
});

// REMOVE OR COMMENT OUT THE ENTIRE renderDisabilityCards FUNCTION if not needed on homepage
/*
function renderDisabilityCards(disabilitiesArray) {
    // ... existing code ...
}
*/

// Setup event listeners - REMOVE search functionality
function setupEventListeners() {
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', 
                hamburger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });
    }

    // REMOVE ALL SEARCH-RELATED EVENT LISTENERS:
    /*
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
        
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(performSearch, 300);
        });
    }

    if (clearSearch) {
        clearSearch.addEventListener('click', clearSearchResults);
    }
    */

    // Close mobile menu when clicking on a link
    if (navMenu) {
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && hamburger && 
            !navMenu.contains(event.target) && 
            !hamburger.contains(event.target) &&
            navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

// REMOVE ALL SEARCH FUNCTIONS:
/*
function performSearch() { ... }
function showSearchResultsInfo(count, term) { ... }
function clearSearchResults() { ... }
function handleSearchParam() { ... }
*/

// Keep the rest of the functions that are still needed...
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        
        if ((currentPage === 'index.html' && linkPage === 'index.html') ||
            (currentPage === 'disabilities.html' && linkPage === 'disabilities.html') ||
            (currentPage === 'about.html' && linkPage === 'about.html') ||
            (currentPage === 'contact.html' && linkPage === 'contact.html') ||
            (currentPage === 'disability-detail.html' && linkPage === 'disabilities.html')) {
            link.classList.add('active');
        }
    });
}

// Keep helper functions...
function adjustColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => 
        ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)
    );
}

// Keep smooth scrolling...
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (hamburger) {
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            }
            
            // Update URL
            window.history.pushState(null, null, href);
        }
    });
});

// Keep browser back/forward handling...
window.addEventListener('popstate', function() {
    // REMOVE: handleSearchParam();
    updateActiveNavLink();
});