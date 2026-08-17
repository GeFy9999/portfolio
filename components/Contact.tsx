"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { MailIcon, GithubIcon, PinIcon } from "@/components/icons";

const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

type Status = "idle" | "sending" | "success" | "error" | "not-configured";

export function Contact() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // Honeypot: bots fill hidden fields, humans never do
    const honeypot = form.elements.namedItem("company") as HTMLInputElement | null;
    if (honeypot?.value) return;

    if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      setStatus("not-configured");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const statusMessage =
    status === "sending"
      ? t.contact.form.sending
      : status === "success"
        ? t.contact.form.success
        : status === "error"
          ? t.contact.form.error
          : status === "not-configured"
            ? t.contact.form.notConfigured
            : "";

  const statusClass =
    status === "success" ? "text-accent" : status === "error" || status === "not-configured" ? "text-red-400" : "";

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
              required
              autoComplete="name"
              className="bg-card border border-card-border rounded-[10px] px-3.5 py-3 text-text focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cf-email" className="text-sm text-text-dim font-mono">
              {t.contact.form.email}
            </label>
            <input
              id="cf-email"
              name="from_email"
              type="email"
              required
              autoComplete="email"
              className="bg-card border border-card-border rounded-[10px] px-3.5 py-3 text-text focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cf-message" className="text-sm text-text-dim font-mono">
              {t.contact.form.message}
            </label>
            <textarea
              id="cf-message"
              name="message"
              rows={5}
              required
              className="bg-card border border-card-border rounded-[10px] px-3.5 py-3 text-text resize-y focus:outline-none focus:border-accent transition-colors"
            />
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
            disabled={status === "sending"}
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
