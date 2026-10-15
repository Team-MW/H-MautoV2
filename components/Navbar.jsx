"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight, ChevronRight, Clock, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            {/* Logo avec dimensionnement fluide */}
            <Link
              href="#hero"
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
            <nav aria-label="Navigation principale">
              <ul className="navbar-nav">
                {navbar.navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions Droite avec les 2 numéros */}
            <div className="navbar-actions">
              <div className="navbar-phones-wrap" style={{ display: "flex", gap: "6px" }}>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="navbar-phone-link"
                  aria-label={`Appeler la ligne 1 : ${business.phone}`}
                  title="Ligne 1 HM Auto 24"
                >
                  <Phone size={15} strokeWidth={2.5} color="var(--color-primary)" />
                  <span className="navbar-phone-text">{business.phone}</span>
                </a>

                <a
                  href={`tel:${business.phoneSecondaryRaw}`}
                  className="navbar-phone-link navbar-phone-secondary"
                  aria-label={`Appeler la ligne 2 : ${business.phoneSecondary}`}
                  title="Ligne 2 HM Auto 24"
                >
                  <Phone size={15} strokeWidth={2.5} color="var(--color-primary)" />
                  <span className="navbar-phone-text">{business.phoneSecondary}</span>
                </a>
              </div>

              <Link href={navbar.ctaButton.href} className="btn btn-primary navbar-cta-desktop">
                <span>{navbar.ctaButton.label}</span>
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>

              {/* Bouton burger mobile */}
              <button
                type="button"
                className="navbar-burger"
                onClick={toggleMenu}
                aria-label={isMobileMenuOpen ? navbar.menuCloseLabel : navbar.menuOpenLabel}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu tiroir mobile - Rendu HORS du header pour un affichage plein écran garanti */}
      <div
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
              <Image
                src={business.logo.src}
                alt={business.logo.alt}
                width={150}
                height={34}
                className="mobile-drawer-logo"
              />
              <button
                type="button"
                onClick={closeMenu}
                aria-label={navbar.menuCloseLabel}
                className="mobile-drawer-close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Liens de navigation avec icône chevron et zone tactile optimale */}
            <ul className="mobile-nav-links">
              {navbar.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={closeMenu}>
                    <span>{link.label}</span>
                    <ChevronRight size={16} color="var(--color-primary)" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bas du tiroir : Les 2 numéros d'appel & Actions */}
          <div className="mobile-drawer-footer">
            <div className="mobile-drawer-info">
              <p className="mobile-drawer-info-item">
                <MapPin size={15} color="var(--color-primary)" />
                <span>{business.address.city} (24)</span>
              </p>
              <p className="mobile-drawer-info-item">
                <Clock size={15} color="var(--color-primary)" />
                <span>{business.hoursSummary}</span>
              </p>
            </div>

            {/* Deux boutons d'appel direct dans le tiroir mobile */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a
                href={`tel:${business.phoneRaw}`}
                className="btn btn-outline-white"
                style={{ width: "100%", padding: "10px 14px", fontSize: "0.82rem" }}
              >
                <Phone size={15} color="var(--color-primary)" />
                <span>Ligne 1 : {business.phone}</span>
              </a>

              <a
                href={`tel:${business.phoneSecondaryRaw}`}
                className="btn btn-outline-white"
                style={{ width: "100%", padding: "10px 14px", fontSize: "0.82rem" }}
              >
                <Phone size={15} color="var(--color-primary)" />
                <span>Ligne 2 : {business.phoneSecondary}</span>
              </a>

              <Link
                href={navbar.ctaButton.href}
                className="btn btn-primary"
                style={{ width: "100%", padding: "12px", marginTop: "4px" }}
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
