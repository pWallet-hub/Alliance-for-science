import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import aboutimage from '../../assets/image/6.jpg';
import heroBg from '../../assets/image/bd image.jpg';
import { FaBowlFood, FaChevronRight, FaPlay, FaRegComments } from "react-icons/fa6";
import { MdOutlineScience, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { BiSolidCloudRain, BiTargetLock, BiSupport } from "react-icons/bi";
import { FiUsers, FiAward, FiPieChart, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

import ofab from '../../assets/image/OFAB-logo-removebg-preview.png';
import rab from '../../assets/image/Rab.jpg';
import aatf from '../../assets/image/AATF.jpg';
import rmc from '../../assets/image/rmc.jpg';
import award from '../../assets/image/award.jpg';
import virca from '../../assets/image/virca.jpg';

/* Custom hook for reveal-on-scroll animations */
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
  }, [options.rootMargin, options.threshold]);

  return [ref, visible];
}

function Home() {
  const [activeCard, setActiveCard] = useState(1);
  const [heroLoaded, setHeroLoaded] = useState(false);

  /* Scroll reveal handles */
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
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Verified, authentic AfS-Rwanda & OFAB Rwanda events
  const realEvents = [
    {
      num: '01',
      month: 'OCT',
      year: '2021',
      title: 'OFAB Rwanda Chapter Launch & Science Media Desk',
      location: 'Kigali, Rwanda · Marriott Hotel',
      category: 'National Launch'
    },
    {
      num: '02',
      month: 'FEB',
      year: '2023',
      title: 'Media Engagement & Biosafety Awareness Workshop',
      location: 'Musanze, Northern Province · Field Site',
      category: 'Capacity Building'
    },
    {
      num: '03',
      month: 'AUG',
      year: '2023',
      title: 'RAB Rubona Field Visit on Cassava Disease Resistance',
      location: 'Huye, Southern Province · RAB Research Station',
      category: 'Research Inspection'
    },
  ];

  // Authentic AfS-Rwanda focus areas
  const activities = [
    { icon: <FaBowlFood />,       label: 'Food Security',      desc: 'Advancing climate-resilient farming and biotech adoption for smallholders across Rwanda.' },
    { icon: <BiSolidCloudRain />, label: 'Climate Resilience', desc: 'Promoting drought-tolerant maize and disease-resistant cassava crop varieties.' },
    { icon: <MdOutlineScience />, label: 'Research Innovation',desc: 'Connecting RAB agricultural scientists with media communicators and farmer coalitions.' },
    { icon: <GrDocumentText />,   label: 'Policy Advocacy',    desc: 'Supporting science-backed biosafety legislation and environmental risk assessments.' },
  ];

  const partners = [
    { src: rab,   alt: 'RAB',   url: 'https://www.rab.gov.rw/'             },
    { src: ofab,  alt: 'OFAB',  url: 'https://ofabrwanda.rw/'              },
    { src: aatf,  alt: 'AATF',  url: 'https://www.aatf-africa.org/'        },
    { src: rmc,   alt: 'RMC',   url: 'https://rmc.rw/'                     },
    { src: virca, alt: 'VIRCA', url: 'https://www.aatf-africa.org/virca/' },
  ];

  return (
    <div className='home-container'>

      {/* ── SECTION 1: HERO BANNER (Top Padding added to prevent Navbar overlap) ── */}
      <section className='home-hero'>
        <div className='home-hero__bg'>
          <img src={heroBg} alt="Alliance for Science Rwanda background" />
        </div>

        <div className={`home-hero-container ${heroLoaded ? 'hero-loaded' : ''}`}>
          <p className='home-hero-breadcrumb'>SCIENCE &bull; INNOVATION &bull; SUSTAINABILITY</p>

          <div className='home-hero-pill'>
            <Sparkles size={13} className='home-hero-pill-icon' />
            <span>ALLIANCE FOR SCIENCE RWANDA</span>
          </div>

          <h1 className='home-hero-title'>
            Alliance for Science <em>Rwanda</em>
          </h1>

          <p className='home-hero-subtitle'>
            Empowering smallholders, advancing biosafety policy, and bridging agricultural 
            biotechnology research with sustainable food security across Rwanda.
          </p>

          <div className='home-cta-group'>
            <button className='home-btn home-btn-primary'>
              Discover More <ArrowRight size={15} />
            </button>
            <button className='home-btn home-btn-outline'>
              Our Initiatives
            </button>
          </div>
        </div>

        <div className='home-hero__wave'>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,34.75V0Z"
              fill="#F4F9FE"
            />
          </svg>
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
            <h2 className='stagger-2'>Bringing evidence-based insights to agricultural science</h2>
            <p className="section-desc-para stagger-3">
              Alliance for Science Rwanda operates as a social enterprise connecting farmers, researchers, journalists, and policymakers to accelerate agricultural innovation.
            </p>
            <div className="capabilities-features-list stagger-4">
              <div className="feature-inline-item">
                <div className="feature-icon-box"><BiTargetLock /></div>
                <div>
                  <h4>Biosafety &amp; Policy Alignment</h4>
                  <p>Supporting Rwanda's draft Biosafety Law and science-backed regulatory frameworks.</p>
                </div>
              </div>
              <div className="feature-inline-item">
                <div className="feature-icon-box"><BiSupport /></div>
                <div>
                  <h4>Media &amp; Community Training</h4>
                  <p>Training journalists and youth in agricultural biotechnology communication.</p>
                </div>
              </div>
            </div>
            <button className="theme-solid-btn stagger-5">Explore Our Work <FaChevronRight className="btn-arrow" /></button>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: INTERVENTIONS (DARK) ── */}
      <section className={`interventions-dark-section reveal-section ${intVis ? 'is-visible' : ''}`} ref={intRef}>
        <div className="section-inner-content">
          <div className="section-header-centered text-white fade-up stagger-1">
            <span className="section-eyebrow light">Strategic Directions</span>
            <h2>Key impact pathways in East Africa</h2>
          </div>
          <div className="interventions-triple-grid">
            {activities.slice(0, 3).map((act, idx) => (
              <div className={`intervention-box-card card-pop stagger-${idx + 2}`} key={idx}>
                <div className="int-card-icon">{act.icon}</div>
                <h3>{act.label} Initiatives</h3>
                <p>{act.desc}</p>
                <a href="#more" className="int-card-link">Read More <MdKeyboardDoubleArrowRight /></a>
              </div>
            ))}
          </div>
          <p className="interventions-footer-note fade-up stagger-5">
            🔬 Delivering science-backed field outcomes. <a href="#explore">Discover our research partnerships</a>
          </p>
        </div>
      </section>

      {/* ── SECTION 4: PROGRESS & MILESTONES ── */}
      <section className={`progress-counters-section reveal-section ${progVis ? 'is-visible' : ''}`} ref={progRef}>
        <div className="section-inner-content grid-2-col">
          
          <div className="progress-left-content fade-left">
            <span className="section-eyebrow stagger-1">OUR MILESTONES</span>
            <h2 className="stagger-2">
              Paving transformation routes in <span className="accent-text">Rwanda</span>
            </h2>
            <p className="section-desc-para stagger-3">
              Empowering local farming communities, advocating for science-based biosafety policy, and bridging agricultural research with national food security goals.
            </p>

            <div className="skill-meter-wrapper stagger-4">
              <div className="skill-meter-meta">
                <span className="meter-label">Advocacy &amp; Outreach Scale</span>
                <span className="meter-val">85%</span>
              </div>
              <div className="skill-meter-rail">
                <div
                  className={`skill-meter-fill ${progVis ? 'meter-animate' : ''}`}
                  style={{ '--meter-w': '85%' }}
                >
                  <span className="meter-glow-dot" />
                </div>
              </div>
            </div>

            <div className="counter-mini-boxes stagger-5">
              <div className="counter-mini-card">
                <div className="cm-icon"><FiUsers /></div>
                <div>
                  <h3>10+ Years</h3>
                  <p>Of Science Communication</p>
                </div>
              </div>
              <div className="counter-mini-card">
                <div className="cm-icon"><FiAward /></div>
                <div>
                  <h3>OFAB Rwanda</h3>
                  <p>Official Chapter Hub</p>
                </div>
              </div>
            </div>

            <button className="theme-solid-btn stagger-6">
              <span>Explore Metrics</span>
              <FaChevronRight className="btn-arrow" />
            </button>
          </div>

          <div className="progress-right-card-wrap fade-right stagger-2">
            <div className="progress-feature-card">
              <div className="p-card-header">
                <span className="p-card-badge">REAL-WORLD IMPACT</span>
                <h3 className="p-card-title">Strengthening Rwanda’s Agricultural Future</h3>
              </div>

              <div className="p-stats-list">
                <div className="p-stat-item">
                  <span className="p-stat-number">265+</span>
                  <div className="p-stat-info">
                    <strong>Communicators Trained</strong>
                    <p>Journalists, students, and agronomists skilled in agricultural biotechnology.</p>
                  </div>
                </div>

                <div className="p-stat-divider" />

                <div className="p-stat-item">
                  <span className="p-stat-number">50+</span>
                  <div className="p-stat-info">
                    <strong>Technologies Transferred</strong>
                    <p>Promoting disease-resistant cassava and climate-smart crops across provinces.</p>
                  </div>
                </div>
              </div>

              <div className="p-card-footer">
                <div className="p-card-foot-dot" />
                <span>Data backed by RAB &amp; OFAB Rwanda research network.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 5: GALLERY ── */}
      <section className={`lab-gallery-section reveal-section ${galVis ? 'is-visible' : ''}`} ref={galRef}>
        <div className="section-inner-content">
          <div className="gallery-layout-split">
            <div className="gallery-left-info fade-left">
              <span className="section-eyebrow light stagger-1">Inside Our Mission</span>
              <h2 className='stagger-2'>Fostering open dialogue between scientists and citizens</h2>
              <div className="info-pill-stat stagger-3">
                <FiPieChart className="p-icon" />
                <div><h3>Empowered</h3><p>Agricultural Communication Desks</p></div>
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
                <p>Engaging farming communities to build resilient food systems.</p>
                <a href="#visit" className="arrow-icon-btn-link"><FaChevronRight /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: EVENTS TIMELINE ── */}
      <section className={`events-revamped-section reveal-section ${evtVis ? 'is-visible' : ''}`} ref={evtRef}>
        <div className="events-container-wrap">
          <div className="events-header-block fade-up stagger-1">
            <span className="events-eyebrow">UPCOMING GATHERINGS</span>
            <h2 className="events-main-title">
              Explore our latest events updates and timeline sessions
            </h2>
          </div>

          <div className="events-cards-row">
            {realEvents.map((ev, i) => {
              const isSelected = activeCard === i;
              return (
                <div
                  key={i}
                  className={`event-card-item stagger-${i + 2} ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveCard(i)}
                  onMouseEnter={() => setActiveCard(i)}
                >
                  <div className="event-num-col">
                    <span className="event-big-num">{ev.num}</span>
                  </div>

                  <div className="event-body-col">
                    <div className="event-pill-badge">
                      <span className="event-pill-dot" />
                      <span className="event-pill-date">
                        <strong>{ev.month}</strong> {ev.year}
                      </span>
                    </div>

                    <h3 className="event-card-heading">{ev.title}</h3>

                    <div className="event-location-row">
                      <FiMapPin className="event-location-icon" />
                      <span>{ev.location}</span>
                    </div>
                  </div>

                  <div className="event-action-arrow">
                    <div className="event-arrow-circle">
                      <ArrowRight size={18} />
                    </div>
                  </div>

                  <div className="event-card-accent-bar" />
                </div>
              );
            })}
          </div>
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
              <h3>Have questions regarding biotechnology?</h3>
            </div>
          </div>
          <div className="faq-right-accordion fade-right">
            <span className="section-eyebrow stagger-2">Frequently Asked Questions</span>
            <h2 className='stagger-3'>Answers to agricultural research questions</h2>
            <div className="accordion-item-box stagger-4">
              <div className="accordion-header">
                <h4>What agricultural technologies does AfS Rwanda promote?</h4>
                <span>+</span>
              </div>
            </div>
            <div className="accordion-item-box stagger-5">
              <div className="accordion-header">
                <h4>How does AfS Rwanda support the National Biosafety Law?</h4>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: CONTACT ── */}
      <section className={`action-contact-form-section reveal-section ${ctaVis ? 'is-visible' : ''}`} ref={ctaRef}>
        <div className="section-inner-content contact-form-grid-card">
          <div className="contact-card-sidebar-info fade-left stagger-1">
            <span className="section-eyebrow light">Contact Us</span>
            <h2>Get in touch with our team for more information</h2>
            <div className="sidebar-info-row-item">
              <FiPhoneCall className="s-icon" />
              <div><p>OFAB Rwanda Helpdesk</p><strong>desk@ofabrwanda.org</strong></div>
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