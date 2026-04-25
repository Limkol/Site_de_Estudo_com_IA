export function gerarQuestoes(req, res) {
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

  return res.json({
    mensagem: "Rota de questões funcionando.",
    questoes: Array.from(
      { length: Number(quantidade) },
      (_, index) => `Questão ${index + 1} gerada com base no texto enviado.`,
    ),
  });
}
