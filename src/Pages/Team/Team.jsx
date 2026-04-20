import React from 'react';
import './Team.css';
import image1 from '../../assets/image/habib.png';
import image2 from '../../assets/image/DGT_7871 copy.jpg';
import image3 from '../../assets/image/DSC_1823.jpg';
import aboutImage from '../../assets/image/pacific.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Team() {
  return (
    <>
      <div className="team-page">

        {/* ── Hero Banner ── */}
        <div className='team'>
          <div className='team-content'>
            <span className="team-eyebrow">The People Behind the Mission</span>
            <h1>Our Team</h1>
            <div className="team-divider">
              <span className="divider-line" />
              <span className="divider-diamond" />
              <span className="divider-line" />
            </div>
            <p className="team-subtitle">
              A dedicated group of professionals committed to advancing science
              communication and innovation across Rwanda and beyond.
            </p>
          </div>
        </div>

        {/* ── Section Intro ── */}
        <div className="team-intro-section">
          <div className="team-intro-inner">
            <p className="team-intro-text">
              Our team brings together expertise in leadership, communications, and
              technology — united by a shared passion for making science accessible
              and impactful for every community.
            </p>
            <div className="team-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Impact</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Core Experts</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className='team-cards'>

          {/* Card 1 */}
          <div className='team-card'>
            <div
              className='card-image'
              style={{ backgroundImage: `url(${aboutImage})` }}
            >
              <div className='card-content'>
                <span className="card-tag">Leadership</span>
                <h2>Pacifique Nshimiyimana</h2>
                <p>Executive Director</p>
                <div className='icons'>
                  <a href='https://www.facebook.com/pacifique.nshimiyimana/' target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                  <a href="https://x.com/scienceally_rw?lang=en" target="_blank" rel="noreferrer" aria-label="X / Twitter"><FaXTwitter /></a>
                  <a href='https://www.linkedin.com/in/pacifique-nshimiyimana-69996581/?originalSubdomain=rw' target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="card-footer-info">
                <h3>Pacifique Nshimiyimana</h3>
                <p>Executive Director</p>
              </div>
              <div className='tsocial-icons'>
                <a href='https://www.facebook.com/pacifique.nshimiyimana/' target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                <a href="https://x.com/scienceally_rw?lang=en" target="_blank" rel="noreferrer" aria-label="X / Twitter"><FaXTwitter /></a>
                <a href='https://www.instagram.com/pacifiquens/' target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href='https://www.linkedin.com/in/pacifique-nshimiyimana-69996581/?originalSubdomain=rw' target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='team-card'>
            <div
              className='card-image'
              style={{ backgroundImage: `url(${image2})` }}
            >
              <div className='card-content'>
                <span className="card-tag">Communications</span>
                <h2>Gisele Ndizeye</h2>
                <p>Communication Manager</p>
                <div className='icons'>
                  <a href='https://www.facebook.com/gisele.ndizeye/' target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                  <a href='https://x.com/gisele_ndizeye?lang=en' target="_blank" rel="noreferrer" aria-label="X / Twitter"><FaXTwitter /></a>
                  <a href='https://www.linkedin.com/in/ndizeye-gisele-ba549a1a3/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=rw' target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="card-footer-info">
                <h3>Gisele Ndizeye</h3>
                <p>Communication Manager</p>
              </div>
              <div className='tsocial-icons'>
                <a href='https://www.facebook.com/gisele.ndizeye/' target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                <a href='https://x.com/gisele_ndizeye?lang=en' target="_blank" rel="noreferrer" aria-label="X / Twitter"><FaXTwitter /></a>
                <a href='https://www.linkedin.com/in/ndizeye-gisele-ba549a1a3/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=rw' target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='team-card'>
            <div
              className='card-image'
              style={{ backgroundImage: `url(${image3})` }}
            >
              <div className='card-content'>
                <span className="card-tag">Technology</span>
                <h2>Agape Nduwamungu</h2>
                <p>IT Service Officer</p>
                <div className='icons'>
                  <a href='https://www.linkedin.com/in/agape-nduwamungu-bba7ba174/?originalSubdomain=tz' target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="card-footer-info">
                <h3>Agape Nduwamungu</h3>
                <p>IT Service Officer</p>
              </div>
              <div className='tsocial-icons'>
                <a href='https://www.linkedin.com/in/agape-nduwamungu-bba7ba174/?originalSubdomain=tz' target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="team-cta">
          <p>Interested in joining our mission?</p>
          <a href="mailto:info@scienceally.org" className="cta-btn">Get In Touch</a>
        </div>

      </div>
    </>
  );
}

export default Team;