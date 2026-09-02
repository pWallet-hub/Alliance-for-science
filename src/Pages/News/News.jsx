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
} from "lucide-react";
import "./News.css";

// Fallback curated news data
const fallbackNewsData = [
  {
    id: "1",
    date: "24 July, 2024",
    category: "GMO & Policy",
    title: "Feeding 9 Billion: Rwanda's GMO Push Through Biosafety and Media Training",
    excerpt:
      "The global population, set to reach 9 billion, demands varied farming, including GMOs, for sustainable food security. Rwanda's Biosafety Law and a media workshop by OFAB Rwanda and partner institutions promote GMO benefits like higher yields and reduced pesticide use.",
    link: "https://x.com/AlexisNyandwi12/status/1922208195281330600",
    accent: "#3F6B4F",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  },
  {
    id: "2",
    date: "24 July, 2024",
    category: "Crop Research",
    title: "Fighting Cassava Diseases: RAB Rubona Station's Quest for Resilient Crops",
    excerpt:
      "Ever wondered how we can make our crops more resilient? Researchers at RAB Rubona station are tackling Cassava Brown Streak Disease, developing new cassava varieties that can withstand disease pressure and secure food supply for millions.",
    link: "https://x.com/UwimpuhweAnne/status/1923857158547849688",
    accent: "#1E2620",
    img: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&q=80",
  },
  {
    id: "3",
    date: "24 July, 2024",
    category: "Biotech Advocacy",
    title: "Empowering African Farmers: Dr. Sylvester Oikeh Advocates for Biotech Choices",
    excerpt:
      '"We see technology that can benefit, yet farmers are being deprived of this technology. Let African farmers have choices on what to grow." — Nigerian scientist Dr. Sylvester Oikeh champions biotech access across the continent.',
    link: "https://x.com/ScienceAlly/status/1922219519373648187",
    accent: "#A9812F",
    img: "https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=800&q=80",
  },
];

const stats = [
  { Icon: MapPin, label: "Rwanda Hub", sub: "East Africa Center" },
  { Icon: Users, label: "12+ Partners", sub: "Research & Media" },
  { Icon: Mic2, label: "25+ Speakers", sub: "Global Scientists" },
  { Icon: Coffee, label: "Community", sub: "Engaged Network" },
];

const TABS = ["All", "GMO & Policy", "Crop Research", "Biotech Advocacy"];

export default function News() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [newsItems, setNewsItems] = useState(fallbackNewsData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch live published stories from API with standard JS syntax
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
              accent:
                b.tag === "GMO & Policy"
                  ? "#3F6B4F"
                  : b.tag === "Biotech Advocacy"
                  ? "#A9812F"
                  : "#1E2620",
              img:
                b.img ||
                "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
            }));
            setNewsItems(mapped);
          }
        }
      } catch {
        // Fallback to static data if route is unreachable
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
        <div className="news-hero-container">
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
              <Mail size={15} /> Contact Desk
            </a>
          </div>
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
        {/* Section Header */}
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
          {filteredNews.map((post) => (
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
                  target={post.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="news-card-link"
                >
                  Read Full Article <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* ── CONTACT SECTION ── */}
      <section id="contact" className="news-contact-section">
        <div className="news-contact-container">
          <div className="news-contact-header">
            <div className="news-contact-pill">
              <Sparkles size={13} />
              <span>EDITORIAL &amp; COLLABORATION DESK</span>
            </div>
            <h2 className="news-contact-title">Get in Touch with Our Team</h2>
            <p className="news-contact-subtitle">
              Have questions regarding biotechnology research, media partnerships, or stewardship events?
            </p>
          </div>

          <div className="news-contact-card">
            {submitted ? (
              <div className="news-contact-success">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Message Received</h3>
                <p>Thank you for reaching out. Our communication officer will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="news-contact-form">
                <div className="news-field-group">
                  <label className="news-field-label">
                    <User size={13} /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Dr. Jean Paul"
                    className="news-field-input"
                  />
                </div>

                <div className="news-field-group">
                  <label className="news-field-label">
                    <Mail size={13} /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@institution.rw"
                    className="news-field-input"
                  />
                </div>

                <div className="news-field-group">
                  <label className="news-field-label">
                    <MessageSquare size={13} /> Message / Inquiry *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we assist your research or media publication?"
                    className="news-field-input news-field-textarea"
                  />
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
      </section>
    </div>
  );
}