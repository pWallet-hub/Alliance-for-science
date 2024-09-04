import React from 'react';
import './Activities.css';

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
        <div className='section one'>
          Technology Transfer: AfS-Rwanda collaborates with key governmental institutions, civil society
          organizations, and businesses to identify and domesticate innovative technologies that address
          local food system challenges. Their partnerships with entities like the National Industrial Research
          Development Agency (NIRDA) have facilitated the exchange of information and skills,
          contributing to the widespread adoption of climate-resilient crops and modern farming
          techniques.
        </div>
        <div className='separator one'></div>
        <div className='section two'>
          Science Communication Capacity Building: AfS-Rwanda focuses on building the capacity of
          various groups, including media personnel, students, and farmers, through training sessions.
          These events aim to create effective communicators and advocates for agricultural science and
          technology, enabling these groups to become speakers and writers on issues related to
          agricultural innovation and climate resilience. Over the past three years, they have trained over
          365 individuals.
        </div>
        <div className='separator two'></div>
        <div className='section three'>
          Policy Advocacy: AfS-Rwanda engages in policy advocacy by organizing events, roundtable
          discussions, and strategic collaborations to promote the implementation of science-based
          agricultural policies. Their efforts aim to influence policymakers, researchers, and business
          professionals to support the adoption of innovative agricultural practices that enhance food
          security and climate resilience in Rwanda.
        </div>
      </div>
    </>
  );
}

export default Activities;
