import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site";

const TIKTOK_PATH =
  "M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z";

export default function Footer() {
  const { footer, business, navbar, services } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Marque et présentation */}
          <div>
            <Link href="/" className="footer-logo" aria-label={`${business.name} - Accueil`}>
              <Image
                src={business.logo.src}
                alt={business.logo.alt}
                width={business.logo.width}
                height={business.logo.height}
                sizes="160px"
              />
            </Link>
            <p className="footer-desc">{footer.description}</p>
            <a
              href={business.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-tiktok-link"
              aria-label={`Suivre ${business.name} sur TikTok ${business.tiktokHandle}`}
            >
              <span className="footer-tiktok-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={TIKTOK_PATH} fill="#25F4EE" transform="translate(1.15 0.55)" />
                  <path d={TIKTOK_PATH} fill="#FE2C55" transform="translate(-1.05 -0.45)" />
                  <path d={TIKTOK_PATH} fill="#ffffff" />
                </svg>
              </span>
              <span>TikTok {business.tiktokHandle}</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="footer-nav-title">{footer.quickLinksTitle}</h2>
            <ul className="footer-nav-list">
              {navbar.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Prestations */}
          <div>
            <h2 className="footer-nav-title">{footer.servicesTitle}</h2>
            <ul className="footer-nav-list">
              {services.items.map((item) => (
                <li key={item.id}>
                  <Link href={item.href ?? "/prestations"}>{item.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/vente-achat-reprise">VENTE • ACHAT • REPRISE</Link>
              </li>
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h2 className="footer-nav-title">{footer.contactTitle}</h2>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={15} color="var(--color-primary)" />
                <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  {business.address.full}
                </a>
              </li>
              <li>
                <Phone size={15} color="var(--color-primary)" />
                <span>
                  Ligne 1 : <a href={`tel:${business.phoneRaw}`} className="footer-strong">{business.phone}</a>
                </span>
              </li>
              <li>
                <Phone size={15} color="var(--color-primary)" />
                <span>
                  Ligne 2 : <a href={`tel:${business.phoneSecondaryRaw}`} className="footer-strong">{business.phoneSecondary}</a>
                </span>
              </li>
              <li>
                <Mail size={15} color="var(--color-primary)" />
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
              <li>
                <Clock size={15} color="var(--color-primary)" />
                <span>
                  {business.hours.map((h) => (
                    <span key={h.days} className="footer-hours-line">
                      {h.days} : {h.hours}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {year} {business.name}. Tous droits réservés.</div>
          <div className="footer-bottom-links">
            <Link href="/mentions-legales">Mentions légales &amp; RGPD</Link>
            <span className="footer-bottom-note">{footer.legalNotice}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
