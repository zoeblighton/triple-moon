import Layout from "./Layout";
import InstagramFeed from "./InstagramFeed";

export default function AMagicalHome() {
  return (
    <Layout>
      <section className="section">
        <div className="sectionHeader">
          <h2>The Magical Home &amp; Imbolc</h2>
        </div>

        <div>
          <article className="cyclicalLiving">
            <h3>
              The home can be more than just a place we live — it can become a
              place of comfort, intention, protection, and quiet magic.
            </h3>

            <p>
              This workshop is an invitation to slow down, reconnect with your
              space, and welcome the gentle energy of Imbolc into your home.
              Together we explore simple seasonal practices that bring warmth,
              meaning, and a sense of renewal as winter begins to loosen its
              grip.
            </p>

            <h3>What is Imbolc?</h3>

            <p>
              Imbolc is the festival of returning light, traditionally observed
              at the beginning of February. It sits between the depth of winter
              and the first signs of spring, offering a moment of hope,
              purification, and preparation for what is beginning to grow.
            </p>

            <p>
              Often associated with Brigid, Imbolc carries themes of hearth,
              home, inspiration, creativity, and sacred tending. It is a time to
              light candles, cleanse the home, refresh intentions, and make
              space for the new season ahead.
            </p>

            <h3>How can the home become magical?</h3>

            <p>
              When we bring intention into the spaces we live in, ordinary acts
              can become small rituals of care. Lighting a candle, blessing a
              doorway, making something by hand, or creating a protective charm
              for the home can all help us feel more grounded and connected.
            </p>

            <p>
              In this workshop, we work gently and practically, combining
              seasonal folklore, symbolism, and creativity. You will be guided
              through ways to create a home environment that feels nurturing,
              protected, and aligned with the energy of the season.
            </p>

            <h3>
              This is a warm, welcoming space to explore seasonal traditions,
              home blessing, candle magic, and creative ritual in a way that is
              accessible and meaningful.
            </h3>
            <p className="muted">
              A seasonal workshop for welcoming the returning light, blessing
              the home, and creating simple, meaningful magic for your space.
            </p>

            <h2>What we will explore</h2>

            <h3>
              Welcoming light, intention, and protection into the home through
              simple seasonal practices
            </h3>

            <p>
              During the workshop we will explore the traditions of Imbolc,
              learn about protective magic for the home, and spend time creating
              something practical and magical to take away with you.
            </p>

            <p>
              There will be space to reflect, create, and connect with the
              symbolism of the season, whether you are completely new to this
              path or simply looking for a deeper way to honour this turning of
              the year.
            </p>

            <p>
              Together we will work with the themes of cleansing, blessing,
              protection, renewal, and the quiet but powerful return of light.
            </p>
          </article>
        </div>

        <div className="workshopInstaRow">
          <div
            className="nextWorkshop"
            aria-label="A Magical Home and Imbolc workshop details"
          >
            <h2>What to expect</h2>

            <h3>A Magical Home &amp; Imbolc</h3>

            <p>
              Come and spend some magical time with us, lighting the way for
              spring and creating magic for the home.
            </p>

            <p>
              This workshop blends seasonal learning, gentle ritual, and
              practical creativity in a calm and supportive space.
            </p>

            <ul className="bullets">
              <li>Learning about protective magic for the home.</li>
              <li>Discovering the traditions of Imbolc.</li>
              <li>Candle activity.</li>
              <li>Creating magical home accessories.</li>
            </ul>
          </div>

          <div className="instagramCol">
            <InstagramFeed />
          </div>
        </div>
      </section>
    </Layout>
  );
}
