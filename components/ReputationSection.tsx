"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const highlights = [
  ["Strong recommendation intent", "Repeat-booking confidence"],
  ["Happy celebration outcomes", "Personalised experiences"],
  ["Easy, guided booking", "Professional organisation"],
];

const quotes = [
  '"Highly recommend Club Nautical."',
  '"Hope to see you guys again soon!"',
  '"Another satisfied customer review…"',
  '"Look forward to booking our next party."',
];

export default function ReputationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo((sectionRef.current?.querySelector(".rep-header")) ?? null, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo(bannerRef.current, { opacity: 0, scale: 0.97 }, {
        opacity: 1, scale: 1, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: bannerRef.current, start: "top 88%", once: true },
      });
      gsap.to((bannerRef.current && bannerRef.current.querySelector("img")) ?? null, {
        yPercent: -10, ease: "none",
        scrollTrigger: { trigger: bannerRef.current, scrub: 1 },
      });
      gsap.fromTo(
        (sectionRef.current?.querySelectorAll(".rep-col")) ?? null,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: bannerRef.current, start: "bottom 85%", once: true } }
      );
      gsap.fromTo(
        (sectionRef.current?.querySelectorAll(".rep-quote")) ?? null,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: (sectionRef.current?.querySelector(".rep-lower")) ?? undefined, start: "top 85%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#f3f0e8", padding: "104px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="rep-header" style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 60px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, justifyContent: "center" }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>Our Reputation</span>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(34px,3.8vw,52px)", lineHeight: 1.06, color: "#003052", margin: 0, letterSpacing: "-0.01em" }}>
            A trusted reputation for yacht charters in Australia
          </h2>
        </div>

        <div ref={bannerRef} className="img-zoom" style={{ height: 340, borderRadius: 2, marginBottom: 56 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/imgi_23_Brisbane-Image-impulsive-4027769e-fcf6aa25.jpg"
            alt="Luxury yacht charter"
          />
        </div>

        <div className="cn-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginBottom: 64 }}>
          <div className="rep-col">
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontWeight: 400, fontSize: 24, color: "#003052", margin: "0 0 16px" }}>Review Summary</h3>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14.5, lineHeight: 1.8, color: "#566571", margin: 0 }}>
              Our customers say our yacht charter service is warm, enthusiastic and experience-led. They speak about us as a team they would recommend — one review looking forward to &quot;booking our next party.&quot; Instagram snippets show happy post-event feedback. Taken together, the sentiment points to an experience that feels memorable, celebration-friendly and worth recommending.
            </p>
          </div>
          <div className="rep-col">
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontWeight: 400, fontSize: 24, color: "#003052", margin: "0 0 16px" }}>Reputation Standards</h3>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14.5, lineHeight: 1.8, color: "#566571", margin: 0 }}>
              We hold ourselves to clear internal service standards — confirming charter details promptly, keeping clients updated at each step, and providing a clear communication path from first enquiry through to boarding day. Our promise is simple: respond promptly, explain clearly, and stay available if plans change.
            </p>
          </div>
        </div>

        <div className="rep-lower cn-split" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 11, color: "#308EC7", marginBottom: 22 }}>
              Guest Experience Highlights
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {highlights.flat().map((h, i) => (
                <div
                  key={i}
                  style={{
                    padding: "15px 0",
                    paddingLeft: i % 2 === 1 ? 22 : 0,
                    borderTop: "1px solid #d8d2c0",
                    borderBottom: i >= highlights.flat().length - 2 ? "1px solid #d8d2c0" : "none",
                    fontFamily: "'Poppins',sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "#3a4a56",
                  }}
                >
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#003052", borderRadius: 2, padding: "38px 36px" }}>
            <div style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 11, color: "#D8D2AB", marginBottom: 22 }}>
              In Their Words
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {quotes.map((q, i) => (
                <p
                  key={i}
                  className="rep-quote"
                  style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 19, color: "#fff", margin: 0, lineHeight: 1.4 }}
                >
                  {q}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
