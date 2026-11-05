import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { siteConfig } from "@/lib/site";

const title = "Mentions Légales & Confidentialité | HM Auto 24";
const description =
  "Mentions légales, éditeur du site et politique de confidentialité du garage HM Auto 24 à Bergerac.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/mentions-legales" },
  openGraph: { title, description, url: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  const { business } = siteConfig;

  const editorRows = [
    ["Nom commercial", business.name],
    ["Raison sociale", business.legalName],
    business.legalForm && ["Forme juridique", business.legalForm],
    business.siret && ["SIRET", business.siret],
    ["Adresse", business.address.full],
    ["Téléphones", `${business.phone} / ${business.phoneSecondary}`],
    ["Email", business.email],
    ["Directeur de la publication", business.manager],
  ].filter(Boolean);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="INFORMATIONS LÉGALES"
          title="MENTIONS LÉGALES"
          subtitle="Éditeur, hébergement, données personnelles et propriété intellectuelle."
          path="/mentions-legales"
          crumb="Mentions légales"
        />

        <section className="subpage-content-section">
          <div className="container legal-container">
            <article className="legal-content">
              <section>
                <h2>1. Éditeur du site</h2>
                <dl className="legal-dl">
                  {editorRows.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section>
                <h2>2. Hébergement</h2>
                <p>
                  Le site est hébergé par Vercel Inc., 340 S Lemon Ave #1142, Walnut, CA 91789, États-Unis
                  — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.
                </p>
              </section>

              <section>
                <h2>3. Protection des données personnelles (RGPD)</h2>
                <p>
                  Les informations recueillies via le formulaire de contact, par téléphone ou par WhatsApp
                  sont exclusivement destinées au traitement de votre demande de rendez-vous ou de devis par
                  l'atelier {business.name}. Elles ne sont ni cédées, ni louées, ni transmises à des tiers, et
                  sont conservées le temps nécessaire au suivi de votre demande.
                </p>
                <p>
                  Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d'un droit
                  d'accès, de rectification, d'opposition et de suppression des données vous concernant en
                  écrivant à <a href={`mailto:${business.email}`}>{business.email}</a>. Vous pouvez également
                  adresser une réclamation à la CNIL (cnil.fr).
                </p>
              </section>

              <section>
                <h2>4. Services tiers & cookies</h2>
                <p>
                  Ce site n'utilise pas de cookies publicitaires. Certaines pages intègrent des contenus de
                  services tiers (Google Maps pour le plan d'accès, TikTok pour les vidéos, Jotform pour le
                  formulaire de contact) susceptibles de déposer leurs propres cookies lorsque vous interagissez
                  avec eux, selon leurs politiques de confidentialité respectives.
                </p>
              </section>

              <section>
                <h2>5. Propriété intellectuelle</h2>
                <p>
                  L'ensemble des contenus graphiques, textes, photographies, logos et éléments visuels composant
                  ce site sont la propriété exclusive de {business.name} ou de leurs auteurs respectifs. Toute
                  reproduction sans autorisation préalable est interdite.
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
