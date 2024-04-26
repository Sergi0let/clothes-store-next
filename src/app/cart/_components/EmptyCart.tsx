import { Routes } from "@/constants";
import Link from "next/link";
import React from "react";

export default function EmptyCart() {
  return (
    <main className="m-auto max-w-7xl px-4 pb-14 pt-6 md:pb-32 md:pt-12">
      <div className="text-center">
        <svg
          className="m-auto h-12 w-12 md:h-20 md:w-20"
          width="80"
          height="80"
          fill="none"
          viewBox="0 0 81 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            height="80"
            id="a"
            style={{ maskType: "luminance" }}
            width="81"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path d="M.484 0h80v80h-80V0z" fill="#fff" />
          </mask>
          <g stroke="#000" strokeLinecap="round" strokeWidth="2" mask="url(#a)">
            <path d="M55.055 22.153l10.43 6.285 3.124 50H12.36l3.946-50 9.497-6.2m35.918-5.822l-6.9 5.596v6.22m-36.16-1.536V15.937h43.65v10.517m-43.075-10.05l6.914 5.608v6.22M40.484 5.156V1.563M32.299 7.35l-1.797-3.113M48.67 7.35l1.797-3.113" />
          </g>
          <path
            d="M16.973 28.438h47.843"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
        <h1 className="mt-5 text-2xl md:mt-8 md:text-4xl">
          Your cart is empty
        </h1>
        <p className="text-md pt-5 text-secondary md:pt-8 md:text-lg">
          It&apos;s not too late to fix it :)
        </p>
        <Link
          href={Routes.HOME}
          className="ml-auto mr-auto mt-5 flex h-14 w-56 items-center justify-center bg-blue-700 text-lg font-medium uppercase text-base-100 transition-colors hover:bg-blue-800 active:bg-blue-950 md:mt-8 md:h-16 md:w-64"
        >
          Start Shopping
        </Link>
      </div>
    </main>
  );
}
