export function HeroWaves() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="50%" stopColor="hsl(var(--accent))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" />
        </linearGradient>
        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--accent))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g className="wave-animated" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <path
          d="M0,450 C200,350 400,550 600,450 C800,350 1000,550 1200,450 C1400,350 1600,550 1800,450"
          stroke="url(#waveGradient1)"
          strokeWidth="4"
          fill="none"
          filter="url(#glow)"
          opacity="0.8"
        />
        <path
          d="M0,500 C250,600 450,400 650,500 C850,600 1050,400 1250,500 C1450,600 1650,400 1850,500"
          stroke="url(#waveGradient2)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          opacity="0.6"
        />
         <path
          d="M0,550 C300,500 500,600 700,550 C900,500 1100,600 1300,550 C1500,500 1700,600 1900,550"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}
