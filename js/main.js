(function () {
  "use strict";

  /* ---------- mobile menu ---------- */
  var menuBtn = document.getElementById("zvMenuBtn");
  var mobileNav = document.getElementById("zvMobileNav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var open = mobileNav.hasAttribute("hidden");
      if (open) mobileNav.removeAttribute("hidden");
      else mobileNav.setAttribute("hidden", "");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.setAttribute("hidden", "");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- logo bird / boat easter egg ---------- */
  document.querySelectorAll('[data-zv8="fly"]').forEach(function (btn) {
    btn.addEventListener("click", function (ev) {
      ev.preventDefault();
      var g = btn.querySelector(".zv8-bird");
      if (!g || g.classList.contains("zv8-flying")) return;
      g.classList.add("zv8-flying");
      setTimeout(function () { g.classList.remove("zv8-flying"); }, 5100);
    });
  });
  document.querySelectorAll('[data-zv8="rock"]').forEach(function (btn) {
    btn.addEventListener("click", function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      var g = btn.querySelector(".zv8-boat");
      if (!g || g.classList.contains("zv8-sailing")) return;
      g.classList.add("zv8-sailing");
      setTimeout(function () { g.classList.remove("zv8-sailing"); }, 7300);
    });
  });

  function buildFlight() {
    var old = document.getElementById("zv8-kf");
    if (old) old.remove();
    var K = 1 / 0.5544;
    var W = [
      [0, 0], [76, -16], [148, -30],
      [212, -16], [254, -50], [214, -80],
      [162, -52],
      [114, -78], [74, -54],
      [16, -42], [-62, -20], [-100, 10],
      [-52, 22], [-16, 12], [0, 0]
    ];
    var pts = [];
    function at(i) { return W[Math.max(0, Math.min(W.length - 1, i))]; }
    for (var i = 0; i < W.length - 1; i++) {
      var p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
      var steps = i === 0 ? 14 : 12;
      for (var k = (i === 0 ? 0 : 1); k <= steps; k++) {
        var t = k / steps, t2 = t * t, t3 = t2 * t;
        pts.push({
          x: 0.5 * ((2 * p1[0]) + (-p0[0] + p2[0]) * t + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3),
          y: 0.5 * ((2 * p1[1]) + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3)
        });
      }
    }
    var prev = null;
    var rot = pts.map(function (_, i) {
      var a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
      var h = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI + 45;
      if (prev !== null) { while (h - prev > 180) h -= 360; while (prev - h > 180) h += 360; }
      prev = h;
      return h;
    });
    var off = rot[0];
    for (var j = 0; j < rot.length; j++) rot[j] -= off;
    var last = rot.length - 1;
    var err = Math.round(rot[last] / 360) * 360 - rot[last];
    var from = Math.floor(last * 0.68);
    for (var m = from; m <= last; m++) {
      var u = (m - from) / (last - from);
      rot[m] += err * (u * u * (3 - 2 * u));
    }
    var d = [0];
    for (var n = 1; n <= last; n++) {
      var dx = pts[n].x - pts[n - 1].x, dy = pts[n].y - pts[n - 1].y;
      var ds = Math.hypot(dx, dy) || 0.001;
      var v = Math.max(0.5, Math.min(2.1, 1 + 1.15 * (dy / ds)));
      d.push(d[n - 1] + ds / v);
    }
    var total = d[last];
    var frames = pts.map(function (p, i) {
      return (d[i] / total * 100).toFixed(2) + "%{transform:translate(" + (p.x * K).toFixed(1) + "px," + (p.y * K).toFixed(1) + "px) rotate(" + rot[i].toFixed(1) + "deg)}";
    }).join("");
    var st = document.createElement("style");
    st.id = "zv8-kf";
    st.textContent = "@keyframes zv8-eight{" + frames + "}";
    document.head.appendChild(st);
  }
  buildFlight();

  /* ---------- sum-to-ten mini game ---------- */
  var ROUNDS = [
    { target: 10, nums: [3, 7, 2, 8, 5, 4, 6, 1] },
    { target: 11, nums: [9, 1, 4, 6, 2, 8, 5, 3] },
    { target: 7, nums: [0, 3, 5, 5, 2, 6, 4, 8] },
    { target: 12, nums: [4, 8, 6, 2, 9, 3, 5, 7] },
    { target: 9, nums: [5, 4, 1, 8, 6, 3, 2, 7] }
  ];
  var gameState = { round: 0, picked: [] };
  var autoNextT = null;

  var targetEl = document.getElementById("zvTarget");
  var sumEl = document.getElementById("zvSum");
  var sumInlineEl = document.getElementById("zvSumInline");
  var tilesEl = document.getElementById("zvTiles");
  var nextRoundBtn = document.getElementById("zvNextRound");

  function currentRound() { return ROUNDS[gameState.round % ROUNDS.length]; }

  function renderGame() {
    var round = currentRound();
    var sum = gameState.picked.reduce(function (a, i) { return a + round.nums[i]; }, 0);
    var color = sum === round.target ? "#2E9187" : sum > round.target ? "#C4677B" : "#14514E";
    targetEl.textContent = round.target;
    sumEl.textContent = sum;
    sumInlineEl.textContent = sum;
    sumEl.style.color = color;
    sumInlineEl.style.color = color;
    tilesEl.innerHTML = round.nums.map(function (n, i) {
      var on = gameState.picked.indexOf(i) !== -1;
      return '<button type="button" class="zv-tile' + (on ? " zv-tile-on" : "") + '" data-i="' + i + '">' + n + "</button>";
    }).join("");
  }

  function checkSolved() {
    var round = currentRound();
    var sum = gameState.picked.reduce(function (a, i) { return a + round.nums[i]; }, 0);
    if (sum === round.target && !autoNextT) {
      autoNextT = setTimeout(function () {
        autoNextT = null;
        gameState.round += 1;
        gameState.picked = [];
        renderGame();
      }, 1100);
    }
  }

  if (tilesEl) {
    tilesEl.addEventListener("click", function (ev) {
      var btn = ev.target.closest(".zv-tile");
      if (!btn) return;
      var i = Number(btn.dataset.i);
      var idx = gameState.picked.indexOf(i);
      if (idx !== -1) gameState.picked.splice(idx, 1);
      else gameState.picked.push(i);
      renderGame();
      checkSolved();
    });
  }
  if (nextRoundBtn) {
    nextRoundBtn.addEventListener("click", function () {
      if (autoNextT) { clearTimeout(autoNextT); autoNextT = null; }
      gameState.round += 1;
      gameState.picked = [];
      renderGame();
    });
  }
  renderGame();

  /* ---------- game catalogue + filters ---------- */
  var ALL_GAMES = window.ZV_GAMES || [];

  var filtersWrap = document.getElementById("zvFilters");
  var featuredEl = document.getElementById("zvFeatured");
  var emptyEl = document.getElementById("zvEmpty");
  var restGamesEl = document.getElementById("zvRestGames");
  var currentFilter = "all";

  function gameRowHtml(g) {
    return '<a class="zv-game-row" href="' + g.href + '">' +
      '<div class="zv-game-row-art" style="background:' + g.tint + '"><img src="' + g.img + '" alt=""></div>' +
      '<div class="zv-game-row-body">' +
      '<div class="zv-tag-row"><span class="zv-tag" style="background:#EFE7DA;color:#7A6640">' + g.grade + '</span>' +
      '<span class="zv-tag" style="background:' + g.tagBg + ';color:' + g.tagFg + '">' + g.subject + '</span></div>' +
      '<h3 class="zv-game-row-title">' + g.title + '</h3>' +
      '<div class="zv-game-row-state" style="color:' + g.stateColor + '">' + g.state + '</div>' +
      '</div></a>';
  }

  function renderGames() {
    var games = currentFilter === "all" ? ALL_GAMES : ALL_GAMES.filter(function (g) { return g.key === currentFilter; });
    var featured = games.find(function (g) { return g.title === "Vrstvička"; }) || null;
    var rest = games.filter(function (g) { return g !== featured; });
    if (featuredEl) featuredEl.hidden = !featured;
    if (emptyEl) emptyEl.hidden = games.length !== 0;
    if (restGamesEl) restGamesEl.innerHTML = rest.map(gameRowHtml).join("");
  }
  renderGames();

  if (filtersWrap) {
    filtersWrap.addEventListener("click", function (ev) {
      var btn = ev.target.closest(".zv-filter");
      if (!btn) return;
      filtersWrap.querySelectorAll(".zv-filter").forEach(function (b) { b.classList.remove("zv-filter-active"); });
      btn.classList.add("zv-filter-active");
      currentFilter = btn.dataset.filter;
      renderGames();
    });
  }

  /* ---------- desktop header hide-on-scroll ---------- */
  var headerD = document.getElementById("zvHeaderD");
  if (headerD) {
    var lastScrollY = window.scrollY;
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      var delta = y - lastScrollY;
      if (y < 200) headerD.classList.remove("zv-header-hidden");
      else if (delta > 6) headerD.classList.add("zv-header-hidden");
      else if (delta < -6) headerD.classList.remove("zv-header-hidden");
      lastScrollY = y;
    }, { passive: true });
  }

  /* ---------- desktop ribbon: rolling balls ---------- */
  var trackWrap = document.getElementById("zvTrackWrap");
  var ribbon = null;

  function startRibbon() {
    if (ribbon || !trackWrap) return;
    var svg = trackWrap.querySelector(".zv-track-svg");
    var path = svg.querySelector("#zv-track-c");
    var layer = svg.querySelector("[data-zv-balls]");
    if (!path || !layer) return;
    var NS = "http://www.w3.org/2000/svg";
    var total = path.getTotalLength();
    var ballColors = ["#E9B84A", "#F0A8B4", "#CBE9E1", "#F7C6D0"];
    var colorI = 0;
    var balls = [];
    var sparks = [];
    var GAP, enterLen, endLen, parkFrom, parkTo, rafId;

    function lenAtX(x) {
      var lo = 0, hi = total;
      for (var i = 0; i < 40; i++) {
        var mid = (lo + hi) / 2;
        if (path.getPointAtLength(mid).x < x) lo = mid; else hi = mid;
      }
      return lo;
    }
    function measure() {
      var r = svg.getBoundingClientRect();
      var w = r.width || 1440, hh = r.height || 240;
      var scale = Math.max(w / 1440, hh / 240);
      var visW = w / scale;
      var x0 = (1440 - visW) / 2;
      GAP = 46 / scale;
      enterLen = lenAtX(x0 - 70);
      endLen = lenAtX(x0 + visW + 70);
      parkFrom = lenAtX(x0 + 40);
      parkTo = lenAtX(x0 + visW * 0.55);
    }
    function pickSlot() {
      var taken = balls.filter(function (b) { return !b.moving; }).map(function (b) { return b.slot; });
      var best = parkFrom, bestD = -1;
      for (var i = 0; i < 40; i++) {
        var cand = parkFrom + Math.random() * (parkTo - parkFrom);
        var dmin = taken.length ? Math.min.apply(null, taken.map(function (t) { return Math.abs(t - cand); })) : Infinity;
        if (dmin > bestD) { bestD = dmin; best = cand; }
        if (bestD > GAP * 1.6) break;
      }
      return best;
    }
    function el(tag, attrs) {
      var n = document.createElementNS(NS, tag);
      for (var k in attrs) n.setAttribute(k, attrs[k]);
      return n;
    }
    function spawnBall() {
      var color = ballColors[colorI++ % ballColors.length];
      var g = el("g", { style: "cursor:pointer", opacity: "1" });
      g.appendChild(el("circle", { r: "15", cy: "4", fill: "rgba(20,81,78,.14)" }));
      g.appendChild(el("circle", { r: "14", fill: color, stroke: "rgba(0,0,0,.12)", "stroke-width": "1" }));
      g.appendChild(el("circle", { r: "4.5", cx: "-4.5", cy: "-4.5", fill: "rgba(255,255,255,.65)" }));
      var ball = { g: g, len: enterLen, slot: pickSlot(), moving: false, color: color };
      g.addEventListener("click", function () { onBallClick(ball); });
      layer.appendChild(g);
      balls.push(ball);
      return ball;
    }
    function burst(x, y, color) {
      for (var i = 0; i < 10; i++) {
        var a = (Math.PI * 2 * i) / 10 + Math.random() * 0.35;
        var sp = 2.2 + Math.random() * 2.4;
        var c = el("circle", { r: (2 + Math.random() * 2.4).toFixed(1), fill: i % 3 === 0 ? "#FDF8F1" : color });
        layer.appendChild(c);
        sparks.push({ c: c, x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 0.8, life: 1 });
      }
    }
    function onBallClick(ball) {
      if (ball.moving) {
        ball.moving = false;
        ball.slot = ball.len;
        var p = path.getPointAtLength(ball.len);
        burst(p.x, p.y, ball.color);
        return;
      }
      ball.moving = true;
      spawnBall();
    }
    function step() {
      var contact = GAP * 0.66;
      for (var idx = 0; idx < balls.length; idx++) {
        var b = balls[idx];
        if (b.moving) {
          b.len += 2.6;
          var hit = balls.find(function (o) { return o !== b && !o.moving && !o.remove && o.len > b.len - contact * 0.5 && o.len - b.len < contact; });
          if (hit) {
            b.moving = false;
            b.slot = hit.len - contact;
            hit.moving = true;
            var mp = path.getPointAtLength((b.len + hit.len) / 2);
            burst(mp.x, mp.y, hit.color);
          } else if (b.len >= endLen) { b.g.remove(); b.remove = true; }
        } else {
          var d = b.slot - b.len;
          if (Math.abs(d) > 0.4) {
            var stepLen = Math.sign(d) * Math.max(0.7, Math.min(3.2, Math.abs(d) * 0.045));
            var next = b.len + stepLen;
            var blocker = balls.find(function (o) { return o !== b && !o.remove && Math.abs(o.len - next) < contact && Math.abs(o.len - b.len) >= Math.abs(o.len - next); });
            if (blocker) b.slot = blocker.len - Math.sign(stepLen) * contact;
            else b.len = next;
          } else b.len = b.slot;
        }
        var p2 = path.getPointAtLength(b.len);
        b.g.setAttribute("transform", "translate(" + p2.x + "," + p2.y + ")");
      }
      balls = balls.filter(function (b) { return !b.remove; });
      if (sparks.length) {
        for (var si = 0; si < sparks.length; si++) {
          var s = sparks[si];
          s.vy += 0.15;
          s.x += s.vx; s.y += s.vy;
          s.life -= 0.026;
          s.c.setAttribute("transform", "translate(" + s.x + "," + s.y + ")");
          s.c.setAttribute("opacity", Math.max(0, s.life).toFixed(2));
          if (s.life <= 0) s.c.remove();
        }
        sparks = sparks.filter(function (s) { return s.life > 0; });
      }
      rafId = requestAnimationFrame(step);
    }

    layer.innerHTML = "";
    measure();
    for (var i0 = 0; i0 < 4; i0++) { var b0 = spawnBall(); b0.len = b0.slot; }
    var onResize = function () { measure(); };
    window.addEventListener("resize", onResize);
    rafId = requestAnimationFrame(step);

    ribbon = {
      destroy: function () {
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", onResize);
        layer.innerHTML = "";
        balls = []; sparks = [];
      }
    };
  }

  function stopRibbon() {
    if (ribbon) { ribbon.destroy(); ribbon = null; }
  }

  var mq = window.matchMedia("(min-width:1024px)");
  function handleMq(e) { if (e.matches) startRibbon(); else stopRibbon(); }
  if (mq.addEventListener) mq.addEventListener("change", handleMq);
  else mq.addListener(handleMq);
  if (mq.matches) startRibbon();
})();
