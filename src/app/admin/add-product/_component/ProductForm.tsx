"use client";

import SubminBtn from "./SubminBtn";
import { useFormState } from "react-dom";
import { addProduct, updateProduct } from "../../actions";
import { ChangeEvent, useEffect, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { formatCurrency } from "@/lib/format";
import { Products } from "@prisma/client";

const storage = getStorage(app);

export default function ProductForm({
  product,
}: {
  product?: Products | null;
}) {
  const [error, action] = useFormState(
    product == null ? addProduct : updateProduct.bind(null, product.id),
    {},
  );

  const [normalizePrice, setNormalizePrice] = useState<number | undefined>(
    product?.price,
  );
  const [normalizeDiscountPrice, setNormalizeDiscountPrice] = useState<
    number | undefined
  >(product?.discountPrice);

  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(product?.imageUrl || "");

  const [fileSecond, setFileSecond] = useState<File | null>(null);
  const [imageUrlSecond, setImageUrlSecond] = useState(
    product?.imageUrlSecond || "",
  );

  useEffect(() => {
    if (file) {
      const upload = () => {
        const uniqueName = new Date().getTime() + (file?.name || "");

        const storageRef = ref(storage, uniqueName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImageUrl(downloadURL);
              console.log("File available at", downloadURL);
            });
          },
        );
      };
      file && upload();
    }
    if (fileSecond) {
      const upload = () => {
        const uniqueName = new Date().getTime() + (fileSecond?.name || "");

        const storageRef = ref(storage, uniqueName);

        const uploadTask = uploadBytesResumable(storageRef, fileSecond);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImageUrlSecond(downloadURL);
              console.log("Second file available at", downloadURL);
            });
          },
        );
      };
      fileSecond && upload();
    }
  }, [file, fileSecond]);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl("");
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    }
  };

  const handleSecondFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrlSecond("");
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFileSecond(selectedFile);
      }
    }
  };

  return (
    <form action={action} className="mt-4 max-w-md space-y-4">
      <label className="primay-color form-control w-full">
        <div className="label">
          <span className="label-text overflow-hidden text-ellipsis whitespace-nowrap">
            Enter product name
          </span>
          <span className="label-text-alt">name</span>
        </div>
        <input
          defaultValue={product?.name || ""}
          name="name"
          id="name"
          type="text"
          required
          placeholder="Product name"
          className="input input-bordered input-primary w-full"
        />
        {error?.name && <div className="text-error">{error.name}</div>}
      </label>

      <label className="primay-color form-control w-full">
        <div className="label">
          <span className="label-text overflow-hidden text-ellipsis whitespace-nowrap">
            Who will wear this product
          </span>
          <span className="label-text-alt">gender</span>
        </div>
        <select
          defaultValue={product?.gender || "men"}
          id="gender"
          name="gender"
          className="select select-bordered select-primary"
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
        {error?.gender && <div className="text-error">{error.gender}</div>}
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
          defaultValue={product?.category || "shirt"}
        >
          <option value="shirt">Shirt</option>
          <option value="jogger">Joggers</option>
          <option value="sweatshirt">Sweatshirts</option>
          <option value="hoodie">Hoodies</option>
        </select>
        {error?.category && <div className="text-error">{error.category}</div>}
      </label>

      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text overflow-hidden text-ellipsis whitespace-nowrap">
            Provide description
          </span>
          <span className="label-text-alt">description</span>
        </div>
        <textarea
          required
          defaultValue={product?.description || ""}
          id="description"
          name="description"
          className="textarea textarea-bordered textarea-primary h-24"
          placeholder="Enter a detailed description of the product here.."
        ></textarea>
        {error?.description && (
          <div className="text-error">{error.description}</div>
        )}
      </label>

      <label className="max-w-fill form-control w-full">
        <div className="label">
          <span className="label-text">How many products?</span>
          <span className="label-text-alt">amount</span>
        </div>
        <input
          required
          defaultValue={product?.amount || "0"}
          name="amount"
          id="amount"
          type="number"
          placeholder="Amount"
          className="input input-bordered input-primary w-full"
        />
        {error?.amount && <div className="text-error">{error.amount}</div>}
      </label>

      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="max-w-fill form-control w-full">
          <div className="label">
            <span className="label-text">What is price?</span>
            <span className="label-text-alt">price</span>
          </div>
          <input
            required
            value={normalizePrice || 0}
            name="price"
            id="price"
            type="number"
            placeholder="Normal price"
            className="input input-bordered input-primary w-full"
            onChange={(e) =>
              setNormalizePrice(Number(e.target.value) || undefined)
            }
          />
          <div className="mt-2">
            {formatCurrency((normalizePrice || 0) / 100)}
          </div>
          {error?.price && <div className="text-error">{error.price}</div>}
        </label>
        <label className="form-control w-full max-w-full">
          <div className="label">
            <span className="label-text ">Discount price</span>
            <span className="label-text-alt">discountPrice</span>
          </div>
          <input
            value={normalizeDiscountPrice || 0}
            name="discountPrice"
            id="discountPrice"
            type="number"
            placeholder="Discount price"
            className="input input-bordered input-primary w-full"
            onChange={(e) =>
              setNormalizeDiscountPrice(Number(e.target.value) || undefined)
            }
          />
          <div className="mt-2">
            {formatCurrency((normalizeDiscountPrice || 0) / 100)}
          </div>
          {error?.discountPrice && (
            <div className="text-error">{error.discountPrice}</div>
          )}
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
            defaultValue={product?.isBestSeller.toString() || "true"}
          />
          <span>No</span>
          <input
            type="radio"
            name="isBestSeller"
            value={product?.isBestSeller.toString() || "false"}
            className="radio-primary radio"
          />
          {error?.isBestSeller && (
            <div className="text-error">{error.isBestSeller}</div>
          )}
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
            defaultValue={product?.isNewProduct.toString() || "true"}
          />
          <span>No</span>
          <input
            type="radio"
            name="isNewProduct"
            value={product?.isNewProduct.toString() || "false"}
            className="radio-primary radio"
          />
          {error?.isNewProduct && (
            <div className="text-error">{error.isNewProduct}</div>
          )}
        </label>
      </div>

      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Pick a file</span>
            <span className="label-text-alt">imageUrl</span>
          </div>
          <input
            onChange={handleChangeFile}
            type="file"
            id="image"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </label>
        <input
          readOnly
          type="text"
          name="imageUrl"
          id="media"
          value={imageUrl}
          placeholder={imageUrl ? "Upload" : "Not load"}
        />
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Pick a second file</span>
            <span className="label-text-alt">imageUrlSecond</span>
          </div>
          <input
            onChange={handleSecondFileChange}
            type="file"
            id="image"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </label>
        <input
          readOnly
          type="text"
          name="imageUrlSecond"
          id="mediaSecond"
          value={imageUrlSecond}
          placeholder={imageUrlSecond ? "Upload" : "Not load"}
        />
      </div>
      <SubminBtn
        imgOne={imageUrl}
        imgSec={imageUrlSecond}
        className="btn-block"
      >
        Submit
      </SubminBtn>
    </form>
  );
}
