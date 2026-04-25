export function criarPlanoDeEstudo(req, res) {
  const { tema, dias, objetivo } = req.body;

  if (!tema || !dias || !objetivo) {
    return res.status(400).json({
      error: 'Os campos "tema", "dias" e "objetivo" são obrigatórios.',
    });
  }

  return res.json({
    mensagem: "Rota de plano de estudo funcionando.",
    plano: `Plano de estudo gerado para o tema "${tema}", com duração de ${dias} dias. Objetivo: ${objetivo}`,
  });
}
