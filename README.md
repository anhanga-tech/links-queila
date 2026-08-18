# Links — deoliveirar.com

Página mobile-first de links para os atendimentos de Queila de Oliveira. O site
é uma aplicação React/TypeScript totalmente estática, preparada para Cloudflare
Pages e mantida como `noindex` até a revisão final dos dados profissionais.

## Desenvolvimento

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm test
```

Edite `data/site-config.ts` para atualizar perfil, telefone, mensagens,
serviços, redes sociais e SEO. Somente após revisar todo o conteúdo, altere
`isProductionReady` para `true` para permitir indexação.

## Cloudflare Pages

Conecte o repositório GitHub ao Pages com estas opções:

- Framework preset: **React (Vite)**
- Production branch: `main`
- Build command: `pnpm build`
- Build output directory: `dist`

O domínio canônico é `https://deoliveirar.com`. Adicione-o em **Custom domains**
no projeto Pages somente depois de revisar os registros DNS existentes. Preserve
registros MX e TXT. Configure `www.deoliveirar.com` separadamente para
redirecionar à raiz.

O projeto não possui formulários, banco de dados, autenticação ou rastreamento.
Os botões apenas abrem WhatsApp, redes sociais, e-mail ou a seção interna.
