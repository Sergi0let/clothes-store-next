import { Products } from "@prisma/client";
import React from "react";
import Card from "./Card/Card";

type CardListCategoryProps = {
  productsDisplay: Products[];
};

export default function CardListCategory({
  productsDisplay,
}: CardListCategoryProps) {
  return (
    <div className="mb-3 grid grid-cols-2 gap-x-4 gap-y-12 py-3 md:mb-8 md:grid-cols-3">
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
            reviews={product.reviews || 0}
            media={product.media || "/"}
          />
        ))}
    </div>
  );
}
