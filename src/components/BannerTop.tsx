"use client";

import { useState } from "react";

export default function BannerTop() {
  const [isShow, setIsShow] = useState(true);

  const handleRemoveBanner = () => {
    setIsShow(false);
  };

  if (!isShow) return;

  return (
    <>
      <div className="m-auto flex h-5 justify-between bg-green-50 p-1 md:h-[48px] md:p-3">
        <div />
        <p className="flex gap-2 text-xs md:text-sm ">
          <span className="whitespace-nowrap font-bold text-blue-800">
            10% off{" "}
          </span>
          <span className="hidden min-w-4 overflow-hidden text-ellipsis whitespace-nowrap  md:block ">
            For the first order for new customers{" "}
          </span>
          <button
            onClick={() => {
              const modal = document.getElementById(
                "bannerTop",
              ) as HTMLDialogElement | null;
              if (modal !== null) {
                modal.showModal();
              }
            }}
            className="cursor-pointer text-secondary underline"
          >
            I want the code
          </button>
        </p>
        <button onClick={handleRemoveBanner}>
          <svg
            className="w-2 md:w-4"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_123_6203)">
              <path
                d="M16 0.942667L15.0573 0L8 7.05733L0.942667 0L0 0.942667L7.05733 8L0 15.0573L0.942667 16L8 8.94267L15.0573 16L16 15.0573L8.94267 8L16 0.942667Z"
                fill="#5C5C5C"
              />
            </g>
            <defs>
              <clipPath id="clip0_123_6203">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <dialog id="bannerTop" className="modal">
        <div className="modal-box h-full w-full rounded-none pt-10 md:h-auto md:w-auto">
          <form method="dialog">
            <button className="btn-sm absolute right-2 top-2">✕</button>
          </form>
          <div className="bg-green-50 p-5">
            <div className="text-4xl font-extrabold text-blue-800">10% off</div>
            <p className="pt-2 text-3xl">
              For the first order for new customers
            </p>
          </div>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
}
