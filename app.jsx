// app.jsx — top-level app + Tweaks wiring.

// Curated accent palette. `ink` is the text color used on accent buttons/badges.
const ACCENTS = {
  gold:       { value: "#C8A55A", strong: "#d9b977", soft: "#C8A55A22", ink: "#1f2128", label: "Ochre" },
  terracotta: { value: "#C97759", strong: "#d68e74", soft: "#C9775922", ink: "#1f2128", label: "Terracotta" },
  sage:       { value: "#7FB897", strong: "#9bcdb0", soft: "#7FB89722", ink: "#1f2128", label: "Sage" },
  electric:   { value: "#5B8FFF", strong: "#7BA6FF", soft: "#5B8FFF22", ink: "#1f2128", label: "Electric" },
  plum:       { value: "#8C5A78", strong: "#a4738f", soft: "#8C5A7822", ink: "#ffffff", label: "Plum" },
  navy:       { value: "#3D5A8C", strong: "#5876a8", soft: "#3D5A8C22", ink: "#ffffff", label: "Navy" },
  forest:     { value: "#3E7B5B", strong: "#5a9778", soft: "#3E7B5B22", ink: "#ffffff", label: "Forest" },
  charcoal:   { value: "#2A2E37", strong: "#3a3f4a", soft: "#2A2E3722", ink: "#f5f2e9", label: "Charcoal" },
};

function applyAccent(key) {
  const a = ACCENTS[key] || ACCENTS.gold;
  const root = document.documentElement;
  root.style.setProperty("--accent", a.value);
  root.style.setProperty("--accent-strong", a.strong);
  root.style.setProperty("--accent-soft", a.soft);
  root.style.setProperty("--accent-ink", a.ink);
}

function applyTheme(theme) {
  document.body.classList.toggle("theme-cream", theme === "cream");
}

function applyGrid(show) {
  document.documentElement.style.setProperty("--grid", show ? (document.body.classList.contains("theme-cream") ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.05)") : "rgba(0,0,0,0)");
}

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  React.useEffect(() => { applyAccent(t.accent); }, [t.accent]);
  React.useEffect(() => {
    applyTheme(t.theme);
    applyGrid(t.showGrid); // re-apply so grid hue matches new theme
  }, [t.theme]);
  React.useEffect(() => { applyGrid(t.showGrid); }, [t.showGrid]);

  // Scroll-tied atmosphere: fade ambient overlays as the user moves past the hero.
  React.useEffect(() => {
    let raf = 0;
    const root = document.documentElement;
    const update = () => {
      raf = 0;
      const y = window.scrollY || window.pageYOffset || 0;
      const vh = window.innerHeight || 800;
      const start = vh * 0.25;
      const end = vh * 1.4;
      const tNorm = Math.min(1, Math.max(0, (y - start) / (end - start)));
      const eased = 1 - Math.pow(1 - tNorm, 3);
      const floor = 0.12;
      const atmos = 1 - eased * (1 - floor);
      root.style.setProperty("--atmos", atmos.toFixed(3));
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          options={["dark", "cream"]}
          onChange={(v) => setTweak("theme", v)}
        />
        <TweakToggle
          label="Dot grid"
          value={t.showGrid}
          onChange={(v) => setTweak("showGrid", v)}
        />
        <TweakSection label="Accent color" />
        <TweakColor
          label="Color"
          value={ACCENTS[t.accent]?.value || ACCENTS.gold.value}
          options={Object.values(ACCENTS).map((a) => a.value)}
          onChange={(v) => {
            const key = Object.keys(ACCENTS).find((k) => ACCENTS[k].value === v) || "gold";
            setTweak("accent", key);
          }}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
