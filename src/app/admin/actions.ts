"use server";

// import { prisma } from "@/lib/db/prisma";
// import { revalidatePath } from "next/cache";

// export async function addProduct(formData: FormData) {
//   const name = formData.get("name")?.toString();
//   const gender = formData.get("gender")?.toString();
//   const category = formData.get("category")?.toString();
//   const description = formData.get("description")?.toString();
//   const price = Number(formData.get("price") || 0);
//   const discountPrice = Number(formData.get("discountPrice") || 0);
//   const imageUrl = formData.get("imageUrl")?.toString();
//   const isNewProduct = formData.get("isNewProduct") === "true";
//   const isBestSeller = formData.get("isBestSeller") === "true";
//   const amount = formData.get("amount")?.toString() || "0";

//   if (!name || !gender || !category || !description || !price || !imageUrl) {
//     throw Error("Missing required fields");
//   }

//   await prisma.products.create({
//     data: {
//       name,
//       gender,
//       category,
//       description,
//       price,
//       discountPrice,
//       imageUrl,
//       isAvailableForPurchase: true,
//       isBestSeller,
//       isNewProduct,
//       amount,
//     },
//   });

//   revalidatePath("/admin/add-product");
// }
