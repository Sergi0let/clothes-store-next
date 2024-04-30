import { Routes } from "@/constants";
import { prisma } from "@/lib/db/prisma";
import { formatNumber } from "@/lib/format";
import { CircleCheckBig, CircleX, CircleUserRound } from "lucide-react";
import Link from 'next/link';

async function getProductData() {
  const [activeCount, noActiveCount] = await Promise.all([
    prisma.products.count({
      where: {
        isAvailableForPurchase: true,
      },
    }),
    prisma.products.count({
      where: { isAvailableForPurchase: false },
    }),
  ]);
  return {
    activeCount,
    noActiveCount,
  };
}

async function getUsers() {
  return await prisma.user.count();
}

export default async function AdminDashboardPage() {
  const [productData, userAmount] = await Promise.all([
    getProductData(),
    getUsers(),
  ]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="card w-96 space-x-4 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">Sales</h2>
          <div>
            <span>0</span> orders
          </div>
          <div className="pt-4 font-medium">₴ 0</div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">Customers</h2>
          <div>
            <span>0</span> Avarage value
          </div>
          <div className="pt-4 font-medium">0</div>
        </div>
      </div>
      <Link
        href={Routes.ADMIN + Routes.LISTPRODACT}
        className="card w-96 bg-base-100 shadow-2xl"
      >
        <div className="card-body">
          <h2 className="card-title">Products</h2>
          <div className="flex gap-2">
            <span className="font-bold text-success">
              {formatNumber(productData.activeCount)}
            </span>
            <span className="flex-1">In active</span>
            <CircleCheckBig color="#24BF33" />
          </div>
          <div className="flex gap-2 pt-4 ">
            <span className="font-bold text-error">
              {formatNumber(productData.noActiveCount)}
            </span>
            <span className="flex-1">No Active</span>
            <CircleX color="#BB1D1D" />
          </div>
        </div>
      </Link>

      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">Users</h2>
          <div className="flex gap-2">
            <span className="font-bold text-success">
              {formatNumber(userAmount)}
            </span>
            <span className="flex-1">In active</span>
            <CircleUserRound color="#24BF33" />
          </div>
        </div>
      </div>
    </div>
  );
}
