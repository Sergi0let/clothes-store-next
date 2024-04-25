import { getFavorite } from "@/lib/db/favorite";
import { Metadata } from "next";
import React from "react";
import FavoriteEntry from "./_components/FavoriteEntry";

export const metadata: Metadata = {
  title: "Favorites Products",
};

export default async function FavoritePage() {
  const favorites = await getFavorite();
  return (
    <main className="m-auto max-w-7xl px-4 pb-14 pt-6 md:pb-32 md:pt-12">
      <div className="mb-4 md:mb-8 md:flex md:gap-4">
        <h1 className="text-2xl md:text-5xl">Favorite Cart</h1>
        <span className="text-lg text-secondary md:content-end md:text-xl">
          {favorites?.size} Products
        </span>
      </div>
      <div>
        <div className="mt-12 hidden flex-wrap items-start gap-6 text-sm sm:flex">
          <div className="flex-1">Product</div>
          <div className="w-14 text-center">Price</div>
        </div>
        <div className="divider mt-0" />
        {favorites?.FavoriteItem.map((item) => (
          <FavoriteEntry favorite={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
