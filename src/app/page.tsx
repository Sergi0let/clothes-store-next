import { prisma } from "@/lib/db/prisma";

import CardList from "@/components/CardList";
import Link from "next/link";
import PaginationBar from "@/components/PaginationBar";
import MenHero from "@/assets/hero/hero-men.png";
import WomenHero from "@/assets/hero/hero-women.png";

type HomeProps = {
  searchParams: { page: string };
};

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);
  const pageSize = 8;
  const totalItemCount = await prisma.products.count();
  const totalPages = Math.ceil(totalItemCount / pageSize);

  const products = await prisma.products.findMany({
    orderBy: { reviews: "desc" },
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  });
  return (
    <main>
      <div className="m-auto flex max-w-[1400px] flex-col sm:flex-row md:min-h-[560px] lg:min-h-[700px]">
        <section
          className="hero min-h-[360px] content-end md:pb-12"
          style={{
            backgroundImage: `url(${MenHero.src})`,
            backgroundPositionY: "0",
          }}
        >
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
            backgroundImage: `url(${WomenHero.src})`,
            backgroundPositionY: "0",
          }}
        >
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
