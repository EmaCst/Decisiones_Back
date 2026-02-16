import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()   // ⬅️ PRIMERO SE CREA

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API funcionando 🚀")
})

// tus rutas
import diagnosticoRoutes from "./app/routes/diagnostico.routes.js"
app.use("/api/diagnostico", diagnosticoRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`)
})
