/** Copy da página de upsell. Preços chegam formatados do config. */

export type Jornada = {
  meta: { title: string; description: string };
  skip: string;
  marcaAlt: string;
  confirmacao: string;
  pre: string;
  titulo: string;
  subtitulo: (v: { de: string; por: string }) => string;
  capaAlt: string;
  problema: { titulo: string; paragrafos: string[] };
  solucao: {
    titulo: string;
    intro: string;
    territorios: { icone: 'robot' | 'recycle' | 'flask' | 'scissors'; titulo: string }[];
    fecho: string;
  };
  dentro: { titulo: string; itens: { titulo: string; texto: string }[] };
  como: { titulo: string; passos: string[] };
  momento: { titulo: string; texto: string };
  porque: { titulo: string; texto: (v: { de: string }) => string };
  oferta: {
    nome: string;
    deRotulo: string;
    por: (v: { por: string }) => string;
    economia: (v: { valor: string; percentual: string }) => string;
    pagamento: string;
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

const jornada: Jornada = {
  meta: {
    title: 'Jornada do Pequeno Inventor | Oferta exclusiva',
    description:
      'Mapa de aventuras para usar com o Kit Mega Inventor. O desconto só existe nesta página, logo depois da compra.',
  },
  skip: 'Pular para o conteúdo',
  marcaAlt: 'Robótica em Casa',
  confirmacao: 'Seu pedido está confirmado! Os dados de acesso já estão a caminho do seu e-mail.',
  pre: 'Espera, antes de sair: você ganhou um desconto que só existe nesta página.',
  titulo: 'Não deixe seus 200 projetos esquecidos numa pasta.',
  subtitulo: (v) =>
    `Adicione a Jornada do Pequeno Inventor de ${v.de} por apenas ${v.por}: o mapa de aventuras que transforma cada projeto numa missão que seu filho vai querer completar.`,
  capaAlt:
    'Robô de papelão com mochila e óculos, caminhando sobre um mapa colorido de aventura, com medalha e certificado ao lado',
  problema: {
    titulo: 'Vamos ser sinceros.',
    paragrafos: [
      'Você acabou de garantir mais de 200 projetos. É muita diversão esperando por vocês.',
      'Mas veja o que acontece em muitas casas: os primeiros projetos são um sucesso… aí vem uma semana corrida, ninguém decide o que fazer depois, e os PDFs ficam parados numa pasta.',
      'Não porque os projetos não sejam bons.',
      'Mas porque criança precisa de um motivo para voltar, e mãe não tem tempo de inventar esse motivo todo dia.',
    ],
  },
  solucao: {
    titulo: 'A Jornada do Pequeno Inventor dá esse motivo para o seu filho.',
    intro:
      'É um mapa de aventuras para imprimir que reúne todos os projetos do Kit Mega Inventor numa grande jornada por quatro territórios.',
    territorios: [
      { icone: 'robot', titulo: 'Terra dos Robôs' },
      { icone: 'recycle', titulo: 'Ilha da Reciclagem' },
      { icone: 'flask', titulo: 'Vale da Ciência' },
      { icone: 'scissors', titulo: 'Vila do Artesanato' },
    ],
    fecho:
      'Cada projeto concluído vira uma nova parada no mapa. Cada território, uma medalha. Cada nível, um certificado. E você nunca mais precisa decidir o que fazer: uma carta de missão surpresa decide por você.',
  },
  dentro: {
    titulo: 'O que vem dentro',
    itens: [
      {
        titulo: 'O Mapa da Jornada',
        texto: 'um pôster colorido para a parede, onde seu filho marca cada projeto concluído',
      },
      {
        titulo: 'Medalhas por categoria',
        texto: 'uma para cada território completado',
      },
      {
        titulo: 'Certificados de nível',
        texto: 'de Inventor Nível 1 a Nível 3, perfeitos para pendurar na geladeira',
      },
      {
        titulo: 'Mural de conquistas',
        texto: 'um espaço para exibir as criações com orgulho',
      },
      {
        titulo: 'Cartas de missão surpresa',
        texto: 'sorteie uma e o projeto do dia está decidido, sem discussão',
      },
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
  momento: {
    titulo: 'Olha o que eu fiz!',
    texto:
      'Imagine a cena: seu filho correndo até a parede para pintar uma nova parada, virando para você e dizendo: “Olha o que eu fiz!” É para isso que a Jornada existe.',
  },
  porque: {
    titulo: 'Por que só agora',
    texto: (v) =>
      `Este desconto só existe aqui, logo depois da sua compra. Fora desta página, a Jornada do Pequeno Inventor custa ${v.de}. Se você sair agora, não terá acesso a este preço novamente.`,
  },
  oferta: {
    nome: 'Jornada do Pequeno Inventor',
    deRotulo: 'De',
    por: (v) => `Por apenas ${v.por}`,
    economia: (v) => `Você economiza ${v.valor} (${v.percentual} de desconto)`,
    pagamento: 'Pagamento único · Acesso imediato e vitalício · PDF para imprimir',
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
        q: 'Por que o preço está tão baixo?',
        a: (v) =>
          `Porque este é um desconto exclusivo para quem acabou de comprar o Kit Mega Inventor. Fora desta página, a Jornada custa ${v.de}.`,
      },
      {
        q: 'Para qual idade é?',
        a: () => 'Para crianças de 4 a 10 anos.',
      },
    ],
  },
  nota: 'É necessária a supervisão de um adulto para recortar os materiais.',
  idiomas: 'Idiomas',
};

export default jornada;
