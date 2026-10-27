# Estrutura de mídia para projetos de sites

## Objetivo e situação

Definir como identificar, criar, receber, verificar e integrar imagens e vídeos ao construir um site com Codex ou Claude. Este é um modelo de processo, não uma integração implementada.

**Inventário inicial deste projeto (histórico, revalidar por ambiente):** a lista de ferramentas expõe geração nativa de imagem do Codex, ferramentas Higgsfield de geração de imagem e vídeo e controle de navegador. A presença na lista não comprova autenticação, cota, autorização, acesso à conta ou geração bem-sucedida. A documentação do Google descreve geração de imagens e vídeos no Flow. Não foi aberto o Flow, consultada nenhuma conta, gerada mídia, testada conexão ou integrado um site.

**Pendente por pessoa e projeto:** confirmar disponibilidade, acesso, condições, custos, limites, direitos e autorizações das ferramentas; executar e registrar os testes previstos abaixo. As ferramentas e opções podem mudar.

## Política de ferramentas

| Necessidade | Codex | Claude | Condição |
|---|---|---|---|
| Criar ou editar imagem | Usar diretamente a capacidade nativa de criação de imagem do Codex quando disponível. | Usar Flow ou ferramenta específica de imagem, como Higgsfield, Fal ou Magnific, conforme disponibilidade e adequação. | Confirmar disponibilidade com a pessoa antes de executar; não presumir que qualquer serviço ou modelo faça uma operação específica. |
| Criar vídeo | Usar ferramenta de vídeo disponível e autorizada; Flow pelo navegador é alternativa. | Usar Flow ou ferramenta específica de geração de mídia que efetivamente suporte vídeo. | Confirmar suporte, conta, custos e autorização. Higgsfield, Fal e Magnific são exemplos, não garantias de suporte a qualquer modalidade. |
| Acessar Flow | Usar controle de navegador apenas com autorização da pessoa. | Usar controle de navegador disponível no ambiente do Claude apenas com autorização da pessoa. | Confirmar que há navegador controlável, acesso à conta e permissão; se faltar algo, interromper a etapa dependente. |

Não configurar MCP diretamente no projeto, não incluir credenciais e não pressupor conexão automática. Cada pessoa configura sua própria conexão no ambiente que usa; esta documentação apenas define pontos de integração e verificações. Se uma conexão ou ferramenta não existir, pedir autorização para controle do navegador e confirmar acesso ao Flow como alternativa. Autorização para navegar não substitui a confirmação de disponibilidade ou condições de geração.

## Fluxo de decisão

1. **Identificar necessidade:** listar cada imagem ou vídeo, página, objetivo, público e se é informativo, decorativo ou essencial à tarefa. Avaliar mídia existente autorizada antes de criar uma nova.
2. **Definir peça:** registrar briefing, referências autorizadas, dimensões ou proporção necessárias, contexto visual, restrições, texto alternativo ou legenda quando aplicáveis e responsável pela aprovação. Não criar mídia sem necessidade.
3. **Escolher rota:** para imagem no Codex, usar geração nativa; para imagem no Claude, Flow ou serviço de imagem disponível. Para vídeo em qualquer fluxo, escolher ferramenta de vídeo disponível ou Flow. Seguir as regras da tabela.
4. **Verificar pré-condições:** antes de executar a etapa dependente, confirmar com a pessoa que a ferramenta está disponível e, para Flow, que autoriza controle do navegador. Verificar conta, suporte à modalidade, custo e direitos aplicáveis. Se faltar confirmação, registrar bloqueio e continuar apenas o trabalho independente.
5. **Produzir amostra:** criar ou receber uma amostra representativa, registrar ferramenta, data, instruções e referências usadas. Revisar a qualidade e pertinência antes de produzir variantes ou vídeos mais caros.
6. **Validar e integrar:** aprovar a mídia, conferir direitos, inserir no ponto correto do site, gerar versões apropriadas, registrar origem e testar a experiência. Se reprovada, corrigir e rever.
7. **Manter:** registrar responsável, arquivo de origem, versão usada, permissões, substituição e critérios de atualização.

## Pontos de integração no projeto

Definir no planejamento do site, sem impor tecnologia ou estrutura existente:

- **Inventário de mídia:** identificador, página/seção, finalidade, modalidade, estado, responsável e localização.
- **Briefing:** descrição, referência, restrições, direitos, proporção e aprovação esperada.
- **Recebimento:** local acordado para originais e arquivo aprovado, com nomes rastreáveis; não publicar referências ou material privado sem autorização.
- **Integração:** associar cada peça à página e componente; guardar proveniência, versão, direitos e alternativa textual ou legenda adequada.
- **Entrega e manutenção:** documentar onde estão os arquivos, licença/autorizações, quem pode atualizar e como conferir substituições.

### Estrutura ilustrativa, a adaptar

```text
project/
  media/
    briefs/        # pedidos e referências autorizadas
    originals/     # arquivos recebidos ou gerados
    approved/      # versões aprovadas para integração
    inventory.md   # registro por peça
```

Exemplo de organização, não requisito de implementação nem evidência de que as pastas existam. Não colocar segredos ou configurações de conexão nesses arquivos.

## Critérios de qualidade para o site

- **Imagens:** usar tamanho adequado ao espaço de exibição e versões responsivas quando necessário; evitar distorção e avaliar peso, qualidade e recorte em celular e desktop. Texto alternativo deve transmitir o propósito informativo; imagens puramente decorativas têm tratamento apropriado.
- **Vídeos:** verificar reprodução real nos dispositivos definidos, tempo de carregamento e controles acessíveis; fornecer legendas e outras alternativas quando necessárias. Decidir comportamento de reprodução, som, versão substituta e hospedagem conforme contexto, sem presumir reprodução automática.
- **Ambos:** validar contraste quando houver texto sobre mídia, permissões de uso, privacidade, conteúdo enviado a terceiros e consistência com a identidade aprovada. Conferir que informações essenciais não dependam apenas da mídia.
- **SEO:** quando descoberta for objetivo, usar contexto textual, arquivos acessíveis aos rastreadores e metadados relevantes conforme [checklist técnico](technical-seo.md). Indexação não é garantida.

## Checklist de prontidão e teste

Uma ferramenta está **identificada** quando aparece no ambiente; **confirmada** quando a pessoa confirma acesso e condições; e **testada** somente após uma execução verificável. Registrar evidência e data sem credenciais.

| Tipo | Identificada | Acesso e autorização confirmados | Teste real | Evidência / pendência |
|---|---|---|---|---|
| Imagem | No inventário inicial: ferramenta nativa Codex e Higgsfield aparecem na lista. | Pendente | Não testado | Confirmar ambiente e gerar amostra autorizada. |
| Vídeo | No inventário inicial: ferramentas Higgsfield aparecem na lista. | Pendente | Não testado | Confirmar suporte, conta e condições; gerar amostra autorizada. |
| Navegador para Flow | Controle de navegador identificado no inventário inicial; revalidar no ambiente atual. | Pendente | Flow não testado | Confirmar permissão, conta e acesso antes de abrir. |

### Roteiro prático de validação

1. Escolher uma necessidade real de imagem e uma de vídeo, com briefing e aprovação do responsável.
2. Confirmar acesso e condições da ferramenta apropriada e, se necessário, autorização de controle do navegador.
3. Executar uma amostra de cada modalidade, registrar ferramenta, data, resultado, arquivo e direitos, sem segredos.
4. Verificar saída visual, integração em desktop e celular, alternativas acessíveis e reprodução real do vídeo.
5. Exercitar o caso de ferramenta indisponível: registrar bloqueio e solicitação de autorização do Flow, sem presumir acesso.
6. Marcar cada rota como testada apenas com evidência. Reprovação, falta de conta ou autorização mantém o item pendente.

## Referências

- [Google Flow: modelos e recursos](https://support.google.com/flow/answer/16352836)
- [Google Flow: créditos](https://support.google.com/flow/answer/16526234)
- [Anthropic: MCP](https://docs.anthropic.com/en/docs/mcp)
- [OpenAI: geração de imagens](https://developers.openai.com/learn/imagegen)
- [W3C: alternativas para imagens](https://www.w3.org/WAI/tutorials/images/)
- [W3C: acessibilidade de mídia](https://www.w3.org/WAI/media/av/)
