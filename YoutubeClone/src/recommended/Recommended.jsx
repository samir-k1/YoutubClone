import React from 'react'
import Thumbnail1 from '../Assets/thumbnail1.png';
import Thumbnail2 from '../Assets/thumbnail2.png';
import Thumbnail3 from '../Assets/thumbnail3.png';
import Thumbnail4 from '../Assets/thumbnail4.png';
// import Thumbnail5 from '../../Assets/thumbnail5.png';
// import Thumbnail6 from '../../Assets/thumbnail6.png';
// import Thumbnail7 from '../../Assets/thumbnail7.png';
// import Thumbnail8 from '../../Assets/thumbnail8.png';
import './Recommended.css'
import { Link } from 'react-router-dom';
const Recommended = () => {
  return (
    
      <div className="Recommended-vdo">
      <Link to={`video/20/4521`} className="youtube-card">
        <img src={Thumbnail1} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Awesome React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.2M views • 1 week ago</p>
        </div>
      </Link>
      <Link to={`video/20/4521`} className="youtube-card">
        <img src={Thumbnail2} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Awesome React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.2M views • 1 week ago</p>
        </div>
      </Link>
      <Link to={`video/20/4521`} className="youtube-card">
        <img src={Thumbnail3} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Awesome React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.2M views • 1 week ago</p>
        </div>
      </Link>
      <Link to={`video/20/4521`} className="youtube-card">
        <img src={Thumbnail4} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Awesome React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.2M views • 1 week ago</p>
        </div>
      </Link>
      <Link to={`video/20/4521`} className="youtube-card">
        <img src={Thumbnail4} alt="Thumbnail" className="thumbnail" />
        <div className="card-content">
          <h4 className="video-title">Awesome React Tutorial</h4>
          <p className="channel-name">ReactMaster</p>
          <p className="views">1.2M views • 1 week ago</p>
        </div>
      </Link>
    </div>
  )
}

export default Recommended
