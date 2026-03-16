import { useRef } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import ContactSection from "./Contact";

function PhotoMarquee({ images }) {
  const marqueeRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = (e) => {
    const el = marqueeRef.current;
    if (!el) return;

    isDown.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
  };

  const onPointerMove = (e) => {
    const el = marqueeRef.current;
    if (!el || !isDown.current) return;

    const x = e.pageX - el.offsetLeft;
    const walk = x - startX.current;
    el.scrollLeft = scrollLeft.current - walk;
  };

  const endDrag = () => {
    isDown.current = false;
  };

  return (
    <div
      ref={marqueeRef}
      className="photoMarquee"
      aria-label="Gallery preview"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
    >
      <div className="photoTrack">
        {images.map((src, i) => (
          <div className="photoTile" key={"a-" + src + i}>
            <img src={src} alt="" loading="lazy" draggable="false" />
          </div>
        ))}
      </div>
    </div>
  );
}

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
              I am a crystal healer, reiki practitioner, life coach and follower
              of the "old ways", here at Triplemoon my mission is to bring some
              magic to the mundane. <br /> <br /> We live in interesting times
              and while the world moves with increasing speed I encourage you to
              buckle up, seek out your people and find your peace. <br /> <br />{" "}
              This site is a window into the world of the triplemoon tribe, for
              further information get in touch below.
            </p>

            <Link className="button" to="/#contact">
              Work with me
            </Link>
            <Link className="button buttonSecondary" to="/#events">
              See upcoming events
            </Link>
          </div>
          <PhotoMarquee
            images={[
              "/images/flowers.jpg",
              "/images/altar.jpg",
              "/images/promo.jpg",
              "/images/drums.jpg",
              "/images/altar2.jpg",
            ]}
          />
        </div>
      </section>

      <section id="offerings" className="section">
        <div className="sectionHeader">
          <h2>Offerings</h2>

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
              <h3>Cyclical Living Workshops</h3>
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

      <section id="upcoming" className="section">
        <div className="sectionHeader">
          <h2>Living Magically Workshops</h2>
          <p className="muted">
            If you want to host your own magical occasion, we will bring the
            magic to you. Minimum of 6 per group, contact for details.
          </p>
          <p>
            We can deliver all of the following packages to you and your tribe.
            An intimate learning opportunity for you and your people to connect
            in a magical way.
          </p>
          <p>Workshops can be tailored to your needs and the season.</p>
        </div>

        <div className="upcomingEvents">
          <article className="eventInfo">
            <h3>The Joy Of Crystals</h3>

            <p>
              If you love crystals, why not host a joy of crystals workshop for
              groups of 6 minimum, in the comfort of your home or chosen
              venue.{" "}
            </p>
            <h2>The workshop can include </h2>
            <ul className="bullets">
              <li>Discovering crystals and their properties.</li>
              <li>Learning about crystal chakra associations.</li>
              <li>Making a crystal healing dowser.</li>
              <li>Crystal meditation and energy work.</li>
            </ul>
            <Link className="button" to="/#contact">
              Enquire now
            </Link>
          </article>
          <br />

          <article className="eventInfo">
            <h3>Magical May - Belthane</h3>

            <p>
              Celebrate the blossoming energy of spring with our Belthane
              workshop. Host an afternoon of ritual, intention setting, and
              seasonal wisdom to connect with the vibrant energy of the season.
            </p>
            <ul className="bullets">
              <li>Guided ritual to connect with the energy of Belthane.</li>
              <li>
                Practical tools to work with the blossoming energy of spring.
              </li>
              <li>
                Symbolism, myth, and spellcraft traditions associated with
                Belthane.
              </li>
            </ul>
            <Link className="button" to="/#contact">
              Enquire now
            </Link>
          </article>
          <br />
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

            <PhotoMarquee
              images={[
                "/images/lou-groovy.jpg",
                "/images/lou-field.jpg",
                "/images/happy-lou.jpg",
                "/images/tree-hugger.jpg",
                "/images/pretty.jpg",
                "/images/roaming.jpg",
                "/images/workshop4.jpg",
                "/images/portrait.jpg",
              ]}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="sectionHeader">
          <h2>Book / Contact</h2>
        </div>

        <div className="contactGrid">
          <div className="contactFormCol">
            <ContactSection />
          </div>

          <aside
            className="card contactAside"
            aria-label="Reaching out reassurance"
          >
            <h3 className="contactAsideTitle">
              You Don’t Have To Have It All Figured Out
            </h3>

            <div className="contactAsideBody">
              <p>
                You don’t need to know exactly what you’re looking for before
                you reach out.
                <br />
                You don’t need to be “spiritual enough.”
                <br />
                You don’t need to be in crisis.
              </p>

              <p>
                Many of the women who come into this space simply feel they’re
                ready for more connection, more clarity, more support.
              </p>

              <p>If that’s you, you’re welcome here.</p>

              <p>
                Reaching out doesn’t commit you to anything.
                <br />
                It simply opens a conversation.
              </p>

              <p className="contactAsideClosing">
                And sometimes, that’s where everything begins.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
