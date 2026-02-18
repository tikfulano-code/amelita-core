export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { mensagem } = req.body;

    if (!mensagem) {
      return res.status(400).json({ error: "Mensagem é obrigatória" });
    }

    const resposta = {
      status: "Processado com sucesso",
      recebido: mensagem,
      timestamp: new Date().toISOString()
    };

    return res.status(200).json(resposta);

  } catch (error) {
    return res.status(500).json({ error: "Erro interno", detalhes: error.message });
  }
}
