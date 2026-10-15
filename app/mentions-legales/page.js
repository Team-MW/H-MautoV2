import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Mentions Légales & Confidentialité | HM Auto 24",
  description: "Mentions légales, éditeur du site et politique de confidentialité du garage HM Auto 24 à Bergerac.",
};

export default function MentionsLegalesPage() {
  const { business } = siteConfig;

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ padding: "64px 0", backgroundColor: "#ffffff" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <h1 className="heading-lg" style={{ marginBottom: "28px" }}>
            MENTIONS LÉGALES
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "var(--color-text-muted-dark)", lineHeight: "1.7", fontSize: "0.95rem" }}>
            <section>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-text-dark)", marginBottom: "8px" }}>
                1. Éditeur du site
              </h2>
              <p>
                <strong>Nom commercial :</strong> {business.name}<br />
                <strong>Raison sociale :</strong> {business.legalName}<br />
                <strong>Adresse :</strong> {business.address.full}<br />
                <strong>Téléphones :</strong> {business.phone} / {business.phoneSecondary}<br />
                <strong>Email :</strong> {business.email}<br />
                <strong>Directeur de la publication :</strong> {business.manager}
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-text-dark)", marginBottom: "8px" }}>
                2. Hébergement
              </h2>
              <p>
                Le site est hébergé sur une infrastructure cloud haute performance sécurisée (Vercel Inc., 340 S Lemon Ave #1142 Walnut, CA 91789, USA).
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-text-dark)", marginBottom: "8px" }}>
                3. Protection des données personnelles (RGPD)
              </h2>
              <p>
                Les informations recueillies via le formulaire de contact ou par WhatsApp sont exclusivement destinées au traitement de votre demande de rendez-vous ou de devis par l'atelier HM Auto 24. Elles ne sont ni cédées, ni louées, ni transmises à des tiers. Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant en nous contactant directement à {business.email}.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-text-dark)", marginBottom: "8px" }}>
                4. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble des contenus graphiques, textes, photographies, logos et éléments sonores ou visuels composant ce site sont la propriété exclusive de {business.name} ou de leurs auteurs respectifs.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
