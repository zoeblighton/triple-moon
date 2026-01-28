import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="brandMark" aria-hidden="true">
            ☾
          </div>
          <div>
            <div className="brandName">Triple Moon</div>
            <div className="brandTag">Spiritual Wellness & Life Coaching</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#offerings">Offerings</a>
          <a href="#events">Events</a>
          <a href="#contact" className="button">
            Book / Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Come home to yourself</h1>
          <p>
            Celebrate the magic that enriches the beauty of life. Spiritual
            wellness, crystal & energy work, meditation, and grounded life
            coaching — for women who want clarity, calm, and aligned change.
          </p>

          <div className="heroActions">
            <a className="button" href="#contact">
              Work with me
            </a>
            <a className="button buttonSecondary" href="#events">
              See upcoming events
            </a>
          </div>

          <div className="heroCard">
            <div className="heroCardTitle">What you’ll find here</div>
            <ul className="heroList">
              <li>1:1 Life Coaching (mindset + direction)</li>

              <li>
                Reiki, crystal & energy support (ritual, intention, grounding)
              </li>
              <li>Women’s circles + seasonal gatherings</li>
            </ul>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>

          <div className="aboutGrid">
            <div className="aboutText">
              <p>
                Hi, I’m <strong>[Lou]</strong> — a spiritual wellness coach,
                meditation practitioner, and crystal & energy worker. I created
                Triple Moon as a space for women who are seeking clarity,
                connection, and a deeper relationship with themselves and the
                earth.
              </p>

              <p>
                My work blends grounded life coaching with spiritual practices
                such as meditation, ritual, and crystal energy. I believe true
                healing happens when the mind, body, and spirit are supported
                together — not separately.
              </p>

              <p>
                Triple Moon was born from a vision of community and sacred
                space: a place where women can gather, be seen, and grow into
                the most aligned version of themselves. Whether through 1:1
                coaching, group circles, or events, my intention is always the
                same — to help you feel empowered, supported, and at home in
                your own life.
              </p>
            </div>

            <div className="aboutCard">
              <h3>My Vision</h3>
              <ul className="bullets">
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
            {" "}
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
                Clarity, confidence, and action — with spiritual support and
                practical steps.
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
          </div>
        </section>

        <section id="events" className="section">
          <div className="sectionHeader">
            <h2>Upcoming events</h2>
            <p className="muted">(We’ll make this dynamic in Chunk 2.)</p>
          </div>

          <div className="grid">
            <article className="card">
              <div className="pill">Circle</div>
              <h3>Women’s New Moon Gathering</h3>
              <p className="muted">Date TBC • Colchester / Online</p>
              <p>
                Intentions, grounding meditation, and a simple ritual to reset
                for the month.
              </p>
            </article>

            <article className="card">
              <div className="pill">Workshop</div>
              <h3>Crystal Energy Foundations</h3>
              <p className="muted">Date TBC • Online</p>
              <p>
                Learn how to choose, cleanse, and work with crystals in everyday
                life.
              </p>
            </article>

            <article className="card">
              <div className="pill">Meditation</div>
              <h3>Deep Rest Session</h3>
              <p className="muted">Date TBC • Online</p>
              <p>
                A calming guided meditation designed for stress relief and
                nervous system support.
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
