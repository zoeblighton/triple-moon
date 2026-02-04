import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
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
              <img
                src="/images/logo.png"
                alt="Triple Moon logo"
                className="logo"
              />
            </h1>
            <div tags="Spiritual Workshops Colchester" ClassName="brandTag">
              Spiritual Workshops & Life Coaching
            </div>
          </div>
        </div>

        <nav ref={navRef} className="nav" onClick={handleNavClick}>
          <a href="#offerings" data-label="Offerings">
            Offerings
          </a>
          <a href="#events" data-label="Events">
            Events
          </a>
          <a className="button" href="#contact" data-label="Book / Contact">
            Book / Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="heroGrid">
            <div className="heroMain">
              <h1>Come home to yourself</h1>
              <p>
                Celebrate the magic that enriches the beauty of life. Spiritual
                wellness, crystal & energy work, meditation, and grounded life
                coaching. For women who want clarity, calm, and aligned change.
              </p>

              <div className="heroActions">
                <a className="button" href="#contact">
                  Work with me
                </a>
                <a className="button buttonSecondary" href="#events">
                  See upcoming events
                </a>
              </div>
            </div>

            <div className="photoMarquee" aria-label="Gallery preview">
              <div className="photoTrack">
                {[
                  "/photos/1.jpg",
                  "/photos/2.jpg",
                  "/photos/3.jpg",
                  "/photos/4.jpg",
                  "/photos/5.jpg",
                  "/photos/6.jpg",
                ].map((src, i) => (
                  <div className="photoTile" key={"a-" + src + i}>
                    <img src={src} alt="" loading="lazy" />
                  </div>
                ))}

                {/* duplicate for loop */}
                {[
                  "/photos/1.jpg",
                  "/photos/2.jpg",
                  "/photos/3.jpg",
                  "/photos/4.jpg",
                  "/photos/5.jpg",
                  "/photos/6.jpg",
                ].map((src, i) => (
                  <div className="photoTile" key={"b-" + src + i}>
                    <img src={src} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>

          <div className="aboutGrid">
            <div className="aboutText">
              <p>
                Hi, I’m <strong>Lou</strong> — a spiritual wellness coach,
                meditation practitioner, and crystal & energy worker. I created
                Triple Moon as a space for women who are seeking clarity,
                connection, and a deeper relationship with themselves and the
                earth.
              </p>

              <p>
                My work blends grounded life coaching with spiritual practices
                such as meditation, ritual, and crystal energy. I believe true
                healing happens when the mind, body, and spirit are supported
                together, not separately.
              </p>

              <p>
                Triple Moon was born from a vision of community and sacred
                space: a place where women can gather, be seen, and grow into
                the most aligned version of themselves. Whether through 1:1
                coaching, group circles, or events, my intention is always the
                same: to help you feel empowered, supported, and at home in your
                own life.
              </p>
            </div>

            <div className="aboutCard aboutCard--vision">
              <div className="aboutCardHead">
                <div className="aboutOwner">
                  <img
                    src="/owner.jpg"
                    alt="Lou, Triple Moon"
                    className="aboutOwnerImg"
                    loading="lazy"
                  />
                </div>
                <h3>
                  I am dedicated to creating a gentle, grounded space for women
                  to return to themselves:
                </h3>
              </div>

              <ul className="aboutList">
                <li>To create safe spaces for healing and self-discovery</li>
                <li>To blend spiritual wisdom with practical life tools</li>
                <li>To help women reconnect with their inner power</li>
                <li>To build a community rooted in compassion and growth</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="offerings" className="section">
          <h2>Offerings</h2>
          <div className="grid">
            <article className="card">
              <h3>Sabbat Workshops</h3>
              <p>
                Group workshops aligned with the Wheel of the Year — ritual,
                intention, and seasonal wisdom.
              </p>
              <ul className="bullets">
                <li>Guided rituals for each Sabbat</li>
                <li>Practical tools to work with seasonal energy</li>
                <li>Symbolism, myth, and spellcraft traditions</li>
              </ul>
            </article>

            <article className="card">
              <h3>1:1 Life Coaching</h3>
              <p>
                Clarity, confidence, and action. Spiritual support and practical
                steps.
              </p>
              <ul className="bullets">
                <li>Goal setting + accountability</li>
                <li>Values & purpose alignment</li>
                <li>Gentle mindset work</li>
              </ul>
            </article>

            <article className="card">
              <h3>Energy & Crystal Support</h3>
              <p>
                Ritual, intention setting, and crystal wisdom for energetic
                clarity.
              </p>
              <ul className="bullets">
                <li>Energetic resets</li>
                <li>Crystal selection guidance</li>
                <li>Seasonal rituals</li>
              </ul>
            </article>
            <article className="card">
              <h3>The Enchanted Hen - Bridal Workshop</h3>
              <p>
                You bring the bubbles, i bring the magic. A sacred celebration
                of love using ritual, flowers, and shared intention.
              </p>
              <ul className="bullets">
                <li>Love rituals and intention setting for the bridal party</li>
                <li>Symbolic flower arranging or crown making</li>
                <li>Group blessing and sharing circle</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="events" className="section">
          <div className="sectionHeader">
            <h2>Upcoming events</h2>
            <p className="muted">
              Join me for upcoming workshops, limited spaces avaliable to ensure
              intimate classes. Register your interest below to be the first to
              know when new dates are released.
            </p>
          </div>

          <div className="grid">
            <article className="card">
              <div className="pill">Circle</div>
              <h3>Women’s New Moon Gathering</h3>
              <p className="muted">Date TBC • Brightlingsea</p>
              <p>
                Intentions, grounding meditation, and a simple ritual to reset
                for the month.
              </p>
            </article>

            <article className="card">
              <div className="pill">Crystal Workshop</div>
              <h3>Crystal Energy Foundations</h3>
              <p className="muted">Date TBC • Brightlingsea</p>
              <p>
                Learn how to choose, cleanse, and work with crystals in everyday
                life.
              </p>
            </article>

            <article className="card">
              <div className="pill">Ostara Workshop</div>
              <h3>Celebrate the Spring Equinox</h3>
              <p className="muted">Date TBC • Brightlingsea</p>
              <p>
                Join me for a gentle, creative workshop honouring Ostara — the
                festival of balance, rebirth, and new beginnings. We’ll explore
                seasonal symbolism, set intentions for the months ahead, and
                create a spring-inspired magical craft to take home.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Book / Contact</h2>
          <p className="muted">
            Add your booking link, email, or a form here. (We’ll wire this up in
            a later chunk.)
          </p>

          <div className="contactRow">
            <a className="button" href="mailto:hello@triplemoon.yourdomain">
              Email me
            </a>
            <a className="button buttonSecondary" href="#offerings">
              Explore offerings
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="muted">© {new Date().getFullYear()} Triple Moon</div>
        <div className="footerLinks">
          <a href="#offerings">Offerings</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
