"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const faqs = [
  {
    q: "How much does it cost to charter a superyacht for a week?",
    a: "Weekly base rates vary by yacht size, destination, and season. For peak season in 2026, expect approximately $50,000 to $120,000 for a 24 to 30-metre yacht, $120,000 to $280,000 for 30 to 40 metres, and $280,000 to $700,000+ for 40 to 60 metres. Operational costs (fuel, food, port fees, gratuity) add 30 to 60% on top of the base rate. Club Nautical provides a full cost breakdown before you commit.",
  },
  {
    q: "What should I expect on my first superyacht charter?",
    a: "First-time charterers are guided through every step by our team. We help you select the right yacht, plan your itinerary, and prepare for life on board. A pre-charter briefing covers safety protocols, daily routines, crew introductions, and what to expect at each destination. Virtual yacht tours and past guest references are available to build confidence before you book.",
  },
  {
    q: "How far in advance should I book a superyacht charter?",
    a: "Average lead times are increasing, with many bookings made 5 to 7 months ahead. High-season charters and expedition voyages require 6 to 12 months advance planning. We recommend starting the conversation early to secure the best yacht and itinerary for your preferred dates.",
  },
  {
    q: "Can I customise the menu and onboard experience?",
    a: "Every charter is tailored to your preferences. Our onboard chefs create gourmet menus around your tastes, dietary requirements, allergies, and cultural preferences. For special occasions, we coordinate floral arrangements, entertainment, themed decor, and bespoke shore excursions. Nothing is standardised.",
  },
  {
    q: "Is a superyacht charter worth the investment?",
    a: "A private yacht charter delivers a level of privacy, personalisation, and access that no other travel experience can match. For families, friend groups, and corporate teams, the per-person cost often compares favourably to ultra-luxury resort stays when you factor in accommodation, gourmet meals, water sports, entertainment, and the freedom to visit multiple destinations in a single trip.",
  },
];

export default function QuickAnswersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo((sectionRef.current?.querySelector(".qa-header")) ?? null, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(
        Array.from(listRef.current?.children ?? []),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: listRef.current, start: "top 85%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#f3f0e8", padding: "104px 56px" }}>
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <div className="qa-header" style={{ textAlign: "center", marginBottom: 50 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, justifyContent: "center" }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>Quick Answers</span>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(32px,3.4vw,46px)", lineHeight: 1.1, color: "#003052", margin: 0, letterSpacing: "-0.01em" }}>
            Quick answers about superyacht charters
          </h2>
        </div>

        <div ref={listRef}>
          {faqs.map((f, i) => (
            <details
              key={i}
              className="cn-acc"
              style={{ borderTop: "1px solid #d8d2c0", borderBottom: i === faqs.length - 1 ? "1px solid #d8d2c0" : "none" }}
            >
              <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "26px 0" }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 23, color: "#003052", lineHeight: 1.3 }}>
                  {f.q}
                </span>
                <span className="cn-plus" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 26, color: "#308EC7", lineHeight: 1, flexShrink: 0 }}>+</span>
              </summary>
              <div className="cn-ans">
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.8, color: "#566571", margin: "0 0 26px" }}>
                  {f.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
