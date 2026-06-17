"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutReviewsWidgetSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#fbfaf6", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, justifyContent: "center" }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>
              Verified On Google
            </span>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.1, color: "#003052", margin: 0, letterSpacing: "-0.01em" }}>
            What our guests say
          </h2>
        </div>

        {/* Live Google reviews, pulled the same way as the original site — via the Elfsight
            widget already connected to Club Nautical's Google Business Profile. */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="elfsight-app-2fd0166d-794c-40c0-8411-075fce803ce4" data-elfsight-app-lazy />
      </div>
    </section>
  );
}
