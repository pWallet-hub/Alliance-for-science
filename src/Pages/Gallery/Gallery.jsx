import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Images, FolderOpen, ArrowUpRight, Loader2 } from 'lucide-react';
import './Gallery.css';
import { galleryApi, getMediaRecords, asRecord } from '../../lib/galleryApi';

import bgHeroImg from '../../assets/image/bg-image.jpg';

const fmtDate = (value) => {
  const d = value ? new Date(value) : null;
  return d && !Number.isNaN(d.getTime())
    ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })
    : '';
};
const titleCase = (s) => s.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

function CollectionCard({ item }) {
  const [coverSrc, setCoverSrc] = useState(item.cover);
  const [count, setCount] = useState(item.itemCount);
  const ref = useRef(null);

  useEffect(() => {
    let current = true;
    let observer;

    const upgradeCover = async () => {
      try {
        const res = await galleryApi.getWebsiteCollectionMedia(item.slug);
        const records = getMediaRecords(res).map(asRecord).filter(Boolean);
        const cover = records.find((r) => String(r.id || r._id || '') === item.coverMediaId) || records[0];
        const urls = asRecord(cover?.urls);
        const preview = [urls?.preview, urls?.download, urls?.thumbnail].find((u) => typeof u === 'string' && u);
        if (current) {
          if (preview) setCoverSrc(preview);
          const total =
            res?.total ??
            res?.totalItems ??
            res?.count ??
            res?.pagination?.total ??
            res?.pagination?.totalItems ??
            res?.meta?.total ??
            records.length;
          const resolvedCount = Number(total) || records.length;
          if (resolvedCount > 0) setCount(resolvedCount);
        }
      } catch { /* keep the small thumbnail */ }
    };

    if (ref.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) { observer.disconnect(); upgradeCover(); }
      }, { rootMargin: '200px' });
      observer.observe(ref.current);
    } else {
      upgradeCover();
    }
    return () => { current = false; observer?.disconnect(); };
  }, [item.slug, item.coverMediaId]);

  return (
    <Link ref={ref} to={`/gallery/${item.slug}`} className="gallery-card" aria-label={`Open ${item.title}`}>
      <div className="gallery-card__img-wrap">
        {coverSrc ? (
          <img src={coverSrc} alt={item.title} className="gallery-card__img" loading="lazy" />
        ) : (
          <div className="gallery-card__empty"><Images size={22} strokeWidth={1.5} /> No cover image</div>
        )}
      </div>

      <div className="gallery-card__overlay">
        <div className="gallery-card__info">
          <p className="gallery-card__title">{item.title}</p>
          <div className="gallery-card__meta">
            <span className="gallery-card__count"><FolderOpen size={11} />{count} {count === 1 ? 'item' : 'items'}</span>
            {item.date && (<><span className="gallery-card__dot" /><span className="gallery-card__date">{item.date}</span></>)}
          </div>
        </div>
      </div>

      <div className="gallery-card__link-icon"><ArrowUpRight size={14} /></div>
      {item.categoryLabel && <div className="gallery-card__pill">{item.categoryLabel}</div>}
    </Link>
  );
}

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let current = true;
    (async () => {
      try {
        const response = await galleryApi.getWebsiteCollections();
        if (!current) return;
        const list = (response.items || getMediaRecords(response))
          .filter((c) => !c.status || c.status === 'published')
          .map((c) => ({
            id: c.id || c.slug,
            slug: c.slug,
            title: c.name || c.title || c.slug,
            caption: c.description || '',
            category: typeof c.category === 'string' && c.category ? c.category : '',
            categoryLabel: typeof c.category === 'string' && c.category ? titleCase(c.category) : '',
            cover: c.coverUrl || '',
            coverMediaId: c.coverUrl?.match(/\/media\/([^/]+)\/thumbnail/)?.[1],
            itemCount: c.itemCount ?? c.mediaCount ?? c.totalItems ?? c.count ?? c._count?.media ?? c._count?.items ?? 0,
            date: fmtDate(c.updatedAt || c.createdAt),
          }));
        setItems(list);
      } catch (e) {
        console.error(e);
        if (current) setError('The photo collections could not be loaded right now. Please try again later.');
      } finally {
        if (current) setLoading(false);
      }
    })();
    return () => { current = false; };
  }, []);

  const categories = useMemo(() => {
    const keys = [...new Set(items.map((i) => i.category).filter(Boolean))];
    return keys.length > 1 ? keys : [];
  }, [items]);

  const filtered = items.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.toLowerCase();
    return matchCat && (!q || item.title.toLowerCase().includes(q) || item.caption.toLowerCase().includes(q));
  });

  return (
    <div className="gallery-page">
      {/* ── Hero ── */}
      <section className="gallery-hero">
        <div className="gallery-hero__bg">
          <img src={bgHeroImg} alt="Alliance for Science photo collections" />
        </div>

        <div className="gallery-hero__content">
          <p className="gallery-hero__eyebrow">Home › Gallery</p>
          <h1 className="gallery-hero__title">Photo <span>Collections</span></h1>
          <p className="gallery-hero__sub">
            A visual record of our research field trials, team milestones, and community work advancing agricultural science in Rwanda.
          </p>
          <div className="gallery-hero__count"><Images size={13} /> {items.length} collections</div>
        </div>

        <div className="gallery-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,34.75V0Z" fill="#F4F9FE" />
          </svg>
        </div>
      </section>

      {/* ── Controls ── */}
      <div className="gallery-controls">
        <div className="filter-tabs">
          {categories.length > 0 && (
            <>
              <button className={`filter-tab${activeCategory === 'all' ? ' active' : ''}`} onClick={() => setActiveCategory('all')}>
                <Images size={13} /> All Collections <span className="filter-tab__count">{items.length}</span>
              </button>
              {categories.map((key) => (
                <button key={key} className={`filter-tab${activeCategory === key ? ' active' : ''}`} onClick={() => setActiveCategory(key)}>
                  {titleCase(key)} <span className="filter-tab__count">{items.filter((i) => i.category === key).length}</span>
                </button>
              ))}
            </>
          )}
        </div>
        <div className="search-wrap">
          <Search size={15} className="search-icon" />
          <input type="text" className="search-input" placeholder="Search collections…" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
      </div>

      <p className="results-meta">Showing <span>{filtered.length}</span> of {items.length} collections</p>

      {/* ── Grid ── */}
      <div className="gallery-grid-wrap">
        {loading ? (
          <div className="empty-state"><Loader2 className="spin" size={30} /><p>Loading collections…</p></div>
        ) : error ? (
          <div className="empty-state"><Images size={40} strokeWidth={1.2} /><p className="empty-title">Something went wrong</p><p>{error}</p></div>
        ) : (
          <div className="gallery-grid">
            {filtered.length === 0 ? (
              <div className="empty-state">
                <Images size={40} strokeWidth={1.2} />
                <p className="empty-title">No collections found</p>
                <p>Try a different category or search term.</p>
              </div>
            ) : (
              filtered.map((item) => <CollectionCard key={item.id} item={item} />)
            )}
          </div>
        )}
      </div>
    </div>
  );
}