export function criarPlanoDeEstudo(req, res) {
  const { tema, dias } = req.body;

  if (!tema || !dias) {
    return res.status(400).json({
      error: 'Os campos "tema" e "dias" são obrigatórios.',
    });
  }

  return res.json({
    mensagem: "Rota de plano de estudo funcionando.",
    temaRecebido: tema,
    diasRecebidos: dias,
    plano: "Aqui ficará o plano de estudo gerado pela IA futuramente.",
  });
}
