"use client";
import React, { useState } from "react";
import Image from "next/image";
import modifier from "@/icons/modifier.svg";
import enregistrer from "@/icons/enregistrer.svg";

const BlogArticleTitle = ({ articleName, isConnected }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(articleName);
  return (
    <div className="blogArticleTitle">
      {!editMode && (
        <>
          <h3>{title}</h3>
          {isConnected && (
            <button onClick={() => setEditMode(true)}>
              <Image src={modifier} width={20} height={20} />
            </button>
          )}
        </>
      )}
      {editMode && (
        <>
          <input
            type="text"
            aria-label="BlogArticleTitle"
            placeholder={title}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          {isConnected && (
            <button onClick={() => setEditMode(false)}>
              <Image src={enregistrer} width={20} height={20} />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default BlogArticleTitle;
