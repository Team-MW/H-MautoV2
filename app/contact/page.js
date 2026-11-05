import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import AppointmentForm from "@/components/AppointmentForm";
import ContactLocation from "@/components/ContactLocation";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { siteConfig } from "@/lib/site";
import OpenStatus from "@/components/OpenStatus";

const title = "Contact, Devis & Rendez-vous | HM Auto 24 Bergerac";
const description =
  "Prenez rendez-vous chez HM Auto 24 à Bergerac au 07 83 23 28 35 ou 07 80 54 13 57. Devis gratuit et intervention rapide.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
};

export default function ContactPage() {
  const { business, contactFaq } = siteConfig;

  const quickContacts = [
    {
      icon: Phone,
      label: "Ligne 1 • Atelier & dépannage",
      value: business.phone,
      href: `tel:${business.phoneRaw}`,
      highlight: true,
    },
    {
      icon: Phone,
      label: "Ligne 2 • Vente & reprise",
      value: business.phoneSecondary,
      href: `tel:${business.phoneSecondaryRaw}`,
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "Envoyer un message",
      href: `${business.whatsappLink}?text=${encodeURIComponent("Bonjour HM Auto 24, je souhaite prendre contact pour mon véhicule.")}`,
      external: true,
    },
    {
      icon: MapPin,
      label: "Adresse de l'atelier",
      value: business.address.full,
      href: business.googleMapsUrl,
      external: true,
    },
  ];

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="PRISE DE CONTACT DIRECTE"
          title="CONTACT & DEMANDE DE RENDEZ-VOUS"
          subtitle="Besoin d'un diagnostic immédiat, d'une réparation ou d'un devis gratuit ? Appelez-nous directement ou envoyez votre demande en ligne."
          path="/contact"
          crumb="Contact"
        />

        {/* Accès rapides */}
        <section className="quick-contact-section" aria-label="Coordonnées rapides">
          <div className="container">
            <div className="quick-contact-grid">
              {quickContacts.map(({ icon: Icon, label, value, href, external, highlight }) => (
                <a
                  key={label}
                  href={href}
                  className={`quick-contact-card ${highlight ? "is-highlight" : ""}`}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="quick-contact-icon">
                    <Icon size={18} />
                  </span>
                  <span className="quick-contact-text">
                    <span className="quick-contact-label">{label}</span>
                    <span className="quick-contact-value">{value}</span>
                  </span>
                </a>
              ))}
            </div>
            <div className="quick-contact-hours">
              <OpenStatus tone="light" />
              <span className="quick-contact-hours-text">
                <Clock size={14} color="var(--color-primary)" />
                <span>{business.hoursSummary}</span>
              </span>
            </div>
          </div>
        </section>

        <div id="formulaire" className="anchor-target">
          <AppointmentForm />
        </div>

        <ContactLocation />

        <FaqSection
          eyebrow={contactFaq.eyebrow}
          title={contactFaq.title}
          subtitle={contactFaq.subtitle}
          items={contactFaq.items}
          ctaLabel="Appeler l'atelier"
          ctaHref={`tel:${business.phoneRaw}`}
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
