/** Structured copy for the Porten Doors homepage. */

export const PORTEN_BRAND = {
  name: "Porten Doors",
  tagline: "Door replacement & installation — Greater Vancouver & Vancouver Island",
} as const;

export const PORTEN_PHONE_DISPLAY = "+1 (XXX) XXX-XXXX";
export const PORTEN_PHONE_TEL = "+1-XXX-XXX-XXXX";

/** Featured teaser card (hero aside); exported separately so the hero never reads a stale nested ref. */
export const HERO_FEATURED_CARD = {
  title: "Featured",
  text: "134+ installs — all in-house crew, BC-built detailing.",
  linkHref: "/projects",
  linkLabel: "View",
} as const;

export const HERO = {
  h1: "Door Replacement & Installation in Greater Vancouver and Vancouver Island",
  subheadline:
    "No more drafts. No more shoulder-pushing. No subcontractors — ever. Built for BC rain, backed by a 5-year warranty on door and labour.",
  primaryCta: "Get a Free Estimate",
  secondaryCtaLabel: `📞 ${PORTEN_PHONE_DISPLAY}`,
  microcopy: "Free in-home visit. No deposit. We respond within 2 hours.",
  featuredCard: HERO_FEATURED_CARD,
} as const;

/** Full-bleed hero background carousel (local assets under `/public/hero/`).
 * `brightness` is applied under the shared scrims so lighter source photos match slide 1 contrast. */
export const HERO_BACKGROUND_SLIDES = [
  {
    src: "/hero/slide-1.png",
    alt: "Architectural door at the end of a forest path — conceptual exterior entry",
    brightness: 0.92,
  },
  {
    src: "/hero/slide-2.png",
    alt: "Architectural door on a mountain boardwalk — conceptual exterior entry",
    brightness: 0.74,
  },
  {
    src: "/hero/slide-3.png",
    alt: "Architectural door on a coastal path at dusk — conceptual exterior entry",
    brightness: 0.7,
  },
] as const;

/** Pause between slide advances; keep comfortably longer than the hero crossfade (~3.6s). */
export const HERO_SLIDE_INTERVAL_MS = 8500;

/** Trust section header (homepage, below hero). */
export const TRUST_SECTION = {
  eyebrow: "[ proof ]",
  headline: "Built on proof",
} as const;

/** Trust bar — label + Iconify icon id (homepage strip). */
export const TRUST_ITEMS = [
  { label: "134+ Doors Installed", icon: "mdi:door-sliding" },
  { label: "5-Year Warranty on Doors & Labour", icon: "mdi:shield-check" },
  { label: "No Subcontractors — Ever", icon: "mdi:account-hard-hat" },
  { label: "Custom Sizes & Designs Available", icon: "mdi:ruler-square-compass" },
  { label: "WorkSafeBC Licensed", icon: "mdi:certificate" },
  { label: "BBB Accredited", icon: "mdi:seal-variant" },
] as const;

export const SITUATION = {
  heading: "Your home deserves a door that works as well as it looks",
  intro:
    "Most homeowners put it off for years. Then one morning — pushing the door with your shoulder again, or watching the rain come under the threshold — you decide: enough. Below are the situations we fix most often.",
  cards: [
    {
      title: "No More Drafts",
      description:
        "Cold spots, whistling gaps, and heat leaking around the entry — fix the opening as a sealed system and the hallway stops feeling like the outdoors.",
    },
    {
      title: "Stop Fighting Your Door",
      description:
        "Binding slabs, sagging frames, and sticky hardware turn every exit into effort — the door should open cleanly without leaning or lifting.",
    },
    {
      title: "Bring the Backyard Back",
      description:
        "Patio and sliding doors that jam halfway quietly retire your deck — restore glide and alignment so indoor–outdoor living works again.",
    },
    {
      title: "Worth Every Penny",
      description:
        "The right door plus a careful install reads like a whole-home upgrade — curb appeal, sound, and daily feel change more than the single opening suggests.",
    },
  ],
} as const;

export const SERVICES = {
  heading: "What we replace & install",
  items: [
    {
      slug: "entry",
      title: "Entry Doors",
      description:
        "No more cold spots, shoulder-pushes, or rain under the threshold.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    },
    {
      slug: "patio",
      title: "Patio & Sliding Doors",
      description: "Slides like butter. One finger. Your backyard, restored.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
    },
    {
      slug: "interior",
      title: "Interior Doors",
      description: "Closes like a bank vault. No rattling, no gaps, no embarrassment.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
    },
    {
      slug: "double",
      title: "Double Doors",
      description:
        "Sealed against BC rain. Opens smoothly. Looks like it belongs there.",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80",
    },
    {
      slug: "steel",
      title: "Steel Doors",
      description: "Feels safer. Shuts solid. Built for the Pacific Northwest.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
    },
    {
      slug: "custom",
      title: "Custom Doors",
      description: "Your opening, your design. Made right — not forced to fit.",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
    },
  ],
} as const;

export const MICRO_CONVERSION = {
  heading: "View Full Catalogue",
  subtext:
    "Email capture → access to full door catalogue with all options, materials, and styles.",
  cta: "View Full Catalogue →",
} as const;

export const SEO_BLOCK = {
  heading:
    "Door Replacement & Installation in Greater Vancouver and Vancouver Island",
  paragraphs: [
    'Porten replaces and installs entry doors, patio doors, and interior doors for homeowners across Greater Vancouver and Vancouver Island. Our team has completed 134+ door installations throughout BC — every one done by our own installers, no subcontractors at any stage. Homeowners tell us the same thing after: "I should have done this years ago."',
    "British Columbia's climate is hard on doors. Coastal humidity, heavy Pacific rain, and seasonal freeze-thaw cycles cause door frames to swell, weatherstripping to fail, and hardware to corrode faster than in drier climates — leaving homeowners with cold hallways, water under the threshold, and doors that stick every morning.\n\nA door replacement in Vancouver or Surrey is not just a product swap: it means removing the old unit, inspecting the rough opening for hidden rot, applying proper flashing and moisture barriers, and installing the new door as a sealed system. That is why the result feels different — no more drafts, no more struggling, no more trickle of cold air at the sill.",
    "Porten provides residential door installation and replacement across Metro Vancouver, the Fraser Valley, and Vancouver Island — including Vancouver, Surrey, Burnaby, Richmond, Coquitlam, North Vancouver, Langley, Chilliwack, and Victoria.\n\nEvery project carries a 5-year warranty on the door and a separate 5-year warranty on installation labour. If something is not right after we leave, we come back and fix it — our own team, our own warranty, no runaround.",
  ],
} as const;

export const SERVICE_AREA = {
  heading: "Serving Greater Vancouver & Vancouver Island",
  intro:
    "Porten installs and replaces doors across Metro Vancouver, the Fraser Valley, and Vancouver Island.",
  areas: [
    "Door Replacement in Vancouver",
    "Door Replacement in Surrey",
    "Door Installation in Burnaby",
    "Door Replacement in Richmond",
    "Door Installation in Coquitlam",
    "Door Replacement in North Vancouver",
    "Door Installation in Langley",
    "Door Replacement in Chilliwack",
    "Door Replacement in Victoria",
  ],
} as const;

export const HOW_IT_WORKS = {
  heading: 'From "I\'m done putting this off" to a door that works every single day',
  intro:
    'Most homeowners tell us the same thing after: "I should have done this years ago." Here\'s how simple we make it.',
  steps: [
    {
      title: "Step 1 — Free In-Home Visit",
      body: "We come to you, measure the opening, check the frame for hidden rot or moisture damage, and give you a flat-rate quote on the spot. No pressure, no deposit, no surprises added later.",
    },
    {
      title: "Step 2 — Choose Your Door",
      body: "We help you find what actually works for BC — not just what looks good in a showroom. Mineral wool insulation, thermal break frames, smooth-glide patio systems. No upselling. We'll tell you straight what you need.",
    },
    {
      title: "Step 3 — Clean Installation",
      body: "Our own team — nobody else's. We remove the old door, fix any frame issues we find, set the new unit plumb and level, seal everything properly against BC rain, and test every open-and-close cycle before we're done.",
    },
    {
      title: "Step 4 — Spotless Finish & 5-Year Warranty",
      body: "We clean up completely — not a trace left. Walk you through the result. And cover everything with a 5-year warranty on the door and a separate 5-year warranty on our work. If anything isn't right, we come back. No runaround.",
    },
  ],
  bottomQuoteLines: [
    '"Left no mess."',
    '"Came back next day to adjust."',
    '"Sounds like a bank vault when it shuts."',
    '— That\'s the standard we hold ourselves to.',
  ],
} as const;

export const RISK_REVERSAL = {
  heading: "No ghosting. No bait-and-switch. No mess left behind.",
  intro:
    "We know what you've heard: contractor quoted one price, charged another. Sent someone you'd never met. Left the place a mess. We built Porten around not being that company.",
  cards: [
    {
      title: '"No surprise charges." — Flat-rate, always.',
      body: "The price we quote is the price you pay. We find frame issues during the estimate — not halfway through your wall. If something changes, we tell you before we touch it.",
    },
    {
      title: '"Spotless install." — We clean up completely.',
      body: "We take the old door out, remove all packaging and debris, sweep the work area, and walk you through everything before we leave. Not a trace. Homeowners tell us this is the part they didn't expect.",
    },
    {
      title: '"Real support after install." — 5-year warranty, no runaround.',
      body: "If a seal fails or hardware sticks, we come back. Our own warranty. Our own team. Not a manufacturer's call centre that puts you on hold. The same people who installed your door will come back to fix it.",
    },
  ],
} as const;

export const PROJECTS = {
  heading: "Recent door replacements across Greater Vancouver",
  items: [
    {
      title: "Entry Door · Mount Pleasant, Vancouver",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
    },
    {
      title: "Sliding Patio Door · Metrotown, Burnaby",
      image:
        "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=900&q=80",
    },
    {
      title: "Steel Entry Door · Newton, Surrey",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
    },
    {
      title: "Double Entry Door · Cloverdale, Surrey",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    },
  ],
  linkHref: "/projects",
  linkText: "View all projects →",
  linkAnchorLabel: "Our Door Replacement Projects",
} as const;

export const ABOUT = {
  heading: 'Why BC homeowners choose Porten — and say "worth every penny."',
  paragraphs: [
    "Porten was built on a simple frustration: too many door companies treat installation as an afterthought. A steel door with thin insulation, no thermal break in the frame, and a single perimeter seal will let cold in and moisture through within two or three Vancouver winters — and the homeowner pays twice.",
    "Our team has spent three years installing doors across BC, and every project starts the same way: we look at what's actually there before we decide what goes in. We check the rough opening for rot, measure for plumb and square, and inspect the threshold and sill for trapped moisture. No shortcuts on the frame. No covering up water damage behind a new door. No subcontractors whose work we can't stand behind.",
    "Every Porten installation is done by our own people, covered by our own warranty, and built to the standard that BC's climate actually demands.",
  ],
  linkHref: "/about",
  linkText: "→ Learn about Porten",
  linkAnchorLabel: "About Porten",
} as const;

export const FAQ = {
  heading: "Common questions about door replacement in BC",
  items: [
    {
      question:
        "Q1 — Do you use subcontractors for door installation?",
      answer:
        "No. Every Porten installation is completed by our own trained team. No subcontractors, no exceptions. You know exactly who is coming to your home, and we stand behind every installation with our own 5-year labour warranty.",
    },
    {
      question: "Q2 — What warranty do you offer on door replacement?",
      answer:
        "Porten provides a 5-year warranty on all doors and a separate 5-year warranty on installation labour. Both warranties are included with every project — no upgrades or additional cost required.",
    },
    {
      question: "Q3 — Which areas in BC do you serve?",
      answer:
        "We install and replace doors across Greater Vancouver (Vancouver, Surrey, Burnaby, Richmond, Coquitlam, North Vancouver, Langley, Chilliwack) and Vancouver Island, including the Victoria and Langford areas.",
    },
    {
      question: "Q4 — How long does a door replacement take?",
      answer:
        "Most single door replacements take 4 to 6 hours. We remove the old unit, inspect and treat the frame, set the new door plumb and level, apply flashing and perimeter seals, and test every cycle before we leave. Double doors or complex openings may take a full day.",
    },
    {
      question:
        "Q5 — What happens if there's hidden rot or moisture damage behind the old door?",
      answer:
        "We inspect the rough opening and frame before the new door goes in. If we find rot, compromised framing, or moisture damage — common in BC homes after years of Pacific rain — we address it before installation. We'll explain what we found and what the fix involves before we proceed. No surprises added to your bill without a conversation first.",
    },
    {
      question:
        "Q6 — What type of steel doors do you install, and how are they insulated?",
      answer:
        "For exterior installations in BC homes, we use steel entry doors from the outdoor-rated Proof series — built specifically for exterior and coastal conditions. The door frame includes a thermal break: the inner and outer sections of the frame are separated by an insulating layer, which prevents the metal from freezing through in winter and stops condensation forming inside the home.\n\nThe door panel is filled with mineral wool insulation, and the perimeter uses two or three rubber gasket seals. Hardware includes reinforced anti-lift hinges and multi-point locking cylinders. The exterior surfaces use UV-resistant polymer coating that holds up to Pacific rain, frost, and coastal salt air.",
    },
    {
      question: "Q7 — Do I need to be home during installation?",
      answer:
        "Yes. We ask that a homeowner or authorized adult be present for the full installation to review the work and sign off on completion. We'll confirm the appointment time that works best for your schedule.",
    },
  ],
} as const;

export const FINAL_CTA = {
  heading: "Done putting it off?",
  text: "Start with a free in-home visit. No deposit. No pressure. Just a straight answer about what you need and what it costs.",
  buttonLabel: "Get My Free Estimate",
  microcopy: "No deposit. No spam. We respond within 2 hours.",
} as const;

export const DOOR_TYPE_OPTIONS = [
  { value: "", label: "Door type *" },
  { value: "entry", label: "Entry door" },
  { value: "patio", label: "Patio / sliding" },
  { value: "interior", label: "Interior" },
  { value: "double", label: "Double entry" },
  { value: "steel", label: "Steel entry" },
  { value: "custom", label: "Custom" },
  { value: "unsure", label: "Not sure yet" },
] as const;
