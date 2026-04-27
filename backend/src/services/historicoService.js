import { db } from "../database/db.js";

export async function salvarHistorico(tipo, textoOriginal, respostaIA) {
  await db.run(
    `
    INSERT INTO historico (tipo, texto_original, resposta_ia)
    VALUES (?, ?, ?)
    `,
    [tipo, textoOriginal, respostaIA],
  );
}

export async function listarHistorico() {
  return db.all(`
    SELECT 
      id,
      tipo,
      texto_original,
      resposta_ia,
      criado_em
    FROM historico
    ORDER BY criado_em DESC
  `);
}
