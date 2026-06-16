"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const challenges = [
  {
    title: "Last-Minute Availability",
    problem: "The best yachts often book 12 months or more in advance for peak days such as New Year's Eve.",
    solution: "Contact Club Nautical early so we can secure the best vessels for your dates.",
  },
  {
    title: "Unexpected Costs",
    problem: "Some guests underestimate additional expenses like fuel or marina fees.",
    solution: "We provide transparent cost estimates and realistic APA guidance before booking.",
  },
  {
    title: "Weather Changes",
    problem: "Weather can occasionally influence itineraries.",
    solution: "Your captain monitors conditions closely and adjusts routes for safety — often leading to unexpected hidden gems along the journey.",
  },
];

export default function ChallengesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo((sectionRef.current?.querySelector(".challenges-header")) ?? null, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
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
    <section ref={sectionRef} style={{ background: "#fbfaf6", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="challenges-header" style={{ maxWidth: 760, marginBottom: 54 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>Planning Ahead</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(34px,3.8vw,50px)", lineHeight: 1.07, color: "#003052", margin: "0 0 18px", letterSpacing: "-0.01em" }}>
            Common challenges &amp; solutions
          </h2>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.75, color: "#566571", margin: 0 }}>
            While luxury yacht charter travel is incredible, planning ahead helps avoid common issues.
          </p>
        </div>

        <div ref={gridRef} className="cn-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 30 }}>
          {challenges.map((c) => (
            <div key={c.title} style={{ background: "#fff", border: "1px solid #e6e2d6", borderRadius: 2, padding: "36px 32px" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 23, color: "#003052", margin: "0 0 14px" }}>
                {c.title}
              </h3>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: "#6b7884", margin: "0 0 16px" }}>
                {c.problem}
              </p>
              <div style={{ paddingTop: 16, borderTop: "1px solid #e6e2d6" }}>
                <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.16em", textTransform: "uppercase", fontSize: 11, color: "#308EC7" }}>Solution</span>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: "#3a4a56", margin: "8px 0 0" }}>
                  {c.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
