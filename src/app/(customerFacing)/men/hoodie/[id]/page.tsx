import { prisma } from "@/lib/db/prisma";

import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Routes } from "@/constants";

export const metadata: Metadata = {
  title: "Hoodies Page",
  description: "About men hoodie",
};

export default async function HoodiesPage({
  params: { id },
}: {
  params: { id: string };
}) {
  try {
    const product = await prisma.products.findUnique({
      where: { id: id },
    });

    if (!product) return <div>Nothing</div>;

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
              label: "Hoodies",
              href: Routes.MEN + Routes.HOODIE,
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
  } catch (error) {
    console.error("Not exist id product", error);
    return notFound();
  }
}
