import Layout from "./Layout";

export default function SabbatWorkshops() {
  return (
    <Layout>
      <section className="section">
        <div className="sectionHeader">
          <h2>Sabbat Workshops</h2>
          <p className="muted">
            Group workshops aligned with the Wheel of the Year — ritual,
            intention, and seasonal wisdom.
          </p>
        </div>

        <div className="coachingGrid">
          <article className="card">
            <section className="section">
              <h2>What to expect</h2>
              <p className="muted">
                Each gathering is a gentle blend of reflection, ritual,
                creativity, and connection. We move with the energy of the
                season, working with symbolism, intention, and simple practices
                you can carry into everyday life.
              </p>
              <ul className="bullets">
                <li>Guided rituals for each Sabbat</li>
                <li>Practical tools to work with seasonal energy</li>
                <li>Symbolism, myth, and tradition</li>
              </ul>{" "}
            </section>
          </article>

          <article className="card">
            <h3>Who it’s for</h3>
            <p>
              These workshops are for women who feel called to reconnect with
              the natural rhythms of life and the quiet wisdom of the seasons.
              You don’t need experience with ritual or spiritual practice, only
              curiosity, openness, and a willingness to slow down and listen
              inward. Whether you’re beginning your path or deepening an
              existing one, you’ll be welcomed into a gentle, supportive space
              where you can explore, reflect, and grow at your own pace.
            </p>
          </article>
        </div>
        <div className="galleryGrid">
          {[
            "/images/workshop1.jpg",
            "/images/workshop2.jpg",
            "/images/workshop3.jpg",
            "/images/workshop4.jpg",
            "/images/workshop5.jpg",
            "/images/workshop6.jpg",
          ].map((src, i) => (
            <div className="galleryItem" key={i}>
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>

        <section className="section">
          <h2>Want to know when we are celebrating next?</h2>
          <p className="muted">Get in touch below to join us.</p>
        </section>
      </section>
    </Layout>
  );
}
