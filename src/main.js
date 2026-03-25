import './style.css'

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Account for header
        behavior: 'smooth'
      });
    }
  });
});

// Console signature
console.log('%c ARCHITECT. ', 'background: #007acc; color: #ffffff; font-weight: bold; padding: 4px; border-radius: 2px;');
console.log('Building the core infrastructure of the web.');

// Hover Modal Logic
const triggers = document.querySelectorAll('.hover-trigger');
const modal = document.getElementById('hover-modal');
const overlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalSub = document.getElementById('modal-sub');

triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', () => {
    const detail = trigger.getAttribute('data-detail');
    const sub = trigger.getAttribute('data-sub');
    
    modalTitle.textContent = detail;
    modalSub.textContent = sub;
    
    modal.classList.add('active');
    overlay.classList.add('active');
  });

  trigger.addEventListener('mouseleave', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });
});
