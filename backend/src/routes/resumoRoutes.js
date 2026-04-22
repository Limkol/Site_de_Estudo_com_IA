import express from "express";
import { gerarResumo } from "../controllers/resumoController.js";

const router = express.Router();

router.post("/", gerarResumo);

export default router;
