import { prisma } from "@/lib/db/prisma";
import ProductList from "../../_components/ProductList";
import { Routes } from "@/constants";

export default async function Page({ params }: { params: { slug: string } }) {
  let productQuery = {};

  if (params.slug === Routes.ALL.slice(1)) {
    productQuery = {
      orderBy: { createdAt: "desc" },
    };
  } else {
    productQuery = {
      where: { gender: params.slug },
      orderBy: { createdAt: "desc" },
    };
  }
  const [product, count] = await Promise.all([
    prisma.products.findMany(productQuery),
    prisma.products.aggregate({ _count: true }),
  ]);

  return (
    <div className="h-full">
      <ProductList products={product} count={count._count} />
    </div>
  );
}
