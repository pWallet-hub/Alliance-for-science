import React from 'react';
import './Footer.css';
import alliance from '../../assets/image/alliance.png';
import { IoChevronForward } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <img src={alliance} alt="Alliance for Science Rwanda" />
          </div>
          <p>
            Alliance for Science Rwanda is all about creating a poverty-free
            world.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <IoChevronForward style={{ color: '#92D050' }} />
                  <a href="#">Food Security</a>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#92D050' }} />
                  <a href="#">Climate Change</a>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#92D050' }} />
                  <a href="#">Research Innovation</a>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#92D050' }} />
                  <a href="#">Policy Advocacy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Pages</h4>
              <ul>
                <li>
                  <IoChevronForward style={{ color: '#92D050' }} />
                  <a href="#">News & Views</a>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#92D050' }} />
                  <a href="#">About Us</a>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#92D050' }} />
                  <a href="#">Services</a>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#92D050' }} />
                  <a href="#">Our Team</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <FaPhone style={{ color: '#92D050' }} /> +250 788 667 469
                </li>
                <li>
                  <MdOutlineEmail style={{ color: '#92D050' }} /> rwandaafs@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
