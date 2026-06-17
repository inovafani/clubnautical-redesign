"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const destinations = [
  "Sydney Harbour",
  "Gold Coast waterways",
  "Brisbane River & surrounds",
  "The Whitsunday Islands",
  "The Great Barrier Reef",
  "The South Pacific",
];

export default function AboutStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(textRef.current, { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#fbfaf6", padding: "180px 56px 104px", position: "relative", overflow: "hidden" }}>
      <div className="cn-split" style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "0.85fr 1fr", gap: 80, alignItems: "center" }}>
        {/* Collage */}
        <div ref={imgRef} style={{ position: "relative" }}>
          <div className="img-zoom" style={{ height: 520, borderRadius: 2, boxShadow: "0 40px 70px -20px rgba(0,15,28,0.3)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/imgi_278_TO1.jpg"
              alt="Club Nautical yacht cruising Sydney Harbour at sunset"
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -44,
              right: -36,
              width: 200,
              height: 230,
              borderRadius: 2,
              border: "8px solid #fbfaf6",
              boxShadow: "0 24px 50px -14px rgba(0,15,28,0.4)",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/Guest-with-glasses-of-champagne.jpg"
              alt="Friends celebrating onboard with champagne"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div ref={textRef} style={{ position: "relative" }}>
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: -90,
              right: -10,
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 220,
              lineHeight: 1,
              color: "rgba(0,48,82,0.05)",
              fontWeight: 600,
              pointerEvents: "none",
              zIndex: 0,
              userSelect: "none",
            }}
          >
            2000
          </span>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
              <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>
                Who We Are
              </span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(34px,3.6vw,50px)", lineHeight: 1.08, color: "#003052", margin: "0 0 28px", letterSpacing: "-0.01em" }}>
              Our story
            </h2>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.8, color: "#566571", margin: "0 0 20px" }}>
              At Club Nautical, we believe the ocean is one of the most extraordinary places to celebrate life&rsquo;s best moments. From intimate sunset cruises to spectacular superyacht events, our mission is simple: to create unforgettable luxury yacht charter experiences across Australia and beyond.
            </p>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.8, color: "#566571", margin: "0 0 20px" }}>
              We are a 100% Australian-owned and operated yacht charter agency, proudly based on the Gold Coast. Since our establishment in 2000, we&rsquo;ve helped thousands of guests discover the magic of exploring the coastline by private yacht &mdash; growing from a boutique charter service into a trusted agency connecting guests with exceptional vessels, professional crews, and bespoke experiences across:
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, margin: "0 0 26px" }}>
              {destinations.map((d) => (
                <span
                  key={d}
                  style={{
                    fontFamily: "'Tenor Sans',sans-serif",
                    fontSize: 11.5,
                    letterSpacing: "0.04em",
                    color: "#003052",
                    border: "1px solid #cdd8de",
                    borderRadius: 100,
                    padding: "8px 16px",
                    background: "#fff",
                  }}
                >
                  {d}
                </span>
              ))}
            </div>

            <p style={{ fontFamily: "'Poppins',sans-serif", fontStyle: "italic", fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: "#003052", margin: 0, borderLeft: "2px solid #D8D2AB", paddingLeft: 18 }}>
              Whether a celebration, corporate event or private escape &mdash; our role is to design a seamless charter experience tailored entirely to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
