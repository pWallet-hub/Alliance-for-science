import React, { useState } from 'react';
import {
  ExternalLink,
  Search,
  Images,
  Calendar,
  Users,
  Activity,
  FolderOpen,
} from 'lucide-react';
import './Gallery.css';

// ─── Local Image Imports (7 Unique Assets) ─────────────────────────
import bgHeroImg from '../../assets/image/bg-image.jpg';
import rubonaImg from '../../assets/image/rubona-field.jpg';
import teckImg from '../../assets/image/teck.jpg';
import pacifiqueImg from '../../assets/image/pacifique.jpg';
import trustedImg from '../../assets/image/trusted.jpg';
import aboutCoverImg from '../../assets/image/pacifique-ask-image.jpg';
import placeholderImg from '../../assets/image/pacifique-ask-image.jpg';

// ─── 7 Gallery Collections Data ───────────────────────────────────────────
const GALLERY_ITEMS = [
  {
    id: 1,
    src: rubonaImg,
    category: 'activities',
    title: 'RAB Rubona Cassava Field Trials',
    caption: 'Field research evaluating disease-resistant cassava varieties in Huye District alongside RAB agronomists.',
    href: '#',
    itemCount: 42,
    date: 'Mar 2025',
    tall: true
  },
  {
    id: 2,
    src: teckImg,
    category: 'events',
    title: 'Agricultural Biotechnology Workshop',
    caption: 'Hands-on training session covering gene editing, biosafety law, and modern breeding technologies.',
    href: '#',
    itemCount: 18,
    date: 'Feb 2025'
  },
  {
    id: 3,
    src: pacifiqueImg,
    category: 'team',
    title: 'Leadership & Stakeholder Dialogue',
    caption: 'Executive discussions on strategic partnerships with RAB, MINAGRI, AATF, and the OFAB Rwanda Chapter.',
    href: '#',
    itemCount: 25,
    date: 'Jan 2025',
    tall: true
  },
  {
    id: 4,
    src: bgHeroImg,
    category: 'events',
    title: 'OFAB Rwanda Media Awards',
    caption: 'Recognizing outstanding science journalists and agricultural biotechnology reporting in Kigali.',
    href: '#',
    itemCount: 31,
    date: 'Dec 2024'
  },
  {
    id: 5,
    src: trustedImg,
    category: 'team',
    title: 'Field Agronomists & Researchers',
    caption: 'Our dedicated team working directly alongside smallholder farming communities across Rwanda.',
    href: '#',
    itemCount: 20,
    date: 'Nov 2024'
  },
  {
    id: 6,
    src: aboutCoverImg,
    category: 'activities',
    title: 'BioCap Rwanda Project Launch',
    caption: 'Capacity building and national biosafety governance sessions under Rwanda’s Biosafety Law framework.',
    href: '#',
    itemCount: 28,
    date: 'Oct 2024',
    tall: true
  },
  {
    id: 7,
    src: placeholderImg,
    category: 'events',
    title: 'Youth Biotech Ambassadors Forum',
    caption: 'Empowering young communicators and scholars across provincial universities to engage in science advocacy.',
    href: '#',
    itemCount: 36,
    date: 'Sep 2024'
  },
];

const CATEGORIES = [
  { key: 'all',        label: 'All Collections', Icon: Images   },
  { key: 'events',     label: 'Events',          Icon: Calendar },
  { key: 'team',       label: 'Team',            Icon: Users    },
  { key: 'activities', label: 'Activities',      Icon: Activity },
];

const CATEGORY_LABELS = CATEGORIES.reduce((acc, c) => ({ ...acc, [c.key]: c.label }), {});

function countFor(key) {
  return key === 'all' ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter((i) => i.category === key).length;
}

// ─── Card Component ─────────────────────────────────────────────────────────
function GalleryCard({ item }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`gallery-card${item.tall ? ' gallery-card--tall' : ''}`}
      aria-label={`Open ${item.title}`}
    >
      <div className="gallery-card__img-wrap">
        <img src={item.src} alt={item.title} className="gallery-card__img" loading="lazy" />
      </div>

      <div className="gallery-card__overlay">
        <div className="gallery-card__info">
          <p className="gallery-card__title">{item.title}</p>
          <div className="gallery-card__meta">
            <span className="gallery-card__count">
              <FolderOpen size={11} />
              {item.itemCount} items
            </span>
            <span className="gallery-card__dot" />
            <span className="gallery-card__date">{item.date}</span>
          </div>
        </div>
      </div>

      <div className="gallery-card__link-icon">
        <ExternalLink size={14} />
      </div>

      <div className="gallery-card__pill">{CATEGORY_LABELS[item.category]}</div>
    </a>
  );
}

// ─── Page Component ─────────────────────────────────────────────────────────
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = GALLERY_ITEMS.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || item.title.toLowerCase().includes(q) || item.caption.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="gallery-page">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="gallery-hero">
        <div className="gallery-hero__bg">
          <img src={bgHeroImg} alt="Alliance for Science photo collections" />
        </div>

        <div className="gallery-hero__content">
          <p className="gallery-hero__eyebrow">Home &rsaquo; Gallery</p>
          <h1 className="gallery-hero__title">
            Photo <span>Collections</span>
          </h1>
          <p className="gallery-hero__sub">
            A visual record of our research field trials, team milestones, and community work advancing agricultural science in Rwanda.
          </p>
          <div className="gallery-hero__count">
            <Images size={13} /> {GALLERY_ITEMS.length} collections
          </div>
        </div>

        <div className="gallery-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,34.75V0Z"
              fill="#F4F9FE"
            />
          </svg>
        </div>
      </section>

      {/* ── Controls ─────────────────────────────────────── */}
      <div className="gallery-controls">
        <div className="filter-tabs">
          {CATEGORIES.map(({ key, label, Icon }) => (
            <button
              key={key}
              className={`filter-tab${activeCategory === key ? ' active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <Icon size={13} />
              {label}
              <span className="filter-tab__count">{countFor(key)}</span>
            </button>
          ))}
        </div>
        <div className="search-wrap">
          <Search size={15} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search collections…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* ── Results meta ─────────────────────────────────── */}
      <p className="results-meta">
        Showing <span>{filtered.length}</span> of {GALLERY_ITEMS.length} collections
      </p>

      {/* ── Grid ─────────────────────────────────────────── */}
      <div className="gallery-grid-wrap">
        <div className="gallery-grid">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <Images size={40} strokeWidth={1.2} />
              <p className="empty-title">No collections found</p>
              <p>Try a different category or search term.</p>
            </div>
          ) : (
            filtered.map((item) => <GalleryCard key={item.id} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
}