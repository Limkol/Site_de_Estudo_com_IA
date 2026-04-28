import express from "express";
import { buscarHistorico } from "../controllers/historicoController.js";

const router = express.Router();

router.get("/", buscarHistorico);

export default router;