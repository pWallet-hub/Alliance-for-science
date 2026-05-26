import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images
import activityImage1 from '../../assets/image/teck.jpg';
import activityImage2 from '../../assets/image/pacifique.jpg';
import activityImage3 from '../../assets/image/bg-image.jpg';
import trustedImage from '../../assets/image/trusted.png';

// Inline SVG Icons
const TechIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#e6f4f0"/>
    <path d="M10 20h4M26 20h4M20 10v4M20 26v4" stroke="#0a9e82" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="20" r="5" stroke="#0a9e82" strokeWidth="2"/>
    <circle cx="20" cy="20" r="2" fill="#0a9e82"/>
  </svg>
);

const ScienceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#e6f4f0"/>
    <path d="M15 10v10l-5 10h20L25 20V10" stroke="#0a9e82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="14" y1="10" x2="26" y2="10" stroke="#0a9e82" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="18" cy="26" r="1.5" fill="#0a9e82"/>
    <circle cx="23" cy="24" r="1.5" fill="#0a9e82"/>
  </svg>
);

const PolicyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#e6f4f0"/>
    <rect x="11" y="10" width="18" height="20" rx="2" stroke="#0a9e82" strokeWidth="2"/>
    <line x1="15" y1="16" x2="25" y2="16" stroke="#0a9e82" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15" y1="20" x2="25" y2="20" stroke="#0a9e82" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15" y1="24" x2="21" y2="24" stroke="#0a9e82" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const activities = [
  {
    id: 1,
    icon: <TechIcon />,
    title: "Technology Transfer",
    image: activityImage1,
    description: "AFS-Rwanda collaborates with key governmental institutions, civil society, and business to identify and domesticate innovative technologies that address local food system challenges.",
    stat: "50+ Technologies",
  },
  {
    id: 2,
    icon: <ScienceIcon />,
    title: "Science Communication",
    image: activityImage2,
    description: "AFS-Rwanda focuses on building the capacity of various groups, including media personnel, students and farmers, through training sessions on agricultural innovation.",
    stat: "265+ Trained",
  },
  {
    id: 3,
    icon: <PolicyIcon />,
    title: "Policy Advocacy",
    image: activityImage3,
    description: "AFS-Rwanda engages in policy advocacy by organizing events, roundtable discussions, and strategic collaborations to promote science-based agricultural policies.",
    stat: "20+ Policies",
  },
];

const faqs = [
  { q: "What types of agricultural technologies does AFS-Rwanda promote?", a: "AFS-Rwanda promotes climate-resilient crop varieties, modern farming techniques, and innovative food system solutions in partnership with institutions like NIRDA." },
  { q: "How can farmers benefit from AFS-Rwanda's programs?", a: "Farmers can access training sessions, technology demonstrations, and capacity-building workshops that equip them with modern agricultural skills and knowledge." },
  { q: "How does AFS-Rwanda influence agricultural policy?", a: "Through roundtable discussions, stakeholder events, and strategic collaborations, AFS-Rwanda advocates for science-based policies that enhance food security and climate resilience." },
  { q: "How can I partner with AFS-Rwanda?", a: "You can reach out through our contact page. We welcome partnerships with government bodies, civil society organizations, research institutions, and private sector entities." },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: '1px solid #e8edf2',
      padding: '18px 0',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          textAlign: 'left',
          gap: '16px',
        }}
      >
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 500, color: '#1a2e3b', lineHeight: 1.5 }}>{faq.q}</span>
        <span style={{ color: open ? '#0a9e82' : '#888', flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <ChevronDown />
        </span>
      </button>
      {open && (
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#6b7c8a', lineHeight: 1.7, marginTop: '10px', paddingRight: '40px' }}>
          {faq.a}
        </p>
      )}
    </div>
  );
}

function Activities() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: '#1a2e3b', background: '#fff' }}>
      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        height: '340px',
        background: 'linear-gradient(135deg, #0d3b4f 0%, #0a9e82 100%)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* decorative circles */}
        <div style={{ position: 'absolute', right: '-60px', top: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', right: '80px', bottom: '-80px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />

        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2 }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginBottom: '10px', letterSpacing: '0.5px' }}>
            Home &nbsp;/&nbsp; <span style={{ color: '#fff' }}>Our Activities</span>
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.8rem', fontWeight: 700, margin: 0, lineHeight: 1.2 }}>Our Activities</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginTop: '14px', maxWidth: '520px', lineHeight: 1.6 }}>
            Driving Agricultural Innovation Through Science and Technology
          </p>
        </div>
      </section>

      {/* ── ACTIVITY CARDS GRID ── */}
      <section style={{ background: '#f5f8fa', padding: '80px 0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 40px' }}>
          <p style={{ color: '#0a9e82', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>What We Do</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a2e3b', maxWidth: '540px', lineHeight: 1.3, marginBottom: '50px' }}>
            The Three Principal Activities of AFS-Rwanda
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {activities.map(act => (
              <div key={act.id} style={{
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                transition: 'transform 0.25s, box-shadow 0.25s',
                cursor: 'pointer',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(10,158,130,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'; }}
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src={act.image} alt={act.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', top: '14px', right: '14px', background: '#0a9e82', color: '#fff', fontSize: '0.72rem', fontWeight: 600, padding: '4px 10px', borderRadius: '20px' }}>
                    {act.stat}
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ marginBottom: '14px' }}>{act.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a2e3b', marginBottom: '10px' }}>{act.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#6b7c8a', lineHeight: 1.7, marginBottom: '20px' }}>{act.description}</p>
                  <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0a9e82', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}>
                    Read More <ArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK "WHY AFS-RWANDA" SECTION ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0d2d3d 0%, #0d3b4f 60%, #0a4a3a 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(10,158,130,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(10,158,130,0.06)' }} />

        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2 }}>
          <p style={{ color: '#0a9e82', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px', textAlign: 'center' }}>Why Choose Us</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: '60px', lineHeight: 1.3 }}>
            Why our <span style={{ color: '#0a9e82' }}>scientific approach</span> works
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', alignItems: 'stretch' }}>
            {/* Image 1 */}
            <div style={{ borderRadius: '14px', overflow: 'hidden', height: '240px' }}>
              <img src={activityImage1} alt="Technology" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Image 2 */}
            <div style={{ borderRadius: '14px', overflow: 'hidden', height: '240px' }}>
              <img src={activityImage2} alt="Science" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Stats card */}
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0a9e82' }}>99.9%</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.5, marginTop: '6px' }}>Science-backed methodologies and proven field outcomes</div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 500 }}>Farmer Adoption Rate</span>
                  <span style={{ color: '#0a9e82', fontSize: '0.85rem', fontWeight: 600 }}>87%</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '4px', height: '6px' }}>
                  <div style={{ width: '87%', background: 'linear-gradient(90deg, #0a9e82, #5dd8c0)', height: '100%', borderRadius: '4px' }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 500 }}>Policy Implementation</span>
                  <span style={{ color: '#0a9e82', fontSize: '0.85rem', fontWeight: 600 }}>72%</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '4px', height: '6px' }}>
                  <div style={{ width: '72%', background: 'linear-gradient(90deg, #0a9e82, #5dd8c0)', height: '100%', borderRadius: '4px' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '40px' }}>
            {[
              { num: '100+', label: 'Individuals Trained' },
              { num: '5+', label: 'Technologies Transferred' },
              { num: '1K+', label: 'Farmers Reached' },
              { num: '10+', label: 'Policies Advocated' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0a9e82' }}>{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', marginTop: '6px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / IMPACT SPLIT ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '70px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#0a9e82', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>About AFS-Rwanda</p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a2e3b', lineHeight: 1.3, marginBottom: '18px' }}>
              Pioneering research for a{' '}
              <span style={{ color: '#0a9e82', fontStyle: 'italic' }}>food-secure future</span>
            </h2>
            <p style={{ color: '#6b7c8a', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '30px' }}>
              Alliance for Science Rwanda connects science, policy, and practice to transform food systems. We empower farmers, train communicators, and shape policies that accelerate the adoption of agricultural innovation across Rwanda.
            </p>

            <div style={{ display: 'flex', gap: '32px', marginBottom: '36px' }}>
              {[{ label: 'Global Collaborators', val: '80%' }, { label: '24/7 Support', val: '100%' }].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: '#e6f4f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#0a9e82', fontWeight: 700, fontSize: '0.75rem' }}>{s.val}</span>
                  </div>
                  <span style={{ fontSize: '0.88rem', color: '#1a2e3b', fontWeight: 500 }}>{s.label}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <button style={{
                background: 'linear-gradient(135deg, #0a9e82, #0d3b4f)',
                color: '#fff',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '30px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 6px 20px rgba(10,158,130,0.3)',
                transition: 'all 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(10,158,130,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(10,158,130,0.3)'; }}
              >
                Get in Touch <ArrowRight />
              </button>
            </Link>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
              <img src={activityImage3} alt="Policy" style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }} />
            </div>
            {/* floating card */}
            <div style={{
              position: 'absolute', bottom: '-20px', left: '-24px',
              background: '#fff', borderRadius: '14px', padding: '18px 22px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
              display: 'flex', alignItems: 'center', gap: '14px',
              minWidth: '210px',
            }}>
              <img src={trustedImage} alt="" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0a9e82' }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a2e3b' }}>Emmanuel K.</div>
                <div style={{ fontSize: '0.78rem', color: '#6b7c8a' }}>Lead Agronomist, AFS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#f5f8fa', padding: '80px 0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '70px', alignItems: 'start' }}>
          <div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.10)', height: '320px' }}>
              <img src={activityImage1} alt="Research" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ background: '#0d3b4f', borderRadius: '14px', padding: '24px', marginTop: '20px' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', marginBottom: '4px' }}>Knowledge That Supports</p>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '14px' }}>Agricultural Innovation</p>
              <a href="mailto:info@afsrwanda.org" style={{ color: '#0a9e82', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}>info@afsrwanda.org</a>
            </div>
          </div>

          <div>
            <p style={{ color: '#0a9e82', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>Frequently Asked Questions</p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a2e3b', lineHeight: 1.3, marginBottom: '32px' }}>
              Answers to your agricultural{' '}
              <span style={{ color: '#0a9e82', fontStyle: 'italic' }}>research questions</span>
            </h2>
            <div>
              {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER STRIP ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0a9e82, #0d3b4f)',
        padding: '60px 40px',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 700, marginBottom: '10px' }}>
          Agriculture meets Innovation
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto 30px', lineHeight: 1.7 }}>
          At the crossroads of biotechnology, where every challenge becomes an opportunity for a food-secure Rwanda.
        </p>
        <Link to="/about">
          <button style={{
            background: '#fff',
            color: '#0a9e82',
            border: 'none',
            padding: '14px 36px',
            borderRadius: '30px',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.95rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            transition: 'all 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Get in Touch <ArrowRight />
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Activities;