"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const stats = [
  { label: "Vessels In Fleet", value: "73+" },
  { label: "Years Of Experience", value: "20+" },
  { label: "Coverage", value: "Australia-Wide" },
];

export default function AboutFleetHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".fleet-hero-anim") ?? null,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.9, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".fleet-stat-anim") ?? null,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", delay: 0.6 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: 560,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
        background: "#021f33",
        paddingTop: 110,
        paddingBottom: 70,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/0GHefUrKRdCVPXlJvWY8_Club-nautical-home.v2.0000000-1920w.jpg"
        alt="Club Nautical luxury fleet on the water"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(2,22,38,.72) 0%, rgba(2,22,38,.38) 45%, rgba(2,22,38,.9) 100%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "60px 24px 0" }}>
        <div className="fleet-hero-anim" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, justifyContent: "center" }}>
          <span style={{ width: 40, height: 1, background: "#D8D2AB", display: "inline-block" }} />
          <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.34em", textTransform: "uppercase", fontSize: 12, color: "#D8D2AB" }}>
            Club Nautical
          </span>
          <span style={{ width: 40, height: 1, background: "#D8D2AB", display: "inline-block" }} />
        </div>
        <h1
          className="fleet-hero-anim"
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontWeight: 500,
            fontSize: "clamp(48px,7vw,90px)",
            lineHeight: 1,
            color: "#fff",
            margin: "0 0 18px",
            letterSpacing: "-0.01em",
          }}
        >
          Our Fleet
        </h1>
        <p
          className="fleet-hero-anim"
          style={{
            fontFamily: "'Poppins',sans-serif",
            fontWeight: 300,
            fontSize: 16,
            color: "rgba(255,255,255,0.8)",
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          From intimate sailing yachts to grand superyachts, every vessel is hand-selected for quality, comfort, and experience.
        </p>
      </div>

      <div
        className="fleet-stat-anim"
        style={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          transform: "translate(-50%, 50%)",
          zIndex: 3,
          display: "flex",
          background: "#fbfaf6",
          borderRadius: 2,
          boxShadow: "0 30px 60px -10px rgba(0,15,28,0.45)",
          overflow: "hidden",
          width: "min(90vw, 700px)",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "26px 18px",
              borderLeft: i === 0 ? "none" : "1px solid #e0dccf",
            }}
          >
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,2.6vw,30px)", color: "#003052", lineHeight: 1 }}>
              {s.value}
            </div>
            <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 10.5, color: "#308EC7", marginTop: 8 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
