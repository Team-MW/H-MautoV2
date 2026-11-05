import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

/**
 * En-tête commun des pages intérieures : fil d'Ariane, titre, sous-titre
 * et actions optionnelles. Génère aussi le BreadcrumbList Schema.org.
 */
export default function PageHero({ eyebrow, title, subtitle, path, crumb, children }) {
  const { seo } = siteConfig;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${seo.siteUrl}/` },
      { "@type": "ListItem", position: 2, name: crumb, item: `${seo.siteUrl}${path}` },
    ],
  };

  return (
    <section className="subpage-hero">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="subpage-hero-glow" aria-hidden="true" />
      <div className="container">
        <nav aria-label="Fil d'Ariane" className="breadcrumb">
          <ol>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={13} />
            </li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>

        <div className="subpage-hero-centered">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="heading-xl subpage-title">{title}</h1>
          {subtitle && <p className="subpage-lead">{subtitle}</p>}
          {children && <div className="subpage-hero-actions">{children}</div>}
        </div>
      </div>
    </section>
  );
}
