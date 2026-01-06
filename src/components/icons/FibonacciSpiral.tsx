import type { SVGProps } from "react";

export function FibonacciSpiral(props: SVGProps<SVGSVGElement>) {
  const fib = [1, 1, 2, 3, 5, 8, 13];
  let x = 0, y = 0;
  const paths: string[] = [];

  const directions = [
    (s: number) => { x += s; return `A ${s} ${s} 0 0 1 ${x} ${y-s}`; }, // up
    (s: number) => { y -= s; return `A ${s} ${s} 0 0 1 ${x-s} ${y}`; }, // left
    (s: number) => { x -= s; return `A ${s} ${s} 0 0 1 ${x} ${y+s}`; }, // down
    (s: number) => { y += s; return `A ${s} ${s} 0 0 1 ${x+s} ${y}`; }, // right
  ];

  let current_dir = 0;
  let px = 0, py = 0;
  let scale = 13;

  for (let i = fib.length - 1; i >= 0; i--) {
      const size = fib[i] * scale;
      switch (current_dir) {
          case 0: // right, then arc up
              paths.push(`M ${px} ${py} L ${px+size} ${py}`);
              px += size;
              paths.push(`A ${size} ${size} 0 0 1 ${px} ${py-size}`);
              py -= size;
              break;
          case 1: // up, then arc left
              paths.push(`M ${px} ${py} L ${px} ${py-size}`);
              py -= size;
              paths.push(`A ${size} ${size} 0 0 1 ${px-size} ${py}`);
              px -= size;
              break;
          case 2: // left, then arc down
              paths.push(`M ${px} ${py} L ${px-size} ${py}`);
              px -= size;
              paths.push(`A ${size} ${size} 0 0 1 ${px} ${py+size}`);
              py += size;
              break;
          case 3: // down, then arc right
              paths.push(`M ${px} ${py} L ${px} ${py+size}`);
              py += size;
              paths.push(`A ${size} ${size} 0 0 1 ${px+size} ${py}`);
              px += size;
              break;
      }
      current_dir = (current_dir + 1) % 4;
  }
  
  let spiralPath = `M 320 226 A 13 13 0 0 1 333 213 A 26 26 0 0 1 307 187 A 39 39 0 0 1 268 226 A 65 65 0 0 1 333 291 A 104 104 0 0 1 229 187 A 169 169 0 0 1 398 356 A 273 273 0 0 1 125 83`;

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
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <g className="spin-slow" style={{ transformOrigin: 'center' }}>
            <path d={spiralPath} stroke="url(#spiralGradient)" filter="url(#spiral-glow)"/>
        </g>
    </svg>
  );
}
