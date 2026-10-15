"use client";

import { useState } from "react";
import { Send, Phone, MessageSquare, Check, AlertCircle, Copy } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function AppointmentForm() {
  if (!siteConfig.sectionsVisibility.appointment) {
    return null;
  }

  const { appointment, business } = siteConfig;

  const [formData, setFormData] = useState({
    service: "revision",
    vehicle: "",
    date: "",
    slot: "matin",
    name: "",
    phone: "",
    comments: "",
  });

  const [error, setError] = useState("");
  const [preparedSummary, setPreparedSummary] = useState(null);
  const [copied, setCopied] = useState(false);

  // Date minimale : aujourd'hui
  const todayStr = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.service || !formData.vehicle.trim() || !formData.date || !formData.name.trim() || !formData.phone.trim()) {
      setError(appointment.messages.errorRequired);
      return;
    }

    const selectedServiceObj = appointment.fields.service.options.find(
      (opt) => opt.value === formData.service
    );
    const serviceLabel = selectedServiceObj ? selectedServiceObj.label : formData.service;

    const selectedSlotObj = appointment.fields.slot.options.find(
      (opt) => opt.value === formData.slot
    );
    const slotLabel = selectedSlotObj ? selectedSlotObj.label : formData.slot;

    // Construction du texte clair pour WhatsApp
    const messageLines = [
      `*DEMANDE DE RENDEZ-VOUS - ${business.name}*`,
      `• *Client :* ${formData.name}`,
      `• *Téléphone :* ${formData.phone}`,
      `• *Véhicule :* ${formData.vehicle}`,
      `• *Prestation :* ${serviceLabel}`,
      `• *Date souhaitée :* ${formData.date}`,
      `• *Créneau préféré :* ${slotLabel}`,
    ];

    if (formData.comments.trim()) {
      messageLines.push(`• *Précisions :* ${formData.comments.trim()}`);
    }

    messageLines.push("");
    messageLines.push(`_(Demande envoyée depuis le site vitrine ${business.name})_`);

    const fullMessage = messageLines.join("\n");
    const waUrl = `${business.whatsappLink}?text=${encodeURIComponent(fullMessage)}`;

    setPreparedSummary({
      text: fullMessage,
      url: waUrl,
    });
  };

  const handleCopy = () => {
    if (preparedSummary) {
      navigator.clipboard.writeText(preparedSummary.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

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

        <div className="appointment-card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              {/* Choix de la prestation */}
              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  {appointment.fields.service.label} *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  {appointment.fields.service.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Véhicule */}
              <div className="form-group">
                <label htmlFor="vehicle" className="form-label">
                  {appointment.fields.vehicle.label} *
                </label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder={appointment.fields.vehicle.placeholder}
                  className="form-input"
                  required
                />
              </div>

              {/* Date souhaitée */}
              <div className="form-group">
                <label htmlFor="date" className="form-label">
                  {appointment.fields.date.label} *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  min={todayStr}
                  value={formData.date}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              {/* Créneau */}
              <div className="form-group">
                <label htmlFor="slot" className="form-label">
                  {appointment.fields.slot.label} *
                </label>
                <select
                  id="slot"
                  name="slot"
                  value={formData.slot}
                  onChange={handleChange}
                  className="form-select"
                >
                  {appointment.fields.slot.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Nom & Prénom */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {appointment.fields.name.label} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={appointment.fields.name.placeholder}
                  className="form-input"
                  required
                />
              </div>

              {/* Téléphone */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  {appointment.fields.phone.label} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={appointment.fields.phone.placeholder}
                  className="form-input"
                  required
                />
              </div>

              {/* Précisions / Commentaires */}
              <div className="form-group form-field-full">
                <label htmlFor="comments" className="form-label">
                  {appointment.fields.comments.label}
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={3}
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder={appointment.fields.comments.placeholder}
                  className="form-textarea"
                />
              </div>
            </div>

            {/* Note d'honnêteté sur les disponibilités */}
            <div className="form-notice">
              {appointment.notice}
            </div>

            {/* Affichage d'erreur éventuelle */}
            {error && (
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#dc2626",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            {/* Bouton de soumission */}
            <div className="form-actions">
              <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "14px" }}>
                <MessageSquare size={18} strokeWidth={2.5} />
                <span>{appointment.submitButton.label}</span>
              </button>

              {/* Alternative téléphonique avec les 2 numéros */}
              <div style={{ textAlign: "center", marginTop: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted-dark)" }}>
                  {appointment.phoneAlternative.text}
                </span>
                <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    style={{
                      color: "var(--color-text-dark)",
                      fontWeight: 800,
                      fontSize: "0.88rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "var(--color-light-surface)",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      border: "1px solid var(--color-light-border)",
                    }}
                  >
                    <Phone size={14} color="var(--color-primary)" />
                    <span>Ligne 1 : {business.phone}</span>
                  </a>

                  <a
                    href={`tel:${business.phoneSecondaryRaw}`}
                    style={{
                      color: "var(--color-text-dark)",
                      fontWeight: 800,
                      fontSize: "0.88rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "var(--color-light-surface)",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      border: "1px solid var(--color-light-border)",
                    }}
                  >
                    <Phone size={14} color="var(--color-primary)" />
                    <span>Ligne 2 : {business.phoneSecondary}</span>
                  </a>
                </div>
              </div>
            </div>
          </form>

          {/* Panneau de confirmation de préparation sans simulation mensongère */}
          {preparedSummary && (
            <div className="form-success-box" role="alert">
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
                <Check size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <strong style={{ fontSize: "0.95rem" }}>{appointment.messages.preparedSuccess}</strong>
                </div>
              </div>

              {/* Prévisualisation du message */}
              <pre
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #dcfce7",
                  borderRadius: "4px",
                  padding: "12px",
                  fontSize: "0.82rem",
                  color: "#1f2937",
                  whiteSpace: "pre-wrap",
                  fontFamily: "monospace",
                  marginBottom: "16px",
                }}
              >
                {preparedSummary.text}
              </pre>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={preparedSummary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#25d366", borderColor: "#25d366" }}
                >
                  <Send size={16} />
                  <span>{appointment.messages.openWhatsappButton}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn btn-outline-dark"
                  style={{ fontSize: "0.78rem" }}
                >
                  <Copy size={14} />
                  <span>{copied ? appointment.messages.copySuccess : "Copier le texte"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
