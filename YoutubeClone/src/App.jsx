import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Videos from './Pages/VideoPage/Videos'
import './App.css';

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="app-layout"> {/* Flexbox container */}
        {isSidebarVisible && <Sidebar />} {/* Conditionally render the Sidebar */}
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/video/:categoryId/:videoId' element={<Videos />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
