"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const durations = [
  { label: "Short Escape", title: "Day Charters", body: "Ideal for corporate events, celebrations, and short escapes on the water. A single-day experience with full crew and provisions lets you entertain clients, colleagues, friends or family in style — without the commitment of a longer voyage." },
  { label: "Most Popular", title: "Week-Long Charters", body: "Seven nights aboard with full service is the most popular charter format globally. Most pricing is quoted weekly, with average durations around seven to eight days — the sweet spot for a comprehensive luxury holiday exploring multiple destinations at a relaxed pace.", center: true },
  { label: "The Grand Voyage", title: "Extended Charters", body: "Multi-week charters suit special occasions, corporate retreats, or expedition voyages to remote locations like Antarctica or the South Pacific. These require additional provisioning, crew rest planning and sometimes special permits." },
];

export default function CharterDurationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo((sectionRef.current?.querySelector(".duration-header")) ?? null, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(
        Array.from(colsRef.current?.children ?? []),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: colsRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(bannerRef.current, { opacity: 0, scale: 0.97 }, {
        opacity: 1, scale: 1, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: bannerRef.current, start: "top 88%", once: true },
      });
      gsap.to((bannerRef.current && bannerRef.current.querySelector("img")) ?? null, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: bannerRef.current, scrub: 1 },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#fbfaf6", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="duration-header" style={{ textAlign: "center", marginBottom: 54 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, justifyContent: "center" }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>How Long to Sail</span>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(38px,4.2vw,56px)", lineHeight: 1.05, color: "#003052", margin: 0, letterSpacing: "-0.01em" }}>
            Charter duration options
          </h2>
        </div>

        <div ref={colsRef} className="cn-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 34 }}>
          {durations.map((d) => (
            <div
              key={d.title}
              style={{
                borderLeft: d.center ? "1px solid #e6e2d6" : "none",
                borderRight: d.center ? "1px solid #e6e2d6" : "none",
                padding: d.center ? "0 34px" : 0,
              }}
            >
              <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 11, color: "#308EC7", marginBottom: 14 }}>
                {d.label}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 30, color: "#003052", margin: "0 0 16px" }}>
                {d.title}
              </h3>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14.5, lineHeight: 1.75, color: "#6b7884", margin: 0 }}>
                {d.body}
              </p>
            </div>
          ))}
        </div>

        <div ref={bannerRef} className="img-zoom" style={{ height: 320, borderRadius: 2, marginTop: 60 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/shutterstock_2221233211-a85dedf5.jpg"
            alt="Celebrating on board a charter"
          />
        </div>
      </div>
    </section>
  );
}
