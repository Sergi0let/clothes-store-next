import prisma from "@/lib/db/prisma";
import SubminBtn from "./_component/SubminBtn";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const metadata = {
  title: "Add product",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const gender = formData.get("gender")?.toString();
  const category = formData.get("category")?.toString();
  const description = formData.get("description")?.toString();
  const price = Number(formData.get("price") || 0);
  const discountPrice = Number(formData.get("discountPrice") || 0);
  const imageUrl = formData.get("imageUrl")?.toString();
  const isNewProduct = formData.get("isNewProduct") === "true";
  const isBestSeller = formData.get("isBestSeller") === "true";

  console.log(formData);

  if (!name || !gender || !category || !description || !price || !imageUrl) {
    throw Error("Missing required fields");
  }

  await prisma.products.create({
    data: {
      name,
      gender,
      category,
      description,
      price,
      discountPrice,
      imageUrl,
      isAvailableForPurchase: true,
      isBestSeller,
      isNewProduct,
    },
  });

  revalidatePath("/admin/add-product");
}

export default function AddProductPage() {
  return (
    <div className="m-auto max-w-7xl p-2">
      <h1 className="text-4xl font-bold">Add product page</h1>
      <form action={addProduct} className="mt-4 max-w-md space-y-4">
        <label className="primay-color form-control w-full">
          <div className="label">
            <span className="label-text overflow-hidden text-ellipsis whitespace-nowrap">
              Enter product name
            </span>
            <span className="label-text-alt">name</span>
          </div>
          <input
            name="name"
            id="name"
            type="text"
            required
            placeholder="Product name"
            className="input input-bordered input-primary w-full"
          />
        </label>

        <label className="primay-color form-control w-full">
          <div className="label">
            <span className="label-text overflow-hidden text-ellipsis whitespace-nowrap">
              Who will wear this product
            </span>
            <span className="label-text-alt">gender</span>
          </div>
          <select
            defaultValue={"men"}
            id="gender"
            name="gender"
            className="select select-bordered select-primary"
          >
            <option value={"men"}>Men</option>
            <option value={"women"}>Women</option>
          </select>
        </label>

        <label className="primay-color form-control w-full">
          <div className="label">
            <span className="label-text overflow-hidden text-ellipsis whitespace-nowrap">
              Select clothing type
            </span>
            <span className="label-text-alt">category</span>
          </div>
          <select
            id="category"
            name="category"
            className="select select-bordered select-primary"
            defaultValue={"shirt"}
          >
            <option value={"shirt"}>Shirt</option>
            <option value={"jogger"}>Joggers</option>
          </select>
        </label>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text overflow-hidden text-ellipsis whitespace-nowrap">
              Provide a detailed product description
            </span>
            <span className="label-text-alt">description</span>
          </div>
          <textarea
            required
            id="description"
            name="description"
            className="textarea textarea-bordered textarea-primary h-24"
            placeholder="Enter a detailed description of the product here.."
          ></textarea>
        </label>

        <div className="flex flex-col gap-2 sm:flex-row">
          <label className="max-w-fill form-control w-full">
            <div className="label">
              <span className="label-text">What is price?</span>
              <span className="label-text-alt">price</span>
            </div>
            <input
              required
              name="price"
              id="price"
              type="number"
              placeholder="Normal price"
              className="input input-bordered input-primary w-full"
            />
          </label>
          <label className="form-control w-full max-w-full">
            <div className="label">
              <span className="label-text ">Discount price</span>
              <span className="label-text-alt">discountPrice</span>
            </div>
            <input
              name="discountPrice"
              id="discountPrice"
              type="number"
              placeholder="Discount price"
              className="input input-bordered input-primary w-full"
            />
          </label>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <label className="max-w-fill form-control w-full">
            <div className="label">
              <span className="label-text">Is Bestseller</span>
              <span className="label-text-alt">isBestSeller</span>
            </div>
            <span>Yes</span>
            <input
              type="radio"
              name="isBestSeller"
              className="radio-primary radio"
              defaultValue="true"
            />
            <span>No</span>
            <input
              type="radio"
              name="isBestSeller"
              value="false"
              className="radio-primary radio"
            />
          </label>
          <label className="form-control w-full max-w-full">
            <div className="label">
              <span className="label-text ">New product</span>
              <span className="label-text-alt">isNewProduct</span>
            </div>
            <span>Yes</span>
            <input
              type="radio"
              name="isNewProduct"
              className="radio-primary radio"
              defaultValue="true"
            />
            <span>No</span>
            <input
              type="radio"
              name="isNewProduct"
              value="false"
              className="radio-primary radio"
            />
          </label>
        </div>

        <label className="primay-color form-control w-full">
          <div className="label">
            <span className="label-text">Product Image</span>
            <span className="label-text-alt">imageUrl</span>
          </div>
          <input
            required
            name="imageUrl"
            id="imageUrl"
            type="text"
            placeholder="Image URL"
            className="input input-bordered input-primary w-full"
          />
        </label>
        <SubminBtn className="btn-block">Submit</SubminBtn>
      </form>
    </div>
  );
}
