import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Phone, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import FaqSection from "@/components/FaqSection";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Prestations & Mécanique à Bergerac | HM Auto 24",
  description: "Diagnostic électronique immédiat, mécanique générale, vidange constructeur, freinage et suspension à Bergerac. Devis transparent sans surprise.",
};

export default function PrestationsPage() {
  const { prestationsPage, business } = siteConfig;

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* En-tête de la page */}
        <section className="subpage-hero">
          <div className="container">
            <div className="subpage-hero-centered">
              <span className="eyebrow">{prestationsPage.hero.eyebrow}</span>
              <h1 className="heading-xl" style={{ color: "#ffffff" }}>
                {prestationsPage.hero.title}
              </h1>
              <p className="subpage-lead">
                {prestationsPage.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        <EmergencyBanner />

        {/* Détail complet de chaque prestation */}
        <section className="subpage-content-section">
          <div className="container">
            {prestationsPage.sections.map((sec, idx) => (
              <article
                key={sec.id}
                className={`service-detail-block ${idx % 2 !== 0 ? "reverse" : ""}`}
              >
                {/* Colonne texte */}
                <div className="service-detail-text">
                  <span className="service-detail-number">{sec.number}</span>
                  <h2 className="heading-md" style={{ color: "var(--color-text-dark)" }}>
                    {sec.title}
                  </h2>
                  <p className="service-detail-lead">{sec.lead}</p>
                  <p className="service-detail-desc">{sec.content}</p>

                  <ul className="service-detail-points">
                    {sec.points.map((pt, pIdx) => (
                      <li key={pIdx} className="service-detail-point-item">
                        <Check size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <Link href="/contact#formulaire" className="btn btn-primary">
                      <span>Demander un devis pour ce service</span>
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </Link>
                    <a href={`tel:${business.phoneRaw}`} className="btn btn-outline-dark">
                      <Phone size={15} />
                      <span>{business.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Colonne visuelle */}
                <div className="service-detail-media">
                  <div className="service-detail-image-wrap">
                    <Image
                      src={sec.image}
                      alt={sec.title}
                      fill
                      sizes="(max-width: 992px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ Technique Accordion */}
        <FaqSection
          eyebrow={prestationsPage.faq.eyebrow}
          title={prestationsPage.faq.title}
          subtitle={prestationsPage.faq.subtitle}
          items={prestationsPage.faq.items}
          ctaLabel="Demander un devis pour votre véhicule"
          ctaHref="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
