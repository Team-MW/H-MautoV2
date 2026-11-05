"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAY_LABELS_FR = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const formatTime = (hhmm) => hhmm.replace(":", "h");

/** Heure courante à Bergerac (Europe/Paris), quel que soit le fuseau du visiteur. */
function getParisNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type)?.value;
  return {
    dayIndex: DAY_NAMES.indexOf(get("weekday")),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

function slotFor(dayIndex) {
  return siteConfig.business.openingHoursSchema.find((s) => s.days.includes(DAY_NAMES[dayIndex]));
}

function computeStatus() {
  const { dayIndex, minutes } = getParisNow();
  const today = slotFor(dayIndex);

  if (today && minutes >= toMinutes(today.opens) && minutes < toMinutes(today.closes)) {
    return { open: true, text: `Ouvert • ferme à ${formatTime(today.closes)}` };
  }

  if (today && minutes < toMinutes(today.opens)) {
    return { open: false, text: `Fermé • ouvre à ${formatTime(today.opens)}` };
  }

  for (let offset = 1; offset <= 7; offset += 1) {
    const idx = (dayIndex + offset) % 7;
    const slot = slotFor(idx);
    if (slot) {
      const when = offset === 1 ? "demain" : DAY_LABELS_FR[idx];
      return { open: false, text: `Fermé • ouvre ${when} à ${formatTime(slot.opens)}` };
    }
  }

  return { open: false, text: "Fermé" };
}

/**
 * Badge « Ouvert / Fermé » calculé côté client (évite un statut figé au moment du build).
 */
export default function OpenStatus({ tone = "dark", className = "" }) {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setStatus(computeStatus());
    const id = setInterval(() => setStatus(computeStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) {
    return <span className={`open-status open-status-${tone} is-pending ${className}`} aria-hidden="true" />;
  }

  return (
    <span
      className={`open-status open-status-${tone} ${status.open ? "is-open" : "is-closed"} ${className}`}
      role="status"
    >
      <span className="open-status-dot" aria-hidden="true" />
      <span>{status.text}</span>
    </span>
  );
}
