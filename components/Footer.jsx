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
          {/* Marque et présentation */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <Image
                src={business.logo.src}
                alt={business.logo.alt}
                width={200}
                height={46}
              />
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: "1.6", maxWidth: "380px", marginBottom: "16px" }}>
              {footer.description}
            </p>
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
