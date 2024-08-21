import React from "react";
import BlogArticleTitle from "./BlogArticleTitle";
import BlogArticleNode from "./BlogArticleNode";

const BlogPage = ({ article, isConnected }) => {
  return (
    <article className="blogPage">
      <BlogArticleTitle articleName={article.title} isConnected={isConnected} />
      {article.content.map((node, index) => (
        <BlogArticleNode key={index} node={node} isConnected={isConnected} />
      ))}
      <p className="blogArticleFooter">
        posté le {article.date} par {article.poster}
      </p>
    </article>
  );
};

export default BlogPage;
