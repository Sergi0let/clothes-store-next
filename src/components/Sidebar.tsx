import Link from "next/link";
import MenuBtn from "./MenuBtn";

export default function Sidebar() {
  return (
    <aside className="z-50 hidden">
      <div className="overflow-auto bg-base-100">
        <div className="flex justify-between px-5 pt-4 align-middle">
          <span>Menu</span>
          <MenuBtn isOpened={true} className="" />
        </div>
        <div className="divider h-0"></div>
        <div>
          <div className="pl-5 text-xl font-medium uppercase">MEN</div>
          <ul className="space-y-5 pl-9 pt-5">
            <li>
              <Link href="/men/shirts">Shirts</Link>
            </li>
            <li>
              <Link href="/men/sweatshirts">Sweatshirts</Link>
            </li>
            <li>
              <Link href="/men/hoodies">Hoodies</Link>
            </li>
            <li>
              <Link href="/men/joggers">Joggers & Shorts</Link>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div>
          <div className="pl-5 text-xl font-medium uppercase">WOMEN</div>
          <ul className="space-y-5 pl-9 pt-5">
            <li>
              <Link href="/women/shirts">Shirts</Link>
            </li>
            <li>
              <Link href="/men/sweatshirts">Sweatshirts</Link>
            </li>
            <li>
              <Link href="/women/hoodies">Hoodies</Link>
            </li>
            <li>
              <Link href="/women/joggers">Joggers & Shorts</Link>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="space-y-6 pb-5">
          <a
            href="mailto:s.vahkevych@gmail.com"
            className="flex items-center gap-2 pl-4"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_102_5420)">
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
          <a href="tel:+1234567890" className="flex items-center gap-2 pl-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_102_5423)">
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
      </div>
    </aside>
  );
}
