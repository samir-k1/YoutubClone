import React from 'react';
import './Sidebar.css';
import Home from '../../Assets/home.png';
import game_icon from '../../Assets/game_icon.png';
import AutoMobile from '../../Assets/automobiles.png';
import sports from '../../Assets/sports.png';
import Entertainment from '../../Assets/entertainment.png';
import tech from '../../Assets/tech.png';
import music from '../../Assets/music.png';
import blogs from '../../Assets/blogs.png';
import news from '../../Assets/news.png';
import jack from '../../Assets/jack.png';
import simon from '../../Assets/simon.png';
import tom from '../../Assets/tom.png';
import megan from '../../Assets/megan.png';
import camerion from '../../Assets/cameron.png';

const Sidebar = ({ hidden }) => {
  return (
    <div className={`sidebar ${hidden ? 'hidden' : ''}`}>
        <div className="side-link">
            <img src={Home} alt="" className="Home" /><p>Home</p>
        </div>
        <div className="side-link">
            <img src={game_icon} alt="" /><p>Games</p>
        </div>
        <div className="side-link">
            <img src={AutoMobile} alt="" /><p>AutoMobile</p>
        </div>
        <div className="side-link">
            <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className="side-link">
            <img src={Entertainment} alt="" /><p>Entertainment</p>
        </div>
        <div className="side-link">
            <img src={tech} alt="" /><p>Tech</p>
        </div>
        <div className="side-link">
            <img src={music} alt="" /><p>Music</p>
        </div>
        <div className="side-link">
            <img src={blogs} alt="" /><p>Blog</p>
        </div>
        <div className="side-link">
            <img src={news} alt="" /><p>News</p>
        </div>
        <hr/>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className='side-link'>
                <img src= {jack} alt="" /><p>PewDiePie</p>
            </div>
            <div className='side-link'>
                <img src= {simon} alt="" /><p>Mr Beast</p>
            </div>
            <div className='side-link'>
                <img src= {tom} alt="" /><p>Justin Bieber</p>
            </div>
            <div className='side-link'>
                <img src= {megan} alt="" /><p>5-Minute Crafts</p>
            </div>
            <div className='side-link'>
                <img src= {camerion} alt="" /><p>Nas Daily</p>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
