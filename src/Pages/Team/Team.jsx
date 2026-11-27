import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

// Team profile images
import image1 from '../../assets/image/pacific.jpg';
import image2 from '../../assets/image/DGT_7871 copy.jpg';
import image3 from '../../assets/image/DSC_1823.jpg';
import rugangazi from '../../assets/image/rugangazi.jpg';

// Hero / banner / strip images
import aboutBg from '../../assets/image/about-bg.jpg';
import heroBg from '../../assets/image/alliance-image-bg.jpg';
import audience from '../../assets/image/Audience.jpg';
import award from '../../assets/image/afs-image.jpg';
import whyBg from '../../assets/image/bd-image.jpg';
import annual from '../../assets/image/annual-review.jpg';
import media from '../../assets/image/media-award.jpg';

// Icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegClock, FaGraduationCap } from 'react-icons/fa';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaShareNodes, FaLeaf } from 'react-icons/fa6';
import { ArrowUpRight, ArrowRight, ArrowLeft, Send, Sparkles } from 'lucide-react';

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

/* Social icons shown on hover (list) and in the profile (detail). Replace the # links with real profiles. */
function Socials({ className = '' }) {
  return (
    <div className={`team-socials ${className}`}>
      <a href="#" aria-label="Facebook"><FaFacebookF /></a>
      <a href="#" aria-label="X"><FaXTwitter /></a>
      <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
      <a href="#" aria-label="Instagram"><FaInstagram /></a>
    </div>
  );
}

const PER_PAGE = 4;

function Team() {
  const [activeIdx, setActiveIdx] = useState(null);   // null = team list, number = detail view
  const [page, setPage] = useState(1);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => { setHeroLoaded(true); }, []);

  const teamData = [
    {
      name: "Pacifique Nshimiyimana",
      role: "Country Director",
      tag: "Leadership",
      avatar: image1,
      phone: "+250 788 123 456",
      email: "pacifique@scienceally.org",
      location: "Kigali, Rwanda",
      skills: [
        { label: "Leadership & Strategy", value: "95%" },
        { label: "Science Communication", value: "90%" },
        { label: "Project Innovation", value: "92%" }
      ],
      hours: { monFri: "09:00 AM - 05:00 PM", sat: "09:00 AM - 01:00 PM" },
      heroBio: "Leading strategic direction, biotechnology advocacy, and high-impact science communications across regional research hubs in Rwanda.",
      aboutMe: "Pacifique Nshimiyimana serves as Executive Director at Alliance for Science Rwanda, spearheading national strategic leadership, biotechnology advocacy, and biosafety communication. Driven by a commitment to evidence-based agricultural transformation, he bridges the gap between international research hubs, regional policymakers, and local farming communities to foster sustainable food systems across Rwanda.",
      stats: { impact: "10+ Years", projects: "50+ Delivered", expertise: "Core Leader" },
      highlightsParagraph: "Pacifique provides overarching strategic leadership across agricultural technology advocacy and biosafety communication initiatives in Rwanda. By establishing key collaborations with international research institutions and regional policy desks, he translates complex genomic and agricultural data into accessible public policy frameworks that empower local farming ecosystems.",
      education: [
        { year: "2015", certificate: "Ph.D. In Computational Biology", institution: "Massachusetts Institute of Technology (MIT), USA" },
        { year: "2011", certificate: "B.Sc. In Molecular Biology", institution: "Massachusetts Institute of Technology (MIT), USA" }
      ]
    },
    {
      name: "Gisele Ndizeye",
      role: "Communication Officer",
      tag: "Communications",
      avatar: image2,
      phone: "+250 788 654 321",
      email: "gisele@scienceally.org",
      location: "Kigali, Rwanda",
      skills: [
        { label: "Brand Management", value: "94%" },
        { label: "Public Relations", value: "88%" },
        { label: "Digital Strategy", value: "91%" }
      ],
      hours: { monFri: "09:00 AM - 05:00 PM", sat: "10:00 AM - 02:00 PM" },
      heroBio: "Directing public relations, media engagement workshops, and strategic messaging for agricultural innovation.",
      aboutMe: "Gisele Ndizeye leads the communications division at Alliance for Science Rwanda, specializing in high-impact media strategies and regional public relations. She translates complex agricultural research and biotechnology breakthroughs into clear, engaging public narratives that foster informed dialogue across media outlets, academic circles, and rural agricultural networks.",
      stats: { impact: "6+ Years", projects: "35+ Campaigns", expertise: "PR Specialist" },
      highlightsParagraph: "Gisele oversees media engagement and digital storytelling pipelines across multi-channel platforms. She organizes regional training desks that equip local journalists with the tools to communicate biotechnology accurately, while maintaining strategic public relations alignments across institutional research partners and community advocacy networks.",
      education: [
        { year: "2018", certificate: "M.A. In Strategic Communications", institution: "University of Rwanda" },
        { year: "2015", certificate: "B.A. In Journalism & Mass Media", institution: "University of Rwanda" }
      ]
    },
    {
      name: "Agape Nduwamungu",
      role: "Administration Officer",
      tag: "Technology",
      avatar: image3,
      phone: "+250 788 999 888",
      email: "agape@scienceally.org",
      location: "Kigali, Rwanda",
      skills: [
        { label: "Fullstack Architecture", value: "93%" },
        { label: "Cloud Infrastructure", value: "89%" },
        { label: "Network Security", value: "95%" }
      ],
      hours: { monFri: "09:00 AM - 05:00 PM", sat: "Closed" },
      heroBio: "Architecting cloud systems, maintaining bioinformatics data pipelines, and ensuring zero-downtime IT platforms.",
      aboutMe: "Agape Nduwamungu manages computational infrastructure and IT services at Alliance for Science Rwanda. He is responsible for building secure, scalable cloud systems and data platforms that host agricultural research databases, digital media archives, and internal communication tools.",
      stats: { impact: "5+ Years", projects: "40+ Deployments", expertise: "SysOps Specialist" },
      highlightsParagraph: "Agape engineers zero-downtime server architectures and automated data pipelines that support the organization's digital reach. From managing internal network security protocols to deploying scalable web applications for science outreach, his technical solutions ensure seamless digital operations.",
      education: [
        { year: "2019", certificate: "B.Sc. In Computer Engineering", institution: "Carnegie Mellon University Africa" },
        { year: "2016", certificate: "Advanced Diploma in Information Technology", institution: "IPRC Kigali" }
      ]
    },
    {
      name: "Felix Bikorimana",
      role: "Software Engineer",
      tag: "Technology",
      avatar: rugangazi,
      phone: "+250 780 941 222",
      email: "bikofelix2020@gmail.com",
      location: "Kigali, Rwanda",
      skills: [
        { label: "Python & Backend Systems", value: "94%" },
        { label: "Full Stack (React/Next.js)", value: "90%" },
        { label: "AI/ML Integration", value: "88%" }
      ],
      hours: { monFri: "09:00 AM - 05:00 PM", sat: "Closed" },
      heroBio: "Software Engineer building practical digital products across web, data, and AI. I develop full-stack applications, lead technical teams, and turn complex business challenges into reliable, user-friendly solutions that create real value for organizations and communities.",
      aboutMe: "Felix Bikorimana is a Full Stack Software Engineer specializing in Python backends, modern React/Next.js interfaces, and AI model integrations. At Alliance for Science Rwanda, he develops data dashboards and web applications that connect complex agricultural metrics to intuitive user interfaces.",
      stats: { impact: "3+ Years", projects: "6+ Delivered", expertise: "AI/ML Developer" },
      highlightsParagraph: "Felix develops web platforms that integrate machine learning models with interactive dashboards. Having built award-winning predictive tools for data analysis, he focuses on optimizing automated ETL pipelines and exposing RESTful APIs that streamline how scientific data is visualized and consumed.",
      education: [
        { year: "2021 – 2025", certificate: "B.Sc. In Computer Engineering", institution: "University of Rwanda" },
        { year: "2025", certificate: "NISR AI Hackathon Winner — NutriVision AI", institution: "National Institute of Statistics of Rwanda" }
      ]
    }
  ];

  const strip = [audience, award, heroBg, whyBg, annual, media];
  const totalPages = Math.ceil(teamData.length / PER_PAGE);
  const pageItems = teamData
    .map((m, i) => ({ ...m, idx: i }))
    .slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const open = (i) => { setActiveIdx(i); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const back = () => { setActiveIdx(null); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const current = activeIdx !== null ? teamData[activeIdx] : null;

  return (
    <div className="team-root">

      {/* ── HERO BANNER (identical to the About page hero) ── */}
      <section className="team-hero">
        <div className="team-hero__bg"><img src={aboutBg} alt="Alliance for Science Rwanda background" /></div>
        <LeafDoodle className="team-doodle team-doodle--left" />
        <SprigDoodle className="team-doodle team-doodle--right" />
        <div className={`team-hero-container ${heroLoaded ? 'hero-loaded' : ''}`}>
          <h1 className="team-hero-title">{current ? 'Team Details' : 'Our Team Member'}</h1>

          <div className="team-hero-pill">
            <Sparkles size={13} />
            <span>ALLIANCE FOR SCIENCE RWANDA</span>
          </div>

          <p className="team-hero-subtitle">
            {current
              ? current.heroBio
              : 'Meet the communicators, researchers and advocates connecting agricultural science with farmers, media and policymakers across Rwanda.'}
          </p>
        </div>
      </section>

      {/* ═════════ LIST VIEW ═════════ */}
      {!current && (
        <section className="team-list-section">
          <div className="team-grid">
            {pageItems.map((m) => (
              <article className="team-card" key={m.idx}>
                <div className="team-card-photo">
                  <button type="button" className="team-card-img" onClick={() => open(m.idx)} aria-label={`View ${m.name}`}>
                    <img src={m.avatar} alt={m.name} loading="lazy" />
                  </button>
                  <div className="team-share-wrap">
                    <Socials className="team-socials--pop" />
                    <span className="team-share" aria-hidden="true"><FaShareNodes /></span>
                  </div>
                </div>
                <div className="team-card-info">
                  <span className="team-card-role">{m.role}</span>
                  <h3><button type="button" onClick={() => open(m.idx)}>{m.name}</button></h3>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="team-pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} type="button" className={page === i + 1 ? 'is-active' : ''} onClick={() => setPage(i + 1)}>
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}
              <button type="button" onClick={() => setPage(p => (p % totalPages) + 1)} aria-label="Next page"><ArrowRight size={16} /></button>
            </div>
          )}
        </section>
      )}

      {/* ═════════ DETAIL VIEW ═════════ */}
      {current && (
        <section className="team-detail">
          <button type="button" className="team-back" onClick={back}><ArrowLeft size={16} /> Back to all team members</button>

          <div className="team-detail-top">
            <div className="team-detail-photo"><img src={current.avatar} alt={current.name} /></div>

            <div className="team-detail-info">
              <span className="team-detail-role">{current.role}</span>
              <h2 className="team-detail-name">{current.name}</h2>
              <p>{current.heroBio}</p>
              <p>{current.highlightsParagraph}</p>

              <div className="team-contact-grid">
                <div className="team-contact-item">
                  <span className="team-contact-icon"><FaPhoneAlt /></span>
                  <a href={`tel:${current.phone}`}>{current.phone}</a>
                </div>
                <div className="team-contact-item">
                  <span className="team-contact-icon"><FaEnvelope /></span>
                  <a href={`mailto:${current.email}`}>{current.email}</a>
                </div>
                <div className="team-contact-item">
                  <span className="team-contact-icon"><FaMapMarkerAlt /></span>
                  <span>{current.location}</span>
                </div>
                <div className="team-contact-item">
                  <span className="team-contact-icon"><FaShareNodes /></span>
                  <Socials />
                </div>
              </div>
            </div>
          </div>

          {/* About + Expertise */}
          <div className="team-about-row">
            <div>
              <h3 className="team-block-title">About Me</h3>
              <p className="team-about-text">{current.aboutMe}</p>
            </div>
            <div>
              <h3 className="team-block-title">Expertise Area</h3>
              <div className="team-skills">
                {current.skills.map((s, i) => (
                  <div className="team-skill" key={i}>
                    <div className="team-skill-rail"><div className="team-skill-fill" style={{ width: s.value }} /></div>
                    <div className="team-skill-labels"><span>{s.label}</span><strong>{s.value}</strong></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats + office hours */}
          <div className="team-facts">
            <div className="team-fact"><strong>{current.stats.impact}</strong><span>Experience</span></div>
            <div className="team-fact"><strong>{current.stats.projects}</strong><span>Key Projects</span></div>
            <div className="team-fact"><strong>{current.stats.expertise}</strong><span>Specialization</span></div>
            <div className="team-fact team-fact--hours">
              <FaRegClock />
              <div>
                <strong>Office Hours</strong>
                <span>Mon - Fri: {current.hours.monFri}</span>
                <span>Sat: {current.hours.sat}</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <h3 className="team-block-title team-block-title--spaced">Education &amp; Credentials</h3>
          <div className="team-edu-grid">
            {current.education.map((edu, i) => (
              <div className="team-edu-card" key={i}>
                <span className="team-edu-icon"><FaGraduationCap /></span>
                <div>
                  <span className="team-edu-year">{edu.year}</span>
                  <h4>{edu.certificate}</h4>
                  <p>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message form */}
          <h3 className="team-block-title team-block-title--spaced">Get In Touch with {current.name.split(' ')[0]}</h3>
          <form className="team-form" onSubmit={(e) => e.preventDefault()}>
            <div className="team-form-row">
              <input type="text" placeholder="First Name *" required />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="team-form-row">
              <input type="tel" placeholder="Phone Number" />
              <input type="email" placeholder="Email Address *" required />
            </div>
            <textarea placeholder="Write message..." rows={4} required />
            <button type="submit" className="team-btn">Send Message <Send size={15} /></button>
          </form>
        </section>
      )}

      {/* ── CTA BANNER + PHOTO STRIP ── */}
      <section className="team-bottom">
        <div className="team-banner">
          <img src={heroBg} alt="" className="team-banner-bg" loading="lazy" />
          <div className="team-banner-overlay" />
          <div className="team-banner-content">
            <span className="team-banner-icon"><FaEnvelope /></span>
            <div>
              <span className="team-banner-eyebrow"><FaLeaf /> Get Started Now</span>
              <h2>Join Us in Advancing <br />Science for Rwanda</h2>
            </div>
          </div>
          <Link to="/contact" className="team-banner-btn">Contact Today <ArrowUpRight size={14} /></Link>
        </div>

        <div className="team-strip">
          {strip.map((src, i) => (<figure key={i}><img src={src} alt="" loading="lazy" /></figure>))}
        </div>
      </section>

    </div>
  );
}

export default Team;