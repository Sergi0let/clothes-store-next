import Image from "next/image";

import { formatPrice } from "@/lib/format";
import AddToCartBtn from "./AddToCartBtn";
import { incrementProductQuantity } from "@/app/actions";
import ImgDoc from "../assets/document.svg";
import ImgWash from "../assets/washicon.svg";
import ImgDelivery from "../assets/deliveryicon.svg";
import ImgSold from "../assets/sold.svg";
import ImgHurry from "../assets/hurryup.svg";
import ImgCheck from "../assets/checkMark.svg";

type ProductCardProps = {
  name: string;
  discountPrice: number;
  price: number;
  imageUrl: string;
  id: string;
  amount: string;
  description: string;
  isBestSeller?: boolean;
  isNewProduct?: boolean;
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
  amount,
}: ProductCardProps) {
  return (
    <div className="md:flex md:gap-14">
      <div className="relative flex-1 md:flex-auto md:flex-shrink-0 ">
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
        </div>
        <Image
          className="w-full"
          src={imageUrl}
          width={400}
          height={500}
          alt={name}
        />
      </div>
      <div className="">
        <h1 className="pt-4 text-2xl md:pt-0 md:text-4xl">{name}</h1>
        <div className="mb-2 flex items-end gap-2 md:mb-6 md:mt-4">
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
          <div className="ml-1 text-xs text-secondary md:text-[14px]">
            5 rerviews
          </div>
        </div>
        {!!discountPrice && (
          <div className="flex items-center">
            <div className="text-sm text-secondary line-through md:text-base">
              {formatPrice(discountPrice)}
            </div>
            <div className="ml-4 bg-error px-1 text-xs font-bold text-base-100 md:px-4 md:py-1 md:text-sm">
              -{Math.ceil((discountPrice / price) * 100)}%
            </div>
          </div>
        )}
        <div className="mt-1 text-[18px] font-semibold text-primary md:text-3xl">
          {formatPrice(price)}{" "}
          <span className="pl-4 text-xs font-normal text-secondary md:text-sm">
            incl. VAT, excl. shipping
          </span>
        </div>

        {+amount === 0 && (
          <div className="my-3 flex gap-2 text-sm font-bold text-error">
            <Image src={ImgSold} alt="sold" width={16} height={16} />
            Sold out
          </div>
        )}
        {+amount <= 5 && +amount > 0 && (
          <div className="my-3 flex gap-2 text-sm font-bold text-warning">
            <Image src={ImgHurry} alt="hurryup" width={16} height={16} />
            Hurry up! Only {amount} in stock
          </div>
        )}
        {+amount > 5 && (
          <div className="my-3 flex gap-2 text-sm font-bold text-success">
            <Image src={ImgCheck} alt="checkMark" width={16} height={16} />
            In stock
          </div>
        )}

        <AddToCartBtn
          productId={id}
          incrementProductQuantity={incrementProductQuantity}
        />
        <div className="join join-vertical my-8 w-full rounded-none">
          <div className="collapse join-item  collapse-arrow border-t border-neutral">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title flex items-center text-sm font-medium after:text-secondary md:text-[16px]">
              <Image
                className="mr-4"
                src={ImgDoc}
                width={16}
                height={16}
                alt="description"
              />
              Description
            </div>
            <div className="collapse-content text-xs text-secondary md:text-sm">
              {description}
            </div>
          </div>
          <div className="collapse join-item collapse-arrow border-t border-neutral">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title flex items-center text-sm font-medium after:text-secondary md:text-[16px]">
              <Image
                className="mr-4"
                src={ImgWash}
                width={16}
                height={16}
                alt="washing"
              />
              Material & Care
            </div>
            <div className="collapse-content text-xs text-secondary md:text-sm">
              <ul className="list-description">
                <li>
                  Перш ніж прати трикотаж, перевірте ярлики з інструкціями
                  виробника щодо режимів прання та температур.
                </li>
                <li>
                  Використовуйте м&#39;який пральний порошок, щоб уникнути
                  пошкоджень волокон.
                </li>
                <li>
                  Краще використовувати прохолодну або теплу воду для прання
                  трикотажу, особливо якщо це натуральні волокна, такі як
                  бавовна або вовна.
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse join-item collapse-arrow border-b border-t border-neutral">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title flex items-center text-sm font-medium after:text-secondary md:text-[16px]">
              <Image
                className="mr-4"
                src={ImgDelivery}
                width={16}
                height={16}
                alt="delivery"
              />
              Delivery & Returns
            </div>
            <div className="collapse-content">
              <ul className="list-description">
                <li>
                  Перш ніж прати трикотаж, перевірте ярлики з інструкціями
                  виробника щодо режимів прання та температур.
                </li>
                <li>
                  Використовуйте м&#39;який пральний порошок, щоб уникнути
                  пошкоджень волокон.
                </li>
                <li>
                  Краще використовувати прохолодну або теплу воду для прання
                  трикотажу, особливо якщо це натуральні волокна, такі як
                  бавовна або вовна.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
