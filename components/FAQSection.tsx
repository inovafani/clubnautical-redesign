"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const allFaqs = [
  { cat: "Experience", q: "What is a luxury yacht charter in Australia?", a: "A luxury yacht charter in Australia is a private boat hire experience where you book an entire yacht with a professional crew for your own group. Club Nautical organises everything from the vessel and captain to catering and itineraries so you can enjoy destinations like Sydney Harbour in complete comfort." },
  { cat: "Experience", q: "How does a private yacht charter work in Australia?", a: "With a private yacht charter you choose the vessel, date, duration and number of guests, and the crew handles navigation, safety and service. Club Nautical arranges the entire experience so guests can relax while cruising iconic locations such as Sydney Harbour or the Gold Coast waterways." },
  { cat: "Experience", q: "Why do people charter luxury yachts in Australia?", a: "Many Australians charter yachts for milestone celebrations, corporate events, weddings, birthdays and luxury harbour cruises. A yacht charter with Club Nautical provides privacy, premium service and spectacular views that traditional venues cannot match." },
  { cat: "Experience", q: "What makes luxury yacht charters different from regular boat hire?", a: "Luxury yacht charters include professional crew, high-end vessels, premium amenities and tailored experiences. With Club Nautical you're booking a complete luxury experience on the water rather than simply renting a boat." },
  { cat: "Experience", q: "Can beginners book a luxury yacht charter in Australia?", a: "Yes, you don't need boating experience to charter a luxury yacht. Club Nautical provides a professional captain and crew so guests can simply relax and enjoy the harbour cruise." },
  { cat: "Experience", q: "Where can you go on a yacht charter in Australia?", a: "Popular yacht charter destinations include Sydney Harbour, the Gold Coast Broadwater, Brisbane River and the Whitsundays. Club Nautical operates charters across many of Australia's most iconic waterways." },
  { cat: "Experience", q: "What is the experience like on a luxury yacht charter?", a: "A luxury yacht charter offers a relaxed yet sophisticated experience with stunning coastal scenery, attentive crew and premium onboard amenities. Guests enjoy personalised service while cruising Australia's beautiful waterways." },
  { cat: "Experience", q: "What facilities are available on a luxury charter yacht?", a: "Luxury charter yachts often include spacious lounges, sun decks, dining areas, bars, sound systems and luxury cabins. Club Nautical vessels are designed for comfort, entertaining and unforgettable harbour cruising experiences." },
  { cat: "Pricing", q: "How much does a luxury yacht charter cost in Australia?", a: "Luxury yacht charter prices in Australia typically start around $1,500 per hour for a short private cruise and can exceed $20,000 per day for larger vessels. Superyachts for multi-day charters can range from $50,000 to over $250,000 per week depending on the yacht and destination." },
  { cat: "Pricing", q: "How much does it cost to hire a yacht for a party in Australia?", a: "Party yacht hire in Australia generally starts around $1,500 to $3,000 per hour for smaller vessels and can reach $10,000+ for large luxury party boats. Club Nautical provides options for private celebrations with catering, music and entertainment onboard." },
  { cat: "Pricing", q: "Are there affordable luxury yacht charters in Australia?", a: "Yes, smaller luxury vessels or off-peak charters can provide excellent value while still offering a premium experience. Club Nautical offers yacht options across multiple budgets while maintaining a high standard of service." },
  { cat: "Pricing", q: "What factors affect yacht charter prices in Australia?", a: "Yacht charter prices depend on vessel size, charter duration, guest numbers, catering, crew requirements and destination. Popular dates such as New Year's Eve on Sydney Harbour are usually priced higher due to demand." },
  { cat: "Pricing", q: "Do yacht charter prices include crew and fuel?", a: "Many luxury yacht charters include the captain, crew and basic fuel within the charter fee. Club Nautical will confirm exactly what is included in the price when booking your yacht charter." },
  { cat: "Occasions", q: "What occasions are luxury yacht charters popular for in Australia?", a: "Luxury yacht charters are popular for birthdays, weddings, engagement parties, corporate functions and luxury harbour cruises. Many people also book Club Nautical yachts for romantic sunset cruises or private celebrations with friends." },
  { cat: "Occasions", q: "Can you book a yacht charter for a birthday party?", a: "Yes, birthday yacht charters are one of the most popular private boat hire experiences in Australia. Club Nautical offers vessels suitable for small groups or large party celebrations on the water." },
  { cat: "Occasions", q: "Are yacht charters good for corporate events?", a: "A corporate yacht charter is a unique way to host clients or reward staff with a premium experience. Businesses often book Club Nautical yachts for networking events, product launches or end-of-year celebrations." },
  { cat: "Occasions", q: "Can you host weddings on a yacht in Australia?", a: "Yes, many couples choose to host wedding ceremonies or receptions on luxury yachts. Club Nautical can help organise wedding cruises with catering, music and stunning harbour backdrops." },
  { cat: "Occasions", q: "Are yacht charters suitable for small private groups?", a: "Absolutely, many luxury yacht charters cater to intimate groups of couples or small families. Smaller vessels offered by Club Nautical are perfect for private harbour cruises or romantic occasions." },
  { cat: "Occasions", q: "Can you book a yacht for a romantic cruise?", a: "Yes, romantic sunset yacht charters are extremely popular in Australia. Couples often choose Club Nautical for anniversaries, proposals or special evenings cruising past the Sydney Opera House." },
  { cat: "Occasions", q: "Can you swim during a yacht charter?", a: "Many charters include opportunities to swim in sheltered bays or scenic coastal locations. Club Nautical can recommend suitable spots depending on your charter destination." },
  { cat: "Occasions", q: "Do yacht charters include music and entertainment?", a: "Yes, most luxury yachts feature onboard sound systems and entertainment areas. Guests booking with Club Nautical can often arrange DJs, live music or personalised playlists for their cruise." },
  { cat: "Occasions", q: "Can you get catering on a yacht charter?", a: "Yes, many yacht charters offer catering packages ranging from gourmet platters to fully catered dining experiences. Club Nautical can organise food, beverages and event services for your cruise." },
  { cat: "Booking", q: "How do you book a luxury yacht charter in Australia?", a: "Booking a yacht charter usually involves choosing the vessel, confirming the date, guest numbers and charter duration. Club Nautical makes the process straightforward with experienced charter specialists who guide you through every step." },
  { cat: "Booking", q: "How far in advance should you book a yacht charter?", a: "Popular charter dates such as summer weekends and public holidays can book out months in advance. It's best to secure your Club Nautical yacht charter early to ensure your preferred vessel is available." },
  { cat: "Booking", q: "Can tourists book a yacht charter in Australia?", a: "Yes, international visitors frequently charter yachts while visiting Australia. Club Nautical regularly hosts guests from overseas looking to experience Sydney Harbour or other iconic destinations by luxury yacht." },
  { cat: "Booking", q: "What information do you need to book a yacht charter?", a: "To book a yacht charter you typically need your preferred date, number of guests, event type and charter duration. Club Nautical will then recommend suitable yachts based on your requirements." },
  { cat: "Booking", q: "What is included in a luxury yacht charter booking?", a: "A typical yacht charter booking includes the vessel, professional crew and safety equipment. Club Nautical can also organise catering, beverages and entertainment depending on your event." },
  { cat: "Sydney", q: "Why is Sydney Harbour popular for yacht charters?", a: "Sydney Harbour is one of the world's most spectacular waterways, featuring landmarks like the Sydney Opera House and Harbour Bridge. A yacht charter with Club Nautical offers front row views of these iconic locations." },
  { cat: "Sydney", q: "Where do yacht charters depart from in Sydney?", a: "Sydney yacht charters commonly depart from locations such as Darling Harbour, Circular Quay and Rose Bay. Club Nautical coordinates convenient boarding points depending on your chosen vessel." },
  { cat: "Sydney", q: "What can you see on a Sydney Harbour yacht charter?", a: "Guests cruising Sydney Harbour often pass famous sights including the Sydney Opera House, Harbour Bridge and Fort Denison. A yacht charter provides a unique perspective of the city skyline from the water." },
  { cat: "Sydney", q: "How long is a typical Sydney yacht charter?", a: "Most Sydney Harbour yacht charters last between four and eight hours depending on the event. Club Nautical also offers extended charters and full day luxury cruises." },
  { cat: "Sydney", q: "Is New Year's Eve yacht charter in Sydney popular?", a: "New Year's Eve yacht charters on Sydney Harbour are among the most sought-after luxury experiences in Australia. Club Nautical offers premium vessels for viewing the world famous fireworks display from the water." },
];

const categories = ["All", "Pricing", "Occasions", "Experience", "Booking", "Sydney"];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === "All" ? allFaqs : allFaqs.filter((f) => f.cat === activeCategory);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.fromTo((sectionRef.current?.querySelector(".faq-text-col")) ?? null, { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* Animate FAQ items when category changes */
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!listRef.current) return;
    gsap.fromTo(
      Array.from(listRef.current.children),
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.4, ease: "power2.out" }
    );
  }, [filtered.length, activeCategory]);

  return (
    <section ref={sectionRef} id="faq" style={{ background: "#fbfaf6", padding: "104px 56px" }}>
      <div
        className="faq-grid-inner cn-split"
        style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "0.62fr 1fr", gap: 64, alignItems: "start" }}
      >
        {/* Sticky image */}
        <div ref={imgRef} className="img-zoom sticky-img" style={{ height: 560, borderRadius: 2, position: "sticky", top: 100 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://irp.cdn-website.com/b371e29e/dms3rep/multi/Copy-of-IMG_2456.webp"
            onError={(e) => { (e.target as HTMLImageElement).src = "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/Copy-of-IMG_2456-1920w.webp"; }}
            alt="Luxury yacht at dusk"
          />
        </div>

        {/* FAQ content */}
        <div className="faq-text-col">
          <div style={{ marginBottom: 38 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
              <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
              <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>Everything You Need to Know</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(34px,4vw,50px)", lineHeight: 1.05, color: "#003052", margin: 0, letterSpacing: "-0.01em" }}>
              Luxury yacht FAQs
            </h2>
          </div>

          {/* Category tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cat-btn${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ list */}
          <div ref={listRef}>
            {filtered.map((f, i) => (
              <details
                key={`${activeCategory}-${i}`}
                className="cn-acc"
                style={{ borderTop: "1px solid #e0dccf", borderBottom: i === filtered.length - 1 ? "1px solid #e0dccf" : "none" }}
              >
                <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "24px 0" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 21, color: "#003052", lineHeight: 1.35 }}>
                    {f.q}
                  </span>
                  <span className="cn-plus" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 24, color: "#308EC7", lineHeight: 1, flexShrink: 0 }}>+</span>
                </summary>
                <div className="cn-ans">
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14.5, lineHeight: 1.8, color: "#566571", margin: "0 0 24px", maxWidth: 840 }}>
                    {f.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
