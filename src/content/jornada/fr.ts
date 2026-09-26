import type { Jornada } from './pt-br';

const jornada = {
  meta: {
    title: 'Le parcours du petit inventeur | Offre exclusive',
    description:
      "Une carte d'aventures à utiliser avec le Kit Mega Inventeur. Le rabais n'existe que sur cette page, juste après l'achat.",
  },
  skip: 'Aller au contenu',
  marcaAlt: 'Robótica em Casa',
  confirmacao: "Votre commande est confirmée ! Les accès sont déjà en route vers votre e-mail.",
  pre: "Attendez, avant de partir : vous avez un rabais qui n'existe que sur cette page.",
  titulo: 'Ne laissez pas vos 200 projets oubliés dans un dossier.',
  subtitulo: (v) =>
    `Ajoutez le parcours du petit inventeur, de ${v.de} pour seulement ${v.por} : la carte d'aventures qui transforme chaque projet en mission que votre enfant voudra terminer.`,
  capaAlt:
    "Un robot en carton avec un sac à dos et des lunettes, qui marche sur une carte d'aventure colorée, avec une médaille et un certificat à côté",
  problema: {
    titulo: 'Soyons honnêtes.',
    paragrafos: [
      'Vous venez de réserver plus de 200 projets. Il y a beaucoup de jeu qui vous attend.',
      "Voici ce qui se passe dans beaucoup de maisons : les premiers projets sont un succès… puis arrive une semaine chargée, personne ne choisit la suite, et les PDF restent dans un dossier.",
      'Pas parce que les projets ne sont pas bons.',
      "Mais parce qu'un enfant a besoin d'une raison de revenir, et vous n'avez pas le temps d'inventer cette raison tous les jours.",
    ],
  },
  solucao: {
    titulo: 'Le parcours du petit inventeur donne cette raison à votre enfant.',
    intro:
      "C'est une carte d'aventures à imprimer qui rassemble tous les projets du Kit Mega Inventeur en un grand voyage à travers quatre territoires.",
    territorios: [
      { icone: 'robot', titulo: 'Terre des robots' },
      { icone: 'recycle', titulo: 'Île du recyclage' },
      { icone: 'flask', titulo: 'Vallée de la science' },
      { icone: 'scissors', titulo: 'Village du bricolage' },
    ],
    fecho:
      "Chaque projet terminé devient une nouvelle étape sur la carte. Chaque territoire, une médaille. Chaque niveau, un certificat. Et vous n'avez plus à décider quoi faire : une carte mission surprise décide pour vous.",
  },
  dentro: {
    titulo: "Ce qu'il y a dedans",
    itens: [
      {
        titulo: 'La carte du parcours',
        texto: 'une affiche colorée pour le mur, où votre enfant coche chaque projet terminé',
      },
      {
        titulo: 'Des médailles par catégorie',
        texto: 'une pour chaque territoire terminé',
      },
      {
        titulo: 'Des certificats de niveau',
        texto: "d'Inventeur niveau 1 à niveau 3, parfaits pour le frigo",
      },
      {
        titulo: 'Un mur des exploits',
        texto: 'un espace pour montrer les créations avec fierté',
      },
      {
        titulo: 'Des cartes mission surprise',
        texto: 'vous en tirez une et le projet du jour est choisi, sans débat',
      },
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
  momento: {
    titulo: 'Regarde ce que j’ai fait !',
    texto:
      'Imaginez la scène : votre enfant court jusqu’au mur pour colorier une nouvelle étape, se tourne vers vous et dit : « Regarde ce que j’ai fait ! » C’est pour ça que le parcours existe.',
  },
  porque: {
    titulo: 'Pourquoi seulement maintenant',
    texto: (v) =>
      `Ce rabais n'existe qu'ici, juste après votre achat. En dehors de cette page, le parcours du petit inventeur coûte ${v.de}. Si vous partez maintenant, vous ne reverrez pas ce prix.`,
  },
  oferta: {
    nome: 'Le parcours du petit inventeur',
    deRotulo: 'De',
    por: (v) => `Pour seulement ${v.por}`,
    economia: (v) => `Vous économisez ${v.valor} (${v.percentual} de réduction)`,
    pagamento: 'Paiement unique · Accès immédiat et à vie · PDF à imprimer',
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
        q: 'Pourquoi le prix est-il si bas ?',
        a: (v) =>
          `Parce que c’est un rabais réservé à ceux qui viennent d’acheter le Kit Mega Inventeur. En dehors de cette page, le parcours coûte ${v.de}.`,
      },
      {
        q: 'Pour quel âge ?',
        a: () => 'Pour les enfants de 4 à 10 ans.',
      },
    ],
  },
  nota: 'Un adulte doit superviser la découpe des matériaux.',
  idiomas: 'Langues',
} satisfies Jornada;

export default jornada;
