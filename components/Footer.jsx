import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const { footer, business, navbar, services } = siteConfig;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Marque et présentatioddedn */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <Image
                src={business.logo.src}
                alt={business.logo.alt}
                width={business.logo.width}
                height={business.logo.height}
                style={{ width: "auto", height: "44px", objectFit: "contain", display: "block" }}
              />
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: "1.6", maxWidth: "380px", marginBottom: "16px" }}>
              {footer.description}
            </p>
            <a
              href={business.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-tiktok-link"
              aria-label={`Suivre ${business.name} sur TikTok ${business.tiktokHandle}`}
            >
              <span className="footer-tiktok-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" fill="#25F4EE" transform="translate(1.15 0.55)" />
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" fill="#FE2C55" transform="translate(-1.05 -0.45)" />
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" fill="#ffffff" />
                </svg>
              </span>
              <span>TikTok {business.tiktokHandle}</span>
            </a>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.85rem" }}>
              <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin size={15} color="var(--color-primary)" />
                <span>{business.address.full}</span>
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Phone size={15} color="var(--color-primary)" />
                <span>Ligne 1 : <a href={`tel:${business.phoneRaw}`} style={{ color: "#ffffff", fontWeight: 700 }}>{business.phone}</a></span>
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Phone size={15} color="var(--color-primary)" />
                <span>Ligne 2 : <a href={`tel:${business.phoneSecondaryRaw}`} style={{ color: "#ffffff", fontWeight: 700 }}>{business.phoneSecondary}</a></span>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="footer-nav-title">{footer.quickLinksTitle}</h4>
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
            <h4 className="footer-nav-title">{footer.servicesTitle}</h4>
            <ul className="footer-nav-list">
              {services.items.map((item) => (
                <li key={item.id}>
                  <Link href="/prestations">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas de page et mentions */}
        <div className="footer-bottom">
          <div>{footer.copyright}</div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/mentions-legales" style={{ textDecoration: "underline", color: "var(--color-text-muted-light)" }}>
              Mentions Légales &amp; RGPD
            </Link>
            <span style={{ color: "var(--color-text-muted-light)", fontSize: "0.75rem", maxWidth: "600px" }}>
              {footer.legalNotice}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
