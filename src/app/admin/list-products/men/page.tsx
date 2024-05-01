import { prisma } from "@/lib/db/prisma";
import ProductList from "../../_components/ProductList";

export default async function AllPage() {
  const [product, count] = await Promise.all([
    prisma.products.findMany({
      where: { gender: "men" },
      orderBy: { createdAt: "desc" },
    }),
    prisma.products.aggregate({ where: { gender: "men" }, _count: true }),
  ]);

  return (
    <div>
      <ProductList products={product} count={count._count} />
    </div>
  );
}
