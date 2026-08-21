# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

O público principal são usuários vindos do Instagram interessados em terapia por psicanálise ou em uma tiragem de tarô. Eles acessam a página para conhecer as opções de atendimento e iniciar o contato adequado.

## Product Purpose

A página reúne os atendimentos e canais profissionais de Queila de Oliveira em um destino único. Seu principal resultado é encaminhar pessoas interessadas em psicanálise ou tarô para uma conversa no WhatsApp sobre o serviço escolhido.

## Positioning

Os dois atendimentos possuem chamadas distintas para o WhatsApp, cada uma com uma mensagem predefinida específica. Isso identifica desde o primeiro contato se o interesse é psicanálise ou tarô e oferece um início de conversa contextualizado.

## Operating Context

A descoberta ocorre principalmente pelo perfil de Queila no Instagram. O visitante abre a página de links, escolhe entre psicanálise e tarô e continua a conversa no WhatsApp. Os atendimentos são realizados remotamente.

## Capabilities and Constraints

- Oferecer entradas separadas para psicanálise e tarô.
- Abrir o WhatsApp com uma mensagem diferente para cada modalidade, permitindo reconhecer o motivo do contato.
- Disponibilizar também Instagram, YouTube, TikTok, e-mail e informações sobre a profissional.
- Funcionar como uma aplicação React/TypeScript estática, publicada no Cloudflare Pages.
- Não incluir formulários, banco de dados, autenticação ou rastreamento.
- Permanecer sem indexação pública enquanto `isProductionReady` estiver desativado e até os dados profissionais serem revisados.
- Preservar registros DNS externos ao site, especialmente MX e TXT, durante a publicação do domínio.

## Brand Commitments

- Nome profissional: Queila de Oliveira.
- Atuação apresentada: psicanalista e taróloga.
- Temas centrais já afirmados: psicanálise, tarô e autoconhecimento.
- Retrato oficial disponível em `public/queila-de-oliveira.jpg`.
- O conteúdo não deve inventar credenciais, qualificações, depoimentos, resultados ou outras alegações profissionais ainda não confirmadas.

## Evidence on Hand

- Texto de apresentação, descrição dos atendimentos, mensagens de WhatsApp e canais de contato centralizados em `data/site-config.ts`.
- Retrato de Queila em `public/queila-de-oliveira.jpg`.
- Links reais para Instagram, YouTube, TikTok, WhatsApp e e-mail presentes na configuração do site.
- Não há depoimentos, estudos de caso, métricas de resultado ou comprovação de credenciais no repositório; trabalhos futuros não devem fabricá-los.

## Product Principles

1. Levar rapidamente cada visitante ao atendimento que motivou sua chegada.
2. Contextualizar o primeiro contato antes de abrir a conversa no WhatsApp.
3. Tratar psicanálise e tarô como opções distintas, claras e igualmente acessíveis.
4. Comunicar apenas informações profissionais confirmadas.
5. Manter simples a jornada entre a descoberta no Instagram e o contato para atendimento remoto.
