"use client";
import React from "react";
import Image from "next/image";
import BioArticle from "../../components/BioArticle";
import { useSiteDataContext } from "../../contexts/SiteDataContext";

const Bio = () => {
  const { siteData, updateSiteData } = useSiteDataContext();

  return (
    <section id="bioSection">
      <h2>{siteData.bio.title}</h2>
      <Image
        id="bioImage"
        src={siteData.bio.bioImage_url}
        alt={siteData.bio.title}
        width={533}
        height={300}
      />
      <p id="bioDescription">{siteData.bio.intro}</p>
      <BioArticle src={siteData.bio.emile} imagePosition="right" />
      <BioArticle src={siteData.bio.philippe} imagePosition="left" />
      <BioArticle src={siteData.bio.romain} imagePosition="right" />
      <BioArticle src={siteData.bio.jean_paul} imagePosition="left" />
    </section>
  );
};

export default Bio;
