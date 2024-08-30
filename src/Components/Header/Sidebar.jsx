// Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/news" onClick={toggleSidebar}>News & Viewer</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About Us</Link></li>
          <li><Link to="/activities" onClick={toggleSidebar}>Activities</Link></li>
          <li><Link to="/team" onClick={toggleSidebar}>Our Team</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
