import type { Metadata } from "next";
import { getServerSession } from "next-auth";

import authOptions from "@/utils/authOptions";
import { getFavorite } from "@/lib/db/favorite";
import AccountMenu from "../_components/AccountMenu";
import AccountMenuWeb from "../_components/AccountMenuWeb";
import Card from "@/components/Card/Card";
import Link from "next/link";
import { Routes } from "@/constants";

export const metadata: Metadata = {
  title: "Favorites Products",
};

export default async function FavoritesPage() {
  const favorites = await getFavorite();

  const session = await getServerSession(authOptions);
  if (!favorites) {
    return (
      <div className="pb-14 md:pb-28">
        <h1 className="py-6 text-2xl md:py-12 md:text-4xl">No Favorites</h1>
        <Link
          href={Routes.HOME}
          className="ml-auto mr-auto mt-5 flex h-14 w-56 items-center justify-center bg-blue-700 text-lg font-medium uppercase text-base-100 transition-colors hover:bg-blue-800 active:bg-blue-950 md:mt-8 md:h-16 md:w-64"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-14 md:pb-28">
      <h1 className="py-6 text-2xl md:py-12 md:text-4xl">
        Favorites ({favorites.size})
      </h1>
      <AccountMenu
        email={session?.user.email || ""}
        username={session?.user.name || ""}
        favoritesAmount={favorites.size}
        location="favorites"
      />
      <div className="flex gap-6">
        <AccountMenuWeb
          email={session?.user.email || ""}
          username={session?.user.name || ""}
          favoritesAmount={favorites.size}
          location="favorites"
          className="w-[312px] flex-shrink-0"
        />
        <div className="mt-8 grid grid-cols-2 gap-5 md:mt-0 lg:grid-cols-3">
          {favorites.FavoriteItem.map(({ product }) => (
            <Card
              discountPrice={product.discountPrice}
              imageUrl={product.imageUrl}
              isBestSeller={product.isBestSeller}
              isNewProduct={product.isNewProduct}
              name={product.name}
              price={product.price}
              key={product.id}
              id={product.id}
              gender={product.gender}
              category={product.category}
              reviews={product.reviews || 0}
              userAccount={true}
              media={product?.media || ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
