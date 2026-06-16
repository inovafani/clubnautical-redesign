"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reasons = [
  { title: "Decades of specialist experience", body: "Our team has managed hundreds of charters across all the major cruising destinations in Australia and the South Pacific. We know the yachts, the crews, and the destinations firsthand." },
  { title: "Independent, client-first advice", body: "As charter brokers, our service is complimentary. We earn our commission from the yacht owner, so our recommendations are always in your best interest." },
  { title: "End-to-end management", body: "We handle every detail from yacht selection and itinerary planning through to provisioning, transfers, permits, and onboard coordination. You focus on enjoying the experience." },
  { title: "Corporate & private event expertise", body: "We work with business owners, executive teams, and private clients planning milestone celebrations, incentive travel, confidential retreats, and client entertainment at sea." },
  { title: "Transparent pricing, no surprises", body: "We provide a full cost breakdown at the proposal stage and guide you through every line item before you commit.", cta: true },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo((sectionRef.current?.querySelector(".why-header")) ?? null, { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(imgRef.current, { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: imgRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(
        Array.from(gridRef.current?.children ?? []),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#003052", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Header row */}
        <div className="cn-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginBottom: 60 }}>
          <div className="why-header">
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
              <span style={{ width: 40, height: 1, background: "#D8D2AB", display: "inline-block" }} />
              <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.34em", textTransform: "uppercase", fontSize: 12, color: "#D8D2AB" }}>The Club Nautical Difference</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(34px,3.8vw,52px)", lineHeight: 1.06, color: "#fff", margin: "0 0 18px", letterSpacing: "-0.01em" }}>
              Why choose Club Nautical as your charter broker?
            </h2>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.7)", margin: 0 }}>
              Not all charter brokers offer the same level of expertise, access, or personal attention. Here is what sets us apart.
            </p>
          </div>
          <div ref={imgRef} className="img-zoom" style={{ height: 360, borderRadius: 2 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/imgi_23_Brisbane-Image-impulsive-4027769e-fcf6aa25.jpg"
              alt="Luxury yacht on the river"
            />
          </div>
        </div>

        {/* Reasons grid */}
        <div ref={gridRef} className="cn-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
          {reasons.map((r, i) => {
            const isLeft = i % 2 === 0;
            const isLast = i === reasons.length - 1;
            return (
              <div
                key={r.title}
                style={{
                  padding: isLeft ? "34px 40px 34px 0" : "34px 0 34px 40px",
                  borderTop: "1px solid rgba(255,255,255,0.16)",
                  borderRight: isLeft ? "1px solid rgba(255,255,255,0.16)" : "none",
                  borderBottom: i >= reasons.length - 2 ? "1px solid rgba(255,255,255,0.16)" : "none",
                  display: isLast ? "flex" : "block",
                  alignItems: isLast ? "center" : undefined,
                }}
              >
                {r.cta ? (
                  <a href="#contact" className="btn-fill">Start Your Consultation</a>
                ) : (
                  <>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 25, color: "#fff", margin: "0 0 12px" }}>{r.title}</h3>
                    <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14.5, lineHeight: 1.75, color: "rgba(255,255,255,0.68)", margin: 0 }}>{r.body}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
