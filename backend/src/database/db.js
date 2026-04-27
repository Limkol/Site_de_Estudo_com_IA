import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const db = await open({
  filename: "./src/database/database.sqlite",
  driver: sqlite3.Database,
});

await db.exec(`
  CREATE TABLE IF NOT EXISTS historico (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo TEXT NOT NULL,
    texto_original TEXT NOT NULL,
    resposta_ia TEXT NOT NULL,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);
