import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const location = useLocation();

  useLayoutEffect(() => {
    // ✅ Stop the browser restoring previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollEl = document.getElementById("scrollRoot");

    const scrollToTop = () => {
      if (scrollEl && typeof scrollEl.scrollTo === "function") {
        scrollEl.scrollTo(0, 0);
      }

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    if (location.hash) {
      const id = location.hash.slice(1);

      // ✅ Give Home a moment to mount before trying to find the section
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ block: "start" });
        else scrollToTop();
      });

      // ✅ Also beat any late scroll restoration
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ block: "start" });
      }, 50);

      return;
    }

    scrollToTop();

    // ✅ Beat late scroll restoration that can happen after navigation
    setTimeout(scrollToTop, 50);
  }, [location.pathname, location.hash, location.key]);

  return null;
}
