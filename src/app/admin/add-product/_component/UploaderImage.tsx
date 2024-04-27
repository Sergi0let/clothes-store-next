"use client";

import { app } from "@/utils/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import React, { ChangeEvent, useEffect, useState } from "react";
import SubminBtn from "./SubminBtn";

const storage = getStorage(app);

export default function UploaderImage() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const [fileSecond, setFileSecond] = useState<File | null>(null);
  const [imageUrlSecond, setImageUrlSecond] = useState("");

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
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    }
  };

  const handleSecondFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFileSecond(selectedFile);
      }
    }
  };
  return (
    <>
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

      <SubminBtn disabled={!(imageUrl && imageUrlSecond)} className="btn-block">
        Submit
      </SubminBtn>
    </>
  );
}
