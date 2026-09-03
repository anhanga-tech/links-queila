import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

async function renderApp() {
  const vite = await createServer({ server: { middlewareMode: true } });
  try {
    const { App } = await vite.ssrLoadModule("/src/App.tsx");
    return renderToStaticMarkup(createElement(App));
  } finally {
    await vite.close();
  }
}

test("renderiza os serviços e canais confirmados", async () => {
  const html = await renderApp();
  assert.match(html, /Queila de Oliveira/);
  assert.match(html, /Falar no WhatsApp/);
  assert.match(html, /Atendimentos on-line/);
  assert.match(html, /YouTube/);
  assert.match(html, /TikTok/);
  assert.match(html, /queila@deoliveirar\.com/);
  assert.match(html, /Sobre mim/);
  assert.match(html, /footer-signature-logo/);
  assert.match(html, /anhanga-tech-logo\.svg/);
});

test("gera metadados estáticos e mantém a página protegida por noindex", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  assert.match(html, /<div id="root">[\s\S]*?<main class="site-shell">/i);
  assert.doesNotMatch(html, /<div id="root"><\/div>/i);
  assert.doesNotMatch(html, /<script[^>]+type="module"/i);
  assert.match(html, /name="robots" content="noindex, nofollow, nocache"/i);
  assert.match(html, /rel="canonical" href="https:\/\/deoliveirar\.com\/?"/i);
  assert.match(html, /property="og:title" content="Queila de Oliveira \| Psicanálise Integrativa"/i);
  assert.match(html, /Atendimentos remotos de psicanálise integrativa/i);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":"Person"/);
  assert.doesNotMatch(html, /\{\{[A-Z_]+\}\}/);
});

test("mantém um único CTA de WhatsApp e usa contatos públicos confirmados", async () => {
  const source = await readFile(new URL("../data/site-config.ts", import.meta.url), "utf8");
  assert.match(source, /id: "whatsapp"/);
  assert.match(source, /icon: "whatsapp"/);
  assert.match(source, /featured: true/);
  assert.match(source, /encodeURIComponent\(link\.message/);
  assert.match(source, /5511988093689/);
  assert.match(source, /queila@deoliveirar\.com/);
  assert.match(source, /isProductionReady: false/);
});
