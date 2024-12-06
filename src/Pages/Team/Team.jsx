import React from 'react';
import './Team.css';
import image1 from '../../assets/image/habib.png';
import image2 from '../../assets/image/DGT_7871 copy.jpg';
import image3 from '../../assets/image/DSC_1823.jpg';
import aboutImage from '../../assets/image/pacc.jpg';
import { FaFacebook, FaTwitter, FaLinkedin ,FaInstagram} from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

function Team() {
  return (
    <>
      <div>
        <div className='team'> 
        <div className='team-content'> 
          <h1>Our Team</h1>
          </div>
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
                  <a href='https://www.facebook.com/pacifique.nshimiyimana/' target="_blank" rel="noreferrer"><FaFacebook /></a>
                  <a href="https://x.com/scienceally_rw?lang=en" target="_blank" rel="noreferrer"><IoMdClose /></a>
                  <a href='https://www.linkedin.com/in/pacifique-nshimiyimana-69996581/?originalSubdomain=rw' target="_blank" rel="noreferrer"><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className='tsocial-icons'>
              <a href='https://www.facebook.com/pacifique.nshimiyimana/' target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://x.com/scienceally_rw?lang=en" target="_blank" rel="noreferrer">
            <IoMdClose />
            </a>
              <a href='https://www.instagram.com/pacifiquens/' target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/pacifique-nshimiyimana-69996581/?originalSubdomain=rw' target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>

          <div className='team-card'>
            <div 
              className='card-image' 
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className='card-content'>
                <h1>Jean Claude Habimana</h1>
                <p>Program Manager</p>
                <div className='icons'>
                  <a href='https://www.facebook.com/habimana.jeanclaude.370/' target="_blank" rel="noreferrer"><FaFacebook /></a>
                  <a href='https://x.com/habimana_jclaud?lang=en' target="_blank" rel="noreferrer"> <IoMdClose /></a>
                  <a href='https://www.linkedin.com/in/habimana-jean-claude-416ab6107/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className='tsocial-icons'>
            <a href='https://www.facebook.com/habimana.jeanclaude.370/' target="_blank" rel="noreferrer"><FaFacebook /></a>
                  <a href='https://x.com/habimana_jclaud?lang=en' target="_blank" rel="noreferrer"> <IoMdClose /></a>
                  <a href='https://www.linkedin.com/in/habimana-jean-claude-416ab6107/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>

          <div className='team-card'>
            <div 
              className='card-image' 
              style={{ backgroundImage: `url(${image2})` }}
            >
              <div className='card-content'>
                <h1>Gisele Ndizeye</h1>
                <p>Communication Manager</p>
                <div className='icons'>
                  <a href='https://www.facebook.com/gisele.ndizeye/' target="_blank" rel="noreferrer"><FaFacebook /></a>
                  <a href='https://x.com/gisele_ndizeye?lang=en' target="_blank" rel="noreferrer"> <IoMdClose /></a>
                  <a href='https://www.linkedin.com/in/ndizeye-gisele-ba549a1a3/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=rw' target="_blank" rel="noreferrer"><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className='tsocial-icons'>
            <a href='https://www.facebook.com/gisele.ndizeye/' target="_blank" rel="noreferrer"><FaFacebook /></a>
                  <a href='https://x.com/gisele_ndizeye?lang=en' target="_blank" rel="noreferrer"> <IoMdClose /></a>
                  <a href='https://www.linkedin.com/in/ndizeye-gisele-ba549a1a3/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=rw' target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>
          <div className='team-card'>
            <div 
              className='card-image' 
              style={{ backgroundImage: `url(${image3})` }}
            >
              <div className='card-content'>
                <h1>Agape Nduwamungu</h1>
                <p>IT Service Officer</p>
                <div className='icons'>
                 
                  <a href='https://www.linkedin.com/in/agape-nduwamungu-bba7ba174/?originalSubdomain=tz' target="_blank" rel="noreferrer"><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className='tsocial-icons'>
            <a href='https://www.linkedin.com/in/agape-nduwamungu-bba7ba174/?originalSubdomain=tz' target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>
          
        </div>
      </div>

    </>
  );
}

export default Team;
