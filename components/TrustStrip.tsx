"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const trustItems: { stat?: string; label: string; icon?: React.ReactNode }[] = [
  { stat: "20+", label: "Years industry experience" },
  {
    label: "Highly trusted & recommended",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8D2AB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "100% Australian owned",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8D2AB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 21V4" />
        <path d="M5 4h13l-3 4 3 4H5" />
      </svg>
    ),
  },
  {
    label: "Premium service & catering",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8D2AB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />
      </svg>
    ),
  },
  {
    label: "Large & diverse fleet",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8D2AB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16h18l-2.2 4H5.2z" />
        <path d="M5.5 16l1.5-4h8l3 4" />
        <path d="M9 12V9h4l1.5 3" />
      </svg>
    ),
  },
  {
    label: "Personalised experiences",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8D2AB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3z" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const statRef = useRef<HTMLSpanElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 88%", once: true },
        }
      );

      /* Counter animation for "20+" */
      if (statRef.current) {
        gsap.to(
          { val: 0 },
          { val: 20, duration: 1.6, ease: "power2.out",
            scrollTrigger: { trigger: statRef.current, start: "top 88%", once: true },
            onUpdate: function (this: gsap.core.Tween) {
              if (statRef.current) statRef.current.textContent = Math.ceil((this.targets()[0] as { val: number }).val) + "+";
            },
          }
        );
      }

      /* Stagger grid items */
      gsap.fromTo(
        Array.from(gridRef.current?.children ?? []),
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#003052", padding: "40px 56px" }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
        <div ref={headerRef}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, justifyContent: "center" }}>
            <span style={{ width: 28, height: 1, background: "#D8D2AB", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 11, color: "#D8D2AB" }}>
              Why Charter With Us
            </span>
            <span style={{ width: 28, height: 1, background: "#D8D2AB", display: "inline-block" }} />
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: "clamp(22px,2.4vw,28px)",
              lineHeight: 1.15,
              color: "#fff",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            The leading luxury yacht charter <em style={{ fontStyle: "italic", color: "#D8D2AB", fontWeight: 400 }}>specialists</em> in Australia
          </h2>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, margin: "18px auto 22px" }}>
            <span style={{ width: 40, height: 1, background: "rgba(216,210,171,0.35)" }} />
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#D8D2AB" }} />
            <span style={{ width: 40, height: 1, background: "rgba(216,210,171,0.35)" }} />
          </div>
        </div>

        {/* Trust grid */}
        <div
          ref={gridRef}
          className="cn-grid-3 cn-keep-2 trust-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px 8px" }}
        >
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="trust-item"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "8px 16px",
              }}
            >
              <div style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {item.stat ? (
                  <span
                    ref={statRef}
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: "#D8D2AB", lineHeight: 0.9 }}
                  >
                    {item.stat}
                  </span>
                ) : (
                  item.icon
                )}
              </div>
              <span
                className="trust-label"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  fontSize: 12.5,
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.3,
                  textAlign: "left",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
