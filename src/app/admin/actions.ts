"use server";

import { prisma } from "@/lib/db/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { Routes } from "@/constants";

const addSchema = z.object({
  name: z.string().min(1),
  gender: z.enum(["men", "women"]),
  category: z.enum(["shirt", "sweatshirt", "hoodie", "jogger"]),
  description: z.string().min(1),
  price: z.coerce.number().int().min(1),
  discountPrice: z.coerce.number().int(),
  imageUrl: z.string().min(1),
  imageUrlSecond: z.string(),
  isNewProduct: z.string().transform((value) => value === "true"),
  isBestSeller: z.string().transform((value) => value === "true"),
  amount: z.coerce.number().int().min(1),
});

export async function addProduct(state: unknown, formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

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

  revalidatePath(Routes.ADMIN + Routes.ADDPRODACT);
  redirect(Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL);
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

  revalidatePath(Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL);
  redirect(Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL);
}

export async function deleteProduct(id: string) {
  await prisma.products.delete({ where: { id } });
  revalidatePath(Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL);
}

export async function deleteUser(id: string) {
  await prisma.user.delete({ where: { id } });
  revalidatePath(Routes.ADMIN + Routes.USERS);
}

export async function toggleProductAvailable(
  id: string,
  isAvailableForPurchase: boolean,
) {
  await prisma.products.update({
    where: { id },
    data: { isAvailableForPurchase },
  });
  revalidatePath(Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL);
}

export async function getAllProduct() {
  await prisma.products.findMany({
    orderBy: { createdAt: "desc" },
  });
}
