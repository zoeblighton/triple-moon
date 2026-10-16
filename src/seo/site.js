// Shared by the app (src/Seo.js) and the build step (scripts/prerender-head.js).
const SITE_URL = "https://triplemoon.co.uk";
const SITE_NAME = "Triple Moon";
const HOME_TITLE = "Triple Moon | Spiritual Workshops & Wellness in Essex";

function fullTitle(title) {
  return title ? `${title} | ${SITE_NAME}` : HOME_TITLE;
}

module.exports = { SITE_URL, SITE_NAME, fullTitle };
