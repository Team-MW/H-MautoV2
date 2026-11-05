import Link from "next/link";
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
        className="mobile-btn mobile-btn-call"
        aria-label={`Appeler la ligne 1 : ${business.phone}`}
      >
        <Phone size={15} strokeWidth={2.5} />
        <span>{mobileCallBar.callLabel1}</span>
      </a>

      <a
        href={`tel:${business.phoneSecondaryRaw}`}
        className="mobile-btn mobile-btn-call-secondary"
        aria-label={`Appeler la ligne 2 : ${business.phoneSecondary}`}
      >
        <Phone size={15} strokeWidth={2.5} />
        <span>{mobileCallBar.callLabel2}</span>
      </a>

      <a
        href={`${business.whatsappLink}?text=${encodeURIComponent("Bonjour HM Auto 24, je souhaite prendre contact pour mon véhicule.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-btn mobile-btn-wa"
        aria-label="Envoyer un message WhatsApp au garage"
      >
        <MessageSquare size={15} strokeWidth={2.5} />
        <span>{mobileCallBar.whatsappLabel}</span>
      </a>

      <Link
        href={mobileCallBar.appointmentHref}
        className="mobile-btn mobile-btn-rdv"
        aria-label="Accéder au formulaire de rendez-vous"
      >
        <Calendar size={15} strokeWidth={2.5} />
        <span>RDV</span>
      </Link>
    </nav>
  );
}
