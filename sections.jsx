// sections.jsx — Section components for Nate Lin's portfolio.
// All components attached to window at the end so app.jsx can use them.

// ─────────────────────────────────────────────────────────────────
// Icons (inline SVG — minimal, geometric)
// ─────────────────────────────────────────────────────────────────
const Icon = {
  Arrow: ({ className = "" }) =>
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
    </svg>,

  Download: ({ className = "" }) =>
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v12" /><path d="M7 11l5 5 5-5" /><path d="M5 20h14" />
    </svg>,

  Mail: ({ className = "" }) =>
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" />
    </svg>,

  LinkedIn: ({ className = "" }) =>
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zM10 9.5h3.8v1.55h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V20.5h-4v-4.85c0-1.16-.02-2.66-1.62-2.66-1.62 0-1.87 1.27-1.87 2.58v4.93H10v-11z" />
    </svg>,

  Instagram: ({ className = "" }) =>
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>,

  Spark: ({ className = "" }) =>
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>,

  Bar: ({ className = "" }) =>
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-8" /><path d="M22 20H2" />
    </svg>,

  Cog: ({ className = "" }) =>
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>,

  Trophy: ({ className = "" }) =>
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 21h8" /><path d="M12 17v4" />
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
      <path d="M17 6h2a2 2 0 0 1 2 2v0a4 4 0 0 1-4 4" />
      <path d="M7 6H5a2 2 0 0 0-2 2v0a4 4 0 0 0 4 4" />
    </svg>,

  Dot: ({ className = "" }) =>
  <svg viewBox="0 0 8 8" className={className} aria-hidden="true">
      <circle cx="4" cy="4" r="3" fill="currentColor" style={{ fill: "rgb(0, 0, 0)" }} />
    </svg>

};

// ─────────────────────────────────────────────────────────────────
// Reveal-on-scroll wrapper
// ─────────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "", as: As = "div" }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add("is-in");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  return <As ref={ref} className={`reveal${delayClass} ${className}`}>{children}</As>;
}

// ─────────────────────────────────────────────────────────────────
// Section header with mono eyebrow + serif title
// ─────────────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, kicker, align = "left" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <div className="eyebrow flex items-center gap-2">
          <Icon.Dot className="w-1.5 h-1.5" />
          <span>{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="display-serif text-5xl md:text-6xl mt-5 text-paper-100">{title}</h2>
      </Reveal>
      {kicker &&
      <Reveal delay={2}>
          <p className="mt-5 text-mute-400 text-base md:text-lg max-w-2xl leading-relaxed">{kicker}</p>
        </Reveal>
      }
    </div>);

}

// ─────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("hero");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const ids = ["about", "experience", "projects", "skills", "contact"];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { threshold: 0.3 });
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }];


  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      scrolled ? "backdrop-blur-md bg-ink-900/70 border-b border-white/[0.06]" : ""}`
      }>

      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="w-8 h-8 rounded-full grid place-items-center text-lg font-semibold" style={{ background: "var(--accent)", color: "var(--accent-ink, #0b0d12)" }}>N</span>
          <div className="leading-tight">
            <div className="text-sm font-medium text-paper-100">Nathaniel Richard Lin</div>
            <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-mute-500 -mt-px"></div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {items.map((it) =>
          <a key={it.id} href={`#${it.id}`} className={`nav-link ${active === it.id ? "active" : ""}`}>
              {it.label}
            </a>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn btn-primary hidden sm:inline-flex h-10 px-5 text-[13px]">
            <Icon.Mail className="w-4 h-4" />
            Get in touch
          </a>
          <button onClick={() => setOpen((v) => !v)} className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-white/10" aria-label="Menu">
            <span className="block w-4 h-px bg-paper-100 relative before:content-[''] before:absolute before:left-0 before:-top-1.5 before:w-4 before:h-px before:bg-paper-100 after:content-[''] after:absolute after:left-0 after:top-1.5 after:w-4 after:h-px after:bg-paper-100" />
          </button>
        </div>
      </div>
      {open &&
      <div className="md:hidden border-t border-white/5 bg-ink-900/95 backdrop-blur-md">
          <div className="px-6 py-4 grid gap-3">
            {items.map((it) =>
          <a key={it.id} href={`#${it.id}`} className="nav-link" onClick={() => setOpen(false)}>
                {it.label}
              </a>
          )}
          </div>
        </div>
      }
    </header>);

}

// ─────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Atmospheric background — cool ambient glow around the portrait,
                     dark vignette on the left for text legibility, faint grid + grain.
                     All layers fade via --atmos as the user scrolls into Experience. */}
      <div className="hero-aurora" />
      <div className="hero-edge" />
      <div
        className="bg-grid absolute inset-0 pointer-events-none"
        style={{ opacity: "calc(0.35 * var(--atmos, 1))", transition: "opacity 0.2s linear", zIndex: 2 }} />
      <div className="hero-noise" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28" style={{ fontFamily: "\"Geist Mono\"" }}>
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left: copy */}
          <div className="md:col-span-7">
            <Reveal>
              <div className="eyebrow flex items-center gap-3">
                <Icon.Dot className="w-1.5 h-1.5" />
                <span></span>
                <span className="opacity-40"></span>
                <span></span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="display-serif mt-8 text-[14vw] sm:text-[11vw] md:text-[6.6vw] lg:text-[102px] leading-[0.92]">
                Nate Lin.
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-[0.18em] uppercase">
                <span style={{ color: "var(--accent)" }}>FINANCE-DRIVEN</span>
                <span className="text-mute-500">/</span>
                <span className="text-paper-100/75">OPERATOR-MINDED</span>
                <span className="text-mute-500">/</span>
                <span className="text-paper-100/75">EXECUTION-ORIENTED</span>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 text-base md:text-lg max-w-xl leading-relaxed text-mute-400">
                I'm a finance-focused analyst with experience in <span className="text-paper-100 font-medium">FinTech reporting, expense analysis, and cross-functional operations</span> — bringing an operator's mindset to FP&amp;A, business analysis, and internal finance. Currently a Business Analyst at <span className="text-paper-100 font-medium">Trovata</span>.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#experience" className="btn btn-primary">
                  View experience
                  <Icon.Arrow className="w-4 h-4" />
                </a>
                <a href="#projects" className="btn btn-ghost">View projects</a>
                <a href="#contact" className="btn btn-ghost">Contact me</a>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-14 grid grid-cols-3 gap-6 max-w-md text-mute-400">
                <div>
                  <div className="display-serif text-4xl text-paper-100"></div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.15em] mt-1"></div>
                </div>
                <div>
                  <div className="display-serif text-4xl text-paper-100"></div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.15em] mt-1"></div>
                </div>
                <div>
                  <div className="display-serif text-4xl text-paper-100"></div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.15em] mt-1"></div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: portrait card */}
          <div className="md:col-span-5 relative">
            <Reveal delay={2}>
              <div className="hero-portrait-card relative aspect-[4/5] rounded-[28px] overflow-hidden border border-white/10 max-w-[340px] ml-auto" style={{ transform: "translateX(-20%)" }}>
                <img src="media/portrait-v3.png" alt="Nate Lin" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.45))" }} />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Marquee of disciplines */}
        <div className="mt-20 md:mt-28 overflow-hidden -mx-6 md:-mx-10 border-y border-white/[0.06] py-5" style={{ opacity: "1" }}>
          <div className="marquee-track">
            {Array.from({ length: 2 }).flatMap((_, j) => [
            "FP&A", "Financial Reporting", "Expense Analysis", "Forecasting", "Excel Modeling", "Salesforce", "Variance Analysis", "Month-End Close", "Cross-Functional Ops", "Bilingual EN · 中文"].
            map((w, i) =>
            <span key={`${j}-${i}`} className="display-serif text-2xl md:text-3xl tracking-tight text-paper-100/55">
                {w}
                <span className="ml-12 opacity-60" style={{ color: "var(--accent)" }}>—</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <SectionHeader eyebrow="01 · About" title={<>The short<br /><em>version.</em></>} />
            <Reveal delay={3}>
              <div className="mt-10 relative aspect-[3/4] max-w-sm rounded-2xl overflow-hidden border border-white/10">
                <img src="media/bench-v2.jpg" alt="Nate Lin, portrait" className="absolute inset-0 w-full h-full object-cover" style={{ objectFit: "cover" }} />
                <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-white/85" style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.55))" }}>
                  <span></span>
                  <span style={{ color: "var(--accent)" }}>NL · 02</span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={1}>
              <p className="text-2xl md:text-[28px] leading-[1.35] text-paper-100 font-light">
                I'm a <span style={{ color: "var(--accent)" }}>finance-focused analyst</span> building toward FP&amp;A and business analyst roles — with operations experience that sharpens how I execute.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-7 text-mute-400 text-base md:text-lg leading-relaxed max-w-2xl">I'm detail-oriented, adaptable, and energized by work that combines numbers, systems, people, and execution. Most of my week is spent reconciling and analyzing expense data inside a FinTech finance team. Most of my game nights are spent moving quickly behind the scenes of an NBA arena. Both environments reward the same things — precision, composure, adaptability, and the ability to read the room.

              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-2xl">
                {[
                ["B.S.", "Business Finance — Biola University, Class of 2026"],
                ["Based", "Irvine, California"],
                ["Stack", "Excel · Tableau · Salesforce · Brex · Ramp · ZOHO"],
                ["Lang.", "English · 中文 (Chinese)"]].
                map(([k, v]) =>
                <div key={k} className="border-t border-white/10 pt-4">
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>{k}</div>
                    <div className="text-paper-100 text-sm mt-2 leading-snug">{v}</div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────────────
// EXPERIENCE — Featured Trovata + supporting roles
// ─────────────────────────────────────────────────────────────────
const trovata = {
  company: "Trovata",
  role: "Business Analyst",
  location: "Solana Beach, CA · Remote",
  period: "Aug 2024 — Present",
  tag: "Current · Primary focus",
  blurb: "Cash management FinTech · Finance & G&A reporting team.",
  bullets: [
  "Supported month-end close by reconciling and categorizing company-wide banking expenses, improving accuracy of expense reporting used in SG&A analysis.",
  "Standardized expense categorization across NAB, Morgan Money, FIDES, and FundConnect — reducing manual review during close.",
  "Built recurring Excel-based financial reports and tracking models used by finance leadership to monitor spending trends and support budgeting and forecasting decisions.",
  "Maintained and structured Salesforce data to improve reliability of revenue and operational reporting.",
  "Performed expense variance analysis to identify discrepancies and improve reporting accuracy during monthly close."],

  stack: ["Excel · Financial Modeling", "Pivot Tables", "Salesforce", "Accounting Close", "Variance Analysis", "Month-End Close", "SG&A Reporting"],
  highlights: [
  { k: "Banking platforms", v: "NAB · Morgan Money · FIDES · FundConnect" },
  { k: "Reporting", v: "Recurring Excel models for finance leadership" },
  { k: "Data hygiene", v: "Salesforce structure for revenue reliability" }]

};

const supporting = [
{
  company: "TrialSupport, LLC",
  role: "Trial Operations Contractor",
  subRole: "Concurrent: Data Analyst (Part-Time) · May — Aug 2024",
  location: "Irvine, CA · Hybrid",
  period: "Apr 2022 — Sep 2025",
  tag: "Operations",
  blurb: "Courtroom + war room technical operations across multi-day trials — plus a summer stint analyzing case data and CRM records.",
  bullets: [
  "Analyzed operational requirements for active legal proceedings and identified technical and workflow risks prior to trial.",
  "Implemented technical setups supporting multi-day trials, preventing workflow disruptions in live legal environments.",
  "Coordinated AV equipment setup, client-facing communication, and procedural readiness for trial counsel.",
  "Conducted detailed data analysis and entry to support case strategies; managed CRM records in Zoho for accurate client and case data.",
  "Ran LinkedIn marketing activity and used Google Analytics to optimize online presence; interfaced with clients to deliver tailored support."],

  stack: ["Workflow Design", "Client-Facing", "AV Systems", "Risk Triage", "Zoho CRM", "Google Analytics"]
},
{
  company: "Los Angeles Lakers",
  role: "Team Attendant",
  location: "Los Angeles, CA",
  period: "Sep 2025 — Present",
  tag: "High-pressure execution",
  blurb: "NBA game-day operations — precision, discretion, and composure in a live environment.",
  bullets: [
  "Executed live event operations in a high-stakes environment requiring precision, timing, and coordination across coaching, training, and logistics teams.",
  "Anticipated player and staff needs during games, ensuring uninterrupted operations in time-sensitive situations.",
  "Operated within strict confidentiality and professionalism standards while supporting professional athletes and staff."],

  stack: ["Live Execution", "Discretion", "Cross-Functional", "Logistics"],
  photos: [
  { src: "media/lakers-kd.jpg", caption: "Pre-game warm-up · Crypto.com Arena" },
  { src: "media/lakers-court.jpg", caption: "Practice facility · Lakers", position: "center 55%" },
  { src: "media/lakers-courtside.jpg", caption: "Courtside · Game night" }]

},
{
  company: "Metronet",
  role: "Independent Sales Rep (Subcontractor)",
  location: "Des Moines Metro Area · On-site",
  period: "Jul 2024 — Aug 2024 · Seasonal",
  tag: "Field Sales",
  blurb: "Door-to-door sales of internet service in underserved residential areas.",
  bullets: [
  "Direct, door-to-door sales of internet services to residential customers in underserved areas.",
  "Developed persuasive communication by tailoring pitches to diverse customer needs and objections.",
  "Strengthened resilience and adaptability in a fast-paced, rejection-heavy sales environment."],

  stack: ["Direct Sales", "Cold Outreach", "Negotiation", "Resilience"]
},
{
  company: "Rockwell Land Company",
  role: "Development Intern",
  location: "Irvine, CA",
  period: "May 2022 — Aug 2023",
  tag: "Real Estate",
  blurb: "Residential entitlements & permitting support.",
  bullets: [
  "Assisted with entitlements, plan approvals, and permits for new residential communities — including entitlement documents, tentative and final maps.",
  "Coordinated and obtained consultant and land development proposals."],

  stack: ["Entitlements", "Permitting", "Consultant Coordination"]
},
{
  company: "CFA Institute · OC Portfolio Competition",
  role: "Investment Analyst Participant",
  location: "Orange County, CA",
  period: "Sep 2022 — Nov 2023",
  tag: "Investment Analysis",
  blurb: "Represented Biola at its first appearance — RFP presentation, asset allocation, and equity selection.",
  bullets: [
  "Built a portfolio supported by economic outlook research, equity and fixed-income valuation, asset allocation, and an individual security recommendation.",
  "Delivered an RFP and research presentation to a competition panel of investment professionals."],

  stack: ["Equity Research", "Valuation", "Asset Allocation", "RFP Presentation"],
  photos: [
  { src: "media/cfa-auditorium.jpg", caption: "" },
  { src: "media/cfa-team.jpg", caption: "" },
  { src: "media/cfa-fullteam.jpg", caption: "" }]

}];


function SupportingCard({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <article className="card card-glow p-6 md:p-7 h-full flex flex-col">
        {item.photos &&
        <div className="mb-5 space-y-2">
            {/* Top banner photo */}
            <div className="relative aspect-[21/9] rounded-lg overflow-hidden border border-white/10">
              <img src={item.photos[0].src} alt={item.photos[0].caption || item.company} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 p-2 text-[9.5px] font-mono uppercase tracking-[0.16em] text-white/90" style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.7))" }}>
                {item.photos[0].caption}
              </div>
            </div>
            {/* Bottom row — secondary photos */}
            {item.photos.length > 1 &&
          <div className={`grid gap-2 ${item.photos.length >= 3 ? "grid-cols-2" : "grid-cols-1"}`}>
                {item.photos.slice(1).map((p, i) =>
            <div key={i} className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10">
                    <img src={p.src} alt={p.caption || item.company} className="absolute inset-0 w-full h-full object-cover" loading="lazy" style={{ objectPosition: p.position || "center 20%" }} />
                    <div className="absolute inset-0" style={{ height: "162px", background: "linear-gradient(transparent 55%, rgba(0, 0, 0, 0.6)) center center / cover" }} />
                    <div className="absolute inset-x-0 bottom-0 p-1.5 text-[9px] font-mono uppercase tracking-[0.16em] text-white/85">
                      {p.caption}
                    </div>
                  </div>
            )}
              </div>
          }
          </div>
        }
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute-500">{item.period}</div>
            <h4 className="display-serif text-2xl mt-2 text-paper-100">{item.company}</h4>
            <div className="text-paper-100/80 text-sm mt-1 font-medium">{item.role}</div>
            {item.subRole &&
            <div className="text-[11.5px] mt-1 font-mono uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>{item.subRole}</div>
            }
            <div className="text-xs text-mute-500 mt-0.5">{item.location}</div>
          </div>
          <span className="chip whitespace-nowrap" style={{ color: "var(--accent)", borderColor: "color-mix(in oklch, var(--accent) 35%, transparent)" }}>{item.tag}</span>
        </div>
        <p className="mt-4 text-sm text-mute-400 leading-relaxed">{item.blurb}</p>
        <ul className="mt-4 space-y-2 flex-1">
          {item.bullets.map((b, i) =>
          <li key={i} className="flex gap-3 text-[13px] text-mute-400 leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
              <span>{b}</span>
            </li>
          )}
        </ul>
        <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
          {item.stack.map((s) =>
          <span key={s} className="chip">{s}</span>
          )}
        </div>
      </article>
    </Reveal>);

}

function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="02 · Experience"
          title={<>Where the <em>finance work</em> lives.</>}
          kicker="Day-to-day FinTech finance and reporting at Trovata is the core. Operations experience in pro sports and trial environments sharpens the execution edge I bring to it." />


        {/* Featured: Trovata */}
        <div className="mt-16">
          <Reveal>
            <article className="card relative overflow-hidden p-8 md:p-10 lg:p-12">
              <div className="absolute -left-32 -top-32 w-80 h-80 rounded-full opacity-[0.18] blur-3xl pointer-events-none" style={{ background: "var(--accent)" }} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "var(--accent)" }} />
                    <span className="relative rounded-full w-2 h-2" style={{ background: "var(--accent)" }} />
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>Current role · Primary focus</span>
                </div>

                <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                  <div className="md:col-span-5">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute-500">{trovata.period} · Remote</div>
                    <h3 className="display-serif text-5xl md:text-6xl mt-3 text-paper-100">{trovata.company}</h3>
                    <div className="mt-3 text-paper-100 font-medium text-lg">{trovata.role}</div>
                    <div className="mt-1 text-mute-400 text-sm">{trovata.blurb}</div>

                    <div className="mt-8 space-y-4">
                      {trovata.highlights.map((h) =>
                      <div key={h.k} className="border-t border-white/[0.08] pt-3">
                          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>{h.k}</div>
                          <div className="text-paper-100 text-sm mt-1.5 leading-snug">{h.v}</div>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {trovata.stack.map((s) =>
                      <span key={s} className="chip">{s}</span>
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-7 md:border-l border-white/[0.06] md:pl-12">
                    <div className="eyebrow">Day-to-day</div>
                    <ul className="mt-5 space-y-4">
                      {trovata.bullets.map((b, i) =>
                      <li key={i} className="flex gap-4 text-[15px] text-paper-100/85 leading-relaxed">
                          <span className="mt-1 font-mono text-[10px] tracking-widest w-6 flex-shrink-0" style={{ color: "var(--accent)" }}>0{i + 1}</span>
                          <span>{b}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Supporting */}
        <div className="mt-24 md:mt-28">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="max-w-2xl">
                <div className="eyebrow flex items-center gap-2">
                  <Icon.Dot className="w-1.5 h-1.5" />
                  <span>Supporting experience</span>
                </div>
                <h3 className="display-serif text-3xl md:text-4xl mt-4 text-paper-100">The operator's edge.</h3>
                <p className="mt-3 text-mute-400 leading-relaxed">
                  Roles in pro sports and legal trial environments — where my finance discipline gets sharpened by live, high-pressure execution and client-facing professionalism.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {supporting.map((item, i) =>
            <SupportingCard key={item.company} item={item} delay={i % 4 + 1} />
            )}
          </div>
        </div>

        <Reveal delay={1} className="mt-14 md:mt-20 flex justify-center">
          <a href="#contact" className="btn btn-ghost">
            Discuss a finance role
            <Icon.Arrow className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────────
const projects = [
{
  n: "P-01",
  title: "Sprouts Farmers Market — AI Subscription Strategy",
  summary: "Capstone Strategic Management proposal for Sprouts Farmers Market. Built a forward-looking case for an AI-powered subscription model — personalized basket recommendations, recurring revenue, and a tighter customer relationship in a competitive grocery sector. Researched the market, mapped the competitive landscape, and delivered the final presentation as a five-person team.",
  tags: ["Strategic Management", "Market Research", "Go-to-Market", "Team Presentation"],
  preview: "sprouts",
  role: "Capstone Team · Biola",
  featured: true
},
{
  n: "P-02",
  title: "Holiday Email & Customer Conversion Strategy",
  summary: "Data-informed holiday marketing strategy for Crafter, optimized for last-minute seasonal conversions through targeted email automation and cross-platform engagement. Analyzed shopping behavior, shipping-deadline urgency, competitor pricing, and audience demographics to structure a 12-day campaign tuned for conversion timing and product segmentation. Built a phased plan separating physical and digital products by delivery constraints and buyer urgency, with product-specific discounts, audience targeting, and cross-sell across email, Instagram, Facebook, TikTok, and Pinterest.",
  tags: ["Consumer Behavior", "Marketing Analytics", "Audience Segmentation", "Email Strategy", "Cross-Platform Campaigns", "Conversion Optimization"],
  preview: "holiday",
  role: "Marketing Analytics · Crafter"
},
{
  n: "P-03",
  title: "Financial Reporting & Expense Analysis",
  summary: "Built and supported recurring expense tracking and reporting workflows to help finance leadership monitor spending trends and tighten month-end close.",
  tags: ["Excel", "SG&A", "Variance Analysis", "Accounting Close"],
  preview: "report",
  role: "Business Analyst · Trovata"
},
{
  n: "P-04",
  title: "High-Pressure Operations Experience",
  summary: "Live operations work — supporting Lakers game-day execution and multi-day trial proceedings — where the principles map directly back to FP&A: precision, anticipation, and follow-through.",
  tags: ["Live Execution", "Discretion", "Cross-Functional"],
  preview: "court",
  role: "Lakers · TrialSupport"
}];


function ProjectPreview({ kind }) {
  if (kind === "report") {
    return (
      <div className="preview-pane h-44 p-4">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-mute-500">
          <span>Q4 · SG&amp;A</span>
          <span style={{ color: "var(--accent)" }}>▲ 4.2%</span>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1.5 items-end h-24">
          {[55, 38, 70, 48, 82, 62, 91].map((h, i) =>
          <div key={i} className="rounded-sm" style={{ height: `${h}%`, background: i === 6 ? "var(--accent)" : "var(--bar-mute)" }} />
          )}
        </div>
        <div className="mt-2 flex justify-between text-[9px] font-mono uppercase tracking-widest text-mute-500">
          <span>W1</span><span>W7</span>
        </div>
      </div>);

  }
  if (kind === "sprouts") {
    return (
      <div className="preview-pane h-44 relative overflow-hidden">
        <img src="media/sprouts.jpg" alt="Crowell School of Business capstone team" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.65)) center center / auto" }} />
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-white/85">
          <span>Crowell School of Business</span>
          <span style={{ color: "var(--accent)" }}>Class of 2026</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-90">Strategic Mgmt · Final Presentation</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>Team of 5</div>
        </div>
      </div>);

  }
  if (kind === "chart") {
    return (
      <div className="preview-pane h-44 p-4 dotted-bg">
        <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-mute-500">Forecast · FY26</div>
        <svg viewBox="0 0 200 90" className="w-full mt-3" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,70 L25,55 L50,60 L75,40 L100,48 L125,30 L150,35 L175,18 L200,22 L200,90 L0,90 Z" fill="url(#g1)" />
          <path d="M0,70 L25,55 L50,60 L75,40 L100,48 L125,30 L150,35 L175,18 L200,22" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
          {[70, 55, 60, 40, 48, 30, 35, 18, 22].map((y, i) =>
          <circle key={i} cx={i * 25} cy={y} r="1.8" fill="var(--accent)" />
          )}
        </svg>
      </div>);

  }
  if (kind === "court") {
    return (
      <div className="preview-pane h-44 p-4">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-mute-500">
          <span>Game Night · Pre-tip</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />Live</span>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2 text-[10px] font-mono">
          {[
          ["Locker", "Ready"],
          ["Towels", "Stocked"],
          ["Drinks", "Cold"],
          ["AV", "Online"],
          ["Gear", "Set"],
          ["Tape", "Cut"],
          ["Court", "Mopped"],
          ["Equipment", "Prepared"]].
          map(([k, v], i) =>
          <div key={i} className="border rounded-md p-2 leading-tight" style={{ borderColor: "var(--bar-mute)" }}>
              <div className="text-mute-500 uppercase tracking-widest">{k}</div>
              <div style={{ color: i === 7 ? "var(--accent)" : "var(--tile-text)" }}>{v}</div>
            </div>
          )}
        </div>
      </div>);

  }
  if (kind === "holiday") {
    const days = [
    { d: 1, p: 0.22, x: 0.10, k: "P" },
    { d: 2, p: 0.28, x: 0.12, k: "P" },
    { d: 3, p: 0.34, x: 0.18, k: "P" },
    { d: 4, p: 0.42, x: 0.22, k: "P" },
    { d: 5, p: 0.55, x: 0.28, k: "P" },
    { d: 6, p: 0.62, x: 0.34, k: "P" },
    { d: 7, p: 0.78, x: 0.42, k: "P" }, // ship cutoff
    { d: 8, p: 0.18, x: 0.55, k: "D" },
    { d: 9, p: 0.12, x: 0.68, k: "D" },
    { d: 10, p: 0.08, x: 0.80, k: "D" },
    { d: 11, p: 0.06, x: 0.92, k: "D" },
    { d: 12, p: 0.04, x: 1.00, k: "D" }];

    return (
      <div className="preview-pane h-44 p-4">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-mute-500">
          <span>12-day campaign</span>
          <span className="flex items-center gap-2">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-sm" style={{ background: "var(--bar-mute)" }} />Physical</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-sm" style={{ background: "var(--accent)" }} />Digital</span>
          </span>
        </div>
        <div className="mt-3 grid grid-cols-12 gap-1 items-end h-20">
          {days.map((day) =>
          <div key={day.d} className="flex flex-col-reverse gap-0.5 h-full">
              <div className="rounded-sm" style={{ height: `${day.p * 100}%`, background: "var(--bar-mute)" }} />
              <div className="rounded-sm" style={{ height: `${day.x * 100}%`, background: "var(--accent)" }} />
            </div>
          )}
        </div>
        <div className="mt-2 grid grid-cols-12 gap-1 text-[9px] font-mono uppercase tracking-widest text-mute-500">
          {days.map((day) =>
          <div key={day.d} className="text-center" style={day.d === 7 ? { color: "var(--accent)" } : undefined}>
              {day.d === 7 ? "│" : day.d}
            </div>
          )}
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-mute-500">
          <span>Email · IG · FB · TT · Pin</span>
          <span style={{ color: "var(--accent)" }}>Cutoff D7</span>
        </div>
      </div>);

  }
  return <div className="preview-pane h-44 placeholder-stripes" />;
}

function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="04 · Selected work"
            title={<>Projects &amp; <em>case studies.</em></>}
            kicker="Light snapshots of what I've shipped, studied, and supported. Detailed write-ups available on request." />

          <Reveal delay={2}>
            <a href="#contact" className="btn btn-link self-start md:self-end">
              Request a deep-dive
              <Icon.Arrow className="w-4 h-4 arrow" />
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-16">
          {projects.map((p, i) =>
          <Reveal key={p.n} delay={i % 4 + 1} className={p.featured ? "md:col-span-2" : ""}>
              <article className={`card card-glow p-6 md:p-7 h-full flex flex-col group ${p.featured ? "featured-project" : ""}`}>
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em]">
                  <span className="text-mute-500">{p.n}{p.featured && <span className="ml-2" style={{ color: "var(--accent)" }}>· Featured</span>}</span>
                  <span style={{ color: "var(--accent)" }}>{p.role}</span>
                </div>
                {p.featured ?
              <div className="mt-4 grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                    <div className="md:col-span-7">
                      <h3 className="display-serif text-3xl md:text-[34px] text-paper-100 leading-tight">{p.title}</h3>
                      <p className="mt-4 text-[15px] text-mute-400 leading-relaxed">{p.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.tags.map((t) =>
                    <span key={t} className="chip">{t}</span>
                    )}
                      </div>
                    </div>
                    <div className="md:col-span-5">
                      <ProjectPreview kind={p.preview} />
                    </div>
                  </div> :

              <>
                    <h3 className="display-serif text-2xl md:text-[28px] mt-4 text-paper-100 leading-tight">{p.title}</h3>
                    <p className="mt-3 text-sm text-mute-400 leading-relaxed">{p.summary}</p>
                    <div className="mt-5">
                      <ProjectPreview kind={p.preview} />
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) =>
                  <span key={t} className="chip">{t}</span>
                  )}
                    </div>
                  </>
              }
                <div className="mt-auto pt-5 border-t border-white/[0.06] flex items-center justify-between" style={{ marginTop: "1.5rem" }}>
                  <a href="#contact" className="btn-link inline-flex items-center gap-2 text-sm" style={{ color: "var(--accent)" }}>
                    View details
                    <Icon.Arrow className="w-4 h-4 arrow" />
                  </a>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-mute-500"></span>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────────
const skillGroups = [
{
  label: "Finance",
  n: "S-01",
  Glyph: Icon.Bar,
  items: ["FP&A", "Expense Analysis", "Month-End Close Support", "Budgeting & Forecasting", "Financial Reporting", "Variance Analysis"]
},
{
  label: "Analytics & Tools",
  n: "S-02",
  Glyph: Icon.Spark,
  items: ["Excel · Financial Modeling", "Pivot Tables", "Tableau", "Salesforce", "Brex", "Zoho", "Ramp", "Reporting Workflows"]
},
{
  label: "Operations",
  n: "S-03",
  Glyph: Icon.Cog,
  items: ["Game Operations", "Trial Operations", "Equipment Coordination", "Cross-Functional Communication", "High-Pressure Execution", "Bilingual EN · 中文"]
}];


function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="05 · Toolkit"
          title={<>Skills, <em>grouped.</em></>}
          kicker="The everyday set. I pick up new tools quickly." />

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {skillGroups.map((g, i) =>
          <Reveal key={g.label} delay={i + 1}>
              <article className="card p-7 h-full">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute-500">{g.n}</div>
                    <h3 className="display-serif text-3xl mt-2 text-paper-100">{g.label}</h3>
                  </div>
                  <g.Glyph className="w-6 h-6" style={{ color: "var(--accent)" }} />
                </div>
                <ul className="mt-6 divide-y divide-white/[0.06] border-t border-white/[0.06]">
                  {g.items.map((it) =>
                <li key={it} className="py-3 flex items-center justify-between text-sm">
                      <span className="text-paper-100">{it}</span>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)", opacity: 0.7 }} />
                    </li>
                )}
                </ul>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────────────
// RESUME CTA
// ─────────────────────────────────────────────────────────────────
function ResumeCTA() {
  return (
    <section className="relative py-24 md:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="card relative overflow-hidden">
            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "var(--accent)" }} />
            <div className="relative grid md:grid-cols-12">
              {/* Graduation photo */}
              <div className="md:col-span-5 relative">
                <div className="relative aspect-[4/5] md:aspect-auto md:h-full min-h-[360px] overflow-hidden md:rounded-l-2xl">
                  <img src="media/graduation.jpg" alt="Nate Lin, Biola University Class of 2026" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55))" }} />
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full" style={{ background: "var(--accent)", color: "var(--accent-ink, #0b0d12)" }}>
                      Class of 2026
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                    <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase opacity-90">
                      Biola University<br />B.S. Business Finance
                    </div>
                    <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase" style={{ color: "var(--accent)" }}>NL · 03</div>
                  </div>
                </div>
              </div>

              {/* CTA copy */}
              <div className="md:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="eyebrow">06 · Next step</div>
                <h2 className="display-serif text-5xl md:text-6xl mt-5">Want the full <em style={{ color: "var(--accent)" }}>story?</em></h2>
                <p className="mt-5 text-mute-400 max-w-lg leading-relaxed">Grab the one-pager, or send a note. I'm pursuing FP&amp;A and business analyst roles — and will respond within a day.

                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {/* TODO: link to your real resume PDF */}
                  <a href="uploads/NATHANIEL LIN Resume .pdf" target="_blank" rel="noopener" className="btn btn-primary">
                    <Icon.Download className="w-4 h-4" />
                    Download résumé
                  </a>
                  <a href="#contact" className="btn btn-ghost">
                    <Icon.Mail className="w-4 h-4" />
                    Contact me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────
function Contact() {
  const [state, setState] = React.useState({ name: "", email: "", topic: "FP&A role", message: "" });
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to Formspree / email service
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="07 · Contact"
              title={<>Let's <em>talk.</em></>}
              kicker="Open to FP&A, corporate finance, and business analytics roles — especially in FinTech. Happy to talk about reporting workflows, expense analysis, or how an operations background translates to finance work." />

            <Reveal delay={2}>
              <ul className="mt-10 space-y-1">
                {[
                { Icon: Icon.Mail, label: "Email", value: "natelin03@outlook.com", href: "mailto:natelin03@outlook.com" },
                { Icon: Icon.LinkedIn, label: "LinkedIn", value: "www.linkedin.com/in/nate-lin/", href: "https://www.linkedin.com/in/nate-lin/" },
                { Icon: Icon.Instagram, label: "Instagram", value: "@thenatelin", href: "#" /* TODO: real Instagram link */ }].
                map((c) =>
                <li key={c.label}>
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="group flex items-center justify-between gap-6 py-4 border-b border-white/[0.06] hover:border-white/20 transition">
                      <div className="flex items-center gap-4">
                        <c.Icon className="w-5 h-5 text-mute-500 group-hover:text-paper-100 transition" />
                        <div>
                          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute-500">{c.label}</div>
                          <div className="text-paper-100 text-sm mt-0.5">{c.value}</div>
                        </div>
                      </div>
                      <Icon.Arrow className="w-4 h-4 text-mute-500 group-hover:translate-x-1 group-hover:text-paper-100 transition" />
                    </a>
                  </li>
                )}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={1}>
              <form onSubmit={onSubmit} className="card p-7 md:p-9">
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute-500">Name</span>
                    <input required value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} className="field mt-2" placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute-500">Email</span>
                    <input required type="email" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} className="field mt-2" placeholder="you@company.com" />
                  </label>
                </div>
                <label className="block mt-4">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute-500">I'm reaching out about</span>
                  <select value={state.topic} onChange={(e) => setState({ ...state, topic: e.target.value })} className="field mt-2">
                    <option>FP&amp;A role</option>
                    <option>Business analytics role</option>
                    <option>Operations role</option>
                    <option>Sports / FinTech crossover</option>
                    <option>Project collaboration</option>
                    <option>Just saying hi</option>
                  </select>
                </label>
                <label className="block mt-4">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute-500">Message</span>
                  <textarea required rows={5} value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} className="field mt-2 resize-none" placeholder="Tell me about the role, project, or question…" />
                </label>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-[11px] text-mute-500 max-w-[260px] leading-snug">
                    This form is a frontend placeholder — wire it to Formspree or your inbox of choice.
                  </p>
                  <button type="submit" className="btn btn-primary">
                    {sent ? "Sent · thank you" : "Send message"}
                    {!sent && <Icon.Arrow className="w-4 h-4" />}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}

// ─────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full grid place-items-center text-lg font-semibold" style={{ background: "var(--accent)", color: "var(--accent-ink, #0b0d12)" }}>N</span>
          <div className="leading-tight">
            <div className="text-sm text-paper-100">Nathaniel Lin</div>
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-mute-500">© 2026 · Irvine, CA</div>
          </div>
        </div>
        <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-mute-500">
          Designed &amp; built from scratch · Updated May 2026
        </div>
      </div>
    </footer>);

}

// Expose to other scripts
Object.assign(window, {
  Icon, Reveal, SectionHeader, Nav, Hero, About, Experience, Projects, Skills, ResumeCTA, Contact, Footer
});
