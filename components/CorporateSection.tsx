"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const corpItems = [
  ["Client entertainment & relationship building", "Executive retreats & strategy sessions"],
  ["Incentive travel & reward programmes", "Team building in an extraordinary environment"],
  ["Confidential discussions away from the office", "Product launches & brand events"],
];

export default function CorporateSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current, { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(gridRef.current, { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#04263c", padding: "104px 56px" }}>
      <div className="cn-split" style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        <div ref={textRef}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <span style={{ width: 40, height: 1, background: "#D8D2AB", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.34em", textTransform: "uppercase", fontSize: 12, color: "#D8D2AB" }}>For Business</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(32px,3.6vw,48px)", lineHeight: 1.08, color: "#fff", margin: "0 0 24px", letterSpacing: "-0.01em" }}>
            Superyacht charter for business &amp; corporate groups
          </h2>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.8, color: "rgba(255,255,255,0.74)", margin: "0 0 20px" }}>
            The privacy and exclusivity of a superyacht makes it ideal for high-stakes conversations. Day charters work well for client events and launches; week-long charters suit executive retreats and incentive programmes.
          </p>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.8, color: "rgba(255,255,255,0.74)", margin: 0 }}>
            We manage every logistical detail — from branded provisioning and AV equipment to helicopter transfers and multi-destination itineraries.
          </p>
          <div className="img-zoom" style={{ height: 240, borderRadius: 2, marginTop: 30 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/491822608_1203121911819143_4876497069072183930_n.jpg"
              alt="Corporate group on board"
            />
          </div>
        </div>

        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {corpItems.flat().map((item, i) => {
            const isLeft = i % 2 === 0;
            const isLastRow = i >= corpItems.flat().length - 2;
            return (
              <div
                key={i}
                style={{
                  padding: isLeft ? "20px 22px 20px 0" : "20px 0 20px 22px",
                  borderTop: "1px solid rgba(255,255,255,0.16)",
                  borderBottom: isLastRow ? "1px solid rgba(255,255,255,0.16)" : "none",
                  borderRight: isLeft ? "1px solid rgba(255,255,255,0.16)" : "none",
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.5,
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
