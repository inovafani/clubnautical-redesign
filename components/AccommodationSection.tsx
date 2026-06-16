"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const amenities = [
  "Jacuzzis, gyms, wellness centres and cinema rooms as standard on larger vessels",
  "Helipads, swimming pools, submersibles and dedicated spa decks on the largest yachts",
  "Water sports including jet skis, paddleboards, kayaks, scuba gear, wakeboards, seabobs and e-foils",
];

export default function AccommodationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current, { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(imgRef.current, { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: imgRef.current, start: "top 85%", once: true },
      });
      gsap.to((imgRef.current && imgRef.current.querySelector("img")) ?? null, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, scrub: 1 },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#f3f0e8", padding: "104px 56px" }}>
      <div className="cn-split" style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 72, alignItems: "center" }}>
        <div ref={textRef}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>Life On Board</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(32px,3.4vw,46px)", lineHeight: 1.08, color: "#003052", margin: "0 0 26px", letterSpacing: "-0.01em" }}>
            Accommodation & guest experience
          </h2>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.8, color: "#566571", margin: "0 0 22px" }}>
            Charter yachts typically accommodate 8 to 12 overnight guests, with larger vessels hosting 20 to 36. Cabin configurations usually include an owner&apos;s suite, VIP staterooms, and a mix of double and twin cabins — all finished to a standard rivalling the finest luxury resorts.
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {amenities.map((a, i) => (
              <div
                key={i}
                style={{
                  padding: "16px 0",
                  borderTop: "1px solid #d8d2c0",
                  borderBottom: i === amenities.length - 1 ? "1px solid #d8d2c0" : "none",
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: 300,
                  fontSize: 14.5,
                  color: "#3a4a56",
                  lineHeight: 1.6,
                }}
              >
                {a}
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.8, color: "#566571", margin: "24px 0 0" }}>
            <strong style={{ fontWeight: 500, color: "#003052" }}>Professional crew-to-guest ratios</strong> ensure exceptional service. A 30-metre yacht might carry 6 to 10 crew — captain, engineers, chef and galley staff, interior stewards, deck crew, and on expeditions, specialist guides, dive instructors and wellness staff.
          </p>
        </div>

        <div ref={imgRef} className="img-zoom" style={{ height: 620, borderRadius: 2 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/shutterstock_2479149491.jpg"
            alt="Onboard guest experience"
          />
        </div>
      </div>
    </section>
  );
}
