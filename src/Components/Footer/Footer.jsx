import React, { useState } from 'react';
import './Footer.css';
import alliance from '../../assets/image/alliance.png';
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoChevronForward, IoSend } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSent(true);
      setEmail('');
      setTimeout(() => setSent(false), 3500);
    }
  };

  const pages = [
    { label: 'Home',          path: '/' },
    { label: 'News & Viewer', path: '/news' },
    { label: 'About Us',      path: '/about' },
    { label: 'Activities',    path: '/activities' },
    { label: 'Our Team',      path: '/team' },
  ];

  return (
    <footer className="footer">

      {/* Wave top divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,28 C240,48 480,8 720,28 C960,48 1200,8 1440,28 L1440,48 L0,48 Z"
            fill="rgba(148,205,250,0.61)"
          />
        </svg>
      </div>

      <div className="footer-inner">
        <div className="footer-container">

          {/* ── BRAND ── */}
          <div className="footer-left">
            <div className="footer-logo-wrap">
              <img src={alliance} alt="Alliance for Science Rwanda" className="footer-logo" />
            </div>
            <div className="footer-divider-short" />
            <p className="footer-desc">
              Alliance for Science Rwanda is all about creating a poverty-free world through
              education and advocacy of innovative farming technologies.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/watch/?v=182093260236045"
                 target="_blank" rel="noreferrer" className="social-btn" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://x.com/scienceally_rw?lang=en"
                 target="_blank" rel="noreferrer" className="social-btn" aria-label="X">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/"
                 target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* ── RIGHT COLS ── */}
          <div className="footer-right">

            <div className="footer-col">
              <h4 className="footer-col-heading">
                <span className="heading-pip" />Pages
              </h4>
              <ul className="footer-nav">
                {pages.map((p) => (
                  <li key={p.path}>
                    <Link to={p.path} className="footer-nav-link">
                      <IoChevronForward className="nav-arrow" />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-heading">
                <span className="heading-pip" />Contact Us
              </h4>
              <ul className="footer-contact">
                <li className="contact-row">
                  <span className="contact-icon-box"><FaPhoneAlt /></span>
                  <div>
                    <span className="contact-meta">Phone</span>
                    <a href="tel:+250788667469" className="contact-val">+250 788 667 469</a>
                  </div>
                </li>
                <li className="contact-row">
                  <span className="contact-icon-box"><MdOutlineEmail /></span>
                  <div>
                    <span className="contact-meta">Email</span>
                    <a href="mailto:rwandaafs@gmail.com" className="contact-val">rwandaafs@gmail.com</a>
                  </div>
                </li>
                <li className="contact-row">
                  <span className="contact-icon-box"><MdOutlineLocationOn /></span>
                  <div>
                    <span className="contact-meta">Location</span>
                    <span className="contact-val">24X8+GFQ, KG 17 Ave, Kigali, Rwanda</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="footer-col footer-col--newsletter">
              <h4 className="footer-col-heading">
                <span className="heading-pip" />Stay Updated
              </h4>
              <p className="newsletter-copy">
                Get the latest agricultural insights delivered to your inbox.
              </p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="newsletter-field">
                  <MdOutlineEmail className="newsletter-field-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="newsletter-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className={`newsletter-btn${sent ? ' newsletter-btn--sent' : ''}`}>
                  {sent ? '✓ Subscribed!' : <><span>Subscribe</span><IoSend /></>}
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="footer-separator" />
        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} Alliance for Science Rwanda. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
            <span className="footer-bottom-dot" />
            <a href="#terms" className="footer-bottom-link">Terms of Use</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;