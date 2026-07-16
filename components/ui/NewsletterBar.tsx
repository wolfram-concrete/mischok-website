"use client";

import { useState } from "react";

/**
 * NewsletterBar — schlanke Anmelde-Leiste für den Footer.
 * Ohne Newsletter-Backend: der Eintrag wird als vorbereitete E-Mail an
 * info@mischok.de übergeben (mailto), die Anmeldung erfolgt also real per Mail.
 * Sobald ein Dienst (z. B. CleverReach/Mailchimp) angebunden ist, kann der
 * Submit-Handler auf dessen Endpoint umgestellt werden.
 */
export default function NewsletterBar() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Newsletter-Anmeldung");
    const body = encodeURIComponent(
      `Bitte nehmen Sie diese Adresse in den MISCHOK-Newsletter auf:\n${email}`
    );
    window.location.href = `mailto:info@mischok.de?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="ft-news">
      <div className="ft-label">Newsletter</div>
      {sent ? (
        <p className="ft-news-done">
          Danke — Ihr E-Mail-Programm öffnet sich. Wir nehmen Sie in den
          Verteiler auf.
        </p>
      ) : (
        <form className="ft-news-form" onSubmit={onSubmit}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ihre E-Mail-Adresse"
            aria-label="E-Mail-Adresse für den Newsletter"
            className="ft-news-input"
          />
          <button
            type="submit"
            className="ft-news-btn"
            aria-label="Newsletter abonnieren"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h13" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
      )}
      <p className="ft-news-note">
        Fachliche Impulse statt Werbung. Keine Weitergabe an Dritte, jederzeit
        abbestellbar.
      </p>
    </div>
  );
}
