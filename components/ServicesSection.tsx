"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "Activities & Entertainment",
    desc: "From jet ski hire to a DJ or breathtaking fireworks display, we work with you to make every chartering experience unforgettable.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#308EC7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/>
        <path d="M18.5 14.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>
      </svg>
    ),
  },
  {
    title: "Charter Hire",
    desc: "We specialise in planning luxurious yacht events, tailoring every detail to create a captivating atmosphere against the scenic backdrop of the open sea.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#308EC7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 17.5h17l-2.3 3.5H5.8z"/>
        <path d="M12 3.5v12"/>
        <path d="M12.8 5.5l4.5 9H12.8z"/>
      </svg>
    ),
  },
  {
    title: "Memberships & Syndication",
    desc: "Dreaming of owning a yacht? Our membership and syndication options give you access to different yacht sizes and world-famous destinations.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#308EC7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4h12l3 5-9 11L3 9z"/>
        <path d="M3 9h18"/>
        <path d="M9 4l-1 5 4 11 4-11-1-5"/>
      </svg>
    ),
  },
  {
    title: "Menu Packages",
    desc: "From delectable canapés to our BBQ buffet and platters, our diverse, personalised catering ensures a delightful culinary experience.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#308EC7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 2v7c0 1.1.9 2 2 2s2-.9 2-2V2"/>
        <path d="M6 11v10"/>
        <path d="M18 2c-1.7 0-3 2.7-3 6 0 2.5 1 4 3 4v9"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo((sectionRef.current?.querySelector(".services-header")) ?? null, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      gsap.fromTo(
        Array.from(gridRef.current?.children ?? []),
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" style={{ background: "#fbfaf6", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="services-header" style={{ textAlign: "center", marginBottom: 58 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, justifyContent: "center" }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>How We Help</span>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(38px,4.2vw,56px)", lineHeight: 1.05, color: "#003052", margin: 0, letterSpacing: "-0.01em" }}>
            Our services
          </h2>
        </div>

        <div ref={gridRef} className="cn-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, border: "1px solid #e6e2d6", borderRadius: 2, overflow: "hidden" }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{
                padding: "42px 30px",
                borderRight: i < services.length - 1 ? "1px solid #e6e2d6" : "none",
                background: "#fff",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#f8f6f0"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#fff"; }}
            >
              <div style={{ marginBottom: 20, height: 36, display: "flex", alignItems: "center" }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 23, color: "#003052", margin: "0 0 14px", lineHeight: 1.2 }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: "#6b7884", margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
