import React, { useState, useEffect } from "react";

import { Props } from "./types";
import { Outer } from "./styles";

export const Slideshow = ({ next }: Props) => {
  const [url, setUrl] = useState<string | null>();

  useEffect(() => {
    const timeout = setInterval(() => {
      next().then((value) => setUrl(value));
    }, 30000);

    return () => clearInterval(timeout);
  }, []);

  useEffect(() => {
    if (url) {
      const img = document.getElementById("slideImg");
      if (img) img.setAttribute("src", url);
    }
  }, [url]);

  return (
    <Outer>
      <img
        id="slideImg"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Outer>
  );
};
