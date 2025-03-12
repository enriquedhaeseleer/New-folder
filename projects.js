const projects = [
    {
        id: 1,
        title: 'Q4 Social Media Campaign',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400',
        category: 'active',
        status: 'Active',
        date: 'Oct 15, 2023',
        metrics: {
            'ROI': '+180%',
            'Engagement': '12.5K',
            'Duration': '3 months',
            'Budget': '$15K'
        },
        description: 'Holiday season marketing campaign across Instagram and Facebook'
    },
    {
        id: 2,
        title: 'Email Marketing Automation',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
        category: 'completed',
        status: 'Completed',
        metrics: {
            roi: '250%',
            duration: '6 months',
            conversion: '75%'
        },
        description: 'Automated email sequences for customer nurturing'
    },
    {
        id: 3,
        title: 'SEO Content Strategy',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400',
        category: 'draft',
        status: 'Draft',
        metrics: {
            estimated_roi: '200%',
            planned_duration: '4 months'
        },
        description: 'Content optimization and keyword targeting plan'
    }
];

function filterProjects(category) {
    const filtered = category === 'all' 
        ? projects 
        : projects.filter(p => p.category === category);
    displayProjects(filtered);
}

function displayProjects(projects) {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-card-header">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <span class="status-badge ${project.category}">${project.status}</span>
                </div>
            </div>
            <div class="project-content">
                <div class="project-meta">
                    <span class="project-date">${project.date}</span>
                    <span class="project-category">${project.category}</span>
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="metrics-grid">
                    ${Object.entries(project.metrics).map(([key, value]) => `
                        <div class="metric">
                            <span class="metric-label">${key}</span>
                            <span class="metric-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="project-actions">
                    <div class="primary-actions">
                        <a href="project-detail.html?id=${project.id}" class="btn btn-primary">View Details</a>
                        <button class="btn btn-secondary">Edit</button>
                    </div>
                    <div class="secondary-actions">
                        <button class="btn-icon" title="Share Project">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                <polyline points="16 6 12 2 8 6"></polyline>
                                <line x1="12" y1="2" x2="12" y2="15"></line>
                            </svg>
                        </button>
                        <button class="btn-icon btn-danger" title="Delete Project">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize projects
document.addEventListener('DOMContentLoaded', () => {
    displayProjects(projects);
});
