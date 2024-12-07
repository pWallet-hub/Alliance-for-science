import React from 'react';
import './Footer.css';
import alliance from '../../assets/image/alliance.png';
import { IoChevronForward } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import {  FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-separator"></div>
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
            <a href="https://www.facebook.com/watch/?v=182093260236045" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            {/* <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a> */}
            <a href="https://x.com/scienceally_rw?lang=en" target="_blank" rel="noreferrer">
            <IoMdClose />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <IoChevronForward style={{ color: '#025496' }} />
                  <a href="#">Food Security</a>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#025496' }} />
                  <a href="#">Climate Change</a>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#025496' }} />
                  <a href="#">Research Innovation</a>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#025496' }} />
                  <a href="#">Policy Advocacy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Pages</h4>
              <ul>
              <li>
                  <IoChevronForward style={{ color: '#025496' }} />
                  <Link to="/" >Home</Link>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#025496' }} />
                  <Link to="/news" >News & Viewer</Link>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#025496' }} />
                  <Link to="/about" >About Us</Link>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#025496' }} />
                  <Link to="/activities" >Activities</Link>
                </li>
                <li>
                  <IoChevronForward style={{ color: '#025496' }} />
                  <Link to="/team" >Our Team</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <FaPhoneAlt style={{ color: '#025496' }} /> +250 788 667 469
                </li>
                <li>
                  <MdOutlineEmail style={{ color: '#025496' }} /> rwandaafs@gmail.com
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
