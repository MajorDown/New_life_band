import React from "react";
import BlogText from "./BlogText";
import BlogImage from "./BlogImage";
import BlogVideo from "./BlogVideo";
import { useUserContext } from "@/contexts/UserContext";

const BlogArticle = ({ article, editMode = false }) => {
  const { userId, updateUserId } = useUserContext();

  return (
    <article className="blogArticle">
      <h3>
        {editMode ? (
          <input type="text" aria-label="articleTitle" />
        ) : (
          article.title
        )}
      </h3>
      {article.content.map((node, index) => {
        switch (node.type) {
          case "text":
            return (
              <BlogText
                key={index}
                editMode={editMode}
                text={node.text}
                justify={node.justify}
              />
            );
          case "image":
            return (
              <BlogImage
                key={index}
                editMode={editMode}
                src={node.src}
                alt={node.alt}
              />
            );
          case "video":
            return <BlogVideo key={index} editMode={editMode} src={node.src} />;
          default:
            return null;
        }
      })}
      <div>
        {userId && <button>modifier l'article</button>}
        <p className="blogDate">posté le {article.date}</p>
      </div>
    </article>
  );
};

export default BlogArticle;
