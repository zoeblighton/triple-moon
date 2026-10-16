// Runs after `react-scripts build`. Writes a static HTML file per page with that
// page's title, description, canonical and social tags already in the <head>, so
// crawlers and link previews that don't run JavaScript still see the right page.
// Netlify serves build/coaching.html at /coaching.
const fs = require("fs");
const path = require("path");
const pages = require("../src/seo/pages.json");
const { SITE_URL, fullTitle } = require("../src/seo/site");

const buildDir = path.join(__dirname, "..", "build");
const template = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function replaceOnce(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`prerender-head: ${pattern} not found`);
  return html.replace(pattern, replacement);
}

const business = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Triple Moon",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/promo.jpg`,
  description: pages["/"].description,
  email: "louise.schenk@btinternet.com",
  areaServed: [
    { "@type": "City", name: "Colchester" },
    { "@type": "AdministrativeArea", name: "Essex" },
  ],
  sameAs: [
    "https://www.instagram.com/triple.moon.healing/",
    "https://www.facebook.com/triplemoon.net",
  ],
  knowsAbout: [
    "Reiki Seichem",
    "Crystal healing",
    "Life coaching",
    "Wheel of the Year workshops",
  ],
};

for (const [route, page] of Object.entries(pages)) {
  if (page.noindex) continue;

  const title = escape(fullTitle(page.title));
  const description = escape(page.description);
  const url = `${SITE_URL}${route}`;

  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = replaceOnce(html, /(<meta name="description" content=")[^"]*/, `$1${description}`);
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*/, `$1${url}`);
  html = replaceOnce(html, /(<meta property="og:title" content=")[^"]*/, `$1${title}`);
  html = replaceOnce(html, /(<meta property="og:description" content=")[^"]*/, `$1${description}`);
  html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*/, `$1${url}`);

  if (route === "/") {
    const jsonLd = JSON.stringify(business).replace(/</g, "\\u003c");
    html = html.replace(
      "</head>",
      `<script type="application/ld+json">${jsonLd}</script></head>`,
    );
  }

  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  fs.writeFileSync(path.join(buildDir, file), html);
  console.log(`prerender-head: ${file}`);
}
