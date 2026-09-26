/** Copy da página de downsell. Preços chegam formatados do config. */

export type JornadaDown = {
  meta: { title: string; description: string };
  skip: string;
  marcaAlt: string;
  confirmacao: string;
  pre: string;
  titulo: string;
  subtitulo: (v: { por: string }) => string;
  capaAlt: string;
  dentro: { titulo: string; itens: string[] };
  como: { titulo: string; passos: string[] };
  oferta: {
    nome: string;
    deRotulo: string;
    por: (v: { por: string }) => string;
    economia: (v: { valor: string; percentual: string }) => string;
    pagamento: string;
    acesso: string;
    clique: string;
    exclusivo: string;
    cta: (v: { por: string }) => string;
    recusa: string;
  };
  garantia: (v: { dias: number }) => string;
  faq: { titulo: string; itens: { q: string; a: (v: { de: string }) => string }[] };
  nota: string;
  idiomas: string;
};

const jornadaDown: JornadaDown = {
  meta: {
    title: 'Jornada do Pequeno Inventor | Última chance',
    description:
      'A mesma Jornada do Pequeno Inventor, agora com um ano de acesso. O desconto só existe nesta página.',
  },
  skip: 'Pular para o conteúdo',
  marcaAlt: 'Robótica em Casa',
  confirmacao: 'Seu pedido está confirmado! Os dados de acesso já estão a caminho do seu e-mail.',
  pre: 'Tudo bem ter deixado a oferta anterior passar. Sem pressão.',
  titulo: 'Última chance de levar a Jornada, do jeito mais leve.',
  subtitulo: (v) =>
    `A mesma Jornada do Pequeno Inventor, agora por apenas ${v.por}, com um ano de acesso. Só nesta página.`,
  capaAlt:
    'Robô de papelão com mochila e óculos, caminhando sobre um mapa colorido de aventura, com medalha e certificado ao lado',
  dentro: {
    titulo: 'O que vem dentro',
    itens: [
      'O Mapa da Jornada, um pôster colorido para a parede',
      'Medalhas por categoria, uma para cada território',
      'Certificados de Inventor Nível 1 a Nível 3',
      'Mural de conquistas para exibir as criações',
      'Cartas de missão surpresa para escolher o projeto do dia',
    ],
  },
  como: {
    titulo: 'Como funciona',
    passos: [
      'Imprima o mapa e pendure num lugar onde seu filho veja.',
      'Sorteie uma carta de missão para escolher o projeto do dia.',
      'Montem juntos, marquem a parada no mapa e conquistem a medalha!',
    ],
  },
  oferta: {
    nome: 'Jornada do Pequeno Inventor',
    deRotulo: 'De',
    por: (v) => `Por apenas ${v.por}`,
    economia: (v) => `Você economiza ${v.valor} (${v.percentual} de desconto)`,
    pagamento: 'Pagamento único · PDF para imprimir',
    acesso: 'Acesso por 1 ano na mesma área de membros',
    clique: 'Adicionada ao seu pedido com um clique, com a mesma forma de pagamento.',
    exclusivo: 'Desconto exclusivo para quem acabou de comprar o Kit Mega Inventor.',
    cta: (v) => `Sim, quero a Jornada por apenas ${v.por}`,
    recusa: 'Não, obrigada, vou continuar sem a Jornada',
  },
  garantia: (v) =>
    `Garantia de ${v.dias} dias. Se não fizer sentido para a sua família, é só falar com a gente em até ${v.dias} dias e devolvemos 100% do valor.`,
  faq: {
    titulo: 'Perguntas rápidas',
    itens: [
      {
        q: 'Inclui projetos novos?',
        a: () =>
          'Não. A Jornada é um kit de progresso e motivação feito para usar junto com os projetos do Kit Mega Inventor que você acabou de comprar.',
      },
      {
        q: 'Como eu recebo?',
        a: () =>
          'Ela é adicionada à mesma área de membros do seu Kit Mega Inventor, com acesso imediato.',
      },
      {
        q: 'Por quanto tempo tenho acesso?',
        a: () =>
          'Por um ano. O acesso não é vitalício nesta oferta, mas dá para imprimir e guardar os PDFs.',
      },
    ],
  },
  nota: 'É necessária a supervisão de um adulto para recortar os materiais.',
  idiomas: 'Idiomas',
};

export default jornadaDown;
