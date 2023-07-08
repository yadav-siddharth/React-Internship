import React from 'react';
import './connect.css';
import {  FaMailBulk,FaPhone} from 'react-icons/fa'


const Connect = () => {
  return (
    <div className='connect'>
      <div className='connect-header'><h2>Connect</h2><span>With Us</span></div>
        <div className='connect-icon'>
            <div className='connect-mail'><FaMailBulk /> recuriting@gmail.com</div>
            <div className='connect-phone'><FaPhone /> 9137948725</div>
        </div>
    </div>
  )
}

export default Connect
