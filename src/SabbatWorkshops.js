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
            <h3>What to expect</h3>
            <p>Write a short overview here.</p>
            <ul className="bullets">
              <li>Guided rituals for each Sabbat</li>
              <li>Practical tools to work with seasonal energy</li>
              <li>Symbolism, myth, and tradition</li>
            </ul>
          </article>

          <article className="card">
            <h3>Who it’s for</h3>
            <p>Write a short description here.</p>
          </article>
        </div>

        <section className="section">
          <h2>Want to know when we are celebrating next?</h2>
          <p className="muted">Get in touch below to join us.</p>
        </section>
      </section>
    </Layout>
  );
}
