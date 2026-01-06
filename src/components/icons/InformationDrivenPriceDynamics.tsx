import type { SVGProps } from "react";

export function InformationDrivenPriceDynamics(props: SVGProps<SVGSVGElement>) {
  const candles = [
    { x: 50, o: 300, c: 200, h: 180, l: 320 }, { x: 80, o: 200, c: 250, h: 180, l: 270 },
    { x: 110, o: 250, c: 150, h: 130, l: 260 }, { x: 140, o: 150, c: 180, h: 120, l: 200 },
    { x: 170, o: 180, c: 280, h: 170, l: 300 }, { x: 200, o: 280, c: 220, h: 210, l: 300 },
    { x: 230, o: 220, c: 320, h: 200, l: 340 }, { x: 260, o: 320, c: 400, h: 300, l: 420 },
    { x: 290, o: 400, c: 350, h: 330, l: 410 }, { x: 320, o: 350, c: 380, h: 330, l: 400 },
    { x: 350, o: 380, c: 300, h: 280, l: 390 }, { x: 380, o: 300, c: 350, h: 280, l: 370 },
    { x: 410, o: 350, c: 250, h: 230, l: 360 }, { x: 440, o: 250, c: 280, h: 240, l: 300 },
    { x: 470, o: 280, c: 380, h: 270, l: 400 }, { x: 500, o: 380, c: 320, h: 310, l: 400 },
    { x: 530, o: 320, c: 420, h: 300, l: 440 }, { x: 560, o: 420, c: 500, h: 400, l: 520 },
    { x: 590, o: 500, c: 450, h: 430, l: 510 }, { x: 620, o: 450, c: 480, h: 430, l: 500 },
  ];
  const particles = [
    { cx: 100, cy: 250, r: 3, color: "hsl(var(--primary))", glow: true },
    { cx: 250, cy: 310, r: 2, color: "white" },
    { cx: 400, cy: 220, r: 4, color: "hsl(var(--accent))", glow: true },
    { cx: 550, cy: 350, r: 2, color: "white" },
    { cx: 700, cy: 280, r: 3, color: "hsl(var(--primary))" },
    { cx: 850, cy: 240, r: 4, color: "hsl(var(--accent))", glow: true },
    { cx: 1000, cy: 330, r: 2, color: "white" },
    { cx: 1150, cy: 270, r: 3, color: "hsl(var(--primary))" },
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
        <linearGradient id="info-bg-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#050712" />
          <stop offset="100%" stopColor="#020308" />
        </linearGradient>
        <pattern id="info-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="hsla(0,0%,100%,0.04)" strokeWidth="1"/>
        </pattern>
        <linearGradient id="info-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="25%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
         <linearGradient id="info-wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="info-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="info-particle-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="particleBlur" />
           <feMerge>
            <feMergeNode in="particleBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="1440" height="810" fill="url(#info-bg-gradient)" />
      <rect width="1440" height="810" fill="url(#info-grid)" />
      <g opacity="0.3" style={{ filter: "blur(0.5px)" }}>
        {candles.map((p, i) => (
          <g key={i}>
            <line x1={p.x} y1={p.h} x2={p.x} y2={p.l} stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.4" />
            <rect
              x={p.x - 10}
              y={Math.min(p.o, p.c)}
              width="20"
              height={Math.abs(p.o - p.c)}
              fill={p.c > p.o ? "#22C55E" : "#FB923C"}
            />
          </g>
        ))}
      </g>

      <g>
        <path
            d="M-50,300 C 200,200 400,400 650,300 C 900,200 1100,400 1490,300"
            stroke="url(#info-wave-gradient)" strokeWidth="4" fill="none"
            filter="url(#info-glow)"
        />
        <path
            d="M-50,280 C 250,380 450,180 700,280 C 950,380 1150,180 1490,280"
            stroke="url(#info-wave-gradient-2)" strokeWidth="2" fill="none"
            opacity="0.6"
        />
      </g>

      <g>
        {particles.map((p, i) => (
            <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.color} filter={p.glow ? "url(#info-particle-glow)" : "none"} />
        ))}
        <path d="M400 220 C 420 230, 430 270, 440 280" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="2 2" fill="none" opacity="0.7" />
        <path d="M850 240 C 830 260, 830 300, 810 320" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="2 2" fill="none" opacity="0.7" />
      </g>
    </svg>
  );
}
