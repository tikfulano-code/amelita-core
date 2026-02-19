import { gerarRespostaIA } from './gemini'; // Importa do mesmo diretório

export default async function handler(req, res) {
  // Bloqueia qualquer método que não seja POST (Segurança)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'O prompt é necessário.' });
  }

  try {
    // Chama o cérebro
    const resposta = await gerarRespostaIA(prompt);

    // Retorna para o usuário
    return res.status(200).json({
      status: "sucesso",
      data: resposta
    });
  } catch (error) {
    return res.status(500).json({ error: "Erro no processamento interno." });
  }
}
