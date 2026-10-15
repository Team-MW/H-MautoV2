import { Phone, MessageSquare, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function MobileCallBar() {
  if (!siteConfig.sectionsVisibility.mobileCallBar) {
    return null;
  }

  const { mobileCallBar, business } = siteConfig;

  return (
    <nav className="mobile-call-bar" aria-label="Actions rapides mobiles">
      <a
        href={`tel:${business.phoneRaw}`}
        className="mobile-btn-call"
        aria-label={`Appeler la ligne 1 : ${business.phone}`}
        style={{ color: "#0d0f12", fontWeight: 900 }}
      >
        <Phone size={14} strokeWidth={2.5} />
        <span>07 83 23...</span>
      </a>

      <a
        href={`tel:${business.phoneSecondaryRaw}`}
        className="mobile-btn-call-secondary"
        aria-label={`Appeler la ligne 2 : ${business.phoneSecondary}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          fontSize: "0.74rem",
          fontWeight: 800,
          color: "#ffffff",
          backgroundColor: "var(--color-dark-surface)",
          border: "1px solid var(--color-dark-border)",
          padding: "8px 10px",
          borderRadius: "var(--radius-xs)",
          flex: 1,
        }}
      >
        <Phone size={14} strokeWidth={2.5} color="var(--color-primary)" />
        <span>07 80 54...</span>
      </a>

      <a
        href={`${business.whatsappLink}?text=${encodeURIComponent("Bonjour HM Auto 24, je souhaite prendre contact pour mon véhicule.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-btn-wa"
        aria-label="Envoyer un message WhatsApp au garage"
      >
        <MessageSquare size={14} strokeWidth={2.5} />
        <span>WhatsApp</span>
      </a>

      <a
        href={mobileCallBar.appointmentHref}
        className="mobile-btn-rdv"
        aria-label="Accéder au formulaire de rendez-vous"
      >
        <Calendar size={14} strokeWidth={2.5} />
        <span>RDV</span>
      </a>
    </nav>
  );
}
