# Política de evidências

Este projeto trata conhecimento sobre IA como algo que precisa ser fundamentado, não apenas afirmado. Esta política define como tratamos fontes e evidências.

## Princípios

**Quantidade de links não equivale a qualidade.** Um conteúdo com três referências primárias bem escolhidas é mais confiável do que um com vinte links genéricos.

**Fontes primárias são preferidas quando disponíveis.** Documentação oficial, papers originais, dados publicados pela própria organização envolvida — preferimos essas fontes a artigos secundários que as resumem ou interpretam.

**Afirmações relevantes devem ser verificáveis.** Se um conteúdo faz uma afirmação factual específica (um número, um resultado, uma capacidade ou limitação de um sistema), deve haver uma referência que sustente essa afirmação.

**Evidências devem estar ligadas às afirmações que sustentam.** Não basta ter uma lista de referências no fim do texto — quando possível, a afirmação específica deve indicar de onde vem.

**Opinião deve ser distinguida de evidência.** Um ponto de vista editorial, um modelo mental proposto pelo projeto, ou uma interpretação são legítimos, mas devem ser apresentados como tal — não disfarçados de fato estabelecido.

**Incerteza deve ser declarada.** Quando um tema é controverso, dependente de contexto, ou ainda não tem consenso, o conteúdo deve dizer isso explicitamente em vez de apresentar uma posição como definitiva.

## Fontes primárias, secundárias e perspectiva editorial

É importante distinguir três coisas diferentes:

**Fontes primárias** — papers, documentação oficial, *filings*, dados públicos, pesquisas originais, standards, relatórios técnicos originais. São a evidência mais forte disponível.

**Fontes secundárias** — análises, artigos técnicos, publicações especializadas, sínteses confiáveis de terceiros sobre uma fonte primária. Úteis, especialmente para contexto, mas um nível a mais de interpretação entre o leitor e o dado original.

**Perspectiva editorial** — interpretação, framework, hipótese ou análise criada pelo próprio projeto. Uma perspectiva editorial pode ser valiosa e bem fundamentada, mas **não deve ser apresentada como evidência** apenas porque parece plausível ou bem escrita. Ela deve ser identificada como interpretação do projeto, não como fato estabelecido.

## Padrão para claims (afirmações factuais)

Referências no final de um conteúdo não são suficientes quando afirmações importantes específicas não podem ser rastreadas até uma fonte. Isso vale especialmente para conteúdo de negócios e mercado, onde é fácil confundir opinião, previsão e fato. Regras práticas:

- Claims factuais relevantes devem ter evidência correspondente — não basta a lista de referências existir, ela precisa sustentar a afirmação específica feita.
- Afirmações sobre mercado devem indicar se são observação (algo registrado), hipótese (algo proposto) ou dado (algo medido).
- Dados históricos devem informar período e contexto — um número sem data e sem escopo não é verificável.
- Correlação não deve ser apresentada automaticamente como causalidade.
- Previsões (*forecasts*) devem ser claramente identificadas como previsões, nunca como fatos já ocorridos.
- Opiniões de investidores, empresas ou consultorias específicas não devem ser apresentadas como fatos universais — atribua a opinião a quem a fez.

A arquitetura deste repositório está preparada para eventualmente suportar citação em nível de afirmação (*claim-level citations*) no site futuro, mas isso não está implementado agora — por enquanto, a prática editorial acima é o que garante rigor.

## Como referenciar

Referências vivem em [`references/sources.yaml`](../references/sources.yaml), cada uma com um `id` estável. Conteúdos citam essas referências pelo `id` no campo `references` do frontmatter (veja [`schemas/content.schema.json`](../schemas/content.schema.json)).

Tipos de fonte aceitos incluem: `paper`, `official-documentation`, `research`, `book`, `dataset`, `standard`, `article`. Fontes do tipo `article` (jornalismo, blogs) devem ser usadas com mais cautela do que fontes primárias, e preferencialmente para contexto, não para afirmações técnicas centrais.

## O que não aceitamos

- Referências que o contribuidor não verificou pessoalmente.
- Referências geradas ou sugeridas por um modelo de IA sem confirmação de que existem e dizem o que se afirma que dizem (veja [`ai-assisted-content.md`](ai-assisted-content.md)).
- Links quebrados ou que não correspondem mais ao conteúdo citado.
