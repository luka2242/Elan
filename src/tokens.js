/* ------------------------------------------------------------------ */
/*  Design tokens imported from Figma — "Elan sajt"                    */
/*  (file DELYSbtiTCxT39DgnzdlwT, Home / Hero node 675:980).           */
/*  Pulled via get_variable_defs, not eyeballed — treat as source of   */
/*  truth and re-sync here if the Figma variables change.              */
/* ------------------------------------------------------------------ */

export const NEUTRAL = {
  0: "#ffffff",
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#e8e8e8",
  300: "#d6d6d6",
  400: "#a5a5a5",
  500: "#757575",
  600: "#575757",
  700: "#444444",
  800: "#2b2b2b",
  900: "#1c1c1c",
};

// Tag/label accent colors — the "-20" tint used for hero skill pills/process
// card tabs, "-60" the red brand accent, "-80" the deeper shade used for
// card glows and process-card tab text.
export const ACCENT = {
  red: { 20: "#ff9985", 60: "#e53917", 80: "#c13a1f" },
  purple: { 20: "#baadfb", 80: "#5f47cc" },
  yellow: { 20: "#ffd978", 80: "#d99725" },
  green: { 20: "#62d989", 80: "#238c46" },
  blue: { 20: "#6dd3f2", 80: "#1183a6" },
};

export const FONT_FAMILY = "'Zalando Sans', sans-serif";

export const FONT_SIZE = {
  fs200: 14,
  fs300: 18,
  fs400: 24,
  fs500: 32,
  fs600: 48,
  fs700: 64,
  fs800: 72,
  fs900: 96,
};

export const FONT_WEIGHT = {
  fw100: 200, // ExtraLight
  fw200: 400, // Regular
  fw300: 600, // SemiBold
};

// Default/desktop-resolved value for each token — used wherever a component
// isn't breaking responsively on that property.
export const SPACING = {
  sp100: 4,
  sp200: 8,
  sp300: 16,
  sp400: 32,
  sp500: 56,
  sp600: 80,
  sp700: 112,
  sectionPadding: 32,
};

// Home page device frames (Figma component variants: Mobile / Mobile Vertical
// / Tablet / Laptop / Desktop). Several spacing and type-size variables
// resolve to a different value per frame — these are Figma's real min-widths
// (per the "Collection 1" variables table: 479-/767-480/899-768/1439-900/
// 1440+), not Tailwind's default scale, so components use literal
// `min-[Npx]:` variants against these numbers rather than sm:/md:/lg:/xl:.
// (laptop was mistranscribed as 1100 for a long time — it's 900, confirmed
// against the section-headline variable's own mode table.)
export const BREAKPOINT = {
  mobile: 0,
  mobileVertical: 480,
  tablet: 768,
  laptop: 900,
  desktop: 1440,
};

// Per-breakpoint resolutions for tokens that actually vary across the Home
// device frames, read off the resolved fallbacks in each frame's design
// context (get_design_context embeds the true per-instance value as the CSS
// var() fallback, confirmed against get_variable_defs on 675:980 / 676:4762 /
// 675:1228). Mobile and Mobile Vertical share a value everywhere except the
// hero-label font size, so most of these only need 4 entries.
export const RESPONSIVE = {
  // layout/section-padding — outer section gutters
  sectionPadding: { mobile: 20, tablet: 24, laptop: 24, desktop: 32 },
  // layout/Spacing/sp-400 — hero content gap / services header inset
  sp400: { mobile: 20, tablet: 24, laptop: 24, desktop: 32 },
  // layout/Spacing/sp-600 — hero closing-band / services header block
  sp600: { mobile: 48, tablet: 56, laptop: 64, desktop: 80 },
  // layout/Spacing/sp-700 — hero closing-statement vertical padding
  sp700: { mobile: 64, tablet: 72, laptop: 88, desktop: 112 },
  // layout/Spacing/sp-500 (3-tier: mobile/mobileVertical share 32)
  sp500: { mobile: 32, tablet: 40, laptop: 48, desktop: 56 },
  // text/font-sizes/fs-700 + tracking — hero headline
  fs700: {
    mobile: { size: 36, tracking: -1.08 },
    tablet: { size: 48, tracking: -1.44 },
    laptop: { size: 54, tracking: -1.62 },
    desktop: { size: 64, tracking: -1.92 },
  },
  // text/font-sizes/fs-600 + tracking — hero/services section headlines
  fs600: {
    mobile: { size: 32, tracking: -0.96 },
    tablet: { size: 36, tracking: -1.08 },
    laptop: { size: 44, tracking: -1.32 },
    desktop: { size: 48, tracking: -1.44 },
  },
  // text/font-sizes/fs-500 + tracking — services card titles (2-tier only)
  fs500: {
    mobile: { size: 24, tracking: -0.72 },
    desktop: { size: 32, tracking: -0.96 },
  },
  // text/font-sizes/fs-400 + tracking (2-tier: steps once at tablet, holds
  // through laptop/desktop; mobile and mobile-vertical share the same value)
  fs400: {
    mobile: { size: 20, tracking: -0.6 },
    tablet: { size: 24, tracking: -0.72 },
  },
  // text/font-sizes/fs-800 + tracking — every tier differs
  fs800: {
    mobile: { size: 40, tracking: -1.2 },
    mobileVertical: { size: 44, tracking: -1.32 },
    tablet: { size: 54, tracking: -1.62 },
    laptop: { size: 64, tracking: -1.92 },
    desktop: { size: 72, tracking: -2.16 },
  },
  // text/font-sizes/fs-900 + tracking — every tier differs
  fs900: {
    mobile: { size: 48, tracking: -1.44 },
    mobileVertical: { size: 54, tracking: -1.62 },
    tablet: { size: 64, tracking: -1.92 },
    laptop: { size: 72, tracking: -2.16 },
    desktop: { size: 96, tracking: -2.88 },
  },
  // text/semantinc-values/hero-labels + padding/radius — HeroLabel (676:4762)
  heroLabel: {
    mobile: { size: 20, padX: 16, padY: 8, radius: 8 },
    mobileVertical: { size: 24, padX: 16, padY: 8, radius: 8 },
    tablet: { size: 36, padX: 16, padY: 8, radius: 12 },
    laptop: { size: 44, padX: 24, padY: 16, radius: 16 },
    desktop: { size: 64, padX: 32, padY: 16, radius: 16 },
  },
  // text/semantic-values/section-headline — not its own literal ramp, but an
  // ALIAS onto fs900/fs800/fs700 above (mobile/mobileVertical → fs900,
  // tablet → fs800, laptop/desktop → fs700), resolved here per device frame
  // the same way home.css's --section-headline-size/tracking do via var().
  // Used by every section headline (Services, Featured work, Process,
  // hero-closing, project name, case-next), not just one.
  sectionHeadline: {
    mobile: { size: 48, tracking: -1.44 }, // = fs900.mobile
    mobileVertical: { size: 54, tracking: -1.62 }, // = fs900.mobileVertical
    tablet: { size: 54, tracking: -1.62 }, // = fs800.tablet
    laptop: { size: 54, tracking: -1.62 }, // = fs700.laptop
    desktop: { size: 64, tracking: -1.92 }, // = fs700.desktop
  },
};
