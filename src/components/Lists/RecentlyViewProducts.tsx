import { prisma } from "@/lib/db/prisma";
import CardList from "./CardList";
import { cache } from "@/lib/cashe";

export default function RecentlyViewProducts() {
  const recentlyViewedProduct = cache(
    () => {
      return prisma.products.findMany({
        orderBy: { reviews: "desc" },
        take: 4,
      });
    },
    ["/", "recentlyViewedProduct"],
    {
      revalidate: 60 * 60 * 24,
    },
  );
  return (
    <CardList
      title="Recently viewed products"
      productFetcher={recentlyViewedProduct}
    />
  );
}
