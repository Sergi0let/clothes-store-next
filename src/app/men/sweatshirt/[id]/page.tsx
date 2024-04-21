import type { Metadata } from "next";
import { prisma } from "@/lib/db/prisma";

import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "sweatshirts Page",
  description: "About men shirt",
};

export default async function SweatshirtsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.products.findUnique({
    where: { id: id },
  });

  if (!product) return <div>Nothing</div>;

  return (
    <div className="m-auto max-w-7xl px-4">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "Men",
            href: "/men",
          },
          {
            label: "Sweatshirts",
            href: "/men/sweatshirt",
          },
        ]}
      />
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
