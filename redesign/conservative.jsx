// Conservative variant — calm, sophisticated, restrained playfulness
// Audience: parents + teachers first, kids via accents

const games = [
  { id: 1, title: "Násobilka v lese", subject: "Matematika", grade: "2.–3. třída", duration: "10 min", emoji: "×", color: "#3B82C4" },
  { id: 2, title: "Poznej zvíře podle stopy", subject: "Přírodověda", grade: "1.–3. třída", duration: "8 min", emoji: "❋", color: "#5BA876" },
  { id: 3, title: "Bludiště pro robota", subject: "Informatika", grade: "3.–5. třída", duration: "15 min", emoji: "↗", color: "#7B6FCB" },
  { id: 4, title: "Vážení medvídků", subject: "Logika", grade: "1.–2. třída", duration: "7 min", emoji: "◆", color: "#D89A3F" },
  { id: 5, title: "Slovní úlohy s liškou", subject: "Matematika", grade: "3.–5. třída", duration: "12 min", emoji: "+", color: "#3B82C4" },
  { id: 6, title: "Třídění odpadu", subject: "Přírodověda", grade: "2.–4. třída", duration: "10 min", emoji: "❋", color: "#5BA876" },
  { id: 7, title: "Šifry a tajné kódy", subject: "Informatika", grade: "4.–5. třída", duration: "15 min", emoji: "◐", color: "#7B6FCB" },
  { id: 8, title: "Sudoku pro malé", subject: "Logika", grade: "2.–4. třída", duration: "10 min", emoji: "▦", color: "#D89A3F" },
];

const subjects = ["Vše", "Matematika", "Informatika", "Přírodověda", "Logika"];

const testimonials = [
  {
    quote: "Děti se na hodinu těší. Hlavolamy s liškou jsme zařadili jako odměnu po cvičení a najednou se počítá rád.",
    author: "Mgr. Pavla H.",
    role: "učitelka 3. třídy, ZŠ Kunratice",
  },
  {
    quote: "Konečně něco, co můžu dceři pustit bez výčitek. Žádné reklamy, žádné nákupy — jen úlohy přiměřené věku.",
    author: "Tomáš V.",
    role: "rodič, Brno",
  },
  {
    quote: "Bludiště pro robota mi pomohlo vysvětlit cyklus a podmínku tak, aby to pochopily i druháci.",
    author: "Mgr. Jana S.",
    role: "učitelka informatiky",
  },
];

const ConservativeVariant = ({ accent = "#3B82C4", dark = false, playful = 0.4 }) => {
  const [filter, setFilter] = React.useState("Vše");
  const [step, setStep] = React.useState(0);
  const [testimonialIdx, setTestimonialIdx] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 4), 2800);
    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => setTestimonialIdx((i) => (i + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);

  const filtered = filter === "Vše" ? games : games.filter((g) => g.subject === filter);

  const palette = dark
    ? { bg: "#13171F", surface: "#1B2029", text: "#E8EBF2", muted: "#8B93A8", border: "rgba(255,255,255,0.08)", soft: "#1F2530" }
    : { bg: "#FAF6EE", surface: "#FFFFFF", text: "#1A2238", muted: "#6B7388", border: "rgba(26,34,56,0.08)", soft: "#F2EBDB" };

  return (
    <div className="cv-root" style={{
      "--accent": accent,
      "--bg": palette.bg,
      "--surface": palette.surface,
      "--text": palette.text,
      "--muted": palette.muted,
      "--border": palette.border,
      "--soft": palette.soft,
      "--playful": playful,
    }}>
      {/* NAV */}
      <header className="cv-nav">
        <div className="cv-nav-inner">
          <a href="#" className="cv-logo">
            <span className="cv-logo-mark">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path d="M4 18 Q4 8 12 8 Q20 8 20 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M4 8 L8 4 L10 8 Z" fill="currentColor"/>
                <path d="M20 8 L16 4 L14 8 Z" fill="currentColor"/>
                <circle cx="9" cy="13" r="1.2" fill="currentColor"/>
                <circle cx="15" cy="13" r="1.2" fill="currentColor"/>
              </svg>
            </span>
            <span><em>Zvídavé</em>.cz</span>
          </a>
          <nav className="cv-nav-links">
            <a href="#about">O projektu</a>
            <a href="#games">Hry</a>
            <a href="#teachers">Pro učitele</a>
            <a href="#contact">Kontakt</a>
          </nav>
          <div className="cv-nav-right">
            <div className="cv-lang">
              <button className="active">CZ</button>
              <button>EN</button>
              <button>UK</button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="cv-hero">
        <div className="cv-hero-grid">
          <div className="cv-hero-text">
            <div className="cv-eyebrow">
              <span className="cv-eyebrow-dot" />
              VÝUKOVÉ HRY PRO ZVÍDAVÉ DĚTI
            </div>
            <h1 className="cv-h1">
              Učení,<br />které <em>baví</em>
            </h1>
            <p className="cv-lede">
              Interaktivní hry a cvičení pro žáky 1.&nbsp;stupně. Matematika, informatika a přírodověda — připravené učiteli, ověřené dětmi.
            </p>
            <div className="cv-cta-row">
              <a href="#games" className="cv-btn cv-btn-primary">
                Prozkoumat hry
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#about" className="cv-btn cv-btn-ghost">Více o projektu</a>
            </div>
            <div className="cv-trust">
              <div className="cv-trust-item">
                <strong>48</strong>
                <span>her zdarma</span>
              </div>
              <div className="cv-trust-divider" />
              <div className="cv-trust-item">
                <strong>1.–5.</strong>
                <span>třída</span>
              </div>
              <div className="cv-trust-divider" />
              <div className="cv-trust-item">
                <strong>320+</strong>
                <span>tříd používá</span>
              </div>
            </div>
          </div>

          <div className="cv-hero-art">
            <div className="cv-hero-art-bg">
              <div className="cv-hero-mascot">
                <FoxMascot size={260} accent={accent} playful={playful} />
              </div>
              <div className="cv-hero-game">
                <MiniGame accent={accent} playful={playful} />
              </div>
              <div className="cv-floater cv-floater-1">
                <span>π</span>
              </div>
              <div className="cv-floater cv-floater-2">
                <span>{`{ }`}</span>
              </div>
              <div className="cv-floater cv-floater-3">
                <span>❋</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="cv-how" id="about">
        <div className="cv-section-head">
          <span className="cv-section-eyebrow">JAK TO FUNGUJE</span>
          <h2 className="cv-h2">Tři kroky ke <em>chytřejšímu</em> odpoledni</h2>
        </div>
        <div className="cv-steps">
          {[
            { n: "01", t: "Vyberte předmět", d: "Matematika, informatika, přírodověda nebo logika. Filtrujte podle ročníku a tématu, ke kterému se chcete vrátit." },
            { n: "02", t: "Sdílejte se třídou", d: "Pošlete odkaz dětem nebo promítněte hru přímo na interaktivní tabuli. Funguje i offline po prvním načtení." },
            { n: "03", t: "Pusťte se do hry", d: "Bez registrace, bez stahování, bez reklam. Hraje se v prohlížeči — na tabletu, počítači i interaktivní tabuli." },
          ].map((s, i) => (
            <div key={i} className={`cv-step ${step === i ? "active" : ""}`} onMouseEnter={() => setStep(i)}>
              <div className="cv-step-num">{s.n}</div>
              <div className="cv-step-title">{s.t}</div>
              <div className="cv-step-desc">{s.d}</div>
              <div className="cv-step-line" />
            </div>
          ))}
        </div>
      </section>

      {/* GAMES */}
      <section className="cv-games" id="games">
        <div className="cv-section-head">
          <span className="cv-section-eyebrow">KATALOG HER</span>
          <h2 className="cv-h2">48 her, jeden <em>důvěryhodný</em> web</h2>
          <p className="cv-section-lede">Každá hra projde testováním ve třídě. Žádné reklamy, žádné mikrotransakce — jen čisté učení.</p>
        </div>

        <div className="cv-filters">
          {subjects.map((s) => (
            <button key={s} className={`cv-filter ${filter === s ? "active" : ""}`} onClick={() => setFilter(s)}>
              {s}
              {filter === s && <span className="cv-filter-count">{s === "Vše" ? games.length : games.filter(g => g.subject === s).length}</span>}
            </button>
          ))}
        </div>

        <div className="cv-game-grid">
          {filtered.map((g) => (
            <article key={g.id} className="cv-game-card">
              <div className="cv-game-cover" style={{ "--card-color": g.color }}>
                <div className="cv-game-pattern" />
                <span className="cv-game-glyph">{g.emoji}</span>
              </div>
              <div className="cv-game-meta">
                <div className="cv-game-tags">
                  <span className="cv-tag" style={{ color: g.color, borderColor: g.color }}>{g.subject}</span>
                  <span className="cv-tag-sub">{g.grade}</span>
                </div>
                <h3 className="cv-game-title">{g.title}</h3>
                <div className="cv-game-foot">
                  <span className="cv-game-time">⏱ {g.duration}</span>
                  <span className="cv-game-play">Hrát →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TEACHERS BAND */}
      <section className="cv-teachers" id="teachers">
        <div className="cv-teachers-inner">
          <div className="cv-teachers-text">
            <span className="cv-section-eyebrow">PRO UČITELE</span>
            <h2 className="cv-h2">Hotový materiál do <em>hodiny</em></h2>
            <p>
              Každá hra obsahuje stručný metodický list — co procvičuje, jak ji zařadit do výuky, návrhy zadání pro různé úrovně. K dispozici je tisknutelná verze i odkaz pro sdílení do třídy.
            </p>
            <ul className="cv-checklist">
              <li>Bez registrace pro děti</li>
              <li>Funguje na školních tabletech a Chromeboocích</li>
              <li>RVP-kompatibilní zadání</li>
              <li>Tisknutelné pracovní listy zdarma</li>
            </ul>
            <a href="#" className="cv-btn cv-btn-primary">
              Stáhnout metodiku (PDF)
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 2 V10 M3 7 L7 11 L11 7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div className="cv-teachers-art">
            <div className="cv-mock-sheet">
              <div className="cv-mock-head">
                <div className="cv-mock-title">Metodický list — Násobilka v lese</div>
                <div className="cv-mock-sub">2.–3. třída · 10 min · MAT</div>
              </div>
              <div className="cv-mock-rows">
                <div className="cv-mock-row"><span>Cíl</span><b>Procvičení malé násobilky 2–5</b></div>
                <div className="cv-mock-row"><span>RVP</span><b>M-3-1-04 numerace</b></div>
                <div className="cv-mock-row"><span>Pomůcky</span><b>Tablet / interaktivní tabule</b></div>
              </div>
              <div className="cv-mock-bars">
                <div className="cv-mock-bar"><div className="cv-mock-bar-fill" style={{ width: "70%", background: accent }} /></div>
                <div className="cv-mock-bar"><div className="cv-mock-bar-fill" style={{ width: "45%", background: "#5BA876" }} /></div>
                <div className="cv-mock-bar"><div className="cv-mock-bar-fill" style={{ width: "85%", background: "#D89A3F" }} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="cv-testi">
        <div className="cv-section-head">
          <span className="cv-section-eyebrow">CO ŘÍKAJÍ</span>
          <h2 className="cv-h2">Recenze z <em>třídy</em></h2>
        </div>
        <div className="cv-testi-stage">
          {testimonials.map((t, i) => (
            <figure key={i} className={`cv-testi-card ${i === testimonialIdx ? "active" : ""}`}>
              <blockquote>„{t.quote}"</blockquote>
              <figcaption>
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="cv-testi-dots">
          {testimonials.map((_, i) => (
            <button key={i} className={i === testimonialIdx ? "active" : ""} onClick={() => setTestimonialIdx(i)} aria-label={`Recenze ${i+1}`} />
          ))}
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="cv-cta" id="contact">
        <div className="cv-cta-inner">
          <div>
            <h2 className="cv-h2">Připojte se k <em>učení, které baví</em></h2>
            <p>Newsletter jednou za měsíc — nové hry, tipy do hodiny, zákulisí projektu. Žádný spam.</p>
          </div>
          <form className="cv-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="vase@adresa.cz" />
            <button type="submit" className="cv-btn cv-btn-primary">Odebírat</button>
          </form>
        </div>
        <div className="cv-foot">
          <div className="cv-foot-col">
            <strong><em>Zvídavé</em>.cz</strong>
            <p>Nezisková iniciativa pro lepší výuku na 1.&nbsp;stupni ZŠ. Praha · 2026.</p>
          </div>
          <div className="cv-foot-col">
            <span>Projekt</span>
            <a href="#">O nás</a>
            <a href="#">Tým</a>
            <a href="#">Pro tisk</a>
          </div>
          <div className="cv-foot-col">
            <span>Hry</span>
            <a href="#">Matematika</a>
            <a href="#">Informatika</a>
            <a href="#">Přírodověda</a>
          </div>
          <div className="cv-foot-col">
            <span>Kontakt</span>
            <a href="mailto:ahoj@zvidave.cz">ahoj@zvidave.cz</a>
            <a href="#">Pro učitele</a>
            <a href="#">Pro tisk</a>
          </div>
        </div>
      </section>
    </div>
  );
};

window.ConservativeVariant = ConservativeVariant;
