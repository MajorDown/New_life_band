"use client";
import React from "react";
import { useSiteDataContext } from "@/contexts/SiteDataContext";
import { useUserContext } from "@/contexts/UserContext";
import BlogArticle from "@/components/BlogArticle";

const News = () => {
  const { userId, updateUserId } = useUserContext();
  const { siteData, updateSiteData } = useSiteDataContext();
  return (
    <section>
      <h2>Les actu' du groupe</h2>
      {siteData.news.map((article, index) => (
        <BlogArticle
          key={index}
          article={article}
          isConnected={userId ? true : false}
        />
      ))}
    </section>
  );
};

export default News;
