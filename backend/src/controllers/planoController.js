import { salvarHistorico } from "../services/historicoService.js";
import { gerarTexto } from "../services/geminiService.js";

export async function criarPlanoDeEstudo(req, res) {
  const { tema, dias, objetivo } = req.body;

  if (!tema || !dias || !objetivo) {
    return res.status(400).json({
      error: 'Os campos "tema", "dias" e "objetivo" são obrigatórios.',
    });
  }

  try {
    const prompt = `
      Você é um assistente de estudos.

      Crie um plano de estudo organizado para o aluno.

      Dados:
      Tema: ${tema}
      Quantidade de dias: ${dias}
      Objetivo: ${objetivo}

      Regras:
      - Não cumprimente o usuário
      - Não use emojis
      - Seja claro e objetivo
      - Divida o plano por dia
      - Inclua tarefas práticas
      - Não invente recursos específicos como links, livros ou vídeos
      - Use linguagem simples

      Formato obrigatório:

      PLANO DE ESTUDO

      OBJETIVO
      Explique o objetivo do plano em uma frase.

      CRONOGRAMA
      Dia 1:
      - ...

      Dia 2:
      - ...

      Último dia:
      - Inclua atividades de revisão final e prática geral.

      Importante:
      - A revisão final deve estar dentro do último dia do cronograma.
      - Não crie uma seção separada chamada "REVISÃO FINAL".
      - Se o plano tiver 7 dias, o Dia 7 deve conter estudo + revisão final.
    `;

    const plano = await gerarTexto(prompt);

    const textoOriginal = `
      Tema: ${tema}
      Dias: ${dias}
      Objetivo: ${objetivo}
    `;

    await salvarHistorico("plano", textoOriginal, plano);

    return res.json({
      mensagem: "Plano de estudo gerado com IA.",
      plano,
    });
  } catch (error) {
    console.error("Erro ao gerar plano:", error);

    return res.status(500).json({
      error: "Erro ao gerar plano de estudo com IA.",
    });
  }
}
