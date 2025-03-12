const projectDetail = {
    loadProjectDetails(id) {
        // Deze functie zou normaal data van een server halen
        const project = {
            title: "AI-Powered E-commerce Solution",
            category: "E-commerce",
            date: "2023",
            image: "https://picsum.photos/800/600",
            overview: "Comprehensive AI solution for e-commerce optimization",
            challenge: "Increasing online sales and customer engagement",
            solution: "Implementation of AI-driven product recommendations and customer behavior analysis",
            results: "250% ROI increase, 75% better engagement",
            metrics: {
                roi: "250%",
                engagement: "75%",
                conversion: "180%"
            }
        };

        this.displayProject(project);
    },

    displayProject(project) {
        const container = document.getElementById('projectDetail');
        // Vul project details in
    }
};

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    projectDetail.loadProjectDetails(projectId);
};
