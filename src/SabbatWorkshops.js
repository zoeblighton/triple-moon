import Layout from "./Layout";

export default function SabbatWorkshops() {
  return (
    <Layout>
      <section className="section">
        <div className="sectionHeader">
          <h2>Cyclical Living Workshops</h2>
          <p className="muted">
            Group workshops aligned with the Wheel of the Year — ritual,
            intention, and seasonal wisdom.
          </p>
        </div>
        <div>
          <article className="cyclicalLiving">
            <h3>
              Cyclical living is about connecting to the cycles of nature to
              find calm and connection during uncertain times, by honouring
              cycles and seasons we can live cyclically, stay grounded, and find
              calm and connection during uncertain times.{" "}
            </h3>
            <p>
              We are bombarded with negativity in the media, forced into a
              culture of comparison and forced to conform to the demands of a
              capitalist consumer culture that not only negates the cycles of
              nature, but is effectively destroying them. It is no wonder, then,
              that we find ourselves feeling depleted and powerless as we have
              lost touch with ourselves and the rhythms of nature.{" "}
            </p>
            <h3>How can living cyclically keep us steady?</h3>
            <p>
              Our ancestors knew this and their lives would have been structured
              around these cycles. Their survival depended on knowledge of
              nature; when to plant, when to harvest, the migration and life
              cycles of animals. When we look to nature as our guide, we can get
              a sense of the natural balance between yang and yin, outward and
              inward, active, and passive, creating and resting as we move
              through the seasons.{" "}
            </p>{" "}
            <p>
              {" "}
              Awareness of the seasons and cycles within our own lives gives us
              an opportunity to work with nature. Tuning into our cyclical
              nature and rhythms allows us to ease into the natural flow of our
              lives, trusting that each season will come and go, with periods of
              inspiration and creativity, and periods of calm and rest.{" "}
            </p>{" "}
            <p>
              {" "}
              In the spring, at Ostara and Beltane we can celebrate the energy
              of renewal and growth. We can plant seeds, tend to our gardens,
              and watch as the world around us comes to life. In the summer, we
              can embrace the energy of abundance and fruition. We can enjoy the
              warm weather, the longer days, and the bountiful fresh fruits and
              vegetables.{" "}
            </p>{" "}
            <p>
              {" "}
              In the Autumn, we can honour the energy of harvest and gratitude.
              We can gather our crops, give thanks for the abundance of the
              season, and prepare for the colder months ahead. And in the
              winter, we can embrace the energy of rest and reflection. We can
              take time to slow down, to rest, and to recharge our batteries.
            </p>{" "}
            <h3>
              Overall, living in harmony with the cycles of nature is a
              wonderful way to connect with the natural world and to align our
              lives with the rhythms of the earth. It is a practice that can
              bring us greater health, happiness, and fulfilment. By paying
              attention to the seasons and the cycles of the moon, we can learn
              to live in harmony with the natural world and to experience the
              beauty and wonder of the earth.
            </h3>
            <h2>The Wheel of the Year </h2>{" "}
            <h3>
              Connecting to the wheel of the year as a way of making meaning:
              anchoring and grounding through ritual and the cycles and seasons
              of nature{" "}
            </h3>{" "}
            <p>
              Observing the Wheel of the Year can also serve as a guide to our
              own natural cycles. Each celebration day marks a transition and
              these transitions help us to understand our own transitions
              through life. Having these anchors in our ever-changing world,
              offers us the space to pause, reflect, to live with intention and
              express gratitude. The Wheel of the Year is a relatively new
              system that only really dates to the 1950s and it is not without
              its problems. Many folk traditions in England have been lost over
              the years for several reasons, including the invasion of the
              Romans and the Reformation of the Church. Most of the names of the
              festival days that are celebrated when following The Wheel of the
              Year come from cultural backgrounds that include the Celtic
              nations of Scotland, Wales, and Ireland. The wheel of the year is
              always turning The Wheel of the Year features eight celebration
              days. Four of these are specifically connected to the sun and the
              amount of daylight we experience. These are the winter solstice
              (known as Yule), spring equinox (Ostara), summer solstice (Litha)
              and autumn equinox (Mabon). Between these are the four fire
              festivals of Samhain (pronounced sah-win), Imbolc (pronounced
              im-olc), Beltane, and Lammas. Each festival holds a unique
              essence, and there is often an association with Gods and
              Goddesses, trees, and folklore. Sadly, we have lost a lot of our
              ancient traditions and the way we celebrate these festivals today
              is based on a best guess about the ways our ancestors would have
              followed and celebrated the agricultural year.
            </p>
          </article>
        </div>

        <div className="galleryGrid">
          <h2>Gallery</h2>
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
