import React from 'react';
import './News.css';
import image from '../../assets/image/biotech.jpg';

function News() {
  return (
    <div>
      <div className='news'>
        <div className='news-content'>
        <h2>News & Viewer</h2>
        </div>
      </div>
      <div className='news-container'>
        <div className='blog'>
          <img src={image} alt="" />
          <p>Nigeria: Government commends stakeholders for advancing biotechnology</p>
        </div>
        <div className='blog'>
          <img src={image} alt="" />
          <p>OPINION: Africa has no choice between economic growth and protecting the environment</p>
        </div>
        <div className='blog'>
          <img src={image} alt="" />
          <p>How CRISPR gene-editing technology could change the way we eat</p>
        </div>
      </div>

      
      <div className='contact-form'>
        <h1>Contact Us</h1>
        <form>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' required />

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required />

          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' rows='5' required></textarea>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default News;
