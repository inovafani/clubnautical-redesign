"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const approach = [
  {
    num: "01",
    title: "Personalised Experiences",
    body: "Every charter we organise is unique. Whether you're hosting a corporate function, celebrating a milestone birthday, or planning a wedding proposal, we design itineraries that reflect your vision.",
  },
  {
    num: "02",
    title: "Professional Crew & Service",
    body: "Every charter includes a qualified captain and experienced crew who ensure the journey runs safely and smoothly while delivering exceptional onboard service.",
  },
  {
    num: "03",
    title: "Seamless Charter Planning",
    body: "Our booking process is straightforward and stress-free. Charter specialists guide you through vessel selection, itinerary planning and event details.",
  },
];

export default function AboutApproachSection() {
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
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.18, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: rowRef.current, start: "top 85%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#04263c", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, justifyContent: "center" }}>
            <span style={{ width: 40, height: 1, background: "#D8D2AB", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#D8D2AB" }}>Our Philosophy</span>
            <span style={{ width: 40, height: 1, background: "#D8D2AB", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(32px,3.8vw,50px)", lineHeight: 1.1, color: "#fff", margin: "0 0 22px", letterSpacing: "-0.01em" }}>
            Our approach to luxury yacht charter
          </h2>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.8, color: "rgba(255,255,255,0.72)", maxWidth: 700, margin: "0 auto" }}>
            We follow a simple philosophy: treat every client like a guest on our own yacht.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div className="approach-line" style={{ position: "absolute", left: "16%", right: "16%", top: 26, height: 1, background: "rgba(216,210,171,0.25)" }} />
          <div ref={rowRef} className="cn-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 30, position: "relative" }}>
            {approach.map((a) => (
              <div key={a.num} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#04263c", border: "1px solid #D8D2AB", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: "#D8D2AB" }}>
                    {a.num}
                  </div>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 23, color: "#fff", margin: "0 0 14px", lineHeight: 1.2 }}>
                  {a.title}
                </h3>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.68)", margin: "0 auto", maxWidth: 280 }}>
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
