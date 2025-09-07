// List of your projects
const projects = [
  "used-car-price-prediction",
  "wellness-tourism-customer-prediction",
  "toyota-corolla-price-prediction",
  "airline-performance-dashboard",
  "auto-sales-dashboard",
  "heart-disease-prediction",
  "american-university-rankings-pca",
  "car-price-prediction",
  "flight-stats-dashboard",
  "happy-cow-ice-cream-sales-analysis"
];

// Get the container div
const projectsContainer = document.getElementById('projects');

// Create project cards dynamically
projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${project.replace(/-/g,' ')}</h3>
    <p>Click below to view the project on GitHub.</p>
    <a href="https://github.com/Mohitphulwani/${project}" class="btn" target="_blank">View Project</a>
  `;
  projectsContainer.appendChild(card);
});

// Fade-in animation for project cards on scroll
const cards = document.querySelectorAll('.project-card');
const reveal = () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) card.classList.add('visible');
  });
};
window.addEventListener('scroll', reveal);
reveal(); // initial call to show cards already in view
