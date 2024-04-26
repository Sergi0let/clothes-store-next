import { Metadata } from "next";
import { prisma } from "@/lib/db/prisma";

import CardList from "@/components/CardList";
import Search from "@/components/Header/_components/Search";

type SearchPageProps = {
  searchParams: { query: string };
};

export function generateMetadata({
  searchParams: { query },
}: SearchPageProps): Metadata {
  return {
    title: `Search: ${query} - on2u`,
  };
}

export default async function SearchPage({
  searchParams: { query },
}: SearchPageProps) {
  const products = await prisma.products.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { id: "desc" },
  });

  return (
    <div className="m-auto max-w-7xl px-3">
      <Search placeholder="Search invoices..." />
      <div>
        {products.length === 0 ? (
          <div className="flex min-h-72 items-center justify-center text-2xl font-medium">
            {"Sorry, we couldn't find any results:"} {query}
          </div>
        ) : (
          <CardList title={`Search: ${query}`} productsDisplay={products} />
        )}
      </div>
    </div>
  );
}
