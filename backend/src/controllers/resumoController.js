import { gerarTexto } from "../services/geminiService.js";

export async function gerarResumo(req, res) {
  const { texto } = req.body;

  if (!texto) {
    return res.status(400).json({
      error: 'O campo "texto" é obrigatório.',
    });
  }

  try {
    const prompt = `
      Você é um assistente de estudos.

      Resuma o texto abaixo de forma objetiva, organizada e fácil de revisar.

      Regras:
      - Não cumprimente o usuário
      - Não use frases como "vamos analisar" ou "claro"
      - Não use emojis
      - Não use linguagem informal
      - Não invente informações
      - Use parágrafos curtos
      - Use tópicos bem organizados

      Formato obrigatório da resposta:

      TEMA PRINCIPAL
      Escreva o tema central do texto em uma frase.

      RESUMO
      Escreva um resumo claro em até 5 linhas.

      PONTOS IMPORTANTES
      - Liste os principais pontos do texto.
      - Use no máximo 6 tópicos.

      CONCLUSÃO
      Finalize com uma frase explicando a ideia principal do texto.

      Texto:
      ${texto}
      `;

    const resumo = await gerarTexto(prompt);

    return res.json({
      mensagem: "Resumo gerado por IA.",
      resumo,
    });
  } catch (error) {
    console.error("Erro ao gerar resumo:", error);

    return res.status(500).json({
      error: "Erro ao gerar resumo com IA.",
    });
  }
}
