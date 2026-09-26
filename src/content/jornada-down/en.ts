import type { JornadaDown } from './pt-br';

const jornadaDown = {
  meta: {
    title: "Little Inventor's Journey | Last chance",
    description:
      "The same Little Inventor's Journey, now with one year of access. The discount exists only on this page.",
  },
  skip: 'Skip to content',
  marcaAlt: 'Robótica em Casa',
  confirmacao: 'Your order is confirmed! Access details are already on their way to your email.',
  pre: "It's okay to have passed on the last offer. No pressure.",
  titulo: 'Last chance to get the Journey, the lighter way.',
  subtitulo: (v) =>
    `The same Little Inventor's Journey, now for only ${v.por}, with one year of access. Only on this page.`,
  capaAlt:
    'A cardboard robot with a backpack and goggles walking across a colorful adventure map, with a medal and a certificate beside it',
  dentro: {
    titulo: "What's inside",
    itens: [
      'The Journey Map, a colorful poster for the wall',
      'Medals for each category, one for every land',
      'Inventor Level 1 through Level 3 certificates',
      'A wall of wins to show off what they made',
      'Surprise mission cards to pick the project of the day',
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
  oferta: {
    nome: "Little Inventor's Journey",
    deRotulo: 'From',
    por: (v) => `For only ${v.por}`,
    economia: (v) => `You save ${v.valor} (${v.percentual} off)`,
    pagamento: 'One-time payment · Printable PDF',
    acesso: 'One year of access in the same member area',
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
        q: 'How long do I have access?',
        a: () =>
          'For one year. Access is not lifetime in this offer, but you can print and keep the PDFs.',
      },
    ],
  },
  nota: 'An adult needs to supervise cutting out the materials.',
  idiomas: 'Languages',
} satisfies JornadaDown;

export default jornadaDown;
