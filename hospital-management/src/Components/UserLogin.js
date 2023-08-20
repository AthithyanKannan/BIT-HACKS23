import React, { useState } from 'react'
import './UserLogin.css';
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';

const UserLogin = () => {

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <AiOutlineUser className='icon' />
          <input type="text"  placeholder='Name' required/>
        </div>
        <div className="input">
          <AiOutlineUser className='icon'/>
          <input type="email" placeholder='Email'/>
        </div>
        <div className="input">
          <AiOutlineUser className='icon' />
          <input type="password" placeholder='Password' required/>
        </div>
      </div>
      <div className="forget-password">Forget Password? <span>Click me!</span></div>
      <div className="submit-container">
        <button className="submit">Login</button>
        <button className="submit"><Link to="/register">Register</Link></button>
      </div>
      </div>
  )
}

export default UserLogin