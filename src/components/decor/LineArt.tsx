/**
 * Abstract decorative marks inspired by the continuous rounded line of the
 * Alkhalil monogram — never the logo itself, just its visual language.
 */

export function FlowingLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 420"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M-20 320
           C 60 320, 60 120, 140 120
           C 220 120, 220 320, 300 320
           C 380 320, 380 100, 460 100
           C 540 100, 540 340, 620 340
           C 680 340, 690 220, 760 180
           C 810 152, 860 170, 920 200"
        stroke="currentColor"
        strokeWidth="26"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M-10 40
           C 60 40, 60 140, 120 140
           C 180 140, 180 40, 240 40
           C 280 40, 300 70, 310 110"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PelletMotif({ className = "" }: { className?: string }) {
  const pellets = [
    [20, 30, 14],
    [60, 70, 22],
    [110, 40, 10],
    [140, 90, 16],
    [190, 55, 12],
    [220, 20, 18],
  ];
  return (
    <svg
      viewBox="0 0 240 110"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {pellets.map(([cx, cy, r], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill="currentColor"
          opacity={0.5 + (i % 3) * 0.15}
        />
      ))}
    </svg>
  );
}

export function LinkNode({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="18" cy="30" r="10" stroke="currentColor" strokeWidth="4" />
      <circle cx="102" cy="30" r="10" stroke="currentColor" strokeWidth="4" />
      <path d="M28 30 H92" stroke="currentColor" strokeWidth="4" strokeDasharray="2 10" strokeLinecap="round" />
    </svg>
  );
}
