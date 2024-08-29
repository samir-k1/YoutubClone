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

const Sidebar = ({ onCategoryClick }) => {
  return (
    <div className="sidebar">
      <div className="side-link" onClick={() => onCategoryClick('20')}>
        <img src={Home} alt="Home" /><p>Home</p>
      </div>
      <div className="side-link" onClick={() => onCategoryClick('20')}>
        <img src={game_icon} alt="Games" /><p>Games</p>
      </div>
      <div className="side-link" onClick={() => onCategoryClick('2')}>
        <img src={AutoMobile} alt="AutoMobile" /><p>AutoMobile</p>
      </div>
      <div className="side-link" onClick={() => onCategoryClick('17')}>
        <img src={sports} alt="Sports" /><p>Sports</p>
      </div>
      <div className="side-link" onClick={() => onCategoryClick('24')}>
        <img src={Entertainment} alt="Entertainment" /><p>Entertainment</p>
      </div>
      <div className="side-link" onClick={() => onCategoryClick('28')}>
        <img src={tech} alt="Tech" /><p>Tech</p>
      </div>
      <div className="side-link" onClick={() => onCategoryClick('10')}>
        <img src={music} alt="Music" /><p>Music</p>
      </div>
      <div className="side-link" onClick={() => onCategoryClick('22')}>
        <img src={blogs} alt="Blogs" /><p>Blog</p>
      </div>
      <div className="side-link" onClick={() => onCategoryClick('25')}>
        <img src={news} alt="News" /><p>News</p>
      </div>
    </div>
  );
};

export default Sidebar;
