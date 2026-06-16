"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  { title: "Party Yacht Hire", body: "Designed for unforgettable celebrations on the water. Guests love the atmosphere, the stunning harbour views and the seamless organisation that lets them focus on having a great time — whether a big group celebration or an intimate gathering with friends." },
  { title: "Birthday Yacht Hire", body: "One of our most popular bookings. From milestone birthdays to relaxed celebrations with friends, guests appreciate the unique setting, great views and the freedom to celebrate privately on the water — every detail personalised for everyone on board." },
  { title: "Corporate Yacht Charter", body: "A relaxed and impressive setting for entertaining clients, rewarding teams or hosting networking events. Guests love bringing colleagues together on the harbour while enjoying a professional, well-organised experience with smooth coordination throughout." },
  { title: "Private Yacht Charter", body: "For many guests, it's simply about enjoying time on the water with friends, family or colleagues. The feedback highlights the sense of exclusivity, the beautiful scenery and cruising in comfort — a relaxed, premium experience people remember and recommend." },
];

export default function TrustedServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo((sectionRef.current?.querySelector(".trusted-header")) ?? null, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(
        Array.from(gridRef.current?.children ?? []),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#fbfaf6", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="trusted-header" style={{ textAlign: "center", marginBottom: 54 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, justifyContent: "center" }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>Every Occasion</span>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(38px,4.2vw,56px)", lineHeight: 1.05, color: "#003052", margin: 0, letterSpacing: "-0.01em" }}>
            Trusted across every service
          </h2>
        </div>

        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", borderTop: "1px solid #e6e2d6" }}>
          {services.map((s, i) => {
            const isLeft = i % 2 === 0;
            const isBottom = i >= 2;
            return (
              <div
                key={s.title}
                style={{
                  padding: isLeft ? "40px 40px 40px 0" : "40px 0 40px 40px",
                  borderRight: isLeft ? "1px solid #e6e2d6" : "none",
                  borderBottom: !isBottom ? "1px solid #e6e2d6" : "none",
                }}
              >
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 26, color: "#003052", margin: "0 0 14px" }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14.5, lineHeight: 1.75, color: "#6b7884", margin: 0 }}>
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
