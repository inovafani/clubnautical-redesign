"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

const menus = {
  About: [
    { label: "About Us", href: "#about", img: "https://irp.cdn-website.com/b371e29e/dms3rep/multi/Copy-of-IMG_2456.webp" },
    { label: "FAQ", href: "#faq", img: "https://irp.cdn-website.com/b371e29e/dms3rep/multi/shutterstock_2221233211-a85dedf5.jpg" },
    { label: "Reviews", href: "#contact", img: "https://irp.cdn-website.com/b371e29e/dms3rep/multi/491822608_1203121911819143_4876497069072183930_n.jpg" },
  ],
  Destinations: [
    { label: "Australia-Wide", href: "#destinations", img: "https://irp.cdn-website.com/b371e29e/dms3rep/multi/491822608_1203121911819143_4876497069072183930_n.jpg" },
    { label: "Brisbane", href: "#destinations", img: "https://irp.cdn-website.com/b371e29e/dms3rep/multi/imgi_23_Brisbane-Image-impulsive-4027769e-fcf6aa25.jpg" },
    { label: "Gold Coast", href: "#destinations", img: "https://irp.cdn-website.com/b371e29e/dms3rep/multi/shutterstock_2479149491.jpg" },
    { label: "South Pacific", href: "#destinations", img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/shutterstock_1310024569-1668h.png" },
    { label: "Sydney", href: "#destinations", img: "https://irp.cdn-website.com/b371e29e/dms3rep/multi/Copy-of-IMG_2456.webp" },
    { label: "Whitsundays", href: "#destinations", img: "https://irp.cdn-website.com/b371e29e/dms3rep/multi/imgi_34_Whitsundays-Impulsive-64dcaccd-8309e5a4.jpg" },
  ],
  Services: [
    { label: "Activities", href: "#services", img: "https://irp.cdn-website.com/b371e29e/dms3rep/multi/shutterstock_2479149491.jpg" },
    { label: "Charter Hire", href: "#services", img: "https://irp.cdn-website.com/b371e29e/dms3rep/multi/491822608_1203121911819143_4876497069072183930_n.jpg" },
    { label: "Memberships & Syndication", href: "#services", img: "https://irp.cdn-website.com/b371e29e/dms3rep/multi/Copy-of-IMG_2456.webp" },
    { label: "Menu Packages", href: "#services", img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/shutterstock_1310024569-1668h.png" },
  ],
};

type MenuKey = keyof typeof menus;

const navLinks: { label: string; href?: string }[] = [
  { label: "About" },
  { label: "Destinations" },
  { label: "Services" },
  { label: "Gallery", href: "#" },
  { label: "Contact", href: "#contact" },
];

const linkCss: React.CSSProperties = {
  fontFamily: "'Tenor Sans', sans-serif",
  letterSpacing: "0.17em",
  textTransform: "uppercase",
  fontSize: 12,
  color: "rgba(255,255,255,0.9)",
  textDecoration: "none",
  cursor: "pointer",
  background: "none",
  border: "none",
  padding: 0,
  display: "flex",
  alignItems: "center",
  gap: 5,
  whiteSpace: "nowrap" as const,
  transition: "color 0.25s ease",
};

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null);
  const dropRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openDrop = useCallback((key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const panel = dropRefs.current[openMenu];
    if (!panel) return;
    gsap.fromTo(
      panel.querySelectorAll(".nav-drop-banner"),
      { opacity: 0, x: -14 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
    );
  }, [openMenu]);
  const closeDrop = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }, []);
  const keepOpen = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const hasDropdown = (key: string): key is MenuKey => key in menus;

  /* Magnetic Enquire button */
  const btnRef = useRef<HTMLAnchorElement>(null);
  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: "power2.out" });
  };
  const handleMouseLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.4)" });
  };

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, width: "100%" }}>
        {/* Thin tagline strip — full width, sits above the main nav row */}
        <div
          className="nav-tagline-bar"
          style={{
            width: "100%",
            textAlign: "center",
            padding: "6px 0",
            background: scrolled ? "rgba(0,48,82,0.97)" : "rgba(2,31,51,0.4)",
            borderBottom: "1px solid rgba(216,210,171,0.14)",
            transition: "background 0.4s ease",
          }}
        >
          <span
            style={{
              fontFamily: "'Tenor Sans',sans-serif",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(216,210,171,0.85)",
              whiteSpace: "nowrap",
            }}
          >
            Australia-Wide Luxury Yacht Charters
          </span>
        </div>

        <nav
          ref={navRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: scrolled ? "14px 56px" : "22px 56px",
            transition: "background 0.4s ease, padding 0.4s ease, border-color 0.4s ease",
            background: scrolled ? "rgba(0,48,82,0.97)" : "transparent",
            borderBottom: scrolled ? "1px solid rgba(216,210,171,0.18)" : "1px solid transparent",
          }}
        >
        {/* Logo */}
        <a href="#top" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/logowhite.png"
            alt="Club Nautical"
            style={{ height: scrolled ? 32 : 38, width: "auto", transition: "height 0.4s ease" }}
          />
        </a>

        {/* Center links */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 34 }}>
          {navLinks.map(({ label, href }) => (
            <div
              key={label}
              style={{ position: "relative" }}
              onMouseEnter={() => hasDropdown(label) && openDrop(label as MenuKey)}
              onMouseLeave={closeDrop}
            >
              {hasDropdown(label) ? (
                <button
                  style={linkCss}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#D8D2AB")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)")}
                >
                  {label}
                  <svg width="8" height="8" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.8 }}>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </button>
              ) : (
                <a
                  href={href}
                  style={linkCss}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#D8D2AB")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)")}
                >
                  {label}
                </a>
              )}

              {hasDropdown(label) && (
                <div
                  ref={(el) => { dropRefs.current[label] = el; }}
                  onMouseEnter={keepOpen}
                  onMouseLeave={closeDrop}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 18px)",
                    left: "50%",
                    transform: openMenu === label ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(6px)",
                    opacity: openMenu === label ? 1 : 0,
                    visibility: openMenu === label ? "visible" : "hidden",
                    transition: "opacity 0.25s ease, transform 0.25s ease",
                    background: "#04263c",
                    borderTop: "2px solid #D8D2AB",
                    boxShadow: "0 24px 60px rgba(0,15,28,0.45)",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    minWidth: 280,
                    zIndex: 200,
                  }}
                >
                  {menus[label as MenuKey].map(item => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="nav-drop-banner"
                      onClick={() => setOpenMenu(null)}
                      style={{
                        position: "relative",
                        display: "block",
                        height: 64,
                        borderRadius: 2,
                        overflow: "hidden",
                        textDecoration: "none",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.img}
                        alt=""
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div
                        className="nav-drop-banner-overlay"
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(90deg, rgba(2,31,51,0.9) 0%, rgba(2,31,51,0.6) 55%, rgba(2,31,51,0.2) 100%)",
                          transition: "background 0.35s ease",
                        }}
                      />
                      <div
                        className="nav-drop-banner-accent"
                        style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "#D8D2AB", opacity: 0, transition: "opacity 0.3s ease" }}
                      />
                      <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px" }}>
                        <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 12.5, color: "#fff" }}>
                          {item.label}
                        </span>
                        <span className="nav-drop-arrow" style={{ opacity: 0, transform: "translateX(-4px)", transition: "opacity 0.25s ease, transform 0.25s ease", color: "#D8D2AB", fontSize: 14, flexShrink: 0 }}>
                          &rarr;
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: phone + CTA */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 24, flexShrink: 0 }}>
          <a
            href="tel:0493508625"
            className="nav-phone"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontFamily: "'Tenor Sans',sans-serif",
              letterSpacing: "0.1em",
              fontSize: 12.5,
              color: "rgba(255,255,255,0.88)",
              textDecoration: "none",
              transition: "color 0.25s ease",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#D8D2AB")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.88)")}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.56 3.38 2 2 0 0 1 3.54 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            0493 508 625
          </a>
          <a
            ref={btnRef}
            href="#contact"
            className="btn-fill"
            style={{ padding: "12px 26px" }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
          >
            Enquire
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="nav-burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 6 }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round">
            {mobileOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
            }
          </svg>
        </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          background: "#003052",
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          overflowY: "auto",
          paddingTop: 128,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "0 32px 32px", flex: 1 }}>
          {navLinks.map(({ label, href }) => {
            const isDropdown = hasDropdown(label);
            return (
              <div key={label} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                {isDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === label ? null : label)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "18px 0",
                        fontFamily: "'Tenor Sans',sans-serif",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {label}
                      <svg
                        width="12" height="12" viewBox="0 0 10 6" fill="none"
                        style={{ transform: mobileExpanded === label ? "rotate(180deg)" : "none", transition: "transform 0.3s ease" }}
                      >
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </button>
                    {mobileExpanded === label && (
                      <div style={{ paddingBottom: 12 }}>
                        {menus[label as MenuKey].map(item => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: "block",
                              padding: "11px 16px",
                              fontFamily: "'Poppins',sans-serif",
                              fontWeight: 300,
                              fontSize: 14,
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={href ?? "#"}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      padding: "18px 0",
                      fontFamily: "'Tenor Sans',sans-serif",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.9)",
                      textDecoration: "none",
                    }}
                  >
                    {label}
                  </a>
                )}
              </div>
            );
          })}

          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
            <a href="tel:0493508625" style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15, color: "#D8D2AB", textDecoration: "none" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.56 3.38 2 2 0 0 1 3.54 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              0493 508 625
            </a>
            <a href="#contact" className="btn-fill" onClick={() => setMobileOpen(false)} style={{ textAlign: "center" }}>
              Enquire Now
            </a>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 98, background: "rgba(0,0,0,0.4)" }} />
      )}
    </>
  );
}
