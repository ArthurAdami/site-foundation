# Motor criativo e agentes

## Situação e limites

Esta base organiza procedimentos e configurações de agentes; sua execução depende do cliente, da versão, das permissões e das ferramentas disponíveis. Configuração presente não prova descoberta, delegação ou qualidade do site. O teste anterior da FHOP foi rejeitado; isso não identifica sozinho uma causa técnica específica.

## Fluxo operacional

1. **Entrada:** site-intake reúne objetivo, público, fontes e referência visual obrigatória; não repete respostas. Ausências bloqueiam apenas a parte afetada.
2. **Arquitetura:** site-architecture organiza páginas, jornada, seções e conteúdo com confirmação do responsável.
3. **Direção e copy:** site-design traduz referências em decisões específicas e site-copy trabalha com fatos verificáveis. Apresentar amostra visual representativa para aceite antes de expandir a construção. A direção aceita pode ser revista a pedido.
4. **Construção:** site-build parte da amostra aprovada e cria primeiro recorte representativo, depois a inicial e seções/páginas aprovadas. A biblioteca shadcn/ui é base estrutural adaptável, não identidade visual pronta.
5. **SEO e revisão:** site-seo e site-validation conferem o resultado real e suas evidências. O responsável decide a aceitação visual. Registrar desvios conhecidos; não prometer perfeição por checklist.

O agente principal coordena e fornece contexto. Delegue funções quando o cliente permitir; tarefas com arquivos compartilhados precisam de um único responsável e etapas dependentes devem ser sequenciais. Sem subagentes, o principal executa as mesmas skills. As instruções não constituem bloqueio técnico nem autorizam publicação ou conexões.

## Galerias e pesquisa aplicada

Consulte [design-references.md](design-references.md) para pesquisar Awwwards, CSS Design Awards, SiteInspire e The FWA por objetivo e registrar evidências, adaptações e limites. A pesquisa complementa a referência aceita.

## Repertório de inspiração

Exemplos ilustrativos selecionados anteriormente; não são identidades aprovadas para todos os projetos. Revisite a referência escolhida em cada trabalho e registre o que usar e por quê; as páginas mudam. A referência aprovada pela pessoa continua obrigatória. Não reutilize marcas ou recursos de terceiros sem autorização.

- [AbacatePay](https://www.abacatepay.com/): personalidade e clareza comercial.
- [Apple](https://www.apple.com/br/): foco em produto, escala e hierarquia.
- [Craft](https://www.craft.do/): apresentação de produto e composição editorial.
- [Mercury](https://mercury.com/): clareza e posicionamento visual.
- [Linear](https://linear.app/): hierarquia e apresentação de interface.
- [Things](https://culturedcode.com/things/): simplicidade e demonstração de uso.
- [Stripe](https://stripe.com/br): arquitetura de conteúdo e comunicação de produto.
- [Ramp](https://ramp.com/): clareza de proposta e jornada.
- [Wise](https://wise.com/br/): comunicação direta e contraste.
- [Notion](https://www.notion.com/): explicação de produto e estrutura.
- [Raycast](https://www.raycast.com/): demonstração de interface e ritmo.
- [Resend](https://resend.com/): clareza tipográfica e conteúdo técnico.
- [Vercel](https://vercel.com/): hierarquia de produto e linguagem visual.
- [Pitch](https://pitch.com/): apresentação visual e ritmo.
- [Nubank](https://nubank.com.br/): identidade e acessibilidade da mensagem.
- [Oura](https://ouraring.com/): fotografia e foco no produto.
- [Bang & Olufsen](https://www.bang-olufsen.com/): fotografia e posicionamento.
- [Sonos](https://www.sonos.com/): produto, imagem e composição.
- [Aesop](https://www.aesop.com/): direção editorial e tipografia.
- [Airbnb](https://www.airbnb.com.br/): descoberta e estrutura de navegação.

As associações são sugestões de observação, não auditoria atual das páginas. A adequação, direitos e fidelidade devem ser verificados no projeto concreto.

## Ambientes e verificação

- Codex: .codex/agents/*.toml; skills comuns em .agents/skills/.
- Claude Code: .claude/agents/*.md e skills em .claude/skills/.
- OpenCode: .opencode/agents/*.md e skills comuns em .agents/skills/.
- Antigravity: .agents/agents/*/agent.md e .agents/skills/; disponibilidade varia conforme superfície e versão.

Abra a raiz desta base em cada cliente, confirme que as skills e os seis agentes aparecem, execute uma tarefa de amostra autorizada e confira o retorno e as permissões. Descoberta, delegação, carregamento real e comportamento de cada ambiente permanecem pendentes até serem testados no ambiente da pessoa. Não configurar credenciais, MCP, publicação ou modelo por estes arquivos.

Fontes de formato: [Codex — subagentes](https://learn.chatgpt.com/docs/agent-configuration/subagents), [Claude Code — subagentes](https://code.claude.com/docs/en/sub-agents), [OpenCode — agentes](https://opencode.ai/docs/agents/), [OpenCode — skills](https://docs.opencode.ai/docs/skills/), [Antigravity — agentes](https://antigravity.google/blog/introducing-custom-agents) e [Antigravity CLI — agentes](https://antigravity.google/docs/cli/commands/agents/).


## Identidade dos agentes Site Foundation

Os agentes nativos usam o prefixo `sf-`, identificando esta fundação. As skills mantêm seus nomes existentes e são compartilhadas pelos adaptadores:

| Agente | Função | Skill |
|---|---|---|
| sf-design-director | Direção visual e amostra | site-design |
| sf-experience-architect | Jornada e estrutura | site-architecture |
| sf-copy-strategist | Mensagem e texto | site-copy |
| sf-site-builder | Construção da experiência | site-build |
| sf-seo-specialist | SEO e dados da página | site-seo |
| sf-quality-reviewer | Revisão visual e funcional | site-validation |

Os arquivos acompanham o repositório: ao clonar uma versão que os contenha e abrir sua raiz como projeto, não é necessário criar cada agente manualmente. Sua descoberta depende do cliente, da versão, da confiança no projeto e das permissões; pode ser necessário iniciar uma nova sessão. Consulte a lista de agentes do cliente para confirmar. Clonar não instala o aplicativo nem prova que o agente foi carregado. A versão local só chega ao repositório remoto depois de commit e envio autorizados.


## Verificação local do Antigravity

Na verificação de 27/10/2026, o comando `agy agents` foi executado tanto na pasta sites quanto na raiz Git desta fundação. Em ambos os casos, listou apenas `firestore-rules-author`; não listou os agentes `sf-*`. A repetição na raiz Git após incluir `subagent: true` teve o mesmo resultado. O campo segue a [documentação de subagentes](https://antigravity.google/docs/cli/subagents), mas a causa da ausência na listagem não foi determinada. Portanto a descoberta e a delegação dos agentes SF no Antigravity local não estão validadas. As demais plataformas também ainda exigem teste real.
