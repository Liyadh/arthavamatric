import type { SVGProps } from "react";

export function FibonacciCircularSpiral(props: SVGProps<SVGSVGElement>) {
  // Logarithmic spiral (approximates golden spiral)
  const a = 0; // center offset
  const b = 0.3; // tightness
  const rotations = 4;
  const points = 360;

  let pathData = "M 250,250 ";
  for (let i = 0; i <= points * rotations; i++) {
    const angle = 0.1 * i;
    const x = 250 + a * Math.exp(b * angle) * Math.cos(angle);
    const y = 250 + a * Math.exp(b * angle) * Math.sin(angle);
    // As `a` is 0, we can simplify this, but let's generate a spiral path
    const radius = 10 + i * 0.5;
    const nx = 250 + radius * Math.cos(angle);
    const ny = 250 + radius * Math.sin(angle);
    if (i === 0) {
      pathData += `M ${nx} ${ny} `;
    } else {
      pathData += `L ${nx} ${ny} `;
    }
  }

  // A more controlled logarithmic spiral
  const scale = 20;
  const growth = 0.17;
  let spiralPath = "";
  for (let i = 0; i < 500; i++) {
      const angle = i * Math.PI / 180;
      const radius = scale * Math.exp(growth * angle);
      const x = 250 + radius * Math.cos(angle);
      const y = 250 + radius * Math.sin(angle);
      if (i === 0) {
          spiralPath += `M${x},${y}`;
      } else {
          spiralPath += ` L${x},${y}`;
      }
  }


  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient
          id="spiralGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="50%" stopColor="hsl(var(--accent))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" />
        </linearGradient>
        <filter id="spiralGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className="spiral-animated" style={{ transformOrigin: "center" }}>
        <path
          d={spiralPath}
          stroke="url(#spiralGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#spiralGlow)"
        />
      </g>
    </svg>
  );
}
