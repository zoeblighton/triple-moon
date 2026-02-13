import { useRef } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import ContactSection from "./Contact";

export default function Home() {
  const offeringsRef = useRef(null);

  const scrollOfferings = (direction) => {
    const el = offeringsRef.current;
    if (!el) return;

    const card = el.querySelector(".offeringCard");
    const cardWidth = card ? card.getBoundingClientRect().width : 320;
    const gap = 16;
    const amount = (cardWidth + gap) * direction;

    el.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <Layout showContact={false}>
      <section className="hero">
        <div className="heroGrid">
          <div className="heroMain">
            <h1>Come home to yourself</h1>
            <p>
              Celebrate the magic that enriches the beauty of life. Spiritual
              wellness, crystal & energy work, meditation, and grounded life
              coaching. For women who want clarity, calm, and aligned change.
            </p>

            <Link className="button" to="/#contact">
              Work with me
            </Link>
            <Link className="button buttonSecondary" to="/#events">
              See upcoming events
            </Link>
          </div>

          <div className="photoMarquee" aria-label="Gallery preview">
            <div className="photoTrack">
              {[
                "/images/flowers.jpg",
                "/images/altar.jpg",
                "/images/promo.jpg",
                "/images/drums.jpg",
                "/images/altar2.jpg",
              ].map((src, i) => (
                <div className="photoTile" key={"a-" + src + i}>
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="offerings" className="section">
        <div className="sectionHeader">
          <h2>Offerings</h2>

          {/* On-page scroller */}
          <div
            className="scrollerControls"
            aria-label="Offerings scroller controls"
          >
            <button
              type="button"
              className="scrollBtn"
              onClick={() => scrollOfferings(-1)}
              aria-label="Scroll left"
            >
              ‹
            </button>
            <button
              type="button"
              className="scrollBtn"
              onClick={() => scrollOfferings(1)}
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
        </div>

        <div className="offeringsWrap">
          <div
            className="offeringsRow"
            ref={offeringsRef}
            tabIndex={0}
            aria-label="Offerings horizontal list"
          >
            <Link to="./SabbatWorkshops" className="card cardLink offeringCard">
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
            </Link>

            <Link to="./EnchantedHen" className="card cardLink offeringCard">
              <h3>The Enchanted Hen - Bridal Workshop</h3>
              <p>
                You bring the bubbles, i bring the magic. A sacred celebration
                of love.
              </p>
              <ul className="bullets">
                <li>Love rituals and intention setting for the bridal party</li>
                <li>Symbolic flower arranging or crown making</li>
                <li>Group blessing and sharing circle</li>
              </ul>
            </Link>

            <Link to="/coaching" className="card cardLink offeringCard">
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
            </Link>

            <Link
              to="./EnergyCrystalSupport"
              className="card cardLink offeringCard"
            >
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
            </Link>
          </div>
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
              Intentions, grounding meditation, and a simple ritual to reset for
              the month.
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
              Join me for the festival of balance, rebirth, and new beginnings.
              We’ll explore seasonal symbolism, set intentions for the months
              ahead, and get creative with a spring craft.
            </p>
          </article>
        </div>
      </section>
      <section id="about" className="section">
        <h2>Meet the magical Lou</h2>

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
              Triple Moon was born from a vision of community and sacred space:
              a place where women can gather, be seen, and grow into the most
              aligned version of themselves. Whether through 1:1 coaching, group
              circles, or events, my intention is always the same: to help you
              feel empowered, supported, and at home in your own life.
            </p>

            <div className="photoMarquee" aria-label="Gallery preview">
              <div className="photoTrack">
                {[
                  "/images/lou-groovy.jpg",
                  "/images/lou-field.jpg",
                  "/images/happy-lou.jpg",
                  "/images/tree-hugger.jpg",
                  "/images/pretty.jpg",
                  "/images/roaming.jpg",
                  "/images/workshop4.jpg",
                  "/images/portrait.jpg",
                ].map((src, i) => (
                  <div className="photoTile" key={"a-" + src + i}>
                    <img src={src} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="aboutCard aboutCard--vision">
            <div className="aboutCardHead">
              <div className="aboutOwner">
                <img
                  src="/images/portrait.jpg"
                  alt="Lou, Triple Moon"
                  className="aboutOwnerImg"
                  loading="lazy"
                />
              </div>
              <h3>
                I am dedicated to creating a gentle, grounded space for women to
                return to themselves:
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

      <section id="contact" className="section">
        <h2>Book / Contact</h2>
        <p className="muted">
          <ContactSection />
        </p>
      </section>
    </Layout>
  );
}
