# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

O público principal são usuários vindos do Instagram interessados em atendimento remoto de psicanálise integrativa. Eles acessam a página para conhecer a profissional e iniciar o contato pelo WhatsApp.

## Product Purpose

A página reúne o atendimento e os canais profissionais de Queila de Oliveira em um destino único. Seu principal resultado é encaminhar pessoas interessadas para uma conversa no WhatsApp sobre o atendimento.

## Positioning

Um único CTA de WhatsApp, com mensagem predefinida, contextualiza o primeiro contato antes da conversa. Canais secundários (Instagram, YouTube, TikTok, e-mail) e a apresentação da profissional dão suporte a essa decisão.

## Operating Context

A descoberta ocorre principalmente pelo perfil de Queila no Instagram. O visitante abre a página de links e segue diretamente para o WhatsApp. Os atendimentos são realizados remotamente.

## Capabilities and Constraints

- Oferecer um único ponto de contato destacado (WhatsApp) para agendar o atendimento.
- Abrir o WhatsApp com uma mensagem predefinida, contextualizando o motivo do contato.
- Disponibilizar também Instagram, YouTube, TikTok, e-mail e informações sobre a profissional.
- Funcionar como uma aplicação React/TypeScript estática, publicada no Cloudflare Pages.
- Não incluir formulários, banco de dados ou autenticação.
- Incluir o script de analytics Traks (`analytics-collect.anhanga.tur.br`), carregado no `<head>` de `index.html`, para medir visitas e cliques. Adição explicitamente solicitada e aprovada pelo responsável pelo site (Felipe Williams / Anhangá.tech) em 2026-09-03, conforme exigido pela seção "Security & Publication" de `AGENTS.md`. Cloudflare Zaraz é considerado para o futuro, mas não faz parte do escopo atual — o volume de tráfego ainda não justifica.
- Permanecer sem indexação pública enquanto `isProductionReady` estiver desativado e até os dados profissionais serem revisados.
- Preservar registros DNS externos ao site, especialmente MX e TXT, durante a publicação do domínio.

## Brand Commitments

- Nome profissional: Queila de Oliveira.
- Atuação apresentada: psicanalista integrativa.
- Temas centrais já afirmados: psicanálise, análise junguiana, terapia holística e autoconhecimento.
- Retrato oficial disponível em `public/queila-de-oliveira.jpg`.
- O conteúdo não deve inventar credenciais, qualificações, depoimentos, resultados ou outras alegações profissionais ainda não confirmadas.

## Evidence on Hand

- Texto de apresentação, descrição dos atendimentos, mensagens de WhatsApp e canais de contato centralizados em `data/site-config.ts`.
- Retrato de Queila em `public/queila-de-oliveira.jpg`.
- Links reais para Instagram, YouTube, TikTok, WhatsApp e e-mail presentes na configuração do site.
- Não há depoimentos, estudos de caso, métricas de resultado ou comprovação de credenciais no repositório; trabalhos futuros não devem fabricá-los.

## Product Principles

1. Levar rapidamente cada visitante ao contato que motivou sua chegada.
2. Contextualizar o primeiro contato antes de abrir a conversa no WhatsApp.
3. Manter o CTA de WhatsApp como ação central e inequívoca da página.
4. Comunicar apenas informações profissionais confirmadas.
5. Manter simples a jornada entre a descoberta no Instagram e o contato para atendimento remoto.
