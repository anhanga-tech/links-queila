---
name: "Queila de Oliveira"
description: "Um consultório ritual acolhedor para psicanálise e autoconhecimento."
colors:
  wine: "#512c35"
  wine-deep: "#351b23"
  moss: "#68765b"
  moss-deep: "#536047"
  moss-light: "#7d896f"
  terracotta: "#a8614f"
  terracotta-text: "#985544"
  cream: "#f7f0e5"
  paper: "#fffaf1"
  gold: "#b99a5d"
  ink: "#35272a"
  muted: "#6d585d"
typography:
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(30px, 9vw, 42px)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "23px"
    fontWeight: 500
  body:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "15px"
    lineHeight: 1.55
  editorial-body:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "17px"
    lineHeight: 1.55
  section-title:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "14px"
    fontWeight: 500
  action-title:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "15px"
    fontWeight: 700
  supporting-copy:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "12px"
    lineHeight: 1.3
  utility:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "11px"
    lineHeight: 1.5
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "10px"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  link: "16px"
  location: "17px"
  panel: "20px"
  profile-narrow: "22px"
  profile: "28px"
  portrait: "50%"
spacing:
  compact: "4px"
  xs: "8px"
  sm: "11px"
  md: "14px"
  lg: "18px"
  xl: "24px"
  section: "26px"
  canvas: "30px"
components:
  profile-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.profile}"
    padding: "26px 18px 24px"
    width: "min(100%, 440px)"
  service-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.wine-deep}"
    rounded: "{rounded.link}"
    padding: "17px 19px"
    height: "80px"
  supporting-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.wine-deep}"
    rounded: "{rounded.link}"
    padding: "12px 14px"
    height: "62px"
  about-panel:
    textColor: "{colors.wine-deep}"
    rounded: "{rounded.panel}"
    padding: "22px 18px"
  location-link:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.cream}"
    rounded: "{rounded.location}"
    padding: "13px 15px"
    height: "72px"
---

# Design System: Queila de Oliveira

## Overview

**Creative North Star: "Consultório Ritual"**

O sistema combina a confiança silenciosa de um espaço de atendimento com sinais discretos de ritual, ciclos e contemplação. A experiência é íntima, centrada e humana: superfícies claras acolhem o conteúdo enquanto vinho, musgo e terracota criam gravidade sem tornar a página sombria.

A composição é deliberadamente compacta e mobile-first, adequada a uma chegada pelo Instagram e a um contato rápido com a profissional. Ornamentos celestes e dourado aparecem como detalhes raros; não dominam a hierarquia nem transformam a interface em cenografia mística.

O sistema rejeita explicitamente o esotérico carregado, o clínico frio e o luxo ostensivo.

**Key Characteristics:**

- Acolhedor e tátil, sem informalidade excessiva.
- Profundidade suave e ambiental.
- Profissional com simbolismo contemplativo discreto.
- Hierarquia curta, centrada e orientada ao contato.
- Contraste entre superfícies de papel e um ambiente natural profundo.

## Colors

A paleta usa nomes descritivos e tons naturais amortecidos para equilibrar cuidado profissional e introspecção.

### Primary

- **Vinho Profundo** (`#351b23`): títulos principais, texto de ação e o tom de maior autoridade.
- **Vinho** (`#512c35`): superfícies de ação escuras e títulos secundários.

### Secondary

- **Verde Musgo** (`#68765b`): centro do fundo ambiental.
- **Verde Musgo Profundo** (`#536047`): base do canvas e bordas externas da atmosfera.
- **Verde Musgo Claro** (`#7d896f`): abertura luminosa do gradiente de fundo.

### Tertiary

- **Terracota Quente** (`#a8614f`): ícones e foco visível, onde sua luminosidade reforça presença sem comprometer a leitura.
- **Terracota Profunda** (`#985544`): rótulos e subtítulos sobre superfícies claras; é a variação textual que garante contraste AA.
- **Dourado Suave** (`#b99a5d`): bordas especiais, ornamentos e pequenos sinais de navegação.

### Neutral

- **Creme** (`#f7f0e5`): texto claro sobre vinho e referência para ornamentos.
- **Papel Quente** (`#fffaf1`): superfície principal e anéis do retrato.
- **Tinta Quente** (`#35272a`): texto padrão.
- **Texto Atenuado** (`#6d585d`): descrições e informação secundária.

### Named Rules

**The Quiet Symbolism Rule.** Dourado e terracota sinalizam significado; nunca cobrem grandes áreas nem competem com as chamadas principais.

**The Warm Neutral Rule.** Superfícies e textos neutros mantêm um subtom quente. Branco clínico e cinza azulado não pertencem a este sistema.

## Typography

**Display Font:** Georgia (com Times New Roman e serif como fallback)
**Body Font:** Arial (com Helvetica e sans-serif como fallback)

**Character:** A serifada traz intimidade editorial e contemplação a nomes, títulos e textos de apresentação. A sans-serif mantém ações, canais e informações práticas nítidos e familiares.

### Hierarchy

- **Display** (500, `clamp(30px, 9vw, 42px)`, 1.05): reservado ao nome da profissional; usa tracking de `-0.035em`.
- **Headline** (500, `23px`): títulos de painéis informativos em Georgia.
- **Section title** (500, `14px`, itálico): perguntas e divisores editoriais.
- **Editorial body** (regular, `15–17px`, 1.55): introdução e texto de apresentação, com largura curta de até `36ch` quando necessário.
- **Action title** (700, `15px`): rótulos principais de cartões.
- **Label** (700, `10px`, `0.10–0.12em`, caixa alta): áreas de atuação abaixo do nome; deve permanecer breve.
- **Supporting copy** (regular, `10–12px`, `1.3–1.5`): descrições, avisos e rodapé.

### Named Rules

**The Two-Voice Rule.** Georgia conduz identidade, contemplação e narrativa; Arial conduz ação e utilidade. Labels nunca antecedem títulos como kickers ou eyebrows; o título deve sustentar sua própria hierarquia. Não introduza uma terceira voz tipográfica sem substituir conscientemente o sistema.

## Layout

A página é uma coluna única mobile-first sobre um canvas de altura total. O cartão principal mede no máximo `440px`, fica centralizado horizontalmente e recebe `30px 14px 54px` de respiro externo em telas pequenas. A partir de `600px`, o respiro superior cresce para `54px` e o padding interno do cartão passa de `26px 18px 24px` para `34px 30px 28px`.

O ritmo vertical trabalha principalmente com intervalos de `11–26px`. As listas usam gaps de `11px`; blocos secundários começam após `18–26px`. Dentro dos links, a grade fixa o ícone em `34px`, preserva o texto como coluna flexível e mantém a seta no extremo. Abaixo de `340px`, padding, raio e coluna de ícone são reduzidos sem esconder conteúdo.

A composição externa pode ser atmosférica, mas o conteúdo permanece em fluxo previsível: identidade, CTA de WhatsApp, canais secundários, apresentação e avisos.

## Elevation & Depth

A profundidade é suave e ambiental. O grande cartão flutua sobre o musgo com uma sombra difusa; superfícies internas usam bordas quentes e pequenas diferenças tonais. Os links de serviço ganham uma sombra macia e curta, capaz de responder ao hover e ao pressionamento sem parecer um botão rígido.

### Shadow Vocabulary

- **Ambient profile** (`0 28px 70px rgba(28, 35, 24, .34)`): separa o cartão principal do fundo natural.
- **Portrait halo** (`0 0 0 7px #fffaf1, 0 0 0 8px rgba(185, 154, 93, .35)`): cria um anel cerimonial discreto ao redor do retrato.
- **Tactile service** (`0 6px 16px` com vinho a 12%): dá apoio físico ao CTA principal de WhatsApp; abre para `0 10px 24px` no hover e comprime para `0 2px 8px` no active.

### Named Rules

**The Ambient-First Rule.** Sombras grandes pertencem apenas ao contêiner principal. Componentes internos dependem de borda, tom e deslocamentos curtos para expressar hierarquia.

## Shapes

O vocabulário é arredondado, orgânico e contido. O cartão principal usa `28px`; painéis internos, `16–20px`; o retrato é circular. Bordas finas e quentes definem as superfícies sem dureza.

Em telas muito estreitas, o cartão principal reduz seu raio para `22px`. Não use pílulas indiscriminadamente: o círculo é reservado ao retrato e a forma dos links continua retangular com cantos generosos.

## Components

### Link Cards

Os cartões são acolhedores e táteis, com conteúdo alinhado à esquerda dentro de uma página majoritariamente centralizada.

- **Shape:** cantos de `16px`, borda quente de `1px` e grade ícone–texto–seta.
- **Service:** altura mínima de `80px`, fundo Papel Quente, borda transparente e sombra tátil macia; representa o CTA principal de WhatsApp.
- **Supporting:** altura mínima de `62px`, fundo mais leve e borda mais discreta; representa canais e informação.
- **Hover / Active:** sobe `2px` no hover e desce `2px` no active; links secundários migram a borda para dourado e links de serviço ampliam ou comprimem a sombra.
- **Focus:** outline terracota de `3px`, afastado `3px`; nunca remova sem substituição equivalente.
- **Motion:** transições de `160ms ease`, neutralizadas quando `prefers-reduced-motion` está ativo.

### Profile Card

É a superfície central e a única elevação ambiental forte. Usa fundo Papel Quente quase opaco, sem borda concorrendo com a sombra, raio de `28px` e largura máxima de `440px`.

### Portrait

O retrato circular de `96px` combina borda dourada fina com halo duplo. Deve usar fotografia real, corte `object-fit: cover` e dimensões explícitas para estabilidade de layout.

### About Panel

Painel tonal de `20px` de raio e `22px 18px` de padding. O título abre o bloco diretamente, sem kicker; seu creme mais profundo cria uma pausa narrativa sem competir com as ações.

### Location Link

Quando presente, é a superfície vinho de maior contraste: altura mínima de `72px`, raio de `17px`, texto creme e acentos dourados. Mantém a mesma grade e foco dos demais links.

### Celestial Details

Lua, estrela, textura pontilhada e ornamentos são decorativos, recebem `aria-hidden` e permanecem com baixa opacidade. Sua função é ambiental, nunca informacional.

## Do's and Don'ts

### Do:

- **Do** preserve a prioridade visual do CTA de WhatsApp antes dos canais sociais.
- **Do** use Papel Quente, creme e bordas amareladas para manter superfícies acolhedoras.
- **Do** combine profundidade ambiental no contêiner com resposta tátil curta nas ações.
- **Do** keep ícones claros, reconhecíveis e subordinados ao texto.
- **Do** maintain foco visível, semântica de navegação e suporte a movimento reduzido.

### Don't:

- **Don't** transformar o simbolismo em um cenário esotérico carregado com excesso de estrelas, cartas, brilhos ou ornamentos.
- **Don't** esfriar a interface com branco puro dominante, cinzas azulados ou linguagem visual clínica.
- **Don't** simular luxo ostensivo com dourado abundante, alto brilho, mármore ou serifas decorativas excessivas.
- **Don't** nivelar links prioritários e secundários com o mesmo peso visual.
- **Don't** adicionar sombras fortes a todos os componentes ou usar animações longas e flutuantes.
