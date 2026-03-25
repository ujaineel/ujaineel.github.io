import { personalData } from './data.js';

// --- Rendering Logic ---

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderExperience();
  renderProjects();
  renderSkills();
  renderFooter();
});

function renderHero() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  heroSection.innerHTML = `
    <div class="container hero-grid">
      <div class="hero-text">
        <p class="label-md">${personalData.subheadline}</p>
        <h1 class="display-lg">${personalData.headline}</h1>
        <p class="body-lg" style="margin: var(--spacing-8) 0; max-width: 600px;">
          ${personalData.about}
        </p>
        <a href="#work" class="btn-primary">Explore Experience</a>
      </div>
      <div class="hero-image-container">
        <img src="/assets/jaineel.png" alt="${personalData.name}">
      </div>
    </div>
  `;
}

function renderExperience() {
  const expContainer = document.getElementById('experience-list');
  if (!expContainer) return;

  expContainer.innerHTML = personalData.experience.map(work => `
    <article class="experience-card">
      <div class="exp-header">
        <p class="label-sm">${work.company}</p>
        <h3 style="margin: 0.5rem 0;">${work.role}</h3>
        <p class="label-sm" style="color: var(--tertiary);">${work.type}</p>
        <div class="tags" style="padding-top: 1.5rem;">
          ${work.tags.map(tag => `<span class="chip">${tag}</span>`).join('')}
        </div>
      </div>
      <ul class="experience-highlights">
        ${work.highlights.map(item => `
          <li class="highlight-item">
            <h4>${item.title}</h4>
            <p>${item.detail}</p>
            <p class="subtext">${item.subtext}</p>
          </li>
        `).join('')}
      </ul>
    </article>
  `).join('');
}

function renderProjects() {
  const projectGrid = document.getElementById('project-grid');
  if (!projectGrid) return;

  projectGrid.innerHTML = personalData.projects.map(proj => `
    <article class="project-card">
      <p class="label-sm" style="color: var(--primary);">${proj.category}</p>
      <h3 style="margin: 0.5rem 0;">${proj.title}</h3>
      <p style="margin-bottom: 1.5rem;">${proj.description}</p>
      <div class="tags">
        ${proj.tags.map(tag => `<span class="chip">${tag}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function renderSkills() {
  const skillsVisual = document.getElementById('skills-visual');
  if (!skillsVisual) return;

  skillsVisual.innerHTML = personalData.skills.map(skill => `
    <div class="prof-bar">
      <span class="label">${skill.name}</span>
      <div class="bar-bg">
        <div class="bar-fill" style="width: ${skill.level}%;"></div>
      </div>
    </div>
  `).join('');
}

function renderFooter() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.innerHTML = `
            <div class="container" style="text-align: center;">
                <p class="label-md">Ready to build?</p>
                <h2 style="font-size: clamp(2rem, 5vw, 4rem); margin-bottom: var(--spacing-8);">Let's Start a Conversation.</h2>
                <a href="mailto:${personalData.contact.email}" class="btn-primary">Connect via Email</a>
            </div>
        `;
    }
}

// Global UI Interactivity
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
