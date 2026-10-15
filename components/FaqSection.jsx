"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function FaqSection({
  title,
  eyebrow = "QUESTIONS FRÉQUENTES • FAQ",
  subtitle = "Retrouvez les réponses aux questions les plus courantes sur nos services, nos méthodes et notre atelier à Bergerac.",
  items = [],
  ctaLabel = "Une autre question ? Contactez notre atelier",
  ctaHref = "/contact",
}) {
  // Par défaut, la première question est ouverte
  const [openIndices, setOpenIndices] = useState([0]);
  const { business } = siteConfig;

  const toggleIndex = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (!items || items.length === 0) return null;

  // JSON-LD Schema.org FAQPage pour le référencement naturel Google
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <section className="faq-section" aria-label="Foire aux questions">
      {/* Données structurées SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container">
        {/* En-tête de section */}
        <div className="section-header-centered">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="heading-lg" style={{ color: "var(--color-text-dark)" }}>
            {title}
          </h2>
          {subtitle && (
            <p className="lead-paragraph" style={{ maxWidth: "720px", margin: "12px auto 0" }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Liste accordéon FAQ */}
        <div className="faq-accordion-list">
          {items.map((item, index) => {
            const isOpen = openIndices.includes(index);
            const questionId = `faq-q-${index}`;
            const answerId = `faq-a-${index}`;

            return (
              <div
                key={index}
                className={`faq-accordion-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleIndex(index)}
                  className="faq-question-btn"
                >
                  <span className="faq-q-left">
                    <span className="faq-icon-bubble">
                      <HelpCircle size={16} />
                    </span>
                    <span className="faq-question-text">{item.q}</span>
                  </span>
                  <span className={`faq-chevron-wrapper ${isOpen ? "rotate" : ""}`}>
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`faq-answer-pane ${isOpen ? "show" : ""}`}
                >
                  <div className="faq-answer-content">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pied de section FAQ avec appel direct ou lien contact */}
        <div className="faq-footer-cta">
          <div className="faq-footer-box">
            <div className="faq-footer-text">
              <h4 style={{ color: "var(--color-text-dark)", fontSize: "1.05rem", fontWeight: 800 }}>
                Vous avez un cas particulier ou une urgence mécanique ?
              </h4>
              <p style={{ color: "var(--color-text-muted-dark)", fontSize: "0.9rem", marginTop: "4px" }}>
                Notre mécanicien vous répond directement sans attente au téléphone.
              </p>
            </div>

            <div className="faq-footer-actions">
              <a
                href={`tel:${business.phoneRaw}`}
                className="btn btn-outline-dark"
                title="Ligne 1 HM Auto 24"
              >
                <Phone size={15} color="var(--color-primary)" />
                <span>{business.phone}</span>
              </a>

              <Link href={ctaHref} className="btn btn-primary">
                <span>{ctaLabel}</span>
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
