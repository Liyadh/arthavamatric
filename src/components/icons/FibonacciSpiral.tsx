import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function FibonacciSpiral(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="-130 -85 350 220"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={cn("opacity-10", props.className)}
    >
      <defs>
        <linearGradient id="fibGradient" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
      <g stroke="url(#fibGradient)" strokeWidth={2}>
        <path d="M 0 1 A 1 1 0 0 1 -1 0" />
        <path d="M -1 0 A 2 2 0 0 1 1 -2" />
        <path d="M 1 -2 A 3 3 0 0 1 4 1" />
        <path d="M 4 1 A 5 5 0 0 1 -1 6" />
        <path d="M -1 6 A 8 8 0 0 1 -9 -2" />
        <path d="M -9 -2 A 13 13 0 0 1 4 -15" />
        <path d="M 4 -15 A 21 21 0 0 1 25 6" />
        <path d="M 25 6 A 34 34 0 0 1 -9 40" />
        <path d="M -9 40 A 55 55 0 0 1 -64 -15" />
        <path d="M -64 -15 A 89 89 0 0 1 25 -104" />
        <path d="M 25 -104 A 144 144 0 0 1 169 40" />
      </g>
    </svg>
  );
}
