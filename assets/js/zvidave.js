/* Zvídavě.cz – interakce úvodní stránky. Bez knihoven, bez sběru dat. */
(function () {
  'use strict';
  var TEXTY = {
    "cs": {
      "add": "Přidat ",
      "remove": "Odebrat ",
      "pick": "Vyber čísla.",
      "missing": "Chybí {n}.",
      "exact": "Přesně 10. Povedlo se.",
      "over": "O {n} víc. Zkus jedno číslo odebrat."
    },
    "en": {
      "add": "Add ",
      "remove": "Remove ",
      "pick": "Pick some numbers.",
      "missing": "{n} to go.",
      "exact": "Exactly 10. You found it.",
      "over": "{n} too many. Try removing one number."
    },
    "fr": {
      "add": "Ajouter ",
      "remove": "Retirer ",
      "pick": "Choisis des nombres.",
      "missing": "Il manque {n}.",
      "exact": "Exactement 10. Tu as trouvé.",
      "over": "{n} de trop. Essaie de retirer un nombre."
    },
    "uk": {
      "add": "Додати ",
      "remove": "Прибрати ",
      "pick": "Вибери числа.",
      "missing": "Бракує {n}.",
      "exact": "Рівно 10. Вийшло.",
      "over": "На {n} більше. Спробуй прибрати одне число."
    }
  };
  var tx = TEXTY[document.documentElement.lang] || TEXTY.cs;

  /* ---------- Mobilní menu ---------- */
  var menuBtn = document.querySelector('.menu-tlacitko');
  var nav = document.getElementById('navigace');
  if (menuBtn && nav) {
    var zavri = function () {
      nav.classList.remove('otevreno');
      menuBtn.setAttribute('aria-expanded', 'false');
    };
    menuBtn.addEventListener('click', function () {
      var otevrit = !nav.classList.contains('otevreno');
      nav.classList.toggle('otevreno', otevrit);
      menuBtn.setAttribute('aria-expanded', String(otevrit));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a[href^="#"]')) zavri();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('otevreno')) { zavri(); menuBtn.focus(); }
    });
  }

  /* ---------- Vlaštovka v logu ----------
     Na úvodní stránce klik spustí let (nedá se přerušit, dokud nepřistane).
     Na podstránkách by logo mělo normálně vést domů – tam stačí skript nevkládat. */
  var logo = document.getElementById('logo');
  if (logo) {
    var vlastovka = logo.querySelector('.vlastovka');
    logo.addEventListener('click', function (e) {
      e.preventDefault();
      if (!logo.classList.contains('leti')) logo.classList.add('leti');
    });
    if (vlastovka) {
      vlastovka.addEventListener('animationend', function () {
        logo.classList.remove('leti');
      });
    }
  }

  /* ---------- Lodička v patičce ---------- */
  var lodicka = document.querySelector('.lodicka');
  var pristav = document.querySelector('.pristav');
  if (lodicka && pristav) {
    var strana = 'vpravo';
    var pluje = false;
    lodicka.addEventListener('click', function () {
      if (pluje) return;
      pluje = true;
      pristav.classList.add('pluje');
      lodicka.classList.remove('vpravo', 'vlevo');
      lodicka.classList.add(strana === 'vpravo' ? 'pluje-zpet' : 'pluje-tam');
    });
    lodicka.addEventListener('animationend', function (e) {
      if (e.target !== lodicka) return;
      strana = strana === 'vpravo' ? 'vlevo' : 'vpravo';
      lodicka.classList.remove('pluje-tam', 'pluje-zpet');
      lodicka.classList.add(strana);
      pristav.classList.remove('pluje');
      pluje = false;
    });
  }

  /* ---------- Minihra: součet 10 ---------- */
  var SADY = [[3, 7, 2, 8, 5, 4, 6, 1, 9], [6, 1, 9, 4, 2, 8, 3, 5, 7], [4, 8, 1, 5, 9, 2, 7, 3, 6]];
  var mrizka = document.getElementById('dlazdice');
  var soucetEl = document.getElementById('soucet');
  var stavEl = document.getElementById('stav');
  var pruh = document.getElementById('pruh');
  var vypln = document.getElementById('pruh-vypln');
  var dalsi = document.getElementById('dalsi');
  if (!mrizka) return;

  var sada = 0;
  var vybrane = [];

  function vykresli() {
    var cisla = SADY[sada % SADY.length];
    mrizka.textContent = '';
    cisla.forEach(function (n, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = n;
      var zap = vybrane.indexOf(i) !== -1;
      b.setAttribute('aria-pressed', String(zap));
      b.setAttribute('aria-label', (zap ? tx.remove : tx.add) + n);
      b.addEventListener('click', function () {
        if (vybrane.indexOf(i) !== -1) vybrane = vybrane.filter(function (x) { return x !== i; });
        else vybrane.push(i);
        vykresli();
        var tl = mrizka.children[i];
        if (tl) tl.focus();
      });
      mrizka.appendChild(b);
    });

    var soucet = vybrane.reduce(function (a, i) { return a + cisla[i]; }, 0);
    soucetEl.textContent = soucet;
    pruh.setAttribute('aria-valuenow', String(Math.min(soucet, 10)));
    vypln.style.width = Math.min(soucet, 10) * 10 + '%';
    vypln.style.backgroundColor = soucet > 10 ? 'var(--okrova)' : 'var(--zelena)';

    stavEl.classList.toggle('hotovo', soucet === 10);
    if (soucet === 0) stavEl.textContent = tx.pick;
    else if (soucet < 10) stavEl.textContent = tx.missing.replace('{n}', 10 - soucet);
    else if (soucet === 10) stavEl.textContent = tx.exact;
    else stavEl.textContent = tx.over.replace('{n}', soucet - 10);
  }

  dalsi.addEventListener('click', function () {
    sada += 1;
    vybrane = [];
    vykresli();
  });

  vykresli();
})();

// Lišta – po odjetí od začátku stránky dostane stín a logo se oddělí od úvodu
(function () {
  var lista = document.querySelector('.lista');
  if (!lista) return;
  function zkontroluj() { lista.classList.toggle('odjeta', window.scrollY > 8); }
  window.addEventListener('scroll', zkontroluj, { passive: true });
  zkontroluj();
})();
