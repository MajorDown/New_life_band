"use client";
import React from "react";
import { useSiteDataContext } from "../../contexts/SiteDataContext";
import { useUserContext } from "../../contexts/UserContext";
import BlogArticle from "../../components/BlogArticle";
import Image from "next/image";
import ajouter from "@/icons/ajouter.svg";
import Link from "next/link";

const News = () => {
  const { userId, updateUserId } = useUserContext();
  const { siteData, updateSiteData } = useSiteDataContext();
  return (
    <section id="newsSection">
      <h2>Les actu' du groupe</h2>
      {!userId && (
        <button>
          <Link href="/news/create">
            Créer un nouvel article
            <Image src={ajouter} width={20} height={20} />
          </Link>
        </button>
      )}
      {siteData.news.map((article, index) => (
        <BlogArticle
          key={index}
          article={article}
          isConnected={userId ? true : true}
        />
      ))}
    </section>
  );
};

export default News;
