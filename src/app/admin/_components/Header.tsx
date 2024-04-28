import { Routes } from "@/constants";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <Link href={Routes.HOME} className="btn btn-ghost text-xl">
        HOME
      </Link>
      <Link
        href={Routes.ADMIN + Routes.ADDPRODACT}
        className="btn btn-ghost text-xl"
      >
        ADD PRODUCT
      </Link>
      <Link
        href={Routes.ADMIN + Routes.LISTPRODACT}
        className="btn btn-ghost text-xl"
      >
        LIST PRODUCTS
      </Link>
    </div>
  );
}
