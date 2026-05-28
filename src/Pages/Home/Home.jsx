import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import image from '../../assets/image/bd image.jpg';
import aboutimage from '../../assets/image/DSC_2232.jpg';
import { FaBowlFood, FaChevronRight, FaPlay, FaRegComments } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdOutlineScience, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { BiSolidCloudRain, BiTargetLock, BiSupport } from "react-icons/bi";
import { FiUsers, FiAward, FiPieChart, FiMapPin, FiPhoneCall } from "react-icons/fi";

import ofab from '../../assets/image/OFAB-logo-removebg-preview.png';
import rab from '../../assets/image/Rab.jpg';
import aatf from '../../assets/image/AATF.jpg';
import rmc from '../../assets/image/rmc.jpg';
import audience from '../../assets/image/Audience.jpg';
import award from '../../assets/image/award.jpg';
import virca from '../../assets/image/virca.jpg';

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const aboutRef = useRef(null);
  const activitiesRef = useRef(null);
  const partnersRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [activitiesVisible, setActivitiesVisible] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current && entry.isIntersecting) setAboutVisible(true);
          if (entry.target === activitiesRef.current && entry.isIntersecting) setActivitiesVisible(true);
          if (entry.target === partnersRef.current && entry.isIntersecting) setPartnersVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (activitiesRef.current) observer.observe(activitiesRef.current);
    if (partnersRef.current) observer.observe(partnersRef.current);
    return () => observer.disconnect();
  }, []);

  const events = [
    { num: '01', month: 'JAN', year: '2023', title: 'Alliance for Science Rwanda visits Musanze' },
    { num: '02', month: 'FEB', year: '2023', title: 'Alliance for Science Rwanda visits Musanze' },
    { num: '04', month: 'OCT', year: '2023', title: 'Alliance for Science Rwanda visits Musanze' },
  ];

  const activities = [
    { icon: <FaBowlFood />, label: 'Food Security', desc: 'Alliance for science Rwanda has been incorporated' },
    { icon: <BiSolidCloudRain />, label: 'Climate Change', desc: 'Alliance for science Rwanda has been incorporated' },
    { icon: <MdOutlineScience />, label: 'Research Innovation', desc: 'Alliance for science Rwanda has been incorporated' },
    { icon: <GrDocumentText />, label: 'Policy Advocacy', desc: 'Alliance for science Rwanda has been incorporated' },
  ];

  const partners = [
    { src: rab, alt: 'RAB', url: 'https://www.rab.gov.rw/' },
    { src: ofab, alt: 'OFAB', url: 'https://ofabafrica.org/' },
    { src: aatf, alt: 'AATF', url: 'https://www.aatf-africa.org/' },
    { src: rmc, alt: 'RMC', url: 'https://rmc.rw/' },
    { src: virca, alt: 'VIRCA', url: 'https://www.aatf-africa.org/virca/' },
  ];

  return (
    <div className='home-container'>

      {/* ── SECTION 1: HERO BANNER ── */}
      <section className='home-content'>
        <div className='hero-parallax' style={{ transform: `translateY(${scrollY * 0.35}px)` }} />
        <div className='hero-overlay' />
        <div className='text-content'>
          <span className='hero-eyebrow'>Science · Innovation · Sustainability</span>
          <h1>Alliance for Science <span className='hero-accent'>RWANDA</span></h1>
          <p>Alliance for Science Rwanda is all about creating a poverty free world.</p>
          <div className='hero-cta-row'>
            <button className='hero-cta primary'>Discover More <FaChevronRight className="btn-arrow" /></button>
            <button className='hero-cta secondary'>Our Work</button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: INTRO & CAPABILITIES ── */}
      <section className="intro-capabilities-section">
        <div className="section-inner-content grid-2-col">
          <div className="capabilities-left-images">
            <div className="image-box-main" style={{ backgroundImage: `url(${award})` }} />
            <div className="image-box-floating" style={{ backgroundImage: `url(${aboutimage})` }} />
          </div>
          <div className="capabilities-right-text">
            <span className="section-eyebrow">About Our Organisation</span>
            <h2>Bringing values &amp; insights to scientific research</h2>
            <p className="section-desc-para">
              Uniting farmers, scientists, media, businesses and policymakers for a better and sustainable future.
            </p>
            <div className="capabilities-features-list">
              <div className="feature-inline-item">
                <div className="feature-icon-box"><BiTargetLock /></div>
                <div>
                  <h4>Our Core Focus</h4>
                  <p>Advancing sustainable practices by aligning knowledge resources effectively.</p>
                </div>
              </div>
              <div className="feature-inline-item">
                <div className="feature-icon-box"><BiSupport /></div>
                <div>
                  <h4>Community Connection</h4>
                  <p>Connecting regional agricultural systems directly with research discoveries.</p>
                </div>
              </div>
            </div>
            <button className="theme-solid-btn">Discover More <FaChevronRight className="btn-arrow" /></button>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SERVICES EXTRACTION GRID ── */}
      <section className="interventions-dark-section">
        <div className="section-inner-content">
          <div className="section-header-centered text-white">
            <span className="section-eyebrow light">Strategic Directions</span>
            <h2>Key impact paths for global issues</h2>
          </div>
          <div className="interventions-triple-grid">
            {activities.slice(0, 3).map((act, idx) => (
              <div className="intervention-box-card" key={idx}>
                <div className="int-card-icon">{act.icon}</div>
                <h3>{act.label} Interventions</h3>
                <p>{act.desc} to support structural transformation scales.</p>
                <a href="#more" className="int-card-link">Read More <MdKeyboardDoubleArrowRight /></a>
              </div>
            ))}
          </div>
          <p className="interventions-footer-note">
            🔬 Delivering impactful outcomes. <a href="#explore">Find out more about our directions</a>
          </p>
        </div>
      </section>

      {/* ── SECTION 5: MEDIA AREA WORKSPACE ── */}
      <section className="lab-gallery-section">
        <div className="section-inner-content">
          <div className="gallery-layout-split">
            <div className="gallery-left-info">
              <span className="section-eyebrow light">Inside Our Mission</span>
              <h2>Discover systemic values across our workspace layouts</h2>
              <div className="info-pill-stat">
                <FiPieChart className="p-icon" />
                <div>
                  <h3>Empowered</h3>
                  <p>Advocacy Systems &amp; Action Layers</p>
                </div>
              </div>
              <div className="video-trigger-thumb" style={{ backgroundImage: `url(${award})` }}>
                <div className="video-play-btn-circle"><FaPlay /></div>
              </div>
            </div>
            <div className="gallery-right-images-grid">
              <div className="gallery-grid-img img-wide" style={{ backgroundImage: `url(${aboutimage})` }} />
              <div className="gallery-grid-img" style={{ backgroundImage: `url(${virca})` }} />
              <div className="gallery-grid-img-card">
                <h4>Alliance for Science</h4>
                <p>Engaging communities to foster knowledge ecosystems.</p>
                <a href="#visit" className="arrow-icon-btn-link"><FaChevronRight /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: EVENT HORIZONTAL TIMELINE ROW ── */}
      <section className="card-section">
        <div className="card-section-header">
          <span className="section-eyebrow">Upcoming Gatherings</span>
          <h2>Explore our latest events updates and timeline sessions</h2>
        </div>
        <div className="card-container-stack">
          {events.map((ev, i) => (
            <div
              key={i}
              className={`card ${activeCard === i ? 'card-active' : ''}`}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className='card-num-col'>
                <span className='card-big-num'>{ev.num}</span>
              </div>
              <div className='card-body'>
                <div className='card-date-pill'>
                  <span className='pill-dot' />
                  <span>{ev.month} {ev.year}</span>
                </div>
                <h2 className='card-title'>{ev.title}</h2>
                <div className="card-meta-row">
                  <span className="card-location"><FiMapPin /> Community outreach · Northern Province</span>
                </div>
              </div>
              <div className='card-arrow'>
                <div className='arrow-circle'>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
              <div className='card-bar' />
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: MISSION & VISION INSIGHT CORES ── */}
      <section ref={aboutRef} className={`about ${aboutVisible ? 'about-visible' : ''}`}>
        <div className="section-inner-content">
          <div className="section-header-centered">
            <span className="section-eyebrow">Core Statements</span>
            <h1>Our Mission &amp; <span className="accent-text">Vision Statement</span></h1>
          </div>
          <div className="about-mv-grid">
            <div className="about-mv-card">
              <div className="about-mv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h4>Our Mission</h4>
              <p>
                To seek food security and sustainability through education and advocacy
                of innovative farming technologies in Rwanda by mitigating effects of
                climate change, pests and diseases.
              </p>
            </div>
            <div className="about-mv-card">
              <div className="about-mv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M2.7 7.5L12 3l9.3 4.5L12 21z"/><path d="M2.7 7.5h18.6M8 7.5L12 3l4 4.5"/>
                </svg>
              </div>
              <h4>Our Vision</h4>
              <p>
                To become a leading force in Rwanda's agricultural transformation by
                emphasizing innovative farming technologies and establishing a nationwide
                network of food security advocates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: OBJECTIVES STRIP ACTIVITIES ── */}
      <section className="main-activities activities-visible" ref={activitiesRef}>
        <div className='activities-bg-shape' />
        <span className='section-eyebrow light'>What We Do</span>
        <h2>Explore Our Main Activities</h2>
        <div className='activities-rule'>
          <span /><span className='rule-gem' /><span />
        </div>
        <div className="activities-container">
          {activities.map((act, i) => (
            <div className="activity-item" key={i}>
              <div className='activity-icon-wrap'>
                <div className="activity-icon">{act.icon}</div>
                <div className='activity-icon-ring' />
              </div>
              <h3>{act.label}</h3>
              <p>{act.desc}</p>
              <div className='activity-line' />
            </div>
          ))}
        </div>
      </section>


      {/* ── SECTION 10: FAQS DROPDOWNS MODULE ── */}
      <section className="faq-interactive-section">
        <div className="section-inner-content grid-2-col">
          <div className="faq-left-promo">
            <div className="faq-promo-badge-card">
              <FaRegComments className="faq-badge-icon" />
              <h3>Have any question? Ask our experts</h3>
            </div>
          </div>
          <div className="faq-right-accordion">
            <span className="section-eyebrow">Frequently Asked Questions</span>
            <h2>Answers to your values &amp; research questions</h2>
            <div className="accordion-item-box">
              <div className="accordion-header">
                <h4>What technologies are focused on?</h4>
                <span>+</span>
              </div>
            </div>
            <div className="accordion-item-box">
              <div className="accordion-header">
                <h4>How can I join the Alliance network?</h4>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: CONTACT ACTION FORM BLOCK ── */}
      <section className="action-contact-form-section">
        <div className="section-inner-content contact-form-grid-card">
          <div className="contact-card-sidebar-info">
            <span className="section-eyebrow light">Contact Us</span>
            <h2>Get in touch with us for more information</h2>
            <div className="sidebar-info-row-item">
              <FiPhoneCall className="s-icon" />
              <div>
                <p>Office Direct Line</p>
                <strong>Inquire Locally</strong>
              </div>
            </div>
          </div>
          <div className="contact-card-main-inputs">
            <form className="home-embedded-form" onSubmit={(e)=>e.preventDefault()}>
              <div className="form-double-inputs">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <textarea placeholder="Write Message..." rows="4" required />
              <button type="submit" className="form-submit-theme-btn">Get In Touch</button>
            </form>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: PARTNERS INBOUND LINKS GRID ── */}
      <section className={`parterner ${partnersVisible ? 'partners-visible' : ''}`} ref={partnersRef}>
        <div className='parterner-header'>
          <span className='section-eyebrow'>Trusted Collaborators</span>
          <h2>Our <span className='accent-text'>Partners</span></h2>
          <div className='parterner-rule'>
            <span className='rule-line' />
            <span className='rule-dot' />
            <span className='rule-line' />
          </div>
        </div>
        <div className='partner-grid'>
          {partners.map((p, i) => (
            <a 
              href={p.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='partner-card' 
              key={i}
            >
              <div className='partner-card-inner'>
                <img src={p.src} alt={p.alt} />
              </div>
              <span className='partner-label'>{p.alt}</span>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;