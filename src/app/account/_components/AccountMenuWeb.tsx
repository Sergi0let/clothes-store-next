"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Routes } from "@/constants";
import ordersIcon from "@/assets/orders.svg";
import favoritesIcon from "@/assets/heart.svg";
import addressesIcon from "@/assets/addresses.svg";
import LogOutIcon from "@/assets/logout.svg";
import clsx from "clsx";

type AccountMenuProps = {
  location: "orders" | "favorites" | "addresses";
  username?: string;
  email?: string;
  favoritesAmount?: number;
  className?: string;
};

export default function AccountMenuWeb({
  location,
  email,
  username,
  favoritesAmount,
  className,
}: AccountMenuProps) {
  return (
    <div className={clsx(className, "hidden md:block")}>
      <div className="space-y-3 border p-6 text-[16px] font-medium">
        <div>Welcome, {username || "Pisun"}</div>
        <div>{email}</div>
      </div>

      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-full space-y-4 rounded-none border border-t-0 bg-base-100 p-0 p-0 p-2 py-4 shadow"
      >
        <li>
          <Link
            className={clsx(
              location === "orders" && "bg-gray-200 text-primary",
              "rounded-none px-6 py-4 text-lg  text-secondary",
            )}
            href={Routes.ACCOUNT + Routes.ORDERS}
          >
            <Image src={ordersIcon} width={24} height={24} alt="orders" />
            <span className="px-5">My orders</span>
          </Link>
        </li>

        <li>
          <Link
            className={clsx(
              location === "favorites" && "bg-gray-200 text-black",
              "rounded-none px-6 py-4 text-lg  text-secondary",
            )}
            href={Routes.ACCOUNT + Routes.FAVORITES}
          >
            <Image src={favoritesIcon} width={24} height={24} alt="orders" />
            <span className="px-5">Favorites ({favoritesAmount || 0})</span>
          </Link>
        </li>

        <li>
          <Link
            className={clsx(
              location === "addresses" && "bg-gray-200 text-primary",
              "rounded-none px-6 py-4 text-lg  text-secondary",
            )}
            href={Routes.ACCOUNT + Routes.ADDRESSES}
          >
            <Image src={addressesIcon} width={24} height={24} alt="orders" />
            <span className="px-5">Addresses</span>
          </Link>
        </li>

        <li>
          <button
            onClick={async () => {
              await signOut();
            }}
            className="roundlge text-[16px] text-secondary"
          >
            <Image src={LogOutIcon} width={24} height={24} alt="orders" />
            <span className="px-5">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
