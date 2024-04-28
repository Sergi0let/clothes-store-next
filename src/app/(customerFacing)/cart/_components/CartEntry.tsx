"use client";

import { CartItemWithProducts } from "@/lib/db/cart";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

type CartEntryProps = {
  cartItem: CartItemWithProducts;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
};

export default function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();
  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>,
    );
  }
  return (
    <div>
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
            {isPending && (
              <span className="loading loading-spinner loading-sm" />
            )}
          </div>
        </div>
        <div className="absolute right-4 mt-2 text-lg font-medium sm:static sm:text-xl">
          {product.price / 100} ₴
        </div>
        <div className="my-1 flex items-center gap-2">
          <select
            defaultValue={quantity}
            onChange={(e) => {
              const newQuantity = parseInt(e.currentTarget.value);
              startTransition(async () => {
                await setProductQuantity(product.id, newQuantity);
              });
            }}
            className="select select-bordered w-20 text-xs sm:max-w-[110px]"
          >
            <option value="0">0 remove</option>
            {quantityOptions}
          </select>
        </div>
        <div className="mt-2 hidden text-lg font-medium sm:block sm:text-xl">
          {(product.price * quantity) / 100} грн
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}
