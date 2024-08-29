import React from 'react';
import './Home.css';
import Feed from '../../Components/Feed/Feed';
// import Sidebar from '../../Components/Sidebar/Sidebar'; 

const Home = ({ category }) => {
  return (
    <div className="home-container">
      {/* <Sidebar /> */}
      <Feed category={category} className="feed" />
    </div>
  );
};

export default Home;
