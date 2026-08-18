# Links — deoliveirar.com

Página mobile-first de links para atendimentos de terapia e tarô. A versão atual
usa conteúdo placeholder e permanece privada e marcada como `noindex`.

## Personalização

Edite `data/site-config.ts` para substituir:

- nome, título, apresentação e texto “sobre”;
- telefone do WhatsApp (com código do país e DDD);
- Instagram, cidade, localização e mensagens dos serviços;
- título, descrição e endereço canônico.

Substitua o marcador circular por uma foto real e revisada. Somente após validar
todos os dados, altere `isProductionReady` para `true`; isso habilita a indexação
da versão pública.

## Desenvolvimento

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm test
```

O site não possui formulários, banco de dados, autenticação ou rastreamento de
audiência. Os botões direcionam para WhatsApp, Instagram, localização ou para a
seção interna “Sobre o atendimento”.
