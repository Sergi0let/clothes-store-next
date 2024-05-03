import type { Metadata } from "next";
import { cache } from "react";
import { prisma } from "@/lib/db/prisma";
import { notFound } from "next/navigation";

import { Category } from "@prisma/client";
import { Routes } from "@/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";

type ProductPage = {
  params: { category: Category; id: string };
};

const getProduct = cache(async (id: string) => {
  const product = await prisma.products.findUnique({
    where: { id },
  });

  if (!product) notFound();

  return product;
});

export async function generateMetadata({
  params,
}: ProductPage): Promise<Metadata> {
  const id = params.id;

  const product = await getProduct(id);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductPage({
  params: { category, id },
}: ProductPage) {
  const product = await getProduct(id);

  return (
    <main className="m-auto max-w-7xl px-4">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: Routes.HOME },
          {
            label: "Men",
            href: Routes.MEN,
          },
          {
            label: category,
            href: Routes.MEN + Routes[category.toUpperCase()],
          },
        ]}
      />
      <ProductCard
        amount={product?.amount}
        description={product?.description}
        discountPrice={product?.discountPrice}
        id={product.id}
        imageUrl={product?.imageUrl}
        isBestSeller={product?.isBestSeller}
        isNewProduct={product?.isNewProduct}
        name={product?.name}
        price={product?.price}
        imageUrlSecond={product?.imageUrlSecond || ""}
      />
    </main>
  );
}
