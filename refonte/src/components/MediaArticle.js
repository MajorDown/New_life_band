import React from "react";
import AudioPlayer from "./AudioPlayer";
import VideoPlayer from "./VideoPlayer";

const mediaArticle = ({ src }) => {
  return (
    <article className="mediaArticle">
      <h3>{src.title}</h3>
      {src.typeOfMedia === "audio" && <AudioPlayer src={src.src} />}
      {src.typeOfMedia === "video" && <VideoPlayer src={src.src} />}
    </article>
  );
};

export default mediaArticle;
