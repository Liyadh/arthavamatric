import type { SVGProps } from "react";

export function FibonacciSpiral(props: SVGProps<SVGSVGElement>) {
  // A more visually accurate and pleasing Fibonacci spiral path
  const spiralPath = `M 320 226 
    A 13 13 0 0 1 333 213 
    A 26 26 0 0 1 307 187 
    A 39 39 0 0 1 268 226 
    A 65 65 0 0 1 333 291 
    A 104 104 0 0 1 229 187 
    A 169 169 0 0 1 398 356
    A 273 273 0 0 1 125 83`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      {...props}
    >
      <defs>
        <linearGradient id="spiralGradient" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
        <filter id="spiral-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g className="spin-slow" style={{ transformOrigin: "center" }}>
        <path d={spiralPath} stroke="url(#spiralGradient)" filter="url(#spiral-glow)" />
      </g>
    </svg>
  );
}
