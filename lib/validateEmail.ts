const LOCAL_CHARS_RE = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*$/;
const DOMAIN_LABEL_RE = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/;

export function isValidEmail(value: string): boolean {
  const email = value.trim();
  if (!email || email.length > 254) return false;

  // exactly one "@" — rejects "test@@gmail.com" or "test@a@b.com"
  const atIndex = email.indexOf("@");
  if (atIndex === -1 || email.indexOf("@", atIndex + 1) !== -1) return false;

  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);
  if (!local || !domain) return false;
  if (local.length > 64) return false;

  // rejects leading/trailing dots and ".." in the local part, e.g. "test.@gmail.com", ".test@gmail.com", "te..st@gmail.com"
  if (!LOCAL_CHARS_RE.test(local)) return false;

  const labels = domain.split(".");
  if (labels.length < 2) return false; // domain needs at least one dot
  if (labels.some((label) => !DOMAIN_LABEL_RE.test(label))) return false; // rejects "", leading/trailing "-", "..", invalid chars

  const tld = labels[labels.length - 1];
  if (!/^[a-zA-Z]{2,}$/.test(tld)) return false; // rejects single-letter TLDs like ".c"

  return true;
}
