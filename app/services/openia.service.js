import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config()

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export const evaluarConIA = async (data) => {
  try {

    const prompt = `
Actúa como consultor experto en implementación STEAM.

Devuelve únicamente un objeto JSON válido con esta estructura EXACTA:

{
  "nivel_preparacion": "",
  "riesgo": "",
  "bloqueos": [],
  "acciones_urgentes": []
}

No incluyas explicaciones, texto adicional ni bloques markdown.

Analiza el siguiente JSON:

${JSON.stringify(data, null, 2)}
`

    const completion = await client.chat.completions.create({
      model: "gpt-4.1",
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: "Responde únicamente con JSON válido sin texto adicional."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    })

    return JSON.parse(completion.choices[0].message.content)

  } catch (error) {
    console.error("Error en OpenAI:", error.message)
    throw new Error("Fallo en generación con IA")
  }
}