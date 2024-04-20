"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function CardLink({
  name,
  id,
  category,
  gender,
}: {
  name: string;
  id: string;
  category: string;
  gender: string;
}) {
  const path = usePathname();
  console.log("path", path);

  return (
    <Link
      href={`/${gender}/${category}/${id}?id=${id}`}
      className="mt-4 line-clamp-2 text-base font-medium transition-colors hover:text-blue-800 sm:mt-6 md:text-[18px]"
    >
      {name}
    </Link>
  );
}
