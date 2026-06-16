"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const types = [
  {
    num: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#308EC7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16h18l-2.2 4H5.2z"/>
        <path d="M5.5 16l1.5-4h8l3 4"/>
        <path d="M9 12V9h4l1.5 3"/>
      </svg>
    ),
    title: "Motor Yacht Charters",
    body1: "For guests who want speed, space, and a full range of luxury amenities — expansive salons, sun-drenched upper decks, spas, cinemas, and entertainment systems. They transit quickly between ports, letting you explore more in a single voyage.",
    body2: "The trade-off is higher fuel consumption — but the breadth of onboard luxury is unmatched.",
  },
  {
    num: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#308EC7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17.5h16l-2.2 3.5H6.2z"/>
        <path d="M12 3v12.5"/>
        <path d="M12.8 5l4.5 9.5H12.8z"/>
      </svg>
    ),
    title: "Sailing Yacht Charters",
    body1: "An authentic nautical experience for those who want to feel the wind and truly connect with the ocean. These vessels use less fuel and offer a more immersive, rhythmic journey at sea.",
    body2: "Interior volume is more compact, but the romance of sailing creates a uniquely rewarding adventure — popular for South Pacific voyages and ocean crossings.",
  },
  {
    num: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#308EC7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3z"/>
      </svg>
    ),
    title: "Expedition Yacht Charters",
    body1: "Purpose-built for remote exploration — ice-reinforced hulls, extended-range fuel tanks, robust tender fleets, and specialist expedition crew. The vessel of choice for Antarctica, Alaska, the Kimberley and other frontier destinations.",
    body2: "The 126m M/Y Octopus carries 63 crew with Ice-1A classification; the 77.4m M/Y Aqua Lares hosts 22 guests with a helideck, submarine and over 7,640nm range.",
  },
];

export default function CharterTypesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo((sectionRef.current?.querySelector(".types-header")) ?? null, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(
        Array.from(gridRef.current?.children ?? []),
        { opacity: 0, y: 50, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#fbfaf6", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="types-header" style={{ textAlign: "center", marginBottom: 58 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, justifyContent: "center" }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>Choose Your Vessel</span>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(38px,4.2vw,56px)", lineHeight: 1.05, color: "#003052", margin: 0, letterSpacing: "-0.01em" }}>
            Types of superyacht charters
          </h2>
        </div>

        <div ref={gridRef} className="cn-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 30 }}>
          {types.map((t) => (
            <div
              key={t.num}
              style={{ background: "#fff", border: "1px solid #e6e2d6", borderRadius: 2, padding: "40px 34px", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 12px 40px rgba(0,48,82,0.1)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = ""; el.style.boxShadow = ""; }}
            >
              <div style={{ marginBottom: 16 }}>{t.icon}</div>
              <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 11, color: "#308EC7" }}>
                Type {t.num}
              </span>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 28, color: "#003052", margin: "14px 0 18px", lineHeight: 1.15 }}>
                {t.title}
              </h3>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14.5, lineHeight: 1.75, color: "#6b7884", margin: "0 0 16px" }}>{t.body1}</p>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14.5, lineHeight: 1.75, color: "#6b7884", margin: 0 }}>{t.body2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
