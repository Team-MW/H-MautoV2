import Image from "next/image";
import Link from "next/link";
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
                width={190}
                height={44}
              />
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: "1.6", maxWidth: "380px" }}>
              {footer.description}
            </p>
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
                  <Link href="#services">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas de page et mentions */}
        <div className="footer-bottom">
          <div>{footer.copyright}</div>
          <div style={{ color: "var(--color-text-muted-light)", fontSize: "0.75rem", maxWidth: "600px" }}>
            {footer.legalNotice}
          </div>
        </div>
      </div>
    </footer>
  );
}
