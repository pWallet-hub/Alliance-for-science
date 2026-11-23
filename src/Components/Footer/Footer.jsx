import React from 'react';
import './Footer.css';
import footBg from '../../assets/image/alliance-image-bg.jpg';
import award from '../../assets/image/award.jpg';
import audience from '../../assets/image/Audience.jpg';
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  const usefulLinks = [
    { label: 'Home',          path: '/' },
    { label: 'About Us',      path: '/about' },
    { label: 'Our Team',      path: '/team' },
    { label: 'News & Viewer', path: '/news' },
    { label: 'Activities',    path: '/activities' },
  ];

  const services = [
    'Food Security',
    'Climate Resilience',
    'Research Documentation',
    'Policy Advocacy',
    'Science Communication',
  ];

  const news = [
    { img: award,    date: 'October, 2021',  title: 'OFAB Rwanda Chapter Launch & Science Media Desk' },
    { img: audience, date: 'February, 2023', title: 'Media Engagement & Biosafety Awareness Workshop' },
  ];

  return (
    <footer className="footer" style={{ '--footer-bg': `url(${footBg})` }}>
      <div className="footer-container">

        {/* CONTACT US */}
        <div className="footer-col footer-col--contact">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <span className="contact-circle"><MdOutlineEmail /></span>
              <div>
                <small>Email us:</small>
                <a href="mailto:rwandaafs@gmail.com">rwandaafs@gmail.com</a>
              </div>
            </li>
            <li>
              <span className="contact-circle"><MdOutlineLocationOn /></span>
              <div>
                <small>Location:</small>
                <span>Hallmark 24X8+GFQ, KG 17 Ave, Kigali, Rwanda</span>
              </div>
            </li>
            <li>
              <span className="contact-circle"><FaPhoneAlt /></span>
              <div>
                <small>Phone:</small>
                <a href="tel:+250788667469">+250 788 667 469</a>
              </div>
            </li>
          </ul>
        </div>

        {/* USEFUL LINK */}
        <div className="footer-col">
          <h4 className="footer-heading">Useful Link</h4>
          <ul className="footer-links">
            {usefulLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path}><span className="chev">&gt;&gt;</span>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div className="footer-col">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            {services.map((s) => (
              <li key={s}>
                <Link to="/activities"><span className="chev">&gt;&gt;</span>{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* OUR NEWS */}
        <div className="footer-col footer-col--news">
          <h4 className="footer-heading">Our News</h4>
          <ul className="footer-news">
            {news.map((n, i) => (
              <li key={i}>
                <Link to="/news" className="news-item">
                  <img src={n.img} alt="" loading="lazy" />
                  <div>
                    <time>{n.date}</time>
                    <p>{n.title}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-wrap">
        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} Alliance for Science Rwanda. All rights reserved.
          </span>
          <div className="footer-bottom-right">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <div className="footer-social">
              <a href="https://www.facebook.com/watch/?v=182093260236045" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://x.com/scienceally_rw?lang=en" target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;