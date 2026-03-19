import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="instagramFeed">
      <div className="instaGrid">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DIHbDU2I4ee/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          data-instgrm-version="14"
        ></blockquote>
      </div>
    </div>
  );
}
