import react from "@vitejs/plugin-react";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { defineConfig } from "vite";
import { siteConfig } from "./data/site-config";
import { App } from "./src/App";

function escapeAttribute(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function metadataPlugin() {
  const { profile, seo } = siteConfig;
  const portraitUrl = new URL(profile.portraitSrc, seo.canonical).href;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.professionalTitle,
    url: seo.canonical,
    description: seo.description,
    email: siteConfig.contact.email,
    telephone: `+${siteConfig.contact.whatsappNumber}`,
    sameAs: siteConfig.otherLinks
      .filter((link) => link.kind === "external")
      .map((link) => link.href),
  };

  const replacements = {
    "{{SITE_TITLE}}": escapeAttribute(seo.title),
    "{{SITE_DESCRIPTION}}": escapeAttribute(seo.description),
    "{{ROBOTS}}": siteConfig.isProductionReady
      ? "index, follow"
      : "noindex, nofollow, nocache",
    "{{CANONICAL}}": escapeAttribute(seo.canonical),
    "{{PORTRAIT_URL}}": escapeAttribute(portraitUrl),
    "{{STRUCTURED_DATA}}": JSON.stringify(structuredData).replaceAll("<", "\\u003c"),
  };

  return {
    name: "site-metadata",
    transformIndexHtml(html: string) {
      return Object.entries(replacements).reduce(
        (result, [token, value]) => result.replaceAll(token, value),
        html,
      );
    },
  };
}

function staticPagePlugin() {
  const markup = renderToStaticMarkup(createElement(App));

  return {
    name: "static-page",
    transformIndexHtml: {
      order: "pre" as const,
      handler(html: string) {
        return html
          .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
          .replace('<script type="module" src="/src/main.tsx"></script>', "");
      },
    },
  };
}

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    metadataPlugin(),
    ...(command === "build" ? [staticPagePlugin()] : []),
  ],
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
}));
