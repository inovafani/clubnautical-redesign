"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutClosingCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(contentRef.current?.children ?? []),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ position: "relative", minHeight: 420, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/Guest-with-glasses-of-champagne.jpg"
        alt="Friends celebrating with champagne aboard a yacht"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(2,31,51,0.78) 0%, rgba(2,31,51,0.6) 100%)" }} />

      <div ref={contentRef} style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "80px 24px", maxWidth: 640 }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(30px,3.6vw,46px)", lineHeight: 1.15, color: "#fff", margin: "0 0 18px", letterSpacing: "-0.01em" }}>
          Ready to set sail with Club Nautical?
        </h2>
        <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.7, color: "rgba(255,255,255,0.82)", margin: "0 0 32px" }}>
          Tell us your occasion, your destination, and your guest count &mdash; we&rsquo;ll take care of the rest.
        </p>
        <a href="#contact" className="btn-fill">Enquire Now</a>
      </div>
    </section>
  );
}
