// Small enhancements. The page still works (just without these extras) if this file fails to load.
(function () {
  'use strict';

  // Render LaTeX: $...$ inline, $$...$$ on its own line. Write \$ for a literal dollar sign.
  if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false
    });
  }

  // Keep the footer year current.
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasObserver = 'IntersectionObserver' in window;

  // Fade sections in as they scroll into view. Anything already on screen is left alone.
  if (hasObserver && !reduceMotion) {
    var pending = [];
    document.querySelectorAll('.reveal').forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.remove('reveal');
      } else {
        pending.push(el);
      }
    });

    document.documentElement.classList.add('reveal-on');

    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // Stagger cards that sit side by side in a grid.
        var index = Array.prototype.indexOf.call(el.parentNode.children, el);
        el.style.animationDelay = (index % 3) * 90 + 'ms';
        el.classList.add('is-visible');
        observer.unobserve(el);
      });
    }, { threshold: 0.12 });

    pending.forEach(function (el) { revealObserver.observe(el); });
  }

  // Underline the nav link for the section in the middle of the screen.
  if (hasObserver) {
    var navLinks = document.querySelectorAll('.nav__links a');
    var targets = [document.getElementById('top')];
    navLinks.forEach(function (link) {
      var section = document.querySelector(link.getAttribute('href'));
      if (section) targets.push(section);
    });

    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = '#' + entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    targets.forEach(function (el) { if (el) navObserver.observe(el); });
  }
})();
