import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import './Activities.css';

// Import images
import station from '../../assets/image/rubona-field.jpg';
import activityImage1 from '../../assets/image/teck.jpg';
import activityImage2 from '../../assets/image/pacifique.jpg';
import activityImage3 from '../../assets/image/bg-image.jpg';

import trustedImage from '../../assets/image/trusted.jpg';

// Inline Custom SVG Icons
const TechIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#e7f2fc"/>
    <path d="M10 20h4M26 20h4M20 10v4M20 26v4" stroke="#0C5088" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="20" r="5" stroke="#0C5088" strokeWidth="2"/>
    <circle cx="20" cy="20" r="2" fill="#0C5088"/>
  </svg>
);

const ScienceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#e7f2fc"/>
    <path d="M15 10v10l-5 10h20L25 20V10" stroke="#0C5088" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="14" y1="10" x2="26" y2="10" stroke="#0C5088" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="18" cy="26" r="1.5" fill="#0C5088"/>
    <circle cx="23" cy="24" r="1.5" fill="#0C5088"/>
  </svg>
);

const PolicyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#e7f2fc"/>
    <rect x="11" y="10" width="18" height="20" rx="2" stroke="#0C5088" strokeWidth="2"/>
    <line x1="15" y1="16" x2="25" y2="16" stroke="#0C5088" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15" y1="20" x2="25" y2="20" stroke="#0C5088" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15" y1="24" x2="21" y2="24" stroke="#0C5088" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const activities = [
  {
    id: 1,
    icon: <TechIcon />,
    title: "Technology Transfer",
    image: station,
    description:
      "At RAB's Rubona research station, scientists are developing cassava varieties bred to withstand Cassava Brown Streak Disease — work AFS-Rwanda helps carry from the research station to the farmers who need it most.",
    stat: "RAB Rubona Station",
  },
  {
    id: 2,
    icon: <ScienceIcon />,
    title: "Science Communication",
    image: activityImage2,
    description:
      "Alongside the OFAB Rwanda Chapter, we run workshops that train journalists and young people to report on agricultural biotechnology accurately, and support the annual OFAB Media Awards recognizing that work.",
    stat: "OFAB Media Awards",
  },
  {
    id: 3,
    icon: <PolicyIcon />,
    title: "Policy Advocacy",
    image: activityImage3,
    description:
      "OFAB Rwanda — launched under RAB in October 2021 with AATF funding — brings regulators, policymakers, and scientists to the same table. AFS-Rwanda supports that work under Rwanda's Biosafety Law framework.",
    stat: "Since 2021",
  },
];

const faqs = [
  {
    q: "What is OFAB Rwanda, and how does AFS-Rwanda work with it?",
    a: "The Open Forum on Agricultural Biotechnology (OFAB) Rwanda Chapter is a project run by the Rwanda Agriculture and Animal Resources Development Board (RAB), funded by the African Agricultural Technology Foundation (AATF). It launched in October 2021, and AFS-Rwanda partners with it on media training and public engagement work.",
  },
  {
    q: "How does AFS-Rwanda train journalists and young people?",
    a: "Together with OFAB Rwanda, we've run multi-day workshops training young people as ambassadors for agricultural biotechnology, and we support the annual OFAB Media Awards, which recognize journalists and digital influencers for accurate biotech reporting — the 4th edition was held in Kigali in September 2025.",
  },
  {
    q: "How does AFS-Rwanda engage with agricultural policy?",
    a: "We work within Rwanda's Biosafety Law framework, supporting the roundtables and stakeholder dialogues that RAB and OFAB Rwanda organize between regulators, scientists, and policymakers on the safe deployment of agricultural biotechnology.",
  },
  {
    q: "How can I partner with AFS-Rwanda?",
    a: "You can reach out through our contact page. We welcome partnerships with government bodies, research institutions like RAB, media organizations, and civil society groups working on food security.",
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="act-faq-item">
      <button onClick={() => setOpen(!open)} className="act-faq-button">
        <span className="act-faq-question">{faq.q}</span>
        <span className={`act-faq-chevron ${open ? 'open' : ''}`}>
          <ChevronDown size={18} />
        </span>
      </button>
      {open && (
        <p className="act-faq-answer">
          {faq.a}
        </p>
      )}
    </div>
  );
}

function Activities() {
  return (
    <div className="activities-root">

      {/* ── HERO HEADER (Consistent with Gallery & About Pages) ── */}
      <section className="activities-hero">
        <div className="activities-hero__bg">
          <img src={activityImage3} alt="Agricultural biotechnology activities in Rwanda" />
        </div>

        <div className="activities-hero-container">
          <p className="activities-breadcrumb">HOME &rsaquo; OUR ACTIVITIES</p>

          <div className="activities-pill">
            <Sparkles size={13} className="activities-pill-icon" />
            <span>PARTNERING WITH RAB &amp; OFAB RWANDA SINCE 2021</span>
          </div>

          <h1 className="activities-hero-title">
            <em>Our</em> <span>Activities</span>
          </h1>

          <p className="activities-hero-subtitle">
            From cassava research at RAB's Rubona station to media training with the
            OFAB Rwanda Chapter, our work moves agricultural biotechnology from the
            lab to the policy table to the farm.
          </p>
        </div>

        {/* Curved Wave Divider at Bottom */}
        <div className="activities-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,34.75V0Z"
              fill="#F4F9FE"
            />
          </svg>
        </div>
      </section>

      {/* ── ACTIVITY CARDS GRID ── */}
      <section className="act-cards-section">
        <div className="act-container">
          <div className="act-header-block">
            <span className="act-eyebrow">WHAT WE DO</span>
            <h2 className="act-section-title">
              The Three Principal Pillars of <span className="accent-text">AFS-Rwanda</span>
            </h2>
          </div>

          <div className="act-cards-grid">
            {activities.map(act => (
              <article key={act.id} className="act-card">
                <div className="act-card-media">
                  <img src={act.image} alt={act.title} className="act-card-img" />
                  <span className="act-card-badge">{act.stat}</span>
                </div>
                <div className="act-card-body">
                  <div className="act-card-icon">{act.icon}</div>
                  <h3 className="act-card-title">{act.title}</h3>
                  <p className="act-card-desc">{act.description}</p>
                  <Link to="/about" className="act-card-link">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK "HOW WE WORK" SECTION ── */}
      <section className="act-dark-section">
        <div className="act-dark-glow act-dark-glow--a" />
        <div className="act-dark-glow act-dark-glow--b" />

        <div className="act-container">
          <div className="act-dark-header">
            <span className="act-eyebrow-light">HOW WE WORK</span>
            <h2 className="act-dark-title">
              Built on a network that spans <span className="accent-text-light">all of Africa</span>
            </h2>
          </div>

          <div className="act-impact-grid">
            <div className="act-impact-img-box">
              <img src={activityImage1} alt="Cassava research at RAB Rubona station" />
            </div>
            <div className="act-impact-img-box">
              <img src={activityImage2} alt="Media training workshop with OFAB Rwanda" />
            </div>

            <div className="act-impact-metrics-card">
              <div className="metric-main">
                <span className="metric-num">2021</span>
                <p className="metric-sub">
                  The year the OFAB Rwanda Chapter launched under RAB, with funding from
                  AATF — the partnership most of AFS-Rwanda's public-facing work runs through.
                </p>
              </div>

              <div className="progress-group">
                <div className="progress-label">
                  <span>OFAB founded across Africa</span>
                  <span className="progress-val">2006</span>
                </div>
              </div>

              <div className="progress-group">
                <div className="progress-label">
                  <span>OFAB Rwanda Media Awards, latest edition</span>
                  <span className="progress-val">2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key facts, not invented percentages */}
          <div className="act-stats-row">
            {[
              { num: '2006', label: 'OFAB founded across Africa by AATF' },
              { num: '8', label: 'Countries in the OFAB network' },
              { num: '2021', label: 'OFAB Rwanda Chapter launched under RAB' },
              { num: '4th', label: 'Edition of the OFAB Rwanda Media Awards' },
            ].map((s, i) => (
              <div key={i} className="act-stat-box">
                <span className="act-stat-num">{s.num}</span>
                <span className="act-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / IMPACT SPLIT ── */}
      <section className="act-split-section">
        <div className="act-container act-split-grid">
          <div className="act-split-content">
            <span className="act-eyebrow">ABOUT AFS-RWANDA</span>
            <h2 className="act-section-title">
              Pioneering research for a <span className="accent-text">food-secure future</span>
            </h2>
            <p className="act-split-desc">
              Alliance for Science Rwanda works alongside RAB and the OFAB Rwanda Chapter
              to connect science, policy, and practice — helping resilient crop research,
              accurate media coverage, and sound biosafety policy reinforce each other
              instead of competing for attention.
            </p>

            <div className="act-split-highlights">
              <div className="highlight-item">
                <div className="highlight-icon"><CheckCircle2 size={18} /></div>
                <span>Partner of the OFAB Rwanda Chapter (RAB)</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><CheckCircle2 size={18} /></div>
                <span>Active in Rwanda's Biosafety Law dialogue</span>
              </div>
            </div>

            <Link to="/contact">
              <button className="act-btn-primary">
                Get in Touch <ArrowRight size={15} />
              </button>
            </Link>
          </div>

          <div className="act-split-media">
            <div className="act-split-img-card">
              <img src={activityImage3} alt="Policy advocacy workshop" />
            </div>

            <div className="act-floating-card">
              <img src={trustedImage} alt="Lead agronomist" className="act-floating-avatar" />
              <div>
                <h4 className="act-floating-name">Pacifique NSHIMIYIMANA.</h4>
                <p className="act-floating-role">Director, AfS-rwanda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="act-faq-section">
        <div className="act-container act-faq-grid">
          <div className="act-faq-media">
            <div className="act-faq-img-box">
              <img src={activityImage1} alt="Cassava research field" />
            </div>
            <div className="act-faq-banner">
              <span className="banner-sub">A project of RAB, funded by AATF</span>
              <h4 className="banner-title">OFAB Rwanda Chapter</h4>
              <a href="mailto:info@afsrwanda.org" className="banner-email">info@afsrwanda.org</a>
            </div>
          </div>

          <div>
            <span className="act-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="act-section-title">
              Answers to your agricultural <span className="accent-text">research questions</span>
            </h2>
            <div className="act-faq-list">
              {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="act-cta-section">
        <div className="act-container">
          <h2 className="act-cta-title">Agriculture Meets Innovation</h2>
          <p className="act-cta-desc">
            From the Rubona research station to the newsroom to the policy table —
            AFS-Rwanda works where science and food security actually meet.
          </p>
          <Link to="/contact">
            <button className="act-cta-btn">
              Get in Touch <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Activities;