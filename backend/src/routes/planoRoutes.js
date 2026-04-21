import express from 'express'
import { criarPlanoDeEstudo } from '../controllers/planoController.js'

const router = express.Router()

router.post('/', criarPlanoDeEstudo)

export default router