import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import React from "react";

export default async function ProductPage({
  searchParams: { id },
}: {
  searchParams: { id: string };
}) {
  const product = await prisma.products.findUnique({ where: { id } });
  if (!product) {
    return <div>Nothing</div>;
  }
  return (
    <div>
      <ProductCard
        description={product?.description}
        discountPrice={product?.discountPrice}
        id={product.id}
        imageUrl={product?.imageUrl}
        isBestSeller={product?.isBestSeller}
        isNewProduct={product?.isNewProduct}
        name={product?.name}
        price={product?.price}
      />
    </div>
  );
}
