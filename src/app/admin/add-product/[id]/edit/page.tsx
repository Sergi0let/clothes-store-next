import { prisma } from "@/lib/db/prisma";
import React from "react";
import ProductForm from "../../_component/ProductForm";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("id", id);
  const product = await prisma.products.findUnique({ where: { id } });
  return (
    <div>
      <h1>Edit Page</h1>

      <ProductForm product={product} />
    </div>
  );
}
