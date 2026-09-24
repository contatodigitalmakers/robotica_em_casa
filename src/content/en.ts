/**
 * English copy. Adapted for parents, not a word-for-word translation.
 * Brand and kit names stay in Portuguese (they appear on the covers).
 * Prices are in euros.
 */
import type { Content } from './pt-br';
import { site } from '../config/site';

const g = site.garantiaDias;
const prefix = '/en';

const content = {
  meta: {
    title: 'Robótica em Casa | 200+ robotics and science projects for kids ages 4 to 10',
    description:
      'Digital kits with 200+ robotics, science, recycling and craft projects for kids ages 4 to 10, using simple things you already have at home. Instant access.',
  },

  header: {
    logoAlt: 'Robótica em Casa — back to top',
    cta: 'I want the kit →',
  },

  hero: {
    pillEmoji: '✨',
    pill: '200+ projects for kids ages 4 to 10',
    tituloPre: 'Turn screen time into ',
    tituloDestaque: 'making time',
    tituloPos: '.',
    subtitulo:
      'Robotics, science, recycling and craft projects for kids ages 4 to 10, using simple materials you already have at home.',
    cta: 'I want to see what my child can make →',
    microcopy: `One-time payment · Instant access · ${g}-day guarantee`,
    mascoteAlt: 'Robótica em Casa mascot: a robot made from a cardboard box',
    destaques: [
      { titulo: '200+ projects', texto: 'so your child has plenty to make and play with' },
      { titulo: 'Simple materials', texto: 'cardboard, bottles, sticks and things from around the house' },
      { titulo: 'More making', texto: 'they invent, test and build with their own hands' },
    ],
  },

  alternativa: {
    pillEmoji: '🔥',
    pill: 'Tired of screens? Try making something.',
    tituloPre: 'What if there was something ',
    tituloDestaque: 'more fun',
    tituloPos: ' than a screen?',
    texto:
      'When a child finds something interesting to build, test and figure out, they lean in, learn by doing and feel proud of what they made.',
    fotoAlt: 'A homemade robot with a bottle-cap head, googly eyes, cardboard body and wheels on a kitchen table',
    beneficios: [
      {
        titulo: 'More focus, fewer battles',
        texto: 'Activities that hold their attention, so they concentrate while they play.',
        alt: 'A smiling boy next to a drawing robot made from markers',
      },
      {
        titulo: 'Learning by doing',
        texto: 'They learn by building, trying ideas and watching the project come to life.',
        alt: 'A girl building a wooden car with a motor and wires',
      },
      {
        titulo: 'Room to invent',
        texto: 'Paper, glue and imagination turn into something they will want to show off.',
        alt: 'A boy showing the popsicle-stick foosball table he built',
      },
      {
        titulo: 'Independence and pride',
        texto: "The best moment is when they look at the result and say, 'Look what I made!'",
        alt: 'A boy gluing the eyes onto a cardboard crocodile bin',
      },
    ],
    ctaBox: {
      tituloPre: 'The alternative your child needs ',
      tituloDestaque: 'is right here',
      tituloPos: '.',
      texto:
        'Playful projects that turn free time into making, discovering and learning. For kids ages 4 to 10.',
      perguntaPre: 'Want access to ',
      perguntaDestaque: 'every',
      perguntaPos: ' project?',
      cta: 'I want the projects →',
    },
  },

  porDentro: {
    pillEmoji: '📘',
    pill: 'Inside the kit',
    titulo: 'See the materials list and the step-by-step inside the kit',
    texto:
      'Every project comes on pages like these: a materials list, a photo step-by-step and a difficulty level. Ready to print and easy to follow.',
    paginas: [
      { legenda: 'Project — Solar boat', alt: 'Page of the solar boat project, with solar panels and a propeller' },
      { legenda: 'Step by step — Game board', alt: 'Step-by-step page for the game board, with hot glue and colored paper' },
      { legenda: 'Step by step — Mechanical hand', alt: 'Step-by-step page for the mechanical hand made with straws' },
      { legenda: 'Project — String lights', alt: 'Page of the cardboard-tube string lights project, with LED lights' },
      { legenda: 'Project — Paper lantern', alt: 'Page of the paper lantern project, with popsicle sticks and napkins' },
      { legenda: 'Materials — Nitro car', alt: 'Materials list for the nitro car: sticks, batteries, straws, bottle caps and rubber bands' },
      { legenda: 'Recycled — Crocodile bin', alt: 'Final page of the crocodile bin project, with the last steps and decoration' },
      { legenda: 'Experiment — Sky in a jar', alt: 'Page of the sky-and-sunset jar experiment, with milk, water and a flashlight' },
      { legenda: 'Project — Straw roller coaster', alt: 'Page of the straw roller coaster project, with materials and steps' },
      { legenda: 'Experiment — Fizz rocket', alt: 'Page of the fizz rocket experiment, with a small tube and water' },
    ],
    dicaArraste: 'swipe sideways →',
    anterior: 'Previous page',
    proxima: 'Next page',
    fechar: 'Close enlarged image',
    cta: 'I want the projects now →',
  },

  historia: {
    pillEmoji: '💡',
    pill: 'Why we started the club',
    tituloPre: 'Made to show kids that ',
    tituloDestaque: 'making something can be far more interesting',
    tituloPos: ' than staring at a screen.',
    intro: `${site.nomeClube} did not start from a market study. It started from a real moment: a child on a screen, a tired mother, and the question that would not leave her: "what do I offer instead?"`,
    cards: [
      {
        titulo: 'The problem nobody was solving',
        texto: 'Getting the phone out of their hands without a fight. Offering something they would actually choose, not something they do because they have to.',
      },
      {
        titulo: 'The turning point',
        texto: 'When a child has something in their hands that genuinely sparks curiosity, the screen stops being the only option.',
      },
      {
        titulo: 'Made to work at home',
        texto: 'Each kit is built around what kids ages 4 to 10 actually like to do. This is not theory. It is practice tested at the kitchen table.',
      },
      {
        titulo: 'For the parent who wants a different afternoon',
        texto: 'No guilt and no lecture. Real options for real days, ready to print and use today.',
      },
    ],
    citacao: {
      textoPre: 'We are not trying to ban screens. We want to give families back ',
      destaque: 'the good kind of quiet',
      textoPos: ': a child so absorbed in making something that the phone slips their mind.',
      assinatura: `Founders of ${site.nomeClube}`,
      cargo: 'Parents, educators and people who care about a creative childhood',
      mascoteAlt: '',
    },
    stats: [
      { valor: '+15k', rotulo: 'families reached' },
      { valor: '5', rotulo: 'areas of development' },
      { valor: '4–10', rotulo: 'age range' },
      { valor: 'Access', rotulo: 'Digital member area: print the projects and use them today' },
    ],
    missao: {
      pre: 'Our mission is simple: ',
      destaque: "turn a child's free time into making time.",
      pos: ' Robotics, science, art and logic: each kit is a door into what they can do with their own hands.',
    },
    cta: 'I want to start today →',
  },

  divisor: {
    frase: 'Where childhood turns into invention.',
  },

  exemplos: {
    pillEmoji: '🧩',
    pill: 'A few examples',
    titulo: 'Everything your child needs to start making, discovering and feeling proud',
    texto:
      'Every project has a full visual step-by-step. No searching, no guessing. Your child sees the picture, understands what to do and starts making.',
    alts: [
      'A cardboard rocket with a blue bottle-cap nose, googly eyes and wheels',
      'A blue cardboard truck with a motor and green bottle-cap wheels',
      'A girl dripping dye into jars for a colorful experiment',
      'A helicopter made from a bottle, popsicle sticks and bottle caps',
      'A solar boat in a green tray, with solar panels and a propeller',
      'A boy building a walking robot from popsicle sticks',
      'A smiling boy next to a drawing robot made from markers',
      'A girl building a wooden car with a motor and wires',
      'A boy gluing the eyes onto a cardboard crocodile bin',
    ],
    legenda: 'These are just a few of the 200+ projects your child can make.',
    anterior: 'Previous photo',
    proxima: 'Next photo',
  },

  depoimentos: {
    pillEmoji: '❤️',
    pill: 'Real notes from mothers who already have the kit',
    titulo: 'What mothers are saying on WhatsApp',
    texto: 'Real screenshots of conversations with customers, published with their permission.',
    alts: [
      'WhatsApp chat in which a customer thanks them for the materials and says her son followed the activity',
      'WhatsApp chat with Juliana, whose son is focused on building a project in the living room',
      'WhatsApp chat with Mariana Alves about her daughter building the rocket and the Kit Mega Inventor',
      'WhatsApp chat in which a customer says thank you and that her son got excited about the projects',
    ],
    anterior: 'Previous story',
    proxima: 'Next story',
  },

  ofertas: {
    pillEmoji: '🎁',
    pill: 'Launch offers',
    tituloPre: 'Choose the ',
    tituloDestaque: 'right kit',
    tituloPos: ' for your child',
    texto: 'Start with robotics only, or take all 4 kits and 200+ projects. One-time payment and instant access.',
    de: 'Was',
    por: 'now',
    valorSeparado: 'Price if bought separately:',
    pagamentoInfo: 'One-time payment · No subscription · Instant lifetime access',
    garantiaLinha: `${g}-day guarantee: if it is not for you, we refund 100%.`,
    mirim: {
      titulo: 'Little Robotics Kit',
      subtitulo: '20 robot and machine projects your child builds with things you already have at home.',
      mockupAlt: 'Robótica em Casa. Little Robotics Kit. 20 projects',
      itens: [
        { pre: 'Little Robotics Kit: ', destaque: '20 projects', pos: '' },
        { pre: 'A ', destaque: 'fully visual', pos: ' step-by-step a child can follow' },
        { pre: 'Private access to the ', destaque: 'member area', pos: '' },
      ],
      cta: 'Start with robotics →',
    },
    mega: {
      selo: '⭐ Most complete',
      titulo: 'Mega Inventor Kit',
      subtitulo: '200+ projects across 4 kits, and a lot more making and play for your child.',
      mockupAlt: "Kids' Robotics, Recyclables, Science Experiments, Crafts. Bonus: Operation Little Agent",
      itens: [
        { icone: 'robot', pre: "Kids' Robotics: ", destaque: 'robots and machines that move', pos: '' },
        { icone: 'recycle', pre: 'Recyclables: ', destaque: 'household "trash" becomes a toy', pos: '' },
        { icone: 'flask', pre: 'Science Experiments: ', destaque: 'science with what is in the kitchen', pos: '' },
        { icone: 'scissors', pre: 'Crafts: ', destaque: 'fine motor skills and care', pos: '' },
        { icone: 'search', pre: 'Bonus: Operation Little Agent', destaque: ', secret missions', pos: ' for your child to complete around the house' },
        { icone: 'check', pre: 'Private access to the ', destaque: 'member area', pos: '' },
      ],
      cta: 'I want the 200+ projects now →',
    },
    upsell: {
      pill: 'Wait! Exclusive offer',
      fechar: 'Close',
      titulo: 'Take the Mega Inventor Kit at a bigger discount',
      texto:
        "4 complete ebooks — Kids' Robotics, Recyclables, Science Experiments and Crafts. Only on this page:",
      mockupAlt: "Kids' Robotics, Recyclables, Science Experiments, Crafts. Bonus: Operation Little Agent",
      aceitar: 'I accept this offer',
      recusar: 'Continue with the Little Robotics Kit',
    },
    confianca: [
      '🔒 Secure checkout · Payment processed by Hotmart · Pix (Brazil’s instant payment), card, or boleto (a Brazilian bank slip). Prices are in euros.',
      'Access is sent by email as soon as the payment is confirmed.',
      '⚠️ Digital product (PDFs to print). Nothing physical is shipped.',
      'Activities should always be done with an adult nearby.',
    ],
  },

  garantia: {
    pillEmoji: '✅',
    pill: 'No risk for you',
    titulo: `Unconditional ${g}-day guarantee`,
    texto: `If within ${g} days you are not happy with your kit, for any reason, we refund 100%. Request it directly through Hotmart, with no questions and no paperwork. This is also your right to cancel under Brazil’s Consumer Protection Code.`,
    escudoAlt: '',
  },

  lancamento: {
    titulo: '⏳ Special launch price',
    texto: (v) =>
      `The prices of ${v.mirim} and ${v.mega} are valid until ${v.data} (Brasília time). After that, the kits will cost ${v.depoisMirim} and ${v.depoisMega}.`,
    unidades: ['days', 'hours', 'min', 'sec'],
    cta: 'Get the launch price →',
    encerrado: 'The launch period has ended.',
  },

  faq: {
    pillEmoji: '❓',
    pill: 'Common questions',
    titulo: 'Any questions?',
    itens: [
      {
        q: 'How do I receive the kit?',
        a: 'As soon as the payment is confirmed, you get an email with access to the Hotmart member area, where all the PDFs live. Pix and card are instant; boleto, a Brazilian bank slip, can take up to 3 business days.',
      },
      {
        q: 'Is the kit physical or digital?',
        a: 'It is 100% digital: PDFs to print or follow on a phone, tablet or computer. Nothing is mailed to you.',
      },
      {
        q: 'Do I need a printer?',
        a: 'No. You can follow the steps on a screen. Printing just makes it easier for your child.',
      },
      {
        q: 'What age is it for?',
        a: 'For kids ages 4 to 10. Each project shows its difficulty, so you can pick what fits your child.',
      },
      {
        q: 'Will I have to buy materials?',
        a: 'The projects use things most homes already have: cardboard, bottles, popsicle sticks, cups, straws, tape and glue. Each project lists what you need.',
      },
      {
        q: 'Can my child do it alone?',
        a: 'The projects are made for the child to take an active part, always with an adult nearby, especially for steps with scissors, hot glue, experiments and small parts (extra care under age 6).',
      },
      {
        q: 'How long do I keep access?',
        a: 'For good. The payment is one-time, there is no subscription, and access is lifetime.',
      },
      {
        q: 'Can I use it with more than one child?',
        a: 'Yes. The kit is for your family, with as many children as you have.',
      },
      {
        q: 'What if I do not like it?',
        a: `You have a ${g}-day guarantee. If you are not happy, request a refund through Hotmart and get 100% back.`,
      },
      {
        q: 'How do I reach support?',
        a: `By email at ${site.empresa.emailSuporte}. We reply within 1 business day.`,
      },
    ],
  },

  ctaFinal: {
    tituloPre: 'Your child deserves to find out ',
    tituloDestaque: 'what they can make',
    tituloPos: '',
    texto: 'Give them the chance to build, invent, experiment and feel proud of what their own hands did. Start today: access is instant.',
    cta: 'I want to make something with my child →',
    microcopy: `🔒 Secure checkout · ${g}-day guarantee · Instant access`,
    mascoteAlt: '',
  },

  footer: {
    logoAlt: 'Robótica em Casa',
    copyright: `© 2026 ${site.marca} · ${site.empresa.nome} · ${site.empresa.endereco}`,
    suporte: `Support: ${site.empresa.emailSuporte}`,
    links: [
      { label: 'Privacy Policy', href: `${prefix}/politica-de-privacidade` },
      { label: 'Terms of Use', href: `${prefix}/termos-de-uso` },
      { label: 'Cookie Policy', href: `${prefix}/politica-de-cookies` },
    ],
    hotmart: 'Payment processed securely by Hotmart. Prices are in euros (EUR).',
    aviso:
      'Safety note: every activity should be done with an adult nearby. Some projects use scissors, hot glue and small parts, which should not be left with children under 6 without supervision.',
    meta: 'This site is not affiliated with Facebook, Instagram or Meta Platforms, Inc.',
  },

  sticky: {
    produto: 'Mega Inventor Kit',
    cta: 'I want the kit',
  },

  cookies: {
    texto: 'We use cookies to improve your experience and measure our ads.',
    aceitar: 'Accept',
    recusar: 'Decline',
    link: 'Cookie Policy',
    href: `${prefix}/politica-de-cookies`,
  },

  a11y: {
    pular: 'Skip to content',
    fechar: 'Close',
    avisoCookies: 'Cookie notice',
    linksLegais: 'Legal links',
    ampliar: 'enlarge',
    idiomas: 'Languages',
  },

  legal: {
    avisoRevisao: '[TO BE CONFIRMED WITH A LAWYER]',
    atualizado: 'Last updated: September 2026.',
    privacidade: {
      title: 'Privacy Policy',
      description: `Privacy Policy of ${site.marca} (${site.empresa.nome}): data we collect, why, who we share it with, and your rights.`,
      secoes: [
        {
          h: '1. Who we are',
          p: [
            `This Privacy Policy applies to the ${site.marca} website, operated by ${site.empresa.nome}, CNPJ ${site.empresa.cnpj} (Brazilian company ID), address ${site.empresa.endereco}, referred to here as the "Company".`,
          ],
        },
        {
          h: '2. Data we collect',
          p: [
            'We collect: (a) browsing data and cookies, with your consent, to measure ads (Meta Pixel); (b) purchase data — name, email, CPF (Brazilian tax ID) and payment details — collected and processed directly by Hotmart at checkout.',
          ],
        },
        {
          h: '3. Why we use it',
          p: [
            'We use the data to deliver the digital product, send messages about your purchase, meet legal and tax duties, and, with your consent, measure how our ads perform.',
          ],
        },
        {
          h: '4. Who we share it with',
          p: [
            'We share data with Hotmart (payment and the member area) and Meta Platforms (ad measurement, only after you accept cookies). We do not sell personal data.',
          ],
        },
        {
          h: '5. Your rights (Brazil’s LGPD, Law 13.709/2018)',
          p: [
            'You can confirm that we process your data, access it, correct it, anonymize it, block or delete it, ask for portability, and withdraw consent at any time, at no cost.',
          ],
        },
        {
          h: '6. Data protection contact',
          p: [
            `To use your rights or ask about this policy, email our data contact at ${site.empresa.emailSuporte}.`,
          ],
        },
      ],
    },
    termos: {
      title: 'Terms of Use',
      description: `Terms of Use of ${site.marca} (${site.empresa.nome}): license, guarantee, right to cancel, and intellectual property.`,
      secoes: [
        {
          h: '1. The product',
          p: [
            `${site.marca} is a digital product from ${site.empresa.nome}: PDF kits of robotics, science, recycling and craft projects for kids ages 4 to 10. Nothing physical is shipped. Activities should always be done with an adult nearby.`,
          ],
        },
        {
          h: '2. License',
          p: [
            'Your purchase is a personal and family license. It is non-transferable and non-exclusive. You may not resell, redistribute, publish or use the PDFs commercially, in whole or in part.',
          ],
        },
        {
          h: '3. Access',
          p: [
            'Access is sent by email as soon as payment is confirmed, through the Hotmart member area. The payment is one-time and access lasts as long as the platform is available.',
          ],
        },
        {
          h: '4. Right to cancel and guarantee',
          p: [
            `Under article 49 of Brazil’s Consumer Protection Code, you can request a refund within ${g} days of purchase, directly through Hotmart, and receive 100% of what you paid.`,
          ],
        },
        {
          h: '5. Intellectual property',
          p: [
            `All content (text, illustrations, photos, brand and mascot) belongs to ${site.empresa.nome} and is protected by copyright law.`,
          ],
        },
        {
          h: '6. Contact',
          p: [`Questions about these terms: ${site.empresa.emailSuporte}.`],
        },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      description: `Cookie Policy of ${site.marca}: what cookies are, which ones we use, and how to manage your choice.`,
      secoes: [
        {
          h: '1. What cookies are',
          p: [
            'Cookies are small text files stored in your browser. They help the site work and show how it is used.',
          ],
        },
        {
          h: '2. Which cookies we use',
          p: [
            'Preference cookies (they remember your choice on the consent banner) and, only if you accept, Meta Pixel advertising cookies (Meta Platforms), used to measure how our ads perform.',
          ],
        },
        {
          h: '3. How to manage them',
          p: [
            'You can accept or decline cookies in the banner, and change your mind by clearing this site’s data in your browser. If you decline, no advertising cookie is loaded.',
          ],
        },
        {
          h: '4. Contact',
          p: [`Questions about cookies: ${site.empresa.emailSuporte}.`],
        },
      ],
    },
  },
} satisfies Content;

export default content;
