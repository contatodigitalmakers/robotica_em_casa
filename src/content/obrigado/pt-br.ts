/** Copy da página de obrigado. O e-mail de suporte chega do config. */

export type Obrigado = {
  meta: { title: string; description: string };
  skip: string;
  marcaAlt: string;
  confirmacao: string;
  titulo: string;
  texto: string;
  passosTitulo: string;
  passos: { titulo: string; texto: string }[];
  suportePre: string;
  suportePos: string;
  nota: string;
  idiomas: string;
};

const obrigado: Obrigado = {
  meta: {
    title: 'Obrigada pela compra | Robótica em Casa',
    description:
      'Seu acesso aos materiais já foi enviado por e-mail. Veja como entrar na área de membros e começar hoje.',
  },
  skip: 'Pular para o conteúdo',
  marcaAlt: 'Robótica em Casa',
  confirmacao: 'Compra confirmada. Bem-vinda à Robótica em Casa.',
  titulo: 'Obrigada pela compra.',
  texto:
    'O acesso aos materiais já foi enviado para o seu e-mail. É por lá que você entra nos projetos.',
  passosTitulo: 'O que fazer agora',
  passos: [
    {
      titulo: 'Abra o e-mail',
      texto:
        'Olhe também a caixa de spam e as promoções. O remetente é a Hotmart.',
    },
    {
      titulo: 'Entre na área de membros',
      texto: 'Os PDFs estão lá, prontos para imprimir ou seguir na tela.',
    },
    {
      titulo: 'Comece com um adulto por perto',
      texto: 'Escolham um projeto simples e façam juntos hoje.',
    },
  ],
  suportePre: 'Ficou com alguma dúvida? Escreva para',
  suportePos: 'Respondemos em até 1 dia útil.',
  nota:
    'As atividades devem ser feitas com a supervisão de um adulto. Alguns projetos usam tesoura, cola quente e peças pequenas.',
  idiomas: 'Idiomas',
};

export default obrigado;
