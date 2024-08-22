import React from 'react';
import './Navbar.css';
import menu_icon from "../../Assets/menu.png";
import logo from "../../Assets/logo.png";
import search from "../../Assets/search.png";
import notification from "../../Assets/notification.png";
import upload_icon from "../../Assets/upload.png";
import more_icon from "../../Assets/more.png";
import profile from "../../Assets/jack.png";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img 
          src={menu_icon} 
          alt="menu" 
          onClick={toggleSidebar}  // Call toggleSidebar on click
          style={{ cursor: 'pointer' }} 
        />
        <img src={logo} alt="logo" />
      </div>

      <div className="Nav middle flex-div">
        <input type="text" placeholder="Search" />
        <img src={search} alt="search" />
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="upload" />
        <img src={more_icon} alt="more" />
        <img src={notification} alt="notification" />
        <img src={profile} alt="profile" />
      </div>
    </nav>
  );
};

export default Navbar;
