import { useEffect } from "react";

const EMBED_SRC = "https://www.instagram.com/embed.js";

export default function InstagramFeed() {
  useEffect(() => {
    // The embed script only needs loading once; on later visits just re-render the embeds.
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    if (document.querySelector(`script[src="${EMBED_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="instagramFeed">
      <div className="instaGrid">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DIHbDU2I4ee/"
          data-instgrm-version="14"
        ></blockquote>
      </div>
    </div>
  );
}
