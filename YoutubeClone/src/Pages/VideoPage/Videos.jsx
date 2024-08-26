import React from 'react';
import Playvideo from '../../PlayVideo/Playvideo';
import Recommended from '../../recommended/Recommended';
import './Video.css'

const Videos = () => {
  return (
    <div className="videos-page">
      <div className="play-video">
        <Playvideo />
      </div>
      <div className="recommended-vdo">
        <Recommended />
      </div>
    </div>
  );
};

export default Videos;
