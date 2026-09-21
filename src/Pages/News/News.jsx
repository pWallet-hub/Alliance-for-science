import React, { useState, useEffect } from "react";
import {
  MapPin,
  Users,
  Mic2,
  Coffee,
  Calendar,
  ArrowUpRight,
  Leaf,
  Newspaper,
  Mail,
  User,
  MessageSquare,
  SendHorizonal,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Clock,
} from "lucide-react";
import "./News.css";

const HERO_IMAGE = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80";

const CATEGORY_ACCENTS = {
  "GMO & Policy": "#0C5088",
  "Crop Research": "#16324B",
  "Biotech Advocacy": "#2E9BF0",
  "Agri-Innovation": "#083A63",
};
const DEFAULT_ACCENT = "#16324B";

// Verified AfS-Rwanda and OFAB Rwanda news data
const afsRwandaNewsData = [
  {
    id: "1",
    date: "13 July, 2023",
    category: "GMO & Policy",
    title: "Rwanda Enacts Draft Biosafety Law to Regulate Agricultural Modernization",
    excerpt:
      "The Cabinet approved a comprehensive biosafety bill establishing the Rwanda Environment Management Authority (REMA) and a National Biosafety Committee to regulate GMO research, risk assessments, and environmental safety.",
    link: "https://www.newtimes.co.rw/article/9116/news/agriculture/rwanda-introduces-new-biosafety-bill-to-regulate-gmos",
    accent: CATEGORY_ACCENTS["GMO & Policy"],
    img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  },
  {
    id: "2",
    date: "10 August, 2023",
    category: "Crop Research",
    title: "RAB Rubona Station Advances Field Trials for Disease-Resistant Cassava",
    excerpt:
      "Researchers at RAB Rubona Station conduct confined field trials for genetically modified cassava resistant to Cassava Brown Streak Disease (CBSD), safeguarding food security for smallholder farmers across East Africa.",
    link: "https://africenter.isaaa.org/news/rwanda-approves-draft-biosafety-law",
    accent: CATEGORY_ACCENTS["Crop Research"],
    img: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&q=80",
  },
  {
    id: "3",
    date: "28 October, 2021",
    category: "Biotech Advocacy",
    title: "Rwanda Joins OFAB Expansion Network to Address Agricultural Misconceptions",
    excerpt:
      "Rwanda officially became the 8th African nation to launch a national Open Forum on Agricultural Biotechnology (OFAB) chapter, connecting local scientists with journalists, farmers, and policymakers.",
    link: "https://allianceforscience.org/blog/2021/10/rwanda-embraces-biotech-through-ofab-expansion/",
    accent: CATEGORY_ACCENTS["Biotech Advocacy"],
    img: "https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=800&q=80",
  },
  {
    id: "4",
    date: "04 September, 2026",
    category: "Agri-Innovation",
    title: "Kigali Summit Highlights Youth and Digital Technologies in Food Systems",
    excerpt:
      "RISA and Ministry of Agriculture leaders emphasize the key role of youth-led agritech innovation, digital skilling, and research commercialization to transform agricultural systems across the region.",
    link: "https://www.risa.gov.rw/news-detail/rwandas-youth-can-lead-africas-agri-food-revolution-says-risa-ceo-at-afs-forum-2026",
    accent: CATEGORY_ACCENTS["Agri-Innovation"],
    img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  },
];

const stats = [
  { Icon: MapPin, label: "RABP-CMP", sub: "Communication and documantation of project" },
  { Icon: Users, label: "OFAB Chapter", sub: "AATF & RAB Network" },
  { Icon: Mic2, label: "RMC", sub: "Science Communication" },
  { Icon: Coffee, label: "BioCap Rwanda", sub: "Biotech communication and stewardship" },
];

const TABS = ["All", "GMO & Policy", "Crop Research", "Biotech Advocacy", "Agri-Innovation"];

const CONTACT_DETAILS = [
  { Icon: Mail, label: "desk@ofabrwanda.org" },
  { Icon: MapPin, label: "Kigali, Rwanda" },
  { Icon: Clock, label: "Replies within 2 business days" },
];

export default function News() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [newsItems, setNewsItems] = useState(afsRwandaNewsData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchLiveNews() {
      try {
        const res = await fetch("/api/blogs/public");
        if (res.ok) {
          const data = await res.json();
          const blogs = data.data || data;
          if (Array.isArray(blogs) && blogs.length > 0) {
            const mapped = blogs.map((b) => ({
              id: b._id || b.slug,
              date: b.publishedAt
                ? new Date(b.publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Recently",
              category: b.tag || "Crop Research",
              title: b.title,
              excerpt: b.excerpt || "No summary provided.",
              link: `/Stewardship-News/${b.slug}`,
              accent: CATEGORY_ACCENTS[b.tag] || DEFAULT_ACCENT,
              img:
                b.img ||
                "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
            }));
            setNewsItems(mapped);
          }
        }
      } catch {
        // Fallback to static verified AfS-Rwanda data
      }
    }
    fetchLiveNews();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 800);
  };

  const filteredNews =
    activeTab === "All"
      ? newsItems
      : newsItems.filter((p) => p.category === activeTab);

  return (
    <div className="news-root">
      {/* ── HERO HEADER ── */}
      <section className="news-hero">
        <div className="news-hero__bg">
          <img src={HERO_IMAGE} alt="Agricultural biotechnology field research in Rwanda" />
        </div>

        <div className="news-hero-container">
          <p className="news-breadcrumb">Home &rsaquo; News</p>

          <div className="news-pill">
            <Leaf size={13} className="news-pill-icon" />
            <span>OFAB RWANDA — BIOTECH NEWS &amp; UPDATES</span>
          </div>

          <h1 className="news-hero-title">
            Stewardship News &amp; Insights
          </h1>

          <p className="news-hero-subtitle">
            Stay informed on the latest breakthroughs in agricultural biotechnology, 
            biosafety regulations, and sustainable food security in Rwanda and East Africa.
          </p>

          <div className="news-cta-group">
            <a href="#articles" className="news-btn news-btn-primary">
              <BookOpen size={15} /> Explore Articles
            </a>
            <a href="#contact" className="news-btn news-btn-outline">
              <Mail size={15} /> Contact
            </a>
          </div>
        </div>

        <div className="news-hero__wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,34.75V0Z"
              fill="#F4F9FE"
            />
          </svg>
        </div>

        {/* Stats Bar */}
        <div className="news-stats-wrapper">
          <div className="news-stats-bar">
            {stats.map((s) => (
              <div key={s.label} className="news-stat-item">
                <div className="news-stat-icon">
                  <s.Icon size={18} />
                </div>
                <div>
                  <div className="news-stat-label">{s.label}</div>
                  <div className="news-stat-sub">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="news-main-container">
        <div id="articles" className="news-section-header">
          <div className="news-section-title-wrap">
            <div className="news-accent-badge">
              <Newspaper size={18} />
            </div>
            <h2 className="news-section-title">Latest Updates &amp; Coverage</h2>
          </div>
          <p className="news-section-subtitle">
            Filter through research releases, policy briefs, and community advocacy stories.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="news-tabs-bar">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`news-tab-btn ${activeTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="news-cards-grid">
          {filteredNews.map((post) => {
            const isExternal = post.link.startsWith("http");
            return (
              <article key={post.id} className="news-card">
                <div className="news-card-media">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="news-card-img"
                    loading="lazy"
                  />
                  <div className="news-card-overlay" />
                  <span
                    className="news-card-category"
                    style={{ backgroundColor: post.accent }}
                  >
                    {post.category}
                  </span>
                  <span className="news-card-date">
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>

                <div className="news-card-content">
                  <h3 className="news-card-title">{post.title}</h3>
                  <p className="news-card-excerpt">{post.excerpt}</p>

                  <a
                    href={post.link}
                    target={isExternal ? "_blank" : "_self"}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="news-card-link"
                  >
                    Read Full Article <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {/* ── CONTACT SECTION (MATCHING IMAGE 2 EXACTLY) ── */}
      <section id="contact" className="news-contact-section">
        <div className="news-contact-glow news-contact-glow--a" />
        <div className="news-contact-glow news-contact-glow--b" />

        <div className="news-contact-container">
          
          {/* Centered Top Title & Pill */}
          <div className="news-contact-header">
            <div className="news-contact-pill">
              <Sparkles size={13} />
              <span>EDITORIAL &amp; COLLABORATION DESK</span>
            </div>
            <h2 className="news-contact-title">Get in touch with our team</h2>
          </div>

          {/* Grid Layout (Left Text/Cards + Right Form) */}
          <div className="news-contact-grid">
            
            {/* Left Column: Subtitle paragraph directly above contact cards */}
            <div className="news-contact-info">
              <p className="news-contact-subtitle">
                Have questions regarding biotechnology research, media partnerships, or
                stewardship events? Our communication officers are ready to help.
              </p>

              <ul className="news-contact-details">
                {CONTACT_DETAILS.map(({ Icon, label }) => (
                  <li key={label} className="news-contact-detail">
                    <span className="news-contact-detail__icon">
                      <Icon size={18} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Form Card */}
            <div className="news-contact-card">
              {submitted ? (
                <div className="news-contact-success">
                  <span className="news-contact-success__icon">
                    <CheckCircle2 size={32} />
                  </span>
                  <h3>Message received</h3>
                  <p>Thank you for reaching out. Our communication officer will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="news-contact-form">
                  <div className="news-field-group">
                    <label className="news-field-label">Full name</label>
                    <div className="news-field-wrap">
                      <User size={15} className="news-field-icon" />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Dr. Jean Paul"
                        className="news-field-input"
                      />
                    </div>
                  </div>

                  <div className="news-field-group">
                    <label className="news-field-label">Email address</label>
                    <div className="news-field-wrap">
                      <Mail size={15} className="news-field-icon" />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@institution.rw"
                        className="news-field-input"
                      />
                    </div>
                  </div>

                  <div className="news-field-group">
                    <label className="news-field-label">Message / inquiry</label>
                    <div className="news-field-wrap news-field-wrap--textarea">
                      <MessageSquare size={15} className="news-field-icon news-field-icon--top" />
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="How can we assist your research or media publication?"
                        className="news-field-input news-field-textarea"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="news-submit-btn"
                  >
                    <SendHorizonal size={15} />
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}