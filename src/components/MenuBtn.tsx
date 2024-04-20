"use client";

import React from "react";

export default function MenuBtn({
  isOpened,
  className,
}: {
  isOpened: boolean;
  className?: string;
}) {
  function toggleSidebar() {
    const isOpenedSidebar = document.body.classList.contains("openSidebar");
    if (isOpenedSidebar) document.body.classList.remove("openSidebar");
    else document.body.classList.add("openSidebar");
  }
  return (
    <button onClick={toggleSidebar} className={className}>
      {isOpened ? (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_102_6958)">
            <path
              d="M20 1.67833L18.8217 0.5L10 9.32167L1.17833 0.5L0 1.67833L8.82167 10.5L0 19.3217L1.17833 20.5L10 11.6783L18.8217 20.5L20 19.3217L11.1783 10.5L20 1.67833Z"
              fill="#161616"
            />
          </g>
          <defs>
            <clipPath id="clip0_102_6958">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 6.16699H0V7.83367H20V6.16699Z" fill="#161616" />
          <path d="M20 0.333496H0V2.00016H20V0.333496Z" fill="#161616" />
          <path d="M20 12H0V13.6667H20V12Z" fill="#161616" />
        </svg>
      )}
    </button>
  );
}
