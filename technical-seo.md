# Requisitos técnicos, SEO e leitura por máquinas

Este documento complementa [requisitos comuns](common-requirements.md) e as especificações em tippus. É uma lista de decisões e verificações, não um conjunto de arquivos que todo site precisa publicar. P = padrão proposto do processo; C = quando aplicável; R = recomendação. A aplicação e o conteúdo de cada item dependem do projeto e permanecem pendentes de validação.

## Para cada página

- [ ] **P** Registrar objetivo, URL, responsável, idioma, audiência e se a página deve ser pública, privada, indexada ou excluída dos resultados.
- [ ] **C** Nas páginas públicas que devem ser encontradas, usar título HTML descritivo e específico, conteúdo textual rastreável, estrutura semântica e links internos acessíveis.
- [ ] **R** Escrever meta description fiel ao conteúdo e apropriada à página; mecanismos podem escolher outro texto para o resultado.
- [ ] **C** Para conteúdo duplicado ou equivalente, definir URL preferida, links, redirecionamentos e canonical coerentes. Canonical é sinal, não garantia.
- [ ] **C** Quando não se deseja indexação, avaliar meta robots ou X-Robots-Tag; não bloquear o rastreamento da URL cuja diretiva noindex precisa ser lida. Conteúdo confidencial exige autenticação e autorização, não apenas noindex.
- [ ] **C** Configurar Open Graph e metadados equivalentes quando compartilhamento for relevante: título, descrição, URL e imagem autorizada e adequada.
- [ ] **C** Adotar dados estruturados pertinentes somente quando correspondam ao conteúdo visível e às regras do consumidor; validar sintaxe e propriedades. Não garantem destaque em busca.
- [ ] **C** Definir idioma do documento e, para versões por idioma ou região, correspondências hreflang coerentes; conferir traduções e URLs.
- [ ] **P** Conferir resposta HTTP, redirecionamentos, links quebrados, conteúdo principal, acessibilidade e funcionamento em desktop e celular.
- [ ] **C** Verificar que páginas de conta, checkout, confirmação, erros, resultados pessoais e ambientes de teste não exponham dados nem sejam indexados indevidamente.

## Recursos no nível do site

- [ ] **C — robots.txt:** registrar regras de rastreamento e testá-las; elas não impedem acesso nem necessariamente indexação de URLs. Evitar bloqueios acidentais de conteúdo público.
- [ ] **C — sitemap.xml:** quando útil, incluir URLs canônicas públicas pretendidas e mantê-las atualizadas; informar sua localização aos buscadores quando apropriado. Não garante rastreamento nem indexação.
- [ ] **C — imagens, vídeos e notícias:** quando relevantes, avaliar informações e sitemaps específicos, legendas, alternativas textuais, direitos de uso e disponibilidade aos rastreadores.
- [ ] **R — favicon e ícones:** definir identidade e tamanhos adequados para navegadores e atalhos.
- [ ] **C — web app manifest:** definir somente quando o projeto tiver necessidade de experiência instalável; revisar nome, ícones e escopo.
- [ ] **C — security.txt:** considerar quando existir canal efetivo para receber relatos de segurança e responsável para tratá-los.
- [ ] **C — RSS/Atom:** considerar para publicações recorrentes e mantê-lo coerente com o conteúdo publicado.
- [ ] **C — medição:** definir ferramentas e indicadores apenas quando aprovados; avaliar dados pessoais, cookies, consentimento e acessos.
- [ ] **C — migração:** mapear URLs anteriores e destinos, redirecionamentos, páginas removidas e atualização do sitemap; testar antes e depois da mudança.
- [ ] **P** Registrar responsáveis por domínio, hospedagem, renovação, backups, acesso administrativo, atualização e monitoramento.

## IA e conteúdo legível por máquinas

- [ ] **P** Garantir que informações principais públicas sejam encontráveis e compreensíveis em texto, coerentes com as informações visíveis e atualizadas.
- [ ] **C** Avaliar acesso por robôs e controles do fornecedor conforme objetivo de descoberta e política de uso; busca, indexação e treinamento podem ter controles e agentes diferentes.
- [ ] **C** Se houver uma IA própria, definir fontes autorizadas, atualização, acesso, dados pessoais e avaliação das respostas como projeto específico.
- [ ] **R** llms.txt é uma proposta opcional; não é padrão universal nem requisito para aparecer nos recursos de IA da Busca Google. Não garante leitura ou citação.

## Conferência por tipo

- **Institucional, início, sobre e contato:** avaliar identificação da organização e dados estruturados de organização quando pertinentes.
- **Produto, catálogo, preços, planos e comércio:** conferir dados visíveis e atualizados; avaliar dados estruturados de produto e políticas quando elegíveis.
- **Blog, artigo e notícia:** conferir título, autoria, datas, fontes e, se pertinente, dados estruturados de artigo.
- **Evento:** conferir organizador, datas, local ou acesso e, se pertinente, dados estruturados de evento.
- **Idiomas e regiões:** conferir equivalências, idioma, canonical e hreflang quando aplicáveis.
- **Áreas privadas e fluxos de conta/compra:** restringir acesso e decidir indexação e tratamento de dados.
- **Erro, manutenção e confirmação:** usar respostas HTTP e indexação apropriadas à situação.

## Fontes

- [Google: requisitos técnicos para busca](https://developers.google.com/search/docs/essentials/technical)
- [Google: como a busca funciona](https://developers.google.com/search/docs/fundamentals/how-search-works)
- [Google: sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google: diretivas robots e noindex](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Google: recursos de IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
