import Layout from "./Layout";
import Seo from "./Seo";
import "./Coaching.css";

export default function EnchantedHen() {
  return (
    <Layout>
      <Seo path="/EnchantedHen" />
      <section className="section">
        <div className="sectionHeader">
          <h1 className="pageTitle">The Enchanted Hen</h1>
          <p className="muted">
            You bring the bubbles, I bring the magic — a sacred celebration of
            love.
          </p>
        </div>

        <div className="coachingGrid">
          <article className="card">
            <h3>What’s included</h3>
            <ul className="bullets">
              <li>Love rituals + intention setting</li>
              <li>Symbolic flower arranging or crown making</li>
              <li>Group blessing + sharing circle</li>
            </ul>
          </article>

          <article className="card">
            <h3>Perfect for</h3>
            <p>Hen parties, bridal showers, and soulful gatherings.</p>
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
