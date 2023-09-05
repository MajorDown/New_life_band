import SiteData from "@/data/siteData";
import React from "react";
import MediaArticle from "@/components/MediaArticle";

const Medias = () => {
  return (
    <section id="mediasSection">
      <h2>Un peu de musique dans ce monde de brut</h2>
      {SiteData.medias.map((media) => (
        <MediaArticle src={media} />
      ))}
    </section>
  );
};

export default Medias;
