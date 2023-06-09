import React from "react";

export default function Success({ width = "32", height = "32" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: 10 + "px" }}
    >
      <g clipPath="url(#clip0_5_178)">
        <circle cx="16" cy="16" r="15" stroke="#2BCD3B" strokeWidth="2" />
        <path
          d="M8 14L14.5 23L22.5 10"
          stroke="#2BCD3B"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_178">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
