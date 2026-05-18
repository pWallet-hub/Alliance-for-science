import { useState } from "react";
import {
  MapPin, Users, Mic2, Coffee, Calendar, ArrowUpRight,
  Leaf, Newspaper, Mail, User, MessageSquare, SendHorizonal,
  CheckCircle2, BookOpen,
} from "lucide-react";
import "./News.css";

const newsData = [
  {
    id: 1,
    date: "24 July, 2024",
    category: "GMO & Policy",
    title: "Feeding 9 Billion: Rwanda's GMO Push Through Biosafety and Media Training",
    excerpt:
      "The global population, set to reach 9 billion, demands varied farming, including GMOs, for sustainable food security. Rwanda's Biosafety Law and a media workshop by @OfabRwanda, @ScienceAlly, and @RMC_Rwanda promote GMOs' benefits like higher yields and reduced pesticide use.",
    link: "https://x.com/AlexisNyandwi12/status/1922208195281330600",
    accent: "#1DB575",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  },
  {
    id: 2,
    date: "24 July, 2024",
    category: "Crop Research",
    title: "Fighting Cassava Diseases: RAB Rubona Station's Quest for Resilient Crops",
    excerpt:
      "Ever wondered how we can make our crops more resilient? Researchers at RAB Rubona station are tackling Cassava Brown Streak Disease (kabore), developing new cassava varieties that can withstand disease pressure and secure food supply for millions.",
    link: "https://x.com/UwimpuhweAnne/status/1923857158547849688",
    accent: "#3B82F6",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  },
  {
    id: 3,
    date: "24 July, 2024",
    category: "Biotech Advocacy",
    title: "Empowering African Farmers: Dr. Sylvester Oikeh Advocates for Biotech Choices",
    excerpt:
      "\"We see technology that can benefit, yet farmers are being deprived of this technology. Let African farmers have choices on what to grow.\" — Nigerian scientist Dr. Sylvester Oikeh champions biotech access across the continent.",
    link: "https://x.com/ScienceAlly/status/1922219519373648187",
    accent: "#F59E0B",
    img: "https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=600&q=80",
  },
];

const stats = [
  { Icon: MapPin, color: "#0ea5a0", label: "Rwanda", sub: "East Africa Hub" },
  { Icon: Users, color: "#1a5fb4", label: "12+ Partners", sub: "Research & Media" },
  { Icon: Mic2, color: "#5e35b1", label: "25+ Speakers", sub: "Global Scientists" },
  { Icon: Coffee, color: "#f97316", label: "Community", sub: "Engaged Network" },
];

const TABS = ["All", "GMO & Policy", "Crop Research", "Biotech Advocacy"];

export default function News() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const filteredNews =
    activeTab === "All"
      ? newsData
      : newsData.filter((p) => p.category === activeTab);

  return (
    <div className="news-root">

      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-circle hero-circle--top-right" />
        <div className="hero-circle hero-circle--bottom-left" />
        <div className="hero-circle hero-circle--mid" />

        <div className="hero-pill">
          <Leaf size={14} /> OFAB RWANDA — BIOTECH NEWS &amp; UPDATES
        </div>

        <h1 className="hero-title">News &amp; Viewer</h1>

        <p className="hero-subtitle">
          Stay informed on the latest in biotechnology, food security, and
          agricultural innovation in Rwanda and Africa.
        </p>

        <div className="hero-cta-group">
          <a href="#news" className="btn btn--orange">
            <BookOpen size={16} /> READ ARTICLES
          </a>
          <a href="#contact" className="btn btn--ghost">
            <Mail size={16} /> GET IN TOUCH
          </a>
        </div>

        {/* Stats bar */}
        <div className="stats-bar">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div
                className="stat-icon"
                style={{ background: s.color + "18" }}
              >
                <s.Icon size={20} color={s.color} />
              </div>
              <div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* spacer for stats bar */}
      <div className="stats-spacer" />

      {/* ── SECTION HEADER ── */}
      <div id="news" className="section-header">
        <div className="section-title-row">
          <div className="section-accent-bar" />
          <Newspaper size={22} color="#1a237e" />
          <h2 className="section-title">Upcoming Events</h2>
        </div>
        <p className="section-subtitle">
          Explore the latest news, research updates, and advocacy highlights
          from OFAB Rwanda and partners.
        </p>
      </div>

      {/* ── TABS ── */}
      <div className="tabs-row">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-btn${activeTab === tab ? " tab-btn--active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── NEWS CARDS ── */}
      <div className="cards-grid">
        {filteredNews.map((post) => (
          <div
            key={post.id}
            onMouseEnter={() => setHoveredCard(post.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`card${hoveredCard === post.id ? " card--hovered" : ""}`}
          >
            {/* Card image */}
            <div className="card-img-wrap">
              <img
                src={post.img}
                alt={post.title}
                className={`card-img${hoveredCard === post.id ? " card-img--zoomed" : ""}`}
              />
              <div className="card-img-overlay" />
              <span
                className="card-category"
                style={{ background: post.accent }}
              >
                {post.category}
              </span>
              <span className="card-date">
                <Calendar size={12} /> {post.date}
              </span>
            </div>

            {/* Card body */}
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              <p className="card-excerpt">{post.excerpt}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Read more on X <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ── CONTACT FORM ── */}
      <div id="contact" className="contact-section">
        <div className="contact-circle contact-circle--top" />
        <div className="contact-circle contact-circle--bottom" />

        <div className="contact-inner">
          <div className="contact-header">
            <div className="contact-pill">
              <Mail size={13} /> GET IN TOUCH
            </div>
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">
              Have questions about our research or want to collaborate? We'd
              love to hear from you.
            </p>
          </div>

          <div className="contact-card">
            {submitted ? (
              <div className="contact-success">
                <CheckCircle2 size={52} color="#0ea5a0" />
                <h3>Message Sent!</h3>
                <p>We'll get back to you shortly.</p>
              </div>
            ) : (
              <div className="contact-form">
                <div className="field">
                  <label className="field-label">
                    <User size={14} color="#1a5fb4" /> Full Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="field-input"
                  />
                </div>

                <div className="field">
                  <label className="field-label">
                    <Mail size={14} color="#1a5fb4" /> Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="field-input"
                  />
                </div>

                <div className="field">
                  <label className="field-label">
                    <MessageSquare size={14} color="#1a5fb4" /> Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="How can we help you?"
                    rows={5}
                    className="field-input field-textarea"
                  />
                </div>

                <button onClick={handleSubmit} className="submit-btn">
                  <SendHorizonal size={16} /> Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}