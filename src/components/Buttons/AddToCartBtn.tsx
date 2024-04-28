"use client";

import { useState, useTransition } from "react";
import IconBag from "@/assets/bag.svg";
import Image from "next/image";
import clsx from "clsx";

type AddToCartBtnProps = {
  productId: string;
  className?: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
};

export default function AddToCartBtn({
  productId,
  incrementProductQuantity,
  className,
}: AddToCartBtnProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className={clsx(className, "w-full py-4")}>
      <div className="flex w-full items-center gap-2">
        <button
          className="transition-color relative flex w-full justify-center bg-blue-700 p-4 text-xl font-medium uppercase text-base-100 duration-300 hover:bg-blue-900"
          onClick={() => {
            setSuccess(false);
            startTransition(async () => {
              await incrementProductQuantity(productId);
              setSuccess(true);
            });
          }}
        >
          <Image
            src={IconBag}
            alt={"To card action"}
            width={24}
            height={24}
            className="absolute left-4"
          />
          Add to Cart
        </button>
      </div>
      {isPending && <span className="loading loading-spinner block py-2" />}
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
