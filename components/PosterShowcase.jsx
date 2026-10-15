import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function PosterShowcase() {
  if (!siteConfig.sectionsVisibility.poster) {
    return null;
  }

  const { posterSection, business } = siteConfig;

  return (
    <section id="affiche" className="poster-section">
      <div className="container">
        {/* En-tête de section */}
        <div className="section-header">
          <span className="eyebrow">{posterSection.eyebrow}</span>
          <h2 className="heading-lg" style={{ color: "#ffffff" }}>
            {posterSection.title}
          </h2>
          <p className="section-description" style={{ color: "var(--color-text-muted-light)" }}>
            {posterSection.lead}
          </p>
        </div>

        {/* L'affiche officielle mise en valeur */}
        <div className="poster-frame-wrapper">
          <Image
            src={posterSection.image.src}
            alt={posterSection.image.alt}
            width={posterSection.image.width}
            height={posterSection.image.height}
            className="poster-image"
            priority
          />
        </div>

        {/* Grille des prestations & engagements mis en avant sur l'affiche */}
        <div className="poster-features-grid">
          {posterSection.features.map((feat, idx) => (
            <div key={idx} className="poster-feature-card">
              <h3 className="poster-feature-title">{feat.title}</h3>
              <p className="poster-feature-desc">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Bandeau d'appels directs pour les 2 numéros */}
        <div className="poster-phone-bar">
          <div>
            <span style={{ fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", color: "var(--color-primary)", letterSpacing: "0.08em" }}>
              Besoin d'un devis ou d'un conseil ?
            </span>
            <h4 style={{ fontSize: "1.15rem", fontWeight: 900, color: "#ffffff", marginTop: "2px" }}>
              Deux numéros directs à votre disposition :
            </h4>
          </div>

          <div className="poster-phone-buttons">
            <a
              href={`tel:${business.phoneRaw}`}
              className="btn btn-primary"
              aria-label={`Appeler le ${business.phone}`}
            >
              <Phone size={17} strokeWidth={2.5} />
              <span>{business.phone}</span>
            </a>

            <a
              href={`tel:${business.phoneSecondaryRaw}`}
              className="btn btn-outline-white"
              aria-label={`Appeler le ${business.phoneSecondary}`}
            >
              <Phone size={17} strokeWidth={2.5} color="var(--color-primary)" />
              <span>{business.phoneSecondary}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
