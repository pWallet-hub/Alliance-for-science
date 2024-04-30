import React from 'react';
import './About.css';
import aboutImage from '../../assets/image/aboutimage.jpg';
import { GoDotFill } from "react-icons/go";


function About() {
    return (
        <div>
            <div className='about1'>
                <div className='about-text'>
                    <h1>About Us</h1>
                </div>
            </div>
            <div className='about2'>
                <img src={aboutImage} alt="image" className='image2' />
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
                <li><i class='bx bxs-circle'></i>Empower farming communities through bridging the gap between farming
                         innovative technologies developers, farmers, and local government</li>
                    <li><i class='bx bxs-circle'></i>Engage key stakeholders including local government, through information
                         sharing and round tables discussions.</li>
                         <li><i class='bx bxs-circle'></i>Create a national consortium network of Agricultural technology 
                               practitioners and enthusiasts of food security.</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
