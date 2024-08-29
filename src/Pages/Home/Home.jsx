import React from 'react';
import './Home.css';
import image from '../../assets/image/bd image.jpg';
import aboutimage from '../../assets/image/DSC_2232.jpg';
import { FaBowlFood } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdOutlineScience } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import ofab from '../../assets/image/OFAB-logo-removebg-preview.png'
import rab from '../../assets/image/Rab.jpg'
import aatf from '../../assets/image/AATF.jpg'
import rmc from '../../assets/image/rmc.jpg'
import virca from '../../assets/image/virca.jpg'
import { BiSolidCloudRain } from "react-icons/bi";



function Home() {


  return (
    <div className='home-container'>
      <div className='home-content'>
        <div className='text-content'>
          <h1>ALLIANCE for SCIENCE RWANDA</h1>
          <p>Alliance for Science  Rwanda is all about 
            creating a poverty  free world .</p>
        </div>
      </div>
      <div className='card-container'>
        <div className='card'>
          <div className='card1'>
            <div className='card-content'>
              <div className='cardo1'><h1>01</h1></div>
              <div className='card-date'><h1>JAN <br />2023</h1></div>
            </div>
            <div className='card-description'>
              <h2>alliance for <br />science <br />Rwanda visits <br />Musanze</h2>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card1'>
            <div className='card-content'>
              <div className='cardo1'><h1>02</h1></div>
              <div className='card-date'><h1>FEB <br />2023</h1></div>
            </div>
            <div className='card-description1'>
              <h2>alliance for <br />science <br />Rwanda visits <br />Musanze</h2>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card1'>
            <div className='card-content'>
              <div className='cardo1'><h1>04</h1></div>
              <div className='card-date'><h1>OCT <br />2023</h1></div>
            </div>
            <div className='card-description'>
              <h2>alliance for <br />science <br />RWANDA visits <br />Musanze</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='about'>
        <img src={aboutimage} alt="image" className='image1' />
        <div className='about-content'>
          <h1>about us</h1>
          <p>Alliance for science Rwanda
            has been incorporated as a
            social enterprise with mission
            to seek food security, sustana
            bility through education and
            advocacy of innovative farming
            technologies in Rwanda by
            mitigating effects of climate
            change , pests and diseases.

          </p>
          <button>read more</button>
        </div>
      </div>
      <div className="main-activities">
        <h2>Explore Our Main Activities</h2>
        <div className="activities-container">
          <div className="activity-item">
            <div className="activity-icon food-security"><FaBowlFood /></div>
            <h3>FOOD SECURITY</h3>
            <p>Alliance for science Rwanda has been incorporated</p>
          </div>
          <div className="activity-item">
            <div className="activity-icon climate-change"><BiSolidCloudRain /></div>
            <h3>CLIMATE CHANGE</h3>
            <p>Alliance for science Rwanda has been incorporated</p>
          </div>
          <div className="activity-item">
            <div className="activity-icon research-innovation">
              <span><MdOutlineScience /></span>
            </div>
            <h3>RESEARCH INNOVATION</h3>
            <p>Alliance for science Rwanda has been incorporated</p>
          </div>
          <div className="activity-item">
            <div className="activity-icon policy-advocacy"><GrDocumentText /></div>
            <h3>POLICY ADVOCACY</h3>
            <p>Alliance for science Rwanda has been incorporated</p>
          </div>

        </div>
      </div>
      <div className='parterner'>
        <h2>OUR PARTNERS</h2>
        <div className='image4'>
         
          <img src={rab} alt="image" />
          <img src={ofab} alt="image" />
          <img src={aatf} alt="image" />
          <img src={rmc} alt="image" />
          <img src={virca} alt="image" />
         
        </div>
      </div>
    </div>
  );
}

export default Home;
