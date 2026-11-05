import { Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/site";

/**
 * Bandeau d'appel à l'action sombre : titre + les 2 lignes directes (+ WhatsApp optionnel).
 */
export default function CtaBand({
  eyebrow = "BESOIN D'UN DEVIS OU D'UN CONSEIL ?",
  title,
  text,
  whatsappMessage,
  whatsappLabel = "WhatsApp",
}) {
  const { business } = siteConfig;

  return (
    <div className="cta-band">
      <div className="cta-band-text">
        <span className="eyebrow">{eyebrow}</span>
        <h3 className="cta-band-title">{title}</h3>
        {text && <p className="cta-band-desc">{text}</p>}
      </div>

      <div className="cta-band-actions">
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
          <Phone size={16} color="var(--color-primary)" />
          <span>{business.phoneSecondary}</span>
        </a>
        {whatsappMessage && (
          <a
            href={`${business.whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageSquare size={16} />
            <span>{whatsappLabel}</span>
          </a>
        )}
      </div>
    </div>
  );
}
