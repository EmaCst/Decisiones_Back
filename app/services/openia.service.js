import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config()

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export const evaluarConIA = async (data) => {

  const prompt = `
Actúa como consultor experto en implementación STEAM.

Analiza el siguiente JSON y devuelve:

- nivel_preparacion
- riesgo
- bloqueos
- acciones_urgentes

Responde en JSON.

JSON:
${JSON.stringify(data)}
`

  const completion = await client.chat.completions.create({
    model: "gpt-4.1",
    temperature: 0.2,
    messages: [{ role: "user", content: prompt }]
  })

  return JSON.parse(completion.choices[0].message.content)
}
