import React, { useState } from "react";
import Image from "next/image";
import modifier from "@/icons/modifier.svg";
import supprimer from "@/icons/supprimer.svg";
import enregistrer from "@/icons/enregistrer.svg";
import BlogText from "./BlogText";
import BlogImage from "./BlogImage";
import BlogVideo from "./BlogVideo";

const BlogArticleNode = ({ node, isConnected }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="blogArticleNode">
      {node.type === "text" && <BlogText node={node} editMode={editMode} />}
      {node.type === "image" && <BlogImage node={node} editMode={editMode} />}
      {node.type === "video" && <BlogVideo node={node} editMode={editMode} />}
      {isConnected && (
        <div className="blogArticleNodeSetter">
          <button onClick={() => setEditMode(true)}>
            <Image src={modifier} width={20} height={20} />
          </button>
          <button>
            <Image src={supprimer} width={20} height={20} />
          </button>
        </div>
      )}
      {isConnected && editMode && (
        <div>
          <button onClick={() => setEditMode(false)}>
            <Image src={enregistrer} width={20} height={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogArticleNode;
