import { salvarHistorico } from "../services/historicoService.js";
import { gerarTexto } from "../services/geminiService.js";

export async function gerarQuestoes(req, res) {
  const { texto, quantidade } = req.body;

  if (!texto || !quantidade) {
    return res.status(400).json({
      error: 'O campo "texto" e "quantidade" são obrigatórios.',
    });
  }

  if (quantidade < 1 || quantidade > 5) {
    return res.status(400).json({
      error: "A quantidade de questões deve estar entre 1 e 5.",
    });
  }

  try {
    const prompt = `
      Você é um assistente de estudos.

      Com base no texto abaixo, crie questões para ajudar na aprendizagem.

      Dados:
      Quantidade de questões: ${quantidade}

      Regras:
      - Não cumprimente o usuário
      - Não use emojis
      - Não invente informações fora do texto
      - As questões devem ser claras e objetivas
      - Varie o tipo de pergunta (conceito, explicação, aplicação)
      - Use linguagem simples

      Formato obrigatório:

      QUESTÕES

      1. Pergunta 1
      2. Pergunta 2
      3. Pergunta 3

      Texto:
      ${texto}
    `;

    const questoes = await gerarTexto(prompt);

    await salvarHistorico("questoes", texto, questoes);

    return res.json({
      mensagem: "Questões geradas com IA.",
      questoes,
    });
  } catch (error) {
    console.error("Erro ao gerar questões:", error);

    return res.status(500).json({
      error: "Erro ao gerar questões com IA.",
    });
  }
}
