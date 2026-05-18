import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import image from '../../assets/image/bd image.jpg';
import aboutimage from '../../assets/image/DSC_2232.jpg';
import { FaBowlFood } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdOutlineScience } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import ofab from '../../assets/image/OFAB-logo-removebg-preview.png';
import rab from '../../assets/image/Rab.jpg';
import aatf from '../../assets/image/AATF.jpg';
import rmc from '../../assets/image/rmc.jpg';
import audience from '../../assets/image/Audience.jpg';
import award from '../../assets/image/award.jpg';
import virca from '../../assets/image/virca.jpg';
import { BiSolidCloudRain } from "react-icons/bi";

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
      { threshold: 0.15 }
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
    { src: rab, alt: 'RAB' },
    { src: ofab, alt: 'OFAB' },
    { src: aatf, alt: 'AATF' },
    { src: rmc, alt: 'RMC' },
    { src: virca, alt: 'VIRCA' },
  ];

  return (
    <div className='home-container'>

      {/* ── HERO ── */}
      <section className='home-content'>
        <div
          className='hero-parallax'
          style={{ transform: `translateY(${scrollY * 0.35}px)` }}
        />
        <div className='hero-overlay' />
        <div className='text-content'>
          <span className='hero-eyebrow'>Science · Innovation · Sustainability</span>
          <h1>Alliance for Science <span className='hero-accent'>RWANDA</span></h1>
          <p>Alliance for Science Rwanda is all about creating a poverty free world.</p>
          <div className='hero-cta-row'>
            <button className='hero-cta primary'>Discover More</button>
            <button className='hero-cta secondary'>Our Work</button>
          </div>
        </div>
        <div className='hero-scroll-hint'>
          <span className='scroll-line' />
          <span className='scroll-label'>Scroll</span>
        </div>
      </section>

      {/* ── EVENT CARDS ── */}
      <section className='card-container'>
        {events.map((ev, i) => (
          <div
            key={i}
            className={`card ${activeCard === i ? 'card-active' : ''}`}
            onMouseEnter={() => setActiveCard(i)}
            onMouseLeave={() => setActiveCard(null)}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className='card-accent-bar' />
            <div className='card-inner'>
              <div className='card-meta'>
                <span className='card-num'>{ev.num}</span>
                <span className='card-divider' />
                <span className='card-date'>{ev.month}<br />{ev.year}</span>
              </div>
              <h2 className='card-title'>{ev.title}</h2>
            </div>
            <div className='card-hover-glow' />
          </div>
        ))}
      </section>

      {/* ── ABOUT ── */}
      <section
        className={`about ${aboutVisible ? 'about-visible' : ''}`}
        ref={aboutRef}
      >
        <div className='about-image-wrap'>
          <img src={award} alt="Award" className='image1' />
          <div className='about-image-badge'>Est. 2023</div>
        </div>
        <div className='about-content'>
          <span className='section-eyebrow'>Who We Are</span>
          <h1>About <span className='accent-text'>Us</span></h1>
          <div className='about-divider' />
          <p>
            Alliance for Science Rwanda has been incorporated as a social enterprise with mission
            to seek food security, sustainability through education and advocacy of innovative
            farming technologies in Rwanda by mitigating effects of climate change, pests and diseases.
          </p>
          <button className='about-btn'>
            <span>Read More</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </section>

      {/* ── ACTIVITIES ── */}
      <section
        className={`main-activities ${activitiesVisible ? 'activities-visible' : ''}`}
        ref={activitiesRef}
      >
        <div className='activities-bg-shape' />
        <span className='section-eyebrow light'>What We Do</span>
        <h2>Explore Our Main Activities</h2>
        <div className='activities-rule'>
          <span /><span className='rule-gem' /><span />
        </div>
        <div className="activities-container">
          {activities.map((act, i) => (
            <div
              className="activity-item"
              key={i}
              style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
            >
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

      {/* ── PARTNERS ── */}
      <section
        className={`parterner ${partnersVisible ? 'partners-visible' : ''}`}
        ref={partnersRef}
      >
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
            <div
              className='partner-card'
              key={i}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className='partner-card-inner'>
                <img src={p.src} alt={p.alt} />
              </div>
              <span className='partner-label'>{p.alt}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;