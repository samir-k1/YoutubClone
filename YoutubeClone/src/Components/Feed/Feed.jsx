import React, { useState, useEffect } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';

export const API_KEY = 'AIzaSyDNkYbeZUmoaHCJYOxZI30a_IYR-6lkOB0'; 

const Feed = ({ category }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      if (category) {
        try {
          const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=80&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data); 
          setVideos(data.items);
        } catch (error) {
          console.error('Error fetching videos:', error);
          setError('Failed to load videos. Please try again later.');
        }
      }
    };

    fetchVideos();
  }, [category]);

  return (
    <div className="feed-container">
      {error ? (
        <p>{error}</p>
      ) : videos.length > 0 ? (
        videos.map((video) => (
          <Link
            key={video.id}
            to={`/video/${category}/${video.id}`}
            className="youtube-card"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="thumbnail"
            />
            <div className="card-content">
              <h4 className="video-title">{video.snippet.title}</h4>
              <p className="channel-name">{video.snippet.channelTitle}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No videos found</p>
      )}
    </div>
  );
};

export default Feed;
