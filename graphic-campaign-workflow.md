# Carrosséis e materiais gráficos de campanha

Esta extensão organiza o uso de skills públicas para criar peças gráficas, do conceito à revisão. Os arquivos foram incorporados localmente; a presença deles não comprova que um cliente os reconheceu nem que uma peça foi gerada.

## Começar pelo briefing

Para carrossel, campanha ou peça gráfica, aproveite as informações fornecidas e confirme apenas o que faltar para a etapa afetada: objetivo, público, mensagem e fatos aprovados, canais e formatos pretendidos, identidade ou referências visuais, materiais disponíveis e restrições de uso. Se não houver identidade definida, peça uma referência ou desenvolva uma direção e apresente uma amostra para aceite. Não invente marca, números, depoimentos, preços ou resultados. Se o pedido incluir um site, mantenha também as regras de `site-intake`.

## Seleção das skills

| Necessidade | Skill incorporada | Papel |
|---|---|---|
| Roteiro de carrossel | [carousel-writer](.agents/skills/carousel-writer/SKILL.md) | Planejar capa, sequência, texto e orientação visual. |
| Linguagem visual recorrente | [design-and-templates](.agents/skills/design-and-templates/SKILL.md) | Organizar identidade e modelos reutilizáveis quando fizerem sentido. |
| Conceitos e textos para anúncios | [ad-creative](.agents/skills/ad-creative/SKILL.md) | Desenvolver mensagens e variações com base nos dados fornecidos. |
| Direção e execução gráfica | [graphic-design](.agents/skills/graphic-design/SKILL.md) | Composição, tipografia, imagem e técnica de produção. |
| Posts, stories e carrosséis | [social-media-graphic](.agents/skills/social-media-graphic/SKILL.md) | Planejar e produzir peças sociais e sequências. |
| Anúncios gráficos | [ad-creative-design](.agents/skills/ad-creative-design/SKILL.md) | Direção visual de peças de campanha paga, quando solicitadas. |
| Banners | [banner-design](.agents/skills/banner-design/SKILL.md) | Criação de banners para canais próprios. |
| Cartazes e flyers | [poster-design](.agents/skills/poster-design/SKILL.md) | Criação de peças promocionais e de eventos. |
| Infográficos | [infographic](.agents/skills/infographic/SKILL.md) | Organizar dados confirmados em peça visual. |

Escolha somente as skills úteis à peça; uma campanha pode combiná-las. Seus arquivos e referências permanecem em inglês conforme as fontes originais. O histórico e as licenças acompanham cada pasta como `UPSTREAM.md` e `UPSTREAM-LICENSE.txt`.

## Criar e revisar

1. **Conceito:** defina a ideia central e como a referência orienta composição, imagem, tom e ritmo; apresente uma direção ou amostra antes de expandir uma série quando necessário.
2. **Conteúdo:** para carrossel, organize capa, sequência e encerramento coerentes com o objetivo; para campanha, relacione mensagem e peça ao canal. Verifique fatos e texto com a pessoa responsável, sem presumir aprovação.
3. **Direção de arte:** escolha soluções adequadas à marca e ao material, com variação de composição e hierarquia. Templates e exemplos das skills são pontos de partida, não identidade obrigatória nem garantia de resultado criativo.
4. **Produção:** use as ferramentas disponíveis e apropriadas. As regras de imagem e vídeo de [media-workflow.md](media-workflow.md) prevalecem sobre recomendações de fornecedor nas skills: Codex utiliza sua geração nativa de imagens quando disponível; Claude usa Flow ou ferramenta de imagem disponível, conforme aquele fluxo. Não configurar MCP nem credenciais automaticamente.
5. **Revisão:** verifique sequência, corte, ortografia, contraste, legibilidade no tamanho de uso, consistência visual e correspondência com o briefing e a referência aceita. Confira as especificações atuais do destino; medidas citadas nas skills podem envelhecer. Registre divergências e limites, e apresente o resultado para validação humana.

As skills externas mencionam outras skills, serviços e valores padrão que não foram incorporados ou configurados aqui. Não invente a existência desses recursos nem use perfis e marcas de exemplo como dados reais; adapte a orientação ao contexto confirmado. Nenhuma publicação, agendamento, envio externo ou download de dependência é implícito. Quando a ferramenta ou permissão necessária não estiver disponível, explique a limitação antes da etapa dependente.

## Produção técnica e estado de validação

A skill `graphic-design` contém `scripts/render.mjs`, recurso opcional de captura de HTML com Node.js, Playwright e navegador Chromium. As dependências e o navegador não foram instalados nesta etapa; a execução e a qualidade dos arquivos de saída ainda não foram testadas. O código é apenas uma opção de execução, não o caminho obrigatório nem um gerador automático completo. A produção de imagens segue a ferramenta disponível e as regras de mídia acima.

As skills estão presentes em `.agents/skills/` e suas cópias equivalentes em `.claude/skills/`, seguindo a organização já descrita em [creative-engine.md](creative-engine.md) para Codex, Claude Code, Antigravity e OpenCode. O reconhecimento em cada cliente, a execução de ponta a ponta, as ferramentas de imagem e a avaliação visual por uma pessoa ainda precisam ser verificados em uso real. Nenhuma conta, conexão ou publicação foi criada.

As referências originais podem conter afirmações sobre desempenho, recomendações de formato ou exemplos de marca: tratá-las como orientações dos autores, não como resultados verificados nem requisitos universais deste projeto.
