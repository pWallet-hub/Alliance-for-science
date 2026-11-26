import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import aboutimage from '../../assets/image/bd-image.jpg';
import heroBg from '../../assets/image/alliance-image-bg.jpg';
import audience from '../../assets/image/Audience.jpg';
import contactPerson from '../../assets/image/pacifique-ask-image.jpg';
import { FaBowlFood, FaChevronRight, FaPlay, FaQuoteLeft, FaLeaf } from "react-icons/fa6";
import { MdOutlineScience } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { BiSolidCloudRain } from "react-icons/bi";
import { FiUsers, FiAward, FiMapPin, FiPhoneCall, FiMail, FiPlus, FiMinus } from "react-icons/fi";
import { ArrowRight, ArrowLeft, ArrowUpRight, Check, ArrowUp } from "lucide-react";

import ofab from '../../assets/image/OFAB-logo-removebg-preview.png';
import ofabImage from '../../assets/image/ofab-image.jpg';
import stlouis from '../../assets/image/stlouis.jpg'
import rab from '../../assets/image/Rab.png';
import aatf from '../../assets/image/AATF.jpg';
import annual from '../../assets/image/annual-review.jpg'
import rubonaAnnual from '../../assets/image/rubona-annual.jpg'
import media from '../../assets/image/media-award.jpg';
import biocapImage from '../../assets/image/biocap-image.jpg'
import rmc from '../../assets/image/rmc.jpg';
import presentation from '../../assets/image/presentation.jpg';
import award from '../../assets/image/afs-image.jpg';
import biocap from '../../assets/image/labrevolencia.png';

/* Line-art doodles (olive sprig, bubble) like the template's pale outlines */
function Sprig({ className = '' }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 180 170" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M30 150C40 100 60 50 85 12C110 50 112 100 92 142" />
      <path d="M92 142C120 110 150 92 176 90C150 130 120 142 92 142Z" />
      <circle cx="30" cy="130" r="20" /><circle cx="70" cy="152" r="18" /><circle cx="26" cy="128" r="6" />
    </svg>
  );
}
function Bubble({ className = '' }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
      <circle cx="60" cy="60" r="52" /><path d="M30 38C38 28 50 24 64 24" /><path d="M96 70C94 82 88 92 78 98" />
    </svg>
  );
}
/* Wheat line-art for the contact panel's bottom band */
function Wheat({ className = '' }) {
  const ear = (x, y, s = 1) => (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 0V70" />
      <path d="M0 0C-6 -8 -6 -16 0 -22C6 -16 6 -8 0 0Z" />
      <path d="M0 14C-9 8 -12 0 -10 -8C-2 -6 2 2 0 14Z" /><path d="M0 14C9 8 12 0 10 -8C2 -6 -2 2 0 14Z" />
      <path d="M0 32C-9 26 -12 18 -10 10C-2 12 2 20 0 32Z" /><path d="M0 32C9 26 12 18 10 10C2 12 -2 20 0 32Z" />
      <path d="M0 50C-9 44 -12 36 -10 28C-2 30 2 38 0 50Z" /><path d="M0 50C9 44 12 36 10 28C2 30 -2 38 0 50Z" />
    </g>
  );
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 220 120" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ear(110, 22, 1.25)}{ear(78, 40)}{ear(142, 40)}{ear(48, 56, .85)}{ear(172, 56, .85)}
      <path d="M10 116C60 106 160 106 210 116" />
    </svg>
  );
}

/* Rotated rubber-stamp badge that sits on the hero wave */
function Stamp() {
  return (
    <svg className="hero-stamp" viewBox="0 0 300 200" aria-hidden="true">
      <defs>
        <path id="arcTop" d="M60 100C80 40 220 40 240 100" />
        <path id="arcBottom" d="M52 112C80 176 220 176 248 112" />
      </defs>
      <g transform="rotate(-12 150 100)">
        <rect x="8" y="26" width="284" height="148" rx="10" fill="var(--g-accent)" />
        <ellipse cx="150" cy="100" rx="128" ry="60" fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="2 5" />
        <text fontSize="21" fontWeight="800" fill="#fff" letterSpacing="3"><textPath href="#arcTop" startOffset="50%" textAnchor="middle">EVIDENCE-BASED</textPath></text>
        <rect x="26" y="78" width="248" height="46" rx="6" fill="#fff" />
        <text x="150" y="114" textAnchor="middle" fontSize="38" fontWeight="800" fill="var(--g-primary)" letterSpacing="3">SCIENCE</text>
        <text fontSize="21" fontWeight="800" fill="#fff" letterSpacing="3"><textPath href="#arcBottom" startOffset="50%" textAnchor="middle">RWANDA · 100%</textPath></text>
      </g>
    </svg>
  );
}

/* Section wrapper: fades in once when scrolled into view */
function Section({ className = '', id, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <section ref={ref} id={id} className={`${className} reveal ${visible ? 'is-visible' : ''}`}>{children}</section>;
}

function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [slide, setSlide] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const [galIdx, setGalIdx] = useState(0);
  const galleryImgs = [
    { src: aboutimage, alt: 'Participants at an Alliance for Science Rwanda event' },
    { src: award, alt: 'Award presentation at an Alliance for Science event', play: true },
    { src: audience, alt: 'Audience at an Alliance for Science Rwanda session' },
    { src: heroBg, alt: 'Alliance for Science Rwanda field and research work' },
    { src: media, alt: 'Alliance for Science Rwanda field and parteners' },
    { src: presentation, alt: 'Alliance for Science Rwanda field and parteners' },
  ];
  /* Rotate the list and repeat it so the strip is always full */
  const rotated = [...galleryImgs.slice(galIdx), ...galleryImgs.slice(0, galIdx)];
  const galItems = [...rotated, ...rotated];
  useEffect(() => {
    const t = setInterval(() => setGalIdx(i => (i + 1) % galleryImgs.length), 4500);
    return () => clearInterval(t);
  }, []);
  const heroSlides = [annual, heroBg, audience];
  const goHero = (d) => setHeroSlide(s => (s + d + heroSlides.length) % heroSlides.length);
  useEffect(() => {
    const t = setInterval(() => setHeroSlide(s => (s + 1) % 3), 7000);
    return () => clearInterval(t);
  }, [heroSlide]);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const [contactStatus, setContactStatus] = useState('');
  const [contactSending, setContactSending] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  async function handleContactSubmit(event) {
    event.preventDefault();
    setContactSending(true);
    setContactStatus('');
    try {
      const form = event.currentTarget;
      const response = await fetch('https://formsubmit.co/ajax/n.agape@afs-rwanda.org', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      const accepted = result.result === 'success' || result.success === true || result.success === 'true';
      if (!response.ok || !accepted) throw new Error(result.message || 'The email service did not accept the message.');
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

  const realEvents = [
    { month: 'NOV', year: '2026', img: stlouis, title: 'St Louis & Donald Danforth Plant Science Center field visit Nemba', location: 'Bugesera, Eastern Province · Field Site', category: 'Capacity Building' },
    { month: 'OCT', year: '2026', img: rubonaAnnual, title: 'RAB Rubona Field Visit on annual review', location: 'Huye, Southern Province · RAB Research Station', category: 'Research Inspection' },
    { month: 'OCT', year: '2025', img: ofabImage, title: 'OFAB Rwanda Chapter communication engagement', location: 'Musanze, Rwanda ·Northern province', category: 'Workshop' },
  ];

  const activities = [
    { icon: <FaBowlFood />, label: 'Food Security', img: heroBg, desc: 'Advancing climate-resilient farming and biotech adoption to strengthen sustainable food security for smallholders across Rwanda.' },
    { icon: <BiSolidCloudRain />, label: 'Climate Resilience', img: aboutimage, desc: 'Promoting drought-tolerant maize and disease-resistant cassava varieties bred for a changing climate.' },
    { icon: <MdOutlineScience />, label: 'Research Documentation', img: award, desc: 'Following RAB\'s research and laboratory work first-hand, then documenting each stage so evidence-based results reach the public accurately.' },
    { icon: <GrDocumentText />, label: 'Policy Advocacy', img: audience, desc: 'Championing evidence-based advocacy grounded in REMA\'s biosafety conditions and RICA\'s inspection and certification standards.' },
  ];

  const partners = [
    { src: rab, alt: 'RAB', url: 'https://www.rab.gov.rw/' },
    { src: ofab, alt: 'OFAB', url: 'https://ofabrwanda.rw/' },
    { src: aatf, alt: 'AATF', url: 'https://www.aatf-africa.org/' },
    { src: rmc, alt: 'RMC', url: 'https://rmc.rw/' },
    { src: biocap, alt: 'La Benevolencija', url: 'https://www.labenevolencija.org/' },
  ];

  const faqs = [
    { q: 'What agricultural technologies does AfS Rwanda promote?', a: 'Disease-resistant cassava, drought-tolerant maize and other climate-smart crops developed with the Rwanda Agriculture Board (RAB).' },
    { q: 'How does AfS Rwanda support the National Biosafety Law?', a: 'We follow RAB\'s laboratory and confined field trial research within the conditions set by REMA, and document each stage against RICA\'s standards.' },
  ];

  /* Edit these labels and values to your real figures */
  const meters = [
    { label: 'Advocacy & Outreach Scale', value: 85 },
    { label: 'Research Documentation', value: 90 },
  ];

  const stats = [
    { n: '265+', t: 'Communicators Trained', d: 'Journalists, students, and agronomists equipped to communicate agricultural biotechnology to the public.' },
    { n: '50+', t: 'Technologies Transferred', d: 'Promoting disease-resistant cassava and climate-smart crops to smallholders across provinces.' },
  ];

  return (
    <div className="home-container">

      {/* 1. HERO */}
      <section className="home-hero">
        <div className="home-hero__bg">
          {heroSlides.map((src, i) => (
            <img key={i} src={src} alt={i === 0 ? 'Alliance for Science Rwanda background' : ''} className={i === heroSlide ? 'on' : ''} />
          ))}
        </div>
        <div className={`home-hero-container ${heroLoaded ? 'hero-loaded' : ''}`}>
          <h1 className="home-hero-title">Alliance for Science Rwanda</h1>
          <p className="home-hero-subtitle">
            Advancing agricultural biotechnology through science communication, research documentation,
            evidence-based advocacy, and responsible stewardship empowering smallholders, strengthening biosafety,
            and connecting scientific innovation with sustainable food security across Rwanda.
          </p>
          <div className="home-cta-group">
            <Link to="/about" className="home-btn home-btn-primary">Discover More <ArrowUpRight size={16} /></Link>
            <Link to="/activities" className="home-btn home-btn-outline">Our Initiatives</Link>
          </div>
        </div>
        <div className="hero-arrows">
          <button type="button" onClick={() => goHero(-1)} aria-label="Previous slide"><ArrowLeft size={22} /></button>
          <button type="button" onClick={() => goHero(1)} aria-label="Next slide"><ArrowRight size={22} /></button>
        </div>
        <div className="home-hero__wave">
          <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
            <path d="M0,150C70,70 190,20 300,50C390,75 440,150 540,185C640,215 740,150 880,95C1020,40 1160,20 1290,40C1360,50 1410,66 1440,80L1440,221L0,221Z" fill="#F4F9FE" />
          </svg>
          <Bubble className="doodle-bubble" /><Sprig className="doodle-sprig" />
          <Stamp />
        </div>
      </section>

      {/* 2. PARTNERS STRIP */}
      <Section className="partners-strip" id="partners">
        <p className="strip-caption">Trusted Collaborators across Rwanda’s science, agriculture and media sectors</p>
        <div className="partner-grid">
          {partners.map((p, i) => (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="partner-card" key={i}>
              <img src={p.src} alt={p.alt} />
            </a>
          ))}
        </div>
      </Section>

      {/* 3. ABOUT */}
      <Section className="about-section">
        <Sprig className="doodle-sprig-2" />
        <div className="about-grid">
          <div className="about-photo" style={{ '--img': `url(${award})` }}><img src={award} alt="Alliance for Science Rwanda award event" loading="lazy" /></div>

          <div className="about-text">
            <span className="eyebrow-leaf"><FaLeaf /> About Our Organisation</span>
            <h2>Bringing evidence-based insights to agricultural science</h2>
            <p className="about-para">
              Alliance for Science Rwanda works alongside the Rwanda Agriculture Board (RAB), following biotech crops from laboratory research through confined field trials — experiencing first-hand how each new agricultural technology is developed and tested. From that direct research and field experience, we build public communication, advocacy, and documentation for every new release, grounded in the regulatory conditions set by REMA and the inspection and certification standards enforced by RICA.
            </p>
            <div className="meters">
              {meters.map((m, i) => (
                <div className="meter" key={i}>
                  <div className="meter-line"><div className="meter-fill" style={{ '--w': `${m.value}%` }} /></div>
                  <div className="meter-meta"><span>{m.label}</span><strong>{m.value}%</strong></div>
                </div>
              ))}
            </div>
            <div className="about-actions">
              <Link to="/activities" className="btn-solid">Explore Our Work <ArrowUpRight size={16} /></Link>
              <a href="tel:+250788667469" className="about-contact">
                <span className="round-icon"><FiPhoneCall /></span>
                <div><small>Phone:</small><strong>+250 788 667 469</strong></div>
              </a>
            </div>
          </div>

          <div className="about-photo" style={{ '--img': `url(${aboutimage})` }}><img src={aboutimage} alt="Participants at an Alliance for Science Rwanda event" loading="lazy" /></div>
        </div>
      </Section>

      {/* 4. INTERVENTION CARDS (slider) */}
      <Section className="cards-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Strategic Directions</span>
            <h2>Key impact pathways across Rwanda</h2>
          </div>
          <div className="slider-viewport">
            <div className="slider-track" style={{ transform: `translateX(calc(${slide} * (-50% - 14px)))` }}>
              {activities.slice(0, 3).map((act, i) => (
                <article className="pathway-card" key={i}>
                  <div className="pathway-img" style={{ backgroundImage: `url(${act.img})` }} />
                  <div className="pathway-body">
                    <span className="pill-tag">{act.label}</span>
                    <h3>{act.label} Initiatives</h3>
                    <p>{act.desc}</p>
                    <Link to="/activities" className="btn-solid small">Read More <FaChevronRight size={10} /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="dots">
            {[0, 1].map(i => (
              <button key={i} type="button" className={slide === i ? 'on' : ''} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </Section>

      {/* 5. MILESTONES */}
      <Section className="milestones-section">
        <div className="container">
          <div className="milestones-head">
            <div>
              <span className="eyebrow">Our Milestones</span>
              <h2>Paving transformation routes in <span className="accent-text">Rwanda</span></h2>
              <p className="desc">Empowering smallholder farmers, advocating for science-based biosafety policy, and bridging agricultural research with national food security goals through responsible stewardship.</p>
            </div>
            <div className="stat-pair">
              {stats.map((s, i) => (
                <div className="stat-box" key={i}>
                  <span className="stat-icon">{i === 0 ? <FiUsers /> : <FiAward />}</span>
                  <div><strong>{s.n}</strong><small>{s.t}</small></div>
                </div>
              ))}
            </div>
          </div>
          <div className="cards-grid-3">
            {[
              { tag: 'Experience', t: '10+ Years', p: 'Of Science Communication', img: heroBg },
              { tag: 'Network', t: 'OFAB Rwanda', p: 'Official Chapter Hub', img: media },
              { tag: 'Impact', t: 'Empowered', p: 'Agricultural Communication Desks', img: audience },
            ].map((m, i) => (
              <article className="mile-card" key={i}>
                <span className="pill-tag">{m.tag}</span>
                <h3>{m.t}</h3>
                <p>{m.p}</p>
                <div className="mile-img" style={{ '--img': `url(${m.img})` }}><img src={m.img} alt={m.t} loading="lazy" /></div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. FEATURE BANNER: full-width photo, torn top edge, card on the left */}
      <Section className="feature-banner">
        <img className="feature-bg" src={biocapImage} alt="Alliance for Science Rwanda team at a research and field event" loading="lazy" />
        <svg className="feature-torn" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 H1440 V40 L1440,40 L1435.2,45.2 L1420.8,24.8 L1404.3,31.8 L1378.4,28.2 L1364.0,43.4 L1339.4,28.3 L1314.7,61.2 L1298.1,25.6 L1291.7,39.1 L1286.4,48.5 L1266.9,54.5 L1251.1,41.7 L1237.2,28.2 L1213.2,30.8 L1203.4,30.4 L1192.2,26.6 L1178.0,36.3 L1171.0,41.9 L1155.2,29.7 L1146.8,40.2 L1121.5,38.0 L1113.2,47.0 L1103.8,22.6 L1089.5,37.9 L1080.2,48.9 L1064.2,43.1 L1048.0,22.3 L1032.4,25.8 L1026.8,50.0 L1016.6,61.7 L1000.7,24.2 L992.7,21.1 L983.9,38.0 L976.2,47.6 L952.3,64.6 L940.5,43.0 L930.2,20.4 L916.1,24.6 L910.6,38.2 L895.7,23.4 L873.7,29.9 L847.9,56.3 L834.5,20.8 L816.2,48.4 L795.4,19.3 L776.9,48.7 L754.3,44.7 L742.2,50.8 L716.4,42.3 L707.4,20.9 L687.0,29.2 L666.5,20.7 L644.9,44.9 L628.6,27.0 L615.9,22.3 L597.4,21.4 L589.3,18.7 L573.4,42.7 L552.7,40.4 L537.9,20.1 L522.9,49.4 L510.0,55.1 L493.8,59.2 L485.4,47.4 L470.3,41.6 L445.3,25.6 L427.3,22.3 L410.4,26.1 L399.5,47.6 L389.6,29.5 L379.7,45.6 L366.0,48.1 L342.5,25.7 L327.0,26.4 L319.3,36.8 L301.5,18.8 L282.5,40.0 L263.9,31.2 L244.2,48.2 L228.8,40.8 L222.2,41.9 L210.0,24.8 L184.4,46.2 L169.0,30.9 L149.3,40.2 L124.9,46.9 L109.5,24.1 L96.7,23.9 L77.4,24.0 L63.6,24.2 L38.1,23.9 L28.4,20.4 L11.8,41.9 L6.0,41.0 L0,49.3 Z" fill="#F4F9FE" />
        </svg>
        <div className="feature-inner">
          <div className="feature-card">
            <span className="feature-eyebrow"><FaLeaf /> Real-World Impact</span>
            <h2>Strengthening Rwanda’s Agricultural Future</h2>
            <p className="feature-desc">From RAB's labs and field trials to REMA-approved releases and RICA-certified inputs, delivering science-backed, evidence-based outcomes.</p>
            <ul className="feature-list">
              <li><Check size={18} strokeWidth={2.5} /><div><strong>Biosafety &amp; REMA Compliance</strong><span>Following RAB's laboratory and confined field trial research within the risk-assessment and environmental-release conditions set by REMA, in support of Rwanda's Biosafety Law.</span></div></li>
              <li><Check size={18} strokeWidth={2.5} /><div><strong>Documentation &amp; RICA Standards</strong><span>Documenting each stage of research against RICA's seed and agro-input inspection and certification standards, then training journalists and communities to share it responsibly.</span></div></li>
            </ul>
            <Link to="/about" className="feature-btn">Discover our research partnerships <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </Section>
      {/* 7. GALLERY (photo strip) */}
      <Section className="gallery-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Inside Our Mission</span>
            <h2>Fostering open, evidence-based dialogue between scientists and citizens</h2>
            <p className="gallery-sub">Alliance for Science: empowering smallholder farmers with science communication and responsible stewardship to build resilient, sustainable food systems.</p>
          </div>
          <div className="gal-viewport">
            <div className="gal-track" key={galIdx}>
              {galItems.map((g, i) => (
                <figure className="gal-item" key={i}>
                  <img src={g.src} alt={g.alt} loading="lazy" />
                  {g.play && <span className="g-play" aria-hidden="true"><FaPlay /></span>}
                </figure>
              ))}
            </div>
          </div>
          <div className="dots">
            {galleryImgs.map((_, i) => (
              <button key={i} type="button" className={galIdx === i ? 'on' : ''} onClick={() => setGalIdx(i)} aria-label={`Show photo ${i + 1}`} />
            ))}
          </div>
        </div>
      </Section>

      {/* 8. ACTIVITIES (dark band, white cards) */}
      <Section className="activities-section" id="activities">
        <div className="container">
          <div className="activities-panel">
            <div className="section-head light">
              <span className="eyebrow light">What We Do</span>
              <h2>Explore Our Main Activities</h2>
            </div>
            <div className="activities-grid">
              {activities.map((act, i) => (
                <article className="activity-card" key={i}>
                  <div className="activity-icon"><FaQuoteLeft /></div>
                  <h3>{act.label}</h3>
                  <p>{act.desc}</p>
                  <div className="activity-author">
                    <img src={act.img} alt="" loading="lazy" />
                    <div>
                      <small>{act.label}</small>
                      <strong>AfS Rwanda</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 9. FAQ + CONTACT INFO */}
      <Section className="faq-section" id="faq">
        <div className="container faq-grid">
          <div className="faq-info">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2>Answers to agricultural research questions</h2>
            <p className="desc">Have questions regarding agricultural biotechnology or biosafety?</p>
            <div className="info-card"><span className="round-icon"><FiMail /></span><div><small>Email us</small><strong>n.agape@afs-rwanda.org</strong></div></div>
            <div className="info-card"><span className="round-icon"><FiMapPin /></span><div><small>Our location</small><strong>Kigali, Rwanda</strong></div></div>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
                <button type="button" className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  <span>{i + 1}. {f.q}</span>{openFaq === i ? <FiMinus /> : <FiPlus />}
                </button>
                {openFaq === i && <p className="faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 10. EVENTS (blog-style cards) */}
      <Section className="events-section" id="events">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Upcoming Gatherings</span>
            <h2>Explore our latest events updates and timeline sessions</h2>
          </div>
          <div className="cards-grid-3">
            {realEvents.map((ev, i) => (
              <article className="event-card" key={i}>
                <div className="event-img" style={{ backgroundImage: `url(${ev.img})` }}>
                  <span className="event-date"><strong>{ev.month}</strong> {ev.year}</span>
                </div>
                <div className="event-body">
                  <div className="event-loc"><FiMapPin /><span>{ev.location}</span><em>{ev.category}</em></div>
                  <h3>{ev.title}</h3>
                  <Link to="/news" className="text-link">More Details <ArrowRight size={14} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* 11. CONTACT CTA */}
      <Section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-panel">
            <div className="cta-bg" aria-hidden="true">
              <Wheat className="doodle-wheat" />
            </div>
            <Sprig className="doodle-sprig-cta" />

            <div className="cta-content">
              <span className="cta-eyebrow"><FaLeaf /> Contact Us</span>
              <h2>Get in touch with our team for more information</h2>
              <form className="cta-form" onSubmit={handleContactSubmit}>
                <input type="hidden" name="_subject" value="New message from the AfS Rwanda website" />
                <input type="hidden" name="_template" value="table" />
                <div className="form-row">
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
                <textarea name="message" placeholder="Write Message..." rows="2" required />
                <button type="submit" className="cta-btn" disabled={contactSending}>
                  {contactSending ? 'Sending...' : 'Contact Us Today'} <ArrowUpRight size={16} />
                </button>
                <p role="status" aria-live="polite" className="form-status">{contactStatus}</p>
              </form>
            </div>

            <img className="cta-person" src={contactPerson} alt="Speaker at an Alliance for Science Rwanda session" loading="lazy" />
          </div>
        </div>
      </Section>

      <button type="button" className={`to-top ${showTop ? 'show' : ''}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUp size={22} />
      </button>
    </div>
  );
}

export default Home;