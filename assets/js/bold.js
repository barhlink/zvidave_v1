(function () {
  'use strict';

  /* ── Game filter ── */
  document.addEventListener('DOMContentLoaded', function () {
    var filterBtns = document.querySelectorAll('.bv-filter');
    var cards = document.querySelectorAll('.bv-game-card');

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        cards.forEach(function (card) {
          var subject = card.getAttribute('data-subject');
          var show = filter === 'all' || subject === filter || subject === 'soon';
          card.style.display = show ? '' : 'none';
        });
      });
    });

    /* ── Mini-game ── */
    var score = 0;
    var nums = document.querySelectorAll('.mg-num');
    var scoreEl = document.getElementById('mg-score');
    var skipBtn = document.getElementById('mg-skip');

    nums.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn.classList.contains('picked')) return;
        nums.forEach(function (b) { b.classList.remove('picked', 'solved'); });
        btn.classList.add('picked');
        if (btn.getAttribute('data-correct') === 'true') {
          score++;
          if (scoreEl) scoreEl.textContent = score;
          btn.classList.add('solved');
          setTimeout(resetMg, 1200);
        }
      });
    });

    if (skipBtn) skipBtn.addEventListener('click', resetMg);

    function resetMg() {
      nums.forEach(function (b) { b.classList.remove('picked', 'solved'); });
    }

    /* ── Hamburger (mobile nav) ── */
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
      });
      navLinks.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          hamburger.classList.remove('open');
          navLinks.classList.remove('open');
        });
      });
    }

    /* ── Scroll-in animation ── */
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('bv-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.bv-step, .bv-game-card').forEach(function (el) {
        observer.observe(el);
      });
    }
  });
})();
