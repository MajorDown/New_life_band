"use client";
import react, { useState } from "react";
import BlogPage from "@/components/BlogPage";
import { useSiteDataContext } from "@/contexts/SiteDataContext";
import { useUserContext } from "@/contexts/UserContext";

export default function Blog({ params }) {
  const { siteData, updateSiteData } = useSiteDataContext();
  const { userId, updateUserid } = useUserContext();
  const [article, setArticle] = useState();

  return (
    <section className="blog">
      <BlogPage article={article} isConnected={userId ? true : false} />
    </section>
  );
}
