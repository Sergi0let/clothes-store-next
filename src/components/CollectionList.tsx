import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CollectionList({ gender }: { gender: string }) {
  return (
    <div className="mb-10 grid grid-cols-2 gap-4 md:mb-12 md:grid-cols-4 md:gap-6">
      <Link
        href={`/${gender}/shirt`}
        className="object-covers relative block max-w-[312px] "
      >
        <Image
          src="/hero/shirts.png"
          width={312}
          height={200}
          alt="Link shirts"
          className="object-contain"
        />
        <span className="absolute bottom-2 left-2/4 -translate-x-2/4 text-base font-bold uppercase text-base-100 md:bottom-6 md:text-xl">
          Shirts
        </span>
      </Link>
      <Link
        href={`/${gender}/sweatshirts?category=sweatshirts`}
        className="relative block max-w-[312px] object-contain "
      >
        <Image
          src="/hero/sweatshirts.png"
          width={312}
          height={200}
          alt="Link shirts"
          className="object-contain"
        />
        <span className="absolute bottom-2 left-2/4 -translate-x-2/4 text-base font-bold uppercase text-base-100 md:bottom-6 md:text-xl">
          Sweatshirts
        </span>
      </Link>
      <Link
        href={`/${gender}/hoodies?category=hoodies`}
        className="relative block max-w-[312px] object-contain "
      >
        <Image
          src="/hero/hoodies.png"
          width={312}
          height={200}
          alt="Link shirts"
          className="object-contain"
        />
        <span className="absolute bottom-2 left-2/4 -translate-x-2/4 text-base font-bold uppercase text-base-100 md:bottom-6 md:text-xl">
          Hoodies
        </span>
      </Link>
      <Link
        href={`/${gender}/jogger`}
        className="relative block max-w-[312px] object-contain "
      >
        <Image
          src="/hero/joggers.png"
          width={312}
          height={200}
          alt="Link shirts"
          className="object-contain"
        />
        <span className="absolute bottom-2 left-2/4 -translate-x-2/4 text-xs font-bold uppercase text-base-100 md:bottom-6 md:text-xl">
          Joggers & Shorts
        </span>
      </Link>
    </div>
  );
}
