// HomePage.js
import React from 'react';
import './Home.css';
import image from '../../image/bd image.jpg'

function Home() {
    const containerStyle = {
    backgroundImage: `url(${image})`, // Set the background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
top: '80%'
    
  };
  return (
    <div className='home-container' style={containerStyle}>
      <h1>My Component</h1>
      
    </div>
  );
}

export default Home;
