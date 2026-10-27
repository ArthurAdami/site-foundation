# Requisitos comuns

P = padrão obrigatório deste processo; C = condicional; L = obrigação legal quando aplicável; R = recomendação. Registrar itens não aplicáveis e justificativas. A aplicação legal depende da atividade e jurisdição.

- P: Definir objetivo, público, responsável, conteúdo, ação esperada e aprovação.
- P: Conferir exatidão, direitos de uso, links, responsividade e funcionamento.
- P: Usar estrutura semântica, teclado, foco, rótulos, contraste e alternativas textuais. Adotar WCAG 2.2 AA como meta e verificar critérios aplicáveis.
- P: Usar HTTPS, permissões, proteção de dados, tratamento de erros e manutenção proporcionais ao risco.
- C: Com dados pessoais, mapear finalidade, base legal, compartilhamento, retenção, direitos, informações aos titulares e segurança.
- C: Inventariar cookies e implementar controles e consentimento quando exigidos.
- L/C: Em relações de consumo, verificar identificação do fornecedor, preço, custos, condições, atendimento e arrependimento conforme legislação aplicável.
- C: Para páginas públicas, decidir indexação, títulos, descrições e dados estruturados relevantes. Sitemap e robots não garantem indexação; robots não protege conteúdo privado.
- R: Conteúdo legível em HTML ajuda buscadores e IA. llms.txt é opcional e não é requisito para recursos de IA do Google.

## Referências

- [LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
- [CDC](https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm)
- [Decreto de comércio eletrônico](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm)
- [ANPD: cookies](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Google: busca com IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

## Padrões obrigatórios de qualidade visual e desempenho

- **P:** Testar a experiência em desktop e celular, incluindo legibilidade, recortes, navegação e conteúdo cortado; registrar limitações.
- **P:** Inventariar imagens, preservar originais e gerar versões com dimensões e compressão adequadas; verificar qualidade visual e tamanho. Escolher formatos conforme compatibilidade e transparência.
- **P:** Definir dimensões ou proporção das imagens para evitar mudanças de layout; usar versões responsivas e carregamento adiado fora da área inicial quando adequados, sem atrasar indevidamente a imagem principal.
- **P:** Para efeitos e movimento no scroll, definir intenção, gatilho e estado final; manter conteúdo e controles disponíveis sem animação.
- **P:** Respeitar preferência por movimento reduzido e reduzir ou remover movimentos não essenciais; testar teclado e não depender apenas de scroll para revelar informação essencial.
- **P:** Testar efeitos e scroll em desktop e celular, incluindo foco, sobreposição e fluidez; verificar movimento reduzido quando houver movimento.
- **P:** Avaliar contraste, texto alternativo e legendas pertinentes; mídia não pode esconder informação essencial.
- **C:** Quando não houver mídia ou movimento, registrar não aplicável; não adicionar efeitos por obrigação.

Fontes: [web.dev: imagens](https://web.dev/learn/images/), [MDN: movimento reduzido](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion), [W3C: animação](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html).
