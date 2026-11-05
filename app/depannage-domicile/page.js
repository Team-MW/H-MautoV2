import Link from "next/link";
import { Phone, MessageSquare, MapPin, Zap, Wrench, ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import StepsSection from "@/components/StepsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { siteConfig } from "@/lib/site";

const title = "Dépannage & Pose de Batterie à Domicile à Bergerac | HM Auto 24";
const description =
  "Panne de batterie ou voiture immobilisée ? HM Auto 24 se déplace chez vous à Bergerac et aux alentours pour installer une batterie neuve et dépanner sans remorquage.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/depannage-domicile" },
  openGraph: { title, description, url: "/depannage-domicile" },
};

const ICONS = [Zap, Wrench, MapPin];

export default function DepannageDomicilePage() {
  const { depannagePage, business, reviews } = siteConfig;
  const testimonial = reviews.items[0];

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow={depannagePage.hero.eyebrow}
          title={depannagePage.hero.title}
          subtitle={depannagePage.hero.subtitle}
          path="/depannage-domicile"
          crumb="Dépannage à domicile"
        />

        {/* Bloc d'urgence d'appel direct */}
        <aside className="urgent-strip" aria-label="Assistance directe">
          <div className="container">
            <div className="urgent-strip-inner">
              <div>
                <span className="urgent-strip-label">
                  <span className="live-dot" aria-hidden="true" />
                  Assistance directe
                </span>
                <p className="urgent-strip-title">{depannagePage.urgentCallNotice}</p>
              </div>

              <div className="btn-row">
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
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp urgent</span>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Détails du service à domicile */}
        <section className="subpage-content-section">
          <div className="container">
            <div className="section-header-centered">
              <span className="eyebrow">CE QUE NOUS FAISONS SUR PLACE</span>
              <h2 className="heading-lg">ÉVITEZ LA DÉPANNEUSE</h2>
            </div>

            <div className="feature-cards-grid">
              {depannagePage.cards.map((card, idx) => {
                const Icon = ICONS[idx] ?? Zap;
                return (
                  <div key={card.title} className="feature-card feature-card-left">
                    <div className="feature-card-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="feature-card-title">{card.title}</h3>
                    <p className="feature-card-desc">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <StepsSection
          eyebrow={depannagePage.steps.eyebrow}
          title={depannagePage.steps.title}
          items={depannagePage.steps.items}
          tone="dark"
        />

        {/* Zone d'intervention + témoignage */}
        <section className="subpage-content-section">
          <div className="container">
            <div className="split-grid">
              <div>
                <span className="eyebrow">{depannagePage.zones.eyebrow}</span>
                <h2 className="heading-lg split-title">{depannagePage.zones.title}</h2>
                <p className="split-lead">{depannagePage.zones.lead}</p>
                <ul className="zone-chips">
                  {depannagePage.zones.cities.map((city) => (
                    <li key={city} className="zone-chip">
                      <MapPin size={13} />
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <figure className="testimonial-card">
                <div className="google-stars" aria-label="Note de 5 sur 5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="testimonial-quote">“{testimonial.comment}”</blockquote>
                <figcaption className="testimonial-meta">
                  <strong>{testimonial.author} • Bergerac</strong>
                  <span>{testimonial.vehicle}</span>
                </figcaption>
              </figure>
            </div>

            <div className="center-cta">
              <Link href="/contact#formulaire" className="btn btn-primary">
                <span>Planifier un dépannage</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        <FaqSection
          eyebrow={depannagePage.faq.eyebrow}
          title={depannagePage.faq.title}
          subtitle={depannagePage.faq.subtitle}
          items={depannagePage.faq.items}
          ctaLabel="Demander une intervention"
          ctaHref="/contact#formulaire"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
