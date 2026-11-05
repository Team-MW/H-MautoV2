import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import WhyUs from "@/components/WhyUs";
import DiscoverTikTok from "@/components/DiscoverTikTok";
import Reviews from "@/components/Reviews";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { siteConfig } from "@/lib/site";

const title = "À Propos de l'Atelier HM Auto 24 | Garage Mécanique Bergerac";
const description =
  "Découvrez l'atelier HM Auto 24 à Bergerac : valeurs artisanales, rigueur technique, diagnostic immédiat et relation de confiance.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/a-propos" },
  openGraph: { title, description, url: "/a-propos" },
};

export default function AProposPage() {
  const { aProposPage, business } = siteConfig;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow={aProposPage.hero.eyebrow}
          title={aProposPage.hero.title}
          subtitle={aProposPage.hero.subtitle}
          path="/a-propos"
          crumb="À propos"
        />

        {/* Chiffres clés */}
        <section className="stats-strip" aria-label="Chiffres clés">
          <div className="container">
            <dl className="stats-grid">
              {aProposPage.stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <dt className="stat-label">{stat.label}</dt>
                  <dd className="stat-value">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Histoire & Vision de l'atelier */}
        <section className="subpage-content-section">
          <div className="container">
            <div className="story-grid">
              <div>
                <span className="eyebrow">SAVOIR-FAIRE & RIGUEUR</span>
                <h2 className="heading-lg split-title">{aProposPage.story.title}</h2>
                <p className="story-p story-p-lead">{aProposPage.story.p1}</p>
                <p className="story-p">{aProposPage.story.p2}</p>
                <p className="story-p">{aProposPage.story.p3}</p>

                <div className="btn-row" style={{ marginTop: "28px" }}>
                  <Link href="/contact" className="btn btn-primary">
                    <span>Contacter l'atelier</span>
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                  <a href={`tel:${business.phoneRaw}`} className="btn btn-outline-dark">
                    <Phone size={15} />
                    <span>{business.phone}</span>
                  </a>
                </div>
              </div>

              <div className="story-visual">
                <Image
                  src="/images/mechanic_lift.jpg"
                  alt="Mécanicien au travail chez HM Auto 24 à Bergerac"
                  fill
                  sizes="(max-width: 992px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="story-visual-caption">
                  <strong>{business.name}</strong>
                  <span>{business.address.full}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyUs showImage={false} />
        <DiscoverTikTok />
        <Reviews />

        <FaqSection
          eyebrow={aProposPage.faq.eyebrow}
          title={aProposPage.faq.title}
          subtitle={aProposPage.faq.subtitle}
          items={aProposPage.faq.items}
          ctaLabel="Contacter notre équipe"
          ctaHref="/contact"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
