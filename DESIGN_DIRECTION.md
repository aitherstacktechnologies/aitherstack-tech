# Aither Stack Technologies — Premium Website Design Direction

## Brand Foundation

**Accent Color:** Warm Gold/Champagne `#C9A24B` (primary) + `#E5C687` (lighter state)
- Feels premium, human, and distinct from typical tech blues
- Works beautifully on near-black `#0A0A0A` / `#111111`
- Off-white `#F5F1E8` as secondary neutral for body copy

**Typography:**
- **Display:** *Fraunces* (serif, high-contrast, editorial) — headlines, numbers, hero
- **UI/Body:** *Satoshi* (geometric sans, clean, technical) — body, UI, buttons
- **Mono:** *JetBrains Mono* — code snippets, labels, technical details

**Motion Language:**
- Duration: 800–1200ms for major transitions
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (slow, confident, cinematic)
- No bounce. No stagger > 80ms. Respect `prefers-reduced-motion`.
- Scroll-triggered: reveal on 15% viewport entry, parallax depth 0.15–0.3x

**3D Material System:**
- **Glass:** `backdrop-filter: blur(20px)`, `rgba(255,255,255,0.03)`, 1px border `rgba(201,162,75,0.15)`
- **Metal:** Matte dark grey `#1A1A1A` base, gold edge highlight `#C9A24B` on hover
- **Wireframe:** Thin gold lines (`stroke-width: 0.5px`), subtle glow on interaction

---

## 1. HOME

### Hero Headline Options

**Option A — Authority (Recommended)**
> **We engineer digital infrastructure that compounds.**
> *Bespoke web platforms. Autonomous AI systems. Business software that runs while you sleep.*

**Option B — Craft**
> **Code as craft. Systems as leverage.**
> *We build the technical foundation ambitious brands grow on — web, AI, automation, integrations.*

**Option C — Outcome**
> **Your product, unblocked by technology.**
> *From luxury commerce to autonomous agents — we ship the systems that move revenue.*

### Sub-headline (shared)
> Aither Stack is a boutique engineering studio based in Karachi, serving founders and operators across the US, UK, Europe, and Australia. We don't do retainers for the sake of it — we build high-leverage systems and stay only as long as they create value.

### What We Do (one-liner)
> **Web platforms · AI agents & voice · Automation pipelines · Custom integrations · Technical partnerships**

### Hero 3D Visual
**Concept:** *The Stack* — 5 floating geometric blocks (cube, slab, column, plate, sphere) in dark glass/metal, each representing a capability. They float in a slow orbital drift, responding to cursor with magnetic parallax (max 15px translation). On scroll, they settle into a vertical stack — the "Aither Stack" — locking into place as the section pins.

- **Materials:** Dark glass (`rgba(10,10,10,0.85)`) with gold edge catch, subtle inner glow
- **Interaction:** Cursor proximity → block rotates slightly on Y (±8°), nearest block lifts +20px
- **Scroll:** Blocks converge from orbital → vertical stack over 300vh scroll, then pin
- **Ambient:** Slow particle field (gold dust, 200 particles) behind blocks, reacts to scroll velocity

### Primary CTA
> **Start a Project** → `/contact` (gold fill, black text, magnetic hover)
> **View Work** → `/portfolio` (ghost, gold border, glass background)

---

## 2. SERVICES

### Section Intro
> **Capabilities** — *We go deep in four areas. Everything else, we say no to.*

### Monthly Retainers (Ongoing Partnerships)

| Service | Description | 3D Icon Concept |
|---------|-------------|-----------------|
| **Website Maintenance & Support** | Weekly updates, uptime monitoring, performance tuning, security patches, and 2 minor UI edits/month. Your site stays fast, safe, and current without you lifting a finger. | Glass cube with slow rotation; golden circuit pulse on hover |
| **AI Agent & Voice Bot Management** | We maintain, tune, and evolve your Vapi/Retell voice agents and LLM workflows — prompt engineering, conversation auditing, fallback handling, CRM sync. | Floating neural node network; gold synapses fire on hover |
| **Performance Marketing & Social Media** | Creative strategy, ad creative production, landing page CRO, email/SMS automation, analytics dashboards. Growth engineering, not posting calendars. | Ascending bar chart in wireframe; bars grow on scroll reveal |
| **Dedicated Full-Stack / UI-UX Developer Support** | A named engineer embedded in your sprint cycle — features, refactors, design-system work, code review. No tickets, no handoffs, no juniors. | Metallic hex nut; threads catch light on hover |

### One-Time Projects (Fixed Scope, Fixed Price)

| Service | Description | 3D Icon Concept |
|---------|-------------|-----------------|
| **Luxury E-Commerce / Web Apps** | Headless commerce (Shopify Hydrogen, Medusa, custom), 3D product viewers, AR try-on, custom checkout, multi-currency, B2B portals. Sub-100ms TTFB. | Faceted gemstone; refracts gold light as it rotates |
| **High-Converting Landing Pages** | Scroll-driven narrative pages, GSAP/Framer animations, A/B test infrastructure, form-to-CRM pipelines, 95+ Lighthouse. Built for paid traffic. | Origami fold — unfolds on hover to reveal layers |
| **AI Voice Assistant & Chatbot Setup** | Vapi/Retell voice agents with custom knowledge bases, Cal.com booking, Supabase logging, WhatsApp/SMS fallback, analytics dashboard. Live in 10 days. | Sound wave sphere; ripples on hover |
| **UI/UX Design & Brand System Creation** | Figma design systems (tokens, components, dark/light), interactive prototypes, motion specs, developer handoff packages. Build-ready, not just pretty. | Penrose triangle — impossible geometry, precise edges |

### Layout & Interaction
- **Desktop:** 2×4 grid (retainers top, projects bottom) with category toggle tabs
- **Cards:** Dark glass (`rgba(17,17,17,0.9)`), 1px gold border on hover, lift -8px, inner glow `rgba(201,162,75,0.15)`
- **Hover:** Icon animates (rotate/scale/pulse), description fades in, border glows
- **Mobile:** Single column, cards stack, tap to expand accordion-style

---

## 3. PROCESS

### Section Intro
> **How We Work** — *No discovery theater. No endless Figma rounds. We ship in 4–6 weeks.*

### Steps

| Step | Title | Description | 3D Visual |
|------|-------|-------------|-----------|
| **01** | **Audit & Architecture** | We tear down your current stack, map data flows, define the technical spec, and lock scope. You approve a written architecture doc before a line of code. | Node 1: Octahedron — wireframe, gold vertices |
| **02** | **Design System & Prototypes** | High-fidelity screens, component library, motion specs, interactive prototype. You click through the product before we build it. | Node 2: Icosahedron — facets fill with glass on approval |
| **03** | **Development & Integration** | Clean, typed code (React/Next, Node/Go, Supabase/Postgres). AI agents trained. Automations wired. Daily commits, weekly builds you can touch. | Node 3: Dodecahedron — edges trace like circuit paths |
| **04** | **Launch & Calibration** | Staged rollout, synthetic monitoring, load test, 14-day hypercare. We fix, tune, document. You own the repo day one. | Node 4: Tetrahedron — sharp, complete, gold apex |
| **05** | **Evolve (Optional)** | Retainer kicks in only if you want ongoing velocity. Otherwise, we hand off clean — docs, runbooks, video walkthroughs. | Node 5: Sphere — returns to orbital drift (loops to hero) |

### Visual Metaphor
**The Constellation Path** — 5 numbered nodes floating in 3D space, connected by a subtle gold Bezier curve that draws itself on scroll (SVG `stroke-dashoffset` animation). Each node is a distinct platonic solid in dark metal. As you scroll past each step, its node:
1. Enlarges 1.3x
2. Material shifts wireframe → solid glass → gold edge highlight
3. Label fades in with `clip-path` reveal
4. Connecting curve segment completes

On mobile: vertical stack, curve becomes a dotted line, tap node to expand.

---

## 4. PORTFOLIO

### Section Headline
> **Selected Work** — *Systems we've shipped for brands who needed more than a website.*

### Subtext
> Each project below started with a constraint — speed, complexity, regulation, ambition — and ended with a system that runs without us.

### Layout
**Horizontal Scroll Carousel (Desktop)** — Cards in a `flex` row with `scroll-snap`, infinite loop via duplication. Each card:
- **Aspect:** 16:10 thumbnail (project hero image/video)
- **Overlay:** Dark gradient bottom 40%, project name + category in Fraunces
- **Hover/Tilt:** 3D tilt (`rotateX/Y ±6°` via cursor), scale 1.02, gold border glows
- **Click:** Opens modal (not new page) with full case study — problem, approach, stack, metrics, live link

**Masonry Grid (Mobile ≤768px)** — 2-col, variable height, same tilt on touch-drag (gyroscope fallback).

### Card Data Structure (for CMS)
```json
{
  "title": "Vanguard Luxe",
  "category": "Luxury E-Commerce",
  "stack": ["Next.js", "Shopify Hydrogen", "Supabase", "GSAP"],
  "metrics": ["3.2s → 0.8s LCP", "40% ↑ conversion", "99.99% uptime"],
  "thumbnail": "/work/vanguard.jpg",
  "hero": "/work/vanguard-hero.mp4",
  "description": "Headless luxury commerce with 3D product viewer, custom checkout, multi-warehouse inventory.",
  "link": "https://vanguardluxe.com",
  "year": 2024
}
```

---

## 5. TEAM

### Section Intro
> **The Studio** — *Small, senior, no account managers. You work directly with the people writing the code.*

### Team Members (placeholder — replace with real)

| Name | Role | One-Liner |
|------|------|-----------|
| **Zaman** | Founder / Creative Engineer | Writes the architecture, designs the system, ships the v1. |
| **Ahmed** | AI & Automation Lead | Builds voice agents that sound human and workflows that don't break. |
| **Hurairah** | Backend & Infrastructure | Designs data models that scale, APIs that are boring in the best way. |
| **Usha** | Operations & Delivery | Keeps scope honest, timelines real, communication transparent. |
| **Waseem** | Project & Client Partner | Translates business goals into technical plans — and back again. |

### Card Style
- **Base:** Dark glass card (`rgba(17,17,17,0.95)`), subtle vignette
- **Photo:** Circular crop, 1:1, gold ring border (1px), hover → ring expands to 3px + soft glow
- **Name:** Fraunces, 1.25rem, off-white
- **Role:** Satoshi, 0.75rem, gold, uppercase, tracking-wide
- **Bio:** Satoshi, 0.875rem, `rgba(245,241,232,0.7)`, 2 lines max
- **Hover:** Card lifts -6px, inner gold glow `box-shadow: 0 0 40px rgba(201,162,75,0.12)`, photo ring pulses
- **Layout:** 5-up desktop, 2-col tablet, 1-col mobile

---

## 6. CONTACT

### Headline
> **Let's talk about what you're building.**

### Subtext
> No sales scripts. No junior handoff. You'll speak with a senior engineer who can scope, architect, and quote in one conversation. We reply within 24 hours — usually sooner.

### Form Fields (minimal)
- Name
- Email
- Project type (select: Retainer / One-Time / Not Sure)
- Budget range (select: $10–25k / $25–50k / $50–100k / $100k+)
- One sentence on what you need (textarea, required)

### Submit CTA
> **Start the conversation** — gold fill, black text

### Direct Contact (below form)
> **Prefer email?** `hello@aitherstack.com`  
> **Karachi, Pakistan** — Working US/UK/EU/AU hours

---

## 7. BOOK A CALL

### Headline
> **Book a Strategy Call**

### Subtext
> 30 minutes. No pitch. We'll map your constraints, pressure-test the idea, and leave you with a clear next step — whether that's us, a referral, or a "not yet."

### Calendar Embed
- **Cal.com** inline embed (clean, dark mode forced via CSS)
- **Availability:** Mon–Fri, 9am–6pm PKT (covers US morning, UK afternoon, AU evening)
- **Questions on booking:** Project type, timeline, budget range (optional)

### Page Design
- **Minimal.** No 3D. No parallax. No heavy motion.
- Background: Solid `#0A0A0A`
- Single column, max-width 640px, centered
- Calendar in a dark glass card (`rgba(17,17,17,0.95)`), rounded `2xl`
- Only motion: subtle fade-in on load (600ms), button hover states
- Footer: Link back to Home, Privacy, Terms

---

## Global Components

### Navigation
- **Desktop:** Fixed top bar, glass (`rgba(10,10,10,0.8)`), blur 20px
  - Logo (mark + "Aither Stack" in Fraunces)
  - Links: Work, Services, Process, Team, Contact
  - CTA: "Book a Call" (gold pill)
- **Mobile:** Hamburger → full-screen overlay, links animate in stagger 60ms
- **Scroll state:** Border-bottom appears (`rgba(201,162,75,0.15)`), background opacity 0.95

### Footer
- Minimal: Logo, 3 columns (Studio / Work / Legal), social (LinkedIn, Twitter/X, GitHub)
- Gold hairline top border
- Copyright in mono, `rgba(245,241,232,0.4)`

### Button System
| Variant | Style | Use Case |
|---------|-------|----------|
| **Primary** | Gold fill `#C9A24B`, black text, rounded `full`, magnetic hover (scale 1.02, glow) | Main CTAs |
| **Secondary** | Glass bg, gold border, off-white text, hover → gold fill | Secondary actions |
| **Ghost** | Transparent, off-white text, hover → gold underline | Tertiary, links |
| **Icon** | Circular, glass, gold icon, hover → gold bg | Nav, social, close |

### Scroll Progress
- Thin gold line (2px) fixed top, `width` = scroll progress
- Visible only after 100px scroll

### Cursor (Desktop only)
- Custom cursor: 8px gold ring, follows with 60ms lag
- On interactive: ring expands to 24px, fill `rgba(201,162,75,0.15)`
- On magnetic elements: snaps to center

---

## Technical Implementation Notes

### Stack Recommendations
- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS + CSS Variables for theming
- **3D:** React Three Fiber + Drei (GLTF models, instanced meshes for particles)
- **Animation:** Framer Motion (scroll, layout, gestures) + GSAP (complex timelines)
- **Forms:** React Hook Form + Zod
- **CMS:** Sanity or Contentful (for portfolio, team, services)
- **Hosting:** Vercel (edge functions for global latency)

### Performance Budget
- **JS Bundle:** < 150KB gzipped (excl. 3D)
- **3D Assets:** < 500KB total (compressed GLTF + Draco)
- **LCP:** < 1.5s (hero image preload, critical CSS inline)
- **CLS:** 0 (reserve space for all dynamic content)

### Accessibility
- Semantic HTML5 landmarks
- Focus visible: 2px gold outline, 2px offset
- `prefers-reduced-motion`: disable all non-essential animation
- `prefers-contrast`: increase border weights, gold → brighter `#E5C687`
- Alt text for all 3D canvas (aria-label describing the metaphor)
- Keyboard navigable 3D (arrow keys rotate/zoom)

---

## Content Checklist for Client

- [ ] Finalize hero headline choice (A/B/C)
- [ ] Provide real team photos + bios
- [ ] Portfolio projects: images, metrics, descriptions, live URLs
- [ ] Cal.com link + availability confirmation
- [ ] Email address for contact form
- [ ] Legal: Privacy Policy, Terms of Service URLs
- [ ] Favicon / touch icons (gold mark on black)
- [ ] OG images for each page (1200×630, dark theme)

---

*Document version 1.0 — Ready for design/development handoff.*