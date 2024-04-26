import { getServerSession } from "next-auth";
import Link from "next/link";
import { getCart } from "@/lib/db/cart";
import MenuBtn from "../MenuBtn";
import ShopingCartBtn from "./_components/ShopingCartBtn";
import FavoriteBtn from "./_components/FavoriteBtn";
import BannerTop from "../BannerTop";
import UserMenuBtn from "./_components/UserMenuBtn";
import authOptions from "@/utils/authOptions";
import { getFavorite } from "@/lib/db/favorite";
import { Routes } from "@/constants";

export default async function Header() {
  const cart = await getCart();
  const favorites = await getFavorite();
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-40 shadow-md">
      <BannerTop />
      <div className="navbar bg-base-100 px-4  md:min-h-[104px]">
        <MenuBtn isOpened={false} className="pr-4 md:hidden" />
        <div className=" flex-1 ">
          <Link href={Routes.HOME} className="md:mr-2 lg:mr-14">
            <svg
              className="w-24 fill-primary transition-colors hover:fill-blue-800 md:w-auto"
              width="139"
              height="31"
              viewBox="0 0 139 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.76 30.28C12.12 30.28 9.69333 29.6667 7.48 28.44C5.26667 27.1867 3.50667 25.4667 2.2 23.28C0.92 21.0667 0.28 18.5733 0.28 15.8C0.28 13.0267 0.92 10.5467 2.2 8.36C3.50667 6.14667 5.26667 4.42667 7.48 3.2C9.69333 1.97333 12.12 1.36 14.76 1.36C17.4267 1.36 19.8533 1.97333 22.04 3.2C24.2533 4.42667 26 6.14667 27.28 8.36C28.56 10.5467 29.2 13.0267 29.2 15.8C29.2 18.5733 28.56 21.0667 27.28 23.28C26 25.4667 24.2533 27.1867 22.04 28.44C19.8267 29.6667 17.4 30.28 14.76 30.28ZM14.76 23C16.76 23 18.3333 22.3467 19.48 21.04C20.6533 19.7333 21.24 17.9867 21.24 15.8C21.24 13.56 20.6533 11.8 19.48 10.52C18.3333 9.21333 16.76 8.56 14.76 8.56C12.7333 8.56 11.1467 9.21333 10 10.52C8.85333 11.8 8.28 13.56 8.28 15.8C8.28 18.0133 8.85333 19.7733 10 21.08C11.1467 22.36 12.7333 23 14.76 23ZM62.8444 30H55.0044L44.5644 14.24V30H36.7244V1.8H44.5644L55.0044 17.76V1.8H62.8444V30ZM105.764 1.8V18.16C105.764 19.68 106.11 20.8533 106.804 21.68C107.524 22.5067 108.604 22.92 110.044 22.92C111.484 22.92 112.564 22.5067 113.284 21.68C114.03 20.8267 114.404 19.6533 114.404 18.16V1.8H122.244V18.16C122.244 20.7467 121.697 22.96 120.604 24.8C119.51 26.6133 118.017 27.9867 116.124 28.92C114.257 29.8267 112.177 30.28 109.884 30.28C107.59 30.28 105.537 29.8267 103.724 28.92C101.937 27.9867 100.524 26.6133 99.4838 24.8C98.4704 22.9867 97.9638 20.7733 97.9638 18.16V1.8H105.764ZM134.36 30.32C132.974 30.32 131.854 29.9467 131 29.2C130.174 28.4267 129.76 27.4533 129.76 26.28C129.76 25.1067 130.174 24.1333 131 23.36C131.854 22.5867 132.974 22.2 134.36 22.2C135.72 22.2 136.814 22.5867 137.64 23.36C138.494 24.1333 138.92 25.1067 138.92 26.28C138.92 27.4267 138.494 28.3867 137.64 29.16C136.814 29.9333 135.72 30.32 134.36 30.32Z" />
              <path
                d="M70.3903 23.72C72.977 21.6933 75.097 19.9467 76.7503 18.48C78.4036 17.0133 79.7903 15.5067 80.9103 13.96C82.0303 12.3867 82.5903 10.8933 82.5903 9.48C82.5903 8.62667 82.3903 7.96 81.9903 7.48C81.617 7 81.057 6.76 80.3103 6.76C79.537 6.76 78.937 7.09333 78.5103 7.76C78.0836 8.4 77.8836 9.34667 77.9103 10.6H70.3103C70.3903 8.22667 70.9103 6.26667 71.8703 4.72C72.8303 3.14667 74.0836 2 75.6303 1.28C77.177 0.533331 78.897 0.159998 80.7903 0.159998C84.0703 0.159998 86.5103 0.973331 88.1103 2.6C89.7103 4.22667 90.5103 6.33333 90.5103 8.92C90.5103 11.6933 89.577 14.2933 87.7103 16.72C85.8703 19.1467 83.5636 21.32 80.7903 23.24H90.7903V29.6H70.3903V23.72Z"
                fill="#272EDB"
              />
            </svg>
          </Link>
          <div className="dropdown hidden md:block">
            <div
              tabIndex={0}
              role="button"
              className="m-1 text-xl font-medium transition-colors hover:text-blue-800 md:mr-4 lg:mr-8"
            >
              MEN
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-52 rounded-none bg-base-100 px-0 py-2  shadow"
            >
              <li>
                <Link
                  href={Routes.MEN + Routes.SHIRTS}
                  className="rounded-none hover:text-info"
                >
                  Shirts
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.MEN + Routes.SWEATSHIRTS}
                  className="rounded-none hover:text-info"
                >
                  Sweatshirts
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.MEN + Routes.HOODIE}
                  className="rounded-none hover:text-info"
                >
                  Hoodies
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.MEN + Routes.JOGGER}
                  className="rounded-none hover:text-info"
                >
                  Joggers & Shorts
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown hidden md:block">
            <div
              tabIndex={0}
              role="button"
              className="m-1 text-xl font-medium transition-colors hover:text-blue-800"
            >
              WOMEN
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-52 rounded-none bg-base-100 px-0 py-2  shadow"
            >
              <li>
                <Link
                  href={Routes.WOMEN + Routes.SHIRTS}
                  className="rounded-none hover:text-info"
                >
                  Shirts
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.WOMEN + Routes.SWEATSHIRTS}
                  className="rounded-none hover:text-info"
                >
                  Sweatshirts
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.WOMEN + Routes.HOODIE}
                  className="rounded-none hover:text-info"
                >
                  Hoodies
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.WOMEN + Routes.JOGGER}
                  className="rounded-none hover:text-info"
                >
                  Joggers & Shorts
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <div className="hidden gap-5 pr-4 lg:flex">
            <a
              href="mailto:s.vahkevych@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-blue-800"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_102_5420)">
                  <path
                    d="M14 0.666748H2C1.46957 0.666748 0.960859 0.877462 0.585786 1.25253C0.210714 1.62761 0 2.13631 0 2.66675L0 15.3334H16V2.66675C16 2.13631 15.7893 1.62761 15.4142 1.25253C15.0391 0.877462 14.5304 0.666748 14 0.666748ZM2 2.00008H14C14.1768 2.00008 14.3464 2.07032 14.4714 2.19534C14.5964 2.32037 14.6667 2.48994 14.6667 2.66675V3.11141L9.41467 8.36408C9.03895 8.73829 8.53028 8.94839 8 8.94839C7.46972 8.94839 6.96105 8.73829 6.58533 8.36408L1.33333 3.11141V2.66675C1.33333 2.48994 1.40357 2.32037 1.5286 2.19534C1.65362 2.07032 1.82319 2.00008 2 2.00008ZM1.33333 14.0001V5.00008L5.64267 9.30675C6.26842 9.93092 7.11617 10.2814 8 10.2814C8.88383 10.2814 9.73158 9.93092 10.3573 9.30675L14.6667 5.00008V14.0001H1.33333Z"
                    fill="#161616"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_102_5420">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>s.vahkevych@gmail.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 pl-4 transition-colors hover:text-blue-800"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_102_5423)">
                  <path
                    d="M9.4668 10.8407C7.52572 10.0188 5.98217 8.47164 5.1648 6.52867L7.43146 4.258L3.25813 0.0813333L1.14413 2.19467C0.777464 2.56343 0.487562 3.00124 0.291196 3.48277C0.0948312 3.9643 -0.00409881 4.47999 0.000130068 5C0.000130068 9.832 6.16813 16 11.0001 16C11.5201 16.0045 12.0358 15.9058 12.5172 15.7094C12.9987 15.513 13.4364 15.2229 13.8048 14.856L15.9188 12.742L11.7421 8.56533L9.4668 10.8407ZM12.8615 13.9133C12.6166 14.156 12.326 14.3476 12.0065 14.4769C11.6869 14.6063 11.3448 14.6708 11.0001 14.6667C6.8448 14.6667 1.33346 9.15533 1.33346 5C1.32954 4.65522 1.39411 4.31309 1.52342 3.99346C1.65274 3.67383 1.84423 3.38305 2.0868 3.138L3.25813 1.96667L5.54946 4.258L3.5928 6.21467L3.75613 6.624C4.23696 7.91021 4.98864 9.07804 5.96023 10.0484C6.93182 11.0187 8.10063 11.7688 9.38746 12.248L9.79146 12.402L11.7421 10.4507L14.0335 12.742L12.8615 13.9133ZM9.33346 1.33333V0C11.101 0.00194106 12.7955 0.704943 14.0454 1.95477C15.2952 3.20459 15.9982 4.89915 16.0001 6.66667H14.6668C14.6652 5.25267 14.1028 3.89703 13.1029 2.89718C12.1031 1.89733 10.7475 1.33492 9.33346 1.33333ZM9.33346 4V2.66667C10.394 2.66773 11.4108 3.08949 12.1607 3.83941C12.9106 4.58933 13.3324 5.60613 13.3335 6.66667H12.0001C12.0001 5.95942 11.7192 5.28115 11.2191 4.78105C10.719 4.28095 10.0407 4 9.33346 4Z"
                    fill="#161616"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_102_5423">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>+1 (234) 567-890</span>
            </a>
          </div>
          <div className="flex gap-4 md:gap-6">
            <Link href={Routes.SEARCH}>
              <svg
                className="ml-6 w-5 fill-primary transition-colors hover:fill-blue-800 md:w-7"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_607_257)">
                  <path d="M27.9993 26.3511L20.6936 19.0454C22.5913 16.7244 23.5244 13.7628 23.2997 10.7732C23.0751 7.78359 21.71 4.99467 19.4868 2.98333C17.2635 0.971984 14.3523 -0.107904 11.3552 -0.0329664C8.35806 0.0419707 5.50441 1.266 3.38447 3.38594C1.26453 5.50588 0.0405059 8.35953 -0.0344312 11.3566C-0.109368 14.3537 0.97052 17.265 2.98186 19.4882C4.99321 21.7115 7.78213 23.0766 10.7717 23.3012C13.7614 23.5258 16.723 22.5928 19.0439 20.6951L26.3496 28.0007L27.9993 26.3511ZM11.6659 21.0007C9.81996 21.0007 8.01546 20.4533 6.4806 19.4278C4.94574 18.4022 3.74947 16.9445 3.04305 15.2391C2.33663 13.5337 2.1518 11.657 2.51193 9.84655C2.87206 8.03606 3.76097 6.37301 5.06626 5.06773C6.37155 3.76243 8.03459 2.87352 9.84508 2.51339C11.6556 2.15326 13.5322 2.33809 15.2376 3.04451C16.9431 3.75093 18.4007 4.94721 19.4263 6.48207C20.4519 8.01692 20.9993 9.82143 20.9993 11.6674C20.9965 14.1419 20.0123 16.5142 18.2625 18.264C16.5128 20.0137 14.1404 20.9979 11.6659 21.0007Z" />
                </g>
                <defs>
                  <clipPath id="clip0_607_257">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <UserMenuBtn session={session} />
            <FavoriteBtn favorites={favorites} />
            <ShopingCartBtn cart={cart} />
          </div>
        </div>
      </div>
    </header>
  );
}
