(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ── Game filter ── */
    var filterBtns = document.querySelectorAll('.bv-filter');
    var cards = document.querySelectorAll('.bv-game-card');

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        cards.forEach(function (card) {
          var subject = card.getAttribute('data-subject');
          card.style.display = (filter === 'all' || subject === filter || subject === 'soon') ? '' : 'none';
        });
      });
    });

    /* ── Mini-game: Najdi soucet ── */
    var targets = [10, 12, 15, 8, 11, 13];
    var round = 0;
    var picked = [];
    var streak = 0;
    var solved = false;
    var currentNumbers = [];

    var targetEl  = document.getElementById('mg-target');
    var numbersEl = document.getElementById('mg-numbers');
    var sumEl     = document.getElementById('mg-sum-val');
    var hintEl    = document.getElementById('mg-hint');
    var streakEl  = document.getElementById('mg-streak');
    var skipBtn   = document.getElementById('mg-skip');

    function getTarget() {
      return targets[round % targets.length];
    }

    function generateNumbers(target, rnd) {
      var a = Math.max(1, Math.floor(target / 2) - 1 - (rnd % 3));
      var b = target - a;
      var decoys = [];
      var attempts = 0;
      while (decoys.length < 4 && attempts < 200) {
        attempts++;
        var n = 1 + Math.floor(Math.random() * (target - 1));
        if (n !== a && n !== b && decoys.indexOf(n) === -1) decoys.push(n);
      }
      var all = [a, b].concat(decoys);
      for (var i = all.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = all[i]; all[i] = all[j]; all[j] = tmp;
      }
      return all;
    }

    function render() {
      var target = getTarget();
      if (targetEl) targetEl.textContent = target;
      currentNumbers = generateNumbers(target, round);
      picked = [];
      solved = false;
      if (sumEl) sumEl.textContent = '0';
      if (hintEl) { hintEl.textContent = ''; hintEl.className = 'mg-hint'; }
      if (!numbersEl) return;
      numbersEl.innerHTML = '';
      currentNumbers.forEach(function (n, i) {
        var btn = document.createElement('button');
        btn.className = 'mg-num';
        btn.textContent = n;
        btn.addEventListener('click', (function (idx, b) {
          return function () { togglePick(idx, b); };
        }(i, btn)));
        numbersEl.appendChild(btn);
      });
    }

    function togglePick(idx, btn) {
      if (solved) return;
      var pos = picked.indexOf(idx);
      if (pos === -1) {
        picked.push(idx);
        btn.classList.add('picked');
      } else {
        picked.splice(pos, 1);
        btn.classList.remove('picked');
      }
      updateSum();
    }

    function updateSum() {
      var sum = picked.reduce(function (s, i) { return s + currentNumbers[i]; }, 0);
      var target = getTarget();
      if (sumEl) sumEl.textContent = sum;
      if (!hintEl) return;
      if (sum === target && picked.length >= 2) {
        hintEl.textContent = ' · výborně!';
        hintEl.className = 'mg-hint mg-ok';
        onSolved();
      } else if (sum > target) {
        hintEl.textContent = ' · moc';
        hintEl.className = 'mg-hint';
      } else {
        hintEl.textContent = '';
        hintEl.className = 'mg-hint';
      }
    }

    function onSolved() {
      if (solved) return;
      solved = true;
      streak++;
      if (streakEl) streakEl.textContent = streak;
      if (numbersEl) {
        numbersEl.querySelectorAll('.mg-num.picked').forEach(function (b) {
          b.classList.add('solved');
        });
      }
      setTimeout(nextRound, 1100);
    }

    function nextRound() {
      round++;
      render();
    }

    if (skipBtn) skipBtn.addEventListener('click', nextRound);

    render();

    /* ── Marquee: rAF animace (bez CSS reset-blikání) ── */
    (function () {
      var track = document.querySelector('.bv-marquee-track');
      if (!track) return;
      var sets = track.querySelectorAll('.bv-marquee-set');
      if (sets.length < 2) return;

      // Respektovat prefers-reduced-motion
      var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      var speed = 28; // px/s — pomalé, klidné, meditativní
      var paused = false;
      var x = 0;
      var halfW = 0;
      var lastTs = null;

      function measure() {
        halfW = sets[0].getBoundingClientRect().width * (sets.length / 2);
      }

      function tick(ts) {
        if (lastTs === null) lastTs = ts;
        var dt = Math.min(ts - lastTs, 64);
        lastTs = ts;

        if (!paused) {
          x += speed * dt / 1000;
          if (x >= halfW) x -= halfW;
          track.style.transform = 'translate3d(-' + x + 'px, 0, 0)';
        }
        requestAnimationFrame(tick);
      }

      // Pauza při hover
      track.closest('.bv-marquee').addEventListener('mouseenter', function () { paused = true; });
      track.closest('.bv-marquee').addEventListener('mouseleave', function () { paused = false; lastTs = null; });

      requestAnimationFrame(function () {
        measure();
        requestAnimationFrame(tick);
      });
    }());
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
