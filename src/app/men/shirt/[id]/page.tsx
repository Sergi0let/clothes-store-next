import Breadcrumbs from "@/components/Breadcrumbs";
import CardListCategory from "@/components/CardListCategory";
import CollectionList from "@/components/CollectionList";
import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";

export default async function CategoryPage({
  searchParams: { id },
}: {
  searchParams: { id: string };
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
            label: "Joggers",
            href: "/men/jogger",
            active: true,
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
