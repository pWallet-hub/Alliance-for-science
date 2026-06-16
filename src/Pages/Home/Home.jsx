import React, { useEffect, useRef, useState, useCallback } from 'react';
import './Home.css';
import image from '../../assets/image/bd image.jpg';
import aboutimage from '../../assets/image/6.jpg';
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

/* ─── Custom hook: triggers .is-visible when element enters viewport ─── */
function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: options.threshold ?? 0.12, rootMargin: options.rootMargin ?? '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  /* per-section reveal refs */
  const [capRef,  capVis]  = useReveal();
  const [intRef,  intVis]  = useReveal();
  const [progRef, progVis] = useReveal();
  const [galRef,  galVis]  = useReveal();
  const [evtRef,  evtVis]  = useReveal();
  const [mvRef,   mvVis]   = useReveal();
  const [actRef,  actVis]  = useReveal();
  const [faqRef,  faqVis]  = useReveal();
  const [ctaRef,  ctaVis]  = useReveal();
  const [parRef,  parVis]  = useReveal();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    // trigger hero entrance
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => { window.removeEventListener('scroll', handleScroll); clearTimeout(t); };
  }, []);

  const events = [
    { num: '01', month: 'JAN', year: '2023', title: 'Alliance for Science Rwanda visits Musanze' },
    { num: '02', month: 'FEB', year: '2023', title: 'Alliance for Science Rwanda visits Musanze' },
    { num: '04', month: 'OCT', year: '2023', title: 'Alliance for Science Rwanda visits Musanze' },
  ];

  const activities = [
    { icon: <FaBowlFood />,      label: 'Food Security',      desc: 'Alliance for science Rwanda has been incorporated' },
    { icon: <BiSolidCloudRain />,label: 'Climate Change',     desc: 'Alliance for science Rwanda has been incorporated' },
    { icon: <MdOutlineScience />,label: 'Research Innovation',desc: 'Alliance for science Rwanda has been incorporated' },
    { icon: <GrDocumentText />,  label: 'Policy Advocacy',    desc: 'Alliance for science Rwanda has been incorporated' },
  ];

  const partners = [
    { src: rab,   alt: 'RAB',   url: 'https://www.rab.gov.rw/'            },
    { src: ofab,  alt: 'OFAB',  url: 'https://ofabrwanda.rw/'             },
    { src: aatf,  alt: 'AATF',  url: 'https://www.aatf-africa.org/'       },
    { src: rmc,   alt: 'RMC',   url: 'https://rmc.rw/'                    },
    { src: virca, alt: 'VIRCA', url: 'https://www.aatf-africa.org/virca/' },
  ];

  return (
    <div className='home-container'>

      {/* ── SECTION 1: HERO BANNER ── */}
      <section className='home-content'>
        <div className='hero-parallax' style={{ transform: `translateY(${scrollY * 0.35}px)` }} />
        <div className='hero-overlay' />
        {/* animated particles */}
        <div className='hero-particles'>
          {[...Array(6)].map((_, i) => <span key={i} className={`particle p-${i+1}`} />)}
        </div>
        <div className={`text-content hero-entrance ${heroLoaded ? 'hero-entered' : ''}`}>
          <span className='hero-eyebrow anim-item delay-1'>Science · Innovation · Sustainability</span>
          <h1 className='anim-item delay-2'>Alliance for Science <span className='hero-accent'>RWANDA</span></h1>
          <p className='anim-item delay-3'>Alliance for Science Rwanda is all about creating a poverty free world.</p>
          <div className='hero-cta-row anim-item delay-4'>
            <button className='hero-cta primary'>Discover More <FaChevronRight className="btn-arrow" /></button>
            <button className='hero-cta secondary'>Our Work</button>
          </div>
        </div>
        <div className='hero-scroll-hint'>
          <span className='scroll-line' /><span>Scroll</span>
        </div>
      </section>

      {/* ── SECTION 2: CAPABILITIES ── */}
      <section className={`intro-capabilities-section reveal-section ${capVis ? 'is-visible' : ''}`} ref={capRef}>
        <div className="section-inner-content grid-2-col">
          <div className="capabilities-left-images fade-left">
            <div className="image-box-main" style={{ backgroundImage: `url(${award})` }} />
            <div className="image-box-floating" style={{ backgroundImage: `url(${aboutimage})` }} />
          </div>
          <div className="capabilities-right-text fade-right">
            <span className="section-eyebrow stagger-1">About Our Organisation</span>
            <h2 className='stagger-2'>Bringing values &amp; insights to scientific research</h2>
            <p className="section-desc-para stagger-3">
              Uniting farmers, scientists, media, businesses and policymakers for a better and sustainable future.
            </p>
            <div className="capabilities-features-list stagger-4">
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
            <button className="theme-solid-btn stagger-5">Discover More <FaChevronRight className="btn-arrow" /></button>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: INTERVENTIONS (DARK) ── */}
      <section className={`interventions-dark-section reveal-section ${intVis ? 'is-visible' : ''}`} ref={intRef}>
        <div className="section-inner-content">
          <div className="section-header-centered text-white fade-up stagger-1">
            <span className="section-eyebrow light">Strategic Directions</span>
            <h2>Key impact paths for global issues</h2>
          </div>
          <div className="interventions-triple-grid">
            {activities.slice(0, 3).map((act, idx) => (
              <div className={`intervention-box-card card-pop stagger-${idx + 2}`} key={idx}>
                <div className="int-card-icon">{act.icon}</div>
                <h3>{act.label} Interventions</h3>
                <p>{act.desc} to support structural transformation scales.</p>
                <a href="#more" className="int-card-link">Read More <MdKeyboardDoubleArrowRight /></a>
              </div>
            ))}
          </div>
          <p className="interventions-footer-note fade-up stagger-5">
            🔬 Delivering impactful outcomes. <a href="#explore">Find out more about our directions</a>
          </p>
        </div>
      </section>

      {/* ── SECTION 4: PROGRESS COUNTERS ── */}
      <section className={`progress-counters-section reveal-section ${progVis ? 'is-visible' : ''}`} ref={progRef}>
        <div className="section-inner-content grid-2-col">
          <div className="progress-left-content fade-left">
            <span className="section-eyebrow stagger-1">Our Milestones</span>
            <h2 className='stagger-2'>Paving transformation routes in Rwanda</h2>
            <p className='stagger-3'>Emphasizing reliable resource management frameworks alongside local communities.</p>

            <div className="skill-meter-wrapper stagger-4">
              <div className="skill-meter-meta">
                <span>Advocacy Growth Scale</span>
                <span>85%</span>
              </div>
              <div className="skill-meter-rail">
                <div className={`skill-meter-fill ${progVis ? 'meter-animate' : ''}`} style={{ '--meter-w': '85%' }} />
              </div>
            </div>

            <div className="counter-mini-boxes stagger-5">
              <div className="counter-mini-card">
                <div className="cm-icon"><FiUsers /></div>
                <div><h3>10+ Years</h3><p>Of Shared Impact</p></div>
              </div>
              <div className="counter-mini-card">
                <div className="cm-icon"><FiAward /></div>
                <div><h3>Nationwide</h3><p>Network Deployment</p></div>
              </div>
            </div>
            <button className="theme-solid-btn stagger-6">Explore Metrics <FaChevronRight className="btn-arrow" /></button>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: GALLERY ── */}
      <section className={`lab-gallery-section reveal-section ${galVis ? 'is-visible' : ''}`} ref={galRef}>
        <div className="section-inner-content">
          <div className="gallery-layout-split">
            <div className="gallery-left-info fade-left">
              <span className="section-eyebrow light stagger-1">Inside Our Mission</span>
              <h2 className='stagger-2'>Discover systemic values across our workspace layouts</h2>
              <div className="info-pill-stat stagger-3">
                <FiPieChart className="p-icon" />
                <div><h3>Empowered</h3><p>Advocacy Systems &amp; Action Layers</p></div>
              </div>
              <div className="video-trigger-thumb stagger-4" style={{ backgroundImage: `url(${award})` }}>
                <div className="video-play-btn-circle"><FaPlay /></div>
              </div>
            </div>
            <div className="gallery-right-images-grid fade-right">
              <div className="gallery-grid-img img-wide stagger-1" style={{ backgroundImage: `url(${aboutimage})` }} />
              <div className="gallery-grid-img stagger-2" style={{ backgroundImage: `url(${virca})` }} />
              <div className="gallery-grid-img-card stagger-3">
                <h4>Alliance for Science</h4>
                <p>Engaging communities to foster knowledge ecosystems.</p>
                <a href="#visit" className="arrow-icon-btn-link"><FaChevronRight /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: EVENTS TIMELINE ── */}
      <section className={`card-section reveal-section ${evtVis ? 'is-visible' : ''}`} ref={evtRef}>
        <div className="card-section-header fade-up stagger-1">
          <span className="section-eyebrow">Upcoming Gatherings</span>
          <h2>Explore our latest events updates and timeline sessions</h2>
        </div>
        <div className="card-container-stack">
          {events.map((ev, i) => (
            <div
              key={i}
              className={`card card-slide-up stagger-${i + 2} ${activeCard === i ? 'card-active' : ''}`}
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

      {/* ── SECTION 7: MISSION & VISION ── */}
      <section className={`about reveal-section ${mvVis ? 'is-visible' : ''}`} ref={mvRef}>
        <div className="section-inner-content">
          <div className="section-header-centered fade-up stagger-1">
            <span className="section-eyebrow">Core Statements</span>
            <h1>Our Mission &amp; <span className="accent-text">Vision Statement</span></h1>
          </div>
          <div className="about-mv-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                  </svg>
                ),
                title: 'Our Mission',
                text: 'To seek food security and sustainability through education and advocacy of innovative farming technologies in Rwanda by mitigating effects of climate change, pests and diseases.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M2.7 7.5L12 3l9.3 4.5L12 21z"/><path d="M2.7 7.5h18.6M8 7.5L12 3l4 4.5"/>
                  </svg>
                ),
                title: 'Our Vision',
                text: 'To become a leading force in Rwanda\'s agricultural transformation by emphasizing innovative farming technologies and establishing a nationwide network of food security advocates.',
              },
            ].map((card, i) => (
              <div className={`about-mv-card card-pop stagger-${i + 2}`} key={i}>
                <div className="about-mv-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: ACTIVITIES ── */}
      <section className={`main-activities reveal-section ${actVis ? 'is-visible' : ''}`} ref={actRef}>
        <div className='activities-bg-shape' />
        <div className='activities-bg-shape shape-2' />
        <span className='section-eyebrow light fade-up stagger-1'>What We Do</span>
        <h2 className='fade-up stagger-2'>Explore Our Main Activities</h2>
        <div className='activities-rule fade-up stagger-3'>
          <span /><span className='rule-gem' /><span />
        </div>
        <div className="activities-container">
          {activities.map((act, i) => (
            <div className={`activity-item card-pop stagger-${i + 4}`} key={i}>
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

      {/* ── SECTION 10: FAQ ── */}
      <section className={`faq-interactive-section reveal-section ${faqVis ? 'is-visible' : ''}`} ref={faqRef}>
        <div className="section-inner-content grid-2-col">
          <div className="faq-left-promo fade-left stagger-1">
            <div className="faq-promo-badge-card">
              <FaRegComments className="faq-badge-icon" />
              <h3>Have any question? Ask our experts</h3>
            </div>
          </div>
          <div className="faq-right-accordion fade-right">
            <span className="section-eyebrow stagger-2">Frequently Asked Questions</span>
            <h2 className='stagger-3'>Answers to your values &amp; research questions</h2>
            <div className="accordion-item-box stagger-4">
              <div className="accordion-header">
                <h4>What technologies are focused on?</h4>
                <span>+</span>
              </div>
            </div>
            <div className="accordion-item-box stagger-5">
              <div className="accordion-header">
                <h4>How can I join the Alliance network?</h4>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: CONTACT FORM ── */}
      <section className={`action-contact-form-section reveal-section ${ctaVis ? 'is-visible' : ''}`} ref={ctaRef}>
        <div className="section-inner-content contact-form-grid-card">
          <div className="contact-card-sidebar-info fade-left stagger-1">
            <span className="section-eyebrow light">Contact Us</span>
            <h2>Get in touch with us for more information</h2>
            <div className="sidebar-info-row-item">
              <FiPhoneCall className="s-icon" />
              <div><p>Office Direct Line</p><strong>Inquire Locally</strong></div>
            </div>
          </div>
          <div className="contact-card-main-inputs fade-right stagger-2">
            <form className="home-embedded-form" onSubmit={(e) => e.preventDefault()}>
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

      {/* ── SECTION 12: PARTNERS ── */}
      <section className={`parterner reveal-section ${parVis ? 'is-visible' : ''}`} ref={parRef}>
        <div className='parterner-header fade-up stagger-1'>
          <span className='section-eyebrow'>Trusted Collaborators</span>
          <h2>Our <span className='accent-text'>Partners</span></h2>
          <div className='parterner-rule'>
            <span className='rule-line' /><span className='rule-dot' /><span className='rule-line' />
          </div>
        </div>
        <div className='partner-grid'>
          {partners.map((p, i) => (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`partner-card card-pop stagger-${i + 2}`}
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