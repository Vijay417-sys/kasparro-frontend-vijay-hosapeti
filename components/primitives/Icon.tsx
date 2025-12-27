import React from "react";
import { cn } from "@/lib/utils/cn";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
}

// Simple icon component - in production, use a proper icon library
export function Icon({ name, size = 20, className, ...props }: IconProps) {
  // Placeholder - returns a simple SVG
  // In production, map name to actual icon components
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("", className)}
      {...props}
    >
      {name === "chevron-right" && <path d="m9 18 6-6-6-6" />}
      {name === "menu" && (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
      {name === "x" && (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      )}
    </svg>
  );
}
