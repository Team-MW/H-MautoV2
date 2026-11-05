import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Services() {
  if (!siteConfig.sectionsVisibility.services) {
    return null;
  }

  const { services } = siteConfig;

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{services.eyebrow}</span>
          <h2 className="heading-lg">{services.title}</h2>
          <p className="section-description">{services.description}</p>
        </div>

        <ul className="services-grid">
          {services.items.map((item) => (
            <li key={item.id} className="service-card">
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

              <div className="service-card-top">
                <span className="service-number">{item.number}</span>
              </div>

              <div className="service-card-bottom">
                <h3 className="service-title">{item.title}</h3>
                <p className="service-desc">{item.description}</p>

                <div className="service-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="service-tag">{tag}</span>
                  ))}
                </div>

                <div style={{ marginTop: "10px" }}>
                  <Link
                    href={item.href ?? "/prestations"}
                    className="btn-outline-card"
                    aria-label={`${services.ctaCardLabel} - ${item.title}`}
                  >
                    <span>{services.ctaCardLabel}</span>
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

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
    </section>
  );
}
