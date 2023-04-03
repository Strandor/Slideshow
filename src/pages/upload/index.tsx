import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { storage } from "../../firebase";

export const Upload = () => {
  const [percentage, setPercentage] = useState<number | null>(null);
  const handleUpload = (files: FileList | null) => {
    if (!files) return;

    const file = files?.item(0);
    if (!file) return;

    const storageRef = ref(storage, `/files/${new Date().toISOString()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed", (value) => {
      setPercentage(value.bytesTransferred / value.totalBytes);
    });
  };

  return (
    <div className="app">
      {percentage ? (
        <>
          <div>{percentage * 100}</div>
          <button onClick={() => setPercentage(null)}>Upload another</button>
        </>
      ) : (
        <form className="app__form">
          <input
            type="file"
            onChange={(event) => handleUpload(event.target.files)}
          />
        </form>
      )}
    </div>
  );
};
