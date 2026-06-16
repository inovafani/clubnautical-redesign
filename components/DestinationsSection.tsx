"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const leftDests = [
  { name: "Brisbane", desc: "Cruise the Brisbane River with private celebrations and elegant onboard dining beneath spectacular skyline views." },
  { name: "Gold Coast", desc: "The Broadwater's calm waterways and hidden beaches — private events and sunset cruises on Queensland's coast." },
  { name: "Sydney", desc: "Cruise past the Opera House and Harbour Bridge with unforgettable harbour views aboard premium vessels." },
];
const rightDests = [
  { name: "Whitsundays", desc: "Whitehaven Beach, vibrant reefs and secluded bays across one of Australia's most breathtaking marine destinations." },
  { name: "South Pacific", desc: "Pristine islands, turquoise lagoons and world-class diving across Fiji, Tahiti and the region's finest waters." },
  { name: "Australia Wide", desc: "From Sydney Harbour to the Great Barrier Reef — extraordinary destinations aboard premium crewed yachts." },
];

export default function DestinationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const boatRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 88%", once: true },
      });

      /* Left items stagger from left */
      gsap.fromTo(
        Array.from(leftRef.current?.children ?? []),
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, stagger: 0.12, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: leftRef.current, start: "top 85%", once: true } }
      );

      /* Boat scale in */
      gsap.fromTo(boatRef.current, { opacity: 0, scale: 0.85 }, {
        opacity: 1, scale: 1, duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: boatRef.current, start: "top 85%", once: true },
      });

      /* Right items stagger from right */
      gsap.fromTo(
        Array.from(rightRef.current?.children ?? []),
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.12, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: rightRef.current, start: "top 85%", once: true } }
      );

      /* Floating boat subtle animation */
      gsap.to(boatRef.current, {
        y: -12,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="destinations"
      style={{ background: "#04263c", padding: "104px 56px" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, marginBottom: 54, flexWrap: "wrap" }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
              <span style={{ width: 40, height: 1, background: "#D8D2AB", display: "inline-block" }} />
              <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.34em", textTransform: "uppercase", fontSize: 12, color: "#D8D2AB" }}>
                Where We Sail
              </span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(38px,4.2vw,56px)", lineHeight: 1.05, color: "#fff", margin: 0, letterSpacing: "-0.01em" }}>
              Our destinations
            </h2>
          </div>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, color: "rgba(255,255,255,0.6)", maxWidth: 320, lineHeight: 1.7, margin: 0 }}>
            From iconic harbours to remote island anchorages across Australia and the Pacific.
          </p>
        </div>

        {/* 3-column layout */}
        <div
          className="dest-grid-inner"
          style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 60, alignItems: "center" }}
        >
          {/* Left column */}
          <div ref={leftRef}>
            {leftDests.map((d) => (
              <div
                key={d.name}
                className="dest-item"
                style={{ cursor: "pointer", padding: "26px 0", borderTop: "1px solid rgba(255,255,255,0.16)", textAlign: "right", borderBottom: d.name === "Sydney" ? "1px solid rgba(255,255,255,0.16)" : undefined }}
              >
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "flex-end", gap: 14 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, color: "#fff", lineHeight: 1 }}>{d.name}</span>
                  <span className="dest-arrow" style={{ fontFamily: "'Poppins',sans-serif", color: "#D8D2AB", fontSize: 16 }}>→</span>
                </div>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 12.5, color: "rgba(255,255,255,0.58)", lineHeight: 1.6, margin: "9px 0 0" }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center yacht */}
          <div
            className="dest-boat-wrap"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <div style={{ position: "relative", width: 300 }}>
              <div style={{ position: "absolute", inset: "-60px -30px", background: "radial-gradient(ellipse at center, rgba(48,142,199,0.45) 0%, rgba(48,142,199,0) 70%)", filter: "blur(20px)" }} />
              <div
                ref={boatRef}
                className="img-zoom"
                style={{ position: "relative", width: "100%", height: 540, borderRadius: 2, boxShadow: "0 40px 70px -18px rgba(0,0,0,0.6)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/491822608_1203121911819143_4876497069072183930_n.jpg"
                  alt="Luxury superyacht at dusk"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div ref={rightRef}>
            {rightDests.map((d) => (
              <div
                key={d.name}
                className="dest-item"
                style={{ cursor: "pointer", padding: "26px 0", borderTop: "1px solid rgba(255,255,255,0.16)", borderBottom: d.name === "Australia Wide" ? "1px solid rgba(255,255,255,0.16)" : undefined }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, color: "#fff", lineHeight: 1 }}>{d.name}</span>
                  <span className="dest-arrow" style={{ fontFamily: "'Poppins',sans-serif", color: "#D8D2AB", fontSize: 16 }}>→</span>
                </div>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 12.5, color: "rgba(255,255,255,0.58)", lineHeight: 1.6, margin: "9px 0 0" }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
