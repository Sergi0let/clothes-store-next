import { prisma } from "@/lib/db/prisma";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import { CircleCheckBig, CirclePercent } from "lucide-react";
import { CircleX } from "lucide-react";
import Link from "next/link";

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
            <th>+/-</th>
            <th>Product info</th>
            <th>Price/Discount</th>
            <th>
              <CirclePercent />
            </th>
            <th>Amount</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product) => (
            <tr key={product.id}>
              <th>
                {product.isAvailableForPurchase ? (
                  <CircleCheckBig color="#24BF33" />
                ) : (
                  <CircleX color="#BB1D1D" />
                )}
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
                  <div className="space-y-2">
                    <div className="font-medium">{product.name}</div>
                    <div className="font-bold uppercase">{product.gender}</div>
                    <div>{product.category}</div>
                    <div className="">
                      {product.isBestSeller && (
                        <span className="badge badge-primary badge-sm text-base-100 md:badge-lg">
                          Bestseller
                        </span>
                      )}
                      {product.isNewProduct && (
                        <span className="badge badge-accent badge-sm text-base-100 md:badge-lg">
                          New product
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </td>

              <td className="whitespace-nowrap">
                <div>
                  <b>Price:</b> {formatPrice(product.price)}
                </div>
                <div>
                  <em>Discount:</em> {formatPrice(product.discountPrice)}
                </div>
              </td>

              <td>
                {product.discountPrice &&
                  Math.ceil(
                    ((product.price - product.discountPrice) / product.price) *
                      100,
                  )}{" "}
                %
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
                      <Link href={`/admin/add-product/edit/${product.id}`}>
                        Update
                      </Link>
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
