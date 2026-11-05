import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Page introuvable | HM Auto 24",
  robots: { index: false },
};

export default function NotFound() {
  const { business, navbar } = siteConfig;

  return (
    <>
      <Navbar />
      <main id="main-content" className="not-found">
        <div className="container not-found-inner">
          <span className="not-found-code" aria-hidden="true">404</span>
          <span className="eyebrow">PAGE INTROUVABLE</span>
          <h1 className="heading-lg not-found-title">Cette page a pris une autre route</h1>
          <p className="subpage-lead">
            Le lien est peut-être erroné ou la page a été déplacée. Revenez à l'accueil ou appelez directement l'atelier.
          </p>
          <div className="btn-row btn-row-center">
            <Link href="/" className="btn btn-primary">
              <span>Retour à l'accueil</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <a href={`tel:${business.phoneRaw}`} className="btn btn-outline-white">
              <Phone size={15} color="var(--color-primary)" />
              <span>{business.phone}</span>
            </a>
          </div>
          <ul className="not-found-links">
            {navbar.navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
