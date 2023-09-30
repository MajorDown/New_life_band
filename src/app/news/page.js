"use client";
import React from "react";
import { useSiteDataContext } from "@/contexts/SiteDataContext";
import BlogArticle from "@/components/BlogArticle";

const News = () => {
  const { siteData, updateSiteData } = useSiteDataContext();
  return (
    <section>
      <h2>Les actu' du groupe</h2>
      {siteData.news.map((article) => (
        <BlogArticle article={article} />
      ))}
    </section>
  );
};

export default News;
