import Link from "next/link";
import { Routes } from "@/constants";
import { ListChecks, ShieldHalf, ShieldPlus } from "lucide-react";

export default function Navbar() {
  // const allPathProducts = Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL;
  // const menPathProducts = Routes.ADMIN + Routes.LISTPRODACT + Routes.MEN;
  // const womenPathProducts = Routes.ADMIN + Routes.LISTPRODACT + Routes.WOMEN;

  return (
    <ul className="menu space-x-2 rounded-box bg-base-200 lg:menu-horizontal">
      <li className="dropdown dropdown-hover">
        <Link href={Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL}>
          <ListChecks />
          All products
        </Link>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <Link
              href={
                Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL + Routes.SHIRTS
              }
            >
              Shirts
            </Link>
          </li>
          <li>
            <Link
              href={
                Routes.ADMIN +
                Routes.LISTPRODACT +
                Routes.ALL +
                Routes.SWEATSHIRTS
              }
            >
              sweatshirts
            </Link>
          </li>
          <li>
            <Link
              href={
                Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL + Routes.HOODIE
              }
            >
              hoodie
            </Link>
          </li>
          <li>
            <Link
              href={
                Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL + Routes.JOGGER
              }
            >
              jogger & pants
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown dropdown-hover">
        <Link
          tabIndex={0}
          role="button"
          href={Routes.ADMIN + Routes.LISTPRODACT + Routes.MEN}
        >
          <ShieldPlus />
          Men
        </Link>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <Link
              href={
                Routes.ADMIN + Routes.LISTPRODACT + Routes.MEN + Routes.SHIRTS
              }
            >
              Shirts
            </Link>
          </li>
          <li>
            <Link
              href={
                Routes.ADMIN +
                Routes.LISTPRODACT +
                Routes.MEN +
                Routes.SWEATSHIRTS
              }
            >
              sweatshirts
            </Link>
          </li>
          <li>
            <Link
              href={
                Routes.ADMIN + Routes.LISTPRODACT + Routes.MEN + Routes.HOODIE
              }
            >
              hoodie
            </Link>
          </li>
          <li>
            <Link
              href={
                Routes.ADMIN + Routes.LISTPRODACT + Routes.MEN + Routes.JOGGER
              }
            >
              jogger & pants
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown dropdown-hover">
        <Link
          tabIndex={0}
          role="button"
          href={Routes.ADMIN + Routes.LISTPRODACT + Routes.WOMEN}
        >
          <ShieldHalf />
          Women
        </Link>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <Link
              href={
                Routes.ADMIN + Routes.LISTPRODACT + Routes.WOMEN + Routes.SHIRTS
              }
            >
              Shirts
            </Link>
          </li>
          <li>
            <Link
              href={
                Routes.ADMIN +
                Routes.LISTPRODACT +
                Routes.WOMEN +
                Routes.SWEATSHIRTS
              }
            >
              sweatshirts
            </Link>
          </li>
          <li>
            <Link
              href={
                Routes.ADMIN + Routes.LISTPRODACT + Routes.WOMEN + Routes.HOODIE
              }
            >
              hoodie
            </Link>
          </li>
          <li>
            <Link
              href={
                Routes.ADMIN + Routes.LISTPRODACT + Routes.WOMEN + Routes.JOGGER
              }
            >
              jogger & pants
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}
