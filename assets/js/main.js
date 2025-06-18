document.addEventListener('DOMContentLoaded', () => {
  // Lazy load images
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
    img.removeAttribute('data-src');
  });

  // Scroll reveal animations
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  scrollElements.forEach(el => observer.observe(el));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
});
