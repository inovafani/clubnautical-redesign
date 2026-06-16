"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const siteLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Services", href: "#services" },
  { label: "The Fleet", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "FAQ", href: "#faq" },
  { label: "Reviews", href: "#contact" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = ["Activities", "Charter Hire", "Memberships & Syndication", "Menu Packages"];

const destLinks = [
  { label: "Australia-Wide", href: "#destinations" },
  { label: "South Pacific", href: "#destinations" },
  { label: "Brisbane", href: "#destinations" },
  { label: "Sydney", href: "#destinations" },
  { label: "Gold Coast", href: "#destinations" },
  { label: "Whitsundays", href: "#destinations" },
];

const linkStyle = {
  fontFamily: "'Poppins',sans-serif",
  fontWeight: 300,
  fontSize: 14,
  color: "rgba(255,255,255,0.72)",
  textDecoration: "none",
  transition: "color 0.25s ease",
  display: "block",
};

export default function FooterSection() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        (footerRef.current?.querySelectorAll(".footer-col")) ?? null,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 90%", once: true } }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} style={{ background: "#021f33", padding: "80px 56px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="cn-grid-3" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48, paddingBottom: 64 }}>
          {/* Site Links */}
          <div className="footer-col">
            <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 11, color: "#D8D2AB", marginBottom: 20 }}>
              Site Links
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "11px 24px", maxWidth: 340 }}>
              {siteLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={linkStyle}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D8D2AB")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.72)")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 11, color: "#D8D2AB", marginBottom: 20 }}>
              Services
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {serviceLinks.map((l) => (
                <a
                  key={l}
                  href="#services"
                  style={linkStyle}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D8D2AB")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.72)")}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div className="footer-col">
            <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 11, color: "#D8D2AB", marginBottom: 20 }}>
              Destinations
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "11px 24px" }}>
              {destLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={linkStyle}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D8D2AB")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.72)")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", padding: "26px 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            ABN 47 659 916 373 · © 2026 Club Nautical
          </span>
          <a href="#" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Terms &amp; Conditions
          </a>
        </div>

        {/* Logo */}
        <div style={{ padding: "34px 0 40px", display: "flex", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/logowhite.png"
            alt="Club Nautical"
            style={{ height: 44, width: "auto", opacity: 0.9 }}
          />
        </div>
      </div>
    </footer>
  );
}
