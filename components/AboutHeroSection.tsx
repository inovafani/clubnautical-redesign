"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const stats = [
  { label: "Established", value: "2000" },
  { label: "Ownership", value: "100% Australian" },
  { label: "Experience", value: "20+ Years" },
];

export default function AboutHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".about-hero-anim") ?? null,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.9, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".about-stat-anim") ?? null,
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
        minHeight: 600,
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
        src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/imgi_278_TO1.jpg"
        alt="Club Nautical luxury motor yacht on Sydney Harbour"
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
        <div className="about-hero-anim" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, justifyContent: "center" }}>
          <span style={{ width: 40, height: 1, background: "#D8D2AB", display: "inline-block" }} />
          <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.34em", textTransform: "uppercase", fontSize: 12, color: "#D8D2AB" }}>
            Club Nautical
          </span>
          <span style={{ width: 40, height: 1, background: "#D8D2AB", display: "inline-block" }} />
        </div>
        <h1
          className="about-hero-anim"
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
          About Us
        </h1>
        <p
          className="about-hero-anim"
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
          Twenty years of crafting unforgettable luxury yacht experiences across Australia and the South Pacific.
        </p>
      </div>

      {/* Floating stat bar straddling the hero/next-section boundary */}
      <div
        className="about-stat-anim"
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
          width: "min(90vw, 760px)",
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
