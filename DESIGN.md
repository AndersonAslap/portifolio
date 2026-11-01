---
name: Anderson Paiva
description: Portfólio de Arquiteto de Software & DevOps desenhado como um diagrama de linhas de metrô em preto e cromo.
colors:
  ink: "#070708"
  surface: "#0e0e10"
  line: "#1d1d21"
  line-strong: "#2c2c32"
  steel: "#6f747c"
  muted: "#9d9da7"
  silver: "#d6d9de"
  fg: "#ededf0"
typography:
  display:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 8vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline-terminal:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "-0.025em"
  title-sm:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body-lead:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.43
  button:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1
  data:
    fontFamily: "Overpass Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  focus: "4px"
  full: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter: "32px"
  grid-gap: "24px"
  station-indent: "40px"
  station-indent-sm: "48px"
  section-y: "96px"
  section-y-lg: "128px"
components:
  button-primary:
    backgroundColor: "{colors.silver}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "48px"
  lang-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.data}"
    rounded: "{rounded.full}"
    padding: "0 8px"
    height: "32px"
  lang-button-active:
    backgroundColor: "{colors.silver}"
    textColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "8px 0"
  nav-link-active:
    textColor: "{colors.fg}"
  station:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: "14px"
  contact-row:
    textColor: "{colors.fg}"
    padding: "24px 0"
---

# Design System: Anderson Paiva

## Overview

**Creative North Star: "A Linha de Cromo"**

O sistema trata uma carreira em sistemas como um mapa de transporte: serviços, empregadores e o contato final são estações numa única linha contínua de cromo espelhado, correndo sobre um preto profundo. O visitante "anda na linha" de cima para baixo, da interconexão (o hub com a foto) até o terminal (contato). A leitura é calma e de baixa fadiga; o conteúdo vem em linhas tipográficas separadas por filetes finos, nunca em cartões.

A densidade é baixa e generosa: seções altas, grade de 12 colunas, muito preto em volta de cada bloco. O único acento é o cromo, e ele significa "aceso": a linha, o anel de uma estação ativa, o nome, a ação principal, o idioma selecionado. Tudo o que não está aceso fica em grafite. O movimento é de iluminação: linhas que se desenham, estações que acendem, opacidade que sobe; nada entra deslizando.

A geometria é octilinear (0, 45 e 90 graus), com terminações arredondadas, como num diagrama de metrô. A tipografia é sinalização: uma grotesca firme, com tracking negativo nos títulos, e uma mono reservada a dados.

**Key Characteristics:**
- Fundo preto quase puro com camadas tonais de grafite, sem sombras de elevação.
- Um único gradiente cromado espelhado, reservado ao que está "aceso".
- Linhas octilineares de 3px com pontas redondas e estações em anel.
- Conteúdo em linhas com filete superior, nunca em cartões com fundo.
- Movimento como brilho: desenhar, acender, revelar; com movimento reduzido tudo já aparece desenhado.

## Colors

Uma escala monocromática de grafite frio sobre preto, com o cromo espelhado como único acento.

### Primary
- **Prata Espelhada** (silver): a cor sólida do acento. Seleção de texto, anel de foco, ícones dos canais de contato e a referência de cor para os brilhos difusos. Em superfícies, o acento aparece como gradiente cromado (ver Named Rules), não como prata chapada.

### Neutral
- **Preto Tinta** (ink): o chão da página, o miolo das estações e o texto sobre cromo.
- **Superfície Grafite** (surface): faixa tonal alternada nas seções de Serviços e Projetos; preenchimento do hub.
- **Filete** (line): divisores de seção, filetes entre linhas de conteúdo, trilho de rolagem em repouso e linhas-base do mapa.
- **Filete Forte** (line-strong): borda dos botões fantasma, linha vertical da rota de serviços, linhas de entrada no diagrama de projeto, polegar da barra de rolagem.
- **Aço** (steel): anel da estação apagada, borda do botão fantasma no hover, extremo escuro do cromo.
- **Cinza Sinal** (muted): texto secundário, parágrafos de apoio, rótulos, links de navegação em repouso.
- **Branco Gelo** (fg): texto principal, títulos e estados acesos de texto.

### Named Rules
**The Lit Is Chrome Rule.** O cromo marca apenas o que está aceso ou é identidade: a linha da trajetória e do trilho, anéis de estação ativa, o nome, a ação principal, o idioma selecionado, o anel do monograma e uma única frase de fechamento no contato. Se não está aceso, é grafite.

**The Two Chromes Rule.** Há dois gradientes, ambos a 105 graus e com `background-size: 200%`: `--chrome` (contraste mais alto, para texto e traços) e `--chrome-fill` (mais claro, para preenchimentos com texto ink por cima). Não invente um terceiro.

**The Faint Halo Rule.** O único outro gradiente permitido é o halo radial de prata em opacidade 0.035 a 0.07, atrás do hero e do contato. Nunca acima de 0.08.

## Typography

**Display Font:** Schibsted Grotesk (com ui-sans-serif, system-ui)
**Body Font:** Schibsted Grotesk (com ui-sans-serif, system-ui)
**Label/Mono Font:** Overpass Mono (com ui-monospace, SFMono-Regular)

**Character:** Uma única grotesca de sinalização faz todo o trabalho, de 92px a 14px, com tracking cada vez mais negativo conforme cresce. A mono aparece só onde há dado: durações, códigos de idioma.

### Hierarchy
- **Display** (700, clamp 3.25 a 5.75rem, 0.92): somente o nome no hero, sempre em cromo.
- **Headline Terminal** (600, clamp 2.25 a 3.75rem, 1.02): o título do contato, o fim da linha.
- **Headline** (600, clamp 2 a 3rem, 1.05): títulos de seção, balanceados, até ~6 colunas.
- **Title** (600, 1.5rem): nomes de estação (serviços, empregadores). Destaque de projeto usa clamp 1.6 a 2.25rem.
- **Title SM** (600, 1.25rem): projetos secundários e rótulos de canal de contato (1.125rem).
- **Body Lead** (400, 17px, 1.625): parágrafos de apoio em muted, até 34rem.
- **Body** (400, 16px, 1.625): listas de feitos e textos de projeto.
- **Label** (400, 14px): tags de serviço, empresas, metadados, navegação.
- **Data** (400, 13px, mono): durações e "Atual" na trajetória; 12px com tracking largo nos botões de idioma.

### Named Rules
**The Data Wears Mono Rule.** Overpass Mono só para dados (durações, códigos). Nunca em títulos, rótulos de seção ou parágrafos.

**The Tighter As It Grows Rule.** Tracking acompanha o tamanho: -0.04em no display, -0.03em em headlines, tight (-0.025em) em títulos, normal no corpo.

## Layout

Coluna única centrada com `max-width` de 72rem (max-w-6xl), margens de 20px no mobile e 32px a partir de 640px. A partir de 1024px tudo se organiza numa grade de 12 colunas com gap de 24px; os blocos de texto ficam em 5 a 7 colunas e deixam ar ao lado. As seções têm 96px de respiro vertical (128px em telas largas; o contato chega a 144px) e se separam por um filete superior, alternando ink e surface.

O conteúdo de "linha" (serviços, trajetória, contato) é recuado 40px (48px a partir de 640px) para abrir espaço à estação de 14px e à linha vertical de 1px a 6px da borda. O cabeçalho é fixo, 64px de altura, ink a 80% com desfoque. A partir de 1280px aparece o trilho fixo à esquerda (24px da borda) que preenche em cromo conforme a rolagem e acende uma estação por seção. No mobile a navegação vira lista em coluna, o mapa do hero vai abaixo do texto e os rótulos do mapa crescem para continuar legíveis.

## Elevation & Depth

Sistema plano, com profundidade por camadas tonais (ink, surface) e filetes, não por sombras. As únicas sombras são de material, não de elevação: o brilho interno e o halo suave do botão cromado, e os anéis das estações, que são `box-shadow` usados como traço. O cabeçalho fixo é a única camada flutuante e se resolve com transparência e `backdrop-blur`, sem sombra.

### Shadow Vocabulary
- **Chrome bevel** (`0 1px 0 rgb(255 255 255 / 0.5) inset, 0 8px 24px -12px rgb(214 217 222 / 0.45)`): só no botão primário, dando o reflexo de metal polido.
- **Station ring** (`0 0 0 2.5px #6f747c`): anel da estação apagada.
- **Station ring lit** (`0 0 0 2.5px #e9ebee, 0 0 0 7px rgb(214 217 222 / 0.08)`): estação acesa, com auréola tênue.

### Named Rules
**The Flat Ground Rule.** Nenhuma superfície flutua por sombra. Se algo precisa se destacar, use a faixa surface, um filete ou acenda em cromo.

## Shapes

Duas formas só: o círculo e a linha. Tudo o que é clicável é pílula (raio total): botões, seletor de idioma, botão de menu, monograma. Estações são círculos de 14px (8px de raio no mapa). Linhas têm 1px quando são estrutura (filetes, trilho, rota) e 2.5 a 3px quando são traçado de mapa, sempre com pontas e junções arredondadas e ângulos de 0, 45 ou 90 graus. O hub do mapa é um círculo com a foto recortada e anel cromado de 3px; o hub do diagrama de projeto é uma pílula. O anel de foco tem 4px de raio. Não há cartões nem cantos retos intermediários.

## Components

### Buttons
Metal polido para a única ação principal; contorno discreto para o resto.
- **Shape:** pílula (9999px), altura mínima 48px, ícone de 18px com gap de 10px.
- **Primary:** preenchimento `--chrome-fill`, texto ink 15px/600, padding horizontal 24px, com o chrome bevel.
- **Hover / Focus:** o reflexo corre pelo metal (`background-position` de 30% para 90% em 600ms, ease-out-expo); ativo encolhe para 0.97. Foco é o anel global prata de 2px com offset de 3px.
- **Ghost:** transparente, borda line-strong de 1px, texto fg 15px/500, padding 16px; hover leva a borda para steel e um véu branco a 3%.

### Chips (seletor de idioma)
- **Style:** grupo em pílula com borda line e 2px de respiro; cada botão é pílula de 32px de altura, mono 12px em muted.
- **State:** o idioma ativo (`aria-pressed="true"`) vira `--chrome-fill` com texto ink; os inativos clareiam para fg no hover.

### Navigation
- **Desktop:** links de 14px em muted, gap de 28px; hover e seção atual (`aria-current`) em fg, transição de cor de 200ms.
- **Mobile:** botão de menu redondo de 44px; a lista abre abaixo do cabeçalho com itens de 18px e 14px de padding vertical.
- **Brand:** monograma "AP" num anel cromado de 1.5px sobre ink, seguido do nome em 15px/600.

### Estação (assinatura)
O átomo do sistema. Círculo ink de 14px com station ring em aço; aceso, troca para station ring lit (300ms, ease-out-expo). Fica sobre uma linha vertical de 1px: line-strong numa rota de serviços, cromo a 70% na trajetória. Na rota de serviços, o hover na linha acende a estação e clareia o ícone de muted para fg.

### Linha de conteúdo
Serviços, trajetória, stack e projetos são linhas, não cartões: filete superior line, sem fundo, padding vertical de 36 a 44px, título em Title, apoio em Label muted. Projetos secundários usam o mesmo padrão em grade de 2 colunas.

### Linha de contato
Linha de 24px (28px a partir de 640px) com filete superior, ícone prata de 24px, rótulo em 18px/600, valor em 15px muted e seta à direita. No hover o valor e a seta clareiam para fg e a seta se desloca 4px na diagonal (300ms).

### Mapa de interconexão (assinatura)
SVG com hub circular (foto) e cinco linhas octilineares de 3px até estações de serviço. Cada linha tem uma base em line e o traçado em cromo por cima. Na carga, o hub sai do desfoque, as linhas se desenham a partir do hub (1100ms, escalonadas em 110ms) e estações e rótulos acendem em seguida. Hover ou foco numa estação apaga as outras linhas para 22%. Com movimento reduzido, o mapa já aparece desenhado.

## Do's and Don'ts

### Do:
- **Do** manter o preto ink como chão dominante e alternar seções só com surface e filetes de 1px.
- **Do** reservar o cromo ao que está aceso: linha ativa, estação acesa, nome, ação principal, idioma selecionado.
- **Do** desenhar linhas de mapa em 0, 45 ou 90 graus, com 3px, pontas e junções redondas.
- **Do** usar a estação (14px, anel de 2.5px) como marcador de cada item de uma sequência.
- **Do** animar por brilho e revelação (traço, opacidade, desfoque) com ease-out-expo `cubic-bezier(0.16, 1, 0.3, 1)`, e entregar tudo já desenhado sob `prefers-reduced-motion`.
- **Do** usar ícones SVG de traço (grade de 24px, traço de 1.75, pontas redondas) em `currentColor`.

### Don't:
- **Don't** colocar conteúdo em cartões com fundo, borda completa ou sombra; use linhas com filete superior.
- **Don't** usar cromo em parágrafos, rótulos ou mais de uma frase por título.
- **Don't** criar novas cores de acento ou gradientes coloridos; a paleta é grafite e cromo.
- **Don't** usar Overpass Mono fora de dados.
- **Don't** fazer elementos entrarem deslizando na tela; a página acende, não desliza.
- **Don't** subir o halo radial acima de 0.08 de opacidade.
