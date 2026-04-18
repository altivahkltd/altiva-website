"use client";

import { useState, type FormEvent } from "react";

/**
 * Contact form — ported from the Claude Design handoff v11.
 *
 * Delivery path:
 *   1. If NEXT_PUBLIC_WEB3FORMS_KEY is set and not a placeholder, the
 *      form POSTs to https://api.web3forms.com/submit (FormData body).
 *      Web3Forms forwards the message to julien@altiva.hk.
 *   2. Otherwise the form falls back to opening the user's mail
 *      client with subject + body pre-filled — useful in dev and
 *      until the real key is configured in Vercel.
 *
 * i18n — the form labels carry `data-i18n` attributes so the global
 * I18n component swaps them to FR/EN on mount; status messages are
 * read from the dictionary at submit time via a small helper that
 * falls back to English if the FR key is missing.
 */

// Web3Forms access key — publicly exposed by design (client-side POST to
// api.web3forms.com). Prefer the env var override, fall back to the key
// Julien provisioned on the Altiva account for the live deploy.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
  "6f2053d5-e3b9-470f-acbd-acc88ba42ff2";
const STATUS_FALLBACKS: Record<
  "sending" | "ok" | "err",
  { en: string; fr: string }
> = {
  sending: { en: "Sending…", fr: "Envoi…" },
  ok: {
    en: "Message sent. Julien will reply shortly.",
    fr: "Message envoyé. Julien vous répondra sous peu.",
  },
  err: {
    en: "Something went wrong. Please try again or email julien@altiva.hk.",
    fr: "Une erreur est survenue. Réessayez ou écrivez à julien@altiva.hk.",
  },
};

function currentLang(): "en" | "fr" {
  if (typeof document === "undefined") return "en";
  return document.documentElement.getAttribute("lang") === "fr" ? "fr" : "en";
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const [statusMsg, setStatusMsg] = useState<string>("");

  const hasRealKey = ACCESS_KEY && !ACCESS_KEY.startsWith("YOUR_");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const lang = currentLang();

    // Graceful mailto fallback while the Web3Forms key isn't configured.
    if (!hasRealKey) {
      const name = String(fd.get("name") ?? "");
      const email = String(fd.get("email") ?? "");
      const company = String(fd.get("company") ?? "");
      const topic = String(fd.get("topic") ?? "");
      const message = String(fd.get("message") ?? "");
      const bodyLines = [
        message,
        "",
        "—",
        [name, company].filter(Boolean).join(" · "),
        email,
        `Topic: ${topic}`,
      ];
      const subject = `Altiva · ${topic || "Enquiry"}`;
      window.location.href = `mailto:julien_levet@outlook.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
      return;
    }

    setStatus("loading");
    setStatusMsg(STATUS_FALLBACKS.sending[lang]);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (!json.success) throw new Error(json.message ?? "submit failed");
      setStatus("ok");
      setStatusMsg(STATUS_FALLBACKS.ok[lang]);
      form.reset();
    } catch {
      setStatus("err");
      setStatusMsg(STATUS_FALLBACKS.err[lang]);
    }
  }

  return (
    <form
      className="contact-form reveal"
      id="contact-form"
      autoComplete="on"
      onSubmit={onSubmit}
    >
      {/* Web3Forms access key — set NEXT_PUBLIC_WEB3FORMS_KEY in Vercel. */}
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="from_name" value="Altiva website" />
      <input
        type="hidden"
        name="subject"
        value="New enquiry · altiva.hk"
      />
      {/* Honeypot — bots fill this, humans don't see it. */}
      <input
        type="checkbox"
        name="botcheck"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="row-2">
        <div className="field">
          <label htmlFor="cf-name" data-i18n="ctc.form.name">
            Name
          </label>
          <input id="cf-name" name="name" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="cf-email" data-i18n="ctc.form.email">
            Email
          </label>
          <input id="cf-email" name="email" type="email" required />
        </div>
      </div>

      <div className="row-2">
        <div className="field">
          <label htmlFor="cf-company" data-i18n="ctc.form.company">
            Company
          </label>
          <input id="cf-company" name="company" type="text" />
        </div>
        <div className="field">
          <label htmlFor="cf-topic" data-i18n="ctc.form.topic">
            Topic
          </label>
          <select id="cf-topic" name="topic" defaultValue="Advisory">
            <option value="Advisory" data-i18n="ctc.form.topic.advisory">
              Advisory
            </option>
            <option value="Audit" data-i18n="ctc.form.topic.audit">
              Audit
            </option>
            <option value="Introduction" data-i18n="ctc.form.topic.intro">
              Introduction
            </option>
            <option value="Other" data-i18n="ctc.form.topic.other">
              Other
            </option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-message" data-i18n="ctc.form.message">
          Message
        </label>
        <textarea id="cf-message" name="message" rows={4} required />
      </div>

      <div className="submit-row">
        <button type="submit" className="btn light" disabled={status === "loading"}>
          <span data-i18n="ctc.form.send">Send message</span>{" "}
          <span className="arr">→</span>
        </button>
      </div>

      <div
        className={`form-status${status === "loading" || status === "ok" || status === "err" ? " on" : ""}${status === "ok" ? " ok" : ""}${status === "err" ? " err" : ""}`}
        role="status"
        aria-live="polite"
      >
        {statusMsg}
      </div>
    </form>
  );
}
