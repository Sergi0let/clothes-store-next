import { Products } from "@prisma/client";
import React from "react";
import Card from "./Card/Card";

type CardListProps = {
  title: string;
  productsDisplay: Products[];
};

export default function CardList({ title, productsDisplay }: CardListProps) {
  return (
    <div className="m-auto max-w-7xl px-3">
      <h2 className="mb-9 mt-14 text-2xl md:mb-14 md:mt-28 md:text-4xl">
        {title}
      </h2>
      <div className="mb-3 grid grid-cols-2 gap-x-4 gap-y-12 md:mb-8 md:grid-cols-3 lg:grid-cols-4">
        {productsDisplay &&
          productsDisplay.map((product) => (
            <Card
              discountPrice={product.discountPrice}
              imageUrl={product.imageUrl}
              isBestSeller={product.isBestSeller}
              isNewProduct={product.isNewProduct}
              name={product.name}
              price={product.price}
              key={product.id}
              id={product.id}
              gender={product.gender}
              category={product.category}
            />
          ))}
      </div>
    </div>
  );
}
