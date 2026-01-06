export function SectionDividerWave() {
  return (
    <svg width="100%" height="50" viewBox="0 0 1440 50" preserveAspectRatio="none">
       <defs>
        <linearGradient id="dividerWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary) / 0)" />
          <stop offset="50%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
        </linearGradient>
      </defs>
      <path
        d="M0,25 C200,10 400,40 600,25 C800,10 1000,40 1200,25 C1400,10 1600,40 1800,25"
        stroke="url(#dividerWaveGradient)"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
