"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  "Superyacht charters for luxury travel and extended voyages",
  "Private yacht hire for celebrations and social events",
  "Corporate yacht charters for client entertainment and team events",
  "Luxury yacht holidays across Australia and the South Pacific",
  "Party yacht charters for birthdays, engagements and special occasions",
];

export default function TopRatedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        (sectionRef.current?.querySelector(".top-header")) ?? null,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true } }
      );

      gsap.fromTo(
        (sectionRef.current?.querySelector(".img-col")) ?? null,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: listRef.current, start: "top 85%", once: true } }
      );

      /* Stagger list items */
      gsap.fromTo(
        Array.from(listRef.current?.children ?? []),
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, stagger: 0.1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: listRef.current, start: "top 85%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#fbfaf6", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="top-header" style={{ maxWidth: 820, marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>
              Top-Rated in Australia
            </span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(34px,3.6vw,50px)", lineHeight: 1.08, color: "#003052", margin: "0 0 26px", letterSpacing: "-0.01em" }}>
            A top-rated superyacht charter company
          </h2>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.8, color: "#566571", margin: 0 }}>
            Our premium vessels offer unforgettable cruising across{" "}
            <strong style={{ fontWeight: 500, color: "#003052" }}>Sydney, Gold Coast, Brisbane, the Whitsundays</strong> and the{" "}
            <strong style={{ fontWeight: 500, color: "#003052" }}>South Pacific</strong>. Whether you&apos;re planning a milestone birthday, corporate event or private celebration, our experienced crew delivers professional service and beautifully maintained yachts.
          </p>
        </div>

        <div className="cn-split" style={{ display: "grid", gridTemplateColumns: "0.7fr 1.3fr", gap: 56, alignItems: "start" }}>
          <div className="img-col">
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontWeight: 400, fontSize: 30, lineHeight: 1.25, color: "#003052", margin: 0 }}>
              What we help you plan
            </h3>
            <div className="img-zoom" style={{ height: 320, borderRadius: 2, marginTop: 30 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/magnific_2937098657.png"
                alt="Guests enjoying a charter"
              />
            </div>
          </div>

          <div ref={listRef} style={{ display: "flex", flexDirection: "column" }}>
            {services.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "baseline",
                  padding: "22px 0",
                  borderTop: "1px solid #e6e2d6",
                  borderBottom: i === services.length - 1 ? "1px solid #e6e2d6" : "none",
                }}
              >
                <span style={{ fontFamily: "'Tenor Sans',sans-serif", fontSize: 12, letterSpacing: "0.18em", color: "#a9b4bc", minWidth: 32 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 16.5, color: "#3a4a56", lineHeight: 1.5 }}>
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
