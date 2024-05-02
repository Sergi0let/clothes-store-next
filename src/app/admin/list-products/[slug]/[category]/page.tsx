import ProductList from "@/app/admin/_components/ProductList";
import { Routes } from "@/constants";
import { prisma } from "@/lib/db/prisma";
import React from "react";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string; category: string };
}) {
  let productQuery = {};

  if (params.slug === Routes.ALL.slice(1)) {
    productQuery = {
      where: { category: params.category },
      orderBy: { createdAt: "desc" },
    };
  } else {
    productQuery = {
      where: { gender: params.slug, category: params.category },
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
