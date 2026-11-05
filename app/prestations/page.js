import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import EmergencyBanner from "@/components/EmergencyBanner";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import FaqSection from "@/components/FaqSection";
import { siteConfig } from "@/lib/site";

const title = "Prestations & Mécanique à Bergerac | HM Auto 24";
const description =
  "Diagnostic électronique immédiat, mécanique générale, vidange constructeur, freinage et suspension à Bergerac. Devis transparent sans surprise.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/prestations" },
  openGraph: { title, description, url: "/prestations" },
};

export default function PrestationsPage() {
  const { prestationsPage, business } = siteConfig;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow={prestationsPage.hero.eyebrow}
          title={prestationsPage.hero.title}
          subtitle={prestationsPage.hero.subtitle}
          path="/prestations"
          crumb="Prestations"
        />

        <EmergencyBanner />

        {/* Sommaire des prestations */}
        <nav className="page-toc" aria-label="Sommaire des prestations">
          <div className="container">
            <ul className="page-toc-list">
              {prestationsPage.sections.map((sec) => (
                <li key={sec.id}>
                  <a href={`#${sec.id}`}>
                    <span className="page-toc-num">{sec.number}</span>
                    <span>{sec.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Détail complet de chaque prestation */}
        <section className="subpage-content-section subpage-content-tight">
          <div className="container">
            {prestationsPage.sections.map((sec, idx) => (
              <article
                key={sec.id}
                id={sec.id}
                className={`service-detail-block ${idx % 2 !== 0 ? "reverse" : ""}`}
              >
                <div className="service-detail-text">
                  <span className="service-detail-number">{sec.number}</span>
                  <h2 className="heading-md">{sec.title}</h2>
                  <p className="service-detail-lead">{sec.lead}</p>
                  <p className="service-detail-desc">{sec.content}</p>

                  <ul className="service-detail-points">
                    {sec.points.map((pt) => (
                      <li key={pt} className="service-detail-point-item">
                        <span className="check-dot" aria-hidden="true">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="btn-row">
                    <Link href="/contact#formulaire" className="btn btn-primary">
                      <span>Demander un devis</span>
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </Link>
                    <a href={`tel:${business.phoneRaw}`} className="btn btn-outline-dark">
                      <Phone size={15} />
                      <span>{business.phone}</span>
                    </a>
                  </div>
                </div>

                <div className="service-detail-media">
                  <div className="service-detail-image-wrap">
                    <Image
                      src={sec.image}
                      alt={sec.title}
                      fill
                      sizes="(max-width: 992px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                    <span className="service-detail-badge">{sec.number}</span>
                  </div>
                </div>
              </article>
            ))}

            <CtaBand
              title="Une panne ou un entretien à prévoir ?"
              text="Devis gratuit et sans engagement, aucun travail engagé sans votre accord."
              whatsappMessage="Bonjour HM Auto 24, je souhaite un devis pour mon véhicule."
            />
          </div>
        </section>

        <FaqSection
          eyebrow={prestationsPage.faq.eyebrow}
          title={prestationsPage.faq.title}
          subtitle={prestationsPage.faq.subtitle}
          items={prestationsPage.faq.items}
          ctaLabel="Demander un devis"
          ctaHref="/contact#formulaire"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
