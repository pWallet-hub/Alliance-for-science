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
    <div className='card-num-col'>
      <span className='card-big-num'>{ev.num}</span>
    </div>
    <div className='card-body'>
      <div className='card-date-pill'>
        <span className='dot' />
        <span>{ev.month} {ev.year}</span>
      </div>
      <h2 className='card-title'>{ev.title}</h2>
      <p className='card-subtitle'>Community outreach · Northern Province</p>
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
      </section>

    {/* ── ABOUT — Image 1 layout + Image 2 content ── */}
      <section
        className={`about ${aboutVisible ? 'about-visible' : ''}`}
        ref={aboutRef}
      >
        {/* LEFT: stacked images with floating card */}
        <div className='about-image-wrap'>
          <div className='about-img-stack'>
            <img src={award} alt="Alliance for Science Rwanda" className='image1' />
            <div className='about-img-overlay-card'>
              <div className='about-overlay-badge'>
                <span className='about-overlay-badge-dot' />
                24/7 Emergency Support
              </div>
              <img src={aboutimage} alt="Team" className='image2' />
              <div className='about-overlay-play'>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
          <div className='about-image-badge'>Est.<br />2023</div>
        </div>

        {/* RIGHT: eyebrow, heading, desc, mission/vision icon cards, CTA */}
        <div className='about-content'>
          <span className='section-eyebrow'>About Our Organisation</span>
          <h1>Our Mission &amp; <span className='accent-text'>Vision Statement</span></h1>
          <div className='about-divider' />
          <p>
            Uniting farmers, scientists, media, businesses and policymakers
            for a better and sustainable future.
          </p>

          {/* Mission + Vision icon cards — matches Image 1 layout */}
          <div className='about-mv-grid'>
            <div className='about-mv-card'>
              <div className='about-mv-icon'>
                {/* target/mission icon */}
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
            <div className='about-mv-card'>
              <div className='about-mv-icon'>
                {/* vision/diamond icon */}
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

          <div className='about-cta-row'>
            <button className='about-btn'>
              <span>More About Us</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <div className='about-team-pill'>
              <div className='about-team-avatar'>JM</div>
              <div>
                <strong>Pacifique Nshimiyimana</strong>
                <span>Executive Director</span>
              </div>
            </div>
          </div>
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