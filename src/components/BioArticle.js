"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const BioArticle = ({ src, imagePosition }) => {
  const [disposition, setdisposition] = useState({});
  const [alignment, setAlignment] = useState({});

  useEffect(() => {
    switch (imagePosition) {
      case "up":
        setdisposition({
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column-reverse",
        });
        setAlignment({ textAlign: "center" });
        break;
      case "down":
        setdisposition({
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        });
        setAlignment({ textAlign: "center" });
        break;
      case "left":
        setdisposition({
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
        });
        setAlignment({ textAlign: "end" });
        break;
      case "right":
        setdisposition({
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        });
        setAlignment({ textAlign: "start" });
        break;
    }
  }, [imagePosition]);

  return (
    <article className="bioArticle" style={disposition}>
      <div className="bioArticleTextContainer">
        {src.title && <h3 style={alignment}>{src.title}</h3>}
        <p style={alignment}>{src.description}</p>
      </div>
      <div className="bioArticleImageContainer">
        <Image src={src.url} alt={src.vignette} width={300} height={300} />
      </div>
    </article>
  );
};

export default BioArticle;
