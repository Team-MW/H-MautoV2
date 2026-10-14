"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { business, navbar } = siteConfig;

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="container">
        <div className="navbar-container">
          {/* Logo */}
          <Link href="#hero" className="navbar-logo" onClick={closeMenu}>
            <Image
              src={business.logo.src}
              alt={business.logo.alt}
              width={business.logo.width}
              height={business.logo.height}
              priority
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

          {/* Actions Droite */}
          <div className="navbar-actions">
            <a
              href={`tel:${business.phoneRaw}`}
              className="navbar-phone-link"
              aria-label={navbar.phoneButton.ariaLabel}
            >
              <Phone size={16} strokeWidth={2.5} color="var(--color-primary)" />
              <span>{business.phone}</span>
            </a>

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
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu tiroir mobile */}
      <div
        className={`mobile-drawer-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="mobile-drawer"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Image
                src={business.logo.src}
                alt={business.logo.alt}
                width={170}
                height={38}
              />
              <button
                type="button"
                onClick={closeMenu}
                aria-label={navbar.menuCloseLabel}
                style={{ color: "#ffffff", padding: "6px" }}
              >
                <X size={24} />
              </button>
            </div>

            <ul className="mobile-nav-links">
              {navbar.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href={`tel:${business.phoneRaw}`}
              className="btn btn-outline-white"
              style={{ width: "100%" }}
            >
              <Phone size={16} />
              <span>{business.phone}</span>
            </a>
            <Link
              href={navbar.ctaButton.href}
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={closeMenu}
            >
              <span>{navbar.ctaButton.label}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
