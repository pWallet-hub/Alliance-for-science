import React from 'react';
import './Header.css';
import allianceLogo from '../../assets/image/alliance.png';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";

// Priority: VITE_DASHBOARD_URL (if set) > localhost in dev > live dashboard
const DASHBOARD_URL = (
  import.meta.env.VITE_DASHBOARD_URL ||
  (import.meta.env.DEV
    ? "http://localhost:3000"
    : "https://biocap-rwanda.afs-rwanda.org")
).replace(/\/$/, ""); // remove trailing slash if present

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={allianceLogo} alt="Alliance Logo" className="logo" />
      </div>

      <div className="header-right">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>rwandaafs@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+250 788 667 469</span>
          </div>
        </div>

        <a
          href={`${DASHBOARD_URL}/auth/login?brand=alliance`}
          className="login-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </div>
    </div>
  );
}

export default Header;