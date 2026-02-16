import { Router } from "express"
import { generarDiagnostico } from "../controllers/diagnostico.controller.js"

const router = Router()

router.post("/", generarDiagnostico)

export default router
