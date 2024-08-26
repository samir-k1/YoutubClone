import React from 'react';
import './Playvideo.css'
import like from '../Assets/like.png';
import dislike from '../Assets/dislike.png';
import share from '../Assets/share.png';
import save from '../Assets/save.png';
import jack from '../Assets/jack.png';
import Video1 from '../Assets/video.mp4';
import userProfile from '../Assets/user_profile.jpg'

const Playvideo = () => {
  return (
    <div className='play-video'>
      <video src={Video1} controls></video>
      <h3>Dancing Video</h3>
      <div className="video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div className="likes-section">
          <span><img src={like} alt="like" /></span>
          <span><img src={dislike} alt="dislike" /></span>
          <span><img src={save} alt="save" /></span>
          <span><img src={share} alt="share" /></span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="jack" />
        <div>
          <p>YO Samir</p>
          <span>1m Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="description">
        <p>see the beautiful layout </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolore molestiae quisquam nemo, vitae cupiditate nostrum inventore officia ex atque provident dicta temporibus ad, assumenda reprehenderit doloremque odio voluptatem omnis!</p>
        <hr />
        <div> 130 comments</div>
        <div className="comment">
            <img src={userProfile} alt="" />
            <div>
                <h3> jack Nohalan <span>1 day ago</span></h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ipsa ab dolorem consequatur sunt? Vero quo odit est ut inventore, nostrum maxime impedit esse aspernatur, quis repudiandae, necessitatibus hic modi!</p>
            </div>
            <div className="like">
                <img src={like} alt="" />
                <img src={dislike} alt="" />
            </div>
        </div>
        <div className="comment">
            <img src={userProfile} alt="" />
            <div>
                <h3> jack Nohalan <span>1 day ago</span></h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ipsa ab dolorem consequatur sunt? Vero quo odit est ut inventore, nostrum maxime impedit esse aspernatur, quis repudiandae, necessitatibus hic modi!</p>
            </div>
            <div className="like">
                <img src={like} alt="" />
                <img src={dislike} alt="" />
            </div>
        </div>
        <div className="comment">
            <img src={userProfile} alt="" />
            <div>
                <h3> jack Nohalan <span>1 day ago</span></h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ipsa ab dolorem consequatur sunt? Vero quo odit est ut inventore, nostrum maxime impedit esse aspernatur, quis repudiandae, necessitatibus hic modi!</p>
            </div>
            <div className="like">
                <img src={like} alt="" />
                <img src={dislike} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Playvideo;
