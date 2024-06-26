import Image from "next/image";
import React from "react";
import AddToFavorite from "./_components/AddToFavorite";
import { formatPrice } from "@/lib/format";
import CardLink from "./_components/CardLink";
import PlaceholderImg from "@/assets/product-placeholder.png";

type CardProps = {
  name: string;
  isBestSeller: boolean;
  isNewProduct: boolean;
  discountPrice: number;
  price: number;
  imageUrl: string;
  id: string;
  category: string;
  gender: string;
  reviews: number;
  userAccount?: boolean;
};

export default function Card({
  name,
  isBestSeller,
  discountPrice,
  isNewProduct,
  price,
  imageUrl,
  id,
  category,
  gender,
  reviews,
  userAccount = false,
}: CardProps) {
  return (
    <div className="max-w100% relative flex h-auto flex-col  md:max-w-[312px]">
      <div className="absolute left-0 top-0">
        {isBestSeller && (
          <span className="block w-fit bg-primary px-2 text-xs font-semibold text-base-100 md:inline-block md:py-2 md:text-sm">
            BESTSELLER
          </span>
        )}
        {isNewProduct && (
          <span className="block w-fit bg-primary px-2 text-xs font-semibold text-base-100 md:inline-block md:py-2 md:text-sm">
            NEW
          </span>
        )}
        {!!discountPrice && (
          <span className="block w-fit bg-error px-2 text-xs font-semibold text-base-100 md:inline-block md:py-2 md:text-sm">
            - {Math.ceil(((price - discountPrice) / price) * 100)} %
          </span>
        )}
      </div>
      <div className="absolute right-0 top-0">
        <AddToFavorite userAccount={userAccount} id={id} />
      </div>
      <figure className="flex-1">
        <Image
          src={imageUrl || PlaceholderImg}
          width={400}
          height={480}
          alt={name}
          className="aspect-auto h-full object-fill object-top"
        />
      </figure>
      <div className="text-pretty">
        <CardLink id={id} name={name} category={category} gender={gender} />
        <div className="mt-2 flex gap-2">
          <label
            htmlFor="ratingProduct"
            className="rating max-w-16 md:max-w-24"
          >
            <input
              id="ratingProduct"
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              id="ratingProduct"
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              id="ratingProduct"
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              id="ratingProduct"
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              id="ratingProduct"
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </label>
          <div className="align-middle text-xs leading-6 text-secondary md:text-[14px]">
            {reviews} reviews
          </div>
        </div>
        <div className="mt-2 overflow-hidden text-ellipsis">
          {discountPrice ? (
            <>
              <span className="text-[18px] font-semibold text-primary md:text-xl">
                {formatPrice(discountPrice)}
              </span>
              <span className="ml-4 text-xs text-secondary line-through md:text-base">
                {formatPrice(price)}
              </span>
            </>
          ) : (
            <span className="text-[18px] font-semibold text-primary md:text-xl">
              {formatPrice(price)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
