"use client";

import { useState } from "react";

type Boat = {
  name: string;
  price: string;
  guests: number;
  img: string;
  slug: string;
};

const boats: Boat[] = [
  { name: "YOT Viva", price: "From $1,450 / hr", guests: 80, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/YOT-Viva.-Photo-7-1920w.jpg", slug: "yot-viva" },
  { name: "YOT Capri", price: "From $1,375 / hr", guests: 75, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/Copy-of-yot_capri-5-1920w.jpg", slug: "yot-capri" },
  { name: "YOT 75", price: "From $1,250 / hr", guests: 68, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/YOT-75-2-1920w.jpg", slug: "yot-75" },
  { name: "YOT Vice", price: "From $1,375 / hr", guests: 76, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/YV-1920w.jpeg", slug: "yot-vice" },
  { name: "YOT Blue", price: "From $1,250 / hr", guests: 58, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/YB1-1920w.jpeg", slug: "yot-blue" },
  { name: "YOT Club", price: "From $3,750 / hr", guests: 400, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/58375-YOT-Club-78d45a19-1920w.jpg", slug: "yot-club" },
  { name: "Sun Goddess", price: "From $1,450 / hr", guests: 135, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/Sun-Goddess-1-%285%29-1920w.jpg", slug: "sun-goddess" },
  { name: "Mermaid Spirit", price: "From $1,450 / hr", guests: 150, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/MERMAID+SPIRIT01-1920w.jpeg", slug: "mermaid-spirit" },
  { name: "Sunset", price: "From $2,200 / hr", guests: 33, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/Sunset-Hero-Profile-Shot-1920w.jpg", slug: "sunset" },
  { name: "AKI", price: "From $1,190 / hr", guests: 45, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/AKI1-1920w.jpeg", slug: "aki" },
  { name: "AVA", price: "From $1,460 / hr", guests: 45, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/AVA-1-d1af9fd5-1920w.jpeg", slug: "ava" },
  { name: "Empress", price: "From $1,300 / hr", guests: 36, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/empress01+%281%29-1920w.jpg", slug: "empress" },
  { name: "Salt", price: "From $1,300 / hr", guests: 49, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/SALT-%282%29-1920w.jpg", slug: "salt" },
  { name: "State of the Art", price: "From $850 / hr", guests: 40, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/STATE9-1920w.jpeg", slug: "state-of-the-art" },
  { name: "Impulsive", price: "From $16,000 / 4 hrs", guests: 80, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/IMPULSIVE1-1920w.jpeg", slug: "impulsive" },
  { name: "Alfie II", price: "From $1,375 / hr", guests: 10, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/Alfie-II-4-1920w.jpeg", slug: "alfie-ii" },
  { name: "G5", price: "From $1,250 / hr", guests: 10, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/g51-1920w.jpeg", slug: "g5" },
  { name: "Azzurro", price: "From $1,500 / hr", guests: 10, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/AZZURRO1-1920w.jpg", slug: "azzurro" },
  { name: "Aussie Princess", price: "From $750 / hr", guests: 24, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/imgi_37_1d4421_4d6b153c0c514eec9e1d61e95cbb1b17-mv2-1920w.jpg", slug: "aussie-princess" },
  { name: "Belle", price: "From $3,000 / hr", guests: 36, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/imgi_56_BELLE-sydney-2024-1920w.jpg", slug: "belle" },
  { name: "Bluestone", price: "From $3,000 / hr", guests: 100, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/bluestone1-1920w.jpeg", slug: "bluestone" },
  { name: "Bella Lacqua", price: "From $1,250 / hr", guests: 36, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/bella+lacqua01-1920w.jpeg", slug: "bella-lacqua" },
  { name: "MY Privacy", price: "From $1,650 / hr", guests: 35, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/MV+PRIVACY1-1920w.jpg", slug: "my-privacy" },
  { name: "MY AQA", price: "From $1,950 / hr", guests: 90, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/AQA-2-1920w.jpg", slug: "my-aqa" },
  { name: "MY Seven Star", price: "From $2,000 / hr", guests: 80, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/Seven-Star-2-1920w.jpg", slug: "my-seven-star" },
  { name: "MY Shadow", price: "From $2,500 / hr", guests: 90, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/SHAD1-1920w.png", slug: "my-shadow" },
  { name: "MY Corroboree", price: "From $2,800 / hr", guests: 110, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/corroboree1-1920w.jpg", slug: "my-corroboree" },
  { name: "MY Masteka 2", price: "From $3,250 / hr", guests: 80, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/masteka21-1920w.jpg", slug: "my-masteka-2" },
  { name: "Legacy", price: "From $3,000 / hr", guests: 105, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/legacy1-1920w.jpg", slug: "legacy" },
  { name: "Mischief", price: "From $5,500 / hr", guests: 180, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/MISCHIEF01-1920w.jpeg", slug: "mischief" },
  { name: "Rascal", price: "From $3,500 / hr", guests: 60, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/RAS1-1920w.jpeg", slug: "rascal" },
  { name: "Chaos", price: "From $2,300 / hr", guests: 48, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/chaos01-1920w.jpg", slug: "chaos" },
  { name: "Rhemtide", price: "From $1,350 / hr", guests: 45, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/IMG_3793-1920w.jpeg", slug: "rhemtide" },
  { name: "Little Perle", price: "From $2,000 / hr", guests: 36, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/2-1920w.jpg", slug: "little-perle" },
  { name: "Antares", price: "From $1,000 / hr", guests: 24, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/ANT3-1920w.jpeg", slug: "antares" },
  { name: "Crystal Blue Express", price: "From $595 / hr", guests: 18, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/CRYSTALBLUEEXPRESS5-1920w.jpeg", slug: "crystal-blue-express" },
  { name: "Element", price: "From $1,250 / hr", guests: 35, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/element11-1920w.jpg", slug: "element" },
  { name: "Emerald Lady", price: "From $11,000 / night", guests: 10, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/EMERALD+LADY101-1920w.jpeg", slug: "emerald-lady" },
  { name: "Ginger", price: "From $1,500 / hr", guests: 20, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/ginger01-1920w.jpg", slug: "ginger" },
  { name: "Entourage", price: "From $500 / hr", guests: 36, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/entourage1-1920w.jpg", slug: "entourage" },
  { name: "Lumir", price: "From $3,600 / hr", guests: 55, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/lumir01-1920w.jpg", slug: "lumir" },
  { name: "YOLO", price: "From $500 / hr", guests: 36, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/YOLO-4-1920w.jpg", slug: "yolo" },
  { name: "Bacchus", price: "From $750 / hr", guests: 47, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/bbacchus-1-1920w.jpeg", slug: "bacchus" },
  { name: "Lady Pamela", price: "From $1,850 / hr", guests: 34, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/lady-pamela01-1920w.jpeg", slug: "lady-pamela" },
  { name: "Shore Thing", price: "From $2,200 / hr", guests: 70, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/Shore-Thing-15-1920w.jpg", slug: "shore-thing" },
  { name: "Nisi", price: "From $2,315 / hr", guests: 20, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/imgi_2_NISI-1920w.jpg", slug: "nisi" },
  { name: "La Mar", price: "From $1,500 / hr", guests: 12, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/la+mar01-1920w.jpeg", slug: "la-mar" },
  { name: "Ghost I", price: "From $1,550 / hr", guests: 36, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/ghost-i1-f3e9700a-1920w.jpeg", slug: "ghost-i" },
  { name: "Ghost II", price: "From $3,000 / hr", guests: 110, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/ghost-ii01-1920w.jpeg", slug: "ghost-ii" },
  { name: "Impulse", price: "From $1,000 / hr", guests: 12, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/Impulse1-1920w.jpg", slug: "impulse" },
  { name: "Inspiration", price: "From $650 / hr", guests: 25, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/inspiration1-1920w.jpeg", slug: "inspiration" },
  { name: "Island Princess", price: "From $1,265 / hr", guests: 70, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/island+princess01-1920w.jpeg", slug: "island-princess" },
  { name: "Isola", price: "From $900 / hr", guests: 12, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/ISOLA01-1920w.jpeg", slug: "isola" },
  { name: "Kokomo", price: "From $550 / hr", guests: 40, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/kokomo1-1920w.png", slug: "kokomo" },
  { name: "Lance", price: "From $220,000 / week", guests: 10, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/lance01-1920w.png", slug: "lance" },
  { name: "Oscar II", price: "From $2,500 / hr", guests: 60, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/OS1-1920w.png", slug: "oscar-ii" },
  { name: "Phoenix One", price: "From $2,300 / hr", guests: 46, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/PHO1-1920w.jpeg", slug: "phoenix-one" },
  { name: "Pleiades II", price: "From $19,500 / night", guests: 10, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/PLE2-1920w.webp", slug: "pleiades-ii" },
  { name: "Sea Raes", price: "From $2,000 / hr", guests: 30, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/SEA1-1920w.jpeg", slug: "sea-raes" },
  { name: "M.Y. Beluga", price: "From $175,000 / week", guests: 12, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/my-beluga01-1920w.jpeg", slug: "my-beluga" },
  { name: "M.Y. Flying Fish", price: "From $19,800 / day", guests: 20, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/M.Y+FLYING+FISH01-1920w.jpg", slug: "my-flying-fish" },
  { name: "MV Alfie", price: "From $750 / hr", guests: 12, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/imgi_4_mva7-1920w.jpg", slug: "mv-alfie" },
  { name: "Rosie Boat", price: "From $535 / hr", guests: 30, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/Rosie-3-1920w.jpeg", slug: "rosie-boat" },
  { name: "Segara", price: "From $15,000 / 6 hrs", guests: 36, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/DJI_0256-1920w.jpg", slug: "segara" },
  { name: "Sovereign Lady", price: "From $1,540 / hr", guests: 28, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/SL1-1920w.jpeg", slug: "sovereign-lady" },
  { name: "Topaz", price: "From $1,000 / hr", guests: 10, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/TO1-1920w.jpeg", slug: "topaz" },
  { name: "Shoki", price: "From $550 / hr", guests: 12, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/SHO1-1920w.jpeg", slug: "shoki" },
  { name: "Onsite", price: "From $900 / hr", guests: 25, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/ON1-1920w.jpeg", slug: "onsite" },
  { name: "MV Baroness", price: "From $1,820 / hr", guests: 135, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/mv+baroness01-1920w.jpeg", slug: "mv-baroness" },
  { name: "Wanderlust", price: "From $600 / hr", guests: 35, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/WON7-1920w.jpeg", slug: "wanderlust" },
  { name: "Bote", price: "From $1,500 / hr", guests: 60, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/bote1-1920w.jpeg", slug: "bote" },
  { name: "Nevaeh", price: "From $525 / hr", guests: 30, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/nevaeh1-1920w.jpeg", slug: "nevaeh" },
  { name: "Serrano", price: "From $425 / hr", guests: 20, img: "https://lirp.cdn-website.com/b371e29e/dms3rep/multi/opt/Serrano-94cb4e87-1920w.jpg", slug: "serrano" },
];

const CAPACITY_FILTERS = [
  { label: "All", min: 0, max: Infinity },
  { label: "Up to 20", min: 0, max: 20 },
  { label: "21 – 50", min: 21, max: 50 },
  { label: "51 – 100", min: 51, max: 100 },
  { label: "100+", min: 101, max: Infinity },
];

export default function FleetGrid() {
  const [filter, setFilter] = useState(0);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const { min, max } = CAPACITY_FILTERS[filter];
  const visible = boats.filter((b) => b.guests >= min && b.guests <= max);

  return (
    <section style={{ background: "#f8f7f4", padding: "72px 56px 96px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Filter bar */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 52,
          }}
        >
          <span
            style={{
              fontFamily: "'Tenor Sans', sans-serif",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontSize: 11,
              color: "#003052",
              alignSelf: "center",
              marginRight: 12,
            }}
          >
            Capacity
          </span>
          {CAPACITY_FILTERS.map((f, i) => (
            <button
              key={f.label}
              onClick={() => setFilter(i)}
              style={{
                fontFamily: "'Tenor Sans', sans-serif",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontSize: 11,
                padding: "8px 20px",
                border: "1px solid",
                borderColor: filter === i ? "#003052" : "rgba(0,48,82,0.25)",
                background: filter === i ? "#003052" : "transparent",
                color: filter === i ? "#fff" : "#003052",
                cursor: "pointer",
                transition: "all 0.2s ease",
                borderRadius: 2,
              }}
            >
              {f.label}
            </button>
          ))}
          <span
            style={{
              marginLeft: "auto",
              alignSelf: "center",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              fontSize: 12,
              color: "rgba(0,48,82,0.5)",
            }}
          >
            {visible.length} vessel{visible.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2px",
          }}
        >
          {visible.map((boat) => (
            <a
              key={boat.slug}
              href={`/our-fleet/boats/${boat.slug}`}
              onMouseEnter={() => setHoveredSlug(boat.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              style={{
                position: "relative",
                display: "block",
                aspectRatio: "4 / 3",
                overflow: "hidden",
                textDecoration: "none",
                background: "#001e32",
              }}
            >
              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={boat.img}
                alt={boat.name}
                loading="lazy"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease, opacity 0.3s ease",
                  transform: hoveredSlug === boat.slug ? "scale(1.06)" : "scale(1)",
                  opacity: hoveredSlug === boat.slug ? 0.82 : 1,
                }}
              />

              {/* Permanent gradient vignette */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,20,36,0.88) 0%, rgba(0,20,36,0.1) 55%, transparent 100%)",
                }}
              />

              {/* Caption */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 500,
                        fontSize: 22,
                        color: "#fff",
                        margin: "0 0 4px",
                        lineHeight: 1.1,
                        letterSpacing: "0.01em",
                      }}
                    >
                      {boat.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Tenor Sans', sans-serif",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        fontSize: 10,
                        color: "rgba(216,210,171,0.9)",
                        margin: 0,
                      }}
                    >
                      {boat.price}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(216,210,171,0.8)"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 300,
                        fontSize: 11,
                        color: "rgba(216,210,171,0.8)",
                      }}
                    >
                      {boat.guests}
                    </span>
                  </div>
                </div>

                {/* Hover: enquire link */}
                <div
                  style={{
                    marginTop: 10,
                    height: hoveredSlug === boat.slug ? 28 : 0,
                    overflow: "hidden",
                    transition: "height 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Tenor Sans', sans-serif",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontSize: 10,
                      color: "#D8D2AB",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    View vessel &nbsp;&rarr;
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 72 }}>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              fontSize: 15,
              color: "rgba(0,48,82,0.65)",
              marginBottom: 24,
            }}
          >
            Can&apos;t find what you&apos;re looking for? We have access to additional vessels.
          </p>
          <a href="/contact" className="btn-fill" style={{ padding: "16px 40px" }}>
            Speak to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
