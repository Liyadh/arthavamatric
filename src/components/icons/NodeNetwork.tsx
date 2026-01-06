import type { SVGProps } from "react";

export function NodeNetwork(props: SVGProps<SVGSVGElement>) {
  const nodes = [
    { cx: 50, cy: 300 }, { cx: 150, cy: 150 }, { cx: 250, cy: 350 },
    { cx: 350, cy: 100 }, { cx: 450, cy: 400 }, { cx: 550, cy: 200 },
    { cx: 650, cy: 300 }, { cx: 750, cy: 120 }, { cx: 850, cy: 380 },
    { cx: 950, cy: 250 },
  ];

  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [3, 7], [4, 5], [4, 6],
    [5, 7], [6, 8], [7, 9], [8, 9]
  ];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <defs>
        <linearGradient id="node-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
        <filter id="node-glow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g opacity="0.4" filter="url(#node-glow)">
        {edges.map(([i, j], index) => (
          <line
            key={index}
            x1={nodes[i].cx} y1={nodes[i].cy}
            x2={nodes[j].cx} y2={nodes[j].cy}
            stroke="url(#node-gradient)"
            strokeWidth="1"
          />
        ))}
        {nodes.map((node, index) => (
          <g key={index}>
            <circle cx={node.cx} cy={node.cy} r="10" fill="hsl(var(--background))" stroke="url(#node-gradient)" strokeWidth="2" />
            <circle cx={node.cx} cy={node.cy} r="4" fill="url(#node-gradient)" />
          </g>
        ))}
      </g>
    </svg>
  );
}
