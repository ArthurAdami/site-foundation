# Especificações de sites e páginas

Documento principal da biblioteca. Os tipos abaixo são os modelos já solicitados e documentados; os checklists são uma base inicial a validar com o responsável por cada projeto. Consulte [requisitos comuns](common-requirements.md).

## pages

- [404-page](tippus/pages/404-page.md)
- [about](tippus/pages/about.md)
- [appointment](tippus/pages/appointment.md)
- [blog](tippus/pages/blog.md)
- [cancellation](tippus/pages/cancellation.md)
- [case-studies](tippus/pages/case-studies.md)
- [catalog](tippus/pages/catalog.md)
- [certifications](tippus/pages/certifications.md)
- [checkout](tippus/pages/checkout.md)
- [clients](tippus/pages/clients.md)
- [confirmation](tippus/pages/confirmation.md)
- [contact](tippus/pages/contact.md)
- [cookies](tippus/pages/cookies.md)
- [delivery](tippus/pages/delivery.md)
- [differentiators](tippus/pages/differentiators.md)
- [documentation](tippus/pages/documentation.md)
- [error](tippus/pages/error.md)
- [faq](tippus/pages/faq.md)
- [form](tippus/pages/form.md)
- [history](tippus/pages/history.md)
- [home](tippus/pages/home.md)
- [landing-page](tippus/pages/landing-page.md)
- [login](tippus/pages/login.md)
- [maintenance](tippus/pages/maintenance.md)
- [news](tippus/pages/news.md)
- [password-recovery](tippus/pages/password-recovery.md)
- [plans](tippus/pages/plans.md)
- [portfolio](tippus/pages/portfolio.md)
- [pricing](tippus/pages/pricing.md)
- [privacy](tippus/pages/privacy.md)
- [products](tippus/pages/products.md)
- [profile](tippus/pages/profile.md)
- [quote](tippus/pages/quote.md)
- [registration](tippus/pages/registration.md)
- [resources](tippus/pages/resources.md)
- [returns](tippus/pages/returns.md)
- [services](tippus/pages/services.md)
- [support](tippus/pages/support.md)
- [team](tippus/pages/team.md)
- [terms-of-use](tippus/pages/terms-of-use.md)
- [testimonials](tippus/pages/testimonials.md)

## site-types

- [blog-magazine](tippus/site-types/blog-magazine.md)
- [booking](tippus/site-types/booking.md)
- [campaign](tippus/site-types/campaign.md)
- [catalog](tippus/site-types/catalog.md)
- [community-forum](tippus/site-types/community-forum.md)
- [corporate](tippus/site-types/corporate.md)
- [courses](tippus/site-types/courses.md)
- [dashboard-internal-portal](tippus/site-types/dashboard-internal-portal.md)
- [directory-classifieds](tippus/site-types/directory-classifieds.md)
- [documentation-help](tippus/site-types/documentation-help.md)
- [ecommerce](tippus/site-types/ecommerce.md)
- [events](tippus/site-types/events.md)
- [interactive-microsite](tippus/site-types/interactive-microsite.md)
- [landing-page](tippus/site-types/landing-page.md)
- [marketplace](tippus/site-types/marketplace.md)
- [members-area](tippus/site-types/members-area.md)
- [multilingual](tippus/site-types/multilingual.md)
- [news](tippus/site-types/news.md)
- [personal](tippus/site-types/personal.md)
- [portfolio](tippus/site-types/portfolio.md)
- [public-organization-nonprofit](tippus/site-types/public-organization-nonprofit.md)
- [saas-application](tippus/site-types/saas-application.md)

## Requisitos técnicos complementares

- [SEO, metadados, arquivos técnicos e IA](technical-seo.md)

## Planejamento de mídia

- [Fluxo de imagens, vídeos e navegador para Codex e Claude](media-workflow.md)

## Proposta: evolução para uma fundação reutilizável

**Estado:** estrutura atual confirmada. A revisão alinhou as seções dos modelos existentes; dados, conteúdo, decisões visuais e escopo de cada projeto continuam sujeitos à confirmação.

### Inventário observado

- O documento principal é este `regme.md`; `README.md` aponta para ele.
- `common-requirements.md` reúne requisitos comuns e referências; `technical-seo.md` trata metadados, SEO, arquivos técnicos e IA; `media-workflow.md` descreve a decisão e a prontidão para mídia.
- `tippus/site-types/` contém 22 tipos de site e `tippus/pages/` contém 44 tipos de página (66 especificações).
- Na revisão, as 66 especificações receberam as mesmas sete seções: propósito, entradas, requisitos específicos, condições e validação, situação de validação, metadados e detalhamento. As referências comuns e técnicas são verificadas separadamente.
- A uniformidade das seções não comprova aprovação ou execução. As especificações descrevem entradas e critérios por tipo; a completude para um cliente depende de seu escopo, materiais e validação.
- A existência de uma categoria na biblioteca não comprova que a pessoa tenha aprovado seus detalhes. Há textos que dizem que o tipo foi definido na conversa; a confirmação específica de cada categoria e de seus requisitos deve ser verificada, não presumida.

### Estrutura atual confirmada

Manter os caminhos existentes como fundação: este documento como índice; os três documentos comuns para critérios gerais, SEO e mídia; e as duas pastas existentes para especificações independentes de tipos de site e de página. Uma especificação aponta para os documentos comuns e acrescenta apenas suas particularidades. Não é necessário criar outra pasta para aplicar essa proposta.

Novos nomes e mudanças de organização que venham a ser sugeridos dependem de confirmação da pessoa. Não há escolha de tecnologia, publicação, funcionalidade ou indicador implícita nesta proposta.

### Padrão proposto para cada especificação

1. **Identificação e escopo:** nome do tipo, se representa um site ou página e breve definição.
2. **Propósito:** qual necessidade atende, sem presumir objetivos de um cliente específico.
3. **Informações necessárias:** itens próprios do tipo, separados em fatos confirmados, propostas e dúvidas.
4. **Condições aplicáveis:** privacidade, acessibilidade, requisitos legais e outros apenas quando pertinentes, com referência à base comum.
5. **SEO e mídia:** apontar para os documentos comuns e registrar somente decisões específicas ou pendentes; não supor que toda página precise de vídeo ou geração.
6. **Validação:** critérios observáveis proporcionais ao tipo, responsáveis e pendências; distinguir conferência documental de teste em um site real.
7. **Origem e estado:** identificar decisão fornecida pela pessoa, proposta, exemplo ilustrativo e item não validado; indicar fonte quando houver afirmação verificável.

As seções orientam o padrão documental adotado na revisão. Os requisitos comuns ficam centralizados; exemplos e conteúdos propostos não equivalem a decisões de um projeto.

### Como acrescentar um novo modelo

1. Confirmar com a pessoa o tipo e seu escopo. Verificar se uma especificação existente já o cobre.
2. Registrar propósito, informações conhecidas e dúvidas; distinguir decisões confirmadas de sugestões.
3. Criar uma especificação independente no local e com nome em inglês aprovados para o tipo, seguindo as seções propostas.
4. Referenciar os documentos comuns pertinentes; registrar condições e validação específicas sem alterar regras compartilhadas.
5. Acrescentar o link a este índice e conferir links e presença de todas as seções. Uma mudança no índice é catalogação; não altera os requisitos comuns.
6. Submeter pendências e proposta de requisitos à validação. Não afirmar teste de funcionamento sem executar o fluxo num projeto real.

### Exemplo ilustrativo

Para um tipo hipotético solicitado futuramente, sua especificação descreveria o propósito confirmado, as informações necessárias conhecidas e dúvidas; incluiria links para os documentos comuns; e registraria sua validação como pendente. O nome, os requisitos e a existência desse tipo não estão definidos aqui.

### Próximo passo concreto

Aplicar a entrada progressiva a um projeto escolhido e confirmar suas fontes e referência visual. Usar as especificações pertinentes para identificar lacunas e validar o fluxo em um ambiente real. A revisão documental das 66 especificações não substitui esse exercício.

## Projeto de criação de sites: entradas e composição

### Estado e limites

**Confirmado pela pessoa:** a base estrutural comum dos componentes é [shadcn/ui](https://ui.shadcn.com/); não haverá um conjunto próprio de componentes para cada tipo de site. A entrada principal é um `design.md` extraído de referências visuais, acompanhado do design system associado quando adequado e disponível. A estrutura deve aceitar outras informações necessárias à construção do site.

**Comprovado na documentação consultada:** o shadcn/ui descreve componentes de código aberto e composição, ajustáveis ao design system ([introdução oficial](https://ui.shadcn.com/docs)). A biblioteca desta pasta contém requisitos comuns, especificações de tipos e orientações de mídia e SEO. Isso não comprova que exista uma implementação funcional, uma instalação de componentes, uma extração realizada ou um gerador de sites.

**Pendente de validação:** formato operacional das entradas, escolhas por projeto, seleção dos componentes, conteúdo e aprovação de exemplos. O processo abaixo é uma proposta documental; não é uma funcionalidade implementada.

### Organização conceitual

1. Receber e verificar entradas e suas fontes.
2. Definir com a pessoa o tipo de site e as páginas necessárias.
3. Interpretar `design.md`, design system e outras informações autorizadas.
4. Selecionar e compor componentes a partir da base comum shadcn/ui, adaptando apresentação ao design aprovado; cada tipo de site usa combinações, sem conjuntos separados por tipo.
5. Criar exemplos para apreciação e confirmar decisões antes de construir a parte afetada.
6. Avaliar requisitos comuns, técnicos e mídia pelos documentos desta biblioteca; validar o resultado contra as entradas confirmadas.

Isto descreve responsabilidades, não uma estrutura de pastas ou tecnologia adicional. Nenhum detalhe de conteúdo, estilo, função ou arquitetura de um cliente deve ser inferido de um exemplo.

### 1. Tipo de entrada

**Receber:** `design.md` produzido a partir de referências visuais, identificação das referências e, quando existir, o design system associado e seus materiais completos ou recortes indicados pela pessoa. Também podem ser fornecidos briefing, textos, conteúdo, imagens, vídeos, exemplos de páginas, mapa de páginas e regras de negócio, conforme necessários e efetivamente disponíveis. Registrar origem, versão, autorização de uso e parte do projeto a que cada material se aplica.

**Validar:** confirmar que os materiais estão acessíveis, que `design.md` corresponde às referências fornecidas e que o design system aplicável tem informações suficientes para as decisões da etapa. Quando for extenso, identificar índice, seções relevantes e conflitos; consultar os trechos necessários sem presumir que o conjunto inteiro foi examinado. Distinguir orientações de marca, observações extraídas e lacunas.

**Sem design system adequado ou configurado:** solicitar à pessoa as informações mínimas pertinentes ao projeto: referências visuais autorizadas; orientações ou decisões para cores, tipografia, espaçamento e aparência; identidade e conteúdo disponíveis; preferências para estados e comportamento dos elementos; e quem aprova as decisões. Se algum item não existir, apresentar proposta ou exemplo explicitamente identificado e obter confirmação antes de usá-lo como decisão. Não inventar identidade nem considerar a ausência automaticamente um bloqueio para etapas independentes.

**Se estiver incompleta ou contraditória:** registrar o que falta, onde afeta a entrega e as alternativas; confirmar com quem solicitou antes de aplicar a decisão à parte afetada. Trabalhos que não dependam dela podem continuar.

### 2. Escolha do site

**Receber:** tipo ou combinação de tipos de site, objetivo, público, páginas ou seções pretendidas e ação desejada, informados pela pessoa; consultar as especificações existentes apenas quando aplicáveis. Uma categoria existente é ponto de partida, não aprovação de seu conteúdo.

**Validar:** verificar coerência entre objetivo, público, conteúdo e páginas; confirmar escopo e responsáveis por decisões. Registrar o que é conhecido, proposto e pendente.

**Se estiver incompleta:** apresentar opções apoiadas no material disponível e confirmar com a pessoa antes de definir ou construir a parte dependente; não adicionar funções ou páginas por suposição.

### 3. Componentes shadcn/ui

**Receber:** necessidades de interface e interação expressas nas entradas, design aprovado e indicação de componentes quando a pessoa já tiver escolhido algum.

**Validar:** mapear cada necessidade a componentes comuns adequados e sua composição; conferir se a escolha atende às orientações visuais, comportamento necessário e acessibilidade. Apresentar a seleção e dúvidas à pessoa quando a escolha não estiver definida. A base é comum, enquanto a combinação e o estilo dependem do projeto. Não presumir que todo componente ou comportamento esteja instalado ou pronto.

**Se estiver incompleta:** identificar a necessidade sem escolha, apresentar alternativas quando possível e confirmar antes de implementar a parte afetada. Se a base não atender uma necessidade, documentar a lacuna e obter decisão; não criar um conjunto por tipo de site.

### 4. Criação de exemplos

**Receber:** referências de sites autorizadas, o que observar em cada uma, partes do projeto a exemplificar e critérios de apreciação acordados com a pessoa.

**Validar:** identificar a origem e distinguir observação da referência, proposta ilustrativa e decisão aprovada. Conferir que exemplos usam somente conteúdo autorizado e refletem as entradas relevantes; pedir aprovação antes de tratá-los como base da parte afetada.

**Se estiver incompleta:** solicitar referências ou apresentar opções ilustrativas para escolha; confirmar o que deve ser observado antes de usar como direção. Não presumir autorização para copiar conteúdo ou identidade.

### Exemplos ilustrativos de sites de referência

Os links abaixo são exemplos de sites reais que podem ser examinados como referência; **não foram escolhidos nem aprovados como direção visual deste projeto**. Foram consultadas páginas públicas para identificar os sites, sem auditoria visual completa.

- [Stripe Payments](https://stripe.com/payments): exemplo de página de apresentação de produto ou serviço. Uma pessoa pode indicar se deseja examinar sua organização de conteúdo.
- [Vercel Platform](https://vercel.com/platform): exemplo de apresentação de plataforma. Uma pessoa pode indicar quais aspectos quer analisar.

Em um projeto real, registrar site, página, aspecto específico a observar, data e aprovação; não presumir que essas marcas ou seus conteúdos possam ser reproduzidos.

### Verificação e continuidade

- Os quatro pontos acima especificam o que receber, como validar e o que fazer quando faltar informação.
- A base comum de componentes é shadcn/ui; a seleção por projeto continua pendente.
- Há dois exemplos de sites de referência identificados como ilustrativos.
- A documentação foi preparada para orientar o trabalho. Não foram executados testes de geração de sites, seleção de componentes, extração de `design.md` ou implementação dessa arquitetura.

## Preparação de publicação e repertório de componentes

### Estado e limites

Esta seção descreve uma proposta de preparação, não um mecanismo de publicação implementado. A pasta contém documentação; ainda não há aplicação de site, comandos de build definidos, configurações de deploy aplicáveis nem integração testada. Nada aqui cria conta, conecta projeto, configura domínio ou publica um site. A execução de qualquer publicação exige autorização específica e confirmação do alvo e ambiente.

O repositório oficial [shadcn-ui/ui](https://github.com/shadcn-ui/ui) foi baixado para [shadcn-ui](shadcn-ui/), revisão `96da9cc7f1aa10580a3741664e2a77c721206c00`, em clone superficial; Git lista 6.411 arquivos rastreados e a cópia contém [licença MIT](shadcn-ui/LICENSE.md), o registro e as bases em `apps/v4/registry`. A cópia está incorporada como código-fonte de referência, não como componentes instalados em um site. Segundo a [documentação do registro](https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/README.md), parte das variantes e artefatos instaláveis é gerada; não foram instaladas dependências, gerados artefatos nem verificada a cobertura integral de todas as variantes publicadas. A seleção e integração dos componentes seguem a seção de entradas e composição deste documento.

### Informações comuns a qualquer alvo

**Entradas a confirmar por projeto:** site e versão a publicar; plataforma e conta; projeto e ambiente desejados; localização do código ou artefato; processo de construção e saída reais, quando necessários; variáveis necessárias e forma segura de configurá-las; domínio apenas se desejado. Não inventar valores, comandos de construção, credenciais ou capacidades do site.

**Saída esperada, quando houver publicação autorizada:** endereço ou identificação do resultado e registro de versão, ambiente e verificações. Uma configuração preparada sem execução não produz endereço.

**Verificação de prontidão:** confirmar que o projeto existe e que o alvo suporta sua estrutura, que entradas obrigatórias estão preenchidas, que credenciais não estão em arquivos de exemplo, que há autorização antes de conectar ou publicar e que o plano de verificação corresponde ao alvo. Não classificar como testado sem evidência.

### Claude — Artifacts

**Entradas:** conteúdo e instruções autorizados, propósito do artefato, conta e público pretendido; confirmar compatibilidade do site com o ambiente de artefatos.  
**Pré-requisitos:** acesso à criação e, se solicitado, às opções de compartilhamento da conta ou organização.  
**Fluxo:** preparar material e prévia no Claude, revisar conteúdo e comportamento; somente com autorização publicar ou compartilhar conforme opções disponíveis. A documentação oficial descreve publicação e revogação por meio da interface de artefatos.  
**Saída:** artefato e, quando publicado e disponível, link de compartilhamento.  
**Verificação:** conferir prévia, conteúdo, acesso e link após publicação autorizada.  
**Situação:** fluxo documentado a partir da [ajuda oficial](https://support.claude.com/en/articles/9547008-publish-and-share-artifacts); não foi criado ou testado artefato. Compatibilidade de um repositório completo com artefatos depende do caso.

### Codex — ChatGPT Sites

**Entradas:** instruções, conteúdo, arquivos e restrições autorizados; conta ou workspace e público pretendido.  
**Pré-requisitos:** acesso a ChatGPT Sites e permissões aplicáveis.  
**Fluxo:** criar ou preparar o Site a partir das entradas, revisar prévia e comportamento; somente com autorização realizar deploy e definir audiência. A documentação oficial informa que Sites pode ser criado a partir do Codex no aplicativo compatível; compartilhamento depende das opções e permissões da conta.  
**Saída:** Site e URL fornecida pela plataforma após deploy.  
**Verificação:** conferir a versão, URL, acesso, conteúdo e fluxos após deploy autorizado.  
**Situação:** fluxo documentado a partir da [ajuda oficial](https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites); não foi criado, conectado ou testado Site. Não se presume que qualquer projeto existente possa ser importado sem adaptação.

### Vercel

**Entradas:** código ou artefato do projeto; equipe e projeto a confirmar; diretório do projeto e parâmetros de build e saída quando exigidos; variáveis necessárias; domínio opcional.  
**Pré-requisitos:** projeto compatível e acesso à conta da pessoa quando ela decidir conectar; confirmar modalidade e ambiente antes de qualquer publicação.  
**Fluxo:** determinar configuração a partir do projeto real e das [configurações oficiais](https://vercel.com/docs/project-configuration/project-settings); registrar valores como pendentes; verificar localmente o que for possível. Em eventual publicação autorizada, conferir equipe, projeto, versão e ambiente; validar a URL resultante e o fluxo do site.  
**Saída:** identificação do deploy e URL fornecidas pela plataforma após publicação.  
**Prontidão atual:** apenas documentação; sem projeto, conta, configuração nem teste de build ou deploy.

### Cloudflare

**Entradas:** código ou artefato, conta e projeto a confirmar, modalidade de produto adequada, diretório, build e saída quando necessários, variáveis e domínio opcional.  
**Pré-requisitos:** selecionar com a pessoa o produto e método conforme o projeto. A Cloudflare recomenda considerar Workers para novos projetos; Pages também documenta integração Git e envio direto ([Pages](https://developers.cloudflare.com/pages/get-started/), [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/)). Não presumir que um único método atenda qualquer site.  
**Fluxo:** identificar a modalidade, conferir suas exigências oficiais e registrar campos pendentes; verificar localmente o que for possível. Em eventual publicação autorizada, confirmar conta, projeto, versão e ambiente e validar a URL e os fluxos resultantes.  
**Saída:** identificação e endereço fornecidos pelo produto escolhido após publicação.  
**Prontidão atual:** apenas documentação; produto e método não escolhidos, sem conta, configuração ou teste.

### Marcadores ilustrativos, não executáveis

Os valores seguintes representam informações a obter, não um arquivo de configuração pronto para qualquer plataforma:

- Alvo: `<plataforma-confirmada>`
- Projeto: `<nome-confirmado>`
- Diretório e saída: `<definidos-pelo-projeto>`
- Construção: `<comando-confirmado-se-necessário>`
- Variáveis: `<nomes-necessários-sem-valores-secretos>`
- Domínio: `<opcional-se-confirmado>`

Antes de usar, confrontar cada campo com o projeto e a documentação atual do alvo. A criação de uma configuração funcional depende dessas escolhas; este exemplo não comprova compatibilidade nem cria um mecanismo executável.

## Entrada progressiva para desenvolvimento de sites

A sequência comum está em [.agents/skills/site-intake/SKILL.md](.agents/skills/site-intake/SKILL.md), com cópia equivalente em [.claude/skills/site-intake/SKILL.md](.claude/skills/site-intake/SKILL.md). Pergunta apenas o que falta, exige referência visual aceita, permite decidir por desenvolvimento prévio e instrui o agente a aguardar nas etapas dependentes enquanto faltarem informações indispensáveis. A referência deve ser imagem, storyboard, simulação ou desenvolvimento prévio; texto sozinho não substitui referência visual.

### Adaptação por ambiente

- **Codex:** `.codex/hooks.json` injeta um lembrete em UserPromptSubmit; `AGENTS.md` aponta para a skill em `.agents/skills`. O projeto e o hook precisam ser reconhecidos e confiáveis no ambiente; revisar em `/hooks` quando aplicável. O hook precisa de Node.js disponível.
- **Claude Code:** `.claude/settings.json` injeta lembrete em UserPromptSubmit, `CLAUDE.md` aponta à cópia da skill em `.claude/skills`. O carregamento depende da sessão e das configurações de confiança. O hook precisa de Node.js.
- **Antigravity:** `.agents/hooks.json` injeta lembrete em PreInvocation; `.agents/rules/site-intake.md` é uma regra always_on e a skill fica em `.agents/skills`. Abrir `sites` como raiz do workspace e conferir as personalizações ativas; o hook precisa de Node.js.
- **OpenCode v1:** `.opencode/plugins/site-intake.js` fornece um hook de contexto e `AGENTS.md` aponta para a skill comum. Esse adaptador usa a API v1; a API v2 é diferente e ainda não há adaptador v2 implementado. Confirmar a versão e carregamento antes de usar.

Os adaptadores inserem instruções condicionais ao agente, não validam automaticamente a conversa nem impedem tecnicamente todas as ações. A execução depende de descoberta, confiança e suporte do ambiente; iniciar a sessão na pasta `sites` é a forma pretendida. A pasta não foi identificada como repositório Git nesta sessão, e a descoberta em subpastas ou em sessões remotas pode variar. Não há ativação nem teste real de conversa nos quatro ambientes.

### Conferência

Foram verificados localmente o parsing das três configurações JSON e a execução dos três comandos Node: os dois lembretes foram emitidos e a saída do Antigravity era JSON válido. Também foram verificadas a equivalência das duas skills e a execução isolada do adaptador OpenCode v1, que acrescentou o lembrete ao contexto simulado. Isso não testa carregamento pelos aplicativos nem a obediência do agente. Para validar cada ambiente, iniciar uma sessão na raiz, conferir hooks e skill reconhecidos, pedir um site sem referência, verificar se o agente pergunta e não constrói, fornecer referência e respostas, verificar retomada, e testar um pedido de documentação isolada. Para OpenCode, testar com a versão compatível v1.

Foram acrescentados os modelos solicitados de página de vendas, upsell e proposta comercial. Outros modelos podem ser adicionados a `tippus/pages` e ao índice conforme solicitação, sem mudar a entrada comum.

Fontes: [Codex hooks](https://developers.openai.com/codex/hooks), [Claude Code hooks](https://code.claude.com/docs/en/hooks), [Antigravity hooks](https://antigravity.google/docs/hooks), [OpenCode plugins](https://dev.opencode.ai/docs/plugins/) e [migração OpenCode v2](https://opencode.ai/v2/docs/build/plugins/migrate-v1).

## Processos e modelos de negócios

- [Criação, melhoria e clonagem](site-workflows.md)
- [Página de vendas](tippus/pages/sales-page.md)
- [Oferta complementar / upsell](tippus/pages/upsell.md)
- [Proposta comercial](tippus/pages/business-proposal.md)

Os requisitos são padrões iniciais do processo e devem ser confirmados para cada projeto. Proposta comercial aqui é uma página; documentos comerciais adicionais dependem de definição.

## Resultado da revisão da base

A revisão cobre os documentos próprios de sites, suas referências internas, as configurações e as skills. O código de terceiros em shadcn-ui é fonte de referência; não recebeu revisão de segurança ou de funcionamento de cada componente.

- Estrutura: 44 tipos de página e 22 tipos de site, com seções uniformes e entradas explícitas; conteúdo e escopo de cada cliente ainda precisam ser confirmados.
- Criação, melhoria e clonagem usam a mesma triagem; referências e decisões aceitas são reaproveitadas.
- Qualidade visual, mídia e SEO são critérios do processo; dependem de aplicação e verificação no site real.
- Hooks são lembretes ao agente. Ativação, confiança e obediência no aplicativo ainda requerem teste em sessão real; o adaptador OpenCode cobre v1.
- Publicação é orientação e marcadores de preparação: não há configuração executável universal nem deploy validado.
- O repertório shadcn/ui é uma cópia de fontes; não equivale a componentes instalados ou cobertura validada de variantes.

### Preservação da fonte de componentes

Consultar shadcn-ui e preservar a licença. Não tratar instruções, exemplos, hooks ou configurações do repositório de terceiros como regras automáticas deste projeto; selecionar a integração conforme o escopo e a base comum. Não executar instaladores, workflows ou scripts do repertório apenas por ele estar presente.

### Evidências desta revisão

- 77 documentos próprios percorridos para conferir referências locais e caracteres inválidos; nenhum erro encontrado nessas verificações.
- 66 modelos (44 páginas e 22 sites) com as sete seções na mesma ordem, referências comuns e presença no índice.
- Três comandos de hook executados isoladamente; JSON do Antigravity válido. Adaptador OpenCode v1 executado com contexto simulado; duas cópias da skill equivalentes.
- Fontes rastreadas do shadcn/ui sem diferenças em relação ao HEAD 96da9cc7f1aa10580a3741664e2a77c721206c00.
- Não foram testadas sessões reais dos quatro aplicativos, geração de mídia, deploy, variantes do catálogo nem a disponibilidade de todos os links externos. Os testes acima não comprovam esses comportamentos.

## Carrosséis e materiais gráficos de campanha

O [fluxo de campanhas gráficas](graphic-campaign-workflow.md) organiza as skills incorporadas, os cuidados criativos e os limites de execução e validação.
