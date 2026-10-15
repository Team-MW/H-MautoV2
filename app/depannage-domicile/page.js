import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, MapPin, Zap, Wrench, Shield, ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Dépannage & Pose de Batterie à Domicile à Bergerac | HM Auto 24",
  description: "Panne de batterie ou voiture immobilisée ? HM Auto 24 se déplace chez vous à Bergerac et aux alentours pour installer une batterie neuve et dépanner sans remorquage.",
};

export default function DepannageDomicilePage() {
  const { depannagePage, business, reviews } = siteConfig;

  const icons = [
    <Zap key="zap" size={26} color="var(--color-primary)" />,
    <Wrench key="wrench" size={26} color="var(--color-primary)" />,
    <MapPin key="pin" size={26} color="var(--color-primary)" />,
  ];

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* En-tête */}
        <section className="subpage-hero">
          <div className="container">
            <div className="subpage-hero-centered">
              <span className="eyebrow">{depannagePage.hero.eyebrow}</span>
              <h1 className="heading-xl" style={{ color: "#ffffff" }}>
                {depannagePage.hero.title}
              </h1>
              <p className="subpage-lead">
                {depannagePage.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Bloc d'urgence d'appel direct */}
        <section style={{ backgroundColor: "#14171d", padding: "28px 0", borderBottom: "1px solid var(--color-dark-border)" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
              <div>
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--color-primary)", textTransform: "uppercase" }}>
                  Assistance directe
                </span>
                <h3 style={{ color: "#ffffff", fontSize: "1.2rem", fontWeight: 900, marginTop: "2px" }}>
                  {depannagePage.urgentCallNotice}
                </h3>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href={`tel:${business.phoneRaw}`} className="btn btn-primary">
                  <Phone size={16} strokeWidth={2.5} />
                  <span>{business.phone}</span>
                </a>
                <a href={`tel:${business.phoneSecondaryRaw}`} className="btn btn-outline-white">
                  <Phone size={16} color="var(--color-primary)" />
                  <span>{business.phoneSecondary}</span>
                </a>
                <a
                  href={`${business.whatsappLink}?text=${encodeURIComponent("Bonjour HM Auto 24, je suis en panne de batterie à domicile.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white"
                  style={{ borderColor: "#25d366", color: "#25d366" }}
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Urgent</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Détails du service à domicile */}
        <section className="subpage-content-section">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px", marginBottom: "56px" }}>
              {depannagePage.cards.map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "var(--color-light-surface)",
                    border: "1px solid var(--color-light-border)",
                    borderLeft: "4px solid var(--color-primary)",
                    borderRadius: "var(--radius-xs)",
                    padding: "32px 24px",
                  }}
                >
                  <div style={{ marginBottom: "16px" }}>{icons[idx]}</div>
                  <h3 className="heading-md" style={{ color: "var(--color-text-dark)", marginBottom: "12px", fontSize: "1.2rem" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted-dark)", lineHeight: "1.6" }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Témoignage client réel */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--color-light-border)",
                borderRadius: "var(--radius-sm)",
                padding: "36px",
                maxWidth: "860px",
                margin: "0 auto",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "flex", gap: "4px", color: "#f59e0b", marginBottom: "12px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" strokeWidth={0} />
                ))}
              </div>
              <blockquote style={{ fontSize: "1.05rem", fontStyle: "italic", color: "var(--color-text-dark)", lineHeight: "1.6", marginBottom: "16px" }}>
                “{reviews.items[0].comment}”
              </blockquote>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem", color: "var(--color-text-muted-dark)" }}>
                <strong>{reviews.items[0].author} • Bergerac</strong>
                <span>{reviews.items[0].vehicle}</span>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "44px" }}>
              <Link href="/contact#formulaire" className="btn btn-primary">
                <span>Planifier un dépannage ou un changement de batterie</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Dépannage à Domicile */}
        <FaqSection
          eyebrow={depannagePage.faq.eyebrow}
          title={depannagePage.faq.title}
          subtitle={depannagePage.faq.subtitle}
          items={depannagePage.faq.items}
          ctaLabel="Demander une intervention d'urgence"
          ctaHref="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
