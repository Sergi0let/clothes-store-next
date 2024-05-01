"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteProduct, toggleProductAvailable } from "../actions";

type ActiveToggleDropdownItemProps = {
  id: string;
  isAvailableForPurchase: boolean;
};

export default function ActiveToggleDropdownItem({
  id,
  isAvailableForPurchase,
}: ActiveToggleDropdownItemProps) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <li>
      <button
        disabled={pending}
        onClick={() => {
          startTransition(async () => {
            await toggleProductAvailable(id, !isAvailableForPurchase);
            router.refresh();
          });
        }}
      >
        {isAvailableForPurchase ? "Deactive" : "Active"}
      </button>
    </li>
  );
}

export function DeleteBtn({
  id,
  fnDel,
}: {
  id: string;
  fnDel: (id: string) => Promise<any>;
}) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <li className="text-error">
      <button
        disabled={pending}
        onClick={() => {
          startTransition(async () => {
            fnDel(id);
            router.refresh();
          });
        }}
      >
        Delete
      </button>
    </li>
  );
}
