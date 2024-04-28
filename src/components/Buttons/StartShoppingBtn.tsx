import { Routes } from "@/constants";
import clsx from "clsx";
import Link from "next/link";

type StartShoppingBtnProps = {
  className?: string;
};

export default function StartShoppingBtn({ className }: StartShoppingBtnProps) {
  return (
    <Link
      href={Routes.HOME}
      className={clsx(
        className,
        "flex h-14 w-56 items-center justify-center bg-blue-700 text-lg font-medium uppercase text-base-100 transition-colors hover:bg-blue-800 active:bg-blue-950 md:mt-8 md:h-16 md:w-64",
      )}
    >
      Start Shopping
    </Link>
  );
}
