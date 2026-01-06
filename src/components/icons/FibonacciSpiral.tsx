import type { SVGProps } from "react";

export function FibonacciSpiral(props: SVGProps<SVGSVGElement>) {
  // Coordinates for the Fibonacci rectangles and spiral path
  // Scaled to fit within a ~500x500 viewbox
  const fibStructure = {
    rects: [
      { x: 250, y: 242, width: 8, height: 8 },
      { x: 242, y: 242, width: 8, height: 8 },
      { x: 242, y: 250, width: 16, height: 16 },
      { x: 258, y: 234, width: 24, height: 24 },
      { x: 234, y: 210, width: 40, height: 40 },
      { x: 194, y: 250, width: 64, height: 64 },
      { x: 258, y: 146, width: 104, height: 104 },
    ],
    // A single continuous path derived from the rectangles' arcs
    spiralPath: "M250,250 a8,8 0 0 1 8,-8 a16,16 0 0 1 -16,16 a24,24 0 0 1 24,24 a40,40 0 0 1 -40,-40 a64,64 0 0 1 64,64 a104,104 0 0 1 -104,-104",
    nodes: [
      { cx: 258, cy: 242 },
      { cx: 242, cy: 258 },
      { cx: 258, cy: 258 },
      { cx: 258, cy: 210 },
      { cx: 194, cy: 250 },
    ],
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      fill="none"
      {...props}
    >
      <defs>
        <radialGradient
          id="fib-bg-gradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#050712" />
          <stop offset="100%" stopColor="#020308" />
        </radialGradient>
        <pattern
          id="fib-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="hsla(210, 15%, 40%, 0.1)"
            strokeWidth="1"
          />
        </pattern>
        <linearGradient
          id="fib-spiral-gradient"
          gradientTransform="rotate(45)"
        >
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="50%" stopColor="hsl(var(--accent))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" />
        </linearGradient>
        <filter id="fib-spiral-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="fib-node-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="nodeBlur" />
          <feMerge>
            <feMergeNode in="nodeBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="500" height="500" fill="url(#fib-bg-gradient)" />
      <rect width="500" height="500" fill="url(#fib-grid)" opacity="0.5" />

      <g className="spin-slow" style={{ transformOrigin: "250px 250px" }}>
        {/* Faint Fibonacci Rectangles */}
        <g id="fib-rects" opacity="0.15">
          {fibStructure.rects.map((rect, i) => (
            <rect
              key={i}
              x={rect.x}
              y={rect.y}
              width={rect.width}
              height={rect.height}
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              fill="none"
            />
          ))}
        </g>

        {/* Spiral Path */}
        <path
          id="fib-spiral"
          d={fibStructure.spiralPath}
          stroke="url(#fib-spiral-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#fib-spiral-glow)"
        />

        {/* Glowing Data Nodes */}
        <g id="fib-nodes">
          {fibStructure.nodes.map((node, i) => (
            <circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r="2.5"
              fill={i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
              filter="url(#fib-node-glow)"
            />
          ))}
        </g>
      </g>
    </svg>
  );
}
