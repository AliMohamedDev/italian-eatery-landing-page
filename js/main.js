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

// Scroll-triggered animations (.fade-in, .fade-in--left, .fade-in--right, .draw-in)
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.fade-in, .fade-in--left, .fade-in--right, .draw-in').forEach(function(el) {
  observer.observe(el);
});

// Count-up animation for rating number
var statNumber = document.querySelector('.reviews__stat-number');
if (statNumber) {
  var targetVal = parseFloat(statNumber.textContent);
  statNumber.textContent = '0.0';
  var countObserver = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      var duration = 1400;
      var startTime = null;
      function step(ts) {
        if (!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        statNumber.textContent = (eased * targetVal).toFixed(1);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      countObserver.unobserve(statNumber);
    }
  }, { threshold: 0.6 });
  countObserver.observe(statNumber);
}

// Parallax on hero background
var heroBg = document.querySelector('.hero__bg');
var hero = document.querySelector('.hero');
if (heroBg && hero) {
  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    if (scrollY < hero.offsetHeight) {
      heroBg.style.transform = 'translateY(' + (scrollY * -0.18) + 'px)';
    }
  }, { passive: true });
}

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

// Reviews scroll dots
var reviewsDots = document.getElementById('reviews-dots');
if (reviewsWrap && reviewsDots) {
  var cards = reviewsWrap.querySelectorAll('.review-card');
  var numDots = cards.length;

  // Build dots
  for (var i = 0; i < numDots; i++) {
    var dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' dot--active' : '');
    (function(idx) {
      dot.addEventListener('click', function() {
        var card = cards[idx];
        reviewsWrap.scrollTo({ left: card.offsetLeft - reviewsWrap.offsetLeft, behavior: 'smooth' });
      });
    })(i);
    reviewsDots.appendChild(dot);
  }

  // Update active dot on scroll
  reviewsWrap.addEventListener('scroll', function() {
    var scrollPos = reviewsWrap.scrollLeft + reviewsWrap.offsetWidth / 2;
    var active = 0;
    cards.forEach(function(card, idx) {
      if (card.offsetLeft <= scrollPos) active = idx;
    });
    reviewsDots.querySelectorAll('.dot').forEach(function(d, idx) {
      d.classList.toggle('dot--active', idx === active);
    });
  }, { passive: true });
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
