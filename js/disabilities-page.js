// DOM Elements for disabilities page
const disabilitiesGrid = document.getElementById('disabilitiesGrid');
const disabilitiesSearchInput = document.getElementById('disabilitiesSearchInput');
const disabilitiesSearchButton = document.getElementById('disabilitiesSearchButton');
const searchResultsInfo = document.getElementById('searchResultsInfo');
const resultsCount = document.getElementById('resultsCount');
const clearSearch = document.getElementById('clearSearch');

// Initialize the disabilities page
document.addEventListener('DOMContentLoaded', function() {
    renderDisabilityCards(disabilities);
    setupDisabilitiesEventListeners();
    handleSearchParam();
    updateActiveNavLink();
});

// Render disability cards for disabilities page
function renderDisabilityCards(disabilitiesArray) {
    if (!disabilitiesGrid) return;
    
    disabilitiesGrid.innerHTML = '';
    
    if (disabilitiesArray.length === 0) {
        disabilitiesGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
                <h3 style="color: var(--dark-color); margin-bottom: 1rem;">No disabilities found</h3>
                <p style="color: var(--text-color); margin-bottom: 2rem; font-weight: 500;">Try searching with different keywords or browse all disabilities.</p>
                <button onclick="clearSearchResults()" class="btn btn-primary">Show All Disabilities</button>
            </div>
        `;
        return;
    }
    
    disabilitiesArray.forEach(disability => {
        const card = document.createElement('a');
        card.className = 'disability-card';
        card.href = `disability-detail.html?id=${disability.id}`;
        card.setAttribute('aria-label', `Learn more about ${disability.title}`);
        card.innerHTML = `
            <div class="card-icon" style="background: linear-gradient(135deg, ${disability.color}, ${adjustColor(disability.color, 30)})">
                ${disability.icon}
            </div>
            <div class="card-content">
                <h3>${disability.title}</h3>
                <p>${disability.description}</p>
                <div class="card-features">
                    <span class="feature-tip">${disability.interactionTips.length} interaction tips</span>
                    <span class="feature-tip">${disability.calmingTechniques ? disability.calmingTechniques.length : 5} calming techniques</span>
                </div>
                <div class="card-arrow" style="margin-top: 1rem; color: var(--accent-color); font-weight: bold;">→ Learn More</div>
            </div>
        `;
        
        disabilitiesGrid.appendChild(card);
    });
}

// Setup event listeners for disabilities page
function setupDisabilitiesEventListeners() {
    // Search functionality
    if (disabilitiesSearchButton && disabilitiesSearchInput) {
        disabilitiesSearchButton.addEventListener('click', performDisabilitiesSearch);
        disabilitiesSearchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                performDisabilitiesSearch();
            }
        });
        
        // Real-time search with debounce
        let searchTimeout;
        disabilitiesSearchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(performDisabilitiesSearch, 300);
        });
    }

    // Clear search button
    if (clearSearch) {
        clearSearch.addEventListener('click', clearSearchResults);
    }
}

// Search functionality for disabilities page
function performDisabilitiesSearch() {
    if (!disabilitiesSearchInput || !disabilitiesGrid) return;
    
    const searchTerm = disabilitiesSearchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        clearSearchResults();
        return;
    }
    
    const filteredDisabilities = disabilities.filter(disability => 
        disability.title.toLowerCase().includes(searchTerm) || 
        disability.description.toLowerCase().includes(searchTerm) ||
        disability.overview.toLowerCase().includes(searchTerm) ||
        disability.interactionTips.some(tip => tip.toLowerCase().includes(searchTerm)) ||
        (disability.detailedOverview && disability.detailedOverview.toLowerCase().includes(searchTerm))
    );
    
    renderDisabilityCards(filteredDisabilities);
    showSearchResultsInfo(filteredDisabilities.length, searchTerm);
    
    // Scroll to results
    setTimeout(() => {
        document.getElementById('disabilities-grid').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

// Show search results information
function showSearchResultsInfo(count, term) {
    if (!searchResultsInfo || !resultsCount) return;
    
    searchResultsInfo.style.display = 'flex';
    resultsCount.textContent = `Found ${count} disability${count !== 1 ? 'ies' : ''} matching "${term}"`;
    
    // Update URL without reloading page
    const newUrl = window.location.origin + window.location.pathname + 
                  (term ? `?search=${encodeURIComponent(term)}` : '');
    window.history.replaceState({}, '', newUrl);
}

// Clear search results
function clearSearchResults() {
    if (disabilitiesSearchInput) disabilitiesSearchInput.value = '';
    if (searchResultsInfo) searchResultsInfo.style.display = 'none';
    renderDisabilityCards(disabilities);
    window.history.replaceState({}, '', window.location.origin + window.location.pathname);
}

// Handle search parameter from URL
function handleSearchParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    
    if (searchTerm && disabilitiesSearchInput) {
        disabilitiesSearchInput.value = searchTerm;
        performDisabilitiesSearch();
    }
}

// Update active navigation link
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        
        if ((currentPage === 'index.html' && linkPage === 'index.html') ||
            (currentPage === 'disabilities.html' && linkPage === 'disabilities.html') ||
            (currentPage === 'about.html' && linkPage === 'about.html') ||
            (currentPage === 'contact.html' && linkPage === 'contact.html')) {
            link.classList.add('active');
        }
    });
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => 
        ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)
    );
}

// Smooth scrolling for anchor links
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
            
            // Update URL
            window.history.pushState(null, null, href);
        }
    });
});