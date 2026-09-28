# Como contribuir

Este é um projeto aberto de conhecimento, mas não uma base de conhecimento sem curadoria.

Qualquer pessoa pode sugerir, corrigir, propor ou discutir. As decisões editoriais finais permanecem com os mantenedores do projeto.

## O que você pode fazer

- Corrigir informações incorretas ou desatualizadas.
- Melhorar explicações existentes (clareza, precisão, exemplos).
- Sugerir novas referências e fontes.
- Propor novos conceitos, guias ou playbooks.
- Adicionar exemplos práticos.
- Sugerir ou criar diagramas.
- Abrir discussões sobre taxonomia, estrutura ou direção do conteúdo.

## Fluxo de contribuição

```
Issue / Proposta
      ↓
Discussão
      ↓
Pull Request
      ↓
Revisão editorial
      ↓
Merge
```

Nenhuma alteração entra diretamente na branch principal — toda mudança passa por Pull Request e revisão.

Para **novos conteúdos substanciais** (um novo conceito, guia ou playbook inteiro), abra uma Issue antes de escrever o Pull Request. Isso evita trabalho duplicado e alinha escopo antes de você investir tempo escrevendo.

Para **correções pequenas** (erro de digitação, link quebrado, imprecisão factual pontual), pode abrir o Pull Request diretamente.

## Contribuições assistidas por IA

IA pode ser usada para ajudar a pesquisar, redigir ou revisar contribuições — isso é esperado e incentivado. Mas quem contribui continua responsável por:

- **Precisão** — o conteúdo está correto?
- **Fontes** — as referências existem e dizem o que a contribuição afirma que dizem?
- **Originalidade** — o conteúdo não é uma cópia disfarçada de outra fonte?
- **Qualidade** — o texto está claro e segue os [princípios editoriais](principles/editorial-principles.md)?

Nunca inclua uma referência que você não verificou pessoalmente. Veja [`principles/ai-assisted-content.md`](principles/ai-assisted-content.md).

## Requisitos técnicos de um Pull Request

- Frontmatter válido (veja [`schemas/content.schema.json`](schemas/content.schema.json) e os [templates](templates/)).
- `id` e `slug` únicos, sem duplicação.
- Links internos funcionando.
- Referências citadas por `id` existente em [`references/sources.yaml`](references/sources.yaml) — se a fonte não existir ainda, adicione-a lá.
- `status: "draft"` para conteúdo novo, até revisão editorial aprovar promoção para `"reviewed"` ou equivalente.

Use o [checklist do Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md) antes de submeter.

## Governança

- Qualquer pessoa pode abrir Issues e Pull Requests.
- Apenas mantenedores aprovam merges na branch principal.
- `MANIFESTO.md` e os arquivos em `principles/` são conduzidos pelos mantenedores — contribuições externas podem propor mudanças, mas a decisão final é editorial.

## Idioma

Todo o conteúdo editorial (textos, títulos, descrições) deve ser escrito em português brasileiro por enquanto. Não crie conteúdo em inglês nem duplique arquivos para tradução — a estrutura já está preparada para isso no futuro (veja o campo `locale` no frontmatter).
