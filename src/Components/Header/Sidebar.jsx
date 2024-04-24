// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News & Viewer</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/team">Our Team</Link></li>
       
      </ul>
    </div>
  );
}

export default Sidebar;
