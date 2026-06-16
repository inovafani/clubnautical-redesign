"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRowRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.loop = true;
      v.muted = true;
      v.playsInline = true;
      const replay = () => {
        try { v.currentTime = 0; v.play(); } catch (_) {}
      };
      v.addEventListener("ended", replay);
      v.play().catch(() => {});
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });

      tl.fromTo(
          (titleRef.current?.querySelectorAll("span") ?? []),
          { opacity: 0, y: 40, skewY: 3 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" }
        )
        .fromTo(subtitleRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
        .fromTo(btnRowRef.current?.children ?? [], { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.12, duration: 0.6, ease: "power2.out" }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={containerRef}
      id="top"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 680,
        overflow: "hidden",
        background: "#021f33",
      }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/kXc6774kQxWP6ojKn0pW_freepik_video-upscale_2560x1440_30fps_52975.v2.0000000-1920w.jpg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source
          src="https://vid.cdn-website.com/b371e29e/videos/kXc6774kQxWP6ojKn0pW_freepik_video-upscale_2560x1440_30fps_52975-v.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(2,22,38,.65) 0%, rgba(2,22,38,.2) 40%, rgba(2,22,38,.82) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="hero-content-pad"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "0 56px 80px",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 780 }}>

            {/* Headline */}
            <h1
              ref={titleRef}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                fontSize: "clamp(50px,7.2vw,98px)",
                lineHeight: 0.96,
                color: "#fff",
                margin: "0 0 20px",
                letterSpacing: "-0.015em",
              }}
            >
              <span style={{ display: "block" }}>Club Nautical</span>
              <span
                style={{
                  display: "block",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#D8D2AB",
                }}
              >
                Superyacht Charter
              </span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                fontSize: 18,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.86)",
                margin: "0 0 38px",
                maxWidth: 600,
              }}
            >
              Celebrate life&apos;s best moments on the water with unforgettable luxury
              yacht charters across Australia and beyond.
            </p>

            {/* Buttons */}
            <div ref={btnRowRef} className="hero-buttons" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#contact" className="btn-fill">
                Send a Message
              </a>
              <a href="#destinations" className="btn-line">
                Explore Destinations
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
