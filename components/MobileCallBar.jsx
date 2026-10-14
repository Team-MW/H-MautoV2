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
        aria-label={`Appeler le garage au ${business.phone}`}
      >
        <Phone size={15} strokeWidth={2.5} />
        <span>{mobileCallBar.callLabel}</span>
      </a>

      <a
        href={`${business.whatsappLink}?text=${encodeURIComponent("Bonjour HM AUTO, je souhaite prendre contact pour mon véhicule.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-btn-wa"
        aria-label="Envoyer un message WhatsApp au garage"
      >
        <MessageSquare size={15} strokeWidth={2.5} />
        <span>{mobileCallBar.whatsappLabel}</span>
      </a>

      <a
        href={mobileCallBar.appointmentHref}
        className="mobile-btn-rdv"
        aria-label="Accéder au formulaire de rendez-vous"
      >
        <Calendar size={15} strokeWidth={2.5} />
        <span>{mobileCallBar.appointmentLabel}</span>
      </a>
    </nav>
  );
}
