"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GatewaySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current, { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: textRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(imgRef.current, { opacity: 0, x: 50 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: imgRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(quoteRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: quoteRef.current, start: "top 88%", once: true },
      });

      /* Parallax on image */
      gsap.to((imgRef.current && imgRef.current.querySelector("img")) ?? null, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: imgRef.current, scrub: 1 },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ background: "#fbfaf6", padding: "104px 56px" }}
    >
      <div
        className="cn-split"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: 72,
          alignItems: "center",
        }}
      >
        {/* Text */}
        <div ref={textRef}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>
              Your Gateway to the Ocean
            </span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(34px,3.6vw,50px)", lineHeight: 1.08, color: "#003052", margin: "0 0 28px", letterSpacing: "-0.01em" }}>
            Superyacht charter: your gateway to luxury ocean adventures
          </h2>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.8, color: "#566571", margin: "0 0 22px" }}>
            <strong style={{ fontWeight: 500, color: "#003052" }}>Club Nautical</strong> is an Australian superyacht charter broker with decades of specialist experience matching private clients, families, and corporate groups to crewed luxury yachts across Australia and the South Pacific. We manage every detail of the charter process — from yacht selection and bespoke itinerary planning through to onboard provisioning and crew coordination — at no cost to the charterer.
          </p>
          <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.8, color: "#566571", margin: "0 0 34px" }}>
            Whether you are chartering a superyacht for the first time or planning your next voyage, our independent advice and global fleet access ensure an exceptional experience tailored to your group.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 26, flexWrap: "wrap", paddingTop: 28, borderTop: "1px solid #e6e2d6" }}>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 21, color: "#003052" }}>
              Ready to start planning?
            </span>
            <a href="#contact" className="btn-navy">Enquire Online</a>
          </div>
        </div>

        {/* Image */}
        <div ref={imgRef} className="img-zoom" style={{ height: 560, borderRadius: 2 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/Copy-of-IMG_2456.webp"
            onError={(e) => { (e.target as HTMLImageElement).src = "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/Copy-of-IMG_2456-1920w.webp"; }}
            alt="Luxury yacht charter"
          />
        </div>
      </div>

      {/* Pull quote */}
      <div style={{ maxWidth: 1000, margin: "88px auto 0", textAlign: "center" }}>
        <p
          ref={quoteRef}
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(22px,2.4vw,30px)",
            lineHeight: 1.5,
            color: "#003052",
            margin: 0,
          }}
        >
          We specialise in luxury private yacht charter across{" "}
          <span style={{ fontStyle: "normal", color: "#308EC7" }}>Sydney Harbour</span>, the{" "}
          <span style={{ fontStyle: "normal", color: "#308EC7" }}>Gold Coast</span>,{" "}
          <span style={{ fontStyle: "normal", color: "#308EC7" }}>Brisbane</span> and the{" "}
          <span style={{ fontStyle: "normal", color: "#308EC7" }}>Whitsunday Islands</span> — connecting clients with premium crewed yachts for celebrations, corporate events and luxury travel.
        </p>
      </div>
    </section>
  );
}
