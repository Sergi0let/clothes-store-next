"use client";

import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Routes } from "@/constants";
import ordersIcon from "@/assets/orders.svg";
import favoritesIcon from "@/assets/heart.svg";
import addressesIcon from "@/assets/addresses.svg";
import LogOutIcon from "@/assets/logout.svg";

type AccountMenuProps = {
  location: "orders" | "favorites" | "addresses";
  username?: string;
  email?: string;
  favoritesAmount?: number;
};

export default function AccountMenu({
  location,
  email,
  username,
  favoritesAmount,
}: AccountMenuProps) {
  const [isOpened, setIsOpened] = useState(false);

  let mainIcon;
  let labelText = "";

  switch (location) {
    case "orders":
      mainIcon = ordersIcon;
      labelText = "My orders";
      break;
    case "favorites":
      mainIcon = favoritesIcon;
      labelText = `Favorites (${favoritesAmount || 0})`;

      break;
    case "addresses":
      mainIcon = addressesIcon;
      labelText = "Addresses";
      break;
    default:
      mainIcon = ordersIcon;
      labelText = "My orders";
  }
  return (
    <div className="border md:hidden">
      <div className="space-y-1 border-b px-6 py-4 text-sm font-medium">
        <div>Welcome, {username}</div>
        <div>{email}</div>
      </div>
      <div className="dropdown dropdown-bottom w-full">
        <div
          onClick={() => setIsOpened((prev) => !prev)}
          tabIndex={0}
          role="button"
          className="flex border-none px-6 py-4 text-[16px]"
        >
          <Image src={mainIcon} width={24} height={24} alt="orders" />
          <span className="flex-1 px-6">{labelText}</span>
          <div className={clsx(isOpened ? "" : "rotate-180")}>
            <svg
              width={20}
              hanging={20}
              fill="none"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#a)">
                <path
                  d="M18.82 15.123l-8.232-8.232a.851.851 0 00-1.178 0l-8.228 8.227L.004 13.94 8.23 5.713a2.56 2.56 0 013.536 0L20 13.945l-1.178 1.178z"
                  fill="#161616"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h20v20H0z" fill="#fff" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-full space-y-2 rounded-none border border-t-0 bg-base-100 p-2 shadow"
        >
          {location === "orders" || (
            <li>
              <Link
                className="rounded-none text-[16px] text-secondary"
                href={Routes.ACCOUNT + Routes.ORDERS}
              >
                <Image src={ordersIcon} width={24} height={24} alt="orders" />
                <span className="px-5">My orders</span>
              </Link>
            </li>
          )}
          {location === "favorites" || (
            <li>
              <Link
                className="rounded-none text-[16px] text-secondary"
                href={Routes.ACCOUNT + Routes.FAVORITES}
              >
                <Image
                  src={favoritesIcon}
                  width={24}
                  height={24}
                  alt="orders"
                />
                <span className="px-5">Favorites ({favoritesAmount || 0})</span>
              </Link>
            </li>
          )}
          {location === "addresses" || (
            <li>
              <Link
                className="rounded-none text-[16px] text-secondary"
                href={Routes.ACCOUNT + Routes.ADDRESSES}
              >
                <Image
                  src={addressesIcon}
                  width={24}
                  height={24}
                  alt="orders"
                />
                <span className="px-5">Addresses</span>
              </Link>
            </li>
          )}
          <li>
            <button
              onClick={async () => {
                await signOut();
              }}
              className="rounded-none text-[16px] text-secondary"
            >
              <Image src={LogOutIcon} width={24} height={24} alt="orders" />
              <span className="px-5">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
