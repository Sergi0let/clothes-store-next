import { getServerSession } from "next-auth";
import { prisma } from "./prisma";
import { cookies } from "next/headers";
import { FavoriteItem, Prisma } from "@prisma/client";
import authOptions from "@/utils/authOptions";

export type FavoriteWithProducts = Prisma.FavoriteGetPayload<{
  include: { FavoriteItem: { include: { product: true } } };
}>;

export type FavoriteItemWithProducts = Prisma.FavoriteItemGetPayload<{
  include: { product: true };
}>;

export type FavoriteCart = FavoriteWithProducts & {
  size: number;
};

export async function getFavorite(): Promise<FavoriteCart | null> {
  const session = await getServerSession(authOptions);
  let favorite: FavoriteWithProducts | null = null;

  if (session) {
    favorite = await prisma.favorite.findFirst({
      where: { userId: session.user.id },
      include: { FavoriteItem: { include: { product: true } } },
    });
  } else {
    const localFavoriteId = cookies().get("localFavoriteId")?.value;
    favorite = localFavoriteId
      ? await prisma.favorite.findUnique({
          where: { id: localFavoriteId },
          include: { FavoriteItem: { include: { product: true } } },
        })
      : null;
  }

  if (!favorite) return null;

  return {
    ...favorite,
    size: favorite.FavoriteItem.length,
  };
}

export async function createFavorite(): Promise<FavoriteCart> {
  const session = await getServerSession(authOptions);

  let newFavorites;

  if (session) {
    newFavorites = await prisma.favorite.create({
      data: {
        userId: session.user.id,
      },
    });
  } else {
    newFavorites = await prisma.favorite.create({ data: {} });
  }

  cookies().set("localFavoriteId", newFavorites.id);

  return {
    ...newFavorites,
    FavoriteItem: [],
    size: 0,
  };
}

export async function mergeAnonymousFavoriteIntoUser(userId: string) {
  const localFavoriteId = cookies().get("localFavoriteId")?.value;

  const localFavorite = localFavoriteId
    ? await prisma.favorite.findUnique({
        where: { id: localFavoriteId },
        include: { FavoriteItem: true },
      })
    : null;

  if (!localFavorite) return;

  const userFavorite = await prisma.favorite.findFirst({
    where: { userId },
    include: { FavoriteItem: true },
  });

  await prisma.$transaction(async (tx) => {
    if (userFavorite) {
      const mergedFavoriteItems = mergeFavoriteItems(
        localFavorite.FavoriteItem,
        userFavorite.FavoriteItem,
      );

      await tx.favoriteItem.deleteMany({
        where: { favoriteId: userFavorite.id },
      });

      await tx.favorite.update({
        where: { id: userFavorite.id },
        data: {
          FavoriteItem: {
            createMany: {
              data: mergedFavoriteItems.map((item) => ({
                productId: item.productId,
              })),
            },
          },
        },
      });
    } else {
      await tx.favorite.create({
        data: {
          userId,
          FavoriteItem: {
            createMany: {
              data: localFavorite.FavoriteItem.map((item) => ({
                productId: item.productId,
              })),
            },
          },
        },
      });
    }
    await tx.favorite.delete({ where: { id: localFavorite.id } });
    cookies().set("localFavoriteId", "");
  });
}

function mergeFavoriteItems(...favoriteItems: FavoriteItem[][]) {
  return favoriteItems.reduce((acc, items) => {
    items.forEach((item) => {
      const existingItem = acc.find((i) => i.productId === item.productId);
      if (!existingItem) {
        acc.push(item);
      }
    });
    return acc;
  }, [] as FavoriteItem[]);
}
