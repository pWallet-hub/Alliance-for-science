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

// ─── Gallery data ──────────────────────────────────────────────────────────
// Replace src/href values with your real image URLs and collection links.
const HERO_IMAGE = 'https://picsum.photos/seed/alliance-hero/1600/900';

const GALLERY_ITEMS = [
  { id: 1,  src: 'https://picsum.photos/seed/g1/800/600',  category: 'events',     title: 'Annual Conference 2024',    caption: 'Bringing scientists, farmers, and policymakers together for a day of talks and open dialogue.', href: '#', itemCount: 42, date: 'Mar 2024', tall: true },
  { id: 2,  src: 'https://picsum.photos/seed/g2/600/800',  category: 'team',       title: 'Team Building Day',         caption: 'A day off-site for the team to reconnect outside the lab and office.',                       href: '#', itemCount: 18, date: 'Feb 2024' },
  { id: 3,  src: 'https://picsum.photos/seed/g3/900/600',  category: 'activities', title: 'Community Outreach',        caption: 'On-the-ground engagement bringing science communication directly to local communities.',     href: '#', itemCount: 25, date: 'Jan 2024', tall: true },
  { id: 4,  src: 'https://picsum.photos/seed/g4/700/700',  category: 'events',     title: 'Year-End Celebration',      caption: 'Marking a year of progress with the people who made it happen.',                              href: '#', itemCount: 31, date: 'Dec 2023' },
  { id: 5,  src: 'https://picsum.photos/seed/g5/800/500',  category: 'activities', title: 'Sports Tournament',         caption: 'Friendly competition and team spirit at the annual sports day.',                              href: '#', itemCount: 20, date: 'Nov 2023' },
  { id: 6,  src: 'https://picsum.photos/seed/g6/600/900',  category: 'team',       title: 'New Members Welcome',       caption: 'Welcoming new colleagues into the fold with an orientation session.',                        href: '#', itemCount: 14, date: 'Oct 2023', tall: true },
  { id: 7,  src: 'https://picsum.photos/seed/g7/850/600',  category: 'events',     title: 'Workshop Series',           caption: 'Hands-on sessions building skills in science communication and advocacy.',                   href: '#', itemCount: 36, date: 'Sep 2023' },
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

// ─── Card ───────────────────────────────────────────────────────────────────
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

// ─── Page ───────────────────────────────────────────────────────────────────
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
          <img src={HERO_IMAGE} alt="Alliance for Science photo collections" />
        </div>

        <div className="gallery-hero__content">
          <p className="gallery-hero__eyebrow">Home &rsaquo; Gallery</p>
          <h1 className="gallery-hero__title">
            Photo <span>Collections</span>
          </h1>
          <p className="gallery-hero__sub">
            A visual record of our events, team milestones, and community work advancing science communication.
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