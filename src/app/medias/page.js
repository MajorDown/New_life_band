"use client";
import React from "react";
import MediaArticle from "@/components/MediaArticle";
import { useSiteDataContext } from "@/contexts/SiteDataContext";

const Medias = () => {
  const { siteData, updateSiteData } = useSiteDataContext();
  return (
    <section id="mediasSection">
      <h2>Un peu de musique dans ce monde de brut</h2>
      {siteData.medias.map((media, index) => (
        <MediaArticle key={index} src={media} />
      ))}
    </section>
  );
};

export default Medias;
