"use server";

import { prisma } from "@/lib/db/prisma";
import { createCart, getCart } from "@/lib/db/cart";
import { revalidatePath } from "next/cache";
import { createFavorite, getFavorite } from "@/lib/db/favorite";

export async function incrementProductQuantity(productId: string) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = cart.items.find((item) => item.productId === productId);

  if (articleInCart) {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          update: {
            where: { id: articleInCart.id },
            data: { quantity: { increment: 1 } },
          },
        },
      },
    });
  } else {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          create: {
            productId,
            quantity: 1,
          },
        },
      },
    });
  }

  revalidatePath("/[gender]/[category]/[id]");
}

export async function addToFavorite(productId: string) {
  const favorite = (await getFavorite()) ?? (await createFavorite());

  const articleInFavorite = favorite.FavoriteItem.find(
    (item) => item.productId === productId,
  );

  if (articleInFavorite) {
    await prisma.favorite.update({
      where: { id: favorite.id },
      data: {
        FavoriteItem: {
          deleteMany: {
            productId,
          },
        },
      },
    });
  } else {
    await prisma.favorite.update({
      where: { id: favorite.id },
      data: {
        FavoriteItem: {
          create: {
            productId,
          },
        },
      },
    });
  }
  revalidatePath("/[gender]/[category]");
}

export async function addReviews(productId: string) {
  try {
    const product = await prisma.products.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    const updatedReviews = product.reviews === null ? 0 : product.reviews;

    await prisma.products.update({
      where: { id: productId },
      data: {
        reviews: updatedReviews + 1,
      },
    });

    console.log("Review added succeddfully");
  } catch (error) {
    console.log("Error adding review:", error);
  } finally {
    await prisma.$disconnect();
  }
  revalidatePath("/[gender]/[category]");
}
