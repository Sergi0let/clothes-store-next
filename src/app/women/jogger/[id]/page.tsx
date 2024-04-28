import type { Metadata } from "next";
import { prisma } from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import { Routes } from "@/constants";

import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Jogger Page",
  description: "About women jogger",
};

export default async function JoggerPage({
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
              label: "Women",
              href: Routes.WOMEN,
            },
            {
              label: "Joggers",
              href: Routes.WOMEN + Routes.JOGGER,
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
