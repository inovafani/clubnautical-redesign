# Project Specs — Club Nautical Website Redesign

## What the App Does & Who Uses It
A premium marketing website for Club Nautical, an Australian luxury superyacht charter broker. Used by prospective clients (private, family, corporate) researching and enquiring about yacht charter experiences across Australia and the South Pacific.

## Tech Stack
- **Framework:** Next.js (App Router, latest)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** GSAP (ScrollTrigger, useGSAP)
- **Fonts:** Cormorant Garamond, Tenor Sans, Poppins (Google Fonts)
- **Hosting:** Vercel
- **No auth/database needed** — static marketing site with contact form (client-side only)

## Design Tokens
- **Navy:** #003052 | Dark navy: #04263c | Darkest: #021f33
- **Sea blue:** #308EC7 | Champagne: #D8D2AB
- **Canvas:** #fbfaf6 | Tan: #f3f0e8
- **Display font:** Cormorant Garamond | UI font: Tenor Sans | Body: Poppins

## Page Sections (in order)
1. Fixed Nav (transparent → navy on scroll)
2. Hero (full-bleed looping video, Direction A cinematic)
3. Trust Strip (navy bg, 6 trust signals)
4. Gateway Intro (split layout — text + image)
5. What Is a Superyacht Charter (sticky image + scrolling text)
6. Top Rated / What We Help With (text + image + numbered list)
7. Our Destinations (dark navy, centered yacht image flanked by 3+3 destinations)
8. Our Services (4-column grid with SVG icons)
9. Quick Answers (5 native accordions)
10. What's Included + Cost (split columns, pricing breakdown, image banner, pricing box)
11. Why Choose Us (navy bg, image + 5-item grid)
12. Types of Charters (3 cards with icons)
13. Booking Process (4 numbered steps)
14. Charter Duration (3 columns)
15. Accommodation (split layout)
16. Common Challenges & Solutions (3 cards)
17. Corporate (dark navy, split layout)
18. Safety / Experience / Next Steps (3-column)
19. Reputation (tan bg, image + 2-col text + quote box)
20. Trusted Across Every Service (2×2 grid)
21. Reviews (dark navy, featured + 2 stacked)
22. FAQ (sticky yacht image + tabbed accordion, 30+ Qs)
23. Contact (navy bg, info card + enquiry form)
24. Footer (dark navy, links grid)

## Assets
- Logo white: https://irp.cdn-website.com/b371e29e/dms3rep/multi/logowhite.png
- Hero video: https://vid.cdn-website.com/b371e29e/videos/kXc6774kQxWP6ojKn0pW_freepik_video-upscale_2560x1440_30fps_52975-v.mp4
- Images from CDN: https://irp.cdn-website.com/b371e29e/dms3rep/multi/

## GSAP Animation Plan
- Hero: Word-stagger text reveal on headline, subtitle + buttons fade in
- Nav: Animate in from top on load, bg transition on scroll
- All sections: ScrollTrigger fade + translateY reveals with stagger
- Stats: Counter animation (20+, 25+)
- Destinations: Left items slide from left, right items from right, boat image scale in
- Services/Types cards: Stagger reveal with slight Y offset
- Booking steps: Sequential left-border color change + number reveal
- Parallax: Wide banner images shift on scroll
- FAQ: GSAP height animation for accordion open/close
- Buttons: Magnetic hover effect
- Trust strip: Subtle horizontal scroll marquee

## What "Done" Looks Like
- All sections rendered pixel-perfectly matching the design file
- GSAP animations fire on scroll throughout the page
- Hero video loops forever
- FAQ tabs filter questions by category
- Contact form has client-side validation + thank-you state
- `npm run build` passes with zero TypeScript errors
- Page loads and animations work in browser
