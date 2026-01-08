import type { SVGProps } from "react";

export function PiWave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 200 200"
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient id="piWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
        <filter id="pi-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="100"
        y="115"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="100"
        fill="url(#piWaveGradient)"
        textAnchor="middle"
        opacity="0.5"
        filter="url(#pi-glow)"
      >
        π
      </text>
      <path
        d="M-10 100 C 40 50, 160 150, 210 100"
        stroke="url(#piWaveGradient)"
        strokeWidth="3"
        fill="none"
        filter="url(#pi-glow)"
      />
    </svg>
  );
}
