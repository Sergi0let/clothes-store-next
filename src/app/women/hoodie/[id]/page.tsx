import type { Metadata } from "next";
import { prisma } from "@/lib/db/prisma";

import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Hoodies Page",
  description: "About women hoodie",
};

export default async function HoodiesPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.products.findUnique({
    where: { id: id },
  });

  if (!product) return <div>Nothing</div>;

  return (
    <main className="m-auto max-w-7xl px-4">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Women",
            href: "/women",
          },
          {
            label: "Hoodies",
            href: "/women/hoodies",
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
      />
    </main>
  );
}
