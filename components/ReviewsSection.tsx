"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reviews = [
  {
    name: "Sarah Mitchell",
    quote: "My friends and I just disembarked from Impulsive after a fabulous 24 hours in the Whitsundays. The yacht was stunning, the crew incredibly professional, and chef Dave's food was unforgettable.",
    tag: "Birthday Charter · Whitsundays",
  },
  {
    name: "James Carter",
    quote: "Had such an awesome time onboard Inspiration for my 26th birthday. Easy and smooth to deal with — quick to respond and get our catering sorted. Best idea for any event!",
    tag: "Birthday Charter · Gold Coast",
  },
  {
    name: "Olivia Bennett",
    quote: "We hosted a 40th on Ava and it was absolutely worth it. Guests were extremely impressed with the yacht, the staff and the catering. Thank you for a truly memorable time!",
    tag: "40th Celebration · Sydney",
  },
  {
    name: "Thomas Reid",
    quote: "Thanks for helping plan an amazing celebration on Sydney Harbour. The staff, catering and boat arranged were fantastic — really appreciate the patience and attention to detail.",
    tag: "Sydney Harbour Charter",
  },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("");
}

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo((sectionRef.current?.querySelector(".reviews-header")) ?? null, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(
        Array.from(gridRef.current?.children ?? []),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#04263c", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="reviews-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, marginBottom: 54, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
              <span style={{ width: 40, height: 1, background: "#D8D2AB", display: "inline-block" }} />
              <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.34em", textTransform: "uppercase", fontSize: 12, color: "#D8D2AB" }}>Guest Stories</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(36px,4vw,54px)", lineHeight: 1.05, color: "#fff", margin: 0, letterSpacing: "-0.01em" }}>
              What our guests say
            </h2>
          </div>
          <a href="#contact" className="btn-line">Read Our Reviews</a>
        </div>

        <div ref={gridRef} className="cn-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {reviews.map((r) => (
            <div
              key={r.name}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 2,
                padding: "36px 38px",
                height: 290,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 50, color: "#D8D2AB", lineHeight: 0.6, height: 26, marginBottom: 14 }}>&ldquo;</div>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontWeight: 400, fontSize: 19, lineHeight: 1.55, color: "#fff", margin: 0 }}>
                  {r.quote}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "#D8D2AB",
                    color: "#04263c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Tenor Sans',sans-serif",
                    fontSize: 14,
                    letterSpacing: "0.02em",
                    flexShrink: 0,
                  }}
                >
                  {initials(r.name)}
                </div>
                <div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 400, fontSize: 14.5, color: "#fff" }}>
                    {r.name}
                  </div>
                  <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 10, color: "#D8D2AB", marginTop: 3 }}>
                    {r.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
