import BioArticle from "@/components/BioArticle";
import React from "react";
import SiteData from "../../data/siteData";

const Bio = () => {
  return (
    <section id="bioSection">
      <BioArticle src={SiteData.bio.intro} imagePosition="left" />
      <BioArticle src={SiteData.bio.Emile} imagePosition="right" />
    </section>
  );
};

export default Bio;
