import React from 'react';

export function Logo({ locale = 'en' }: { locale?: string }) {
  return (
    <div className="flex items-center transition-opacity hover:opacity-80">
      <svg
        width="45"
        height="28"
        viewBox="0 0 45 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Oval Shape - Sophisticated Beige */}
        <ellipse
          cx="22.5"
          cy="14"
          rx="21.5"
          ry="13"
          stroke="#C2A58F"
          strokeWidth="1.2"
        />
        {/* Stylized 'K' inside the oval - Deep Taupe */}
        <path
          d="M18 9V19M18 14L23 9M18 14L23 19"
          stroke="#9F8170"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Decorative inner curve - Soft Champagne */}
        <path
          d="M36 14C36 18.4183 30.1797 22 23 22"
          stroke="#DBC7B0"
          strokeWidth="0.8"
          strokeOpacity="0.6"
        />
      </svg>
    </div>
  );
}
