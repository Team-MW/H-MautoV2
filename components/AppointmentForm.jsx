"use client";

import { useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

const JOTFORM_ID = "262933603424354";

export default function AppointmentForm() {
  if (!siteConfig.sectionsVisibility.appointment) {
    return null;
  }

  const { appointment, business } = siteConfig;
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    host.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.id = `JotFormIFrame-${JOTFORM_ID}`;
    iframe.title = "Formulaire de contact HM Auto 24";
    iframe.src = `https://form.jotform.com/${JOTFORM_ID}`;
    iframe.setAttribute("allowtransparency", "true");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("allow", "geolocation; microphone; camera");
    iframe.setAttribute("scrolling", "no");
    iframe.style.cssText = "min-width:100%;max-width:100%;height:980px;border:none;background:#ffffff;";
    host.appendChild(iframe);

    const handler = document.createElement("script");
    handler.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    handler.async = true;
    handler.onload = () => {
      if (typeof window.jotformEmbedHandler === "function") {
        window.jotformEmbedHandler(
          `iframe[id='JotFormIFrame-${JOTFORM_ID}']`,
          "https://form.jotform.com/"
        );
      }
    };
    document.body.appendChild(handler);

    return () => {
      handler.remove();
      host.innerHTML = "";
    };
  }, []);

  return (
    <section id="rendez-vous" className="appointment-section">
      <div className="container">
        <div className="section-header-centered">
          <span className="eyebrow">{appointment.eyebrow}</span>
          <h2 className="heading-lg" style={{ color: "var(--color-text-dark)" }}>
            {appointment.title}
          </h2>
          <p className="section-description" style={{ marginLeft: "auto", marginRight: "auto" }}>
            {appointment.description}
          </p>
        </div>

        <div className="appointment-card jotform-card">
          <div ref={hostRef} className="jotform-embed" />

          <div className="jotform-phones">
            <span>{appointment.phoneAlternative.text}</span>
            <div className="jotform-phone-buttons">
              <a href={`tel:${business.phoneRaw}`}>
                <Phone size={14} color="var(--color-primary)" />
                <span>Ligne 1 : {business.phone}</span>
              </a>
              <a href={`tel:${business.phoneSecondaryRaw}`}>
                <Phone size={14} color="var(--color-primary)" />
                <span>Ligne 2 : {business.phoneSecondary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
