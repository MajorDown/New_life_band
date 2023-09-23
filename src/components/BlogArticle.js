import React from "react";

const BlogArticle = ({ title, content, date }) => {
  return (
    <article>
      <h3>{title}</h3>
      <p className="blogDate">{date}</p>
      {content.map((node) => {
        switch (node.type) {
          case "text":
            <BlogText justify={node.justify} text={node.text} />;
            break;
          case "image":
            <BlogImage src={node.src} alt={node.alt} />;
            break;
          case "video":
            <BlogVideo src={node.src} />;
          default:
            <p>no Type</p>;
        }
      })}
    </article>
  );
};

export default BlogArticle;
