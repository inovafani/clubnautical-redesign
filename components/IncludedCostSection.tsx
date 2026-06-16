"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const costItems = [
  { label: "Advance Provisioning Allowance (APA)", body: "Typically 25–30% of the base fee — fuel, food, beverages, dockage, port fees and utilities. Any unspent APA is refunded." },
  { label: "Crew Gratuity", body: "Customarily 10–20% of the base fee, paid at the end of the charter." },
  { label: "Delivery / Repositioning Fees", body: "May apply if the yacht needs to travel to your chosen embarkation point." },
];

export default function IncludedCostSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      /* Parallax on banner */
      gsap.to((bannerRef.current && bannerRef.current.querySelector("img")) ?? null, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: { trigger: bannerRef.current, scrub: 1 },
      });

      gsap.fromTo(
        (sectionRef.current?.querySelectorAll(".inc-col")) ?? null,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true } }
      );

      gsap.fromTo(bannerRef.current, { opacity: 0, scale: 0.97 }, {
        opacity: 1, scale: 1, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: bannerRef.current, start: "top 88%", once: true },
      });

      gsap.fromTo((sectionRef.current?.querySelector(".pricing-box")) ?? null, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: (sectionRef.current?.querySelector(".pricing-box")) ?? undefined, start: "top 88%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#fbfaf6", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Two columns */}
        <div className="cn-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, marginBottom: 80 }}>
          {/* Included */}
          <div className="inc-col">
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
              <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>Inclusions</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(30px,3.2vw,42px)", lineHeight: 1.1, color: "#003052", margin: "0 0 26px", letterSpacing: "-0.01em" }}>
              What is included in a superyacht charter?
            </h2>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.8, color: "#566571", margin: "0 0 20px" }}>
              A crewed superyacht charter typically includes the yacht and its full professional crew, all onboard meals and beverages prepared by a private chef, use of water sports equipment (jet skis, paddleboards, kayaks, snorkelling and scuba gear), a bespoke itinerary, and daily housekeeping and service. Fuel, port fees, food provisioning, and dockage are covered through the Advance Provisioning Allowance (APA), paid separately from the base charter fee.
            </p>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.8, color: "#566571", margin: 0 }}>
              Some yachts also carry specialist equipment such as submersibles, seabobs, e-foils, and spa facilities. For special occasions, our team coordinates floral arrangements, entertainment, themed decor, and bespoke excursions.
            </p>
          </div>

          {/* Cost */}
          <div className="inc-col">
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
              <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>Pricing</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(30px,3.2vw,42px)", lineHeight: 1.1, color: "#003052", margin: "0 0 26px", letterSpacing: "-0.01em" }}>
              How much does it cost to charter a superyacht?
            </h2>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.8, color: "#566571", margin: "0 0 26px" }}>
              Superyacht charter costs vary based on yacht size, destination, season, and duration. Weekly base rates for 2026 range from approximately $50,000 for a 24-metre yacht to $250,000+ for vessels exceeding 60 metres. The base rate covers the yacht and crew, but operational costs add 30 to 60% on top.
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {costItems.map((item, i) => (
                <div key={i} style={{ padding: "18px 0", borderTop: "1px solid #e6e2d6", borderBottom: i === costItems.length - 1 ? "1px solid #e6e2d6" : "none" }}>
                  <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 12, color: "#003052", marginBottom: 6 }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, color: "#6b7884", lineHeight: 1.65 }}>
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Banner image */}
        <div ref={bannerRef} className="img-zoom" style={{ height: 300, borderRadius: 2, marginBottom: 36 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/imgi_34_Whitsundays-Impulsive-64dcaccd-8309e5a4.jpg"
            alt="Whitsundays charter"
          />
        </div>

        {/* Pricing transparency box */}
        <div
          className="pricing-box"
          style={{ background: "#04263c", borderRadius: 2, padding: "56px 60px", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 48, alignItems: "center" }}
        >
          <div>
            <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: 12, color: "#D8D2AB", marginBottom: 18 }}>
              Pricing Transparency
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 32, lineHeight: 1.18, color: "#fff", margin: 0 }}>
              Our approach to pricing transparency
            </h3>
          </div>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.8, color: "rgba(255,255,255,0.78)", margin: 0 }}>
            Through our national charter network, Club Nautical provides access to an extensive fleet of luxury motor yachts, sailing catamarans and superyachts operating across Australia and the South Pacific. From intimate vessels for small celebrations to large event yachts accommodating hundreds of guests, our charter specialists match you with the perfect yacht for your occasion.
          </p>
        </div>
      </div>
    </section>
  );
}
