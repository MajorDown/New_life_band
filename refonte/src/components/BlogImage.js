"use client";
import React from "react";
import Image from "next/image";

const blogImage = ({ src, alt }) => {
  return (
    <Image className="blogImage" src={src} alt={alt} width={400} height={225} />
  );
};

export default blogImage;
