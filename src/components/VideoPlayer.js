import React from "react";

const videoPlayer = ({ src }) => {
  return (
    <video src={src} controls>
      Votre navigateur ne prend pas en charge l'élément video.
    </video>
  );
};

export default videoPlayer;
