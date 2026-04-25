import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import resumoRoutes from "./routes/resumoRoutes.js";
import planoRoutes from "./routes/planoRoutes.js";
import questoesRoutes from "./routes/questoesRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend do Site de Estudos com IA funcionando!" });
});

app.use("/api/resumo", resumoRoutes);
app.use("/api/plano-estudo", planoRoutes);
app.use("/api/questoes", questoesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
