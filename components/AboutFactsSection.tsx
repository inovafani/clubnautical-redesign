"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const iconProps = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "#308EC7", strokeWidth: 1.3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const facts = [
  { label: "Experience", value: "20+ Years Industry Experience", icon: <svg {...iconProps}><circle cx="12" cy="5" r="2" /><path d="M12 7v13" /><path d="M7 13a5 5 0 0010 0" /><path d="M5 13H3M21 13h-2" /></svg> },
  { label: "Accreditations", value: "ABN 47 659 916 373", icon: <svg {...iconProps}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg> },
  { label: "Payment Options", value: "Bank Transfer · Card", icon: <svg {...iconProps}><rect x="3" y="6" width="18" height="12" rx="1.5" /><path d="M3 10h18" /></svg> },
  { label: "Destinations", value: "6 Regions Across Australia", icon: <svg {...iconProps}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3z" /></svg> },
  { label: "Services", value: "4 Charter Service Lines", icon: <svg {...iconProps}><path d="M3 16h18l-2.2 4H5.2z" /><path d="M5.5 16l1.5-4h8l3 4" /><path d="M9 12V9h4l1.5 3" /></svg> },
];

export default function AboutFactsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(
        Array.from(rowRef.current?.children ?? []),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: rowRef.current, start: "top 85%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#fbfaf6", padding: "96px 56px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, justifyContent: "center" }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>Club Nautical At a Glance</span>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.1, color: "#003052", margin: 0, letterSpacing: "-0.01em" }}>
            The facts
          </h2>
        </div>

        <div ref={rowRef} className="cn-grid-3 cn-keep-2" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
          {facts.map((f, i) => (
            <div
              key={f.label}
              style={{
                textAlign: "center",
                padding: "0 14px",
                borderLeft: i === 0 ? "none" : "1px solid #e0dccf",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>{f.icon}</div>
              <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 10.5, color: "#308EC7", marginBottom: 8 }}>
                {f.label}
              </div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 400, fontSize: 14, color: "#003052", lineHeight: 1.4 }}>
                {f.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
