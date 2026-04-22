import express from "express";
import { gerarQuestoes } from "../controllers/questoesController.js";

const router = express.Router();

router.post("/", gerarQuestoes);

export default router;
