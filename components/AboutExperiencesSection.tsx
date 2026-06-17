"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const iconProps = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "#D8D2AB", strokeWidth: 1.3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const experiences = [
  { label: "Jet skis & water sports", icon: <svg {...iconProps}><path d="M3 17c2-3 4-4 6-4s3 1.5 4 1.5 2-1.5 4-1.5 4 1 5 3" /><path d="M5 17l1-7 6 1 1 6" /></svg> },
  { label: "Private DJs & live music", icon: <svg {...iconProps}><circle cx="8" cy="17" r="2.5" /><circle cx="17" cy="15" r="2.5" /><path d="M10.5 17V6l9-2v11" /></svg> },
  { label: "Gourmet catering & cocktails", icon: <svg {...iconProps}><path d="M6 4h12l-6 8z" /><path d="M12 12v8" /><path d="M8 20h8" /></svg> },
  { label: "Fireworks & event staging", icon: <svg {...iconProps}><path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" /></svg> },
  { label: "Luxury transport & concierge", icon: <svg {...iconProps}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3z" /></svg> },
];

export default function AboutExperiencesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
      gsap.fromTo(
        cardRef.current?.querySelectorAll(".exp-chip") ?? null,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, stagger: 0.08, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 80%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ position: "relative", minHeight: 640, display: "flex", alignItems: "center", padding: "104px 56px", overflow: "hidden" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/shutterstock_2221233211-a85dedf5.jpg"
        alt="Guests celebrating onboard a luxury yacht"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(115deg, rgba(2,31,51,0.92) 0%, rgba(2,31,51,0.55) 55%, rgba(2,31,51,0.25) 100%)" }} />

      <div
        ref={cardRef}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 560,
          background: "rgba(4,38,60,0.55)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.16)",
          borderRadius: 2,
          padding: "48px 46px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
          <span style={{ width: 40, height: 1, background: "#D8D2AB", display: "inline-block" }} />
          <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#D8D2AB" }}>
            More Than Cruising
          </span>
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(28px,3.2vw,42px)", lineHeight: 1.1, color: "#fff", margin: "0 0 20px", letterSpacing: "-0.01em" }}>
          Experiences beyond yacht hire
        </h2>
        <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.78)", margin: "0 0 28px" }}>
          A luxury yacht charter is a complete lifestyle experience on the water. Depending on your charter, we can arrange:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {experiences.map((e) => (
            <div key={e.label} className="exp-chip" style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 2 }}>
              {e.icon}
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 12.5, color: "rgba(255,255,255,0.88)", lineHeight: 1.35 }}>
                {e.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
