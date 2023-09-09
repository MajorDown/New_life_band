"use client";
import React, { useContext } from "react";
import Image from "next/image";
import BioArticle from "@/components/BioArticle";
import { WebSiteContext } from "../layout";

const Bio = () => {
  let SiteData = useContext(WebSiteContext);

  return (
    <section id="bioSection">
      <h2>{SiteData.bio.title}</h2>
      <Image
        id="bioImage"
        src={SiteData.bio.bioImage_url}
        alt={SiteData.bio.title}
        width={533}
        height={300}
      />
      <p id="bioDescription">{SiteData.bio.intro}</p>
      <BioArticle src={SiteData.bio.emile} imagePosition="right" />
      <BioArticle src={SiteData.bio.philippe} imagePosition="left" />
      <BioArticle src={SiteData.bio.romain} imagePosition="right" />
      <BioArticle src={SiteData.bio.jean_paul} imagePosition="left" />
    </section>
  );
};

export default Bio;
