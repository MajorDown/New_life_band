import React from "react";
import Image from "next/image";
import supprimer from "@/icons/supprimer.svg";
import Link from "next/link";

const BlogArticle = ({ article, isConnected = false }) => {
  return (
    <article className="blogArticle">
      <p>{article.date}</p>
      <h3>{article.title}</h3>
      <div>
        <Link className="linkToBlogArticle" href={`/news/${article._id}`}>
          Lire l'article
        </Link>
        {isConnected && (
          <button>
            <Image src={supprimer} width={20} height={20} />
          </button>
        )}
      </div>
    </article>
  );
};

export default BlogArticle;
