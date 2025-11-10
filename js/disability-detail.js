// Disability Detail Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Disability detail page loaded');
    loadDisabilityDetail();
});

function loadDisabilityDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const disabilityId = urlParams.get('id');
    
    console.log('Disability ID from URL:', disabilityId);
    console.log('Available disabilities:', disabilities);

    if (!disabilityId) {
        showError('No disability ID provided in URL. Please select a disability from the main list.');
        return;
    }

    // Convert to number and find the disability
    const id = parseInt(disabilityId);
    const disability = disabilities.find(d => d.id === id);
    
    if (!disability) {
        showError(`Disability with ID ${disabilityId} not found. Please check the URL.`);
        return;
    }

    console.log('Found disability:', disability);
    renderDisabilityDetail(disability);
}

function renderDisabilityDetail(disability) {
    const contentContainer = document.getElementById('disabilityContent');
    
    if (!contentContainer) {
        console.error('Content container not found');
        return;
    }

    // Create the detailed HTML content
    contentContainer.innerHTML = `
        <div class="disability-content-loaded" data-disability-type="${disability.title.toLowerCase().replace(/\s+/g, '-')}">
            <!-- Header Section -->
            <div class="disability-header">
                <div class="disability-icon">${disability.icon}</div>
                <h1 class="disability-title">${disability.title}</h1>
                <p class="disability-description">${disability.description}</p>
            </div>

            <!-- Overview Section -->
            <div class="disability-overview">
                <h2>Overview</h2>
                <div class="overview-content">
                    <p>${disability.detailedOverview || disability.overview}</p>
                </div>
            </div>

            <!-- Main Content Sections -->
            <div class="info-sections">
                <!-- Interaction Tips -->
                <div class="info-section">
                    <h3>📋 How to Interact</h3>
                    <ul class="tips-list">
                        ${disability.interactionTips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>

                <!-- Games & Activities -->
                <div class="info-section">
                    <h3>🎮 Games & Activities</h3>
                    <ul class="tips-list">
                        ${disability.gamesActivities.map(activity => `<li>${activity}</li>`).join('')}
                    </ul>
                </div>

                <!-- Helpful Tips -->
                <div class="info-section">
                    <h3>💡 Helpful Tips</h3>
                    <ul class="tips-list">
                        ${disability.helpfulTips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>

                <!-- Calming Techniques -->
                <div class="info-section">
                    <h3>🧘 Calming Strategies</h3>
                    <ul class="tips-list">
                        ${disability.calmingTechniques.map(technique => `<li>${technique}</li>`).join('')}
                    </ul>
                </div>

                <!-- Needs -->
                <div class="info-section">
                    <h3>🎯 Key Needs</h3>
                    <ul class="needs-list">
                        ${disability.needs.map(need => `<li>${need}</li>`).join('')}
                    </ul>
                </div>

                <!-- Do's and Don'ts -->
                <div class="two-column">
                    <div class="info-section">
                        <h3>✅ Do's</h3>
                        <ul class="dos-donts-list">
                            ${disability.dos.map(item => `<li class="positive">${item}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="info-section">
                        <h3>❌ Don'ts</h3>
                        <ul class="dos-donts-list">
                            ${disability.donts.map(item => `<li class="negative">${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <!-- Communication Guide -->
                <div class="info-section">
                    <h3>💬 Communication Guide</h3>
                    <div class="communication-guide">
                        <p>${disability.communication}</p>
                    </div>
                </div>

                <!-- Emergency Info -->
                ${disability.emergencyInfo ? `
                <div class="info-section">
                    <h3>🚨 Emergency Information</h3>
                    <div class="emergency-info">
                        <p>${disability.emergencyInfo}</p>
                    </div>
                </div>
                ` : ''}

                <!-- Resources -->
                <div class="info-section">
                    <h3>📚 Resources & Support</h3>
                    <div class="resources-section">
                        <ul class="resources-list">
                            ${disability.resources.map(resource => `<li><a href="#" onclick="return false;">${resource}</a></li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Update page title
    document.title = `${disability.title} - Assistive Disabilities Awareness`;
}

function showError(message) {
    const contentContainer = document.getElementById('disabilityContent');
    contentContainer.innerHTML = `
        <div class="error-message">
            <h2>Error Loading Content</h2>
            <p>${message}</p>
            <a href="disabilities.html" class="btn btn-primary">Back to Disabilities</a>
        </div>
    `;
}

// Add error styling
const errorStyles = `
.error-message {
    text-align: center;
    padding: 4rem;
    background: white;
    border-radius: var(--border-radius);
    border: 2px solid var(--danger-color);
    margin: 2rem 0;
}

.error-message h2 {
    color: var(--danger-color);
    margin-bottom: 1rem;
}

.error-message p {
    color: var(--text-color);
    margin-bottom: 2rem;
    font-weight: 500;
}
`;

// Inject error styles
const styleSheet = document.createElement('style');
styleSheet.textContent = errorStyles;
document.head.appendChild(styleSheet);