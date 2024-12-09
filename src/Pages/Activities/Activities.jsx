import React from 'react';
import './Activities.css';
import { Link } from 'react-router-dom';

function Activities() {
  return (
    <>
      <div className='activity-page'>
      <div className='activity-content1'> 
        <h1>activity page</h1>
      </div>
      </div>
      <div className='activity-body'>
        <h1>The top three principal activities of Alliance for Science Rwanda (AfS-Rwanda) based on the provided content are</h1>
        <div className="Page-activity">
          <div className="p-activity-image one"></div>
          <div className="p-activity-content">
          <h3>Technology Transfer</h3>
          <p>
            AFS-Rwanda collaborates with key governmental institutions,
             civil society, and business to identify and domesticate innovative
              technologies that address local food system challenges.
               Their partnerships with entities like National Industrial
                Research Development Agency (NIRDA) have facilitated the exchange
                 of information and skills, contributing to the widespread adoption
                  of climate-resilient crops and modern farming techniques
          </p>
          </div>
        </div>
        <div className="Page-activity">
          <div className="p-activity-image two"></div>
          <div className="p-activity-content">
          <h3>Science communication capacity building</h3>
          <p>
          AFS-Rwanda focuses on building the capacity of various groups,
           including media personnel, students and farmers, through training sessions.
            these events aim to create effective communication and advocates for 
             agricultural science and technology, enabling these groups to become
              speakers and writers on issues related to agricultural Innovation and
               climate resiliance. Over the past three years, they have trained over 265 individuals.
          </p>
          </div>
          </div>
          <div className="Page-activity plast">
          <div className="p-activity-image three"></div>
          <div className="p-activity-content">
          <h3>Alliance for Science Rwanda</h3>
          <p>
          AFS-Rwanda engages in policy advocacy by organising events,
           roundtables discussions, and strategic collaborations to
            promote the implementation of science-based agricultural policies.
             their efforts aim to influence policymakers, researchers,
              and business professionals to supprt the adoption of innovative
               agricultural practices that enhance food security and climate resiliance in Rwanda.
          </p>
          </div>

        </div>
      <div className='activity-foot'>
        <h3>Agriculture meets Innovation at the crossroads of biotechnology, where every challenge becomes an opportunity. </h3>
        <div className='trusted-image'>
          <img src="src/assets/image/trusted.png" alt="Trusted Alliance" />
          <img className='activity-img' src="src/assets/image/trusted.png" alt="Trusted Alliance" />
          <img className='activity-img' src="src/assets/image/trusted.png" alt="Trusted Alliance" />
          <p> +10,000 Trusted Alliance as the first Choice</p>
        </div>
        <div className='act-button'>
        <Link to="/about"><button>Get in touch</button></Link>
        
        </div>
        
      </div>
      </div>
    </>
  );
}

export default Activities;
