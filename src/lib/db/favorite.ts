import { getServerSession } from "next-auth";
import { prisma } from "./prisma";
import { cookies } from "next/headers";
import { Prisma } from "@prisma/client";
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
