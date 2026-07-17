import { REFERENZEN } from "@/lib/content";
import NewsletterBar from "@/components/ui/NewsletterBar";
import Reveal from "@/components/ui/Reveal";

/**
 * Footer — Aufbau nach Harbor-Referenz, mit MISCHOK-Inhalten:
 * • links: Wortmarke, Claim, CTA „Erstgespräch vereinbaren"
 * • rechts: drei Linkspalten (Navigation, Referenzen, Kontakt)
 * • Bottom-Leiste (oben/unten Linie): LinkedIn + Copyright, rechts Rechtliches
 * Kein erfundener Newsletter/Registereintrag — nur reale Daten.
 */

const NAV_LINKS = [
  { label: "Einsatzfelder", href: "/#einsatzfelder" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Über uns", href: "/#ueber" },
  { label: "Insights", href: "/#themen" },
  { label: "Karriere", href: "/#arbeiten" },
];

const LINKEDIN_COMPANY = "https://www.linkedin.com/company/mischok/";

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "var(--section)",
        padding: "clamp(56px,7vw,96px) clamp(20px,5vw,72px) 32px",
        overflow: "hidden",
      }}
    >
      {/* Obere Hälfte: Marke/CTA | Linkspalten */}
      <div className="ft-halves" style={{ width: "100%" }}>
        {/* Links: Marke + Claim + CTA */}
        <div className="ft-left">
          <a href="/" aria-label="MISCHOK — Startseite" style={{ display: "inline-block" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo/MISCHOK_LOGO_L_POS_RGB-neu.svg"
              alt="MISCHOK"
              style={{ display: "block", height: "38px", width: "auto" }}
            />
          </a>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "var(--text-copy)",
              lineHeight: 1.6,
              color: "var(--slate)",
              margin: 0,
              maxWidth: "34ch",
            }}
          >
            Erfahrene Projektführung für geschäftskritische Software im Bestand.
          </p>
          <NewsletterBar />
          <a
            href="/#kontakt"
            className="cta-solid"
            style={{
              textDecoration: "none",
              fontFamily: "var(--sans)",
              fontWeight: 700,
              fontSize: "14px",
              padding: "14px 26px",
              borderRadius: "3px",
              display: "inline-block",
              alignSelf: "flex-start",
            }}
          >
            Erstgespräch vereinbaren
          </a>
        </div>

        {/* Rechts: drei Linkspalten */}
        <div className="ft-cols">
          <Reveal className="ft-col">
            <div className="ft-label">Navigation</div>
            <div className="ft-linkcol">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="ft-link">
                  {l.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="ft-col" delay={0.08}>
            <div className="ft-label">Referenzen</div>
            <div className="ft-linkcol">
              {REFERENZEN.map((r) => (
                <a
                  key={r.slug}
                  href={r.detailHref ?? `/referenzen#${r.slug}`}
                  className="ft-link"
                >
                  {r.name}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="ft-col" delay={0.16}>
            <div className="ft-label">Kontakt</div>
            <div className="ft-linkcol">
              <a href="tel:+4982149815881" className="ft-link">
                +49 821 49 81 58 81
              </a>
              <a href="mailto:info@mischok.de" className="ft-link">
                info@mischok.de
              </a>
              <address className="ft-address">
                Mischok GmbH
                <br />
                Karlstr. 12
                <br />
                86150 Augsburg
              </address>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom-Leiste */}
      <div className="ft-bottom">
        <div className="ft-bottom-left">
          <a
            href={LINKEDIN_COMPANY}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MISCHOK auf LinkedIn"
            className="ft-social"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
          <span className="ft-legal">© 2026 Mischok GmbH · Alle Rechte vorbehalten</span>
        </div>
        <div className="ft-bottom-right">
          <span className="ft-legal">Impressum · Datenschutz</span>
        </div>
      </div>
    </footer>
  );
}
