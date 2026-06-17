"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const iconProps = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "#D8D2AB", strokeWidth: 1.3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const reasons = [
  {
    title: "Industry Experience",
    body: "With more than two decades in the luxury yacht charter industry, we understand what makes a charter exceptional — from first enquiry to the final farewell at the marina.",
    big: true,
    icon: <svg {...iconProps} width={34} height={34}><circle cx="12" cy="5" r="2" /><path d="M12 7v13" /><path d="M7 13a5 5 0 0010 0" /><path d="M5 13H3M21 13h-2" /></svg>,
  },
  {
    title: "Diverse Yacht Fleet",
    body: "Vessels suitable for intimate charters, corporate events, luxury holidays, and large-scale celebrations.",
    icon: <svg {...iconProps}><path d="M3 16h18l-2.2 4H5.2z" /><path d="M5.5 16l1.5-4h8l3 4" /><path d="M9 12V9h4l1.5 3" /></svg>,
  },
  {
    title: "Bespoke Itineraries",
    body: "No two charters are the same — every itinerary is designed around our clients' interests and destinations.",
    icon: <svg {...iconProps}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3z" /></svg>,
  },
  {
    title: "Trusted Charter Specialists",
    body: "Our team works closely with guests to ensure every request is handled promptly and professionally.",
    icon: <svg {...iconProps}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>,
  },
];

export default function AboutWhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(
        Array.from(gridRef.current?.children ?? []),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#003052", padding: "104px 56px", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden
        style={{ position: "absolute", top: -120, right: -120, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(48,142,199,0.18) 0%, rgba(48,142,199,0) 70%)" }}
      />
      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(32px,3.8vw,50px)", lineHeight: 1.1, color: "#fff", margin: "0 0 18px", letterSpacing: "-0.01em" }}>
            Why clients choose Club Nautical
          </h2>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, color: "rgba(255,255,255,0.7)", margin: 0 }}>
            Guests choose us because we focus on service, expertise, and personalisation.
          </p>
        </div>

        <div
          ref={gridRef}
          className="bento-grid"
          style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gridTemplateRows: "auto auto", gap: 24 }}
        >
          {reasons.map((r, i) => (
            <div
              key={r.title}
              style={{
                gridColumn: i === 0 ? "1" : i === 3 ? "2 / span 2" : `${i + 1}`,
                gridRow: i === 0 ? "1 / span 2" : i === 3 ? "2" : "1",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 2,
                padding: r.big ? "44px 38px" : "30px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: r.big ? "center" : "flex-start",
              }}
            >
              <div style={{ marginBottom: 18 }}>{r.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: r.big ? 30 : 21, color: "#fff", margin: "0 0 14px", lineHeight: 1.2 }}>
                {r.title}
              </h3>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: r.big ? 14.5 : 13.5, lineHeight: 1.7, color: "rgba(255,255,255,0.68)", margin: 0, maxWidth: r.big ? 320 : "none" }}>
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
