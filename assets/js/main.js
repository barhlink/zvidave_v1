/* ─── Zvídavě – landing page i18n + UI ─── */
(function () {
  'use strict';

  var SUPPORTED = ['cs', 'en', 'fr', 'uk'];

  var LANGS = {
    cs: {
      nav_about: "O projektu", nav_games: "Hry", nav_contact: "Kontakt",
      hero_eyebrow: "✦ výukové hry pro zvídavé děti",
      hero_title: "Učení,<br>které <em>baví</em>",
      hero_sub: "Interaktivní hry a cvičení pro žáky prvního stupně. Matematika, informatika a přírodověda — v podobě, na kterou se děti těší.",
      hero_cta: "Prozkoumat hry", hero_cta2: "Více o projektu",
      hero_badge1: "Zdarma", hero_badge2: "Hraj a uč se",
      about_title: "Proč",
      about_p1: "Jsem učitelka programování, matematiky a 3D tisku na základní škole. Tuto stránku jsem vytvořila, protože chci, aby výuka bavila — jak děti, tak učitele.",
      about_p2: "Každá hra vznikla přímo ve třídě, testovaná s dětmi. Jsou zdarma, fungují v prohlížeči a nevyžadují přihlášení.",
      about_p3: "Vychází z přístupu konstruktivismu a Hejného metody — děti si poznatky <em>samy</em> objevují, ne jen opakují.",
      stat1_num: "1.<span>–</span>5. ročník", stat1_label: "ZŠ", stat1_sub: "Pro děti 6–12 let",
      stat2_num: "Zdarma", stat2_label: "Bez poplatků", stat2_sub: "Navždy a pro všechny",
      stat3_num: "V prohlížeči", stat3_label: "Bez instalace", stat3_sub: "Funguje na tabletu i PC",
      stat4_num: "Ověřeno", stat4_label: "S dětmi ve třídě", stat4_sub: "Konstruktivismus &amp; Hejný",
      gallery_title: "Naše", gallery_title2: "hry",
      gallery_sub: "Klikni na hru a rovnou hraj — žádná registrace, žádné stahování.",
      g1_tag: "Nová hra", g1_title: "Hra 1", g1_desc: "Brzy se zde objeví nová interaktivní hra. Sledujte nás!", g1_age: "ZŠ",
      g2_tag: "Nová hra", g2_title: "Hra 2", g2_desc: "Brzy se zde objeví nová interaktivní hra. Sledujte nás!", g2_age: "ZŠ",
      g3_tag: "Nová hra", g3_title: "Hra 3", g3_desc: "Brzy se zde objeví nová interaktivní hra. Sledujte nás!", g3_age: "ZŠ",
      badge_soon: "Připravujeme", coming_soon: "Brzy",
      more_soon: "Brzy přibudou další",
      feedback_title: "Zpětná vazba", feedback_btn: "Napsat zprávu",
      feedback_text: "Každý názor je pro mě cenný — ať už jste učitel, rodič nebo dítě, které si hru vyzkoušelo. Moc si vaší zpětné vazby vážím a pomáhá mi hry zlepšovat.",
      feedback_note: "Odpovídám co nejdříve.",
      footer_copy: "© 2025 Zvídavě · Vše zdarma · Vyrobeno s ❤ pro zvídavé děti"
    },
    en: {
      nav_about: "About", nav_games: "Games", nav_contact: "Contact",
      hero_eyebrow: "✦ educational games for curious kids",
      hero_title: "Learning<br>that <em>excites</em>",
      hero_sub: "Interactive games and exercises for primary school students. Maths, coding and science — in a form kids look forward to.",
      hero_cta: "Explore games", hero_cta2: "About the project",
      hero_badge1: "Free", hero_badge2: "Play and learn",
      about_title: "Why",
      about_p1: "I'm a teacher of programming, maths and 3D printing at a primary school. I created this site because I want learning to be fun — for children and teachers alike.",
      about_p2: "Every game was created directly in the classroom and tested with children. The games are free, run in the browser, and require no login.",
      about_p3: "Rooted in constructivism and the Hejný method — children <em>discover</em> knowledge themselves, rather than just repeating it.",
      stat1_num: "Grades 1<span>–</span>5", stat1_label: "Primary school", stat1_sub: "For children aged 6–12",
      stat2_num: "Free", stat2_label: "No fees", stat2_sub: "Free for everyone, forever",
      stat3_num: "In browser", stat3_label: "No install", stat3_sub: "Works on tablet &amp; PC",
      stat4_num: "Verified", stat4_label: "In the classroom", stat4_sub: "Constructivism &amp; Hejný",
      gallery_title: "Our", gallery_title2: "games",
      gallery_sub: "Click a game and play right away — no registration, no download.",
      g1_tag: "New game", g1_title: "Game 1", g1_desc: "A new interactive game is on its way. Stay tuned!", g1_age: "Primary",
      g2_tag: "New game", g2_title: "Game 2", g2_desc: "A new interactive game is on its way. Stay tuned!", g2_age: "Primary",
      g3_tag: "New game", g3_title: "Game 3", g3_desc: "A new interactive game is on its way. Stay tuned!", g3_age: "Primary",
      badge_soon: "Coming soon", coming_soon: "Soon",
      more_soon: "More games soon",
      feedback_title: "Feedback", feedback_btn: "Send a message",
      feedback_text: "Every opinion matters to me — whether you are a teacher, a parent or a child who tried a game. Your feedback helps me improve.",
      feedback_note: "I reply as soon as I can.",
      footer_copy: "© 2025 Zvídavě · Free forever · Made with ❤ for curious kids"
    },
    fr: {
      nav_about: "À propos", nav_games: "Jeux", nav_contact: "Contact",
      hero_eyebrow: "✦ jeux éducatifs pour enfants curieux",
      hero_title: "Apprendre,<br>c'est <em>amusant</em>",
      hero_sub: "Jeux interactifs et exercices pour les élèves de primaire. Mathématiques, informatique et sciences — sous une forme que les enfants adorent.",
      hero_cta: "Découvrir les jeux", hero_cta2: "En savoir plus",
      hero_badge1: "Gratuit", hero_badge2: "Joue et apprends",
      about_title: "Pourquoi",
      about_p1: "Je suis enseignante de programmation, de mathématiques et d'impression 3D à l'école primaire. J'ai créé ce site parce que je veux que l'apprentissage soit amusant — pour les enfants comme pour les enseignants.",
      about_p2: "Chaque jeu a été créé directement en classe et testé avec les enfants. Les jeux sont gratuits, fonctionnent dans le navigateur et ne nécessitent aucune connexion.",
      about_p3: "Ancré dans le constructivisme et la méthode Hejný — les enfants <em>découvrent</em> les savoirs par eux-mêmes, plutôt que de simplement les répéter.",
      stat1_num: "Années 1<span>–</span>5", stat1_label: "École primaire", stat1_sub: "Pour les 6–12 ans",
      stat2_num: "Gratuit", stat2_label: "Sans frais", stat2_sub: "Gratuit pour tous, toujours",
      stat3_num: "En ligne", stat3_label: "Sans installation", stat3_sub: "Fonctionne sur tablette &amp; PC",
      stat4_num: "Vérifié", stat4_label: "Avec les enfants", stat4_sub: "Constructivisme &amp; Hejný",
      gallery_title: "Nos", gallery_title2: "jeux",
      gallery_sub: "Clique sur un jeu et joue tout de suite — sans inscription, sans téléchargement.",
      g1_tag: "Nouveau jeu", g1_title: "Jeu 1", g1_desc: "Un nouveau jeu interactif arrive bientôt. Restez à l'écoute !", g1_age: "Primaire",
      g2_tag: "Nouveau jeu", g2_title: "Jeu 2", g2_desc: "Un nouveau jeu interactif arrive bientôt. Restez à l'écoute !", g2_age: "Primaire",
      g3_tag: "Nouveau jeu", g3_title: "Jeu 3", g3_desc: "Un nouveau jeu interactif arrive bientôt. Restez à l'écoute !", g3_age: "Primaire",
      badge_soon: "Bientôt", coming_soon: "Bientôt",
      more_soon: "D'autres jeux bientôt",
      feedback_title: "Retour d'expérience", feedback_btn: "Envoyer un message",
      feedback_text: "Chaque avis compte pour moi — que vous soyez enseignant, parent ou enfant ayant essayé un jeu. Vos retours m'aident à améliorer les jeux.",
      feedback_note: "Je réponds dès que possible.",
      footer_copy: "© 2025 Zvídavě · Gratuit pour toujours · Fait avec ❤ pour les enfants curieux"
    },
    uk: {
      nav_about: "Про проект", nav_games: "Ігри", nav_contact: "Контакт",
      hero_eyebrow: "✦ освітні ігри для допитливих дітей",
      hero_title: "Навчання,<br>яке <em>захоплює</em>",
      hero_sub: "Інтерактивні ігри та вправи для учнів початкової школи. Математика, інформатика та природознавство — у формі, яку діти полюбляють.",
      hero_cta: "Переглянути ігри", hero_cta2: "Про проект",
      hero_badge1: "Безкоштовно", hero_badge2: "Грай і вчись",
      about_title: "Чому",
      about_p1: "Я вчителька програмування, математики та 3D-друку в початковій школі. Я створила цей сайт, бо хочу, щоб навчання приносило радість — і дітям, і вчителям.",
      about_p2: "Кожна гра була створена безпосередньо в класі та протестована з дітьми. Ігри безкоштовні, працюють у браузері та не потребують реєстрації.",
      about_p3: "Засновано на конструктивізмі та методі Гейного — діти <em>самі</em> відкривають знання, а не просто повторюють їх.",
      stat1_num: "1.<span>–</span>5. клас", stat1_label: "Початкова школа", stat1_sub: "Для дітей 6–12 років",
      stat2_num: "Безкоштовно", stat2_label: "Без оплати", stat2_sub: "Назавжди і для всіх",
      stat3_num: "У браузері", stat3_label: "Без встановлення", stat3_sub: "Працює на планшеті та ПК",
      stat4_num: "Перевірено", stat4_label: "З дітьми у класі", stat4_sub: "Конструктивізм &amp; Гейний",
      gallery_title: "Наші", gallery_title2: "ігри",
      gallery_sub: "Натисни на гру та грай одразу — без реєстрації, без завантаження.",
      g1_tag: "Нова гра", g1_title: "Гра 1", g1_desc: "Нова інтерактивна гра з'явиться незабаром. Слідкуйте за нами!", g1_age: "Початкова",
      g2_tag: "Нова гра", g2_title: "Гра 2", g2_desc: "Нова інтерактивна гра з'явиться незабаром. Слідкуйте за нами!", g2_age: "Початкова",
      g3_tag: "Нова гра", g3_title: "Гра 3", g3_desc: "Нова інтерактивна гра з'явиться незабаром. Слідкуйте за нами!", g3_age: "Початкова",
      badge_soon: "Незабаром", coming_soon: "Незабаром",
      more_soon: "Незабаром більше ігор",
      feedback_title: "Зворотній зв'язок", feedback_btn: "Надіслати повідомлення",
      feedback_text: "Кожна думка важлива для мене — незалежно від того, чи ви вчитель, батько або дитина, яка спробувала гру. Ваш відгук допомагає мені вдосконалювати ігри.",
      feedback_note: "Відповідаю якнайшвидше.",
      footer_copy: "© 2025 Zvídavě · Безкоштовно · Зроблено з ❤ для допитливих дітей"
    }
  };

  function detectLang() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    return parts.length > 0 && SUPPORTED.indexOf(parts[0]) !== -1 ? parts[0] : 'cs';
  }

  function applyLang(lang) {
    var t = LANGS[lang];
    if (!t) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    var lc = document.getElementById('lang-current');
    if (lc) lc.textContent = lang.toUpperCase() + ' ▾';
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
  }

  window.toggleLangDropdown = function () {
    var dd = document.getElementById('lang-dropdown');
    if (dd) dd.classList.toggle('open');
  };

  window.setLang = function (lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    var dd = document.getElementById('lang-dropdown');
    if (dd) dd.classList.remove('open');
    var current = detectLang();
    if (current === lang) {
      applyLang(lang);
      return;
    }
    var path = window.location.pathname;
    var newPath = path.replace(new RegExp('^/' + current + '(/|$)'), '/' + lang + '$1');
    if (newPath === path) newPath = '/' + lang + '/';
    window.location.href = newPath + window.location.hash;
  };

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(detectLang());

    document.addEventListener('click', function (e) {
      var dd = document.getElementById('lang-dropdown');
      if (dd && !e.target.closest('.lang-switcher')) dd.classList.remove('open');
    });

    var btn = document.getElementById('hamburger');
    var menu = document.getElementById('nav-links');
    if (btn && menu) {
      btn.addEventListener('click', function () {
        btn.classList.toggle('open');
        menu.classList.toggle('open');
      });
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          btn.classList.remove('open');
          menu.classList.remove('open');
        });
      });
    }
  });
})();
