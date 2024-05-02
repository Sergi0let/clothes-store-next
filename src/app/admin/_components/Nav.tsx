"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ComponentProps } from "react";

export default function NavLink(
  props: Omit<ComponentProps<typeof Link>, "className">,
) {
  const pathname = usePathname();

  let pathStr;
  if (typeof props.href === "string") {
    pathStr = props.href.includes("list-product");
  }

  return (
    <Link
      {...props}
      className={clsx(
        pathname === props.href && "bg-warning text-blue-700",
        pathStr && "bg-warning text-blue-700",
        "btn btn-ghost px-1 text-sm md:px-4 md:text-xl lg:px-8",
      )}
    >
      {props.children}
    </Link>
  );
}
