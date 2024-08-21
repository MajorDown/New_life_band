"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const BioArticle = ({ src, imagePosition }) => {
  const [articleClass, setArticleClass] = useState("imageOnLeft");

  useEffect(() => {
    if (imagePosition === "left") setArticleClass("imageOnLeft");
    if (imagePosition === "right") setArticleClass("imageOnRight");
  }, []);

  return (
    <article className={"bioArticle " + articleClass}>
      <div className="bioArticleTextContainer">
        {src.title && <h3>{src.title}</h3>}
        <p>{src.description}</p>
      </div>
      <div className="bioArticleImageContainer">
        <Image src={src.url} alt={src.vignette} width={300} height={300} />
      </div>
    </article>
  );
};

export default BioArticle;
