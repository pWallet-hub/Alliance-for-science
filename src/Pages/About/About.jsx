import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import audience from '../../assets/image/Audience.jpg';
import aboutBg from '../../assets/image/about-bg.jpg';
import whyBg from '../../assets/image/bd-image.jpg';
import storySmall from '../../assets/image/afs-image.jpg';
import heroBg from '../../assets/image/alliance-image-bg.jpg';
import annual from '../../assets/image/annual-review.jpg';
import media from '../../assets/image/media-award.jpg';
import contactPerson from '../../assets/image/pacifique-ask-image.jpg';
import ofab from '../../assets/image/OFAB-logo-removebg-preview.png';
import rab from '../../assets/image/Rab.png';
import aatf from '../../assets/image/AATF.jpg';
import rmc from '../../assets/image/rmc.jpg';
import biocap from '../../assets/image/labrevolencia.png';
import { GiPublicSpeaker } from "react-icons/gi";
import { MdOutlineTrackChanges, MdOutlineScience } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineCampaign, MdOutlineHub } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
import { Sparkles, ArrowUpRight, Target, Check, Users, Award, MapPin, BookOpen, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

/* Line-art leaf (bottom-left of the hero) */
function LeafDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 200" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M58 196C18 150 12 70 58 6C104 70 98 150 58 196Z" />
      <path d="M58 196V28" />
      <path d="M58 70C44 62 34 52 28 40M58 100C42 92 30 80 24 66M58 130C44 122 32 110 28 96M58 70C72 62 82 52 88 40M58 100C74 92 86 80 92 66M58 130C72 122 84 110 88 96" />
      <path d="M62 196C92 176 108 156 118 138C102 172 86 190 62 196Z" />
    </svg>
  );
}

/* Line-art olive sprig (bottom-right of the hero) */
function SprigDoodle({ className = '' }) {
  const leaf = (x, y, r) => (
    <ellipse cx={x} cy={y} rx="15" ry="6" transform={`rotate(${r} ${x} ${y})`} />
  );
  return (
    <svg className={className} viewBox="0 0 200 110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <path d="M8 98C60 92 120 66 188 14" />
      {leaf(32, 82, -35)}{leaf(48, 100, 20)}
      {leaf(70, 74, -40)}{leaf(84, 90, 15)}
      {leaf(108, 62, -45)}{leaf(120, 78, 10)}
      {leaf(146, 46, -50)}{leaf(156, 62, 5)}
      {leaf(176, 24, -55)}
    </svg>
  );
}

/* Round rubber-stamp badge (like the "Natural 100%" seal) */
function SealBadge({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <path id="sealTop" d="M30 100A70 70 0 0 1 170 100" />
        <path id="sealBottom" d="M30 100A70 70 0 0 0 170 100" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="var(--g-primary)" />
      <circle cx="100" cy="100" r="86" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="3 5" />
      <text fontSize="17" fontWeight="800" fill="#fff" letterSpacing="3"><textPath href="#sealTop" startOffset="50%" textAnchor="middle">EVIDENCE-BASED</textPath></text>
      <text x="100" y="112" textAnchor="middle" fontSize="38" fontWeight="800" fill="#fff" letterSpacing="1">100%</text>
      <text fontSize="17" fontWeight="800" fill="#fff" letterSpacing="3"><textPath href="#sealBottom" startOffset="50%" textAnchor="middle" dominantBaseline="hanging">SCIENCE</textPath></text>
    </svg>
  );
}

/* Section wrapper: fades in once when scrolled into view */
function Reveal({ className = '', id, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <section ref={ref} id={id} className={`about-reveal ${className} ${visible ? 'section-visible' : ''}`}>{children}</section>;
}

/* Small award card reused in the intro and the "why" sections */
function AwardCard({ className = '' }) {
  return (
    <div className={`about-award ${className}`}>
      <div className='about-award-head'>
        <span className='about-award-icon'><Star size={20} /></span>
        <strong>We’re an award winning organisation</strong>
      </div>
      <p>Recognised for science communication that turns research into public trust.</p>
    </div>
  );
}

function About() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  const goals = [
    {
      num: '01',
      label: 'Community',
      icon: <HiOutlineUserGroup />,
      colorClass: 'goal-theme--navy',
      title: 'Build Communities',
      text: 'Empower farming communities by bridging the gap between innovative technology developers, farmers, and local government units.',
      position: 'top',
    },
    {
      num: '02',
      label: 'Advocacy',
      icon: <MdOutlineCampaign />,
      colorClass: 'goal-theme--blue',
      title: 'Drive Advocacy',
      text: 'Engage key stakeholders including local government through strategic information sharing and high-impact roundtable discussions.',
      position: 'bottom',
    },
    {
      num: '03',
      label: 'Network',
      icon: <MdOutlineHub />,
      colorClass: 'goal-theme--sky',
      title: 'Grow the Network',
      text: 'Establish a national consortium of agricultural technology practitioners and food security enthusiasts across Rwanda.',
      position: 'top',
    },
  ];

  const partners = [
    { src: rab, alt: 'RAB', url: 'https://www.rab.gov.rw/' },
    { src: ofab, alt: 'OFAB', url: 'https://ofabrwanda.rw/' },
    { src: aatf, alt: 'AATF', url: 'https://www.aatf-africa.org/' },
    { src: rmc, alt: 'RMC', url: 'https://rmc.rw/' },
    { src: biocap, alt: 'La Benevolencija', url: 'https://www.labenevolencija.org/' },
  ];

  const meters = [
    { label: 'Advocacy & Outreach Scale', value: 85 },
    { label: 'Research Documentation', value: 90 },
  ];

  const galleryImgs = [
    { src: audience, alt: 'Audience at an Alliance for Science Rwanda session' },
    { src: storySmall, alt: 'Alliance for Science Rwanda event' },
    { src: heroBg, alt: 'Field and research work' },
    { src: whyBg, alt: 'Alliance for Science Rwanda team' },
  ];

  const stats = [
    { icon: <Users size={28} />, n: '265+', t: 'Communicators Trained' },
    { icon: <Award size={28} />, n: '50+', t: 'Technologies Transferred' },
    { icon: <BookOpen size={28} />, n: '10+', t: 'Years of Science Communication' },
    { icon: <MapPin size={28} />, n: '5', t: 'Trusted Partner Organisations' },
  ];

  const testimonials = [
    { quote: '“I would recommend this alliance to everyone! Their team is great to work with and the science they share is clear and trustworthy.”', name: 'Full Name', role: 'Smallholder Farmer', img: media },
    { quote: '“The workshops helped our newsroom report on agricultural biotechnology with confidence, accuracy and care for our readers.”', name: 'Full Name', role: 'Agricultural Journalist', img: audience },
    { quote: '“Working with Alliance for Science Rwanda connected our research directly with the communities it is meant to serve.”', name: 'Full Name', role: 'Research Partner', img: annual },
  ];
  const t = testimonials[tIdx];
  const goT = (d) => setTIdx(i => (i + d + testimonials.length) % testimonials.length);

  const news = [
    { img: media, month: 'OCT', year: '2021', cat: 'National Launch', title: 'OFAB Rwanda Chapter Launch & Science Media Desk' },
    { img: annual, month: 'FEB', year: '2023', cat: 'Capacity Building', title: 'Media Engagement & Biosafety Awareness Workshop' },
  ];

  const strip = [audience, storySmall, heroBg, whyBg, annual, media];

  return (
    <div className='about-root'>

      {/* ── HERO SECTION ── */}
      <section className='about-hero'>
        <div className='about-hero__bg'>
          <img src={aboutBg} alt="Alliance for Science Rwanda background" />
        </div>

        <LeafDoodle className='about-doodle about-doodle--left' />
        <SprigDoodle className='about-doodle about-doodle--right' />

        <div className={`about-hero-container ${heroLoaded ? 'hero-loaded' : ''}`}>
          <h1 className='about-hero-title'>
            <em>About</em> <span>Us</span>
          </h1>

          <div className='about-hero-pill'>
            <Sparkles size={13} className='about-hero-pill-icon' />
            <span>ALLIANCE FOR SCIENCE RWANDA</span>
          </div>

          <p className='about-hero-subtitle'>
            Advancing agricultural biotechnology, food security, and climate-resilient farming
            solutions through education, advocacy, and collaborative partnerships across Rwanda.
          </p>
        </div>
      </section>

      {/* ── 1. INTRO: photo with seal + award card, text, two features ── */}
      <Reveal className='about-intro'>
        <div className='about-intro-media'>
          <div className='about-intro-photo'>
            <img src={audience} alt="Audience engagement" loading="lazy" />
          </div>
          <SealBadge className='about-seal' />
          <AwardCard className='about-award--intro' />
        </div>

        <div className='about-intro-text'>
          <span className='about-eyebrow-leaf'><FaLeaf /> Who We Are</span>
          <h2 className='about-section-heading'>
            Pioneering Sustainable <span className='accent-text'>Agriculture</span>
          </h2>
          <p className='about-story-description'>
            Alliance for Science Rwanda has been incorporated as a social enterprise with a mission
            to seek food security and sustainability through education and advocacy of innovative farming
            technologies in Rwanda, actively mitigating the adverse effects of climate change, pests, and diseases.
          </p>

          <div className='about-intro-features'>
            <div className='about-feature'>
              <span className='about-feature-icon'><MdOutlineScience /></span>
              <h3>Research Documentation</h3>
              <p>We follow research from the laboratory to the field and document every stage accurately.</p>
            </div>
            <div className='about-feature'>
              <span className='about-feature-icon'><MdOutlineCampaign /></span>
              <h3>Science Communication</h3>
              <p>We turn complex findings into clear public information that communities can trust.</p>
            </div>
          </div>

          <Link to="/activities" className='about-primary-btn'>Explore Our Initiatives <ArrowUpRight size={16} /></Link>
        </div>
      </Reveal>

      {/* ── 2. PARTNERS ── */}
      <Reveal className='about-partners'>
        <p className='about-partners-caption'>Trusted Collaborators across Rwanda’s science, agriculture and media sectors</p>
        <div className='about-partner-row'>
          {partners.map((p, i) => (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className='about-partner' key={i}>
              <img src={p.src} alt={p.alt} />
            </a>
          ))}
        </div>
      </Reveal>

      {/* ── 3. WHY CHOOSE US: round photos, text + meters, person cut-out ── */}
      <Reveal className='about-why'>
        <div className='about-why-grid'>
          <div className='about-why-photos'>
            <div className='about-why-big'><img src={storySmall} alt="Alliance for Science Rwanda field work" loading="lazy" /></div>
            <div className='about-why-small'><img src={heroBg} alt="Research field" loading="lazy" /></div>
            <div className='about-why-badge'>
              <span>Field<br />Trials</span>
            </div>
          </div>

          <div className='about-why-text'>
            <span className='about-eyebrow-leaf'><FaLeaf /> Why Choose Us</span>
            <h2 className='about-section-heading'>Science You Can Trust, <span className='accent-text'>Impact You Can See</span></h2>
            <p className='about-story-description'>
              We follow agricultural research from the laboratory to the field, then share the evidence openly so that communities, media and decision-makers can act with confidence.
            </p>
            <ul className='about-check-list'>
              <li><Check size={18} strokeWidth={2.5} /><span>Biosafety conditions set by REMA are respected at every stage.</span></li>
              <li><Check size={18} strokeWidth={2.5} /><span>Documentation follows RICA inspection and certification standards.</span></li>
            </ul>
            <div className='about-meters'>
              {meters.map((m, i) => (
                <div key={i}>
                  <div className='about-meter-meta'><span>{m.label}</span><strong>{m.value}%</strong></div>
                  <div className='about-meter-line'><div className='about-meter-fill' style={{ '--w': `${m.value}%` }} /></div>
                </div>
              ))}
            </div>
            <Link to="/contact" className='about-primary-btn'>Contact Us <ArrowUpRight size={16} /></Link>
          </div>

          <div className='about-why-person'>
            <AwardCard className='about-award--why' />
            <img src={contactPerson} alt="Alliance for Science Rwanda speaker" loading="lazy" />
          </div>
        </div>
      </Reveal>

      {/* ── MISSION & VISION ── */}
      <Reveal className='about-mv-section'>
        <div className='about-mv-container'>
          <div className='about-mv-header'>
            <span className='about-eyebrow-light'>Core Purpose</span>
            <h2 className='about-mv-title'>Our Mission &amp; Vision</h2>
            <p className='about-mv-subtitle'>
              Uniting farmers, scientists, media, businesses, and policymakers for a food-secure and sustainable future.
            </p>
          </div>

          <div className='about-mv-cards-grid'>
            {/* Mission Card */}
            <div className='about-mv-card'>
              <div className='about-mv-card-header'>
                <div className='about-mv-icon-box'>
                  <GiPublicSpeaker size={28} />
                </div>
                <span className='about-mv-tag'>Mission</span>
              </div>
              <h3 className='about-mv-card-heading'>Advocacy &amp; Education</h3>
              <p className='about-mv-card-text'>
                To foster collaboration among farmers, scientists, media, businesses, and policymakers to advance agricultural innovation,
                strengthen resilience, and promote sustainable development.
              </p>
            </div>

            {/* Vision Card */}
            <div className='about-mv-card'>
              <div className='about-mv-card-header'>
                <div className='about-mv-icon-box'>
                  <MdOutlineTrackChanges size={28} />
                </div>
                <span className='about-mv-tag'>Vision</span>
              </div>
              <h3 className='about-mv-card-heading'>Agricultural Transformation</h3>
              <p className='about-mv-card-text'>
                A thriving and resilient agricultural sector where farmers achieve improved incomes through biotechnology and climate-smart agriculture, overcoming challenges such as drought, pests, and diseases while meeting evolving market demands.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── 4. GALLERY ── */}
      <Reveal className='about-gallery'>
        <LeafDoodle className='about-gal-doodle about-gal-doodle--left' />
        <SprigDoodle className='about-gal-doodle about-gal-doodle--right' />
        <div className='about-sec-head'>
          <span className='about-eyebrow-leaf about-eyebrow-leaf--center'><FaLeaf /> Our Gallery</span>
          <h2 className='about-section-heading'>Gallery of Our <span className='accent-text'>Work</span></h2>
          <p className='about-sec-sub'>Moments from our workshops, field visits and public sessions where science farmers and media come together.</p>
        </div>
        <div className='about-gallery-row'>
          {galleryImgs.map((g, i) => (
            <figure className='about-gallery-item' key={i}><img src={g.src} alt={g.alt} loading="lazy" /></figure>
          ))}
        </div>
      </Reveal>

      {/* ── 5. STATS (dashed box) ── */}
      <Reveal className='about-stats-section'>
        <div className='about-stats-box'>
          {stats.map((s, i) => (
            <div className='about-stat' key={i}>
              <span className='about-stat-icon'>{s.icon}</span>
              <div>
                <strong>{s.n}</strong>
                <small>{s.t}</small>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ── GOALS & TIMELINE ── */}
      <Reveal className='about-goals-section'>
        <div className='about-goals-container'>
          <div className='about-goals-header'>
            <div>
              <span className='about-eyebrow'>Strategic Roadmap</span>
              <h2 className='about-section-heading'>Our Key <span className='accent-text'>Goals</span></h2>
            </div>
            <span className='about-badge-pill'>3 Objectives</span>
          </div>

          {/* Interactive Timeline Track */}
          <div className='goals-timeline-track'>
            {goals.map((g, i) => (
              <div key={i} className={`goal-timeline-item ${g.colorClass}`}>

                {/* Connector Line */}
                {i > 0 && <div className='goal-line-connector' />}

                {/* Top Content Box */}
                {g.position === 'top' && (
                  <div className='goal-card-box goal-card-box--top'>
                    <span className='goal-card-title'>{g.title}</span>
                    <p className='goal-card-text'>{g.text}</p>
                    <div className='goal-card-arrow arrow--down' />
                  </div>
                )}

                {/* Axis Node */}
                <div className='goal-node-axis'>
                  <span className='goal-step-label'>Step {g.num}</span>
                  <div className='goal-node-circle'>
                    <span className='goal-node-icon'>{g.icon}</span>
                  </div>
                  <span className='goal-node-tag'>{g.label}</span>
                </div>

                {/* Bottom Content Box */}
                {g.position === 'bottom' && (
                  <div className='goal-card-box goal-card-box--bottom'>
                    <div className='goal-card-arrow arrow--up' />
                    <span className='goal-card-title'>{g.title}</span>
                    <p className='goal-card-text'>{g.text}</p>
                  </div>
                )}

              </div>
            ))}

            {/* Target Node */}
            <div className='goal-timeline-item goal-target-item'>
              <div className='goal-line-connector' />
              <div className='goal-target-circle'>
                <div className='goal-target-ring'>
                  <Target size={22} className='target-icon' />
                </div>
              </div>
              <span className='goal-node-tag target-tag'>Target</span>
            </div>

          </div>
        </div>
      </Reveal>

      {/* ── 6. TESTIMONIAL ── */}
      <Reveal className='about-testi'>
        <div className='about-testi-wrap'>
          <button type='button' className='about-testi-arrow' onClick={() => goT(-1)} aria-label='Previous testimonial'><ChevronLeft size={18} /></button>
          <div className='about-testi-card'>
            <div className='about-testi-photo'><img src={t.img} alt={t.role} /></div>
            <div className='about-testi-body'>
              <span className='about-eyebrow-leaf'><FaLeaf /> Our Testimonials</span>
              <blockquote>{t.quote}</blockquote>
              <div className='about-testi-author'>
                <span className='about-testi-avatar'>{t.name.charAt(0)}</span>
                <div><small>{t.role}</small><strong>{t.name}</strong></div>
                <span className='about-testi-quote'><Quote size={22} /></span>
              </div>
            </div>
          </div>
          <button type='button' className='about-testi-arrow' onClick={() => goT(1)} aria-label='Next testimonial'><ChevronRight size={18} /></button>
        </div>
      </Reveal>

      {/* ── 7. LATEST NEWS ── */}
      <Reveal className='about-news'>
        <div className='about-news-head'>
          <div>
            <span className='about-eyebrow-leaf'><FaLeaf /> Our Blog &amp; News</span>
            <h2 className='about-section-heading'>View Our Latest News <br />and <span className='accent-text'>Articles</span></h2>
          </div>
          <Link to="/news" className='about-primary-btn'>View All News <ArrowUpRight size={16} /></Link>
        </div>
        <div className='about-news-grid'>
          {news.map((n, i) => (
            <article className='about-news-card' key={i}>
              <div className='about-news-img'>
                <img src={n.img} alt={n.title} loading="lazy" />
                <span className='about-news-date'><strong>{n.month}</strong>{n.year}</span>
              </div>
              <div className='about-news-meta'><span>{n.cat}</span></div>
              <h3>{n.title}</h3>
              <Link to="/news" className='about-news-link'>More Details <ArrowUpRight size={14} /></Link>
            </article>
          ))}
        </div>
      </Reveal>

      {/* ── 8. CALL TO ACTION BANNER ── */}
      <Reveal className='about-banner-section'>
        <div className='about-banner'>
          <img
            src={heroBg}
            alt="Alliance for Science Rwanda cohort holding certificates"
            className='about-banner-bg'
            loading="lazy"
          />
          <div className='about-banner-overlay' />
          <div className='about-banner-content'>
            <span className='about-banner-icon'><FaLeaf /></span>
            <div>
              <span className='about-eyebrow-light'>Get Started Now</span>
              <h2>Join Us in Advancing <br />Science for Rwanda</h2>
            </div>
          </div>
          <Link to="/contact" className='about-banner-btn'>Contact Today <ArrowUpRight size={14} /></Link>
        </div>
      </Reveal>

      {/* ── 9. PHOTO STRIP ── */}
      <Reveal className='about-strip'>
        {strip.map((src, i) => (
          <figure key={i}><img src={src} alt="" loading="lazy" /></figure>
        ))}
      </Reveal>

    </div>
  );
}

export default About;