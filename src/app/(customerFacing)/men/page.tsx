import type { Metadata } from "next";
import { prisma } from "@/lib/db/prisma";
import { Routes } from "@/constants";

import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryList from "@/components/Lists/CategoryList";
import CollectionList from "@/components/Lists/CollectionList";
import { SlidersHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Men page",
  description: "About men clothes",
};

export default async function MenPage() {
  const [products, count] = await Promise.all([
    prisma.products.findMany({
      where: { gender: { equals: "men" } },
    }),
    prisma.products.aggregate({
      where: { gender: { equals: "women" } },
      _count: true,
    }),
  ]);

  return (
    <main className="m-auto max-w-7xl px-4">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: Routes.HOME },
          {
            label: "Men",
            href: Routes.MEN,
            active: true,
          },
        ]}
      />
      <CollectionList gender="men" />
      <div className="mb-6 gap-6  md:flex">
        <h1 className="text-2xl font-medium md:text-4xl">For men</h1>
        <div className="text-lg md:content-end md:align-bottom">
          {count._count || "No"} Products
        </div>
      </div>
      <div className="mb-8 flex items-center md:hidden">
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
        <CategoryList productsDisplay={products} />
      </div>
    </main>
  );
}
