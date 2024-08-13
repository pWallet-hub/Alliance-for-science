import React from 'react';
import './Footer.css';
import alliance from '../../assets/image/alliance.png'
import { IoChevronForward } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";





const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <img src={alliance} alt="Alliance for Science Rwanda" />
          </div>
          <p>
            Alliance for Science Rwanda is all  about creating a poverty free
            world.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <IoChevronForward />
                  <a href="#">Food Security</a>
                </li>
                <li>
                  <IoChevronForward />
                  <a href="#">Climate Change</a>
                </li>
                <li>
                  <IoChevronForward />
                  <a href="#">Research Innovation</a>
                </li>
                <li>
                  <IoChevronForward />
                  <a href="#">Policy Advocacy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Pages</h4>
              <ul>
                <li>
                  <IoChevronForward />
                  <a href="#">New &amp; Views</a>
                </li>
                <li>
                  <IoChevronForward />
                  <a href="#">About Us</a>
                </li>
                <li>
                  <IoChevronForward />
                  <a href="#">Services</a>
                </li>
                <li>
                  <IoChevronForward />
                  <a href="#">Our Team</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <i className="fas fa-phone"><FaPhone /></i> +250 788 667 469
                </li>
                <li>
                  <i className="fas fa-envelope"><MdOutlineEmail /></i> rwandaafs@gmail.com
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