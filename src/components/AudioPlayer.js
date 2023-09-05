import React from "react";

const audioPlayer = ({ src }) => {
  return (
    <audio src={src} controls>
      Votre navigateur ne prend pas en charge l'élément audio.
    </audio>
  );
};

export default audioPlayer;
