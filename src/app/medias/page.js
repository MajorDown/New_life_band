"use client";
import { WebSiteContext } from "../layout";
import React, { useContext } from "react";
import MediaArticle from "@/components/MediaArticle";

const Medias = () => {
  let SiteData = useContext(WebSiteContext);
  return (
    <section id="mediasSection">
      <h2>Un peu de musique dans ce monde de brut</h2>
      {SiteData.medias.map((media, index) => (
        <MediaArticle key={index} src={media} />
      ))}
    </section>
  );
};

export default Medias;
