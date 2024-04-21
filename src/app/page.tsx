import prisma from "@/lib/db/prisma";

import CardList from "@/components/CardList";
import Link from "next/link";
import PaginationBar from "@/components/PaginationBar";

type HomeProps = {
  searchParams: { page: string };
};

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);
  const pageSize = 6;
  const totalItemCount = await prisma.products.count();
  const totalPages = Math.ceil(totalItemCount / pageSize);

  const products = await prisma.products.findMany({
    orderBy: { createdAt: "desc" },
    skip: currentPage * pageSize,
    take: pageSize,
  });

  return (
    <main>
      <div className="flex flex-col sm:flex-row md:min-h-[560px] lg:min-h-[700px]">
        <section
          className="hero min-h-[360px] content-end md:pb-12"
          style={{
            backgroundImage: "url(hero/hero-men.png)",
            backgroundPositionY: "0",
          }}
        >
          <div className="hero-overlay opacity-0"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h2 className="mb-5 text-2xl font-bold text-base-100 md:text-6xl">
                MEN
              </h2>
              <Link href={"/men"}>
                <button className="btn rounded-none px-6 uppercase  md:btn-lg  md:px-8 md:text-xl">
                  Shop now
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section
          className="hero min-h-[360px] content-end md:pb-12"
          style={{
            backgroundImage: "url(hero/hero-women.png)",
            backgroundPositionY: "0",
          }}
        >
          <div className="hero-overlay opacity-0"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h2 className="mb-5 text-2xl font-bold text-base-100 md:text-6xl">
                WOMEN
              </h2>
              <Link href={"/women"}>
                <button className="btn rounded-none px-6 uppercase  md:btn-lg  md:px-8 md:text-xl">
                  Shop now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <CardList title="All products" productsDisplay={products} />
      {totalPages > 1 && (
        <div className="pb-9 pt-4 text-center md:pb-12">
          <PaginationBar currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </main>
  );
}
