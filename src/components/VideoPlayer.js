import React from "react";

const videoPlayer = ({ className, src }) => {
  return (
    <video className={className} src={src} controls>
      <p>Votre navigateur ne prend pas en charge l&apos;élément video.</p>
    </video>
  );
};

export default videoPlayer;
