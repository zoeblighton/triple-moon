import Layout from "./Layout";
import "./Coaching.css"; // optional, for just a few extras

export default function Coaching() {
  return (
    <Layout>
      <section className="section">
        <div className="sectionHeader">
          <h2>The Enchanted Hen</h2>
          <p className="muted">Overview</p>
        </div>

        <div className="coachingGrid">
          <article className="card">
            <h3>Sub Heading</h3>

            <p>Info</p>
          </article>

          <article className="card">
            <h3>More Info</h3>

            <ul className="bullets">
              <li>Photographs</li>
              <li>2</li>
              <li>3</li>
            </ul>

            <p className="coachingCtaText">
              Want to add an element of magic to your hen? Get in touch below.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
