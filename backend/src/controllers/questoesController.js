export function gerarQuestoes(req, res) {
  const { texto } = req.body;

  if (!texto) {
    return res.status(400).json({
      error: 'O campo "texto" é obrigatório.',
    });
  }

  return res.json({
    mensagem: "Rota de questões funcionando.",
    textoRecebido: texto,
    questoes: ["Aqui ficarão as questões geradas pela IA futuramente."],
  });
}
