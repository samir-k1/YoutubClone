import React from 'react'
import { useState } from 'react'

const Login = () => 
const [Name,setName]=useState('')
const [Password,setPassword]=useState('')

    const handleIt=(e)=>{
    
e.preventDefault()


    }
    
    {
  return (
    <div>
      <input type="Enter your name "  value={Name} onChange={(e)=>setName(e.target.value)} />
      <input type="pass" value={Password} onChange={(e)=>setName(e.target.value)}/>
      <button  className="mybtn" onClick={handleIt}></button>
    </div>
  )
}

export default Login;
