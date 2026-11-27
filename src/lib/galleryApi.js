/* ──────────────────────────────────────────────────────────────────────────
   galleryApi.js  (src/lib/galleryApi.js)

   The ONLY file that talks to the collections API. Uses `urls.preview`
   so every hero banner, card, grid item, and lightbox is crisp and sharp.
   ────────────────────────────────────────────────────────────────────────── */

const BASE = (import.meta.env.VITE_GALLERY_API_URL || '').replace(/\/$/, '');
const KEY = import.meta.env.VITE_GALLERY_API_KEY || '';

async function request(path, params = {}) {
  if (!BASE || !KEY) {
    throw new Error('Gallery API is not configured. Set VITE_GALLERY_API_URL and VITE_GALLERY_API_KEY.');
  }
  const url = new URL(`${BASE}${path}`, window.location.origin);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
  });
  const response = await fetch(url.toString(), {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${KEY}`,
    },
  });
  if (!response.ok) throw new Error(`Gallery API request failed (${response.status})`);
  return response.json();
}

export const galleryApi = {
  getWebsiteCollections: () => request('/collections'),
  getWebsiteCollection: (slug) => request(`/collections/${encodeURIComponent(slug)}`),
  getWebsiteCollectionMedia: (slug, params = {}) =>
    request(`/collections/${encodeURIComponent(slug)}/media`, params),
};

/* ── Response helpers ───────────────────────────────────────────────────── */
export const asRecord = (value) =>
  value && typeof value === 'object' && !Array.isArray(value) ? value : null;

export const getMediaRecords = (value) => {
  if (Array.isArray(value)) return value;
  const record = asRecord(value);
  for (const key of ['items', 'media', 'data', 'results']) {
    if (Array.isArray(record?.[key])) return record[key];
  }
  return [];
};

export const getMediaUrl = (value) => {
  if (typeof value === 'string') return value;
  const record = asRecord(value);
  const variants = asRecord(record?.variants);
  const urls = asRecord(record?.urls);
  return [
    urls?.preview,
    variants?.preview,
    record?.previewUrl,
    urls?.download,
    urls?.original,
    variants?.original,
    record?.originalUrl,
    record?.downloadUrl,
    record?.url,
    urls?.thumbnail,
  ].find((u) => typeof u === 'string' && u);
};

const MAX_ITEMS = 60;
const PAGE_SIZE = 25;
const idsOf = (m) =>
  [m.id, m._id, m.mediaId, m.publicId, m.referenceId, m.assetId]
    .filter((v) => typeof v === 'string' || typeof v === 'number')
    .map(String);

/** One collection -> extracts exact coverMediaId so we can load its high-res preview */
export async function loadCollection(slug) {
  const payload = asRecord(await galleryApi.getWebsiteCollection(slug));
  const c = asRecord(payload?.collection) || asRecord(payload?.item) || asRecord(payload?.data) || payload;
  if (!c) throw new Error('Collection was not found.');

  const rawCover =
    getMediaUrl(c.coverPreviewUrl) ||
    getMediaUrl(c.coverOriginalUrl) ||
    getMediaUrl(c.coverUrl) ||
    getMediaUrl(c.thumbnailUrl) ||
    getMediaUrl(c.thumbnail) ||
    '';

  const coverMediaId =
    c.coverMediaId ||
    c.coverId ||
    c.coverImageId ||
    rawCover.match(/\/media\/([^/?#]+)/)?.[1] ||
    '';

  /* Only keep rawCover immediately if it is NOT a tiny /thumbnail URL */
  const isLowResThumb = /\/thumbnail(?:[/?#]|$)/i.test(rawCover);

  return {
    id: String(c.id || slug),
    title: String(c.name || c.title || slug),
    caption: String(c.description || c.caption || ''),
    category: typeof c.category === 'string' ? c.category : '',
    cover: isLowResThumb ? '' : rawCover,
    fallbackThumb: rawCover,
    coverMediaId: String(coverMediaId || ''),
    coverIds: [c.coverMediaId, c.coverId, c.coverImageId, coverMediaId].filter(Boolean).map(String),
    createdAt: c.createdAt || c.updatedAt || '',
  };
}

/** All photos/videos of a collection (high-res `preview` variant) */
export async function loadCollectionMedia(slug, collection) {
  const records = [];
  const seen = new Set();

  for (let page = 1; records.length < MAX_ITEMS; page += 1) {
    const pageRecords = getMediaRecords(await galleryApi.getWebsiteCollectionMedia(slug, { page }))
      .map(asRecord)
      .filter(Boolean);
    let added = 0;
    for (const m of pageRecords) {
      const ids = idsOf(m);
      const key = ids.length ? `id:${ids[0]}` : `url:${getMediaUrl(m) || JSON.stringify(m)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      records.push(m);
      added += 1;
      if (records.length >= MAX_ITEMS) break;
    }
    if (pageRecords.length < PAGE_SIZE || added === 0) break;
  }

  const coverIds = [...(collection.coverIds || [])];
  if (collection.coverMediaId && !coverIds.includes(collection.coverMediaId)) {
    coverIds.push(collection.coverMediaId);
  }

  return records.flatMap((m, index) => {
    const variants = asRecord(m.variants);
    const urls = asRecord(m.urls);
    const nested = asRecord(m.media);
    const itemIds = idsOf(m);

    const isCover =
      m.isCover === true ||
      m.isSelectedCover === true ||
      coverIds.some((id) => itemIds.includes(String(id)));

    const rawFileName = [
      m.originalName,
      m.fileName,
      m.filename,
      m.name,
      nested?.originalName,
      nested?.fileName,
      nested?.name,
    ].find((v) => typeof v === 'string' && v.trim());
    const cleanFileName = rawFileName ? rawFileName.replace(/\.[^/.]+$/, '') : '';

    const typeText = [m.mediaType, m.type, m.mimeType, m.contentType, m.fileType]
      .filter((v) => typeof v === 'string')
      .join(' ')
      .toLowerCase();

    /* Exact same crisp preview resolution order that Gallery.jsx uses */
    const previewCandidate = [
      urls?.preview,
      variants?.preview,
      m.previewUrl,
      nested?.previewUrl,
      urls?.download,
      urls?.original,
      variants?.original,
      m.originalUrl,
      m.downloadUrl,
      m.fileUrl,
      m.mediaUrl,
      nested?.url,
      m.url,
      m.thumbnailUrl,
      urls?.thumbnail,
    ].find((u) => typeof u === 'string' && u);

    const videoSource = getMediaUrl(
      m.videoUrl || urls?.download || urls?.original || variants?.original || m.originalUrl || previewCandidate
    );
    const isVideo =
      typeText.includes('video') ||
      /\.(mp4|mov|webm|m4v)(?:[?#]|$)/i.test(videoSource || '') ||
      /\.(mp4|mov|webm|m4v)$/i.test(rawFileName || '');

    const resolvedPreview = getMediaUrl(previewCandidate);
    if (!resolvedPreview) return [];

    const id = String(m.id || m._id || m.mediaId || index);
    const displayName =
      [m.title, m.caption, cleanFileName, nested?.title].find(
        (v) => typeof v === 'string' && v.trim()
      ) || `IMG_${String(index + 1).padStart(4, '0')}`;

    return [
      {
        id,
        url: resolvedPreview,
        previewUrl: resolvedPreview,
        mediaType: isVideo ? 'video' : 'image',
        videoUrl: isVideo ? videoSource : undefined,
        thumbnailUrl: isVideo ? resolvedPreview : undefined,
        isCover,
        name: displayName,
        caption:
          typeof m.title === 'string'
            ? m.title
            : typeof m.caption === 'string'
              ? m.caption
              : cleanFileName || null,
      },
    ];
  });
}