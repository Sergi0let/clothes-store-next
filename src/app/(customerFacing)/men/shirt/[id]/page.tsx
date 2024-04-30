import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { Routes } from "@/constants";
import { prisma } from "@/lib/db/prisma";
import { notFound } from 'next/navigation';

export default async function CategoryPage({
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
      <div className="m-auto max-w-7xl px-4">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: Routes.HOME },
            {
              label: "Men",
              href: Routes.MEN,
            },
            {
              label: "Joggers",
              href: Routes.MEN + Routes.JOGGER,
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
      </div>
    );
  } catch (error) {
    console.error("Not exist id product", error);
    return notFound();
  }
}