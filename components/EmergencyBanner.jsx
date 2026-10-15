import { AlertCircle, Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function EmergencyBanner() {
  if (!siteConfig.sectionsVisibility.emergency) {
    return null;
  }

  const { emergency, business } = siteConfig;

  return (
    <aside className="emergency-banner" aria-label="Assistance atelier en cas d'urgence">
      <div className="container">
        <div className="emergency-wrapper">
          <div className="emergency-info">
            <div className="emergency-icon-wrap" aria-hidden="true">
              <AlertCircle size={22} color="var(--color-primary)" />
            </div>
            <div>
              <span className="eyebrow" style={{ marginBottom: "4px" }}>{emergency.eyebrow}</span>
              <h2 className="emergency-title">{emergency.title}</h2>
              <p className="emergency-desc">{emergency.description}</p>
              <small style={{ display: "block", color: "var(--color-primary)", marginTop: "4px", fontSize: "0.8rem", fontWeight: 700 }}>
                {emergency.scheduleNotice}
              </small>
            </div>
          </div>

          <div className="emergency-actions">
            <a
              href={`tel:${business.phoneRaw}`}
              className="btn btn-primary"
              aria-label={`Appeler la ligne 1 au ${business.phone}`}
            >
              <Phone size={16} strokeWidth={2.5} />
              <span>{business.phone}</span>
            </a>

            <a
              href={`tel:${business.phoneSecondaryRaw}`}
              className="btn btn-outline-white"
              aria-label={`Appeler la ligne 2 au ${business.phoneSecondary}`}
            >
              <Phone size={16} strokeWidth={2.5} color="var(--color-primary)" />
              <span>{business.phoneSecondary}</span>
            </a>

            <a
              href={`${business.whatsappLink}?text=${encodeURIComponent("Bonjour HM Auto 24, j'ai une urgence mécanique / voyant moteur.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
            >
              <MessageSquare size={16} />
              <span>{emergency.ctaWhatsappLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
