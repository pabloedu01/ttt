export default function handler(req, res) {
    const mensagem = process.env.MENSAGEM || 'Mensagem padrão';
    res.status(200).json({ mensagem });
  }
  