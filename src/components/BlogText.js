"use client";
import React, { useEffect, useState } from "react";

const blogText = ({ node, editMode }) => {
  const [textStyle, setTextStyle] = useState({});

  useEffect(() => {
    switch (node.justify) {
      case "left":
        setTextStyle({ textAlign: "start" });
        break;
      case "center":
        setTextStyle({ textAlign: "center" });
        break;
      case "right":
        setTextStyle({ textAlign: "end" });
        break;
      default:
        setTextStyle({ textAlign: "center" });
    }
  }, []);

  return (
    <>
      {editMode && (
        <input type="text" placeholder={node.src} className="blogTextInput">
          {node.src}
        </input>
      )}
      {!editMode && (
        <p className="blogText" style={textStyle}>
          {node.src}
        </p>
      )}
    </>
  );
};

export default blogText;
