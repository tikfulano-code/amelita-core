// lib/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Inicialização com tratamento de erro para chave de API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function gerarRespostaIA(prompt) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      // Instrução de sistema define a "personalidade" do Amelita-Core
      systemInstruction: "Você é o motor de inteligência do sistema Amelita. Responda de forma técnica e objetiva."
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Erro na comunicação com o Cérebro IA:", error);
    throw new Error("Falha ao processar inteligência.");
  }
}
