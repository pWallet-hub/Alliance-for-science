import React, { useState } from 'react';
import './Team.css';

// Import asset profile images
import image1 from '../../assets/image/pacific.jpg';
import image2 from '../../assets/image/DGT_7871 copy.jpg';
import image3 from '../../assets/image/DSC_1823.jpg';
import rugangazi from '../../assets/image/rugangazi.jpg';

// Icons
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegClock, FaGraduationCap 
} from 'react-icons/fa';
import { Sparkles, CheckCircle2, Send } from 'lucide-react';

function Team() {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);

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

  const current = teamData[activeMemberIndex];

  return (
    <div className="team-root">

      {/* ── HERO BANNER (Dynamic Person-Specific Subtitle) ── */}
      <section className="team-hero">
        <div className="team-hero-container">
          <p className="team-breadcrumb">HOME &rsaquo; OUR TEAM</p>
          
          <div className="team-hero-pill">
            <Sparkles size={13} className="team-hero-pill-icon" />
            <span>EXPERT PROFILE &bull; {current.tag.toUpperCase()}</span>
          </div>

          <h1 className="team-hero-title">
            Meet <em>{current.name}</em>
          </h1>

          {/* Person-Specific Dynamic Subtitle Paragraph */}
          <p className="team-hero-subtitle">
            {current.heroBio}
          </p>
        </div>

        {/* Bottom Wave Divider */}
        <div className="team-hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,34.75V0Z"
              fill="#F4F9FE"
            />
          </svg>
        </div>
      </section>

      {/* ── MEMBER SELECTION TABS ── */}
      <div className="team-tabs-container">
        <div className="team-tabs-grid">
          {teamData.map((member, idx) => (
            <button 
              key={idx}
              className={`team-tab-card ${idx === activeMemberIndex ? 'is-active' : ''}`}
              onClick={() => setActiveMemberIndex(idx)}
            >
              <div 
                className="team-tab-avatar" 
                style={{ backgroundImage: `url(${member.avatar})` }}
              />
              <div className="team-tab-info">
                <strong className="team-tab-name">{member.name}</strong>
                <span className="team-tab-role">{member.role}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN PROFILE GRID ── */}
      <div className="team-main-wrapper">
        <div className="team-layout-grid">
          
          {/* LEFT SIDEBAR */}
          <aside className="team-sidebar">
            
            {/* Avatar Card */}
            <div className="sidebar-block profile-avatar-card">
              <div 
                className="profile-avatar-img" 
                style={{ backgroundImage: `url(${current.avatar})` }}
              />
              <div className="profile-avatar-body">
                <span className="profile-tag-badge">{current.tag}</span>
                <h2 className="profile-name">{current.name}</h2>
                <p className="profile-role">{current.role}</p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="sidebar-block">
              <h3 className="sidebar-heading">Contact Details</h3>
              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <div className="contact-icon-box"><FaPhoneAlt /></div>
                  <div>
                    <span className="contact-meta-label">Phone</span>
                    <a href={`tel:${current.phone}`} className="contact-meta-val">{current.phone}</a>
                  </div>
                </li>
                <li className="contact-info-item">
                  <div className="contact-icon-box"><FaEnvelope /></div>
                  <div>
                    <span className="contact-meta-label">Email</span>
                    <a href={`mailto:${current.email}`} className="contact-meta-val">{current.email}</a>
                  </div>
                </li>
                <li className="contact-info-item">
                  <div className="contact-icon-box"><FaMapMarkerAlt /></div>
                  <div>
                    <span className="contact-meta-label">Location</span>
                    <span className="contact-meta-val">{current.location}</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Skills Card */}
            <div className="sidebar-block">
              <h3 className="sidebar-heading">Core Competencies</h3>
              <div className="skills-stack">
                {current.skills.map((skill, index) => (
                  <div className="skill-row" key={index}>
                    <div className="skill-labels">
                      <span>{skill.label}</span>
                      <span className="skill-val">{skill.value}</span>
                    </div>
                    <div className="skill-rail">
                      <div className="skill-fill" style={{ width: skill.value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability / Hours */}
            <div className="sidebar-block hours-block">
              <div className="hours-header">
                <FaRegClock className="clock-icon" />
                <h3>Office Hours</h3>
              </div>
              <p className="hours-text">Mon - Fri: {current.hours.monFri}</p>
              <p className="hours-text hours-closed">Sat - Sun: Closed</p>
              <a href={`tel:${current.phone}`} className="sidebar-call-btn">
                <FaPhoneAlt /> Direct Call
              </a>
            </div>

          </aside>

          {/* RIGHT MAIN CONTENT */}
          <main className="team-content-area">
            
            {/* About Block (Paragraph Form) */}
            <section className="profile-card-block">
              <h2 className="block-title">About <span>Me</span></h2>
              <p className="profile-bio-text">{current.aboutMe}</p>
              
              <div className="profile-stats-grid">
                <div className="stat-card">
                  <span className="stat-card-num">{current.stats.impact}</span>
                  <span className="stat-card-label">Experience</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card-num">{current.stats.projects}</span>
                  <span className="stat-card-label">Key Projects</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card-num">{current.stats.expertise}</span>
                  <span className="stat-card-label">Specialization</span>
                </div>
              </div>
            </section>

            {/* Key Focus Highlights (Paragraph Form) */}
            <section className="profile-card-block">
              <h2 className="block-title">Key <span>Highlights &amp; Scope</span></h2>
              <div className="paragraph-highlight-box">
                <p className="highlight-paragraph-text">
                  {current.highlightsParagraph}
                </p>
              </div>
            </section>

            {/* Education & Credentials */}
            <section className="profile-card-block">
              <h2 className="block-title">Education &amp; <span>Credentials</span></h2>
              <div className="education-stack">
                {current.education.map((edu, index) => (
                  <div className="education-card" key={index}>
                    <div className="edu-icon-wrap">
                      <FaGraduationCap />
                    </div>
                    <div className="edu-details">
                      <span className="edu-year">{edu.year}</span>
                      <h3 className="edu-cert">{edu.certificate}</h3>
                      <p className="edu-inst">{edu.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Direct Message Form */}
            <section className="profile-card-block">
              <h2 className="block-title">Get In <span>Touch with {current.name.split(' ')[0]}</span></h2>
              <form className="team-contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-grid-row">
                  <input type="text" placeholder="First Name *" required className="form-input" />
                  <input type="text" placeholder="Last Name" className="form-input" />
                </div>
                <div className="form-grid-row">
                  <input type="tel" placeholder="Phone Number" className="form-input" />
                  <input type="email" placeholder="Email Address *" required className="form-input" />
                </div>
                <textarea placeholder="Write message..." rows={4} className="form-input form-textarea" required />
                <button type="submit" className="form-submit-btn">
                  <span>Send Message</span>
                  <Send size={15} />
                </button>
              </form>
            </section>

          </main>

        </div>
      </div>

    </div>
  );
}

export default Team;