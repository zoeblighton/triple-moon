import Layout from "./Layout";
import "./Coaching.css"; // optional, for just a few extras

export default function Coaching() {
  return (
    <Layout>
      <section className="section">
        <div className="sectionHeader">
          <h2>1:1 Life Coaching</h2>
          <p className="muted">
            Clarity, confidence, and action. Spiritual support and practical
            steps.
          </p>
        </div>

        <div className="coachingGrid">
          <article className="card">
            <h3>What is coaching?</h3>

            <p>
              We live in challenging times. Many of us constantly connected,
              overstimulated, and often carrying more than we realise. It’s easy
              to feel stuck, overwhelmed, or disconnected from ourselves along
              the way.
            </p>

            <p>
              Coaching is a supportive, collaborative process that helps you
              slow down, tune in, and reconnect with what truly matters to you.
              It’s not about being fixed or told what to do, it’s about being
              heard, understood, and gently guided back to your own inner
              wisdom.
            </p>

            <p>
              Through open conversation, reflection, and encouragement, coaching
              helps you uncover your strengths, gain clarity, and recognise the
              possibilities already available to you. Growth happens at your
              pace, in a way that feels safe and empowering.
            </p>

            <p>
              At its heart, coaching is about choice and self-trust. It supports
              you in taking responsibility for your path, making conscious
              decisions, and moving forward with confidence.
            </p>

            <p>
              This is a space for learning, healing, and uplifting one another.
              Progress is celebrated, curiosity is welcomed, and community
              matters.
            </p>
          </article>

          <article className="card">
            <h3>Questions to prepare</h3>

            <ul className="bullets">
              <li>
                What is your reasoning behind wanting to undertake coaching
                sessions at this stage of your life?
              </li>
              <li>Have you worked with a coach before at any point?</li>
              <li>What do you expect to gain from the coaching sessions?</li>
              <li>
                How will you know when you're seeing results from the coaching
                sessions?
              </li>
              <li>
                So far in your life, what do you feel are your biggest
                accomplishments to date?
              </li>
              <li>
                Please tell us about the hardest thing you've had to overcome in
                your life and how you overcame it.
              </li>
              <li>How do you learn best?</li>
              <li>Which things stress you out the most?</li>
              <li>Please describe your current self in 5 words</li>
              <li>
                What are the three biggest changes you'd like to make in your
                life within the near future?
              </li>
              <li>
                On a scale of 1 to 10, how motivated are you to successfully
                make those changes?
              </li>
            </ul>

            <p className="coachingCtaText">
              Are you prepared to do the work? If you are, get in touch below.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
