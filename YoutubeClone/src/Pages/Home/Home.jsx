import React, { useState } from 'react';

import "./Home.css"
import Feed from '../../Components/Feed/Feed';
const Home = () => {
  const [category , setCategory]=useState(0);

  return (

    <>
           <Feed/>

    </>
  )
}

export default Home
