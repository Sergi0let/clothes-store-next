import { formatPrice } from "@/lib/format";
import Link from "next/link";

export default function ShopingCartBtn() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="cursor-pointer">
        <div className="indicator">
          <svg
            className="w-5 fill-primary transition-colors hover:fill-blue-800 md:w-7"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_607_267)">
              <path d="M21 7C21 5.14348 20.2625 3.36301 18.9497 2.05025C17.637 0.737498 15.8565 0 14 0C12.1435 0 10.363 0.737498 9.05025 2.05025C7.7375 3.36301 7 5.14348 7 7H0V24.5C0 25.4283 0.368749 26.3185 1.02513 26.9749C1.6815 27.6313 2.57174 28 3.5 28H24.5C25.4283 28 26.3185 27.6313 26.9749 26.9749C27.6313 26.3185 28 25.4283 28 24.5V7H21ZM14 2.33333C15.2377 2.33333 16.4247 2.825 17.2998 3.70017C18.175 4.57534 18.6667 5.76232 18.6667 7H9.33333C9.33333 5.76232 9.825 4.57534 10.7002 3.70017C11.5753 2.825 12.7623 2.33333 14 2.33333ZM25.6667 24.5C25.6667 24.8094 25.5438 25.1062 25.325 25.325C25.1062 25.5438 24.8094 25.6667 24.5 25.6667H3.5C3.19058 25.6667 2.89383 25.5438 2.67504 25.325C2.45625 25.1062 2.33333 24.8094 2.33333 24.5V9.33333H7V11.6667H9.33333V9.33333H18.6667V11.6667H21V9.33333H25.6667V24.5Z" />
            </g>
            <defs>
              <clipPath id="clip0_607_267">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="badge indicator-item badge-sm h-4 min-w-4 border-collapse  rounded-full bg-blue-800 text-base-100 md:h-6 md:min-w-6">
            3
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-30 mt-3 w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">3 Items</span>
          <span className="text-info">Subtotal: {formatPrice(10)}</span>
          <div className="card-actions">
            <Link
              href="/cart"
              className="btn btn-primary btn-block"
              // onClick={closeDropdown}
            >
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
