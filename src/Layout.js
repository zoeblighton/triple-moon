import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ContactSection from "./Contact";

export default function Layout({ children, showContact = true }) {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("navOpen", navOpen);
  }, [navOpen]);

  useEffect(() => {
    function onDocClick(e) {
      if (!navOpen) return;

      const navEl = navRef.current;
      const btnEl = btnRef.current;

      if (navEl && navEl.contains(e.target)) return;
      if (btnEl && btnEl.contains(e.target)) return;

      setNavOpen(false);
    }

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
    };
  }, [navOpen]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setNavOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function handleNavClick(e) {
    const link = e.target.closest("a");
    if (!link) return;
    setNavOpen(false);
  }

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div>
            <h1 className="logoWrap">
              <Link to="/" aria-label="Go to homepage">
                <img
                  src="/images/logo.png"
                  alt="Triple Moon logo"
                  className="logo"
                />
              </Link>
            </h1>

            <div
              data-tags="Spiritual Workshops Colchester"
              className="brandTag"
            >
              Spiritual Workshops & Life Coaching
            </div>
          </div>
        </div>

        <div className="navWrap">
          <button
            ref={btnRef}
            type="button"
            className="navToggle"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
          >
            <span className="navToggleBars" aria-hidden="true" />
          </button>

          <nav ref={navRef} className="nav" onClick={handleNavClick}>
            <Link to="/#offerings">Offerings</Link>
            <Link to="/gallerypage">Gallery</Link>
            <Link to="/resources">Resources</Link>
            <Link className="button" to="/#contact">
              Book / Contact
            </Link>
          </nav>
        </div>
      </header>
      <main id="scrollRoot">
        {children}

        {showContact && (
          <section id="contact" className="section">
            <h2>Book / Contact</h2>
            <p className="muted">
              <ContactSection />
            </p>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="muted">
          © {new Date().getFullYear()} Triple Moon coded by{" "}
          <a
            href="https://www.linkedin.com/in/zoe-blighton-a26087347"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zoe Blighton
          </a>{" "}
          hosted on Netlify{" "}
        </div>
        <div className="footerLinks">
          <Link to="/#offerings">Offerings</Link>
          <Link to="/#contact">Contact</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/gallerypage">Gallery</Link>
        </div>
      </footer>
    </div>
  );
}
