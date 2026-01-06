import type { SVGProps } from "react";

export function CandlestickChart(props: SVGProps<SVGSVGElement>) {
  const candles = [
    { x: 50, o: 300, c: 200, h: 180, l: 320 },
    { x: 100, o: 200, c: 250, h: 180, l: 270 },
    { x: 150, o: 250, c: 150, h: 260, l: 130 },
    { x: 200, o: 150, c: 180, h: 120, l: 200 },
    { x: 250, o: 180, c: 280, h: 170, l: 300 },
    { x: 300, o: 280, c: 220, h: 300, l: 210 },
    { x: 350, o: 220, c: 320, h: 200, l: 340 },
    { x: 400, o: 320, c: 400, h: 300, l: 420 },
    { x: 450, o: 400, c: 350, h: 410, l: 330 },
    { x: 500, o: 350, c: 380, h: 330, l: 400 },
    { x: 550, o: 380, c: 300, h: 390, l: 280 },
    { x: 600, o: 300, c: 350, h: 280, l: 370 },
  ];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 650 500"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <g strokeWidth="2">
        {candles.map((p, i) => (
          <g key={i} fill={p.c > p.o ? "hsl(var(--success))" : "hsl(var(--accent))"}>
            <line x1={p.x} y1={p.h} x2={p.x} y2={p.l} stroke="currentColor" />
            <rect
              x={p.x - 15}
              y={Math.min(p.o, p.c)}
              width="30"
              height={Math.abs(p.o - p.c)}
              fill="currentColor"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
