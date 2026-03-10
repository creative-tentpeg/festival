"use client";

import { useLayoutEffect } from "react";

export function AOSRuntime() {
  useLayoutEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-aos]"),
    );
    if (!nodes.length) return;

    document.body.classList.add("aos-enabled");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    nodes.forEach((node, idx) => {
      node.classList.add("aos-init");
      if (!node.style.transitionDelay) {
        const delay = Number(node.dataset.aosDelay || 0);
        node.style.transitionDelay = `${delay || (idx % 6) * 70}ms`;
      }
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
