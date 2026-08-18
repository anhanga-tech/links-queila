import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renderiza a página de links completa e protegida por noindex", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Queila de Oliveira/);
  assert.match(html, /Agendar psicanálise/);
  assert.match(html, /Consultar o tarô/);
  assert.match(html, /Falar no WhatsApp/);
  assert.match(html, /YouTube/);
  assert.match(html, /TikTok/);
  assert.match(html, /queiladeoliveirar@gmail\.com/);
  assert.match(html, /Sobre o atendimento/);
  assert.match(html, /name="robots" content="noindex, nofollow, nocache"/i);
  assert.match(html, /rel="canonical" href="https:\/\/deoliveirar\.com\/?"/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/i);
});

test("mantém psicanálise em primeiro lugar e usa os contatos públicos confirmados", async () => {
  const source = await readFile(new URL("../data/site-config.ts", import.meta.url), "utf8");
  assert.ok(source.indexOf('id: "psicanalise"') < source.indexOf('id: "taro"'));
  assert.match(source, /icon: "brain"/);
  assert.match(source, /icon: "tarot-cards"/);
  assert.match(source, /encodeURIComponent\(link\.message/);
  assert.match(source, /5511988093689/);
  assert.match(source, /queiladeoliveirar@gmail\.com/);
  assert.match(source, /isProductionReady: false/);
  assert.doesNotMatch(source, /SEU_PERFIL|SUA_CIDADE|Nome da profissional|5500000000000/);
});
