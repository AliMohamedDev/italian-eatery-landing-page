// Smooth scroll for anchor links
// (CSS scroll-behavior: smooth handles most cases, but this ensures
// consistent behavior across browsers including Safari)
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in on scroll using IntersectionObserver
// Elements with class .fade-in start invisible (opacity: 0, translateY(24px))
// When they enter the viewport, .visible is added which transitions them in
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stop observing once visible — no need to re-trigger
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,       // Trigger when 10% of element is visible
  rootMargin: '0px 0px -40px 0px'  // Start 40px before element hits bottom of viewport
});

document.querySelectorAll('.fade-in').forEach(function(el) {
  observer.observe(el);
});
