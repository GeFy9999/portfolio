"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { MailIcon, GithubIcon, PinIcon } from "@/components/icons";
import type { Content } from "@/lib/content";

const EMAILJS_PUBLIC_KEY = "VgriXQf3HzUsFXXi4";
const EMAILJS_SERVICE_ID = "service_kwlorjy";
const EMAILJS_TEMPLATE_ID = "template_k8aapbi";

const COOLDOWN_MS = 30 * 60 * 1000;
const LAST_SENT_KEY = "portfolio_contact_last_sent";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "error";
type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

function formatTime(ms: number) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function validate(form: HTMLFormElement, formText: Content["contact"]["form"]): FormErrors {
  const name = (form.elements.namedItem("from_name") as HTMLInputElement).value.trim();
  const email = (form.elements.namedItem("from_email") as HTMLInputElement).value.trim();
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

  const errors: FormErrors = {};
  if (!name) errors.name = formText.nameRequired;
  if (!email) errors.email = formText.emailRequired;
  else if (!EMAIL_RE.test(email)) errors.email = formText.emailInvalid;
  if (!message) errors.message = formText.messageRequired;
  else if (message.length < 10) errors.message = formText.messageTooShort;
  return errors;
}

export function Contact() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [cooldownMs, setCooldownMs] = useState(0);

  useEffect(() => {
    const tick = () => {
      const lastSent = Number(localStorage.getItem(LAST_SENT_KEY) || 0);
      const remaining = lastSent + COOLDOWN_MS - Date.now();
      setCooldownMs(remaining > 0 ? remaining : 0);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const clearFieldError = (field: keyof FormErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form || status === "sending" || cooldownMs > 0) return;

    // Honeypot: bots fill hidden fields, humans never do
    const honeypot = form.elements.namedItem("company") as HTMLInputElement | null;
    if (honeypot?.value) return;

    const fieldErrors = validate(form, t.contact.form);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      localStorage.setItem(LAST_SENT_KEY, String(Date.now()));
      setCooldownMs(COOLDOWN_MS);
      setStatus("idle");
      setErrors({});
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const statusMessage =
    status === "sending"
      ? t.contact.form.sending
      : cooldownMs > 0
        ? t.contact.form.cooldown.replace("{time}", formatTime(cooldownMs))
        : status === "error"
          ? t.contact.form.error
          : "";

  const statusClass = cooldownMs > 0 ? "text-accent" : status === "error" ? "text-red-400" : "";

  return (
    <Reveal>
      <section id="contact" className="max-w-[1080px] mx-auto px-6 py-[70px] text-center">
        <h3 className="flex items-baseline justify-center gap-3.5 text-[1.7rem] font-bold mb-10">
          <span className="font-mono text-accent text-base border border-card-border rounded-md px-2 py-0.5">05</span>
          {t.contact.title}
        </h3>
        <p className="text-text-dim max-w-[500px] mx-auto mb-[34px]">{t.contact.lead}</p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:zachary.belley@outlook.com"
            className="flex items-center gap-2.5 border border-card-border rounded-xl px-5 py-3.5 bg-card text-sm hover:border-accent hover:-translate-y-0.5 transition-all"
          >
            <MailIcon className="w-[18px] h-[18px]" />
            zachary.belley@outlook.com
          </a>
          <a
            href="https://github.com/GeFy9999"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2.5 border border-card-border rounded-xl px-5 py-3.5 bg-card text-sm hover:border-accent hover:-translate-y-0.5 transition-all"
          >
            <GithubIcon className="w-[18px] h-[18px]" />
            github.com/GeFy9999
          </a>
          <div className="flex items-center gap-2.5 border border-card-border rounded-xl px-5 py-3.5 bg-card text-sm">
            <PinIcon className="w-[18px] h-[18px]" />
            Gatineau, QC
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="max-w-[560px] mx-auto mt-10 text-left flex flex-col gap-[18px]"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="cf-name" className="text-sm text-text-dim font-mono">
              {t.contact.form.name}
            </label>
            <input
              id="cf-name"
              name="from_name"
              type="text"
              autoComplete="name"
              onChange={() => clearFieldError("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "cf-name-error" : undefined}
              className={`bg-card border rounded-[10px] px-3.5 py-3 text-text focus:outline-none transition-colors ${
                errors.name ? "border-red-400" : "border-card-border focus:border-accent"
              }`}
            />
            {errors.name && (
              <p id="cf-name-error" className="text-red-400 text-xs">
                {errors.name}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cf-email" className="text-sm text-text-dim font-mono">
              {t.contact.form.email}
            </label>
            <input
              id="cf-email"
              name="from_email"
              type="email"
              autoComplete="email"
              onChange={() => clearFieldError("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "cf-email-error" : undefined}
              className={`bg-card border rounded-[10px] px-3.5 py-3 text-text focus:outline-none transition-colors ${
                errors.email ? "border-red-400" : "border-card-border focus:border-accent"
              }`}
            />
            {errors.email && (
              <p id="cf-email-error" className="text-red-400 text-xs">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cf-message" className="text-sm text-text-dim font-mono">
              {t.contact.form.message}
            </label>
            <textarea
              id="cf-message"
              name="message"
              rows={5}
              onChange={() => clearFieldError("message")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "cf-message-error" : undefined}
              className={`bg-card border rounded-[10px] px-3.5 py-3 text-text resize-y focus:outline-none transition-colors ${
                errors.message ? "border-red-400" : "border-card-border focus:border-accent"
              }`}
            />
            {errors.message && (
              <p id="cf-message-error" className="text-red-400 text-xs">
                {errors.message}
              </p>
            )}
          </div>
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] w-px h-px opacity-0 pointer-events-none"
          />
          <button
            type="submit"
            disabled={status === "sending" || cooldownMs > 0}
            className="self-start px-6 py-3 rounded-[10px] font-semibold text-sm bg-accent text-[#06210f] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-all"
          >
            {t.contact.form.send}
          </button>
          <p className={`min-h-[1.2em] text-sm ${statusClass}`} role="status" aria-live="polite">
            {statusMessage}
          </p>
        </form>
      </section>
    </Reveal>
  );
}
