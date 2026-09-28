# Fluxo de criação de conteúdo

Este é o fluxo recomendado para transformar material bruto em conteúdo publicado neste repositório. Ele não é obrigatório passo a passo para toda contribuição pequena, mas é a referência para conteúdo novo e substancial.

```
Fontes e materiais
      ↓
Inventário de evidências
      ↓
Mapa do tema
      ↓
Claims
      ↓
Teses / interpretações
      ↓
Estrutura do conteúdo
      ↓
Primeiro draft
      ↓
Revisão factual
      ↓
Revisão editorial
      ↓
Diagramas
      ↓
Relações com outros conteúdos
      ↓
Publicação
```

## O que cada etapa significa

- **Fontes e materiais** — o ponto de partida pode ser qualquer coisa: links, papers, livros, relatórios, PDFs, notas próprias, transcrições, apresentações, hipóteses, experiência profissional. O material não precisa chegar organizado.
- **Inventário de evidências** — separar, dentro do material bruto, o que é fonte primária, secundária, e o que é interpretação própria (ver [`evidence-policy.md`](evidence-policy.md)).
- **Mapa do tema** — entender que conceitos, perguntas e conexões o tema toca antes de decidir o que escrever.
- **Claims** — extrair as afirmações factuais específicas que o conteúdo vai fazer, e checar se cada uma tem evidência correspondente.
- **Teses / interpretações** — o que o projeto está propondo como framework ou ponto de vista, claramente distinto dos claims factuais.
- **Estrutura do conteúdo** — escolher o tipo (`concept`, `guide`, `playbook`, `perspective`) e a categoria/subcategoria adequada antes de escrever.
- **Primeiro draft** — escrever com `status: "draft"`.
- **Revisão factual** — verificar claims, referências e precisão.
- **Revisão editorial** — verificar aderência aos [princípios editoriais](editorial-principles.md).
- **Diagramas** — quando um diagrama ajudaria a explicar um mecanismo, não como decoração (ver [`diagrams/README.md`](../diagrams/README.md)).
- **Relações com outros conteúdos** — preencher `prerequisites`, `related`, `next` no frontmatter.
- **Publicação** — merge via Pull Request revisado (ver [`CONTRIBUTING.md`](../CONTRIBUTING.md)).

## Princípios importantes deste fluxo

- **Uma fonte não precisa virar um artigo.** Muitas fontes alimentam o inventário de evidências sem nunca originar um conteúdo próprio.
- **Um tema pode originar vários conteúdos.** Um assunto amplo (ex.: "economia de sistemas de IA") tende a se decompor em vários `concept`, `guide` ou `perspective` menores, mais fáceis de manter corretos, em vez de um artigo único e extenso.
- **Um conteúdo não deve existir apenas porque um tema está popular.** Popularidade de um assunto não é, por si só, razão editorial suficiente — volte para os [princípios editoriais](editorial-principles.md#evidência-acima-de-volume).
