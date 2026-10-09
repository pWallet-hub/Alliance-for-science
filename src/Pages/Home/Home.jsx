import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import aboutimage from '../../assets/image/communication-induction-01.jpg';
import heroBg from '../../assets/image/alliance-image-bg.jpg';
import { FaBowlFood, FaChevronRight, FaPlay, FaRegComments } from "react-icons/fa6";
import { MdOutlineScience, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { BiSolidCloudRain, BiTargetLock, BiSupport } from "react-icons/bi";
import { FiUsers, FiAward, FiPieChart, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

import ofab from '../../assets/image/OFAB-logo-removebg-preview.png';
import rab from '../../assets/image/Rab.png';
import aatf from '../../assets/image/AATF.jpg';
import rmc from '../../assets/image/rmc.jpg';
import award from '../../assets/image/award.jpg';
import biocap from '../../assets/image/labrevolencia.png';

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
  const [contactStatus, setContactStatus] = useState('');
  const [contactSending, setContactSending] = useState(false);

  async function handleContactSubmit(event) {
    event.preventDefault();
    setContactSending(true);
    setContactStatus('');

    try {
      const form = event.currentTarget;
      const response = await fetch('https://formsubmit.co/ajax/n.agape@afs-rwanda.org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      const accepted = result.result === 'success'
        || result.success === true
        || result.success === 'true';

      if (!response.ok || !accepted) {
        throw new Error(result.message || 'The email service did not accept the message.');
      }

      form.reset();
      setContactStatus('Message sent. Thank you for contacting us.');
    } catch (error) {
      const detail = error instanceof TypeError
        ? 'The email service could not be reached. Check your connection and try again.'
        : error.message;
      setContactStatus(`Message could not be sent: ${detail} You can also email n.agape@afs-rwanda.org.`);
    } finally {
      setContactSending(false);
    }
  }

  /* Scroll reveal handles */
  const [capRef,  capVis]  = useReveal();
  const [intRef,  intVis]  = useReveal();
  const [progRef, progVis] = useReveal();
  const [galRef,  galVis]  = useReveal();
  const [evtRef,  evtVis]  = useReveal();
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
    { icon: <FaBowlFood />,       label: 'Food Security',      desc: 'Advancing climate-resilient farming and biotech adoption to strengthen sustainable food security for smallholders across Rwanda.' },
    { icon: <BiSolidCloudRain />, label: 'Climate Resilience', desc: 'Promoting drought-tolerant maize and disease-resistant cassava varieties bred for a changing climate.' },
    { icon: <MdOutlineScience />, label: 'Research Documentation', desc: 'Following RAB\'s research and laboratory work first-hand, then documenting each stage so evidence-based results reach the public accurately.' },
    { icon: <GrDocumentText />,   label: 'Policy Advocacy',    desc: 'Championing evidence-based advocacy grounded in REMA\'s biosafety conditions and RICA\'s inspection and certification standards.' },
  ];

  const partners = [
    { src: rab,    alt: 'RAB',    url: 'https://www.rab.gov.rw/'      },
    { src: ofab,   alt: 'OFAB',   url: 'https://ofabrwanda.rw/'       },
    { src: aatf,   alt: 'AATF',   url: 'https://www.aatf-africa.org/' },
    { src: rmc,    alt: 'RMC',    url: 'https://rmc.rw/'              },
    { src: biocap, alt: 'La Benevolencija', url: 'https://www.labenevolencija.org/'  },
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
            Advancing agricultural biotechnology through science communication, research documentation, 
            evidence-based advocacy, and responsible stewardship empowering smallholders, strengthening biosafety,
            and connecting scientific innovation with sustainable food security across Rwanda.
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
              Alliance for Science Rwanda works alongside the Rwanda Agriculture Board (RAB), following biotech crops from laboratory research through confined field trials — experiencing first-hand how each new agricultural technology is developed and tested. From that direct research and field experience, we build public communication, advocacy, and documentation for every new release, grounded in the regulatory conditions set by REMA and the inspection and certification standards enforced by RICA.
            </p>
            <div className="capabilities-features-list stagger-4">
              <div className="feature-inline-item">
                <div className="feature-icon-box"><BiTargetLock /></div>
                <div>
                  <h4>Biosafety &amp; REMA Compliance</h4>
                  <p>Following RAB's laboratory and confined field trial research within the risk-assessment and environmental-release conditions set by REMA, in support of Rwanda's Biosafety Law.</p>
                </div>
              </div>
              <div className="feature-inline-item">
                <div className="feature-icon-box"><BiSupport /></div>
                <div>
                  <h4>Documentation &amp; RICA Standards</h4>
                  <p>Documenting each stage of research against RICA's seed and agro-input inspection and certification standards, then training journalists and communities to share it responsibly.</p>
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
            <h2>Key impact pathways across Rwanda</h2>
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
            🔬 From RAB's labs and field trials to REMA-approved releases and RICA-certified inputs — delivering science-backed, evidence-based outcomes. <a href="#explore">Discover our research partnerships</a>
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
              Empowering smallholder farmers, advocating for science-based biosafety policy, and bridging agricultural research with national food security goals through responsible stewardship.
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
                    <p>Journalists, students, and agronomists equipped to communicate agricultural biotechnology to the public.</p>
                  </div>
                </div>

                <div className="p-stat-divider" />

                <div className="p-stat-item">
                  <span className="p-stat-number">50+</span>
                  <div className="p-stat-info">
                    <strong>Technologies Transferred</strong>
                    <p>Promoting disease-resistant cassava and climate-smart crops to smallholders across provinces.</p>
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

      {/* ── SECTION 5: GALLERY (mosaic layout: every photo shown large, uncropped faces, no dark overlay) ── */}
      <section className={`lab-gallery-section reveal-section ${galVis ? 'is-visible' : ''}`} ref={galRef}>
        <style>{`
          .lgx-head { max-width: 820px; margin-bottom: 36px; }
          .lgx-head h2 { margin: 10px 0 24px; }

          .lgx-grid {
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            grid-auto-rows: 230px;
            gap: 18px;
          }
          .lgx-tile {
            position: relative;
            margin: 0;
            overflow: hidden;
            border-radius: 18px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);
            background: #0b3a66;
          }
          .lgx-tile img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            transition: transform 0.6s ease;
          }
          .lgx-tile:hover img { transform: scale(1.04); }

          /* Large portrait: keep faces in view */
          .lgx-a { grid-column: 1 / span 6; grid-row: 1 / span 2; }
          .lgx-a img { object-position: center top; }

          /* Award photo with play badge */
          .lgx-b { grid-column: 7 / span 6; grid-row: 1; }
          .lgx-b img { object-position: center 25%; }
          .lgx-play {
            position: absolute; left: 50%; top: 50%;
            transform: translate(-50%, -50%);
            width: 64px; height: 64px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            background: #1d8bf1; color: #fff; font-size: 1.1rem;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
            transition: transform 0.25s ease;
          }
          .lgx-b:hover .lgx-play { transform: translate(-50%, -50%) scale(1.08); }

          /* BioCap logo: whole logo on a clean white card */
          .lgx-c { grid-column: 7 / span 3; grid-row: 2; background: #ffffff; }
          .lgx-c img { object-fit: contain; padding: 20px; box-sizing: border-box; }

          /* Text card */
          .lgx-d {
            grid-column: 10 / span 3; grid-row: 2;
            display: flex; flex-direction: column; justify-content: space-between; gap: 10px;
            padding: 22px;
            background: linear-gradient(135deg, #0f5aa0 0%, #0a4175 100%);
          }
          .lgx-d h4 { margin: 0; color: #fff; font-size: 1.15rem; line-height: 1.25; }
          .lgx-d p  { margin: 0; color: rgba(255, 255, 255, 0.88); font-size: 0.88rem; line-height: 1.55; }
          .lgx-d-foot { display: flex; justify-content: flex-end; }

          /* Tablet: two columns, big photos on top */
          @media (max-width: 1000px) {
            .lgx-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: auto; }
            .lgx-a, .lgx-b, .lgx-c, .lgx-d { grid-column: auto; grid-row: auto; }
            .lgx-a { grid-column: 1 / -1; aspect-ratio: 4 / 3; }
            .lgx-b { grid-column: 1 / -1; aspect-ratio: 16 / 9; }
            .lgx-c { aspect-ratio: 4 / 3; }
            .lgx-d { min-height: 220px; }
          }
          /* Phone: single column */
          @media (max-width: 560px) {
            .lgx-grid { grid-template-columns: 1fr; }
            .lgx-a, .lgx-b, .lgx-c, .lgx-d { grid-column: 1 / -1; }
          }
        `}</style>

        <div className="section-inner-content">
          <div className="lgx-head">
            <span className="section-eyebrow light stagger-1">Inside Our Mission</span>
            <h2 className='stagger-2'>Fostering open, evidence-based dialogue between scientists and citizens</h2>
            <div className="info-pill-stat stagger-3">
              <FiPieChart className="p-icon" />
              <div><h3>Empowered</h3><p>Agricultural Communication Desks</p></div>
            </div>
          </div>

          <div className="lgx-grid">
            <figure className="lgx-tile lgx-a card-pop stagger-2">
              <img
                src={aboutimage}
                alt="Participants at an Alliance for Science Rwanda event"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="lgx-tile lgx-b card-pop stagger-3">
              <img
                src={award}
                alt="Award presentation at an Alliance for Science event"
                loading="lazy"
                decoding="async"
              />
              <span className="lgx-play" aria-hidden="true"><FaPlay /></span>
            </figure>

            <figure className="lgx-tile lgx-c card-pop stagger-4">
              <img src={ofab} alt="BioCap logo" loading="lazy" decoding="async" />
            </figure>

            <div className="lgx-tile lgx-d card-pop stagger-5">
              <div>
                <h4>Alliance for Science</h4>
                <p>Empowering smallholder farmers with science communication and responsible stewardship to build resilient, sustainable food systems.</p>
              </div>
              <div className="lgx-d-foot">
                <a href="#visit" className="arrow-icon-btn-link" aria-label="Learn more"><FaChevronRight /></a>
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

      {/* ── SECTION 7: ACTIVITIES ── */}
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
              <h3>Have questions regarding agricultural biotechnology or biosafety?</h3>
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
              <div><p>AfS Rwanda Helpdesk</p><strong>n.agape@afs-rwanda.org</strong></div>
            </div>
          </div>
          <div className="contact-card-main-inputs fade-right stagger-2">
            <form
              className="home-embedded-form"
              onSubmit={handleContactSubmit}
            >
              <input type="hidden" name="_subject" value="New message from the AfS Rwanda website" />
              <input type="hidden" name="_template" value="table" />
              <div className="form-double-inputs">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <textarea name="message" placeholder="Write Message..." rows="4" required />
              <button type="submit" className="form-submit-theme-btn" disabled={contactSending}>
                {contactSending ? 'Sending...' : 'Get In Touch'}
              </button>
              <p role="status" aria-live="polite">{contactStatus}</p>
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