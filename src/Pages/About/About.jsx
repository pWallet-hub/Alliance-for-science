import React from 'react';
import './About.css';
import aboutImage from '../../assets/image/aboutimage.jpg';
import { GoDotFill } from "react-icons/go";


function About() {
    return (
        <div>
            <div className='about'>
                <div className='about-text'>
                    <h1>About Us</h1>
                </div>
            </div>
            <div className='about1'>
                <img src={aboutImage} alt="image" className='image' />
                <div className='about-content1'>
                    <h1>About Us</h1>
                    <p>Alliance for Science Rwanda has been incorporated as a social enterprise with a mission to seek food security, sustainability through education and advocacy of innovative farming technologies in Rwanda by mitigating effects of climate change, pests, and diseases.</p>
                    <button>Read More</button>
                </div>
            </div>
            <div className='mission'>
                <h1>Mission</h1>
                <p>Alliance for science Rwanda has been incorporated as a 
                   social enterprise with mission to seek food security, sustana
                   bility through education and advocacy of innovative farming
                   technologies in Rwanda by mitigating effects of climate 
                   change , pests and diseases.</p>

            </div>
            <div className='goal'>
                <h1>Goal</h1>
                <ul>
                    <li> <GoDotFill />Empower farming communities through bridging the gap between farming
                         innovative technologies developers, farmers, and local government</li>
                    <li><GoDotFill />Engage key stakeholders including local government, through information
                         sharing and round tables discussions.</li>
                    <li><GoDotFill />Create a national consortium network of Agricultural technology 
                               practitioners and enthusiasts of food security.</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
