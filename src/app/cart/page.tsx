import { Metadata } from "next";
import { getCart } from "@/lib/db/cart";
import CartEntry from "./_components/CartEntry";
import { setProductQuantity } from "./acitons";

export const metadata: Metadata = {
  title: "You Cart",
};

export default async function CartPage() {
  const cart = await getCart();
  return (
    <main className="m-auto max-w-7xl px-4 pb-14 pt-6 md:pb-32 md:pt-12">
      <div className="mb-4 md:mb-8 md:flex md:gap-4">
        <h1 className="text-2xl md:text-5xl">Shopping Cart</h1>
        <span className="text-lg text-secondary md:content-end md:text-xl">
          2 Products
        </span>
      </div>
      <div>
        <progress
          className="progress progress-success w-2/5"
          value="10"
          max="100"
        ></progress>
        <div className="mt-2 text-sm md:mt-4 md:text-lg">
          You are eligible for free shipping!
        </div>
      </div>
      <div>
        <div className="mt-12 hidden flex-wrap items-start gap-6 text-sm sm:flex">
          <div className="flex-1">Product</div>
          <div className="w-14 text-center">Price</div>
          <div className="w-36 text-center">Quantity</div>
          <div className="w-14 text-center">Total</div>
        </div>
        <div className="divider mt-0" />
        {cart?.items.map((item) => (
          <CartEntry
            setProductQuantity={setProductQuantity}
            cartItem={item}
            key={item.id}
          />
        ))}
        <div className="flex justify-end">
          <div className="sm:flex">
            <div className="text-xl">
              Subtotal:{" "}
              <span className="text-2xl font-bold">
                {cart?.subtotal && cart.subtotal > 0 ? cart?.subtotal / 100 : 0}
                ₴
              </span>
            </div>
            <button className="btn mx-6 mt-4 block rounded-none bg-blue-800 px-4 text-lg text-base-100 hover:text-blue-900 sm:mt-0">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
