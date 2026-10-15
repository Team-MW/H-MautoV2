import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, MapPin, ShieldCheck, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  const { hero, business } = siteConfig;

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Contenu textuel */}
          <div className="hero-content">
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 className="heading-xl hero-headline">{hero.headline}</h1>
            <p className="hero-description">{hero.description}</p>

            {/* Deux actions claires et directes */}
            <div className="hero-actions">
              <Link href={hero.ctaPrimary.href} className="btn btn-primary">
                <span>{hero.ctaPrimary.label}</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>

              <Link href={hero.ctaSecondary.href} className="btn btn-outline-white">
                <span>{hero.ctaSecondary.label}</span>
              </Link>
            </div>

            {/* Éléments de réassurance sobres */}
            <div className="hero-badges">
              {hero.badges.map((badge, idx) => (
                <div key={idx} className="hero-badge-item">
                  <CheckCircle2 size={16} color="var(--color-primary)" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Remplacement du visuel par le Logo Officiel HM Auto 24 */}
          <div className="hero-brand-card">
            <div className="hero-brand-glow"></div>
            <div className="hero-brand-inner">
              <div className="hero-brand-badge-top">
                <span className="hero-brand-dot"></span>
                <span>Atelier Officiel • Bergerac (24)</span>
              </div>

              {/* Logo Officiel en grand */}
              <div className="hero-brand-logo-wrap">
                <Image
                  src={business.logo.src}
                  alt={business.logo.alt}
                  width={business.logo.width}
                  height={business.logo.height}
                  priority
                  className="hero-brand-logo-img"
                />
              </div>

              <div className="hero-brand-divider"></div>

              {/* Piliers du garage */}
              <div className="hero-brand-highlights">
                <div className="hero-highlight-pill">
                  <Zap size={14} color="var(--color-primary)" />
                  <span>Diagnostic immédiat</span>
                </div>
                <div className="hero-highlight-pill">
                  <ShieldCheck size={14} color="var(--color-primary)" />
                  <span>Batterie à domicile</span>
                </div>
                <div className="hero-highlight-pill">
                  <span style={{ color: "var(--color-primary)", fontWeight: 800 }}>★</span>
                  <span>5/5 sur Google</span>
                </div>
              </div>

              {/* Coordonnées rapides */}
              <div className="hero-brand-footer">
                <div className="hero-brand-location">
                  <MapPin size={15} color="var(--color-primary)" />
                  <span>{business.address.full}</span>
                </div>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="hero-brand-call-link"
                  aria-label={`Appeler le ${business.phone}`}
                >
                  <Phone size={14} />
                  <span>{business.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
