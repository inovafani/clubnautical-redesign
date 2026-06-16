"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const paragraphs = [
  "A superyacht charter is the private hire of a fully crewed luxury vessel — typically 24 metres (approximately 79 feet) or longer — for a defined voyage tailored entirely to your group's preferences. Unlike bareboat or skippered yacht hire, a crewed yacht charter includes a full professional team: captain, chef, stewards, deck crew, and often specialist staff such as dive instructors, wellness therapists, or expedition guides.",
  "Crew-to-guest ratios on a superyacht often reach 1:1, meaning every aspect of your experience is personally attended to. You wake up to a new ocean view each morning, enjoy gourmet meals prepared to your exact dietary preferences, and can adjust your itinerary on the fly based on weather, mood, or discovery.",
  "For commercial charter operations, most superyachts accommodate a maximum of 12 overnight guests under standard regulations. Yachts built to the Passenger Yacht Code can carry up to 36 guests, making them ideal for larger groups and corporate events.",
  "A superyacht charter combines five-star hospitality with total geographic freedom. The entire vessel belongs exclusively to your group for the duration of the voyage — a level of privacy, service, and personalisation that no resort, cruise ship, or hotel can match.",
];

export default function WhatIsCharterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: imgRef.current, start: "top 85%", once: true },
      });

      /* Parallax */
      gsap.to((imgRef.current && imgRef.current.querySelector("img")) ?? null, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, scrub: 1.2 },
      });

      /* Stagger text */
      const paras = textRef.current?.querySelectorAll("p");
      if (paras) {
        gsap.fromTo(paras, { opacity: 0, y: 24 }, {
          opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: textRef.current, start: "top 85%", once: true },
        });
      }
      gsap.fromTo((textRef.current?.querySelector(".eyebrow-row")) ?? null, { opacity: 0, x: -20 }, {
        opacity: 1, x: 0, duration: 0.7,
        scrollTrigger: { trigger: textRef.current, start: "top 88%", once: true },
      });
      gsap.fromTo((textRef.current?.querySelector("h2")) ?? null, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: textRef.current, start: "top 85%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#f3f0e8", padding: "104px 56px" }}
    >
      <div
        className="cn-split"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 72,
          alignItems: "start",
        }}
      >
        {/* Sticky image */}
        <div
          ref={imgRef}
          className="img-zoom sticky-img"
          style={{ height: 600, borderRadius: 2, position: "sticky", top: 100 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/shutterstock_1310024569-1668h.png"
            alt="Superyacht experience"
            style={{ objectPosition: "center 35%" }}
          />
        </div>

        {/* Text */}
        <div ref={textRef}>
          <div className="eyebrow-row" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>
              The Essentials
            </span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(34px,3.6vw,50px)", lineHeight: 1.08, color: "#003052", margin: "0 0 30px", letterSpacing: "-0.01em" }}>
            What is a superyacht charter?
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.8, color: "#566571", margin: "0 0 20px" }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
