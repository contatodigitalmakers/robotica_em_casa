import type { Jornada } from './pt-br';

const jornada = {
  meta: {
    title: "Little Inventor's Journey | Exclusive offer",
    description:
      'An adventure map to use with the Mega Inventor Kit. The discount exists only on this page, right after your purchase.',
  },
  skip: 'Skip to content',
  marcaAlt: 'Robótica em Casa',
  confirmacao: 'Your order is confirmed! Access details are already on their way to your email.',
  pre: 'Wait, before you go: you unlocked a discount that exists only on this page.',
  titulo: "Don't leave your 200 projects forgotten in a folder.",
  subtitulo: (v) =>
    `Add the Little Inventor's Journey, from ${v.de} for only ${v.por}: the adventure map that turns every project into a mission your child will want to finish.`,
  capaAlt:
    'A cardboard robot with a backpack and goggles walking across a colorful adventure map, with a medal and a certificate beside it',
  problema: {
    titulo: "Let's be honest.",
    paragrafos: [
      'You just secured more than 200 projects. There is a lot of fun waiting for you.',
      'Here is what happens in a lot of homes: the first projects are a hit… then a busy week shows up, nobody picks what to do next, and the PDFs sit in a folder.',
      "Not because the projects aren't good.",
      "Because a child needs a reason to come back, and you don't have time to invent that reason every day.",
    ],
  },
  solucao: {
    titulo: "The Little Inventor's Journey gives your child that reason.",
    intro:
      'It is a printable adventure map that gathers every project in the Mega Inventor Kit into one big journey across four lands.',
    territorios: [
      { icone: 'robot', titulo: 'Robot Land' },
      { icone: 'recycle', titulo: 'Recycling Island' },
      { icone: 'flask', titulo: 'Science Valley' },
      { icone: 'scissors', titulo: 'Craft Village' },
    ],
    fecho:
      'Each finished project becomes a new stop on the map. Each land, a medal. Each level, a certificate. And you never have to decide what to do next: a surprise mission card decides for you.',
  },
  dentro: {
    titulo: "What's inside",
    itens: [
      {
        titulo: 'The Journey Map',
        texto: 'a colorful poster for the wall, where your child marks every finished project',
      },
      {
        titulo: 'Medals for each category',
        texto: 'one for every land they complete',
      },
      {
        titulo: 'Level certificates',
        texto: 'Inventor Level 1 through Level 3, ready for the fridge',
      },
      {
        titulo: 'A wall of wins',
        texto: 'a place to show off what they made',
      },
      {
        titulo: 'Surprise mission cards',
        texto: 'draw one and the project of the day is chosen, no debate',
      },
    ],
  },
  como: {
    titulo: 'How it works',
    passos: [
      'Print the map and hang it where your child can see it.',
      'Draw a mission card to pick the project of the day.',
      'Build it together, mark the stop on the map, and earn the medal.',
    ],
  },
  momento: {
    titulo: 'Look what I made!',
    texto:
      'Picture it: your child running to the wall to color a new stop, turning to you and saying, “Look what I made!” That is what the Journey is for.',
  },
  porque: {
    titulo: 'Why only now',
    texto: (v) =>
      `This discount exists only here, right after your purchase. Off this page, the Little Inventor's Journey costs ${v.de}. If you leave now, you won't see this price again.`,
  },
  oferta: {
    nome: "Little Inventor's Journey",
    deRotulo: 'From',
    por: (v) => `For only ${v.por}`,
    economia: (v) => `You save ${v.valor} (${v.percentual} off)`,
    pagamento: 'One-time payment · Instant lifetime access · Printable PDF',
    clique: 'Added to your order in one click, with the same payment method.',
    exclusivo: 'An exclusive discount for anyone who just bought the Mega Inventor Kit.',
    cta: (v) => `Yes, I want the Journey for only ${v.por}`,
    recusa: "No thanks, I'll continue without the Journey",
  },
  garantia: (v) =>
    `${v.dias}-day guarantee. If it doesn't make sense for your family, just tell us within ${v.dias} days and we'll refund 100%.`,
  faq: {
    titulo: 'Quick questions',
    itens: [
      {
        q: 'Does it include new projects?',
        a: () =>
          "No. The Journey is a progress and motivation kit made to use alongside the Mega Inventor Kit projects you just bought.",
      },
      {
        q: 'How do I get it?',
        a: () =>
          'It is added to the same member area as your Mega Inventor Kit, with instant access.',
      },
      {
        q: 'Why is the price so low?',
        a: (v) =>
          `Because this is an exclusive discount for anyone who just bought the Mega Inventor Kit. Off this page, the Journey costs ${v.de}.`,
      },
      {
        q: 'What age is it for?',
        a: () => 'For children ages 4 to 10.',
      },
    ],
  },
  nota: 'An adult needs to supervise cutting out the materials.',
  idiomas: 'Languages',
} satisfies Jornada;

export default jornada;
