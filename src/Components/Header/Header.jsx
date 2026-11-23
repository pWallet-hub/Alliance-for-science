import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import allianceLogo from '../../assets/image/alliance.png';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import { ArrowUpRight } from 'lucide-react';

// Priority: VITE_DASHBOARD_URL (if set) > localhost in dev > live dashboard
const DASHBOARD_URL = (
  import.meta.env.VITE_DASHBOARD_URL ||
  (import.meta.env.DEV
    ? "http://localhost:3000"
    : "https://biocap-rwanda.afs-rwanda.org")
).replace(/\/$/, ""); // remove trailing slash if present

function Header() {
  const { pathname } = useLocation();

  // Lets Header.css and Sidebar.css both shrink the floating bar after scrolling
  useEffect(() => {
    const onScroll = () => document.body.classList.toggle('nav-stuck', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.body.classList.remove('nav-stuck');
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img src={allianceLogo} alt="Alliance Logo" className="logo" />
        </div>

        <div className="header-right">
          <div className="contact-info">
            <a className="contact-item" href="mailto:rwandaafs@gmail.com" title="rwandaafs@gmail.com">
              <FaEnvelope className="icon" />
              <span>rwandaafs@gmail.com</span>
            </a>
            <a className="contact-item" href="tel:+250788667469" title="+250 788 667 469">
              <FaPhone className="icon" />
              <span>+250 788 667 469</span>
            </a>
          </div>

          <a
            href={`${DASHBOARD_URL}/auth/login?brand=alliance`}
            className="login-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* The bar floats over the Home hero; other pages get a spacer so content isn't hidden */}
      {pathname !== '/' && <div className="header-spacer" />}
    </>
  );
}

export default Header;