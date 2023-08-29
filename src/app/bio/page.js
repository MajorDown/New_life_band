import BioArticle from "@/components/BioArticle";
import React from "react";
import SiteData from "../../data/siteData";
import Image from "next/image";

const Bio = () => {
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
      <BioArticle src={SiteData.bio.Emile} imagePosition="right" />
      <BioArticle src={SiteData.bio.Philippe} imagePosition="left" />
      <BioArticle src={SiteData.bio.Romain} imagePosition="right" />
      <BioArticle src={SiteData.bio.Jean_Paul} imagePosition="left" />
    </section>
  );
};

export default Bio;
