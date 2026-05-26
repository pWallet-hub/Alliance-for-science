import React, { useState } from 'react';
import './Team.css';

// Import all your asset profiles
import image1 from '../../assets/image/pacific.jpg'; // Pacifique Nshimiyimana
import image2 from '../../assets/image/DGT_7871 copy.jpg'; // Gisele Ndizeye
import image3 from '../../assets/image/DSC_1823.jpg'; // Agape Nduwamungu

// Component Icon Helpers
import { 
  FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, 
  FaPhoneAlt, FaMapMarkerAlt, FaRegClock, FaGraduationCap 
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Team() {
  // Local active index state pointer
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);

  // 3 Section Interactive Dataset
  const teamData = [
    {
      name: "Pacifique Nshimiyimana",
      role: "Executive Director",
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
      hours: { monFri: "08:00 AM - 05:00 PM", sat: "09:00 AM - 01:00 PM" },
      aboutMe: "Our team brings together expertise in leadership, communications, and technology — united by a shared passion for making science accessible and impactful for every community. We are a dedicated group of professionals committed to advancing science communication and innovation across Rwanda and beyond.",
      stats: { impact: "10+ Years", projects: "50+ Delivered", expertise: "Core Leader" },
      points: [
        "Solutions in genomic data analysis, AI-driven architectures",
        "Strategic development for international research frameworks",
        "Authored 40+ peer-reviewed papers in top-tier science publications",
        "Works with international universities and modern research labs"
      ],
      education: [
        { year: "Year: 2015", certificate: "Ph.D. In Computational Biology", institution: "Massachusetts Institute of Technology (MIT), USA" },
        { year: "Year: 2011", certificate: "B.Sc. In Molecular Biology & Computer Science", institution: "Massachusetts Institute of Technology (MIT), USA" }
      ],
      socials: {
        facebook: "https://www.facebook.com/pacifique.nshimiyimana/",
        twitter: "https://x.com/scienceally_rw?lang=en",
        linkedin: "https://www.linkedin.com/in/pacifique-nshimiyimana-69996581/?originalSubdomain=rw"
      }
    },
    {
      name: "Gisele Ndizeye",
      role: "Communication Manager",
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
      hours: { monFri: "09:00 AM - 06:00 PM", sat: "10:00 AM - 02:00 PM" },
      aboutMe: "Specializing in high-impact media strategies and regional outreach frameworks, Gisele manages the comprehensive internal and external public communication systems. She ensures that research paradigms are seamlessly translated into public advocacy milestones.",
      stats: { impact: "6+ Years", projects: "35+ Campaigns", expertise: "PR Master" },
      points: [
        "Optimizes target audience metrics for complex clinical data maps",
        "Leads digital engagement cross-functionally over media grids",
        "Coordinates major regional global communication networks",
        "Maintains multi-agency partnership alignments perfectly"
      ],
      education: [
        { year: "Year: 2018", certificate: "M.A. In Strategic Communications", institution: "University of Rwanda" },
        { year: "Year: 2015", certificate: "B.A. In Journalism & Mass Media", institution: "University of Rwanda" }
      ],
      socials: {
        facebook: "https://www.facebook.com/gisele.ndizeye/",
        twitter: "https://x.com/gisele_ndizeye?lang=en",
        linkedin: "https://www.linkedin.com/in/ndizeye-gisele-ba549a1a3/"
      }
    },
    {
      name: "Agape Nduwamungu",
      role: "IT Service Officer",
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
      hours: { monFri: "08:30 AM - 05:30 PM", sat: "Closed" },
      aboutMe: "Agape anchors the computational infrastructure, data center pipelines, and platform tooling solutions across Genlab. He ensures highly operational, zero-downtime server setups for intricate bio-informatics applications.",
      stats: { impact: "5+ Years", projects: "40+ Deployments", expertise: "SysOps Specialist" },
      points: [
        "Implements scalable Kubernetes cluster arrays for research storage",
        "Engineers rigorous end-to-end cloud platform architecture profiles",
        "Manages internal high-performance security defense assets",
        "Designs comprehensive automation algorithms for research suites"
      ],
      education: [
        { year: "Year: 2019", certificate: "B.Sc. In Computer Engineering", institution: "Carnegie Mellon University Africa" },
        { year: "Year: 2016", certificate: "Advanced Diploma in Information Technology", institution: "IPRC Kigali" }
      ],
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/agape-nduwamungu-bba7ba174/"
      }
    }
  ];

  const current = teamData[activeMemberIndex];

  return (
    <div className="team-page">
      {/* ── Hero Banner ── */}
      <div className='team-hero'>
        <div className='team-hero-content'>
          <span className="team-eyebrow">Expert Profile View</span>
          <h1>{current.name}</h1>
          <p className="team-breadcrumbs">Home / Our Team / {current.role}</p>
        </div>
      </div>

      {/* ── INTERACTIVE EXPERT TOGGLE BAR ── */}
      <div className="member-selection-tabs">
        {teamData.map((member, idx) => (
          <button 
            key={idx}
            className={`tab-btn ${idx === activeMemberIndex ? 'active' : ''}`}
            onClick={() => setActiveMemberIndex(idx)}
          >
            <span className="tab-dot"></span>
            <div className="tab-txt-wrapper">
              <strong>{member.name}</strong>
              <span>{member.role}</span>
            </div>
          </button>
        ))}
      </div>

      {/* ── Main Layout Wrapper ── */}
      <div className="profile-container">
        
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="profile-sidebar">
          {/* Main Profile Card */}
          <div className="sidebar-card profile-main-card">
            <div 
              className="sidebar-avatar" 
              style={{ backgroundImage: `url(${current.avatar})` }}
            />
            <div className="sidebar-card-body">
              <span className="sidebar-tag">{current.tag}</span>
              <h2>{current.name}</h2>
              <p className="sidebar-subtitle">{current.role}</p>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="sidebar-card">
            <h3 className="sidebar-card-title">Contact Info</h3>
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon"><FaPhoneAlt /></div>
                <div className="contact-details">
                  <span className="contact-label">Phone Number:</span>
                  <a href={`tel:${current.phone}`}>{current.phone}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div className="contact-details">
                  <span className="contact-label">E-mail Address:</span>
                  <a href={`mailto:${current.email}`}>{current.email}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div className="contact-details">
                  <span className="contact-label">Location:</span>
                  <span>{current.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Skill Card */}
          <div className="sidebar-card">
            <h3 className="sidebar-card-title">Expert Skill</h3>
            <div className="skills-list">
              {current.skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span>{skill.label}</span>
                    <span>{skill.value}</span>
                  </div>
                  <div className="skill-progress-bar">
                    <div className="skill-progress-fill" style={{ width: skill.value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opening Hours Card */}
          <div className="sidebar-card hours-card">
            <div className="hours-content">
              <div className="hours-header">
                <FaRegClock className="clock-icon" />
                <h3>Opening hours</h3>
              </div>
              <p className="hours-days">Monday - Friday: {current.hours.monFri}</p>
              <p className="hours-days">Saturday: {current.hours.sat}</p>
              <p className="hours-days closed">Sunday - Closed</p>
            </div>
            <a href={`tel:${current.phone}`} className="sidebar-phone-btn">
              <FaPhoneAlt /> Call Direct Office
            </a>
          </div>
        </aside>

        {/* ================= RIGHT MAIN CONTENT ================= */}
        <main className="profile-main-content">
          
          {/* About Section */}
          <section className="content-block">
            <h2 className="section-title">About <span className="highlight">me</span></h2>
            <p className="bio-text">{current.aboutMe}</p>
            
            {/* Stats Row */}
            <div className="stats-row">
              <div className="stat-box">
                <div className="stat-icon-wrapper"><FaRegClock /></div>
                <div className="stat-box-info">
                  <span className="stat-box-num">{current.stats.impact}</span>
                  <span className="stat-box-label">Impact Timeline</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-icon-wrapper"><FaRegClock /></div>
                <div className="stat-box-info">
                  <span className="stat-box-num">{current.stats.projects}</span>
                  <span className="stat-box-label">Project Scale</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-icon-wrapper"><FaRegClock /></div>
                <div className="stat-box-info">
                  <span className="stat-box-num">Active</span>
                  <span className="stat-box-label">{current.stats.expertise}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Key Points */}
          <section className="content-block">
            <h2 className="section-title">Key <span className="highlight">points</span></h2>
            <div className="key-points-grid">
              {current.points.map((pt, index) => (
                <div className="key-point-item" key={index}>
                  <span className="bullet-check">✓</span>
                  <p>{pt}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certificates Stack */}
          <section className="content-block">
            <h2 className="section-title">Education & <span className="highlight">certificate</span></h2>
            <p className="section-intro-desc">Verified academic achievements, research certifications, and honors records.</p>

            <div className="timeline-grid">
              {current.education.map((edu, index) => (
                <div className="timeline-card" key={index}>
                  <div className="timeline-info-side full-width-timeline">
                    <span className="timeline-year">{edu.year}</span>
                    <div className="timeline-title-row">
                      <div className="timeline-icon-box"><FaGraduationCap /></div>
                      <div>
                        <h3>{edu.certificate}</h3>
                        <p className="timeline-sub">{edu.institution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="content-block get-in-touch-block">
            <h2 className="section-title">Get in touch <span className="highlight">with {current.name.split(' ')[0]}</span></h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input type="text" placeholder="First Name*" required />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Phone Number" />
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="form-row">
                <textarea placeholder="Write Message..." rows="5" />
              </div>
              <button type="submit" className="form-submit-btn">Send Message</button>
            </form>
          </section>

        </main>
      </div>                              
    </div>
  );
}

export default Team;