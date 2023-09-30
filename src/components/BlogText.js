"use client";
import React, { useEffect, useState } from "react";

const blogText = ({ justify, text }) => {
  const [textStyle, setTextStyle] = useState({});

  useEffect(() => {
    switch (justify) {
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
    <p style={textStyle} className="blogText">
      {text}
    </p>
  );
};

export default blogText;
