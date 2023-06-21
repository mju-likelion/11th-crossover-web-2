import React from "react";

export default function GreenCheck({ width = "32", height = "32" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9_359)">
        <rect width="32" height="32" rx="4" fill="#2BCD3B" />
        <path
          d="M8 12.6154L15.6207 23L25 8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_9_359">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
