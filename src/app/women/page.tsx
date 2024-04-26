import type { Metadata } from "next";
import { prisma } from "@/lib/db/prisma";
import { Routes } from "@/constants";

import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryList from "@/components/CategoryList";
import CollectionList from "@/components/CollectionList";

export const metadata: Metadata = {
  title: "Women page",
  description: "About women clothes",
};

export default async function WomenPage() {
  const [products, count] = await Promise.all([
    prisma.products.findMany({
      where: { gender: { equals: "women" } },
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
            label: "Women",
            href: Routes.WOMEN,
            active: true,
          },
        ]}
      />
      <CollectionList gender="women" />
      <div className="mb-6 gap-6 md:mb-12 md:flex">
        <h1 className="text-2xl font-medium md:text-4xl">For woman</h1>
        <div className="text-lg md:content-end md:align-bottom">
          {count._count || "No"} Products
        </div>
      </div>
      <div className="mb-8 md:hidden">
        <button>
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.9993 7.49992C15.8403 7.49992 17.3327 6.0075 17.3327 4.16659C17.3327 2.32564 15.8403 0.833252 13.9993 0.833252C12.4462 0.833252 11.1411 1.89556 10.771 3.33325H1.49935C1.03912 3.33325 0.666016 3.70635 0.666016 4.16659C0.666016 4.62683 1.03912 4.99992 1.49935 4.99992H10.771C11.1411 6.43759 12.4462 7.49992 13.9993 7.49992ZM12.3327 4.16659C12.3327 5.08706 13.0788 5.83325 13.9993 5.83325C14.9198 5.83325 15.666 5.08706 15.666 4.16659C15.666 3.24611 14.9198 2.49992 13.9993 2.49992C13.0788 2.49992 12.3327 3.24611 12.3327 4.16659ZM0.666016 10.8333C0.666016 8.99234 2.1584 7.49992 3.99935 7.49992C5.55255 7.49992 6.85763 8.56225 7.22766 9.99992H16.4993C16.9596 9.99992 17.3327 10.373 17.3327 10.8333C17.3327 11.2935 16.9596 11.6666 16.4993 11.6666H7.22766C6.85763 13.1043 5.55255 14.1666 3.99935 14.1666C2.1584 14.1666 0.666016 12.6742 0.666016 10.8333ZM5.66602 10.8333C5.66602 9.91275 4.91982 9.16658 3.99935 9.16658C3.07887 9.16658 2.33268 9.91275 2.33268 10.8333C2.33268 11.7538 3.07887 12.4999 3.99935 12.4999C4.91982 12.4999 5.66602 11.7538 5.66602 10.8333Z"
              fill="black"
            />
          </svg>
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
