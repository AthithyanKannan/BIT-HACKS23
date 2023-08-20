import React from 'react'
import './UserRegister.css'
import { AiOutlineUser } from "react-icons/ai"
import { FaPhoneAlt } from "react-icons/fa"

const UserRegister = () => {
  return (
    <div className='register-container'>
      <div className="register-header">
        <div className="register-text">Register</div>
        <div className="register-underline"></div>
      </div>
      <div className="register-inputs">
      <label htmlFor="register-input">Patient Name</label>
        <div className='register-input'>
          <AiOutlineUser className='register-icon' />
          <input type="text"  placeholder='First Name'/>
          <AiOutlineUser className='register-icon' />
          <input type="text"  placeholder='Last Name'/>
        </div>
      <label htmlFor="">Date of birth</label>
        <div className="register-input">
           <input type="date"  placeholder='Date of birth'/>
          <FaPhoneAlt className='register-icon' />
          <input type="text" placeholder='Phone Number'/>
        </div>
      <label htmlFor="">Gender Details</label>
        <div className="gender">
        <input type="radio" name="gender" value="male" />
        <label htmlFor="">Male</label>
          <input type="radio" name="gender" value="female" />
          <label htmlFor="">Female</label>
          <input type="radio" name="gender" value="other" />
          <label htmlFor="">Prefer not to say</label>
        </div>
      <label htmlFor="">Email</label>
        <div className="register-input">
          <AiOutlineUser className='register-icon'/>
          <input type="email" placeholder='Email'/>
        </div>
       <label htmlFor="">Password</label>
        <div className="register-input">
          <AiOutlineUser className='register-icon' />
          <input type="password" placeholder='Password'/>
        </div>
        <label htmlFor="">Confirm Password</label>
        <div className="register-input">
          <AiOutlineUser className='register-icon' />
          <input type="password" placeholder='Confirm Password'/>
        </div>
      </div>
      <div className="register-submit-container">
        <button className="register-submit">Submit</button>
      </div>
      </div>
  )
}

export default UserRegister