"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const allFaqs = [
  { cat: "General", q: "Where is Club Nautical based in Australia?", a: "Club Nautical is based on the Gold Coast in Queensland and provides tailored yacht charter experiences across Australia and beyond. For locals planning a luxury day on the water, that means you can book through one central team while exploring destinations like Sydney Harbour, Brisbane, the Whitsundays and the South Pacific." },
  { cat: "General", q: "Is Club Nautical a local Australian yacht charter business?", a: "Yes, Club Nautical is an Australian yacht charter business with a Gold Coast base and a strong focus on premium local experiences." },
  { cat: "General", q: "What areas does Club Nautical service?", a: "Club Nautical offers yacht charter services on the Gold Coast, in Brisbane, Sydney and the Whitsundays, with additional options extending into the South Pacific. That gives Australians a broad range of local and destination-based luxury boating experiences through the one business." },
  { cat: "General", q: "Can I use Club Nautical if I live in Sydney but want help from a national charter team?", a: "Yes, Club Nautical works with clients across Australia, so Sydney residents can still arrange a private yacht charter through their team. It's ideal if you want a tailored charter experience with vessel options, crew and event planning handled for you." },
  { cat: "General", q: "Is Club Nautical only for the Gold Coast, or do they cover more of Australia?", a: "They cover much more than the Gold Coast. Club Nautical arranges yacht charters in major cruising locations including Sydney, Brisbane and the Whitsundays, so it suits both locals and interstate travellers looking for luxury boat hire in Australia." },
  { cat: "General", q: "What does Club Nautical actually do?", a: "Club Nautical specialises in luxury yacht charter, private yacht hire and bespoke boating experiences across Australia. They help organise the vessel, crew, itinerary and optional extras so your event or cruise feels polished from the outset." },

  { cat: "Services & Events", q: "What types of yacht charter experiences can I book with Club Nautical?", a: "You can book private yacht charters for birthdays, corporate events, weddings, luxury day cruises, overnight escapes and longer charter experiences. Club Nautical also offers tailored itineraries, making it easier to match the boat and destination to your occasion." },
  { cat: "Services & Events", q: "Does Club Nautical offer private yacht hire for special events?", a: "Yes, private yacht hire for special events is a core part of what Club Nautical offers. Whether it's a birthday on the Gold Coast, a corporate function in Brisbane or a Sydney Harbour celebration, they can match you with a suitable luxury vessel." },
  { cat: "Services & Events", q: "Can Club Nautical organise corporate yacht charters in Australia?", a: "Yes, Club Nautical offers corporate yacht charter options for client entertainment, staff events, networking functions and milestone celebrations. It's a smart choice for businesses wanting a premium, memorable venue that feels more impressive than the usual boardroom or restaurant." },
  { cat: "Services & Events", q: "Can I book Club Nautical for a wedding or engagement party?", a: "Yes, Club Nautical offers luxury yacht options suited to weddings, engagement parties and other major celebrations. A private charter gives you a unique waterfront setting, flexible catering and a far more exclusive feel than many land-based venues." },
  { cat: "Services & Events", q: "Can Club Nautical help plan the itinerary as well as the boat hire?", a: "Yes, Club Nautical promotes tailored and customisable itineraries as part of its yacht charter service. That's helpful if you want more than just a boat and need guidance on timing, cruising routes, catering and the overall guest experience." },
  { cat: "Services & Events", q: "Do Club Nautical charters come with a captain and crew?", a: "Yes, Club Nautical charters are fully staffed with a captain and crew on applicable vessels, so you can relax and enjoy the experience. That's especially appealing if you want luxury yacht hire without any of the hassle of operating the boat yourself." },
  { cat: "Services & Events", q: "Can Club Nautical organise catering for a yacht charter?", a: "Yes, Club Nautical offers personalised catering options for many charters. That means you can turn a simple cruise into a polished event with food and drinks sorted to suit your group, budget and style." },
  { cat: "Services & Events", q: "Can I organise entertainment through Club Nautical?", a: "Yes, Club Nautical highlights entertainment options as part of its bespoke yacht event offering. This is useful for birthdays, hens parties, corporate functions and luxury celebrations where the onboard atmosphere matters just as much as the boat itself." },
  { cat: "Services & Events", q: "Can Club Nautical help with a full event on the water, not just a cruise?", a: "Yes, Club Nautical offers bespoke yacht events, which means they can support much more than a basic harbour cruise. If you're organising a celebration, networking event or milestone function, that extra event focus can make a big difference." },

  { cat: "Pricing", q: "Does Club Nautical have yacht options for different budgets?", a: "Yes, Club Nautical offers vessels across a range of price points, from smaller group charters through to premium superyacht-style experiences. That makes it easier to find something that suits a private celebration, a corporate event or a more lavish luxury charter." },
  { cat: "Pricing", q: "What affects the cost of a Club Nautical yacht charter?", a: "The main cost factors are the size of the yacht, guest numbers, charter duration, destination, catering, staffing and any event-specific add-ons. Peak dates, popular weekends and premium boats can also push the price up, so it's worth requesting a tailored quote." },
  { cat: "Pricing", q: "Does Club Nautical give tailored quotes?", a: "Yes, Club Nautical's process is built around discussing your plans and then presenting customisable charter options. That's useful because yacht charter pricing is rarely one-size-fits-all, especially for events with catering, entertainment or multiple stops." },
  { cat: "Pricing", q: "Are there extra costs on top of the hourly yacht hire rate?", a: "Potential extras can include catering, beverages, additional crew surcharges, loading fees, fuel-related costs or premium event requests, depending on the vessel. Club Nautical provides tailored options, so the best way to get clarity is to confirm inclusions for your chosen boat and date." },

  { cat: "Destinations", q: "Can I book Club Nautical for Sydney Harbour yacht charter?", a: "Yes, Club Nautical offers Sydney yacht charter options, making it suitable for locals wanting to cruise past the Opera House, Harbour Bridge and other iconic waterfront spots. It's a strong fit for private events, business entertaining and luxury celebrations on Sydney Harbour." },
  { cat: "Destinations", q: "Is Club Nautical a good option for Gold Coast yacht hire?", a: "Yes, Club Nautical is based on the Gold Coast and offers local yacht hire for everything from intimate private cruises to larger event charters. For Gold Coast locals, that means easy access to a nearby charter team and vessels suited to local waterways." },
  { cat: "Destinations", q: "Can Club Nautical organise Brisbane yacht charters?", a: "Yes, Club Nautical offers Brisbane yacht charter options, which can suit river cruising, private parties and corporate events. It's a practical choice for Brisbane locals who want a luxury boat experience without heading interstate." },
  { cat: "Destinations", q: "Does Club Nautical charter yachts in the Whitsundays?", a: "Yes, Club Nautical offers yacht charter options in the Whitsundays, which is ideal for Australians chasing a tropical luxury escape. It's especially appealing for longer cruising itineraries, island-hopping and high-end holiday experiences." },
  { cat: "Destinations", q: "Can Club Nautical help with a South Pacific yacht charter?", a: "Yes, Club Nautical extends beyond Australia with South Pacific yacht charter options. That gives Australian travellers a way to organise a more adventurous, destination-driven luxury charter while still dealing with an Australian business." },

  { cat: "Booking", q: "What is the Club Nautical booking experience like?", a: "Club Nautical promotes a simple and easy booking process where you speak with a charter expert, share your plans and receive tailored options. For busy Australians, that makes yacht hire feel far less daunting and much more straightforward." },
  { cat: "Booking", q: "How do I contact Club Nautical to book a charter?", a: "You can contact Club Nautical by phone on 0493 508 625 or through the online enquiry form on their website. That makes it easy for Australian residents and business owners to get a quote, compare boat options and start planning quickly." },
  { cat: "Booking", q: "What are Club Nautical's trading hours?", a: "Club Nautical lists trading hours from 9:00 am to 5:00 pm, seven days a week." },
  { cat: "Booking", q: "Can Club Nautical help me choose the right yacht for my group?", a: "Yes, Club Nautical's team asks about your plans, guest numbers and budget before suggesting suitable charter options. That's especially useful if you're not sure whether you need a smaller private motor yacht or a larger event-ready vessel." },
  { cat: "Booking", q: "Can Club Nautical work with both private clients and businesses?", a: "Yes, Club Nautical caters to both personal celebrations and business events. That flexibility makes it useful whether you're planning a family milestone, a corporate function, a client lunch or a larger hospitality event on the water." },

  { cat: "Fleet & Groups", q: "Does Club Nautical have boats for small private groups?", a: "Yes, Club Nautical has smaller charter options for intimate groups as well as larger event vessels. For example, some boats on the website suit smaller gatherings, making them a practical choice for private celebrations, couples or boutique corporate experiences." },
  { cat: "Fleet & Groups", q: "Does Club Nautical have yachts for larger events?", a: "Yes, Club Nautical offers larger-capacity boats suitable for major celebrations, business events and luxury parties. Some vessels listed on the site hold dozens of guests, so there are options if you need scale as well as style." },
  { cat: "Fleet & Groups", q: "Can I find a yacht with indoor and outdoor entertaining areas through Club Nautical?", a: "Yes, several Club Nautical vessels highlight multiple entertainment zones, including indoor and outdoor spaces. That matters for Australian conditions because it gives guests flexibility in the sun, shade and evening weather." },
];

const categories = ["All", "General", "Services & Events", "Pricing", "Destinations", "Booking", "Fleet & Groups"];

export default function AboutFaqListSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === "All" ? allFaqs : allFaqs.filter((f) => f.cat === activeCategory);

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

  useEffect(() => {
    if (!listRef.current) return;
    gsap.fromTo(
      Array.from(listRef.current.children),
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, stagger: 0.04, duration: 0.4, ease: "power2.out" }
    );
  }, [filtered.length, activeCategory]);

  return (
    <section ref={sectionRef} style={{ background: "#fbfaf6", padding: "150px 56px 104px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, justifyContent: "center" }}>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
            <span style={{ fontFamily: "'Tenor Sans',sans-serif", letterSpacing: "0.32em", textTransform: "uppercase", fontSize: 12, color: "#308EC7" }}>
              FAQs About Club Nautical
            </span>
            <span style={{ width: 40, height: 1, background: "#308EC7", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.1, color: "#003052", margin: 0, letterSpacing: "-0.01em" }}>
            Browse by topic
          </h2>
        </div>

        {/* Category pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 48 }}>
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
              <summary style={{ display: "flex", alignItems: "center", gap: 20, padding: "26px 0" }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, color: "#308EC7", flexShrink: 0, width: 30 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 21, color: "#003052", lineHeight: 1.35, flex: 1 }}>
                  {f.q}
                </span>
                <span className="cn-plus" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 24, color: "#308EC7", lineHeight: 1, flexShrink: 0 }}>+</span>
              </summary>
              <div className="cn-ans">
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 300, fontSize: 14.5, lineHeight: 1.8, color: "#566571", margin: "0 0 24px 50px", maxWidth: 760 }}>
                  {f.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
