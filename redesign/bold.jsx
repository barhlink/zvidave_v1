// Bold variant — more energy, geometric shapes, larger type, layered visuals
// Same content/structure but more visual rhythm and playfulness

const boldGames = [
{ id: 1, title: "Vrstvička", subject: "Informatika", grade: "3.–5.", duration: "15 min", glyph: "◐", color: "#3B82C4" },
{ id: 2, title: "Zlomková zoo 1", subject: "Matematika", grade: "5.", duration: "30 min", glyph: "½", color: "#5BB1D9" },
{ id: 3, title: "Zlomková zoo 2", subject: "Matematika", grade: "5.", duration: "30 min", glyph: "⅓", color: "#5BB1D9" },
{ id: 4, soon: true, glyph: "+", color: "#5BB1D9" }];


const boldTesti = [
{ quote: "Děti se na hodinu těší. Hlavolamy s liškou jsme zařadili jako odměnu po cvičení a najednou se počítá rád.", author: "Mgr. Pavla H.", role: "učitelka 3. třídy, ZŠ Kunratice" },
{ quote: "Konečně něco, co můžu dceři pustit bez výčitek. Žádné reklamy, žádné nákupy — jen úlohy přiměřené věku.", author: "Tomáš V.", role: "rodič, Brno" },
{ quote: "Bludiště pro robota mi pomohlo vysvětlit cyklus a podmínku tak, aby to pochopily i druháci.", author: "Mgr. Jana S.", role: "učitelka informatiky" }];


const BoldVariant = ({ accent = "#3B82C4", dark = false, playful = 0.75 }) => {
  const [filter, setFilter] = React.useState("Vše");
  const [tIdx, setTIdx] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setTIdx((i) => (i + 1) % boldTesti.length), 6500);
    return () => clearInterval(id);
  }, []);

  const subjects = ["Vše", "Matematika", "Informatika", "Přírodověda"];
  const filtered = filter === "Vše" ? boldGames : boldGames.filter((g) => g.soon || g.subject === filter);

  const palette = dark ?
  { bg: "#0F1320", surface: "#171C2C", text: "#F2EFE8", muted: "#8A93AD", border: "rgba(255,255,255,0.1)", soft: "#1E2538", ink: "#F2EFE8" } :
  { bg: "#FAF6EE", surface: "#FFFFFF", text: "#1A2444", muted: "#5C6478", border: "rgba(26,36,68,0.10)", soft: "#F2EBDB", ink: "#1A2444" };

  return (
    <div className="bv-root" style={{
      "--accent": accent,
      "--bg": palette.bg,
      "--surface": palette.surface,
      "--text": palette.text,
      "--muted": palette.muted,
      "--border": palette.border,
      "--soft": palette.soft,
      "--ink": palette.ink
    }}>
      {/* NAV */}
      <header className="bv-nav">
        <div className="bv-nav-inner">
          <a href="#" className="bv-logo">
            <span className="bv-logo-text"><em>Zvídavě</em><span className="bv-logo-tld">.cz</span></span>
          </a>
          <nav className="bv-nav-links">
            <a href="#about">O PROJEKTU</a>
            <a href="#games">HRY</a>
            <a href="#contact">KONTAKT</a>
          </nav>
          <div className="bv-nav-right">
            <div className="bv-lang">
              <button className="active">CZ</button>
              <button>EN</button>
              <button>FR</button>
              <button>UK</button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bv-hero">
        {/* Background blobs */}
        <div className="bv-hero-blob bv-blob-1" />
        <div className="bv-hero-blob bv-blob-2" />
        <svg className="bv-hero-grid" width="100%" height="100%" preserveAspectRatio="none">
          <pattern id="bvgrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--ink)" opacity="0.06" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bvgrid)" />
        </svg>

        <div className="bv-hero-grid-layout">
          <div className="bv-hero-left">
            <div className="bv-eyebrow">
              <span className="bv-eyebrow-diamond">◆</span>
              VÝUKOVÉ HRY PRO ZVÍDAVÉ DĚTI
            </div>
            <h1 className="bv-h1">
              <span className="bv-h1-line">
                Učení
                <span className="bv-h1-mark">
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M2 14 Q 30 4 50 12 T 98 8" stroke="var(--accent)" strokeWidth="3" fill="none" strokeLinecap="round" /></svg>
                </span>
              </span>
              <span className="bv-h1-line">
                které <em>baví</em>
                <span className="bv-h1-sparkle">
                  <svg viewBox="0 0 24 24" width="36" height="36">
                    <path d="M12 2 L13.5 9 L20 10.5 L13.5 12 L12 19 L10.5 12 L4 10.5 L10.5 9 Z" fill="var(--accent)" />
                  </svg>
                </span>
              </span>
            </h1>
            <p className="bv-lede">Interaktivní hry a cvičení pro žáky prvního stupně. Matematika a informatika — v podobě, na kterou se děti těší.

            </p>
            <div className="bv-cta-row">
              <a href="#games" className="bv-btn bv-btn-primary">
                PROZKOUMAT HRY
              </a>
              <a href="#about" className="bv-btn bv-btn-ghost">VÍCE O PROJEKTU</a>
            </div>
            <div className="bv-trust">
              <div>
                <strong></strong> 
                <div className="bv-trust-stars"> <span></span></div>
              </div>
            </div>
          </div>

          <div className="bv-hero-right">
            <div className="bv-stack">
              <div className="bv-mascot-card">
                <div className="bv-mascot-bg">
                  <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="none">
                    <circle cx="100" cy="100" r="90" fill="var(--accent)" opacity="0.08" />
                    <circle cx="100" cy="100" r="70" fill="var(--accent)" opacity="0.06" />
                  </svg>
                </div>
                <img src="assets/zvidave-fox.png" alt="Zvídavá liška" style={{ width: 280, height: 280, objectFit: "contain", display: "block", position: "relative", zIndex: 1 }} />
                <div className="bv-mascot-tag"></div>
              </div>
              <div className="bv-game-floater">
                <MiniGame accent={accent} playful={playful} />
              </div>
              <div className="bv-stat-chip bv-stat-1">
                <span className="bv-stat-lbl" style={{ marginTop: 0, marginBottom: 2 }}>nové hry</span>
                <span className="bv-stat-num" style={{ fontSize: 22 }}>každý měsíc</span>
              </div>
              <div className="bv-stat-chip bv-stat-2">
                <span className="bv-stat-glyph">✓</span>
                <span className="bv-stat-lbl">bez registrace</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE strip */}
      <div className="bv-marquee">
        <div className="bv-marquee-track">
          {[...Array(2)].map((_, k) =>
          <div key={k} className="bv-marquee-set">
              <span>+ Matematika</span>
              <span className="bv-marquee-dot">●</span>
              <span>+ Informatika</span>
              <span className="bv-marquee-dot">●</span>
              <span>+ Pracovní listy</span>
              <span className="bv-marquee-dot">●</span>
              <span>+ Pro tabuli</span>
              <span className="bv-marquee-dot">●</span>
            </div>
          )}
        </div>
      </div>

      {/* HOW IT WORKS — bolder, illustrated */}
      <section className="bv-how" id="about">
        <div className="bv-section-head">
          <span className="bv-section-eyebrow"><span className="bv-eyebrow-bar" />JAK TO FUNGUJE</span>
          <h2 className="bv-h2">Tři kroky, žádné <em>překážky</em></h2>
        </div>
        <div className="bv-steps">
          {[
          { n: "01", t: "Vyber předmět", d: "Filtry podle ročníku, předmětu a tématu. Najdeš za 30 vteřin to, co potřebuješ.", color: "#5BB1D9", icon: "filter" },
          { n: "02", t: "Sdílej se třídou", d: "Pošli odkaz dětem nebo promítni hru přímo na interaktivní tabuli. Funguje i offline po prvním načtení.", color: "#C9A961", icon: "chart" },
          { n: "03", t: "Pusť se do hry", d: "Bez registrace, bez stahování, bez reklam. Spustíš v prohlížeči.", color: "#7DA87A", icon: "play" }].
          map((s, i) =>
          <div key={i} className="bv-step" style={{ "--step-color": s.color }}>
              <div className="bv-step-num">
                <span>{s.n}</span>
              </div>
              <div className="bv-step-illust">
                {s.icon === "filter" &&
              <svg viewBox="0 0 80 80" width="64" height="64">
                    <rect x="8" y="20" width="64" height="6" rx="3" fill={s.color} />
                    <rect x="16" y="36" width="48" height="6" rx="3" fill={s.color} opacity="0.5" />
                    <rect x="24" y="52" width="32" height="6" rx="3" fill={s.color} opacity="0.3" />
                    <circle cx="20" cy="23" r="6" fill="var(--surface)" stroke={s.color} strokeWidth="2" />
                    <circle cx="50" cy="39" r="6" fill="var(--surface)" stroke={s.color} strokeWidth="2" opacity="0.5" />
                    <circle cx="36" cy="55" r="6" fill="var(--surface)" stroke={s.color} strokeWidth="2" opacity="0.3" />
                  </svg>
              }
                {s.icon === "play" &&
              <svg viewBox="0 0 80 80" width="64" height="64">
                    <circle cx="40" cy="40" r="32" fill={s.color} />
                    <path d="M32 26 L56 40 L32 54 Z" fill="var(--surface)" />
                  </svg>
              }
                {s.icon === "chart" &&
              <svg viewBox="0 0 80 80" width="64" height="64">
                    <path d="M22 28 L40 40 M58 28 L40 40 M40 40 L40 56" stroke={s.color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <circle cx="22" cy="28" r="9" fill={s.color} opacity="0.4" />
                    <circle cx="58" cy="28" r="9" fill={s.color} opacity="0.7" />
                    <circle cx="40" cy="40" r="9" fill={s.color} />
                    <circle cx="40" cy="60" r="9" fill={s.color} opacity="0.5" />
                    <path d="M37 40 L43 40 M40 37 L40 43" stroke="var(--surface)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
              }
              </div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          )}
        </div>
      </section>

      {/* GAMES */}
      <section className="bv-games" id="games">
        <div className="bv-games-head">
          <div>
            <span className="bv-section-eyebrow"><span className="bv-eyebrow-bar" />KATALOG</span>
            <h2 className="bv-h2"><em>Hry</em> testované<br />ve třídě</h2>
          </div>
          <p className="bv-games-lede">
            Každá hra projde testováním ve třídě. Žádné reklamy, žádné mikrotransakce — jen čisté učení.
          </p>
        </div>

        <div className="bv-filters">
          {subjects.map((s) =>
          <button key={s} className={`bv-filter ${filter === s ? "active" : ""}`} onClick={() => setFilter(s)}>
              {s}
            </button>
          )}
        </div>

        <div className="bv-game-grid">
          {filtered.map((g, i) =>
          g.soon ?
          <article key={g.id} className="bv-game-card bv-game-soon" style={{ "--card-color": g.color }}>
              <div className="bv-game-cover">
                <div className="bv-game-shapes">
                  {[...Array(3)].map((_, k) =>
                <span key={k} className={`bv-game-shape bv-shape-${k}`}>{g.glyph}</span>
                )}
                  <span className="bv-game-glyph">{g.glyph}</span>
                </div>
                <span className="bv-game-soon-badge">JIŽ BRZY</span>
              </div>
              <div className="bv-game-meta">
                <h3>Připravujeme</h3>
                <div className="bv-game-soon-note">Nová hra ve výrobě.</div>
              </div>
            </article> :

          <article key={g.id} className="bv-game-card" style={{ "--card-color": g.color }}>
              <div className="bv-game-cover">
                <div className="bv-game-shapes">
                  {[...Array(3)].map((_, k) =>
                <span key={k} className={`bv-game-shape bv-shape-${k}`}>{g.glyph}</span>
                )}
                  <span className="bv-game-glyph">{g.glyph}</span>
                </div>
                <span className="bv-game-grade">{g.grade}.&nbsp;tř.</span>
              </div>
              <div className="bv-game-meta">
                <div className="bv-game-row">
                  <span className="bv-game-subj">{g.subject}</span>
                  <span className="bv-game-time">⏱ {g.duration}</span>
                </div>
                <h3>{g.title}</h3>
                <div className="bv-game-play">
                  Hrát teď <span>→</span>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* TEACHERS */}
      <section className="bv-teachers" id="teachers">
        <div className="bv-teachers-grid">
          <div className="bv-teachers-text">
            <span className="bv-section-eyebrow"><span className="bv-eyebrow-bar" />PRO UČITELE</span>
            <h2 className="bv-h2">Hotový materiál do <em>hodiny</em></h2>
            <p>Každá hra obsahuje stručný metodický list — co procvičuje, jak ji zařadit do výuky, návrhy zadání pro různé úrovně.</p>
            <ul className="bv-checklist">
              <li><span className="bv-check">✓</span> Bez registrace pro děti</li>
              <li><span className="bv-check">✓</span> Funguje na školních tabletech</li>
              <li><span className="bv-check">✓</span> RVP-kompatibilní zadání</li>
              <li><span className="bv-check">✓</span> Tisknutelné pracovní listy</li>
            </ul>
            <a href="#" className="bv-btn bv-btn-primary">
              <span>Stáhnout metodiku</span>
              <span className="bv-btn-arrow">↓</span>
            </a>
          </div>
          <div className="bv-teachers-art">
            <div className="bv-mock-stack">
              <div className="bv-mock-sheet bv-mock-back">
                <div className="bv-mock-bar bv-mock-bar-lg" />
                <div className="bv-mock-bar" />
                <div className="bv-mock-bar bv-mock-bar-md" />
              </div>
              <div className="bv-mock-sheet bv-mock-front">
                <div className="bv-mock-tag">METODICKÝ LIST</div>
                <div className="bv-mock-title">Násobilka v lese</div>
                <div className="bv-mock-sub">2.–3. třída · 10 min</div>
                <div className="bv-mock-grid">
                  {[1, 2, 3, 4, 5, 6].map((n) =>
                  <div key={n} className="bv-mock-cell">
                      <span>{n}×{n}</span>
                      <strong>{n * n}</strong>
                    </div>
                  )}
                </div>
                <div className="bv-mock-foot">
                  <div className="bv-mock-progress"><div style={{ width: "68%" }} /></div>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — Zpětná vazba */}
      <footer className="bv-footer" id="contact">
        <div className="bv-footer-inner">
          <span className="bv-footer-rule" />
          <h2 className="bv-footer-h">Zpětná vazba</h2>
          <p className="bv-footer-lede">Každý názor je pro mě cenný — ať už jste učitel, rodič nebo dítě, které si hru vyzkoušelo. Moc si vaší zpětné vazby vážím a pomáhá mi hry zlepšovat.</p>
          <a href="mailto:ahoj@zvidave.cz" className="bv-footer-btn">
            <span>NAPSAT ZPRÁVU</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
          <p className="bv-footer-note">Odpovídám obvykle do 48 hodin.</p>
        </div>
        <div className="bv-footer-bar">
          <span className="bv-footer-logo"><em>Zvídavě</em><span>.cz</span></span>
          <span className="bv-footer-meta">© 2026 Zvídavě · Vše zdarma · Vyrobeno s <span className="bv-heart">♥</span> pro zvídavé děti</span>
        </div>
      </footer>
    </div>);

};

window.BoldVariant = BoldVariant;