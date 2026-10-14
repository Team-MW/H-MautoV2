import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  const { hero } = siteConfig;

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

          {/* Visuel automobile soigné */}
          <div className="hero-visual">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              priority
              className="hero-visual-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
