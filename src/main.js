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
