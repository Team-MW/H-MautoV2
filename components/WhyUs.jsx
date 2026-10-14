import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function WhyUs() {
  if (!siteConfig.sectionsVisibility.whyUs) {
    return null;
  }

  const { whyUs } = siteConfig;

  return (
    <section id="engagements" className="why-section">
      <div className="container">
        <div className="why-grid">
          {/* Colonne gauche : Engagements concrets */}
          <div>
            <span className="eyebrow">{whyUs.eyebrow}</span>
            <h2 className="heading-lg" style={{ color: "var(--color-text-dark)", marginBottom: "18px" }}>
              {whyUs.title}
            </h2>
            <p style={{ color: "var(--color-text-muted-dark)", fontSize: "1.05rem", lineHeight: "1.65" }}>
              {whyUs.leadParagraph}
            </p>

            {/* 4 Engagements concrets */}
            <div className="why-commitments">
              {whyUs.commitments.map((item, idx) => (
                <div key={idx} className="commitment-item">
                  <h3 className="commitment-title">{item.title}</h3>
                  <p className="commitment-desc">{item.description}</p>
                </div>
              ))}
            </div>

            <Link href={whyUs.ctaButton.href} className="btn btn-primary">
              <span>{whyUs.ctaButton.label}</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Colonne droite : Visuel avec découpe géométrique et accent bleu (identique à la référence) */}
          <div className="why-visual-wrapper">
            <div className="why-visual-accent" aria-hidden="true" />
            <div className="why-visual-frame">
              <Image
                src={whyUs.image.src}
                alt={whyUs.image.alt}
                width={whyUs.image.width}
                height={whyUs.image.height}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
