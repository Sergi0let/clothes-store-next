"use client";

import { app } from "@/utils/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import React, { ChangeEvent, useEffect, useState } from "react";

const storage = getStorage(app);

export default function UploaderImage() {
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState("");

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
              setMedia(downloadURL);
              console.log("File available at", downloadURL);
            });
          },
        );
      };
      file && upload();
    }
  }, [file]);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    }
  };
  return (
    <div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Pick a file</span>
          <span className="label-text-alt">Alt label</span>
        </div>
        <input
          onChange={handleChangeFile}
          type="file"
          id="image"
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <div className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </div>
      </label>
      <input
        readOnly
        type="text"
        name="media"
        id="media"
        value={media}
        placeholder={media ? "Upload" : "Not load"}
      />
    </div>
  );
}
