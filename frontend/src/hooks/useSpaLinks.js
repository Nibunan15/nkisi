import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../config/routes.js';

/**
 * The design uses plain <a href="about.html"> links. This intercepts same-origin clicks to known
 * routes and hands them to React Router, so navigation is client-side without touching the markup.
 * Clicks already handled by a component (preventDefault), modified clicks, new-tab and external
 * links, and same-page #hash jumps are left to the browser.
 */
export function useSpaLinks() {
  const navigate = useNavigate();
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target instanceof Element ? e.target.closest('a[href]') : null;
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
      const url = new URL(a.getAttribute('href'), window.location.href);
      if (url.origin !== window.location.origin || !ROUTE_PATHS.has(url.pathname)) return;
      if (url.pathname === window.location.pathname && url.hash) return;
      e.preventDefault();
      navigate(url.pathname + url.search + url.hash);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);
}
