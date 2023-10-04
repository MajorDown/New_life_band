import React from "react";
import BlogArticleNode from "./BlogArticleNode";
import supprimer from "@/icons/supprimer.svg";

const BlogArticle = ({ article, isConnected = false }) => {
  return (
    <article className="blogArticle">
      <h3>
        {isConnected ? (
          <input type="text" aria-label="articleTitle" />
        ) : (
          article.title
        )}
      </h3>
      {article.content.map((node, index) => (
        <BlogArticleNode key={index} node={node} isConnected={isConnected} />
      ))}
      <div>
        <p className="blogDate">
          posté le {article.date} par {article.poster}
        </p>
        {isConnected && <button>{supprimer}</button>}
      </div>
    </article>
  );
};

export default BlogArticle;
