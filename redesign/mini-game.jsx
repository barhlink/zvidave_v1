// Mini playable math game for hero — "Najdi součet"
// Pick numbers that sum to target. Quick, low friction.

const MiniGame = ({ accent = "#3B82C4", playful = 0.5 }) => {
  const targets = [10, 12, 15, 8, 11, 13];
  const [round, setRound] = React.useState(0);
  const [picked, setPicked] = React.useState([]);
  const [solved, setSolved] = React.useState(false);
  const [streak, setStreak] = React.useState(0);

  const target = targets[round % targets.length];
  // Generate numbers that contain a valid pair summing to target
  const numbers = React.useMemo(() => {
    const a = Math.max(1, Math.floor(target / 2) - 1 - (round % 3));
    const b = target - a;
    const decoys = [];
    while (decoys.length < 4) {
      const n = 1 + Math.floor(Math.random() * (target - 1));
      if (n !== a && n !== b && !decoys.includes(n)) decoys.push(n);
    }
    const all = [a, b, ...decoys].sort(() => Math.random() - 0.5);
    return all;
  }, [round, target]);

  const sum = picked.reduce((s, i) => s + numbers[i], 0);

  const togglePick = (i) => {
    if (solved) return;
    setPicked((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  React.useEffect(() => {
    if (sum === target && picked.length >= 2) {
      setSolved(true);
      setStreak((s) => s + 1);
      setTimeout(() => {
        setRound((r) => r + 1);
        setPicked([]);
        setSolved(false);
      }, 1100);
    }
  }, [sum, target, picked.length]);

  return (
    <div className="mini-game" style={{ "--accent": accent }}>
      <div className="mg-head">
        <span className="mg-label">MINI HRA · 1. STUPEŇ</span>
        <span className="mg-streak">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M6 1 L7.5 4.5 L11 5 L8.5 7.5 L9 11 L6 9 L3 11 L3.5 7.5 L1 5 L4.5 4.5 Z" fill={accent} />
          </svg>
          {streak} v řadě
        </span>
      </div>
      <div className="mg-prompt">
        Najdi čísla, jejichž součet je <strong>{target}</strong>
      </div>
      <div className="mg-numbers">
        {numbers.map((n, i) => {
          const isPicked = picked.includes(i);
          return (
            <button
              key={`${round}-${i}`}
              className={`mg-num ${isPicked ? "picked" : ""} ${solved && isPicked ? "solved" : ""}`}
              onClick={() => togglePick(i)}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div className="mg-footer">
        <div className="mg-sum">
          Tvůj součet: <strong>{sum}</strong>
          {sum > target && <span className="mg-hint"> · moc</span>}
          {solved && <span className="mg-hint mg-ok"> · výborně!</span>}
        </div>
        <button
          className="mg-skip"
          onClick={() => {
            setRound((r) => r + 1);
            setPicked([]);
            setSolved(false);
          }}
        >
          Další ↻
        </button>
      </div>
    </div>
  );
};

window.MiniGame = MiniGame;
