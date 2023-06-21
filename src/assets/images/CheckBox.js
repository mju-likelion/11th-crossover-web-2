import React from "react";

export default function CheckBox({ width = "32", height = "32" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9_357)">
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="3"
          stroke="#717171"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_9_357">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
