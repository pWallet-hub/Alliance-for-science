import React from 'react'
import './Team.css'
import aboutImage from '../../assets/image/aboutimage.jpg';

function Team() {
  return (
    <div>
        <div className='team'> 
          <h1>Our Team</h1>
          </div>
          <div className='team-container'>
          <img src={aboutImage} alt="image" className='image' />
            <div className='team-content'>
              <h2>nshimiyimana pacifique</h2>
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
            </div>
          </div>
          
          <div className='team-container'>
          <img src={aboutImage} alt="image" className='image' />
            <div className='team-content'>
              <h2>jean claude habimana </h2>
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
            </div>
          </div>
          
          <div className='team-container'>
          <img src={aboutImage} alt="image" className='image' />
            <div className='team-content'>
              <h2>gisele ndizeye</h2>
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
            </div>
          </div>
          
          <div className='team-container'>
          <img src={aboutImage} alt="image" className='image' />
            <div className='team-content'>
              <h2>agape nduwamungu</h2>
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
            </div>
          </div>

    </div>
  );
}

export default Team