import { useEffect, useLayoutEffect } from 'react';
import { PAGE_CSS } from '../legacy/pageStyles.js';

/**
 * Mounts one original page component with the same environment its HTML file provided:
 * window.NK_PAGE (drives the active nav item), the page's own <style> block and <title>.
 */
export default function PageMount({ page }) {
  // Set synchronously so the Header reads the correct value during this render.
  if (page.key) window.NK_PAGE = page.key;
  else delete window.NK_PAGE;

  useLayoutEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
    return () => {
      // Kill any scroll-driven animations the outgoing page left behind (pins, scrubs).
      if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    document.title = page.title;
    const t = setTimeout(() => window.ScrollTrigger && window.ScrollTrigger.refresh(), 400);
    return () => clearTimeout(t);
  }, [page.title]);

  const Component = window[page.component];
  return (
    <>
      <style>{PAGE_CSS[page.key || 'index']}</style>
      {Component ? <Component /> : null}
    </>
  );
}
