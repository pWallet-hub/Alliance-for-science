import React from "react";
import "./News.css";
import image from "../../assets/image/biotech.jpg";
import post from "../../assets/image/post.jpg";
import post1 from "../../assets/image/post0.jpg";
import post2 from "../../assets/image/post2.jpg";

function News() {
  return (
    <div>
      <div className="news">
        <div className="news-content">
          <h2>News & Viewer</h2>
        </div>
      </div>
      <div className="news-container">
        <div className="blog">
          
          <img src={post2} alt="" />
          <h3>Feeding 9 Billion: Rwanda’s GMO Push Through Biosafety and Media Training</h3>
          <p>
          The global population, set to reach 9 billion, demands varied farming, 
          including GMOs, for sustainable food security. 
          Rwanda’s Biosafety Law and a media workshop by @OfabRwanda, 
          @ScienceAlly, and @RMC_Rwanda promote GMOs’ benefits like higher yields and reduced pesticide use.
          </p>
          <a
            href="https://x.com/AlexisNyandwi12/status/1922208195281330600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more on X
          </a>
        </div>
        <div className="blog">
          <img src={post1} alt="" />
          <h3>Fighting Cassava Diseases: RAB Rubona Station’s Quest for Resilient Crops</h3>
          <p>
            Ever wondered how we can make our crops more resilient? I recently
            visited RAB Rubona station, where they're tackling a critical issue:
            cassava diseases like Cassava Brown Streak Disease(kabore).
            Researchers are actively working on developing
          </p>
          <a
            href="https://x.com/UwimpuhweAnne/status/1923857158547849688"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more on X
          </a>
        </div>
        <div className="blog">
          <img src={post} alt="" />
          <h3>Empowering African Farmers: Dr. Sylvester Oikeh Advocates for Biotech Choices</h3>
          <p>
            We see technology that can benefit, yet farmers are being deprived
            of this technology. Let African farmers have choices on what to
            grow. ” Nigerian scientist Dr. Sylvester Oikeh
          </p>
          <a
            href="https://x.com/ScienceAlly/status/1922219519373648187"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more on X
          </a>
        </div>
      </div>

      <div className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default News;
