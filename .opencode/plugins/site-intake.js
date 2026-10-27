// Adaptador OpenCode v1. A seleção contextual é feita pelo agente.
export const SiteIntake = async () => ({
  "experimental.chat.system.transform": async (_input, output) => {
    output.system.push("Para pedidos de criar, melhorar ou clonar site neste projeto, antes de executar siga a skill site-intake: faca perguntas progressivas, exija referencia visual aceita e confirme lacunas antes da parte afetada. Nao aplique a tarefas de documentacao isoladas.");
  },
});
