import { listarHistorico } from "../services/historicoService.js";

export async function buscarHistorico(req, res) {
  try {
    const historico = await listarHistorico();

    return res.json({
      historico,
    });
  } catch (error) {
    console.error("Erro ao buscar histórico:", error);

    return res.status(500).json({
      error: "Erro ao buscar histórico.",
    });
  }
}
