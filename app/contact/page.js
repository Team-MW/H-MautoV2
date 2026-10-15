import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import AppointmentForm from "@/components/AppointmentForm";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact, Devis & Rendez-vous | HM Auto 24 Bergerac",
  description: "Prenez rendez-vous chez HM Auto 24 à Bergerac au 07 83 23 28 35 ou 07 80 54 13 57. Devis gratuit et intervention rapide.",
};

export default function ContactPage() {
  const { business } = siteConfig;

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* En-tête de la page Contact */}
        <section className="subpage-hero">
          <div className="container">
            <div className="subpage-hero-centered">
              <span className="eyebrow">PRISE DE CONTACT DIRECTE</span>
              <h1 className="heading-xl" style={{ color: "#ffffff" }}>
                CONTACT & DEMANDE DE RENDEZ-VOUS
              </h1>
              <p className="subpage-lead">
                Besoin d'un diagnostic immédiat, d'une réparation ou d'un devis gratuit ? Contactez nos lignes ou transmettez votre demande en ligne.
              </p>
            </div>
          </div>
        </section>

        <EmergencyBanner />

        {/* Formulaire de demande */}
        <div id="formulaire">
          <AppointmentForm />
        </div>

        {/* Coordonnées complètes & Carte Google Maps */}
        <ContactLocation />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
