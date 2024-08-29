import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import VideoPlayer from './Pages/VideoPage/VideoPlayer';
import './App.css';

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [category, setCategory] = useState('');

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="app-layout">
        {isSidebarVisible && <Sidebar onCategoryClick={setCategory} />}
        <div className="main-content">
          <Routes>
            <Route path='/video/:categoryId/:videoId' element={<VideoPlayer />} />
            <Route path='/' element={<Home category={category} />} />
          </Routes>
        </div>
      </div> 
    </>
  );
};

export default App;
