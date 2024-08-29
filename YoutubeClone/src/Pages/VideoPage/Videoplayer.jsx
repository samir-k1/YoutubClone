import React from 'react';
import { useParams } from 'react-router-dom';
import Playvideo from "../../PlayVideo/Playvideo"
import Recommended from "../../recommended/Recommended"

const VideoPlayer = () => {
  const { categoryId, videoId } = useParams();

  return (
    <div className="video-player-container">
      <div className="main-video-section">
        <Playvideo videoId={videoId} />
      </div>
      <div className="recommended-section">
        <Recommended categoryId={categoryId} />
      </div>
    </div>
  );
};

export default VideoPlayer;
