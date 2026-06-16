"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    num: "1",
    title: "Initial Consultation",
    body: "We understand your preferences — guest count, destinations, yacht style, amenities, and the occasions that matter most. Confidential and obligation-free.",
    active: true,
  },
  {
    num: "2",
    title: "Yacht Selection",
    body: "We present a curated shortlist matched to your brief. Our access spans the full charter fleet and our recommendations are independent — commission is covered by the owner.",
    active: false,
  },
  {
    num: "3",
    title: "Itinerary Planning",
    body: "We craft a bespoke itinerary considering seasonality, weather windows, permits and optimal routing — adjustable at any point during your voyage.",
    active: false,
  },
  {
    num: "4",
    title: "Pre-Charter Planning",
    body: "A detailed questionnaire covers provisions, dietary preferences, activities and special requests. We coordinate transfers, docking, and crew briefings.",
    active: false,
  },
];

export default function BookingProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo((sectionRef.current?.querySelector(".process-header")) ?? null, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      /* Steps sequential reveal with border animation */
      const stepEls = Array.from(stepsRef.current?.children ?? []);
      stepEls.forEach((el, i) => {
        const border = (el as HTMLElement).querySelector(".step-border") as HTMLElement;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: i * 0.15,
            scrollTrigger: { trigger: stepsRef.current, start: "top 85%", once: true },
          }
        );
        if (border && i === 0) {
          gsap.fromTo(border, { borderColor: "#cfd8de" }, {
            borderColor: "#308EC7", duration: 0.5, delay: i * 0.15 + 0.4,
            scrollTrigger: { trigger: stepsRef.current, start: "top 85%", once: true },
          });
        }
      });

      gsap.fromTo((sectionRef.current?.querySelector(".process-quote")) ?? null, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: (sectionRef.current?.querySelector(".process-quote")) ?? undefined, start: "top 90%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#f3f0e8", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="process-header" style={{ maxWidth: 760, marginBottom: 58 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>The Booking Process</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(34px,3.8vw,50px)", lineHeight: 1.07, color: "#003052", margin: "0 0 18px", letterSpacing: "-0.01em" }}>
            Planning your superyacht charter
          </h2>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.75, color: "#566571", margin: 0 }}>
            Our charter planning process is designed to make booking your luxury yacht simple and stress-free.
          </p>
        </div>

        <div ref={stepsRef} className="cn-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{ paddingLeft: 26, position: "relative" }}>
              <div
                className="step-border"
                style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: i === 0 ? "#308EC7" : "#cfd8de", transition: "background 0.5s ease" }}
              />
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 46, color: i === 0 ? "#308EC7" : "#a9b4bc", lineHeight: 1, marginBottom: 18 }}>
                {s.num}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 21, color: "#003052", margin: "0 0 12px", lineHeight: 1.2 }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: "#6b7884", margin: 0, paddingRight: 20 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <p
          className="process-quote"
          style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 21, color: "#003052", textAlign: "center", margin: "58px auto 0", maxWidth: 760, lineHeight: 1.5 }}
        >
          The best yachts in peak seasons require booking 6 to 12 months in advance. Early planning gives you the widest selection and the best value.
        </p>
      </div>
    </section>
  );
}
