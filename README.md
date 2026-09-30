# Entender IA

Conhecimento aberto para entender, avaliar e aplicar inteligência artificial.

Este repositório é uma base pública de conhecimento sobre fundamentos de IA, modelos mentais, sistemas, negócios e organizações. O objetivo não é ensinar prompts ou reunir ferramentas — é ajudar pessoas a construir entendimento real sobre o que estão usando, construindo, comprando ou delegando.

**[→ Leia o Manifesto](MANIFESTO.md)**

- [Explorar conteúdos](content/)
- [Contribuir](CONTRIBUTING.md)

## Por que existe

O acesso à IA cresceu muito mais rápido do que o entendimento sobre ela. Este projeto existe para reduzir essa distância: combinando fundamentos técnicos, pensamento crítico, visão de negócios e critérios práticos para avaliar quando e como usar IA.

No futuro, este conteúdo deve alimentar uma seção pública em `samarghattas.com.br/ai`. O repositório funciona como a fonte da verdade (*source of truth*) — o site será apenas uma forma de apresentação.

## Para quem é

Para qualquer pessoa que queira entender IA além do nível de "saber usar": profissionais avaliando ferramentas, líderes tomando decisões de adoção, times técnicos e não técnicos, e qualquer um construindo julgamento sobre o assunto.

## O que este projeto NÃO é

- Não é uma biblioteca de prompts.
- Não é um diretório de ferramentas de IA.
- Não é uma coleção de atalhos ou hacks.
- Não é um repositório de conteúdo gerado automaticamente sem curadoria.

## Como navegar

O conteúdo vive em [`content/`](content/), organizado por categoria:

| Categoria | Descreve |
|---|---|
| [`fundamentals/`](content/fundamentals/) | Como IA e modelos funcionam |
| [`thinking/`](content/thinking/) | Modelos mentais e critérios de julgamento |
| [`systems/`](content/systems/) | Como sistemas baseados em IA são construídos |
| [`business/`](content/business/) | Mercado, economia, estratégia e modelos de negócio de IA — com subcategorias em `market/`, `economics/`, `strategy/`, `business-models/` e `perspectives/` |
| [`organization/`](content/organization/) | Como organizações trabalham melhor com IA |
| [`playbooks/`](content/playbooks/) | Frameworks orientados a decisões |
| [`glossary/`](content/glossary/) | Definições curtas de conceitos |

Cada conteúdo é um dos quatro tipos: **concept** (o que é isso?), **guide** (como devo pensar sobre isso?), **playbook** (como devo decidir?) ou **perspective** (análises de afirmações populares sobre IA, software e mercado que merecem mais contexto — não é uma seção de "mitos" ou debunking). Veja os [templates](templates/).

## Índice de conteúdos

Todo o conteúdo está em `status: "draft"` ou `"in-review"`, aguardando revisão editorial.

### Fundamentals

- [O que realmente é um LLM](content/fundamentals/what-is-an-llm.mdx)
- [Janela de contexto](content/fundamentals/context-windows.mdx)

### Thinking

- [Problem framing: antes de decidir onde usar IA](content/thinking/problem-framing.mdx)
- [Quando não usar IA](content/thinking/when-not-to-use-ai.mdx)
- [Entendimento é o novo gargalo](content/thinking/understanding-is-the-bottleneck.mdx)

### Systems

- [RAG: quando a IA precisa buscar antes de responder](content/systems/rag.mdx)
- [Agentes: quando a IA deixa de só responder e passa a agir](content/systems/agents.mdx)

### Business / Market

- [Entendendo o mercado de IA: da computação em nuvem à economia atual](content/business/market/from-cloud-to-ai.mdx)

### Business / Economics

- [A economia dos sistemas de IA](content/business/economics/01-economics-of-software-and-ai.mdx)
- [Custo por tarefa concluída com sucesso](content/business/economics/02-cost-per-successful-task.mdx)
- [Custo, qualidade e latência: três variáveis, não uma](content/business/economics/03-cost-quality-latency-tradeoffs.mdx)
- [A economia da confiabilidade](content/business/economics/04-economics-of-reliability.mdx)
- [Escolher a menor capacidade que resolve o problema](content/business/economics/05-model-economics-and-optimization.mdx)

### Business / Strategy

- [Como avaliar uma oportunidade de IA](content/business/strategy/ai-opportunity-assessment.mdx)

### Business / Business Models

- [AI-enabled vs. AI-native](content/business/business-models/01-ai-enabled-vs-ai-native.mdx)
- [Service-as-software: quando o cliente compra o resultado, não a ferramenta](content/business/business-models/02-from-software-to-service-as-software.mdx)
- [Como IA muda pricing: seat, uso e resultado coexistindo](content/business/business-models/03-how-ai-changes-pricing.mdx)
- [Como IA muda serviços profissionais](content/business/business-models/04-how-ai-may-change-professional-services.mdx)

### Business / Competitive Advantage

- [Usar IA para ficar mais eficiente não significa construir vantagem competitiva](content/business/competitive-advantage/01-productivity-is-not-strategy.mdx)
- [Ser diferente não significa possuir vantagem competitiva](content/business/competitive-advantage/02-differentiation-vs-competitive-advantage.mdx)
- [O que acontece quando sua tecnologia deixa de ser rara?](content/business/competitive-advantage/03-commoditization-in-ai.mdx)
- [Criar algo valioso não significa capturar o valor criado](content/business/competitive-advantage/04-value-creation-vs-value-capture.mdx)
- [Quando uma camada comoditiza, a vantagem pode mudar de lugar](content/business/competitive-advantage/05-where-value-moves.mdx)
- [Quando a interface muda, a distribuição também muda](content/business/competitive-advantage/06-distribution-is-changing.mdx)
- [O que realmente torna uma vantagem difícil de reproduzir?](content/business/competitive-advantage/07-barriers-switching-costs-and-moats.mdx)
- [Se o modelo pode mudar amanhã, o que realmente pertence ao seu produto?](content/business/competitive-advantage/08-capabilities-not-model-dependencies.mdx)
- [Se todos acessam o mesmo modelo, o que pode continuar diferente?](content/business/competitive-advantage/09-context-data-workflows-and-learning-loops.mdx)
- [Uma boa vantagem não precisa durar para sempre](content/business/competitive-advantage/10-transient-advantage.mdx)
- [Teste a durabilidade da sua vantagem](content/business/competitive-advantage/11-durability-test.mdx)

### Business / Perspectives

- [Perspectivas](content/business/perspectives/popular-ai-claims-need-context.mdx)

### Organization

- [Alfabetização em IA não é alfabetização em prompts](content/organization/ai-literacy.mdx)

### Playbooks

- [Avaliar um caso de uso de IA](content/playbooks/evaluate-ai-use-case.mdx)

## Princípios editoriais

- [`principles/editorial-principles.md`](principles/editorial-principles.md) — os critérios que guiam o que entra e como é escrito.
- [`principles/evidence-policy.md`](principles/evidence-policy.md) — como tratamos fontes e evidências.
- [`principles/ai-assisted-content.md`](principles/ai-assisted-content.md) — como IA pode e não pode ser usada na criação deste conteúdo.
- [`principles/content-workflow.md`](principles/content-workflow.md) — o fluxo recomendado de fontes brutas até conteúdo publicado.

## Como contribuir

Este é um projeto aberto, mas com curadoria editorial centralizada. Qualquer pessoa pode propor, ninguém além dos mantenedores decide o que entra na branch principal. Veja [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Idioma

O conteúdo é escrito inicialmente em português brasileiro (`pt-BR`). A arquitetura já está preparada para suportar traduções futuras sem duplicar ou quebrar a base existente.

## Licença

O conteúdo editorial é licenciado sob [Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0)](LICENSE) — uso e adaptação livres mediante atribuição, mas **sem uso comercial** sem autorização do mantenedor.
