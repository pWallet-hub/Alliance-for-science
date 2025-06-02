import React from 'react';
import './Activities.css';
import { Link } from 'react-router-dom';

// Import images
import activityImage1 from '../../assets/image/teck.jpg';

import trustedImage from '../../assets/image/trusted.png';
import bg from '../../assets/image/bg-image.jpg';
import pacy from '../../assets/image/pacifique.jpg';

function Activities() {
  const activities = [
    {
      id: 1,
      title: "Technology Transfer",
      image: activityImage1,
      description: "AFS-Rwanda collaborates with key governmental institutions, civil society, and business to identify and domesticate innovative technologies that address local food system challenges. Their partnerships with entities like National Industrial Research Development Agency (NIRDA) have facilitated the exchange of information and skills, contributing to the widespread adoption of climate-resilient crops and modern farming techniques."
    },
    {
      id: 2,
      title: "Science Communication Capacity Building",
      image: pacy,
      description: "AFS-Rwanda focuses on building the capacity of various groups, including media personnel, students and farmers, through training sessions. These events aim to create effective communication and advocates for agricultural science and technology, enabling these groups to become speakers and writers on issues related to agricultural innovation and climate resilience. Over the past three years, they have trained over 265 individuals."
    },
    {
      id: 3,
      title: "Policy Advocacy",
      image: bg,
      description: "AFS-Rwanda engages in policy advocacy by organizing events, roundtables discussions, and strategic collaborations to promote the implementation of science-based agricultural policies. Their efforts aim to influence policymakers, researchers, and business professionals to support the adoption of innovative agricultural practices that enhance food security and climate resilience in Rwanda."
    }
  ];

  return (
    <>
      <div className='activity-page'>
        <div className='activity-content1'> 
          <h1>Our Activities</h1>
          <p>Driving Agricultural Innovation Through Science and Technology</p>
        </div>
      </div>
      
      <div className='activity-body'>
        <h1>The Top Three Principal Activities of Alliance for Science Rwanda (AfS-Rwanda)</h1>
        
        {activities.map((activity, index) => (
          <div key={activity.id} className={`page-activity ${index === 2 ? 'last-activity' : ''}`}>
            <div className={`activity-image-container ${index % 2 === 1 ? 'reverse' : ''}`}>
              <img 
                src={activity.image} 
                alt={activity.title}
                className="activity-image"
              />
            </div>
            <div className="activity-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
        
        <div className='activity-footer'>
          <h3>Agriculture meets Innovation at the crossroads of biotechnology, where every challenge becomes an opportunity.</h3>
          
          <div className='trusted-section'>
            <div className='trusted-avatars'>
              {[1, 2, 3].map((_, index) => (
                <img 
                  key={index}
                  src={trustedImage} 
                  alt="Trusted member" 
                  className="trusted-avatar"
                />
              ))}
            </div>
            <p>+10,000 Trust Alliance as the First Choice</p>
          </div>
          
          <div className='action-button'>
            <Link to="/about">
              <button>Explore who we are</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Activities;