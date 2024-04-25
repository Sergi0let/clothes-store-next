"use client";

import Image from "next/image";
import Link from "next/link";
import { FavoriteItemWithProducts } from "@/lib/db/favorite";
import { incrementProductQuantity } from "@/app/actions";
import AddToCartBtn from "@/components/AddToCartBtn";

type FavoriteEntryProps = {
  favorite: FavoriteItemWithProducts;
};

export default function FavoriteEntry({
  favorite: { product },
}: FavoriteEntryProps) {
  return (
    <>
      <div className="relative flex-wrap items-start gap-6 sm:flex">
        <div className="flex flex-1">
          <div className="mr-4 max-w-16 sm:mr-8 sm:max-w-[100px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={100}
              height={150}
            />
          </div>
          <div className="mt-2 flex-1">
            <Link
              className="line-clamp-2 text-sm text-primary hover:underline sm:line-clamp-none md:text-xl md:font-medium"
              href={`/${product.gender}/${product.category}/${product.id}?id=${product.id}`}
            >
              {product.name}
            </Link>
            <ul className="mt-1 text-xs text-secondary md:mt-2 md:text-sm">
              <li>Color: Black</li>
              <li>Size: M</li>
            </ul>
          </div>
        </div>
        <div className="w-sm mt-2 text-lg font-medium sm:text-xl">
          <div>
            <span> {product.price / 100} ₴</span>
            <AddToCartBtn
              className="w-60"
              incrementProductQuantity={incrementProductQuantity}
              productId={product.id}
            />
          </div>
        </div>
      </div>
      <div className="divider" />
    </>
  );
}
