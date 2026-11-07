import React, { useEffect, useState, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  Compass,
  Sparkles,
  Sliders,
  Volume2,
  VolumeX,
  ArrowDown,
  Eye,
} from 'lucide-react';
import { AirplaneWindowCanvas, SkyPreset } from './components/AirplaneWindowCanvas';

interface PortalTestimonialCard {
  id: string;
  quote: string;
  worldTitle: string;
  author: string;
  coordinates: string;
}

const PORTAL_CARDS: PortalTestimonialCard[] = [
  {
    id: 'reverie-prime',
    quote:
      '"Stepping into it was effortless and the worlds have been unlike anything I dreamt."',
    worldTitle: 'Cloud Sanctuary 01',
    author: 'Elena Vance — Creative Director',
    coordinates: 'ALT 34,000 FT / SECTOR A-1',
  },
  {
    id: 'horizon-echo',
    quote:
      '"I finally feel immersed, like the worlds were built just for me."',
    worldTitle: 'Solstice Archipelago',
    author: 'Marcus Sterling — World Architect',
    coordinates: 'ALT 36,500 FT / SECTOR B-4',
  },
  {
    id: 'wonder-tear',
    quote:
      '"The wonder of it all really moved me and brought a tear to my eye."',
    worldTitle: 'Aetherial Spire',
    author: 'Sora Takahashi — Narrative Designer',
    coordinates: 'ALT 38,200 FT / SECTOR C-9',
  },
  {
    id: 'horizon-feel',
    quote:
      '"It is amazing to see and feel the worlds I am stepping into each day."',
    worldTitle: 'Luminance Drift',
    author: 'Julian Mercer — Spatial Lead',
    coordinates: 'ALT 35,100 FT / SECTOR D-2',
  },
  {
    id: 'living-scale',
    quote:
      '"Every portal transition responds at 60fps with zero visual seams."',
    worldTitle: 'Stratus Citadel',
    author: 'Clara Lindqvist — Principal Engineer',
    coordinates: 'ALT 39,000 FT / SECTOR E-7',
  },
];

const SKY_PRESETS: Record<
  SkyPreset,
  { name: string; gradient: string; accent: string; description: string }
> = {
  cerulean: {
    name: 'Cerulean Stratosphere',
    gradient: 'linear-gradient(180deg, #00A6FF 0%, #19BEFF 52%, #4DD5FF 100%)',
    accent: '#00B2FF',
    description: 'High-altitude midday azure sky with volumetric cumulus banks.',
  },
  golden: {
    name: 'Alpenglow Horizon',
    gradient: 'linear-gradient(180deg, #0284C7 0%, #38BDF8 55%, #BAE6FD 100%)',
    accent: '#38BDF8',
    description: 'Crisp glacial horizon with bright atmospheric scattering.',
  },
  aurora: {
    name: 'Cyan Ionosphere',
    gradient: 'linear-gradient(180deg, #0088E0 0%, #00B8FF 52%, #6CE5FF 100%)',
    accent: '#00C8FF',
    description: 'Deep upper-troposphere luminance with crystalline cloud drift.',
  },
};

export function App() {
  // Target and smoothed scroll progress: 0 = Stage 1 (Cabin Window Hero), 1 = Stage 2 (Sky Cloud Carousel)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [shadeLevel, setShadeLevel] = useState(0);
  const [skyPreset, setSkyPreset] = useState<SkyPreset>('cerulean');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFooterModal, setActiveFooterModal] = useState<
    'explore' | 'contact' | 'legal' | null
  >(null);
  const [ambientAudioActive, setAmbientAudioActive] = useState(false);

  // Sync native scroll position to scrollProgress [0..1]
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const nextProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      setScrollProgress(nextProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jumpToStage = useCallback((target: number) => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: target * maxScroll,
      behavior: 'smooth',
    });
  }, []);

  const handlePrevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + PORTAL_CARDS.length) % PORTAL_CARDS.length);
  }, []);

  const handleNextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % PORTAL_CARDS.length);
  }, []);

  // Keyboard navigation for the 3D Sky Card Fan
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevCard();
      if (e.key === 'ArrowRight') handleNextCard();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handlePrevCard, handleNextCard]);

  // Derived opacities for Stage 1 (Cabin Hero) and Stage 2 (Sky Carousel)
  const cabinTextOpacity = Math.max(0, Math.min(1, 1 - scrollProgress * 2.5));
  const cabinTextTranslateY = scrollProgress * -48;
  const skyCarouselOpacity = Math.max(
    0,
    Math.min(1, (scrollProgress - 0.42) * 2.1)
  );
  const isSkyStageInteractive = scrollProgress > 0.5;

  return (
    <div className="relative min-h-[260vh] select-none">
      {/* =========================================================
          FIXED FULL-VIEWPORT SKY BACKDROP (Visible inside window & full screen in Stage 2)
      ========================================================= */}
      <div
        className="fixed inset-0 z-0 transition-all duration-700"
        style={{
          background: SKY_PRESETS[skyPreset].gradient,
        }}
      >
        {/* Soft center atmospheric bloom behind the active card */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 46%, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.12) 32%, transparent 65%)',
          }}
        />
      </div>

      {/* =========================================================
          CABIN WALL VIGNETTE & DROP SHADOW UNDER THE 3D WINDOW (Stage 1)
      ========================================================= */}
      <div
        className="fixed inset-0 z-[5] pointer-events-none cabin-wall-texture transition-opacity duration-150"
        style={{
          opacity: Math.max(0, Math.min(1, 1 - (scrollProgress - 0.25) * 2.2)),
          // Punch an oval aperture in the center so the vivid sky shows through the 3D window frame
          WebkitMaskImage:
            'radial-gradient(ellipse 145px 215px at 50% 49.5%, transparent 94%, black 100%)',
          maskImage:
            'radial-gradient(ellipse 145px 215px at 50% 49.5%, transparent 94%, black 100%)',
        }}
      />

      {/* Realistic deep ambient occlusion shadow cast by the aircraft window bezel onto the cabin wall */}
      <div
        className="fixed inset-0 z-[6] pointer-events-none flex items-center justify-center"
        style={{
          opacity: Math.max(0, Math.min(1, 1 - scrollProgress * 2.3)),
          transform: `scale(${1 + Math.pow(scrollProgress, 1.65) * 6.5})`,
        }}
      >
        <div
          className="w-[410px] h-[540px] sm:w-[465px] sm:h-[605px] rounded-full"
          style={{
            boxShadow:
              '0 36px 85px 28px rgba(0, 0, 0, 0.82), 0 8px 30px 6px rgba(0, 0, 0, 0.65)',
          }}
        />
      </div>

      {/* =========================================================
          REAL-TIME THREE.JS 3D AIRPLANE WINDOW & VOLUMETRIC CLOUDS
      ========================================================= */}
      <AirplaneWindowCanvas
        scrollProgress={scrollProgress}
        shadeLevel={shadeLevel}
        skyPreset={skyPreset}
      />

      {/* =========================================================
          FIXED TOP HEADER (Matches m_intro_03.jpg & m_intro_02.jpg)
      ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 py-6 flex items-center justify-between">
        {/* Top-Left: Auragate Calligraphic + Clean Sans Logo */}
        <button
          onClick={() => jumpToStage(0)}
          className="group flex items-baseline text-white focus:outline-none cursor-pointer"
          aria-label="Auragate Home"
        >
          <span className="font-script text-3xl sm:text-[34px] leading-none tracking-normal drop-shadow-sm">
            Aura
          </span>
          <span className="text-lg sm:text-[19px] font-medium tracking-tight -ml-0.5 drop-shadow-sm">
            gate
          </span>
        </button>

        {/* Top-Right Controls: Stage Quick-Switch + Watch Demo Pill + Circular "=" Menu */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick interactive portal stage switcher pill */}
          <div className="hidden md:flex items-center bg-black/25 backdrop-blur-md border border-white/20 rounded-full p-1 text-[11px] font-medium text-white">
            <button
              onClick={() => jumpToStage(0)}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                scrollProgress < 0.45
                  ? 'bg-white text-slate-900 font-semibold shadow-sm'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              Cabin Portal
            </button>
            <button
              onClick={() => jumpToStage(1)}
              className={`px-3 py-1 rounded-full transition cursor-pointer ${
                scrollProgress >= 0.45
                  ? 'bg-white text-slate-900 font-semibold shadow-sm'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              Sky Horizon
            </button>
          </div>

          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-white hover:bg-slate-50 text-slate-900 px-5 py-2.5 rounded-full text-xs font-semibold shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Watch Demo
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Studio Controls Menu"
            className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-slate-900 flex flex-col items-center justify-center gap-[4px] shadow-lg transition transform hover:scale-105 cursor-pointer"
          >
            <span className="w-3.5 h-[1.6px] bg-slate-900 rounded-full" />
            <span className="w-3.5 h-[1.6px] bg-slate-900 rounded-full" />
          </button>
        </div>
      </header>

      {/* =========================================================
          STAGE 1 OVERLAY: CABIN WINDOW HERO (Matches m_intro_03.jpg)
      ========================================================= */}
      <section
        className="fixed inset-0 z-20 pointer-events-none flex flex-col justify-end px-6 sm:px-10 pb-8 sm:pb-11"
        style={{
          opacity: cabinTextOpacity,
          transform: `translateY(${cabinTextTranslateY}px)`,
          visibility: cabinTextOpacity <= 0.01 ? 'hidden' : 'visible',
        }}
      >
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Bottom-Left Headline & Subtitle */}
          <div className="max-w-lg pointer-events-auto">
            <h1 className="leading-[1.06] tracking-tight text-white">
              <span className="block">
                <span className="font-script text-5xl sm:text-[64px] text-white/75 font-normal mr-3">
                  Discover
                </span>
                <span className="text-4xl sm:text-[54px] font-light text-white">
                  Living
                </span>
              </span>
              <span className="block text-4xl sm:text-[54px] font-light text-white mt-0.5">
                Digital Worlds
              </span>
              <span className="block text-4xl sm:text-[54px] font-normal text-white mt-0.5">
                Vivid, Alive, Endless
              </span>
            </h1>

            <p className="text-xs sm:text-[13px] text-white/55 max-w-[310px] mt-5 leading-relaxed font-normal">
              Experience immersive worlds with stories that blur the line
              between imagination, AI and living reality made for you.
            </p>

            {/* Interactive Cabin Controls Bar */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={() => jumpToStage(1)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white/90 backdrop-blur-md transition cursor-pointer"
              >
                <ArrowDown className="w-3.5 h-3.5 text-[#38CEFF]" />
                <span>Enter Portal Window</span>
              </button>

              <button
                onClick={() =>
                  setShadeLevel((prev) => (prev > 0.2 ? 0 : 0.45))
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-[11px] text-white/75 transition cursor-pointer"
              >
                <Sliders className="w-3 h-3 text-white/70" />
                <span>{shadeLevel > 0.2 ? 'Raise Shade' : 'Pull Shade'}</span>
              </button>
            </div>
          </div>

          {/* Bottom-Right Studio Monogram Signature (Matches m_intro_03.jpg) */}
          <div className="flex items-center gap-3.5 pointer-events-auto self-start md:self-end">
            <span
              className="font-script text-5xl sm:text-[56px] leading-none text-white select-none"
              aria-hidden="true"
            >
              a.
            </span>
            <p className="text-[11px] text-white/60 max-w-[155px] leading-[1.45]">
              A studio is a trusted partner in your journey through wonderland.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          STAGE 2 OVERLAY: SKY HORIZON 3D CARD FAN CAROUSEL (Matches m_intro_02.jpg)
      ========================================================= */}
      <section
        className={`fixed inset-0 z-30 flex flex-col justify-between pt-24 pb-5 px-6 sm:px-10 transition-opacity duration-300 ${
          isSkyStageInteractive ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{
          opacity: skyCarouselOpacity,
          visibility: skyCarouselOpacity <= 0.01 ? 'hidden' : 'visible',
        }}
      >
        {/* Center 5-Card Curved 3D Fan Arc */}
        <div className="relative flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
          <div
            className="relative w-full h-[420px] sm:h-[460px] flex items-center justify-center"
            style={{ perspective: '1600px' }}
          >
            {[-2, -1, 0, 1, 2].map((offset) => {
              const cardIndex =
                (activeIndex + offset + PORTAL_CARDS.length) %
                PORTAL_CARDS.length;
              const card = PORTAL_CARDS[cardIndex];
              const isCenter = offset === 0;
              const isNearSide = Math.abs(offset) === 1;

              // Exact curved fan geometry matching m_intro_02.jpg
              const translateX = offset * 255;
              const translateY = Math.abs(offset) === 1 ? 22 : Math.abs(offset) === 2 ? 78 : 0;
              const rotateZ = offset * 8.5;
              const rotateY = offset * -6;
              const scale = isCenter ? 1 : isNearSide ? 0.94 : 0.88;
              const zIndex = 30 - Math.abs(offset) * 5;

              const cardStyleClass = isCenter
                ? 'auragate-glass-card-active text-slate-800'
                : isNearSide
                ? 'auragate-glass-card-side text-white/90'
                : 'auragate-glass-card-far text-white/60';

              return (
                <div
                  key={`${card.id}-${offset}`}
                  onClick={() => {
                    if (offset !== 0) {
                      setActiveIndex(cardIndex);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveIndex(cardIndex);
                    }
                  }}
                  aria-label={`World testimonial: ${card.worldTitle}`}
                  className={`absolute w-[265px] sm:w-[315px] h-[365px] sm:h-[420px] rounded-[28px] p-7 sm:p-9 flex flex-col justify-center items-center text-center transition-all duration-500 ease-out cursor-pointer ${cardStyleClass}`}
                  style={{
                    transform: `translate3d(${translateX}px, ${translateY}px, 0) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                  }}
                >
                  {/* Subtle top coordinates badge on active card */}
                  <div
                    className={`text-[10px] uppercase tracking-[0.18em] mb-4 font-semibold transition-opacity ${
                      isCenter ? 'text-sky-700/75 opacity-100' : 'text-white/50 opacity-75'
                    }`}
                  >
                    {card.worldTitle}
                  </div>

                  {/* Center Quote matching m_intro_02.jpg typography */}
                  <p
                    className={`text-[15px] sm:text-[17px] leading-[1.55] font-normal max-w-[235px] ${
                      isCenter
                        ? 'text-slate-800 font-medium'
                        : isNearSide
                        ? 'text-white/90'
                        : 'text-white/65'
                    }`}
                  >
                    {card.quote}
                  </p>

                  {/* Author / Coordinates footer */}
                  <div
                    className={`mt-6 text-[11px] transition-opacity ${
                      isCenter ? 'text-slate-600 opacity-90' : 'text-white/55 opacity-70'
                    }`}
                  >
                    {card.author}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Circular Left / Right Carousel Controls below center card (Exact match to m_intro_02.jpg) */}
          <div className="mt-4 flex items-center gap-3 z-40">
            <button
              onClick={handlePrevCard}
              aria-label="Previous World Testimonial"
              className="w-11 h-11 rounded-full bg-white/30 hover:bg-white/45 border border-white/55 text-white flex items-center justify-center backdrop-blur-md transition transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextCard}
              aria-label="Next World Testimonial"
              className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-slate-900 flex items-center justify-center shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Bar in Stage 2 (Matches bottom of m_intro_02.jpg: a. monogram + Explore / Contact / Legal) */}
        <footer className="w-full flex items-center justify-between text-xs text-white/85 pt-2 z-40">
          <button
            onClick={() => jumpToStage(0)}
            className="font-script text-3xl text-white/90 hover:text-white cursor-pointer"
            title="Return to Cabin Window"
          >
            a.
          </button>

          <nav className="flex items-center gap-12 sm:gap-24 text-[12px] font-medium text-white/85">
            <button
              onClick={() => setActiveFooterModal('explore')}
              className="hover:text-white transition cursor-pointer"
            >
              Explore
            </button>
            <button
              onClick={() => setActiveFooterModal('contact')}
              className="hover:text-white transition cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => setActiveFooterModal('legal')}
              className="hover:text-white transition cursor-pointer"
            >
              Legal
            </button>
          </nav>

          <div className="w-8" />
        </footer>
      </section>

      {/* =========================================================
          INTERACTIVE WATCH DEMO MODAL (Live Portal World Presets)
      ========================================================= */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#16181D] border border-white/15 p-6 sm:p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#00B2FF]" />
                <h2 className="text-lg font-semibold">
                  Auragate Reverie Engine — Interactive Portal Demo
                </h2>
              </div>
              <button
                onClick={() => setIsDemoModalOpen(false)}
                aria-label="Close Watch Demo Modal"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {(Object.keys(SKY_PRESETS) as SkyPreset[]).map((key) => {
                const preset = SKY_PRESETS[key];
                const isSelected = skyPreset === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSkyPreset(key)}
                    className={`text-left p-4 rounded-2xl border transition cursor-pointer ${
                      isSelected
                        ? 'bg-white/15 border-[#38CEFF] shadow-lg'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div
                      className="w-full h-16 rounded-xl mb-3 border border-white/20"
                      style={{ background: preset.gradient }}
                    />
                    <div className="text-xs font-semibold text-white">
                      {preset.name}
                    </div>
                    <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                      {preset.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-white">
                  Real-Time Portal Telemetry
                </div>
                <p className="text-[11px] text-white/60 mt-0.5">
                  Scroll or click below to fly the camera through the 3D molded
                  cabin aperture into the live cloud carousel.
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => {
                    setIsDemoModalOpen(false);
                    jumpToStage(0);
                  }}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white cursor-pointer"
                >
                  Cabin Window
                </button>
                <button
                  onClick={() => {
                    setIsDemoModalOpen(false);
                    jumpToStage(1);
                  }}
                  className="px-4 py-2 rounded-full bg-[#00B2FF] hover:bg-[#38CEFF] text-xs font-semibold text-slate-950 flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Fly Into Sky</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          STUDIO CONTROLS DRAWER (Triggered by "=" Menu Button)
      ========================================================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex justify-end">
          <div className="w-full max-w-sm bg-[#16181D] border-l border-white/15 h-full p-7 flex flex-col justify-between text-white shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-baseline">
                  <span className="font-script text-3xl">Aura</span>
                  <span className="text-base font-medium -ml-0.5">gate</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close Menu"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Cabin Window Shade Control */}
              <div className="mt-6">
                <label className="text-xs uppercase tracking-wider text-white/50 font-semibold block mb-2">
                  3D Cabin Window Shade ({Math.round(shadeLevel * 100)}%)
                </label>
                <input
                  type="range"
                  min={0}
                  max={0.85}
                  step={0.01}
                  value={shadeLevel}
                  onChange={(e) => setShadeLevel(parseFloat(e.target.value))}
                  className="w-full accent-[#00B2FF] cursor-pointer"
                />
              </div>

              {/* Sky Atmosphere Selector */}
              <div className="mt-6">
                <div className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-2.5">
                  Atmosphere Horizon
                </div>
                <div className="space-y-2">
                  {(Object.keys(SKY_PRESETS) as SkyPreset[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSkyPreset(key)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs border transition cursor-pointer ${
                        skyPreset === key
                          ? 'bg-[#00B2FF]/20 border-[#00B2FF] text-white font-semibold'
                          : 'bg-white/5 border-white/10 text-white/75 hover:bg-white/10'
                      }`}
                    >
                      <span>{SKY_PRESETS[key].name}</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="mt-7 space-y-2 border-t border-white/10 pt-5">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    jumpToStage(0);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-sm font-medium flex items-center justify-between cursor-pointer"
                >
                  <span>01 / Cabin Portal Hero</span>
                  <Compass className="w-4 h-4 text-[#38CEFF]" />
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    jumpToStage(1);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-sm font-medium flex items-center justify-between cursor-pointer"
                >
                  <span>02 / Sky Cloud Testimonials</span>
                  <Sparkles className="w-4 h-4 text-[#38CEFF]" />
                </button>
                <button
                  onClick={() =>
                    setAmbientAudioActive((prev) => !prev)
                  }
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-sm font-medium flex items-center justify-between cursor-pointer"
                >
                  <span>
                    Cabin Stratosphere Audio ({ambientAudioActive ? 'Active' : 'Muted'})
                  </span>
                  {ambientAudioActive ? (
                    <Volume2 className="w-4 h-4 text-[#00B2FF]" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-white/50" />
                  )}
                </button>
              </div>
            </div>

            <div className="text-[11px] text-white/45 border-t border-white/10 pt-4">
              Auragate Spatial Portal Engine — Real-time Three.js WebGL
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          FOOTER INFO MODAL (Explore / Contact / Legal)
      ========================================================= */}
      {activeFooterModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl bg-[#16181D] border border-white/15 p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-semibold capitalize">
                Auragate — {activeFooterModal}
              </h3>
              <button
                onClick={() => setActiveFooterModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-white/70 mt-4 leading-relaxed">
              {activeFooterModal === 'explore' &&
                'Browse 5 curated spatial worlds crafted with volumetric cloud rendering, real-time horizon physics, and seamless 60fps portal transitions.'}
              {activeFooterModal === 'contact' &&
                'Partner with A. Studio to architect custom spatial portals and interactive 3D world experiences for your brand.'}
              {activeFooterModal === 'legal' &&
                'All spatial environments, volumetric shaders, and interactive portal architectures are rendered in real time via WebGL.'}
            </p>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setActiveFooterModal(null)}
                className="px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
