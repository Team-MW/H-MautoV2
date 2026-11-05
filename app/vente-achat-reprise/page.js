import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Car, BadgeEuro, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import StepsSection from "@/components/StepsSection";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import FaqSection from "@/components/FaqSection";
import { siteConfig } from "@/lib/site";

const title = "Vente, Achat & Reprise Auto à Bergerac | HM Auto 24";
const description =
  "Achat de voitures d'occasion révisées et garanties, reprise immédiate de votre véhicule et recherche personnalisée à Bergerac avec HM Auto 24.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/vente-achat-reprise" },
  openGraph: { title, description, url: "/vente-achat-reprise" },
};

const ICONS = [Car, BadgeEuro, Search];

export default function VenteAchatReprisePage() {
  const { venteAchatPage, business, posterSection } = siteConfig;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow={venteAchatPage.hero.eyebrow}
          title={venteAchatPage.hero.title}
          subtitle={venteAchatPage.hero.subtitle}
          path="/vente-achat-reprise"
          crumb="Vente & Reprise"
        >
          <a href={`tel:${business.phoneSecondaryRaw}`} className="btn btn-primary">
            <span>Ligne Vente : {business.phoneSecondary}</span>
          </a>
          <Link href="/contact#formulaire" className="btn btn-outline-white">
            <span>Demander une estimation</span>
            <ArrowRight size={15} />
          </Link>
        </PageHero>

        {/* L'affiche officielle comme repère identitaire */}
        <section className="poster-strip">
          <div className="container">
            <div className="poster-frame-wrapper poster-frame-compact">
              <Image
                src={posterSection.image.src}
                alt={posterSection.image.alt}
                width={posterSection.image.width}
                height={posterSection.image.height}
                sizes="(max-width: 1148px) 100vw, 1100px"
                className="poster-image"
                priority
              />
            </div>
          </div>
        </section>

        {/* Les 3 piliers de la transaction automobile */}
        <section className="subpage-content-section">
          <div className="container">
            <div className="section-header-centered">
              <span className="eyebrow">NOTRE PÔLE TRANSACTION</span>
              <h2 className="heading-lg">ACHETER, VENDRE OU FAIRE RECHERCHER</h2>
            </div>

            <div className="feature-cards-grid">
              {venteAchatPage.sections.map((sec, idx) => {
                const Icon = ICONS[idx] ?? Car;
                return (
                  <div key={sec.title} className="feature-card feature-card-top">
                    <div>
                      <div className="feature-card-icon">
                        <Icon size={24} />
                      </div>
                      <h3 className="feature-card-title">{sec.title}</h3>
                      <p className="feature-card-desc">{sec.desc}</p>

                      <ul className="feature-card-points">
                        {sec.points.map((pt) => (
                          <li key={pt}>
                            <Check size={16} color="var(--color-primary)" strokeWidth={3} />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact#formulaire" className="btn btn-outline-dark btn-block">
                      <span>Faire une demande</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <StepsSection
          eyebrow={venteAchatPage.steps.eyebrow}
          title={venteAchatPage.steps.title}
          items={venteAchatPage.steps.items}
          tone="dark"
        />

        <section className="subpage-content-section">
          <div className="container">
            <CtaBand
              eyebrow="ESTIMATION & VENTE"
              title="Vous souhaitez vendre ou acheter un véhicule ?"
              text={venteAchatPage.formNotice}
              whatsappMessage="Bonjour HM Auto 24, je souhaite faire estimer mon véhicule pour une reprise."
            />
          </div>
        </section>

        <FaqSection
          eyebrow={venteAchatPage.faq.eyebrow}
          title={venteAchatPage.faq.title}
          subtitle={venteAchatPage.faq.subtitle}
          items={venteAchatPage.faq.items}
          ctaLabel="Demander une estimation"
          ctaHref="/contact#formulaire"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
