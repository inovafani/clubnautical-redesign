"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SafetyExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(colsRef.current?.children ?? []),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: colsRef.current, start: "top 85%", once: true } }
      );

      /* Counter for 25+ */
      const statEl = statRef.current;
      if (statEl) {
        gsap.to({ val: 0 }, { val: 25, duration: 1.6, ease: "power2.out",
          scrollTrigger: { trigger: statEl, start: "top 88%", once: true },
          onUpdate: function (this: gsap.core.Tween) {
            statEl.textContent = Math.ceil((this.targets()[0] as { val: number }).val) + "+";
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#fbfaf6", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div ref={colsRef} className="cn-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 30 }}>
          {/* Safety */}
          <div style={{ paddingRight: 30, borderRight: "1px solid #e6e2d6" }}>
            <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 11, color: "#308EC7", marginBottom: 14 }}>
              Trusted Standards
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 24, color: "#003052", margin: "0 0 14px", lineHeight: 1.2 }}>
              Safety &amp; professional crew
            </h3>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: "#6b7884", margin: 0 }}>
              Every charter operates with licensed captains, qualified crew and vessels that comply with Australian maritime safety standards. Our partners maintain strict safety procedures and insurance coverage so every voyage runs smoothly and securely.
            </p>
          </div>

          {/* Experience */}
          <div style={{ paddingRight: 30, borderRight: "1px solid #e6e2d6" }}>
            <div
              ref={statRef}
              style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, color: "#308EC7", lineHeight: 1, marginBottom: 10 }}
            >
              25+
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 24, color: "#003052", margin: "0 0 14px", lineHeight: 1.2 }}>
              Years of charter experience
            </h3>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: "#6b7884", margin: 0 }}>
              With more than 20 years in the industry, Club Nautical has helped thousands of clients plan private yacht events, corporate charters and luxury holidays — working with trusted owners, captains and crews across Australia and the South Pacific.
            </p>
          </div>

          {/* Next Steps */}
          <div>
            <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 11, color: "#308EC7", marginBottom: 14 }}>
              Begin the Voyage
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 24, color: "#003052", margin: "0 0 14px", lineHeight: 1.2 }}>
              Your next steps
            </h3>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: "#6b7884", margin: "0 0 18px" }}>
              Whether your vision is a sun-filled day of celebration, an expedition, a corporate retreat at sea, or a family adventure through the Whitsundays — the experience begins with a conversation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 13.5, color: "#3a4a56" }}>
              <span>· Contact us to start your consultation</span>
              <span>· Share your travel date, guest numbers &amp; destination</span>
              <span>· Explore available yachts for your season</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
