import type { JornadaDown } from './pt-br';

const jornadaDown = {
  meta: {
    title: 'Le parcours du petit inventeur | Dernière chance',
    description:
      "Le même parcours du petit inventeur, maintenant avec un an d'accès. Le rabais n'existe que sur cette page.",
  },
  skip: 'Aller au contenu',
  marcaAlt: 'Robótica em Casa',
  confirmacao: "Votre commande est confirmée ! Les accès sont déjà en route vers votre e-mail.",
  pre: "Pas grave d'avoir laissé passer l'offre d'avant. Sans pression.",
  titulo: 'Dernière chance de prendre le parcours, en version plus légère.',
  subtitulo: (v) =>
    `Le même parcours du petit inventeur, maintenant pour seulement ${v.por}, avec un an d'accès. Seulement sur cette page.`,
  capaAlt:
    "Un robot en carton avec un sac à dos et des lunettes, qui marche sur une carte d'aventure colorée, avec une médaille et un certificat à côté",
  dentro: {
    titulo: "Ce qu'il y a dedans",
    itens: [
      'La carte du parcours, une affiche colorée pour le mur',
      'Des médailles par catégorie, une pour chaque territoire',
      'Des certificats Inventeur niveau 1 à niveau 3',
      'Un mur des exploits pour montrer les créations',
      'Des cartes mission surprise pour choisir le projet du jour',
    ],
  },
  como: {
    titulo: 'Comment ça marche',
    passos: [
      'Imprimez la carte et accrochez-la là où votre enfant la voit.',
      'Tirez une carte mission pour choisir le projet du jour.',
      'Construisez ensemble, marquez l’étape sur la carte et gagnez la médaille.',
    ],
  },
  oferta: {
    nome: 'Le parcours du petit inventeur',
    deRotulo: 'De',
    por: (v) => `Pour seulement ${v.por}`,
    economia: (v) => `Vous économisez ${v.valor} (${v.percentual} de réduction)`,
    pagamento: 'Paiement unique · PDF à imprimer',
    acesso: 'Un an d’accès dans le même espace membre',
    clique: 'Ajouté à votre commande en un clic, avec le même moyen de paiement.',
    exclusivo: 'Rabais réservé à ceux qui viennent d’acheter le Kit Mega Inventeur.',
    cta: (v) => `Oui, je veux le parcours pour seulement ${v.por}`,
    recusa: 'Non merci, je continue sans le parcours',
  },
  garantia: (v) =>
    `Garantie de ${v.dias} jours. Si ça ne convient pas à votre famille, écrivez-nous sous ${v.dias} jours et nous remboursons 100 %.`,
  faq: {
    titulo: 'Questions rapides',
    itens: [
      {
        q: 'Est-ce que ça ajoute de nouveaux projets ?',
        a: () =>
          'Non. Le parcours est un kit de progrès et de motivation, fait pour accompagner les projets du Kit Mega Inventeur que vous venez d’acheter.',
      },
      {
        q: 'Comment je le reçois ?',
        a: () =>
          'Il est ajouté au même espace membre que votre Kit Mega Inventeur, avec un accès immédiat.',
      },
      {
        q: 'Combien de temps dure l’accès ?',
        a: () =>
          'Un an. L’accès n’est pas à vie dans cette offre, mais vous pouvez imprimer et garder les PDF.',
      },
    ],
  },
  nota: 'Un adulte doit superviser la découpe des matériaux.',
  idiomas: 'Langues',
} satisfies JornadaDown;

export default jornadaDown;
