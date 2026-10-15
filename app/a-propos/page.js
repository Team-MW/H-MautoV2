import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Award, HeartHandshake, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "À Propos de l'Atelier HM Auto 24 | Garage Mécanique Bergerac",
  description: "Découvrez l'atelier HM Auto 24 à Bergerac : valeurs artisanales, rigueur technique, diagnostic immédiat et relation de confiance.",
};

export default function AProposPage() {
  const { aProposPage, business } = siteConfig;

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* En-tête */}
        <section className="subpage-hero">
          <div className="container">
            <div className="subpage-hero-centered">
              <span className="eyebrow">{aProposPage.hero.eyebrow}</span>
              <h1 className="heading-xl" style={{ color: "#ffffff" }}>
                {aProposPage.hero.title}
              </h1>
              <p className="subpage-lead">
                {aProposPage.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Histoire & Vision de l'atelier */}
        <section className="subpage-content-section">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "56px", alignItems: "center" }}>
              <div>
                <span className="eyebrow">SAVOIR-FAIRE & RIGUEUR</span>
                <h2 className="heading-lg" style={{ color: "var(--color-text-dark)", marginBottom: "20px" }}>
                  {aProposPage.story.title}
                </h2>
                <p style={{ fontSize: "1.02rem", color: "var(--color-text-dark)", lineHeight: "1.7", marginBottom: "16px" }}>
                  {aProposPage.story.p1}
                </p>
                <p style={{ fontSize: "0.98rem", color: "var(--color-text-muted-dark)", lineHeight: "1.7", marginBottom: "16px" }}>
                  {aProposPage.story.p2}
                </p>
                <p style={{ fontSize: "0.98rem", color: "var(--color-text-muted-dark)", lineHeight: "1.7", marginBottom: "28px" }}>
                  {aProposPage.story.p3}
                </p>

                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-primary">
                    <span>Prendre contact avec l'atelier</span>
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                  <a href={`tel:${business.phoneRaw}`} className="btn btn-outline-dark">
                    <Phone size={15} />
                    <span>{business.phone}</span>
                  </a>
                </div>
              </div>

              {/* Visuel atelier */}
              <div style={{ position: "relative", borderRadius: "var(--radius-sm)", overflow: "hidden", height: "460px", boxShadow: "var(--shadow-lg)" }}>
                <Image
                  src="/images/mechanic_lift.jpg"
                  alt="Mécanicien attentif chez HM Auto 24"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Engagements */}
        <WhyUs />

        {/* Preuve sociale Google */}
        <Reviews />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
