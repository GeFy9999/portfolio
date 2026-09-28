import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Zachary Belley — Développeur Full-Stack",
  description:
    "Portfolio de Zachary Belley, développeur full-stack junior spécialisé en React, TypeScript, Node.js et Next.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
