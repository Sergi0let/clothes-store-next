import Link from "next/link";
import { Routes } from "@/constants";
import { ListChecks, ShieldHalf, ShieldPlus } from "lucide-react";

export default function Navbar() {
  const allPathProducts = Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL;
  const menPathProducts = Routes.ADMIN + Routes.LISTPRODACT + Routes.MEN;
  const womenPathProducts = Routes.ADMIN + Routes.LISTPRODACT + Routes.WOMEN;

  return (
    <ul className="menu space-x-2 rounded-box bg-base-200 lg:menu-horizontal">
      <li>
        <Link href={allPathProducts}>
          <ListChecks />
          All products
        </Link>
      </li>
      <li>
        <Link href={menPathProducts}>
          <ShieldPlus />
          Men
        </Link>
      </li>
      <li>
        <Link href={womenPathProducts}>
          <ShieldHalf />
          Women
        </Link>
      </li>
    </ul>
  );
}
