import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";

import * as Components from "../../components";

export const Slideshow = () => {
  const storage = getStorage();

  let files: string[] = [];

  useEffect(() => {
    setInterval(() => {
      console.log("Refetching pictures");
      const listRef = ref(storage, "files");
      listAll(listRef).then((res) => {
        files = res.items.map((item) => item.fullPath);
      });
    }, 10000);
  }, []);

  let currentImage = 0;
  const nextImage = async () => {
    const image = files[currentImage];
    if (!image) return null;

    const downloadUrl = await getDownloadURL(ref(storage, files[currentImage]));

    currentImage++;
    if (currentImage >= files.length) currentImage = 0;

    return downloadUrl;
  };

  return <Components.Slideshow next={nextImage} />;
};
