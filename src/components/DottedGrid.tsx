// src/components/DottedGrid.tsx
import React from 'react';

interface DottedGridProps {
  idSuffix: string;
}

/**
 * A reusable SVG grid pattern to be used as a background.
 * The idSuffix is used to create a unique ID for the pattern.
 */
export const DottedGrid: React.FC<DottedGridProps> = ({ idSuffix }) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    className="pointer-events-none absolute inset-0 z-0 opacity-40"
  >
    <defs>
      <pattern id={`dotted-grid-${idSuffix}`} width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="#E2E8F0" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#dotted-grid-${idSuffix})`} />
  </svg>
);
