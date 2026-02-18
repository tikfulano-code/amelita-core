export default async function handler(req, res) {
  const resposta = {
    status: "API funcionando",
    mensagem: "Teste pelo navegador",
    timestamp: new Date().toISOString()
  };

  return res.status(200).json(resposta);
}
