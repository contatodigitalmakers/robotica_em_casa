import type { Obrigado } from './pt-br';

const obrigado = {
  meta: {
    title: 'Merci pour votre achat | Robótica em Casa',
    description:
      "L'accès aux matériaux a déjà été envoyé par e-mail. Voyez comment entrer dans l'espace membre et commencer aujourd'hui.",
  },
  skip: 'Aller au contenu',
  marcaAlt: 'Robótica em Casa',
  confirmacao: 'Achat confirmé. Bienvenue chez Robotique à la maison.',
  titulo: 'Merci pour votre achat.',
  texto: "L'accès aux matériaux a déjà été envoyé à votre e-mail. C'est par là que vous arrivez aux projets.",
  passosTitulo: 'Quoi faire maintenant',
  passos: [
    {
      titulo: "Ouvrez l'e-mail",
      texto: 'Regardez aussi les spams et les promotions. L’expéditeur est Hotmart.',
    },
    {
      titulo: "Entrez dans l'espace membre",
      texto: "Les PDF sont là, prêts à imprimer ou à suivre à l'écran.",
    },
    {
      titulo: 'Commencez avec un adulte à côté',
      texto: "Choisissez un projet simple et faites-le ensemble aujourd'hui.",
    },
  ],
  suportePre: 'Une question ? Écrivez à',
  suportePos: 'Nous répondons sous 1 jour ouvré.',
  nota: "Les activités se font avec un adulte à côté. Certains projets utilisent des ciseaux, de la colle chaude et de petites pièces.",
  idiomas: 'Langues',
} satisfies Obrigado;

export default obrigado;
