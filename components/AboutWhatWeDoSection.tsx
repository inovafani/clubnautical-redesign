"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const weDo = [
  "Yacht selection and charter planning",
  "Professional captain and crew",
  "Gourmet catering and onboard dining",
  "Water activities and entertainment",
  "Event planning and concierge services",
];

const vision = ["World-class vessels", "Exceptional crew", "Extraordinary destinations", "Seamless service"];

const checkIcon = (color: string) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export default function AboutWhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
      gsap.fromTo(rightRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ position: "relative" }}>
      <div className="cn-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative" }}>
        {/* Left: What We Do */}
        <div ref={leftRef} style={{ background: "#003052", padding: "104px 64px", color: "#fff" }}>
          <div style={{ maxWidth: 460, marginLeft: "auto" }}>
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: 11.5, color: "#D8D2AB" }}>
              The Service
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(28px,3vw,40px)", lineHeight: 1.1, margin: "16px 0 22px", letterSpacing: "-0.01em" }}>
              What we do
            </h2>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.78)", margin: "0 0 22px" }}>
              Club Nautical specialises in private luxury yacht charters, curated yacht events, and bespoke marine experiences. Our fleet spans elegant motor yachts to spectacular superyachts, accommodating everything from intimate gatherings to large-scale luxury events. We take care of every element of the journey:
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {weDo.map((d) => (
                <li key={d} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.14)", fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, color: "rgba(255,255,255,0.85)" }}>
                  {checkIcon("#D8D2AB")} {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Our Vision */}
        <div ref={rightRef} style={{ background: "#f3f0e8", padding: "104px 64px" }}>
          <div style={{ maxWidth: 460 }}>
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: 11.5, color: "#308EC7" }}>
              The Promise
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(28px,3vw,40px)", lineHeight: 1.1, color: "#003052", margin: "16px 0 22px", letterSpacing: "-0.01em" }}>
              Our vision
            </h2>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.8, color: "#566571", margin: "0 0 22px" }}>
              We believe luxury yacht charters should be accessible, personalised, and unforgettable. Our vision is to become Australia&rsquo;s most trusted yacht charter agency by delivering experiences that combine:
            </p>
            <ul style={{ margin: "0 0 24px", padding: 0, listStyle: "none" }}>
              {vision.map((v) => (
                <li key={v} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderTop: "1px solid #ddd6c4", fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, color: "#3a4a56" }}>
                  {checkIcon("#308EC7")} {v}
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontStyle: "italic", fontWeight: 400, fontSize: 16, lineHeight: 1.6, color: "#003052", margin: 0 }}>
              Every charter is an opportunity to create memories that last a lifetime.
            </p>
          </div>
        </div>
      </div>

      {/* Seam badge */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 76,
          height: 76,
          borderRadius: "50%",
          background: "#fbfaf6",
          border: "1px solid #D8D2AB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 16px 40px rgba(0,15,28,0.25)",
          zIndex: 2,
        }}
        className="seam-badge"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#003052" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v13" />
          <path d="M7 13a5 5 0 0010 0" />
          <path d="M5 13H3M21 13h-2" />
        </svg>
      </div>
    </section>
  );
}
