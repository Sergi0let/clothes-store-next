"use client";

import { formatPrice } from "@/lib/format";
import clsx from "clsx";
import React from "react";

type ProgressCartProps = {
  sum: number;
};

export default function ProgressCart({ sum = 0 }: ProgressCartProps) {
  const freeShippingAmount = 5000;
  const subtotalCart = sum / 100;
  const isAvailableFreeShipping = subtotalCart >= freeShippingAmount;
  const sumToFreeShipping = freeShippingAmount - subtotalCart;

  return (
    <div>
      <progress
        className={clsx(
          isAvailableFreeShipping ? "progress-success" : "progress-primary",
          "progress  md:w-2/5",
        )}
        value={subtotalCart}
        max={freeShippingAmount}
      ></progress>
      <div className="mt-2 text-sm md:mt-4 md:text-lg">
        {isAvailableFreeShipping
          ? " You are eligible for free shipping!"
          : `You are ${Math.ceil(sumToFreeShipping)}₴ away from free shipping`}
      </div>
    </div>
  );
}
