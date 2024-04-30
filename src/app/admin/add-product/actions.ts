"use server";

import { prisma } from "@/lib/db/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

const addSchema = z.object({
  name: z.string().min(1),
  gender: z.string().min(1),
  category: z.string().min(1),
  description: z.string().min(1),
  price: z.coerce.number().int().min(1),
  discountPrice: z.coerce.number().int().min(1),
  imageUrl: z.string().min(1),
  imageUrlSecond: z.string().min(1),
  isNewProduct: z.string().transform((value) => value === "true"),
  isBestSeller: z.string().transform((value) => value === "true"),
  amount: z.coerce.number().int().min(1),
});

export async function addProduct(state: unknown, formData: FormData) {
  console.log("formData", formData);

  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  console.log("data", data);

  await prisma.products.create({
    data: {
      name: data.name,
      gender: data.gender,
      category: data.category,
      description: data.description,
      price: data.price,
      discountPrice: data.discountPrice,
      imageUrl: data.imageUrl,
      imageUrlSecond: data.imageUrlSecond,
      isAvailableForPurchase: true,
      isBestSeller: data.isBestSeller,
      isNewProduct: data.isNewProduct,
      amount: data.amount,
    },
  });

  revalidatePath("/admin/add-product");
}

export async function updateProduct(
  id: string,
  prevState: unknown,
  formData: FormData,
) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  console.log("data Edit", data);

  const product = await prisma.products.findUnique({ where: { id } });

  if (product == null) return notFound();

  await prisma.products.update({
    where: { id: product.id },
    data: {
      name: data.name,
      gender: data.gender,
      category: data.category,
      description: data.description,
      price: data.price,
      discountPrice: data.discountPrice,
      imageUrl: data.imageUrl,
      imageUrlSecond: data.imageUrlSecond,
      isAvailableForPurchase: true,
      isBestSeller: data.isBestSeller,
      isNewProduct: data.isNewProduct,
      amount: data.amount,
    },
  });
}
