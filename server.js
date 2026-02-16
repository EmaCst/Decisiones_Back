import express from "express"
import cors from "cors"
app.use(cors())

import diagnosticoRoutes from "./app/routes/diagnostico.routes.js";


const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/diagnostico", diagnosticoRoutes)

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000")
})
