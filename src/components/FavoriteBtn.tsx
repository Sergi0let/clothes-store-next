"use client";

import { FavoriteCart } from "@/lib/db/favorite";
import Link from "next/link";

type FavoriteBtnProps = {
  favorites: FavoriteCart | null;
};

export default function FavoriteBtn({ favorites }: FavoriteBtnProps) {
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
            viewBox="0 0 28 28"
            className="w-5 fill-primary transition-colors hover:fill-blue-800 md:w-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_607_264)">
              <path d="M20.4165 1.07007C19.1027 1.0905 17.8177 1.45723 16.691 2.13322C15.5644 2.80921 14.636 3.77052 13.9998 4.92007C13.3635 3.77052 12.4352 2.80921 11.3086 2.13322C10.1819 1.45723 8.89685 1.0905 7.58312 1.07007C5.48889 1.16106 3.51578 2.0772 2.09487 3.61834C0.673958 5.15948 -0.0792537 7.20035 -0.000211421 9.29507C-0.000211421 17.1992 12.7818 26.3284 13.3255 26.7157L13.9998 27.1929L14.6741 26.7157C15.2178 26.3307 27.9998 17.1992 27.9998 9.29507C28.0788 7.20035 27.3256 5.15948 25.9047 3.61834C24.4838 2.0772 22.5107 1.16106 20.4165 1.07007ZM13.9998 24.3206C10.2046 21.4856 2.33312 14.5206 2.33312 9.29507C2.25337 7.8189 2.76055 6.37109 3.74405 5.26738C4.72754 4.16368 6.10756 3.49364 7.58312 3.4034C9.05868 3.49364 10.4387 4.16368 11.4222 5.26738C12.4057 6.37109 12.9129 7.8189 12.8331 9.29507H15.1665C15.0867 7.8189 15.5939 6.37109 16.5774 5.26738C17.5609 4.16368 18.9409 3.49364 20.4165 3.4034C21.892 3.49364 23.272 4.16368 24.2555 5.26738C25.239 6.37109 25.7462 7.8189 25.6665 9.29507C25.6665 14.5229 17.795 21.4856 13.9998 24.3206Z" />
            </g>
            <defs>
              <clipPath id="clip0_607_264">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {favorites && favorites?.size > 0 && (
            <span className="badge indicator-item badge-sm h-4 min-w-4 border-collapse rounded-full bg-blue-800 text-base-100 md:h-6 md:min-w-6">
              {favorites?.size}
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
            {favorites?.size || 0} Items
          </span>

          <div className="card-actions">
            <Link
              href="/favorite"
              className="block min-w-full max-w-full bg-blue-800 px-6 py-2 text-center text-lg text-base-100"
              onClick={closeDropdown}
            >
              View Favorites
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
