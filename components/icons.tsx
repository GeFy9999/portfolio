type IconProps = { className?: string };

const base = "fill-none stroke-current [stroke-width:1.8] [stroke-linecap:round] [stroke-linejoin:round]";

export function MailIcon({ className = "" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

export function GithubIcon({ className = "" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" strokeWidth={0} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function PinIcon({ className = "" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" strokeWidth={2}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function BankIcon({ className = "" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24">
      <path d="M3 10.5 12 4l9 6.5" />
      <path d="M4.5 10.5V20h15v-9.5" />
      <path d="M9 20v-6h6v6" />
      <path d="M3 20h18" />
    </svg>
  );
}
