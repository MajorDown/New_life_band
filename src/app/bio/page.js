import BioArticle from "@/components/BioArticle";
import React from "react";
import SiteData from "../../data/siteData";

const Bio = () => {
  return (
    <section id="bioSection">
      <BioArticle src={SiteData.bio.intro} imagePosition="Left" />
      <BioArticle src={SiteData.bio.Emile} imagePosition="right" />
      <BioArticle src={SiteData.bio.Philippe} imagePosition="left" />
      <BioArticle src={SiteData.bio.Romain} imagePosition="right" />
      <BioArticle src={SiteData.bio.Jean_Paul} imagePosition="left" />
    </section>
  );
};

export default Bio;
