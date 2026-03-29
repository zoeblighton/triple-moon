import Layout from "./Layout";
import "./App.css";

export default function TheJoyOfCrystals() {
  return (
    <Layout>
      <section className="section">
        <div className="sectionHeader">
          <h2>The Joy of Crystals</h2>
          <p className="muted">
            Discover the transformative power of crystals and their connection
            to the natural world.
          </p>
        </div>
        <div>
          <article className="crystalworkshop">
            <h3>
              Crystals are a powerful tool for healing and transformation, and
              they have been used for thousands of years by cultures around the
              world. They are formed through a process of crystallization, where
              minerals and other substances come together to create a solid
              structure. Each crystal has its own unique energy and properties,
              and they can be used in a variety of ways to support our physical,
              emotional, and spiritual well-being.
            </h3>
            <p>
              Crystals can be used for healing, meditation, manifestation, and
              spiritual growth. They can help to balance our energy, clear
              blockages, and promote a sense of calm and well-being. Some
              crystals are believed to have specific properties, such as
              amethyst for calming the mind, rose quartz for promoting love and
              compassion, and clear quartz for amplifying energy and intention.
            </p>
            <h3>The Joy of Crystals Workshops</h3>
            <p>
              In our Joy of Crystals workshops, we explore the world of crystals
              and how to work with them in a practical and accessible way. We
              cover topics such as how to choose and care for your crystals, how
              to use them for healing and meditation, and how to incorporate
              them into your daily life. Whether you are new to crystals or have
              been working with them for years, our workshops offer a supportive
              and welcoming space to learn and grow.
            </p>
          </article>
        </div>
        <p>
          I have put together a list of resources for those interested in
          learning more about crystals and their uses.
        </p>
        <a
          class="button"
          href="https://www.Thejoyofcrystals.com/"
          target="_blank"
          rel="noreferrer"
        >
          Explore Resources
        </a>

        <section className="section">
          <h2>Want to know more?</h2>
          <p className="muted">
            Get in touch below to host your own Joy of Crystals workshop.
          </p>
        </section>
      </section>
    </Layout>
  );
}
