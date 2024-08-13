import React from 'react'
import './Team.css'
import aboutImage from '../../assets/image/pacc.jpg';
import image1 from '../../assets/image/habiman.jpeg';
import image2 from '../../assets/image/_72A2686.jpg';
import image3 from '../../assets/image/DSC_1823.jpg';


function Team() {
  return (
    <div>
        <div className='team'> 
          <h1>Our Team</h1>
          </div>
          <div className='team-container'>
          <img src={aboutImage} alt="image" className='image' />
            <div className='team-content'>
              <h2> pacifique nshimiyimana</h2>
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
          <img src={image1} alt="image" className='image' />
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
          <img src={image2} alt="image" className='image' />
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
          <img src={image3} alt="image" className='image' />
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