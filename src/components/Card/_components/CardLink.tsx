"use client";

import { addReviews } from '@/app/actions';
import Link from "next/link";
import { useTransition } from "react";

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
  const [isPending, startTransition] = useTransition();
  return (
    <Link
      onClick={() => {
        startTransition(async () => {
          await addReviews(id);
        });
      }}
      href={`/${gender}/${category}/${id}`}
      className="mt-4 line-clamp-2 text-base font-medium transition-colors hover:text-blue-800 sm:mt-6 md:text-[18px]"
    >
      {name}
    </Link>
  );
}
