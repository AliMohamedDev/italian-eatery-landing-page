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

// Section progress dots
var sectionDots = document.getElementById('section-dots');
var sectionIds = ['home', 'story', 'menu', 'specialties', 'reviews', 'visit', 'contact'];
if (sectionDots) {
  var dots = sectionDots.querySelectorAll('.section-dots__dot');

  // Show dots after hero
  var heroEl = document.getElementById('home');
  var dotsShowObserver = new IntersectionObserver(function(entries) {
    sectionDots.classList.toggle('visible', !entries[0].isIntersecting);
  }, { threshold: 0.5 });
  if (heroEl) dotsShowObserver.observe(heroEl);

  // Track active section
  var sectionEls = sectionIds.map(function(id) { return document.getElementById(id); }).filter(Boolean);
  var activeSectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var idx = sectionIds.indexOf(entry.target.id);
        dots.forEach(function(d, i) { d.classList.toggle('section-dots__dot--active', i === idx); });
      }
    });
  }, { threshold: 0.4 });
  sectionEls.forEach(function(el) { activeSectionObserver.observe(el); });
}

// Back to top button
var backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', function() {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Menu category tabs (mobile)
var menuTabs = document.getElementById('menu-tabs');
if (menuTabs) {
  var menuColumns = document.querySelectorAll('.menu__column');

  function activateTab(tab) {
    var category = tab.getAttribute('data-tab');
    menuTabs.querySelectorAll('.menu__tab').forEach(function(t) {
      t.classList.toggle('menu__tab--active', t === tab);
      t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
    });
    menuColumns.forEach(function(col) {
      col.classList.toggle('menu__column--active', col.getAttribute('data-category') === category);
    });
  }

  // Set first column active on mobile
  if (window.innerWidth <= 767) {
    menuColumns[0] && menuColumns[0].classList.add('menu__column--active');
  }

  menuTabs.querySelectorAll('.menu__tab').forEach(function(tab) {
    tab.addEventListener('click', function() { activateTab(tab); });
  });

  // Handle resize: show all columns on desktop, restore tab state on mobile
  window.addEventListener('resize', function() {
    if (window.innerWidth > 767) {
      menuColumns.forEach(function(col) { col.style.display = ''; });
    }
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

// Contact form — send via Web3Forms
var contactForm = document.getElementById('contact-form');
var contactSuccess = document.getElementById('contact-success');
var contactSubmitBtn = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
if (contactForm && contactSuccess) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    var formData = new FormData(contactForm);
    formData.append('access_key', 'REPLACE_WITH_WEB3FORMS_KEY');
    formData.append('subject', 'New message from Main Street Italian Eatery website');

    if (contactSubmitBtn) {
      contactSubmitBtn.disabled = true;
      contactSubmitBtn.textContent = 'Sending…';
    }

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.success) {
        contactForm.style.display = 'none';
        contactSuccess.removeAttribute('hidden');
        contactSuccess.style.display = 'flex';
      } else {
        if (contactSubmitBtn) {
          contactSubmitBtn.disabled = false;
          contactSubmitBtn.textContent = 'Send Message';
        }
        alert('Something went wrong. Please try calling us directly at (905) 878-2938.');
      }
    })
    .catch(function() {
      if (contactSubmitBtn) {
        contactSubmitBtn.disabled = false;
        contactSubmitBtn.textContent = 'Send Message';
      }
      alert('Something went wrong. Please try calling us directly at (905) 878-2938.');
    });
  });
}
