import type { NextConfig } from "next";

// Deployed to GitHub Pages at gefy9999.github.io/portfolio.
// Once portfolio.gymstrack.com is wired up as a custom domain, set BASE_PATH to ""
// (custom domains on GitHub Pages serve from the root, no prefix needed).
const basePath = "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
