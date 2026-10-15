"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight, ChevronRight, Clock, MapPin, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { business, navbar } = siteConfig;

  // Verrouille le défilement en arrière-plan lorsque le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Ferme le tiroir sur appui de la touche Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="navbar-header">
        <div className="container">
          <div className="navbar-container">
            {/* Logo officiel HM Auto 24 */}
            <Link
              href="/"
              className="navbar-logo"
              onClick={closeMenu}
              aria-label={`${business.name} - Retour à l'accueil`}
            >
              <Image
                src={business.logo.src}
                alt={business.logo.alt}
                width={business.logo.width}
                height={business.logo.height}
                priority
                className="navbar-logo-img"
              />
            </Link>

            {/* Navigation Desktop */}
            <nav aria-label="Navigation principale" className="navbar-nav-wrap">
              <ul className="navbar-nav">
                {navbar.navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={isActive ? "active" : ""}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Actions Droite (Épurée & Aérée) */}
            <div className="navbar-actions">
              {/* Numéro direct compact */}
              <a
                href={`tel:${business.phoneRaw}`}
                className="navbar-phone-pill"
                aria-label={`Appeler l'atelier : ${business.phone}`}
                title="Ligne directe HM Auto 24"
              >
                <Phone size={14} strokeWidth={2.5} color="var(--color-primary)" />
                <span className="navbar-phone-text">{business.phone}</span>
              </a>

              {/* Bouton RDV Desktop */}
              <Link href={navbar.ctaButton.href} className="btn btn-primary navbar-cta-desktop">
                <span>{navbar.ctaButton.label}</span>
              </Link>

              {/* Bouton burger mobile responsive */}
              <button
                type="button"
                className={`navbar-burger ${isMobileMenuOpen ? "is-active" : ""}`}
                onClick={toggleMenu}
                aria-label={isMobileMenuOpen ? navbar.menuCloseLabel : navbar.menuOpenLabel}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-drawer-menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu tiroir mobile */}
      <div
        id="mobile-drawer-menu"
        className={`mobile-drawer-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="mobile-drawer"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Haut du tiroir */}
          <div>
            <div className="mobile-drawer-header">
              <Link href="/" onClick={closeMenu} className="mobile-drawer-logo-link">
                <Image
                  src={business.logo.src}
                  alt={business.logo.alt}
                  width={business.logo.width}
                  height={business.logo.height}
                  className="mobile-drawer-logo"
                />
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                aria-label={navbar.menuCloseLabel}
                className="mobile-drawer-close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Liens de navigation avec icône chevron et état actif */}
            <ul className="mobile-nav-links">
              {navbar.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={isActive ? "active" : ""}
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={18} className="mobile-nav-chevron" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Bas du tiroir : Coordonnées & Les 2 numéros d'appel */}
          <div className="mobile-drawer-footer">
            <div className="mobile-drawer-info">
              <p className="mobile-drawer-info-item">
                <MapPin size={15} color="var(--color-primary)" />
                <span>{business.address.street}, {business.address.city}</span>
              </p>
              <p className="mobile-drawer-info-item">
                <Clock size={15} color="var(--color-primary)" />
                <span>{business.hoursSummary}</span>
              </p>
            </div>

            {/* Boutons d'appel direct dans le tiroir mobile */}
            <div className="mobile-drawer-actions">
              <a
                href={`tel:${business.phoneRaw}`}
                className="btn btn-outline-white mobile-drawer-call-btn"
              >
                <div className="mobile-call-icon">
                  <Phone size={15} />
                </div>
                <div className="mobile-call-text">
                  <span className="mobile-call-sub">Ligne 1 • Atelier & Dépannage</span>
                  <span className="mobile-call-num">{business.phone}</span>
                </div>
              </a>

              <a
                href={`tel:${business.phoneSecondaryRaw}`}
                className="btn btn-outline-white mobile-drawer-call-btn"
              >
                <div className="mobile-call-icon">
                  <Phone size={15} />
                </div>
                <div className="mobile-call-text">
                  <span className="mobile-call-sub">Ligne 2 • Vente & Reprise</span>
                  <span className="mobile-call-num">{business.phoneSecondary}</span>
                </div>
              </a>

              <Link
                href={navbar.ctaButton.href}
                className="btn btn-primary mobile-drawer-cta-btn"
                onClick={closeMenu}
              >
                <span>{navbar.ctaButton.label}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
