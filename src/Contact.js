import { useState } from "react";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  const FORMSPREE_ID = "xnjbaaeo";
  const FORM_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    state: "idle", // "idle" | "sending" | "success" | "error"
    message: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        let msg = "Something went wrong. Please try again.";
        try {
          const data = await res.json();
          if (data?.errors?.length) msg = data.errors[0].message;
        } catch {}
        throw new Error(msg);
      }

      setStatus({ state: "success", message: "Message sent! ✨" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        state: "error",
        message: err?.message || "Could not send message. Please try again.",
      });
    }
  }

  return (
    <section id="contact" className="contactSection">
      <p className="muted">Send me a message below, or reach out on socials.</p>

      <div className="contactRow">
        {/* Icon buttons */}
        <a
          className="iconButton"
          href="mailto:hello@triplemoon.yourdomain"
          aria-label="Email"
          title="Email"
        >
          <FaEnvelope />
        </a>

        <a
          className="iconButton"
          href="https://www.instagram.com/YOURUSERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          className="iconButton"
          href="https://www.facebook.com/YOURUSERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Facebook"
        >
          <FaFacebookF />
        </a>

        <a className="button buttonSecondary" href="#offerings">
          Explore offerings
        </a>
      </div>

      {/* Controlled form */}
      <form className="contactForm" onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            autoComplete="name"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
            autoComplete="email"
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={5}
            required
          />
        </label>

        <div className="contactActions">
          <button
            type="submit"
            className="button"
            disabled={status.state === "sending"}
          >
            {status.state === "sending" ? "Sending…" : "Send message"}
          </button>

          {status.state !== "idle" && (
            <p
              className={`formStatus ${
                status.state === "success"
                  ? "ok"
                  : status.state === "error"
                    ? "bad"
                    : ""
              }`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
