import { useEffect } from "react";
import pages from "./seo/pages.json";
import { SITE_URL, fullTitle } from "./seo/site";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Page titles and descriptions live in seo/pages.json so the build step
// (scripts/prerender-head.js) can write them into each page's static HTML too.
export default function Seo({ path }) {
  useEffect(() => {
    const page = pages[path];
    const title = fullTitle(page.title);
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMeta("name", "description", page.description);
    setMeta("name", "robots", page.noindex ? "noindex" : "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", url);
    setCanonical(url);
  }, [path]);

  return null;
}
