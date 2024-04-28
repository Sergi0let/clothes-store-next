import React, { Suspense } from "react";
import Card from "../Card/Card";
import ProductCardSkeleton from "../Skeletons/ProductCardSkeleton";

type CardListProps = {
  title: string;
  productFetcher: () => Promise<any>;
};

export default function CardList({ title, productFetcher }: CardListProps) {
  return (
    <div className="m-auto max-w-7xl px-3">
      <h2 className="mb-9 mt-14 text-2xl md:mb-14 md:mt-28 md:text-4xl">
        {title}
      </h2>
      <div className="mb-3 grid grid-cols-2 gap-x-4 gap-y-12 md:mb-8 md:grid-cols-3 lg:grid-cols-4">
        <Suspense
          fallback={
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          }
        >
          <ProductsSuspence productFetcher={productFetcher} />
        </Suspense>
      </div>
    </div>
  );
}

async function ProductsSuspence({
  productFetcher,
}: {
  productFetcher: () => Promise<any[]>;
}) {
  return (await productFetcher()).map((product) => (
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
    />
  ));
}
