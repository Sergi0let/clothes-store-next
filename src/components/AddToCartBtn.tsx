"use client";

import { useState, useTransition } from "react";

type AddToCartBtnProps = {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
};

export default function AddToCartBtn({
  productId,
  incrementProductQuantity,
}: AddToCartBtnProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-2">
        <button
          className="flex max-w-full rounded-none bg-blue-800 p-4 text-xl font-medium uppercase text-base-100 hover:bg-blue-900"
          onClick={() => {
            setSuccess(false);
            startTransition(async () => {
              await incrementProductQuantity(productId);
              setSuccess(true);
            });
          }}
        >
          <svg
            className="mr-4"
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_607_267)">
              <path
                d="M21 7C21 5.14348 20.2625 3.36301 18.9497 2.05025C17.637 0.737498 15.8565 0 14 0C12.1435 0 10.363 0.737498 9.05025 2.05025C7.7375 3.36301 7 5.14348 7 7H0V24.5C0 25.4283 0.368749 26.3185 1.02513 26.9749C1.6815 27.6313 2.57174 28 3.5 28H24.5C25.4283 28 26.3185 27.6313 26.9749 26.9749C27.6313 26.3185 28 25.4283 28 24.5V7H21ZM14 2.33333C15.2377 2.33333 16.4247 2.825 17.2998 3.70017C18.175 4.57534 18.6667 5.76232 18.6667 7H9.33333C9.33333 5.76232 9.825 4.57534 10.7002 3.70017C11.5753 2.825 12.7623 2.33333 14 2.33333ZM25.6667 24.5C25.6667 24.8094 25.5438 25.1062 25.325 25.325C25.1062 25.5438 24.8094 25.6667 24.5 25.6667H3.5C3.19058 25.6667 2.89383 25.5438 2.67504 25.325C2.45625 25.1062 2.33333 24.8094 2.33333 24.5V9.33333H7V11.6667H9.33333V9.33333H18.6667V11.6667H21V9.33333H25.6667V24.5Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_607_267">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Add to Cart
        </button>
        {isPending && <span className="loading loading-spinner" />}
      </div>
      {!isPending && success && (
        <span className="flex items-center gap-2 py-2 text-success">
          Added to cart{" "}
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <mask
                height="16"
                id="b"
                style={{ maskType: "luminance" }}
                width="16"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <path d="M16 0H0v16h16V0z" fill="#fff" />
              </mask>
              <g mask="url(#b)">
                <path
                  d="M11.095 5.904l-4.193 4.192L4.906 8.1"
                  stroke="#24BF33"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
                <mask
                  height="16"
                  id="c"
                  style={{ maskType: "luminance" }}
                  width="16"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path d="M0 0h16v16H0V0z" fill="#fff" />
                </mask>
                <g mask="url(#c)">
                  <path
                    d="M15.375 8A7.375 7.375 0 11.625 8a7.375 7.375 0 0114.75 0z"
                    stroke="#24BF33"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="a">
                <path d="M0 0h16v16H0z" fill="#fff" />
              </clipPath>
            </defs>
          </svg>
        </span>
      )}
    </div>
  );
}
