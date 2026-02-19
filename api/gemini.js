import { GoogleGenerativeAI } from "@google/generative-ai";

// Configuração do motor de IA
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function gerarRespostaIA(prompt) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: "Você é o motor de inteligência do sistema Amelita. Responda de forma técnica e objetiva."
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Erro no Cérebro IA:", error);
    throw new Error("Falha na inteligência central.");
  }
}
