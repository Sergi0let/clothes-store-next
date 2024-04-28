import { prisma } from "@/lib/db/prisma";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import React from "react";

export default async function ProductList() {
  const allProducts = await prisma.products.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount Price</th>
            <th>Sales percent</th>

            <th>Gender (info)</th>
            <th>Amount</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product) => (
            <tr key={product.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        width={100}
                        height={120}
                        src={product.imageUrl}
                        alt={product.name}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.name}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="text-sm opacity-50">{product.category}</div>
              </td>
              <td>{formatPrice(product.price)}</td>
              <td>{formatPrice(product.discountPrice)}</td>
              <td>
                {product.discountPrice &&
                  Math.ceil(
                    ((product.price - product.discountPrice) / product.price) *
                      100,
                  )}{" "}
                %
              </td>
              <td>
                {product.gender}
                <br />
                {product.isBestSeller && (
                  <span className="badge badge-accent badge-sm">
                    Bestseller
                  </span>
                )}
                {product.isNewProduct && (
                  <span className="badge badge-success badge-sm">
                    New product
                  </span>
                )}
              </td>
              <td>
                <span className="badge badge-ghost badge-lg">
                  {product.amount}
                </span>
              </td>
              <th>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Click
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
                  >
                    <li>
                      <a>Update</a>
                    </li>
                    <li className="text-error">
                      <a>Delete</a>
                    </li>
                  </ul>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
