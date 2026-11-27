import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Images, Loader2, Play, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './CollectionDetail.css';
import { loadCollection, loadCollectionMedia } from '../../lib/galleryApi';

export default function CollectionDetail() {
  const { slug } = useParams();
  const [collection, setCollection] = useState(null);
  const [media, setMedia] = useState([]);
  const [heroCover, setHeroCover] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    let current = true;
    setLoading(true);
    setError('');
    setHeroCover('');

    (async () => {
      try {
        const col = await loadCollection(slug);
        if (!current) return;
        setCollection(col);
        if (col.cover) setHeroCover(col.cover);

        const items = await loadCollectionMedia(slug, col);
        if (!current) return;
        setMedia(items);

        /* First choice: the exact cover image set on this collection (in sharp preview quality) */
        const chosenCover = items.find((i) => i.isCover) || items[0];
        if (chosenCover?.url) {
          setHeroCover(chosenCover.url);
        } else if (col.fallbackThumb) {
          setHeroCover(col.fallbackThumb);
        }
      } catch (e) {
        console.error(e);
        if (current) setError('Could not load photos for this collection.');
      } finally {
        if (current) setLoading(false);
      }
    })();

    return () => {
      current = false;
    };
  }, [slug]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % media.length);
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + media.length) % media.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, media.length]);

  const activeItem = activeIndex !== null ? media[activeIndex] : null;
  const collectionTitle = collection?.title || slug;

  return (
    <div className="gallery-page gallery-page--detail">
      {/* ── Hero Banner (defaults to blank green backdrop until cover resolves) ── */}
      <section className="gallery-hero" style={{ backgroundColor: '#1f4d2b' }}>
        <div className="gallery-hero__bg">
          {heroCover && (
            <img
              src={heroCover}
              alt={collectionTitle}
              onError={() => setHeroCover('')}
            />
          )}
        </div>

        <div className="gallery-hero__content">
          <p className="gallery-hero__eyebrow">
            <Link to="/gallery" className="gallery-hero__back-link">
              Home › Our Gallery
            </Link>
          </p>
          <h1 className="gallery-hero__title">
            {collection?.title || 'Loading Collection…'}
          </h1>
          {collection?.caption && (
            <p className="gallery-hero__sub">{collection.caption}</p>
          )}
          <div className="gallery-hero__count">
            <Images size={13} /> {media.length} {media.length === 1 ? 'item' : 'items'}
          </div>
        </div>
      </section>

      {/* ── Back Bar ── */}
      <div className="gallery-controls">
        <Link to="/gallery" className="filter-tab active">
          <ArrowLeft size={14} /> All Collections
        </Link>
      </div>

      {/* ── 6-Column Media Grid ── */}
      <div className="detail-grid-wrap">
        {loading ? (
          <div className="empty-state">
            <Loader2 className="spin" size={30} />
            <p>Loading photos…</p>
          </div>
        ) : error ? (
          <div className="empty-state">
            <Images size={40} strokeWidth={1.2} />
            <p className="empty-title">Something went wrong</p>
            <p>{error}</p>
          </div>
        ) : media.length === 0 ? (
          <div className="empty-state">
            <Images size={40} strokeWidth={1.2} />
            <p className="empty-title">No photos in this collection yet</p>
          </div>
        ) : (
          <div className="detail-grid">
            {media.map((item, idx) => {
              const imageName = item.name || item.caption || `IMG_${String(idx + 1).padStart(4, '0')}`;

              return (
                <div
                  key={item.id}
                  className="detail-item"
                  onClick={() => setActiveIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveIndex(idx)}
                >
                  <div className="detail-item__thumb">
                    <img
                      src={item.url}
                      alt={imageName}
                      className="detail-item__img"
                      loading="lazy"
                    />
                    <span className="detail-item__expand" aria-hidden="true">
                      <Maximize2 size={13} />
                    </span>
                    {item.mediaType === 'video' && (
                      <span className="detail-item__video-badge">
                        <Play size={10} /> Video
                      </span>
                    )}
                  </div>

                  <div className="detail-item__meta">
                    <p className="detail-item__title" title={imageName}>
                      {imageName}
                    </p>
                    <p className="detail-item__subtitle" title={collectionTitle}>
                      {collectionTitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Lightbox Modal ── */}
      {activeItem && (
        <div className="gallery-lightbox" onClick={() => setActiveIndex(null)}>
          <button
            className="gallery-lightbox__close"
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {media.length > 1 && (
            <>
              <button
                className="gallery-lightbox__nav gallery-lightbox__nav--prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((activeIndex - 1 + media.length) % media.length);
                }}
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="gallery-lightbox__nav gallery-lightbox__nav--next"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((activeIndex + 1) % media.length);
                }}
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div
            className="gallery-lightbox__stage"
            onClick={(e) => e.stopPropagation()}
          >
            {activeItem.mediaType === 'video' ? (
              <video
                src={activeItem.videoUrl || activeItem.url}
                controls
                autoPlay
                className="gallery-lightbox__media"
              />
            ) : (
              <img
                src={activeItem.url}
                alt={activeItem.name || ''}
                className="gallery-lightbox__media"
              />
            )}
            <p className="gallery-lightbox__caption">
              <strong>{activeItem.name}</strong> — {collectionTitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}