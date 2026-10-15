import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function ContactLocation() {
  if (!siteConfig.sectionsVisibility.contactLocation) {
    return null;
  }

  const { contactLocation, business } = siteConfig;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{contactLocation.eyebrow}</span>
          <h2 className="heading-lg" style={{ color: "#ffffff" }}>
            {contactLocation.title}
          </h2>
          <p className="section-description" style={{ color: "var(--color-text-muted-light)" }}>
            {contactLocation.description}
          </p>
        </div>

        <div className="contact-grid">
          {/* Détails de contact et horaires */}
          <div className="contact-details">
            {/* Adresse */}
            <div className="contact-block">
              <h3 className="contact-block-title">{contactLocation.addressTitle}</h3>
              <p style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "1rem" }}>
                <MapPin size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>{business.address.full}</span>
              </p>
              <div style={{ marginTop: "6px" }}>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white"
                  style={{ padding: "9px 18px", fontSize: "0.78rem" }}
                >
                  <Navigation size={15} />
                  <span>{contactLocation.itineraryButtonLabel}</span>
                </a>
              </div>
            </div>

            {/* Coordonnées directes (Les 2 numéros affichés) */}
            <div className="contact-block">
              <h3 className="contact-block-title">{contactLocation.contactTitle}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a
                  href={`tel:${business.phoneRaw}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "#ffffff",
                  }}
                  title="Ligne 1"
                >
                  <Phone size={18} color="var(--color-primary)" />
                  <span>Ligne 1 : {business.phone}</span>
                </a>

                <a
                  href={`tel:${business.phoneSecondaryRaw}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "#ffffff",
                  }}
                  title="Ligne 2"
                >
                  <Phone size={18} color="var(--color-primary)" />
                  <span>Ligne 2 : {business.phoneSecondary}</span>
                </a>

                <a
                  href={`mailto:${business.email}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.92rem",
                    color: "var(--color-text-muted-light)",
                  }}
                >
                  <Mail size={16} color="var(--color-primary)" />
                  <span>{business.email}</span>
                </a>
              </div>
            </div>

            {/* Horaires d'ouverture */}
            <div className="contact-block">
              <h3 className="contact-block-title" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Clock size={16} color="var(--color-primary)" />
                <span>{contactLocation.hoursTitle}</span>
              </h3>
              <ul className="contact-hours-list">
                {business.hours.map((item, idx) => (
                  <li key={idx} className="contact-hours-item">
                    <span>{item.days}</span>
                    <strong style={{ color: item.open ? "#ffffff" : "#ef4444" }}>
                      {item.hours}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Carte Google Maps avec chargement différé (Lazy loading) */}
          <div className="contact-map-wrapper">
            <iframe
              src={business.googleMapsEmbedUrl}
              className="contact-map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={contactLocation.mapAriaLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
