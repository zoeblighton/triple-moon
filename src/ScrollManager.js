import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const location = useLocation();

  useLayoutEffect(() => {
    const scrollEl = document.getElementById("scrollRoot");

    const scrollToTop = () => {
      // try container first
      if (scrollEl && typeof scrollEl.scrollTo === "function") {
        scrollEl.scrollTo(0, 0);
      }
      // also reset window (covers both setups)
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ block: "start" });
        else scrollToTop();
      });
      return;
    }

    scrollToTop();
  }, [location.pathname, location.hash, location.key]);

  return null;
}
