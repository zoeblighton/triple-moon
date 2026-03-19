import Layout from "./Layout";

export default function EnergyCrystalSupport() {
  return (
    <Layout>
      <section className="section">
        <h2>What is Reiki Seichem?</h2>

        <p>
          Reiki and Seichem are complementary, hands-on energy healing
          modalities, with Seichem often considered an expansion of Usui Reiki.
          While Reiki focuses on grounding and physical healing, Seichem is said
          to incorporate four elements—earth, water, fire, and air—to support
          emotional, mental, and spiritual balance.
        </p>

        <p>
          Both aim to reduce stress, promote relaxation, and support the body's
          natural healing processes. Reiki and Seichem both involve hand
          placement to balance energy, though they differ in scope and origin.
        </p>

        <p>
          Seichem builds upon the base of Reiki, allowing the practitioner to
          work with a broader spectrum of energies to support healing of the
          physical, emotional, and mental bodies.
        </p>

        <p>
          Reiki is often described as focusing on earth energy, while Seichem is
          presented as a more expansive system that also includes water, fire,
          and air energies.
        </p>

        <p>
          Seichem is sometimes described as feeling faster, hotter, and more
          active than Reiki, tending to work more deeply with emotional energy,
          while Reiki is often experienced as gentle, calming, and soothing.
        </p>

        <p>
          Reiki is rooted in Japanese tradition and is associated with Mikao
          Usui, while Seichem is often linked by practitioners to Egyptian
          energetic traditions.
        </p>

        <div className="coachingGrid">
          <article className="card">
            <h3>What to expect during a session</h3>
            <ul className="bullets">
              <li>You lie down fully clothed</li>
              <li>
                The practitioner places hands gently on or above your body
              </li>
              <li>Sessions usually last 30–60 minutes</li>
              <li>You may feel warmth, tingling, or deep relaxation</li>
            </ul>
          </article>

          <article className="card">
            <h3>Good for</h3>
            <p>
              When you want stress and anxiety relief, emotional healing,
              grounding, clarity, or a reset.
            </p>
          </article>
        </div>

        <section className="section">
          <h2>Ready to book?</h2>
          <img
            class="reikiImage"
            src="/images/reiki-poster.png"
            alt="Reiki Healing"
          />
          <p className="muted">Get in touch below.</p>
        </section>
      </section>
    </Layout>
  );
}
