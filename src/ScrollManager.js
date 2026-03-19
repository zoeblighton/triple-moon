import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const location = useLocation();

  useLayoutEffect(() => {
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

      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ block: "start" });
        else scrollToTop();
      });

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ block: "start" });
      }, 50);

      return;
    }

    scrollToTop();

    setTimeout(scrollToTop, 50);
  }, [location.pathname, location.hash, location.key]);

  return null;
}
