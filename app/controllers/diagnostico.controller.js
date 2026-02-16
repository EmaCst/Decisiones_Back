import { evaluarConIA } from "../services/openia.service.js"

export const generarDiagnostico = async (req, res) => {
  try {
    const data = req.body

    const resultado = await evaluarConIA(data)

    res.json(resultado)

  } catch (error) {
    res.status(500).json({ error: "Error al generar diagnóstico" })
  }
}
