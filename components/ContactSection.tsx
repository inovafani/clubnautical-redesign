"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", loc: "", pref: "No Preference", msg: "" });
  const sectionRef = useRef<HTMLElement>(null);

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.includes("@")) { setErr(true); return; }
    setErr(false);
    setSent(true);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        (sectionRef.current?.querySelectorAll(".contact-card")) ?? null,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" style={{ background: "#003052", padding: "104px 56px" }}>
      <div className="cn-split" style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 56, alignItems: "start" }}>
        {/* Info card */}
        <div className="contact-card" style={{ background: "#fbfaf6", borderRadius: 2, padding: "48px 44px" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 34, color: "#003052", margin: "0 0 32px", lineHeight: 1.1 }}>
            Contact information
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { label: "Phone", value: "0493 508 625", href: "tel:0493508625" },
              { label: "Email", value: "admin@clubnautical.com", href: "mailto:admin@clubnautical.com" },
              { label: "Hours", value: "Mon – Sun · 9:00am – 5:00pm", href: null },
            ].map((row) => (
              <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 0", borderTop: "1px solid #e0dccf" }}>
                <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.16em", textTransform: "uppercase", fontSize: 10.5, color: "#308EC7", minWidth: 66 }}>
                  {row.label}
                </span>
                {row.href ? (
                  <a href={row.href} style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 400, fontSize: 16, color: "#003052", textDecoration: "none" }}>
                    {row.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15, color: "#3a4a56" }}>
                    {row.value}
                  </span>
                )}
              </div>
            ))}
            <div style={{ borderTop: "1px solid #e0dccf" }} />
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 30 }}>
            <a href="#" className="btn-navy" style={{ flex: 1, textAlign: "center", padding: "14px 0" }}>Find Us</a>
            <a href="#" className="btn-dark-outline" style={{ flex: 1 }}>Leave a Review</a>
          </div>
        </div>

        {/* Form card */}
        <div className="contact-card" style={{ background: "#fbfaf6", borderRadius: 2, padding: "48px 46px" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, color: "#003052", marginBottom: 14 }}>
                Thank you for contacting us.
              </div>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 15, color: "#566571", margin: 0 }}>
                We will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 34, color: "#003052", margin: "0 0 10px", lineHeight: 1.1 }}>
                Enquire online
              </h2>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14, color: "#6b7884", margin: "0 0 28px", lineHeight: 1.6 }}>
                Call our team or submit your enquiry below and we&apos;ll be in touch. For a detailed quote, include your dates and guest numbers.
              </p>

              <div className="cn-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 10.5, color: "#7b8893", display: "block", marginBottom: 7 }}>Full Name</label>
                  <input className="cn-field" type="text" value={form.name} onChange={update("name")} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 10.5, color: "#7b8893", display: "block", marginBottom: 7 }}>Email</label>
                  <input className="cn-field" type="email" value={form.email} onChange={update("email")} />
                </div>
              </div>

              <div className="cn-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 10.5, color: "#7b8893", display: "block", marginBottom: 7 }}>Phone</label>
                  <input className="cn-field" type="tel" value={form.phone} onChange={update("phone")} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 10.5, color: "#7b8893", display: "block", marginBottom: 7 }}>Location</label>
                  <select className="cn-field" value={form.loc} onChange={update("loc")}>
                    <option value="">Select…</option>
                    <option>Brisbane</option>
                    <option>Gold Coast</option>
                    <option>Sunshine Coast</option>
                    <option>Sydney</option>
                    <option>Whitsundays</option>
                    <option>South Pacific</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 10.5, color: "#7b8893", display: "block", marginBottom: 7 }}>Contact Preference</label>
                <select className="cn-field" value={form.pref} onChange={update("pref")}>
                  <option>No Preference</option>
                  <option>Phone</option>
                  <option>Email</option>
                </select>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 10.5, color: "#7b8893", display: "block", marginBottom: 7 }}>Message</label>
                <textarea className="cn-field" rows={4} style={{ resize: "vertical" }} value={form.msg} onChange={update("msg")} />
              </div>

              <button type="submit" className="btn-navy" style={{ width: "100%", padding: "16px 0", border: "none", cursor: "pointer" }}>
                Submit Enquiry
              </button>

              {err && (
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 13, color: "#c0492f", margin: "14px 0 0", textAlign: "center" }}>
                  Please add your name and a valid email so we can reply.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
