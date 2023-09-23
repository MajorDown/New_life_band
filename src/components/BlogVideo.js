import React from "react";
import VideoPlayer from "./VideoPlayer";

const blogVideo = ({ src }) => {
  return <VideoPlayer className="blogVideo" src={src} />;
};

export default blogVideo;
