import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()   // ✅ PRIMERO se crea

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API funcionando 🚀")
})

app.post("/api/diagnostico", (req, res) => {
  res.json({ recibido: req.body })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`)
})
