// Stylized geometric fox mascot — replaces AI-generated illustration
// Pure SVG, simple shapes, animated (blink, wave, ear twitch)

const FoxMascot = ({ size = 280, playful = 0.5, accent = "#3B82C4" }) => {
  const [blink, setBlink] = React.useState(false);
  const [wave, setWave] = React.useState(false);

  React.useEffect(() => {
    const blinkLoop = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 3200 + Math.random() * 1500);
    const waveLoop = setInterval(() => {
      setWave(true);
      setTimeout(() => setWave(false), 1400);
    }, 4800);
    return () => {
      clearInterval(blinkLoop);
      clearInterval(waveLoop);
    };
  }, []);

  // Color palette — warm fox orange + cream + accent
  const orange = "#E67A47";
  const orangeDark = "#C45F2E";
  const cream = "#FAF5EC";
  const ink = "#1F2A44";

  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      style={{ display: "block", overflow: "visible" }}
      aria-label="Maskot Zvídavé lišky"
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor={cream} stopOpacity="1" />
          <stop offset="100%" stopColor={cream} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="furGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={orange} />
          <stop offset="100%" stopColor={orangeDark} />
        </linearGradient>
      </defs>

      {/* Soft background halo */}
      <circle cx="200" cy="200" r="180" fill="url(#bgGrad)" />

      {/* Decorative dotted ring — subtle */}
      <circle
        cx="200"
        cy="200"
        r="155"
        fill="none"
        stroke={accent}
        strokeOpacity={0.18}
        strokeWidth="1.5"
        strokeDasharray="2 8"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 200 200"
          to="360 200 200"
          dur="60s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Floating accent shapes */}
      <g opacity={0.7}>
        <circle cx="80" cy="130" r="4" fill={accent}>
          <animate attributeName="cy" values="130;120;130" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="320" cy="110" r="3" fill={orange}>
          <animate attributeName="cy" values="110;100;110" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <rect x="60" y="280" width="6" height="6" fill={accent} transform="rotate(45 63 283)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 63 283"
            to="360 63 283"
            dur="8s"
            repeatCount="indefinite"
          />
        </rect>
        <path d="M 330 290 L 336 296 L 330 302 L 324 296 Z" fill={orange} opacity="0.6" />
      </g>

      {/* Wave hand (behind body) */}
      <g
        style={{
          transformOrigin: "275px 230px",
          transform: wave ? "rotate(-25deg)" : "rotate(-5deg)",
          transition: "transform 0.4s cubic-bezier(.34,1.56,.64,1)",
        }}
      >
        <ellipse cx="285" cy="215" rx="14" ry="22" fill="url(#furGrad)" transform="rotate(20 285 215)" />
        <circle cx="295" cy="200" r="14" fill={orange} />
        <circle cx="293" cy="198" r="10" fill={cream} opacity="0.3" />
      </g>

      {/* Body — rounded shape */}
      <path
        d="M 130 280 Q 130 220 200 220 Q 270 220 270 280 Q 270 340 200 340 Q 130 340 130 280 Z"
        fill="url(#furGrad)"
      />
      {/* Belly */}
      <ellipse cx="200" cy="295" rx="42" ry="38" fill={cream} />

      {/* Scarf — accent color */}
      <path
        d="M 145 250 Q 200 270 255 250 L 255 268 Q 200 285 145 268 Z"
        fill={accent}
      />
      <path
        d="M 145 250 Q 200 270 255 250 L 255 268 Q 200 285 145 268 Z"
        fill="white"
        opacity="0.15"
      />
      {/* Scarf tail */}
      <path
        d="M 240 262 L 258 305 L 246 308 L 232 268 Z"
        fill={accent}
      />

      {/* Tiny book in paw */}
      <g transform="translate(165 280)">
        <rect x="0" y="0" width="38" height="28" rx="3" fill={ink} />
        <rect x="2" y="2" width="34" height="24" rx="2" fill="#F4E4C1" />
        <line x1="19" y1="2" x2="19" y2="26" stroke={ink} strokeWidth="0.8" />
        <text x="9" y="18" fontFamily="Georgia, serif" fontSize="9" fill={ink} fontWeight="700">A</text>
        <text x="24" y="18" fontFamily="Georgia, serif" fontSize="9" fill={ink} fontWeight="700">B</text>
      </g>

      {/* Head */}
      <g style={{
        transformOrigin: "200px 160px",
        animation: "foxBob 4s ease-in-out infinite"
      }}>
        {/* Ears */}
        <path d="M 145 130 L 130 80 L 175 110 Z" fill="url(#furGrad)" />
        <path d="M 145 130 L 138 95 L 168 115 Z" fill={ink} opacity="0.4" />
        <path d="M 255 130 L 270 80 L 225 110 Z" fill="url(#furGrad)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 250 110; -8 250 110; 0 250 110"
            keyTimes="0;0.5;1"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M 255 130 L 262 95 L 232 115 Z" fill={ink} opacity="0.4" />

        {/* Face — main shape */}
        <path
          d="M 140 160 Q 140 110 200 110 Q 260 110 260 160 Q 260 215 200 220 Q 140 215 140 160 Z"
          fill="url(#furGrad)"
        />

        {/* Cheek/snout cream area */}
        <path
          d="M 160 175 Q 160 145 200 145 Q 240 145 240 175 Q 240 205 200 210 Q 160 205 160 175 Z"
          fill={cream}
        />

        {/* Cheek blush */}
        <ellipse cx="165" cy="180" rx="10" ry="6" fill="#F4A88A" opacity="0.55" />
        <ellipse cx="235" cy="180" rx="10" ry="6" fill="#F4A88A" opacity="0.55" />

        {/* Eyes */}
        <g>
          <ellipse
            cx="180"
            cy="165"
            rx="6"
            ry={blink ? 0.5 : 8}
            fill={ink}
            style={{ transition: "ry 0.08s" }}
          />
          <ellipse
            cx="220"
            cy="165"
            rx="6"
            ry={blink ? 0.5 : 8}
            fill={ink}
            style={{ transition: "ry 0.08s" }}
          />
          {!blink && (
            <>
              <circle cx="182" cy="163" r="2" fill="white" />
              <circle cx="222" cy="163" r="2" fill="white" />
            </>
          )}
        </g>

        {/* Nose */}
        <path
          d="M 195 188 Q 200 184 205 188 Q 205 193 200 195 Q 195 193 195 188 Z"
          fill={ink}
        />
        {/* Mouth */}
        <path
          d="M 200 195 Q 200 200 195 202 M 200 195 Q 200 200 205 202"
          fill="none"
          stroke={ink}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Tail — peeks behind */}
      <path
        d="M 130 290 Q 90 270 80 230 Q 75 215 90 220 Q 110 240 130 270 Z"
        fill="url(#furGrad)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 110 270; 6 110 270; 0 110 270; -3 110 270; 0 110 270"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M 92 232 Q 85 222 95 222 Q 102 228 100 238 Z"
        fill={cream}
      />

      <style>{`
        @keyframes foxBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(-1deg); }
        }
      `}</style>
    </svg>
  );
};

window.FoxMascot = FoxMascot;
