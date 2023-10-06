import React from "react";
import Image from "next/image";
import BlogArticleTitle from "./BlogArticleTitle";
import BlogArticleNode from "./BlogArticleNode";

import supprimer from "@/icons/supprimer.svg";
import modifier from "@/icons/modifier.svg";

const BlogPage = ({ article, isConnected = false }) => {
  return (
    <article className="blogArticle">
      <BlogArticleTitle articleName={article.title} isConnected={isConnected} />
      {article.content.map((node, index) => (
        <BlogArticleNode key={index} node={node} isConnected={isConnected} />
      ))}
      <div className="blogArticleFooter">
        <p className="blogDate">
          posté le {article.date} par {article.poster}
        </p>
        {isConnected && (
          <button>
            <Image src={supprimer} width={20} height={20} />
          </button>
        )}
      </div>
    </article>
  );
};

export default BlogPage;
