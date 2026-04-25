export function gerarResumo(req, res) {
  const { texto } = req.body;

  if (!texto) {
    return res.status(400).json({
      error: 'O campo "texto" é obrigatório.',
    });
  }

  return res.json({
    mensagem: "Rota de resumo funcionando.",
    resumo: `Resumo gerado a partir do texto: ${texto}`,
  });
}
