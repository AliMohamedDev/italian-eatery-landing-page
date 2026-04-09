// Scroll to top on page load/refresh
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

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

// Nav scroll behavior — adds .scrolled class when page is scrolled
var nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}

// Mobile menu toggle
var hamburger = document.getElementById('nav-hamburger');
var mobileMenu = document.getElementById('nav-mobile');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', function() {
    var isOpen = mobileMenu.classList.toggle('nav__mobile--open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a link inside it is clicked
  mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('nav__mobile--open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reviews drag-to-scroll
var reviewsWrap = document.querySelector('.reviews__scroll-wrap');
if (reviewsWrap) {
  var isDown = false;
  var startX, scrollLeft;

  reviewsWrap.addEventListener('mousedown', function(e) {
    isDown = true;
    startX = e.pageX - reviewsWrap.offsetLeft;
    scrollLeft = reviewsWrap.scrollLeft;
  });
  reviewsWrap.addEventListener('mouseleave', function() { isDown = false; });
  reviewsWrap.addEventListener('mouseup', function() { isDown = false; });
  reviewsWrap.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - reviewsWrap.offsetLeft;
    reviewsWrap.scrollLeft = scrollLeft - (x - startX);
  });
}

// Dark / light mode toggle
var themeToggle = document.getElementById('theme-toggle');
var root = document.documentElement;

// Load saved preference, default to light
var savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    var current = root.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// Contact form — show success message on submit
var contactForm = document.getElementById('contact-form');
var contactSuccess = document.getElementById('contact-success');
if (contactForm && contactSuccess) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    contactForm.style.display = 'none';
    contactSuccess.style.display = 'flex';
  });
}
