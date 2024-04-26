import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <img src="/logo.png" alt="Alliance for Science Rwanda" />
          </div>
          <p>
            Alliance for Science Rwanda is all about creating a poverty free
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
                  <a href="#">Food Security</a>
                </li>
                <li>
                  <a href="#">Climate Change</a>
                </li>
                <li>
                  <a href="#">Research Innovation</a>
                </li>
                <li>
                  <a href="#">Policy Advocacy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Pages</h4>
              <ul>
                <li>
                  <a href="#">New &amp; Views</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <i className="fas fa-phone"></i> +250 788 667 469
                </li>
                <li>
                  <i className="fas fa-envelope"></i> rwandaafs@gmail.com
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