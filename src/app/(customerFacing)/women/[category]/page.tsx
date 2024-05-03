import type { Metadata } from "next";
import { prisma } from "@/lib/db/prisma";

import Breadcrumbs from "@/components/Breadcrumbs";
import CardListCategory from "@/components/Lists/CategoryList";
import { Routes } from "@/constants";
import { Category } from "@prisma/client";
import { SlidersHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Sweatshirts page",
  description: "About women sweatshirts",
};

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const [products, count] = await Promise.all([
    prisma.products.findMany({
      where: {
        gender: "women",
        category: params.category as Category,
      },
    }),
    prisma.products.aggregate({
      where: {
        gender: "women",
        category: params.category as Category,
      },
      _count: true,
    }),
  ]);

  return (
    <main className="m-auto max-w-7xl px-4">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: Routes.HOME },
          {
            label: "Women",
            href: Routes.WOMEN,
          },
        ]}
      />

      <div className="mb-6 gap-6 md:mb-12 md:flex">
        <h1 className="text-2xl font-medium uppercase md:text-4xl">
          {params.category}
        </h1>
        <div className="text-lg md:content-end md:align-bottom">
          {count._count || "No"} Products
        </div>
      </div>
      <div className="mb-8 md:hidden">
        <button>
          <SlidersHorizontal />
        </button>
        <span className="ml-3 text-lg font-medium">Filter</span>
      </div>
      <div className="md:flex">
        <div className="mr-16 hidden space-y-6 md:block">
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <CardListCategory productsDisplay={products} />
      </div>
    </main>
  );
}
