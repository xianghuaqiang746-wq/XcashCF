import React from 'react';

export const Logo = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
  </svg>
);

export const HexagonGrid = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 1000 600">
    <defs>
      <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
        <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="rgba(19, 91, 236, 0.2)" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexagons)"/>
  </svg>
);