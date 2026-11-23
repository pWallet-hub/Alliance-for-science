import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const cls = (path) => (pathname.toLowerCase() === path.toLowerCase() ? 'active' : '');

  return (
    <>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link className={cls('/')} to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link className={cls('/about')} to="/about" onClick={toggleSidebar}>About Us</Link></li>
          <li><Link className={cls('/activities')} to="/activities" onClick={toggleSidebar}>Projects</Link></li>
          <li><Link className={cls('/news')} to="/news" onClick={toggleSidebar}>News & Publications</Link></li>
          <li><Link className={cls('/team')} to="/team" onClick={toggleSidebar}>Our Team</Link></li>
          <li><Link className={cls('/gallery')} to="/Gallery" onClick={toggleSidebar}>Gallery</Link></li>
        </ul>
      </div>
    </>
  );
}


export default Sidebar;