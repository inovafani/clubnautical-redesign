"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* Generic fade-up reveals */
      gsap.utils.toArray<HTMLElement>(".rv", sectionRef.current ?? undefined).forEach((el, i) => {
        const delay = parseFloat(el.dataset.delay ?? "0");
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      /* Slide from left */
      gsap.utils.toArray<HTMLElement>(".rv-left", sectionRef.current ?? undefined).forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      /* Slide from right */
      gsap.utils.toArray<HTMLElement>(".rv-right", sectionRef.current ?? undefined).forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      /* Scale reveal */
      gsap.utils.toArray<HTMLElement>(".rv-scale", sectionRef.current ?? undefined).forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.93 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      /* Stagger children */
      gsap.utils.toArray<HTMLElement>(".rv-stagger", sectionRef.current ?? undefined).forEach((parent) => {
        const children = Array.from(parent.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: parent, start: "top 85%", once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
}
