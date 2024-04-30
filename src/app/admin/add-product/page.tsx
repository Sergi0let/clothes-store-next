import { prisma } from "@/lib/db/prisma";
import SubminBtn from "./_component/SubminBtn";
import { revalidatePath } from "next/cache";
import UploaderImage from "./_component/UploaderImage";
import ProductForm from "./_component/ProductForm";

export const metadata = {
  title: "Add product",
};

export default function AddProductPage() {
  return (
    <div className="m-auto max-w-7xl p-2">
      <h1 className="text-4xl font-bold">Add product page</h1>
      <ProductForm />
    </div>
  );
}
