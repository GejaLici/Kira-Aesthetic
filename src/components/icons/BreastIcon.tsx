import React from 'react';

export function BreastIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.5 4.5A4.5 4.5 0 1 0 5.3 9.8" />
      <path d="M11.5 4.5A4.5 4.5 0 1 1 18.7 9.8" />
      <path d="M5 14a4 4 0 0 0 4-4h6a4 4 0 0 0 4 4" />
      <path d="M12 14v6" />
      <path d="M9 20h6" />
    </svg>
  );
}
