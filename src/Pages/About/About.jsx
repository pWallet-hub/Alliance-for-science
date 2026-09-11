import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import audience from '../../assets/image/Audience.jpg';
import aboutBg from '../../assets/image/about-bg.jpg';
import { GiPublicSpeaker } from "react-icons/gi";
import { MdOutlineTrackChanges } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineCampaign, MdOutlineHub } from "react-icons/md";
import { Sparkles, ArrowRight, Target, Compass, BookOpen } from "lucide-react";

function About() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const aboutRef   = useRef(null);
  const missionRef = useRef(null);
  const goalRef    = useRef(null);
  const [aboutVis,   setAboutVis]   = useState(false);
  const [missionVis, setMissionVis] = useState(false);
  const [goalVis,    setGoalVis]    = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(({ target, isIntersecting }) => {
        if (target === aboutRef.current   && isIntersecting) setAboutVis(true);
        if (target === missionRef.current && isIntersecting) setMissionVis(true);
        if (target === goalRef.current    && isIntersecting) setGoalVis(true);
      }),
      { threshold: 0.15 }
    );
    [aboutRef, missionRef, goalRef].forEach(r => r.current && io.observe(r.current));
    return () => io.disconnect();
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

  return (
    <div className='about-root'>

      {/* ── HERO SECTION ── */}
      <section className='about-hero'>
        <div className='about-hero__bg'>
          <img src={aboutBg} alt="Alliance for Science Rwanda background" />
        </div>

        <div className={`about-hero-container ${heroLoaded ? 'hero-loaded' : ''}`}>
          <p className='about-hero-breadcrumb'>HOME &rsaquo; ABOUT US</p>

          <div className='about-hero-pill'>
            <Sparkles size={13} className='about-hero-pill-icon' />
            <span>ALLIANCE FOR SCIENCE RWANDA</span>
          </div>

          <h1 className='about-hero-title'>
            <em>About</em> <span>Us</span>
          </h1>

          <p className='about-hero-subtitle'>
            Advancing agricultural biotechnology, food security, and climate-resilient farming 
            solutions through education, advocacy, and collaborative partnerships across Rwanda.
          </p>
        </div>

        {/* Curved Wave Divider */}
        <div className='about-hero__wave'>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,34.75V0Z"
              fill="#F4F9FE"
            />
          </svg>
        </div>
      </section>

      {/* ── ABOUT STORY BLOCK ── */}
      <section
        className={`about-story-section ${aboutVis ? 'section-visible' : ''}`}
        ref={aboutRef}
      >
        <div className='about-story-grid'>
          <div className='about-story-image-column'>
            <div className='about-image-card'>
              <img src={audience} alt="Audience engagement" className='about-story-img' />
              <div className='about-image-badge'>
                <Compass size={18} />
                <span>Empowering Farmers</span>
              </div>
            </div>
          </div>

          <div className='about-story-text-column'>
            <span className='about-eyebrow'>Who We Are</span>
            <h2 className='about-section-heading'>
              Pioneering Sustainable <span className='accent-text'>Agriculture</span>
            </h2>
            <div className='about-heading-divider' />
            
            <p className='about-story-description'>
              Alliance for Science Rwanda has been incorporated as a social enterprise with a mission
              to seek food security and sustainability through education and advocacy of innovative farming
              technologies in Rwanda, actively mitigating the adverse effects of climate change, pests, and diseases.
            </p>

            <button className='about-primary-btn'>
              <span>Explore Our Initiatives</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section
        className={`about-mv-section ${missionVis ? 'section-visible' : ''}`}
        ref={missionRef}
      >
        <div className='about-mv-container'>
          <div className='about-mv-header'>
            <span className='about-eyebrow-light'>Core Purpose</span>
            <h2 className='about-mv-title'>Our Mission &amp; Vision</h2>
            <p className='about-mv-subtitle'>
              Uniting farmers, scientists, media, businesses, and policymakers for a food-secure and sustainable future.
            </p>
          </div>

          <div className='about-mv-cards-grid'>
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
                To become a leading force in Rwanda's agricultural transformation by emphasizing innovative farming 
                technologies and establishing a nationwide network of food security advocates.
              </p>
            </div>

            {/* Mission Card */}
            <div className='about-mv-card'>
              <div className='about-mv-card-header'>
                <div className='about-mv-icon-box'>
                  <GiPublicSpeaker size={28} />
                </div>
                <span className='about-mv-tag'>Mission</span>
              </div>
              <h3 className='about-mv-card-heading'>Advocacy & Education</h3>
              <p className='about-mv-card-text'>
                To achieve food security and sustainability through targeted education and advocacy for innovative 
                farming solutions, mitigating the threats posed by climate change, pests, and diseases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOALS & TIMELINE ── */}
      <section
        className={`about-goals-section ${goalVis ? 'section-visible' : ''}`}
        ref={goalRef}
      >
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
      </section>

    </div>
  );
}

export default About;