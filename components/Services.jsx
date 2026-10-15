"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useState } from "react";

export default function Services() {
  if (!siteConfig.sectionsVisibility.services) {
    return null;
  }

  const { services } = siteConfig;
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % services.items.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + services.items.length) % services.items.length);
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* En-tête de section */}
        <div className="section-header">
          <span className="eyebrow">{services.eyebrow}</span>
          <h2 className="heading-lg" style={{ color: "var(--color-text-dark)" }}>
            {services.title}
          </h2>
          <p className="section-description">{services.description}</p>
        </div>

        {/* Grille des 4 prestations principales (fidèle au design de la maquette) */}
        <div className="services-grid" role="list">
          {services.items.map((item) => (
            <article key={item.id} className="service-card" role="listitem">
              {/* Image d'arrière-plan avec overlay dégradé sombre */}
              <div className="service-card-bg">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="service-card-overlay" />

              {/* Numéro imposant en haut de carte */}
              <div className="service-card-top">
                <span className="service-number">{item.number}</span>
              </div>

              {/* Titre, description, tags et bouton d'action */}
              <div className="service-card-bottom">
                <h3 className="service-title">{item.title}</h3>
                <p className="service-desc">{item.description}</p>

                <div className="service-tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="service-tag">{tag}</span>
                  ))}
                </div>

                <div style={{ marginTop: "10px" }}>
                  <Link
                    href="/prestations"
                    className="btn-outline-card"
                    aria-label={`${services.ctaCardLabel} - ${item.title}`}
                  >
                    <span>{services.ctaCardLabel}</span>
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Contrôle visuel et double bouton inférieur (reproduit fidèlement le pied de section de la maquette) */}
        <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", width: "100%", maxWidth: "600px", gap: "16px" }}>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Prestation précédente"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1.5px solid var(--color-light-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-dark)",
                cursor: "pointer",
                background: "#ffffff",
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <div style={{ flex: 1, height: "2px", backgroundColor: "var(--color-light-border)", position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${(activeSlide / (services.items.length - 1)) * 75}%`,
                  width: "25%",
                  height: "100%",
                  backgroundColor: "var(--color-primary)",
                  transition: "left 250ms ease",
                }}
              />
            </div>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Prestation suivante"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1.5px solid var(--color-light-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-dark)",
                cursor: "pointer",
                background: "#ffffff",
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="services-footer-actions">
            <Link href={services.ctaSectionPrimary.href} className="btn btn-primary">
              <span>{services.ctaSectionPrimary.label}</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link href={services.ctaSectionSecondary.href} className="btn btn-outline-dark">
              <span>{services.ctaSectionSecondary.label}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
