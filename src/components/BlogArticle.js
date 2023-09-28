import React, { useContext } from "react";
import { UserContext } from "@/app/layout";

const BlogArticle = ({ article }) => {
  const user = useContext(UserContext);
  const [wantBlogPanel, setWantBlogPanel] = useState(false);

  const openBlogPanel = () => {
    setWantBlogPanel(!wantBlogPanel);
  };
  return (
    <article>
      <h3>{article.title}</h3>
      {article.type === "text" && (
        <BlogText
          justify={article.content.justify}
          text={article.content.text}
        />
      )}
      {article.type === "image" && (
        <BlogImage src={article.content.src} alt={article.content.alt} />
      )}
      {article.type === "video" && <BlogVideo src={node.src} />}
      <div>
        {user && (
          <button onClick={() => openBlogPanel(article._id)}>
            modifier l'article
          </button>
        )}
        <p className="blogDate">{date}</p>
      </div>
    </article>
  );
};

export default BlogArticle;
