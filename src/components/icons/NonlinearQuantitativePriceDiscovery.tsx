import type { SVGProps } from "react";

export function NonlinearQuantitativePriceDiscovery(props: SVGProps<SVGSVGElement>) {
  const dataPoints = [
    { wave: "green", cx: 200, cy: 585 }, { wave: "green", cx: 650, cy: 430 }, { wave: "green", cx: 1100, cy: 490 },
    { wave: "yellow", cx: 350, cy: 520 }, { wave: "yellow", cx: 750, cy: 540 }, { wave: "yellow", cx: 1250, cy: 420 },
    { wave: "red", cx: 900, cy: 580 }, { wave: "red", cx: 1350, cy: 380 },
  ];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 810"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Background Gradients */}
        <linearGradient id="nqpd-bg-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#050712" />
          <stop offset="40%" stopColor="#071628" />
          <stop offset="100%" stopColor="#30110A" />
        </linearGradient>
        <radialGradient id="nqpd-orange-glow" cx="100%" cy="100%" r="40%">
          <stop offset="0%" stopColor="#FF9F1C" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#30110A" stopOpacity="0" />
        </radialGradient>

        {/* Grid Line Gradient */}
        <linearGradient id="grid-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.06)" />
            <stop offset="100%" stopColor="rgba(255, 200, 150, 0.1)" />
        </linearGradient>

        {/* Wave Gradients */}
        <linearGradient id="wave-a-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#16A34A" />
          <stop offset="50%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#2DD4FF" />
        </linearGradient>
        <linearGradient id="wave-b-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="50%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
        <linearGradient id="wave-c-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7F1D1D" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FACC15" />
        </linearGradient>

        {/* Glow & Shadow Filters */}
        <filter id="glow-wave-a" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
        </filter>
        <filter id="glow-wave-b" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
        </filter>
        <filter id="glow-wave-c" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
        </filter>
        <filter id="point-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="pointBlur" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="1440" height="810" fill="url(#nqpd-bg-gradient)" />
      <rect width="1440" height="810" fill="url(#nqpd-orange-glow)" />

      {/* Grid */}
      <g id="grid" stroke="url(#grid-line-gradient)" strokeWidth="1">
        {Array.from({ length: 10 }).map((_, i) => (
          <path key={`h-${i}`} d={`M -50 ${600 + i * 25 + i*i*0.5} C 400 ${610 + i * 25 + i*i*0.5}, 1000 ${580 + i * 25 + i*i*0.5}, 1490 ${590 + i * 25 + i*i*0.5}`} fill="none" opacity="0.7" />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <path key={`v-${i}`} d={`M ${i * 100} 810 L ${720 + (i * 100 - 720) * 1.5} 550`} fill="none" opacity="0.5" />
        ))}
         <text x="350" y="720" fontSize="10" fill="rgba(255,255,255,0.2)" fontFamily="monospace">01</text>
         <text x="800" y="680" fontSize="10" fill="rgba(255,255,255,0.2)" fontFamily="monospace">10</text>
         <text x="1100" y="750" fontSize="10" fill="rgba(255,255,255,0.2)" fontFamily="monospace">11</text>
      </g>

       {/* Base Curve */}
      <g id="base-curve">
        <path d="M-50,750 C 300,700, 800,800, 1490,720" stroke="#1D4ED8" strokeWidth="1.5" fill="none" opacity="0.4" />
      </g>
      
      {/* Shadows */}
      <g opacity="0.2" filter="blur(5px)">
        <path d="M-50,600 C 350,500, 800,400, 1490,500" stroke="url(#wave-a-gradient)" strokeWidth="8" fill="none" transform="translate(0, 10)" />
        <path d="M-50,650 C 400,450, 700,600, 1490,400" stroke="url(#wave-b-gradient)" strokeWidth="7" fill="none" transform="translate(0, 10)" />
        <path d="M-50,700 C 500,650, 1000,500, 1490,350" stroke="url(#wave-c-gradient)" strokeWidth="6" fill="none" transform="translate(0, 10)" />
      </g>
      
      {/* Waves */}
      <g id="wave-c" filter="url(#glow-wave-c)">
        <path d="M-50,700 C 500,650, 1000,500, 1490,350" stroke="url(#wave-c-gradient)" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.9" />
      </g>
      <g id="wave-b" filter="url(#glow-wave-b)">
        <path d="M-50,650 C 400,450, 700,600, 1490,400" stroke="url(#wave-b-gradient)" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.95" />
      </g>
      <g id="wave-a" filter="url(#glow-wave-a)">
        <path d="M-50,600 C 350,500, 800,400, 1490,500" stroke="url(#wave-a-gradient)" strokeWidth="8" strokeLinecap="round" fill="none" />
      </g>

       {/* Data Points */}
      <g id="data-points">
        {dataPoints.map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={p.wave === 'green' ? 4 : 3} fill="white" filter="url(#point-glow)" opacity="0.9" />
        ))}
         <path d="M1000,450 C 1050,430 1100,440 1150,460" stroke="white" strokeWidth="1" strokeDasharray="3 5" fill="none" opacity="0.8" />
      </g>

    </svg>
  );
}
