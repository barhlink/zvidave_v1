/* ─── Zvídavě – landing page i18n + UI ─── */
(function () {
  'use strict';

  var SUPPORTED = ['cs', 'en', 'fr', 'uk'];

  var LANGS = {
    cs: {
      nav_about: "O projektu", nav_games: "Hry", nav_contact: "Kontakt",
      hero_eyebrow: "VÝUKOVÉ HRY PRO ZVÍDAVÉ DĚTI",
      hero_h1_1: "Učení",
      hero_h1_2: "které <em>baví</em>",
      hero_sub: "Interaktivní hry a cvičení pro žáky prvního stupně. Matematika, informatika a přírodověda — v podobě, na kterou se děti těší.",
      hero_cta: "PROZKOUMAT HRY", hero_cta2: "VÍCE O PROJEKTU",
      mg_label: "MINI HRA · 1. STUPEŇ",
      mg_streak: "v řadě",
      mg_prompt: "Najdi čísla, jejichž součet je",
      mg_sum: "Tvůj součet:",
      mg_skip: "Další ↻",
      how_eyebrow: "JAK TO FUNGUJE",
      how_title: "Tři kroky, žádné <em>překážky</em>",
      step1_h: "Vyber předmět",
      step1_p: "Filtry podle ročníku, předmětu a tématu. Najdeš za 30 vteřin to, co potřebuješ.",
      step2_h: "Sdílej se třídou",
      step2_p: "Pošli odkaz dětem nebo promítni hru přímo na interaktivní tabuli. Funguje i offline po prvním načtení.",
      step3_h: "Pusť se do hry",
      step3_p: "Bez registrace, bez stahování, bez reklam. Spustíš v prohlížeči.",
      games_eyebrow: "KATALOG",
      games_title: "<em>Hry</em> testované<br>ve třídě",
      games_lede: "Každá hra projde testováním ve třídě. Žádné reklamy, žádné mikrotransakce — jen čisté učení.",
      game_play: "Hrát teď",
      game_coming: "Připravujeme",
      game_soon_note: "Nová hra ve výrobě.",
      badge_wip: "v přípravě",
      badge_soon: "JIŽ BRZY",
      teachers_eyebrow: "PRO UČITELE",
      teachers_title: "Hotový materiál do <em>hodiny</em>",
      teachers_p: "Každá hra obsahuje stručný metodický list — co procvičuje, jak ji zařadit do výuky, návrhy zadání pro různé úrovně.",
      check1: "Bez registrace pro děti",
      check2: "Funguje na školních tabletech",
      check3: "RVP-kompatibilní zadání",
      check4: "Tisknutelné pracovní listy",
      teachers_btn: "Stáhnout metodiku",
      teachers_wip: "Metodické listy jsou momentálně v přípravě.",
      feedback_title: "Zpětná vazba", feedback_btn: "NAPSAT ZPRÁVU",
      feedback_text: "Každý názor je pro mě cenný — ať už jste učitel, rodič nebo dítě, které si hru vyzkoušelo. Moc si vaší zpětné vazby vážím a pomáhá mi hry zlepšovat.",
      feedback_note: "Odpovídám co nejdříve.",
      footer_copy: "© 2026 Zvídavě · Vše zdarma · Vyrobeno s <span class=\"bv-heart\">♥</span> pro zvídavé děti"
    },
    en: {
      nav_about: "About", nav_games: "Games", nav_contact: "Contact",
      hero_eyebrow: "EDUCATIONAL GAMES FOR CURIOUS KIDS",
      hero_h1_1: "Learning",
      hero_h1_2: "that <em>excites</em>",
      hero_sub: "Interactive games and exercises for primary school students. Maths, coding and science — in a form kids look forward to.",
      hero_cta: "EXPLORE GAMES", hero_cta2: "ABOUT THE PROJECT",
      mg_label: "MINI GAME · GRADE 1",
      mg_streak: "in a row",
      mg_prompt: "Find numbers that add up to",
      mg_sum: "Your total:",
      mg_skip: "Next ↻",
      how_eyebrow: "HOW IT WORKS",
      how_title: "Three steps, no <em>obstacles</em>",
      step1_h: "Choose a subject",
      step1_p: "Filter by grade, subject and topic. Find what you need in 30 seconds.",
      step2_h: "Share with your class",
      step2_p: "Send a link to students or project the game on an interactive whiteboard. Works offline after first load.",
      step3_h: "Start playing",
      step3_p: "No registration, no downloads, no ads. Runs right in the browser.",
      games_eyebrow: "CATALOGUE",
      games_title: "<em>Games</em> tested<br>in class",
      games_lede: "Every game goes through classroom testing. No ads, no microtransactions — just pure learning.",
      game_play: "Play now",
      game_coming: "Coming soon",
      game_soon_note: "New game in the works.",
      badge_wip: "coming soon",
      badge_soon: "COMING SOON",
      teachers_eyebrow: "FOR TEACHERS",
      teachers_title: "Ready material for <em>class</em>",
      teachers_p: "Every game includes a brief methodology sheet — what it practises, how to include it in lessons, and task suggestions for different levels.",
      check1: "No registration for children",
      check2: "Works on school tablets",
      check3: "Curriculum-aligned tasks",
      check4: "Printable worksheets",
      teachers_btn: "Download methodology",
      teachers_wip: "Methodology sheets are currently in preparation.",
      feedback_title: "Feedback", feedback_btn: "SEND A MESSAGE",
      feedback_text: "Every opinion matters to me — whether you are a teacher, a parent or a child who tried a game. Your feedback helps me improve.",
      feedback_note: "I reply as soon as I can.",
      footer_copy: "© 2026 Zvídavě · Free forever · Made with <span class=\"bv-heart\">♥</span> for curious kids"
    },
    fr: {
      nav_about: "À propos", nav_games: "Jeux", nav_contact: "Contact",
      hero_eyebrow: "JEUX ÉDUCATIFS POUR ENFANTS CURIEUX",
      hero_h1_1: "Apprendre",
      hero_h1_2: "c'est <em>amusant</em>",
      hero_sub: "Jeux interactifs et exercices pour les élèves de primaire. Mathématiques, informatique et sciences — sous une forme que les enfants adorent.",
      hero_cta: "DÉCOUVRIR LES JEUX", hero_cta2: "EN SAVOIR PLUS",
      mg_label: "MINI JEU · CE1",
      mg_streak: "d'affilée",
      mg_prompt: "Trouve les nombres dont la somme est",
      mg_sum: "Ton total :",
      mg_skip: "Suivant ↻",
      how_eyebrow: "COMMENT ÇA MARCHE",
      how_title: "Trois étapes, sans <em>obstacles</em>",
      step1_h: "Choisir une matière",
      step1_p: "Filtres par niveau, matière et thème. Trouvez ce dont vous avez besoin en 30 secondes.",
      step2_h: "Partager avec la classe",
      step2_p: "Envoyez un lien aux élèves ou projetez le jeu sur un tableau interactif. Fonctionne hors ligne après le premier chargement.",
      step3_h: "Commencer à jouer",
      step3_p: "Sans inscription, sans téléchargement, sans publicité. Fonctionne dans le navigateur.",
      games_eyebrow: "CATALOGUE",
      games_title: "<em>Jeux</em> testés<br>en classe",
      games_lede: "Chaque jeu est testé en classe. Pas de publicité, pas de microtransactions — juste de l'apprentissage pur.",
      game_play: "Jouer",
      game_coming: "Bientôt",
      game_soon_note: "Nouveau jeu en préparation.",
      badge_wip: "bientôt",
      badge_soon: "BIENTÔT",
      teachers_eyebrow: "POUR LES ENSEIGNANTS",
      teachers_title: "Matériel prêt pour <em>la classe</em>",
      teachers_p: "Chaque jeu contient une fiche méthodologique — ce qu'il entraîne, comment l'intégrer à l'enseignement, suggestions de tâches pour différents niveaux.",
      check1: "Sans inscription pour les enfants",
      check2: "Fonctionne sur les tablettes scolaires",
      check3: "Tâches conformes au programme",
      check4: "Fiches de travail imprimables",
      teachers_btn: "Télécharger la méthodologie",
      teachers_wip: "Les fiches méthodologiques sont actuellement en préparation.",
      feedback_title: "Retour d'expérience", feedback_btn: "ENVOYER UN MESSAGE",
      feedback_text: "Chaque avis compte pour moi — que vous soyez enseignant, parent ou enfant ayant essayé un jeu. Vos retours m'aident à améliorer les jeux.",
      feedback_note: "Je réponds dès que possible.",
      footer_copy: "© 2026 Zvídavě · Gratuit pour toujours · Fait avec <span class=\"bv-heart\">♥</span> pour les enfants curieux"
    },
    uk: {
      nav_about: "Про проект", nav_games: "Ігри", nav_contact: "Контакт",
      hero_eyebrow: "ОСВІТНІ ІГРИ ДЛЯ ДОПИТЛИВИХ ДІТЕЙ",
      hero_h1_1: "Навчання",
      hero_h1_2: "яке <em>захоплює</em>",
      hero_sub: "Інтерактивні ігри та вправи для учнів початкової школи. Математика, інформатика та природознавство — у формі, яку діти полюбляють.",
      hero_cta: "ПЕРЕГЛЯНУТИ ІГРИ", hero_cta2: "ПРО ПРОЕКТ",
      mg_label: "МІНІ ГРА · 1 КЛ.",
      mg_streak: "поспіль",
      mg_prompt: "Знайди числа, сума яких дорівнює",
      mg_sum: "Твоя сума:",
      mg_skip: "Далі ↻",
      how_eyebrow: "ЯК ЦЕ ПРАЦЮЄ",
      how_title: "Три кроки, жодних <em>перешкод</em>",
      step1_h: "Обери предмет",
      step1_p: "Фільтруй за класом, предметом і темою. Знайдеш потрібне за 30 секунд.",
      step2_h: "Поділися з класом",
      step2_p: "Надішли посилання дітям або проектуй гру прямо на інтерактивну дошку. Працює офлайн після першого завантаження.",
      step3_h: "Починай гратись",
      step3_p: "Без реєстрації, без завантаження, без реклами. Запускається у браузері.",
      games_eyebrow: "КАТАЛОГ",
      games_title: "<em>Ігри</em> перевірені<br>у класі",
      games_lede: "Кожна гра проходить тестування в класі. Жодної реклами, жодних мікротранзакцій — тільки чисте навчання.",
      game_play: "Грати",
      game_coming: "Незабаром",
      game_soon_note: "Нова гра готується.",
      badge_wip: "незабаром",
      badge_soon: "НЕЗАБАРОМ",
      teachers_eyebrow: "ДЛЯ ВЧИТЕЛІВ",
      teachers_title: "Готовий матеріал для <em>уроку</em>",
      teachers_p: "Кожна гра містить короткий методичний лист — що відпрацьовує, як включити в урок, варіанти завдань для різних рівнів.",
      check1: "Без реєстрації для дітей",
      check2: "Працює на шкільних планшетах",
      check3: "Завдання відповідно до навчальної програми",
      check4: "Роздруковані робочі аркуші",
      teachers_btn: "Завантажити методику",
      teachers_wip: "Методичні листи наразі готуються.",
      feedback_title: "Зворотній зв'язок", feedback_btn: "НАДІСЛАТИ ПОВІДОМЛЕННЯ",
      feedback_text: "Кожна думка важлива для мене — незалежно від того, чи ви вчитель, батько або дитина, яка спробувала гру. Ваш відгук допомагає мені вдосконалювати ігри.",
      feedback_note: "Відповідаю якнайшвидше.",
      footer_copy: "© 2026 Zvídavě · Безкоштовно · Зроблено з <span class=\"bv-heart\">♥</span> для допитливих дітей"
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
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
  }

  window.setLang = function (lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
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
