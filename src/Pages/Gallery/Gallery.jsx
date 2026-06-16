import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

// ─── Sample gallery data ──────────────────────────────────────────────────────
// Replace src values with your real image URLs / imports
const GALLERY_ITEMS = [
  { id: 1,  src: 'https://picsum.photos/seed/g1/800/600',  thumb: 'https://picsum.photos/seed/g1/400/300',  category: 'Events',     title: 'Annual Conference 2024',       date: 'Mar 2024' },
  { id: 2,  src: 'https://picsum.photos/seed/g2/600/800',  thumb: 'https://picsum.photos/seed/g2/300/400',  category: 'Team',       title: 'Team Building Day',            date: 'Feb 2024' },
  { id: 3,  src: 'https://picsum.photos/seed/g3/900/600',  thumb: 'https://picsum.photos/seed/g3/450/300',  category: 'Activities', title: 'Community Outreach',           date: 'Jan 2024' },
  { id: 4,  src: 'https://picsum.photos/seed/g4/700/700',  thumb: 'https://picsum.photos/seed/g4/350/350',  category: 'Events',     title: 'Year-End Celebration',         date: 'Dec 2023' },
  { id: 5,  src: 'https://picsum.photos/seed/g5/800/500',  thumb: 'https://picsum.photos/seed/g5/400/250',  category: 'Activities', title: 'Sports Tournament',            date: 'Nov 2023' },
  { id: 6,  src: 'https://picsum.photos/seed/g6/600/900',  thumb: 'https://picsum.photos/seed/g6/300/450',  category: 'Team',       title: 'New Members Welcome',          date: 'Oct 2023' },
  { id: 7,  src: 'https://picsum.photos/seed/g7/850/600',  thumb: 'https://picsum.photos/seed/g7/425/300',  category: 'Events',     title: 'Workshop Series',              date: 'Sep 2023' },
  { id: 8,  src: 'https://picsum.photos/seed/g8/700/900',  thumb: 'https://picsum.photos/seed/g8/350/450',  category: 'Activities', title: 'Volunteer Day',                date: 'Aug 2023' },
  { id: 9,  src: 'https://picsum.photos/seed/g9/900/700',  thumb: 'https://picsum.photos/seed/g9/450/350',  category: 'Team',       title: 'Leadership Retreat',           date: 'Jul 2023' },
  { id: 10, src: 'https://picsum.photos/seed/g10/600/600', thumb: 'https://picsum.photos/seed/g10/300/300', category: 'Events',     title: 'Mid-Year Review',              date: 'Jun 2023' },
  { id: 11, src: 'https://picsum.photos/seed/g11/800/500', thumb: 'https://picsum.photos/seed/g11/400/250', category: 'Activities', title: 'Cultural Fest',                date: 'May 2023' },
  { id: 12, src: 'https://picsum.photos/seed/g12/500/800', thumb: 'https://picsum.photos/seed/g12/250/400', category: 'Team',       title: 'Award Ceremony',               date: 'Apr 2023' },
];

const CATEGORIES = ['All', ...Array.from(new Set(GALLERY_ITEMS.map(i => i.category)))];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null); // index into filtered list
  const [loaded, setLoaded] = useState({});
  const [visible, setVisible] = useState(false);

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.category === activeCategory);

  // Page entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Keyboard navigation for lightbox
  const handleKey = useCallback((e) => {
    if (lightbox === null) return;
    if (e.key === 'Escape') setLightbox(null);
    if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % filtered.length);
    if (e.key === 'ArrowLeft')  setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  }, [lightbox, filtered.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const openLightbox  = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prev = (e) => { e.stopPropagation(); setLightbox(i => (i - 1 + filtered.length) % filtered.length); };
  const next = (e) => { e.stopPropagation(); setLightbox(i => (i + 1) % filtered.length); };

  const current = lightbox !== null ? filtered[lightbox] : null;

  return (
    <div className={`gallery-page ${visible ? 'gallery-page--visible' : ''}`}>

      {/* ── Hero header ─────────────────────────────────── */}
      <div className="gallery-hero">
        <div className="gallery-hero__bg" />
        <div className="gallery-hero__content">
          <span className="gallery-hero__eyebrow">Our Work &amp; Moments</span>
          <h1 className="gallery-hero__title">Gallery</h1>
          <p className="gallery-hero__sub">
            A visual journey through our events, team milestones, and activities.
          </p>
        </div>
      </div>

      {/* ── Filter tabs ─────────────────────────────────── */}
      <div className="gallery-filters">
        <div className="gallery-filters__inner">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`gallery-filters__btn ${activeCategory === cat ? 'gallery-filters__btn--active' : ''}`}
              onClick={() => { setActiveCategory(cat); setLightbox(null); }}
            >
              {cat}
              <span className="gallery-filters__count">
                {cat === 'All' ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter(i => i.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Masonry grid ────────────────────────────────── */}
      <div className="gallery-grid">
        {filtered.map((item, idx) => (
          <div
            key={item.id}
            className="gallery-card"
            style={{ '--delay': `${idx * 40}ms` }}
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && openLightbox(idx)}
            aria-label={`Open ${item.title}`}
          >
            <div className="gallery-card__img-wrap">
              {!loaded[item.id] && <div className="gallery-card__skeleton" />}
              <img
                src={item.thumb}
                alt={item.title}
                className={`gallery-card__img ${loaded[item.id] ? 'gallery-card__img--loaded' : ''}`}
                onLoad={() => setLoaded(p => ({ ...p, [item.id]: true }))}
                loading="lazy"
              />
              <div className="gallery-card__overlay">
                <span className="gallery-card__zoom">&#x26F6;</span>
              </div>
            </div>
            <div className="gallery-card__info">
              <span className="gallery-card__category">{item.category}</span>
              <p className="gallery-card__title">{item.title}</p>
              <span className="gallery-card__date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ────────────────────────────────────── */}
      {current && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image viewer">
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">&#x2715;</button>

          <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous">&#8592;</button>
          <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next">&#8594;</button>

          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={current.src} alt={current.title} className="lightbox__img" />
            <div className="lightbox__caption">
              <span className="lightbox__cat">{current.category}</span>
              <h2 className="lightbox__title">{current.title}</h2>
              <span className="lightbox__date">{current.date}</span>
              <span className="lightbox__counter">{lightbox + 1} / {filtered.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}