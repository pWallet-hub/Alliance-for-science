
import React from 'react';
import './Header.css';
import allianceLogo from '../../assets/image/alliance.png';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={allianceLogo} alt="Alliance Logo" className="logo" />
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span>rwandaafs@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaPhone className="icon" />
          <span>+1234567890</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
