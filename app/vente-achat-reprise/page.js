import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Phone, Car, BadgeDollarSign, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import FaqSection from "@/components/FaqSection";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Vente, Achat & Reprise Auto à Bergerac | HM Auto 24",
  description: "Achat de voitures d'occasion révisées et garanties, reprise immédiate de votre véhicule et recherche personnalisée à Bergerac avec HM Auto 24.",
};

export default function VenteAchatReprisePage() {
  const { venteAchatPage, business, posterSection } = siteConfig;

  const icons = [
    <Car key="car" size={28} color="var(--color-primary)" />,
    <BadgeDollarSign key="dollar" size={28} color="var(--color-primary)" />,
    <Search key="search" size={28} color="var(--color-primary)" />,
  ];

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* En-tête de la page */}
        <section className="subpage-hero">
          <div className="container">
            <div className="subpage-hero-centered">
              <span className="eyebrow">{venteAchatPage.hero.eyebrow}</span>
              <h1 className="heading-xl" style={{ color: "#ffffff" }}>
                {venteAchatPage.hero.title}
              </h1>
              <p className="subpage-lead">
                {venteAchatPage.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        <EmergencyBanner />

        {/* L'affiche officielle comme repère identitaire */}
        <section style={{ backgroundColor: "var(--color-dark-bg)", padding: "40px 0" }}>
          <div className="container">
            <div className="poster-frame-wrapper" style={{ margin: "0 auto", maxWidth: "1100px" }}>
              <Image
                src={posterSection.image.src}
                alt={posterSection.image.alt}
                width={posterSection.image.width}
                height={posterSection.image.height}
                className="poster-image"
                priority
              />
            </div>
          </div>
        </section>

        {/* Les 3 piliers de la transaction automobile */}
        <section className="subpage-content-section">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
              {venteAchatPage.sections.map((sec, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "var(--color-light-surface)",
                    border: "1px solid var(--color-light-border)",
                    borderTop: "4px solid var(--color-primary)",
                    borderRadius: "var(--radius-xs)",
                    padding: "32px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ marginBottom: "16px" }}>{icons[idx]}</div>
                    <h2 className="heading-md" style={{ color: "var(--color-text-dark)", marginBottom: "12px", fontSize: "1.2rem" }}>
                      {sec.title}
                    </h2>
                    <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted-dark)", lineHeight: "1.6", marginBottom: "20px" }}>
                      {sec.desc}
                    </p>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                      {sec.points.map((pt, pIdx) => (
                        <li key={pIdx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", fontWeight: 600 }}>
                          <Check size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact#formulaire" className="btn btn-outline-dark" style={{ width: "100%" }}>
                    <span>Faire une demande</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>

            {/* Bandeau d'échange téléphonique direct */}
            <div
              style={{
                marginTop: "56px",
                backgroundColor: "var(--color-dark-bg)",
                color: "#ffffff",
                borderRadius: "var(--radius-sm)",
                padding: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "24px",
                border: "1px solid var(--color-dark-border)",
              }}
            >
              <div>
                <span className="eyebrow" style={{ marginBottom: "4px" }}>ESTIMATION & VENTE</span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 900, textTransform: "uppercase" }}>
                  Vous souhaitez vendre ou acheter un véhicule ?
                </h3>
                <p style={{ color: "var(--color-text-muted-light)", fontSize: "0.92rem", marginTop: "4px" }}>
                  {venteAchatPage.formNotice}
                </p>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href={`tel:${business.phoneRaw}`} className="btn btn-primary">
                  <Phone size={16} />
                  <span>{business.phone}</span>
                </a>
                <a href={`tel:${business.phoneSecondaryRaw}`} className="btn btn-outline-white">
                  <Phone size={16} color="var(--color-primary)" />
                  <span>{business.phoneSecondary}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Vente & Reprise */}
        <FaqSection
          eyebrow={venteAchatPage.faq.eyebrow}
          title={venteAchatPage.faq.title}
          subtitle={venteAchatPage.faq.subtitle}
          items={venteAchatPage.faq.items}
          ctaLabel="Demander une estimation de reprise"
          ctaHref="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
