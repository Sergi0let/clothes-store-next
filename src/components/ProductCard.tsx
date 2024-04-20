import { formatPrice } from "@/lib/format";
import Image from "next/image";
import React from "react";

type ProductCardProps = {
  name: string;
  isBestSeller: boolean;
  isNewProduct: boolean;
  discountPrice: number;
  price: number;
  imageUrl: string;
  id: string;
  description: string;
};

export default function ProductCard({
  name,
  isBestSeller,
  isNewProduct,
  discountPrice,
  price,
  id,
  imageUrl,
  description,
}: ProductCardProps) {
  return (
    <div>
      <div>
        <Image src={imageUrl} width={400} height={500} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
        <div className="mt-2 flex gap-2">
          <div className="rating max-w-16 md:max-w-24">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div className="align-middle text-xs leading-6 text-secondary md:text-[14px]">
            5 rerviews
          </div>
        </div>
        <div className="ml-4 text-xs text-secondary line-through md:text-base">
          {formatPrice(discountPrice)}
        </div>
        <div className="text-[18px] font-semibold text-primary md:text-xl">
          {formatPrice(price)}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}
