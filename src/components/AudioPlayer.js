import React from "react";

const audioPlayer = ({ src }) => {
  return (
    <audio src={src} controls>
      <p>Votre navigateur ne prend pas en charge l&apos;élément audio.</p>
    </audio>
  );
};

export default audioPlayer;
