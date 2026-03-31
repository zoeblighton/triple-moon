import Layout from "./Layout";
import InstagramFeed from "./InstagramFeed";

export default function LovingMagically() {
  return (
    <Layout>
      <section className="section">
        <div className="sectionHeader">
          <h2>Loving Magically</h2>
          <p className="muted">
            A gentle, creative session exploring love, self-care, and folklore
            magic.
          </p>
        </div>

        <div>
          <article className="cyclicalLiving">
            <h3>
              Love magic begins with how we care for ourselves, how we connect
              to others, and how we open to receiving and giving love in a
              meaningful way.
            </h3>

            <p>
              This workshop is an invitation to slow down and reconnect with the
              softer, more intuitive parts of yourself. Through simple
              practices, folklore traditions, and creative activities, we
              explore how love can be nurtured gently and authentically.
            </p>

            <h3>What is love magic?</h3>

            <p>
              Love magic is not about control or force — it is about intention,
              attraction, self-worth, and openness. It is rooted in ancient
              traditions that honour beauty, connection, and emotional balance.
            </p>

            <p>
              Working with herbs, crystals, and ritual allows us to focus our
              intentions and create space for love to grow — whether that is
              self-love, romantic love, friendship, or healing from the past.
            </p>

            <h3>Why self-love comes first</h3>

            <p>
              Before we can truly invite love into our lives, we must feel safe,
              worthy, and connected within ourselves. This workshop gently
              encourages reflection, compassion, and care, creating a foundation
              for deeper connections.
            </p>

            <p>
              Through ritual and creativity, we begin to shift how we see
              ourselves — moving away from self-criticism and towards kindness,
              acceptance, and openness.
            </p>

            <h3>
              This is a calm and supportive space to explore love through
              creativity, ritual, and connection.
            </h3>

            <h2>What we will explore</h2>

            <h3>
              Working with herbs, crystals, and ritual to support love,
              connection, and self-care
            </h3>

            <p>
              During the session, we will explore traditional correspondences
              for love, work with gentle rituals, and create meaningful items to
              take home with you.
            </p>

            <p>
              There is space to reflect, connect, and enjoy the process —
              whether you are new to this or deepening your existing practice.
            </p>

            <p>
              Together we will work with themes of self-love, attraction,
              emotional healing, and nurturing connection.
            </p>
          </article>
        </div>

        <div className="workshopInstaRow">
          <div
            className="nextWorkshop"
            aria-label="Loving Magically workshop details"
          >
            <h2>What to expect</h2>

            <h3>Loving Magically</h3>

            <p>
              Come and join us for a magical session exploring love, self-care
              and folklore magic.
            </p>

            <p>
              Discover herbs and crystals associated with love and create your
              own meaningful magical items in a relaxed and welcoming space.
            </p>

            <ul className="bullets">
              <li>Creating a love posy.</li>
              <li>Making a crystal bath jar.</li>
              <li>Making a herb love poppet.</li>
              <li>Sampling a love brew.</li>
              <li>A guided meditation.</li>
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
