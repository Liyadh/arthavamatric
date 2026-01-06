import type { SVGProps } from "react";

export function PiCyclicalTimeSeries(props: SVGProps<SVGSVGElement>) {
  const particles = [
    { cx: 250, cy: 358, r: 3, color: "hsl(var(--primary))" },
    { cx: 480, cy: 450, r: 4, color: "hsl(var(--accent))", glow: true },
    { cx: 720, cy: 300, r: 3, color: "hsl(var(--primary))" },
    { cx: 950, cy: 438, r: 4, color: "hsl(var(--accent))", glow: true },
    { cx: 1180, cy: 330, r: 3, color: "#22c55e" },
  ];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 810"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <defs>
        <linearGradient id="pi-bg-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#050712" />
          <stop offset="50%" stopColor="#071628" />
          <stop offset="100%" stopColor="#020309" />
        </linearGradient>
        <radialGradient id="pi-vignette" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
        </radialGradient>
        <pattern id="pi-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="hsla(0,0%,100%,0.04)" strokeWidth="0.5"/>
        </pattern>
        <linearGradient id="pi-wave-gradient-a" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2DD4FF" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#FF9F1C" />
        </linearGradient>
         <linearGradient id="pi-wave-gradient-b" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="pi-wave-gradient-c" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#FACC15" />
        </linearGradient>
        <filter id="pi-wave-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="pi-particle-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="particleBlur" />
           <feMerge>
            <feMergeNode in="particleBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
         <filter id="pi-text-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="textBlur" />
           <feMerge>
            <feMergeNode in="textBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1440" height="810" fill="url(#pi-bg-gradient)" />
      <rect width="1440" height="810" fill="url(#pi-grid)" />
      <rect width="1440" height="810" fill="url(#pi-vignette)" />

      <g opacity="0.7">
        <path d="M0 450 C 180 550, 540 350, 720 450 S 1260 550, 1440 450" stroke="#4f5155" strokeWidth="1" fill="none" strokeDasharray="2 3" />
        <path d="M0 420 C 180 320, 540 520, 720 420 S 1260 320, 1440 420" stroke="url(#pi-wave-gradient-c)" strokeWidth="2" fill="none" opacity="0.6" />
      </g>

      <g filter="url(#pi-wave-glow)">
        <path d="M0 400 C 180 250, 540 550, 720 400 S 1260 250, 1440 400" stroke="url(#pi-wave-gradient-a)" strokeWidth="4" fill="none" />
        <path d="M0 380 C 120 580, 360 180, 480 380 S 840 580, 960 380 S 1320 180, 1440 380" stroke="url(#pi-wave-gradient-b)" strokeWidth="3" fill="none" opacity="0.7" />
        <path d="M0 480 C 240 380, 480 580, 720 480 S 1200 380, 1440 480" stroke="url(#pi-wave-gradient-c)" strokeWidth="2.5" fill="none" opacity="0.5" />
        <path d="M0 350 C 360 450, 1080 250, 1440 350" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" opacity="0.4" />
      </g>

      <g>
        {particles.map((p, i) => (
            <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.color} filter={p.glow ? "url(#pi-particle-glow)" : "none"} />
        ))}
      </g>
      
      <g transform="translate(850, 405)" textAnchor="middle">
        <text fontFamily="Space Grotesk, sans-serif" fontSize="180" fill="#F9FAFB" filter="url(#pi-text-glow)" dy="50">π</text>
        <text fontFamily="Inter, sans-serif" fontSize="14" fill="#9CA3AF" dy="120">2π cycles</text>
      </g>

      <g stroke="#9CA3AF" strokeWidth="0.5" opacity="0.3">
        <line x1="480" x2="480" y1="450" y2="750" />
        <line x1="960" x2="960" y1="380" y2="750" />
        <text x="480" y="770" textAnchor="middle" fill="#9CA3AF" fontSize="12">t₀ + π</text>
        <text x="960" y="770" textAnchor="middle" fill="#9CA3AF" fontSize="12">t₀ + 2π</text>
      </g>
      <line x1="0" y1="750" x2="1440" y2="750" stroke="#9CA3AF" strokeWidth="0.2" />

    </svg>
  );
}
