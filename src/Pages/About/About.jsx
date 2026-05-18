import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import audience from '../../assets/image/Audience.jpg';
import { GiPublicSpeaker } from "react-icons/gi";
import { MdOutlineTrackChanges } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineCampaign, MdOutlineHub } from "react-icons/md";

function About() {
  const [scrollY, setScrollY]       = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const aboutRef   = useRef(null);
  const missionRef = useRef(null);
  const goalRef    = useRef(null);
  const [aboutVis,   setAboutVis]   = useState(false);
  const [missionVis, setMissionVis] = useState(false);
  const [goalVis,    setGoalVis]    = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(({ target, isIntersecting }) => {
        if (target === aboutRef.current   && isIntersecting) setAboutVis(true);
        if (target === missionRef.current && isIntersecting) setMissionVis(true);
        if (target === goalRef.current    && isIntersecting) setGoalVis(true);
      }),
      { threshold: 0.12 }
    );
    [aboutRef, missionRef, goalRef].forEach(r => r.current && io.observe(r.current));
    return () => io.disconnect();
  }, []);

  const goals = [
    {
      num: '01',
      label: 'Community',
      icon: <HiOutlineUserGroup />,
      color: 'goal-step--teal',
      title: 'Build Communities',
      text: 'Empower farming communities by bridging the gap between innovative technology developers, farmers, and local government units.',
      position: 'top',
    },
    {
      num: '02',
      label: 'Advocacy',
      icon: <MdOutlineCampaign />,
      color: 'goal-step--sky',
      title: 'Drive Advocacy',
      text: 'Engage key stakeholders including local government through strategic information sharing and high-impact roundtable discussions.',
      position: 'bottom',
    },
    {
      num: '03',
      label: 'Network',
      icon: <MdOutlineHub />,
      color: 'goal-step--green',
      title: 'Grow the Network',
      text: 'Establish a national consortium of agricultural technology practitioners and food security enthusiasts across Rwanda.',
      position: 'top',
    },
  ];

  return (
    <div className='about-page'>

      {/* ── HERO ── */}
      <section className='about1'>
        <div className='hero-bg' style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
        <div className='hero-gradient' />
        <div className={`about-text ${heroLoaded ? 'hero-loaded' : ''}`}>
          <span className='hero-eyebrow'>Alliance for Science</span>
          <h1>About <em>Us</em></h1>
          <div className='hero-rule'>
            <span /><span className='hero-gem' /><span />
          </div>
        </div>
      </section>

      {/* ── ABOUT STORY BLOCK ── */}
      <section
        className={`about2 ${aboutVis ? 'section-visible' : ''}`}
        ref={aboutRef}
      >
        <div className='about2-image-wrap'>
          <img src={audience} alt="Audience" className='image2' />
          <div className='about2-image-decor' />
        </div>
        <div className='about-content1'>
          <span className='section-eyebrow'>Who We Are</span>
          <h1>About <span className='accent'>Us</span></h1>
          <div className='content-divider' />
          <p>
            Alliance for Science Rwanda has been incorporated as a social enterprise with a mission
            to seek food security, sustainability through education and advocacy of innovative farming
            technologies in Rwanda by mitigating effects of climate change, pests, and diseases.
          </p>
          <button className='read-more-btn'>
            <span>Read More</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section
        className={`mv-section ${missionVis ? 'section-visible' : ''}`}
        ref={missionRef}
      >
        <div className='mv-left'>
          <div className='mv-left-content'>
            <h2>Our Mission &amp;<br />Vision Statement</h2>
            <p>
              Uniting farmers, scientists, media, businesses and policymakers
              for a better and sustainable future.
            </p>
          </div>
          <div className='mv-left-image'>
            <img src={audience} alt="Team collaboration" />
            <div className='mv-image-overlay' />
          </div>
        </div>

        <div className='mv-right'>
          <div className='mv-cards'>
            <div className='mv-card mv-card--vision'>
              <div className='mv-card-icon-wrap'>
                <MdOutlineTrackChanges />
              </div>
              <div className='mv-card-label'>Vision</div>
              <p className='mv-card-text'>
                To become a leading force in Rwanda's agricultural transformation
                by emphasizing innovative farming technologies and establishing
                a nationwide network of food security advocates.
              </p>
            </div>
            <div className='mv-card mv-card--mission'>
              <div className='mv-card-icon-wrap'>
                <GiPublicSpeaker />
              </div>
              <div className='mv-card-label'>Mission</div>
              <p className='mv-card-text'>
                To seek food security and sustainability through education
                and advocacy of innovative farming technologies in Rwanda
                by mitigating effects of climate change, pests and diseases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOALS — Target Timeline ── */}
      <section
        className={`goal-section ${goalVis ? 'section-visible' : ''}`}
        ref={goalRef}
      >
        <div className='goals-header-row'>
          <div className='goals-header-text'>
            <span className='section-eyebrow'>What We Aim For</span>
            <h2 className='goals-title'>Our <span className='accent'>Goals</span></h2>
          </div>
          <span className='goals-count-badge'>3 Objectives</span>
        </div>

        {/* ── TIMELINE TRACK ── */}
        <div className='goal-timeline'>

          {goals.map((g, i) => (
            <div
              className={`goal-step ${g.color}`}
              key={i}
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              {/* Connector bar leading into this step */}
              {i > 0 && <div className={`goal-connector goal-connector--${i}`} />}

              {/* Top text box (for odd positions: 0, 2) */}
              {g.position === 'top' && (
                <div className='goal-label-box goal-label-box--top'>
                  <span className={`goal-label-num goal-label-num--${g.color.split('--')[1]}`}>{g.title}</span>
                  <p className='goal-label-text'>{g.text}</p>
                  <div className='goal-label-arrow goal-label-arrow--down' />
                </div>
              )}

              {/* Step circle */}
              <div className='goal-step-axis'>
                <div className={`goal-step-num-vertical`}>Step {g.num}</div>
                <div className='goal-circle'>
                  <span className='goal-circle-icon'>{g.icon}</span>
                </div>
                <span className='goal-circle-tag'>{g.label}</span>
              </div>

              {/* Bottom text box (for even position: 1) */}
              {g.position === 'bottom' && (
                <div className='goal-label-box goal-label-box--bottom'>
                  <div className='goal-label-arrow goal-label-arrow--up' />
                  <span className={`goal-label-num goal-label-num--${g.color.split('--')[1]}`}>{g.title}</span>
                  <p className='goal-label-text'>{g.text}</p>
                </div>
              )}
            </div>
          ))}

          {/* Final connector to bullseye */}
          <div className='goal-connector goal-connector-final' />

          {/* Bullseye Target */}
          <div className='goal-target'>
            <div className='goal-target-inner'>
              <div className='target-ring target-ring--1'>
                <div className='target-ring target-ring--2'>
                  <div className='target-ring target-ring--3'>
                    <div className='target-bull'>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='target-arrow-icon'>
                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className='goal-target-label'>Target</span>
          </div>

        </div>{/* end .goal-timeline */}
      </section>

    </div>
  );
}

export default About;