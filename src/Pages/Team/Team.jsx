import React from 'react';
import './Team.css';
import image1 from '../../assets/image/habiman.jpeg';
import image2 from '../../assets/image/_72A2686.jpg';
import image3 from '../../assets/image/DSC_1823.jpg';
import aboutImage from '../../assets/image/pacc.jpg';
import { FaFacebook, FaTwitter, FaLinkedin ,FaPhone} from 'react-icons/fa';

function Team() {
  return (
    <>
      <div>
        <div className='team'> 
          <h1>Our Team</h1>
        </div>
        <div className='team-cards'>
          <div className='team-card'>
            <div 
              className='card-image' 
              style={{ backgroundImage: `url(${aboutImage})` }}
            >
              <div className='card-content'>
                <h1>Pacifique Nshimiyimana</h1>
                <p>Executive Director</p>
                <div className='icons'>
                  <a href='#'><FaFacebook /></a>
                  <a href='#'><FaTwitter /></a>
                  <a href='#'><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className='tsocial-icons'>
              <a href='#'><FaFacebook /></a>
              <a href='#'><FaTwitter /></a>
              <a href='#'><FaPhone /></a>
              <a href='#'><FaLinkedin /></a>
            </div>
          </div>

          <div className='team-card'>
            <div 
              className='card-image' 
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className='card-content'>
                <h1>Jean Claude Habimana</h1>
                <p>Chief Operations Officer</p>
                <div className='icons'>
                  <a href='#'><FaFacebook /></a>
                  <a href='#'><FaTwitter /></a>
                  <a href='#'><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className='tsocial-icons'>
              <a href='#'><FaFacebook /></a>
              <a href='#'><FaTwitter /></a>
              <a href='#'><FaPhone /></a>
              <a href='#'><FaLinkedin /></a>
            </div>
          </div>

          <div className='team-card'>
            <div 
              className='card-image' 
              style={{ backgroundImage: `url(${image2})` }}
            >
              <div className='card-content'>
                <h1>Gisele Ndizeye</h1>
                <p>Head of Marketing</p>
                <div className='icons'>
                  <a href='#'><FaFacebook /></a>
                  <a href='#'><FaTwitter /></a>
                  <a href='#'><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className='tsocial-icons'>
              <a href='#'><FaFacebook /></a>
              <a href='#'><FaTwitter /></a>
              <a href='#'><FaPhone /></a>
              <a href='#'><FaLinkedin /></a>
            </div>
          </div>
          <div className='team-card'>
            <div 
              className='card-image' 
              style={{ backgroundImage: `url(${image3})` }}
            >
              <div className='card-content'>
                <h1>Agape Nduwamungu</h1>
                <p>Head of Marketing</p>
                <div className='icons'>
                  <a href='#'><FaFacebook /></a>
                  <a href='#'><FaTwitter /></a>
                  <a href='#'><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className='tsocial-icons'>
              <a href='#'><FaFacebook /></a>
              <a href='#'><FaTwitter /></a>
              <a href='#'><FaPhone /></a>
              <a href='#'><FaLinkedin /></a>
            </div>
          </div>
          
        </div>
      </div>

    </>
  );
}

export default Team;
