import Layout from "./Layout";

export default function EnergyCrystalSupport() {
  return (
    <Layout>
      <section className="section">
        <div className="sectionHeader">
          <h2>Energy & Crystal Support</h2>
          <p className="muted">
            Ritual, intention setting, and crystal wisdom for energetic clarity.
          </p>
        </div>

        <div className="coachingGrid">
          <article className="card">
            <h3>How it works</h3>
            <ul className="bullets">
              <li>Energetic resets</li>
              <li>Crystal selection guidance</li>
              <li>Seasonal rituals</li>
            </ul>
          </article>

          <article className="card">
            <h3>Good for</h3>
            <p>When you want grounding, clarity, protection, or a reset.</p>
          </article>
        </div>

        {/* CTA (see Part 2) */}
        <section className="section">
          <h2>Ready to book?</h2>
          <p className="muted">Get in touch below.</p>
        </section>
      </section>
    </Layout>
  );
}
