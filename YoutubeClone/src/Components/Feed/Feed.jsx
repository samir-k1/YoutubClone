import React from 'react';
import './Feed.css';
import Thumbnail1 from '../../Assets/thumbnail1.png';
import Thumbnail2 from '../../Assets/thumbnail2.png';
import Thumbnail3 from '../../Assets/thumbnail3.png';
import Thumbnail4 from '../../Assets/thumbnail4.png';
import Thumbnail5 from '../../Assets/thumbnail5.png';
import Thumbnail6 from '../../Assets/thumbnail6.png';
import Thumbnail7 from '../../Assets/thumbnail7.png';
import Thumbnail8 from '../../Assets/thumbnail8.png';
import { Link } from 'react-router-dom';

const Feed = () => {
  return (
    <div className="feed-container">
      <Link to={`video/20/4521`} className="youtube-card">
        <img src={Thumbnail1} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Awesome React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.2M views • 1 week ago</p>
        </div>
      </Link>

      <div className="youtube-card">
        <img src={Thumbnail2} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Another React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">850K views • 2 days ago</p>
        </div>
      </div>

      <div className="youtube-card">
        <img src={Thumbnail3} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">React Hooks Overview</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.5M views • 3 weeks ago</p>
        </div>
        
      </div>
      <div className="youtube-card">
        <img src={Thumbnail4} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Awesome React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.2M views • 1 week ago</p>
        </div>
      </div>

      <div className="youtube-card">
        <img src={Thumbnail5} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Another React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">850K views • 2 days ago</p>
        </div>
      </div>

      <div className="youtube-card">
        <img src={Thumbnail6} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">React Hooks Overview</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.5M views • 3 weeks ago</p>
        </div>
        
      </div>
      <div className="youtube-card">
        <img src={Thumbnail7} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Another React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">850K views • 2 days ago</p>
        </div>
      </div>

      <div className="youtube-card">
        <img src={Thumbnail8} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">React Hooks Overview</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.5M views • 3 weeks ago</p>
        </div>
        
      </div>
      <div className="youtube-card">
        <img src={Thumbnail1} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Awesome React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.2M views • 1 week ago</p>
        </div>
      </div>

      <div className="youtube-card">
        <img src={Thumbnail2} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Another React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">850K views • 2 days ago</p>
        </div>
      </div>

      <div className="youtube-card">
        <img src={Thumbnail3} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">React Hooks Overview</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.5M views • 3 weeks ago</p>
        </div>
        
      </div>
      <div className="youtube-card">
        <img src={Thumbnail4} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Awesome React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.2M views • 1 week ago</p>
        </div>
      </div>

      <div className="youtube-card">
        <img src={Thumbnail5} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Another React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">850K views • 2 days ago</p>
        </div>
      </div>

      <div className="youtube-card">
        <img src={Thumbnail6} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">React Hooks Overview</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.5M views • 3 weeks ago</p>
        </div>
        
      </div>
      <div className="youtube-card">
        <img src={Thumbnail7} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Another React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">850K views • 2 days ago</p>
        </div>
      </div>

      <div className="youtube-card">
        <img src={Thumbnail8} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">React Hooks Overview</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.5M views • 3 weeks ago</p>
        </div>
        
      </div>

      {/* Add more youtube-card divs as needed */}
    </div>
  );
};

export default Feed;
