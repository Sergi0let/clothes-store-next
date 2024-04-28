"use client";

import Link from "next/link";

import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";

type ShopingCartBtnProps = {
  cart: ShoppingCart | null;
};

export default function ShopingCartBtn({ cart }: ShopingCartBtnProps) {
  function closeDropdown() {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  }
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="cursor-pointer">
        <div className="indicator">
          <svg
            className="w-5 fill-primary transition-colors hover:fill-blue-800 md:w-7"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 7A7 7 0 107 7H0v17.5A3.5 3.5 0 003.5 28h21a3.5 3.5 0 003.5-3.5V7h-7zm-7-4.667A4.666 4.666 0 0118.667 7H9.333A4.667 4.667 0 0114 2.333zM25.667 24.5a1.167 1.167 0 01-1.167 1.167h-21A1.167 1.167 0 012.333 24.5V9.333H7v2.334h2.333V9.333h9.334v2.334H21V9.333h4.667V24.5z" />
          </svg>
          {!!cart?.size && (
            <span className="badge indicator-item badge-sm h-4 min-w-4 border-collapse  rounded-full bg-blue-800 text-base-100 md:h-6 md:min-w-6">
              {cart?.size}
            </span>
          )}
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-30 mt-3 w-52 rounded-none bg-base-100 shadow-md"
      >
        <div className="card-body">
          <span className="text-lg font-bold">
            {cart?.size ? `${cart?.size} Items` : "No items in cart"}
          </span>
          <span className="text-info">
            Subtotal: {formatPrice(cart?.subtotal || 0)}₴
          </span>
          <div className="card-actions">
            <Link
              href="/cart"
              className="block min-w-full max-w-full bg-blue-800 px-6 py-2 text-center text-lg text-base-100"
              onClick={closeDropdown}
            >
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
