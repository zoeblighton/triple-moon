import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ContactSection from "./Contact";

export default function Layout({ children, showContact = true }) {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  const isMobile = () => window.matchMedia("(max-width: 900px)").matches;

  useEffect(() => {
    if (navOpen) document.body.classList.add("navOpen");
    else document.body.classList.remove("navOpen");
  }, [navOpen]);

  useEffect(() => {
    function onDocClick(e) {
      if (!isMobile()) return;
      if (!navOpen) return;
      if (navRef.current && navRef.current.contains(e.target)) return;
      setNavOpen(false);
    }

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [navOpen]);

  useEffect(() => {
    function onResize() {
      if (!isMobile()) setNavOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function handleNavClick(e) {
    if (!isMobile()) return;

    const link = e.target.closest("a");
    if (!link) return;

    if (!navOpen) {
      e.preventDefault();
      setNavOpen(true);
      return;
    }

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

        {/* IMPORTANT:
            On other pages, these anchors should go back to home sections.
        */}
        <nav ref={navRef} className="nav" onClick={handleNavClick}>
          <Link to="/#offerings" data-label="Offerings">
            Offerings
          </Link>
          <Link to="/#events" data-label="Events">
            Events
          </Link>
          <Link className="button" to="/#contact" data-label="Book / Contact">
            Book / Contact
          </Link>
        </nav>
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
        <div className="muted">© {new Date().getFullYear()} Triple Moon</div>
        <div className="footerLinks">
          <Link to="/#offerings">Offerings</Link>
          <Link to="/#events">Events</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
