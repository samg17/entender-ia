# Diagramas

Esta pasta guarda diagramas reutilizáveis que explicam conceitos deste repositório.

## Princípios

- Diagramas devem explicar conceitos, não ser decorativos.
- Prefira formatos abertos e versionáveis: **Mermaid** para diagramas conceituais simples (podem ser embutidos diretamente em Markdown/MDX), **SVG** para visuais mais elaborados.
- Cada diagrama relevante deve ter um arquivo de metadados correspondente em [`metadata/`](metadata/).

## Formato dos metadados

```yaml
id: nome-do-diagrama
title: "Título legível"
description: "O que este diagrama explica."
concepts:
  - id-do-conceito-relacionado
source: "diagrama-nome.mmd ou diagrama-nome.svg"
last_reviewed: "2026-09-28"
```

## Como referenciar um diagrama de um conteúdo

Inclua o `id` do diagrama nas notas do conteúdo ou, quando o site futuro suportar, referencie-o diretamente. Por enquanto, diagramas Mermaid podem ser embutidos diretamente no corpo do `.mdx` usando um bloco \`\`\`mermaid.
