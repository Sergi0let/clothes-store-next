"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type UserMenuBtnProps = {
  session: Session | null;
};

export default function UserMenuBtn({ session }: UserMenuBtnProps) {
  const user = session?.user;
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="cursor-pointer">
        {user ? (
          <Image
            src={user?.image || ""}
            width={28}
            height={28}
            alt="user"
            className="rounded-full"
          />
        ) : (
          <svg
            className="w-5 fill-primary transition-colors hover:fill-blue-800 md:w-7"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_607_260)">
              <path d="M24.5 28.0009H22.1667V22.1174C22.1657 21.2027 21.802 20.3258 21.1552 19.679C20.5084 19.0322 19.6315 18.6685 18.7168 18.6676H9.28317C8.3685 18.6685 7.49156 19.0322 6.84479 19.679C6.19802 20.3258 5.83426 21.2027 5.83333 22.1174V28.0009H3.5V22.1174C3.50185 20.5842 4.11174 19.1143 5.1959 18.0301C6.28005 16.946 7.74994 16.3361 9.28317 16.3342H18.7168C20.2501 16.3361 21.72 16.946 22.8041 18.0301C23.8883 19.1143 24.4981 20.5842 24.5 22.1174V28.0009Z" />
              <path d="M14 14C12.6155 14 11.2622 13.5895 10.111 12.8203C8.95987 12.0511 8.06266 10.9579 7.53285 9.67879C7.00303 8.3997 6.86441 6.99224 7.13451 5.63437C7.4046 4.2765 8.07129 3.02922 9.05026 2.05026C10.0292 1.07129 11.2765 0.404603 12.6344 0.134506C13.9922 -0.13559 15.3997 0.003033 16.6788 0.532846C17.9579 1.06266 19.0511 1.95987 19.8203 3.11101C20.5895 4.26216 21 5.61553 21 7C20.9982 8.85595 20.2601 10.6354 18.9477 11.9477C17.6354 13.2601 15.856 13.9982 14 14ZM14 2.33334C13.077 2.33334 12.1748 2.60703 11.4073 3.11981C10.6399 3.63259 10.0418 4.36143 9.68857 5.21415C9.33536 6.06687 9.24294 7.00518 9.42301 7.91043C9.60307 8.81567 10.0475 9.64719 10.7002 10.2998C11.3528 10.9525 12.1843 11.3969 13.0896 11.577C13.9948 11.7571 14.9331 11.6647 15.7859 11.3114C16.6386 10.9582 17.3674 10.3601 17.8802 9.59266C18.393 8.82524 18.6667 7.92298 18.6667 7C18.6667 5.76233 18.175 4.57534 17.2998 3.70017C16.4247 2.825 15.2377 2.33334 14 2.33334Z" />
            </g>
            <defs>
              <clipPath id="clip0_607_260">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content menu-sm z-30 mt-3 w-52 rounded-none bg-base-100 px-0 shadow"
      >
        <li className="rounded-none">
          {user ? (
            <button
              className="rounded-none "
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign Out
            </button>
          ) : (
            <button className="rounded-none" onClick={() => signIn()}>
              Sign In
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
