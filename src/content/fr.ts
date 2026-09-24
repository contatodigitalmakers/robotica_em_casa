/**
 * Texte français, adapté pour les parents (vouvoiement).
 * Les noms de marque et de kits restent en portugais (ils sont sur les couvertures).
 * Les prix sont en euros.
 */
import type { Content } from './pt-br';
import { site } from '../config/site';

const g = site.garantiaDias;
const prefix = '/fr';

const content = {
  meta: {
    title: 'Robótica em Casa | Plus de 200 projets de robotique et de sciences pour les 4-10 ans',
    description:
      'Kits numériques avec plus de 200 projets de robotique, sciences, recyclage et bricolage pour les enfants de 4 à 10 ans, avec ce que vous avez déjà à la maison. Accès immédiat.',
  },

  header: {
    logoAlt: 'Robótica em Casa — retour en haut',
    cta: 'Je veux le kit →',
  },

  hero: {
    pillEmoji: '✨',
    pill: 'Plus de 200 projets pour les 4-10 ans',
    tituloPre: 'Transformez le temps d’écran en ',
    tituloDestaque: 'temps de création',
    tituloPos: '.',
    subtitulo:
      'Des projets de robotique, de sciences, de recyclage et de bricolage pour les enfants de 4 à 10 ans, avec des matériaux simples que vous avez déjà à la maison.',
    cta: 'Je veux voir ce que mon enfant peut créer →',
    microcopy: `Paiement unique · Accès immédiat · Garantie de ${g} jours`,
    mascoteAlt: 'Mascotte de Robótica em Casa : un robot en boîte de carton',
    destaques: [
      { titulo: 'Plus de 200 projets', texto: 'pour que votre enfant ait de quoi créer longtemps' },
      { titulo: 'Matériaux simples', texto: 'carton, bouteilles, bâtonnets et objets de la maison' },
      { titulo: 'Plus de création', texto: 'il invente, teste et fabrique de ses propres mains' },
    ],
  },

  alternativa: {
    pillEmoji: '🔥',
    pill: 'Marre des écrans ? Et si on créait ?',
    tituloPre: 'Et s’il existait quelque chose de ',
    tituloDestaque: 'plus amusant',
    tituloPos: ' qu’un écran ?',
    texto:
      'Quand un enfant trouve quelque chose d’intéressant à monter, tester et découvrir, il s’implique, apprend en faisant et est fier de ce qu’il a créé.',
    fotoAlt: 'Robot maison avec bouchon de bouteille, yeux mobiles, carton et roulettes, sur une table de cuisine',
    beneficios: [
      {
        titulo: 'Plus d’attention, moins de disputes',
        texto: 'Des activités qui captent l’attention et aident l’enfant à se concentrer en jouant.',
        alt: 'Garçon souriant à côté d’un robot dessinateur fait avec des feutres',
      },
      {
        titulo: 'Apprendre en faisant',
        texto: 'L’enfant apprend en construisant, en testant des idées et en voyant le projet prendre vie.',
        alt: 'Fille qui monte une voiture en bois avec un moteur et des fils',
      },
      {
        titulo: 'De la place pour inventer',
        texto: 'Papier, colle et imagination deviennent des découvertes qu’il aura envie de montrer.',
        alt: 'Garçon qui montre le baby-foot en bâtonnets de glace qu’il a construit',
      },
      {
        titulo: 'Autonomie et fierté',
        texto: 'Le plus beau moment, c’est quand il regarde le résultat et dit : « Regarde ce que j’ai fait ! »',
        alt: 'Garçon qui colle les yeux d’une poubelle crocodile en carton',
      },
    ],
    ctaBox: {
      tituloPre: 'L’alternative dont votre enfant a besoin ',
      tituloDestaque: 'est ici',
      tituloPos: '.',
      texto:
        'Des projets ludiques pour transformer le temps libre en création, découverte et apprentissage. Pour les 4-10 ans.',
      perguntaPre: 'Vous voulez accéder à ',
      perguntaDestaque: 'tous',
      perguntaPos: ' les projets ?',
      cta: 'Je veux les projets →',
    },
  },

  porDentro: {
    pillEmoji: '📘',
    pill: 'Dans le kit',
    titulo: 'Voyez la liste du matériel et le pas à pas dans le kit',
    texto:
      'Chaque projet tient sur des pages comme celles-ci : liste du matériel, pas à pas en photos et niveau de difficulté. Prêt à imprimer et simple à suivre.',
    paginas: [
      { legenda: 'Projet — Bateau solaire', alt: 'Page du projet de bateau solaire, avec panneaux solaires et hélice' },
      { legenda: 'Pas à pas — Plateau de jeu', alt: 'Page du pas à pas du plateau de jeu, avec colle chaude et papier coloré' },
      { legenda: 'Pas à pas — Main mécanique', alt: 'Page du pas à pas de la main mécanique en pailles' },
      { legenda: 'Projet — Guirlande lumineuse', alt: 'Page du projet de guirlande en tubes de carton et LED' },
      { legenda: 'Projet — Lanterne en papier', alt: 'Page du projet de lanterne en papier, avec bâtonnets et serviettes' },
      { legenda: 'Matériel — Voiture nitro', alt: 'Liste du matériel de la voiture nitro : bâtonnets, piles, pailles, bouchons et élastiques' },
      { legenda: 'Recyclage — Poubelle crocodile', alt: 'Dernière page du projet poubelle crocodile, avec les étapes finales et la décoration' },
      { legenda: 'Expérience — Ciel en bocal', alt: 'Page de l’expérience ciel et coucher de soleil, avec lait, eau et lampe' },
      { legenda: 'Projet — Montagnes russes en pailles', alt: 'Page du projet de montagnes russes en pailles, avec le matériel et les étapes' },
      { legenda: 'Expérience — Fusée effervescente', alt: 'Page de l’expérience fusée effervescente, avec un tube et de l’eau' },
    ],
    dicaArraste: 'glissez sur le côté →',
    anterior: 'Page précédente',
    proxima: 'Page suivante',
    fechar: 'Fermer l’image agrandie',
    cta: 'Je veux les projets maintenant →',
  },

  historia: {
    pillEmoji: '💡',
    pill: 'Pourquoi nous avons créé le club',
    tituloPre: 'Conçu pour montrer aux enfants que ',
    tituloDestaque: 'créer peut être bien plus intéressant',
    tituloPos: ' que rester devant un écran.',
    intro: `${site.nomeClube} n’est pas né d’une étude de marché. Il est né d’un moment réel : un enfant devant un écran, une mère épuisée, et la question qui ne la quittait pas : « et maintenant, qu’est-ce que je propose à la place ? »`,
    cards: [
      {
        titulo: 'Le problème que personne ne résolvait',
        texto: 'Retirer le téléphone des mains sans dispute. Proposer quelque chose que l’enfant choisit vraiment, pas par obligation.',
      },
      {
        titulo: 'Le tournant',
        texto: 'Quand l’enfant a entre les mains quelque chose qui éveille vraiment sa curiosité, l’écran n’est plus la seule option.',
      },
      {
        titulo: 'Un contenu qui fonctionne à la maison',
        texto: 'Chaque kit est pensé pour ce que les 4-10 ans aiment vraiment faire. Ce n’est pas de la théorie : c’est une pratique testée à la maison.',
      },
      {
        titulo: 'Pour le parent qui veut faire autrement',
        texto: 'Sans culpabilité et sans jugement. Des solutions concrètes pour des journées réelles, prêtes à imprimer et à utiliser aujourd’hui.',
      },
    ],
    citacao: {
      textoPre: 'Nous ne voulons pas supprimer les écrans. Nous voulons rendre aux familles ',
      destaque: 'le bon silence',
      textoPos: ' : celui de l’enfant tellement absorbé par ce qu’il crée qu’il oublie le téléphone.',
      assinatura: `Fondateurs du ${site.nomeClube}`,
      cargo: 'Parents, éducateurs et passionnés d’enfances créatives',
      mascoteAlt: '',
    },
    stats: [
      { valor: '+15 000', rotulo: 'familles accompagnées' },
      { valor: '5', rotulo: 'domaines de développement' },
      { valor: '4–10', rotulo: 'ans, la tranche d’âge' },
      { valor: 'Accès', rotulo: 'Espace membres numérique : imprimez les projets et utilisez-les aujourd’hui' },
    ],
    missao: {
      pre: 'Notre mission est simple : ',
      destaque: 'transformer le temps libre de l’enfant en temps de création.',
      pos: ' Robotique, sciences, art et logique : chaque kit ouvre un monde de possibilités avec ses propres mains.',
    },
    cta: 'Je veux commencer aujourd’hui →',
  },

  divisor: {
    frase: 'Là où l’enfance devient invention.',
  },

  exemplos: {
    pillEmoji: '🧩',
    pill: 'Quelques exemples',
    titulo: 'Tout pour que votre enfant commence à créer, découvrir et être fier',
    texto:
      'Chaque projet a un pas à pas visuel et complet. Pas de recherche, pas de doute. L’enfant voit l’image, comprend quoi faire et se met à créer.',
    alts: [
      'Fusée en carton avec un nez en bouchon bleu, des yeux mobiles et des roulettes',
      'Camion en carton bleu avec un moteur et des roues en bouchons verts',
      'Fille qui verse du colorant dans des bocaux pour une expérience colorée',
      'Hélicoptère fait avec une bouteille, des bâtonnets de glace et des bouchons',
      'Bateau solaire dans un bac vert, avec panneaux solaires et hélice',
      'Garçon qui monte un robot marcheur en bâtonnets de glace',
      'Garçon souriant à côté d’un robot dessinateur fait avec des feutres',
      'Fille qui monte une voiture en bois avec un moteur et des fils',
      'Garçon qui colle les yeux d’une poubelle crocodile en carton',
    ],
    legenda: 'Ce ne sont que quelques-uns des plus de 200 projets que votre enfant peut créer.',
    anterior: 'Photo précédente',
    proxima: 'Photo suivante',
  },

  depoimentos: {
    pillEmoji: '❤️',
    pill: 'Témoignages réels de mères qui ont déjà le kit',
    titulo: 'Ce que les mères disent sur WhatsApp',
    texto: 'Captures réelles de conversations avec des clientes, publiées avec leur autorisation.',
    alts: [
      'Conversation WhatsApp dans laquelle une cliente remercie pour le matériel et raconte que son fils a suivi l’activité',
      'Conversation WhatsApp de Juliana, dont le fils est concentré à construire un projet dans le salon',
      'Conversation WhatsApp de Mariana Alves sur sa fille qui a construit la fusée et le Kit Mega Inventor',
      'Conversation WhatsApp dans laquelle une cliente remercie et dit que son fils était enthousiaste',
    ],
    anterior: 'Témoignage précédent',
    proxima: 'Témoignage suivant',
  },

  ofertas: {
    pillEmoji: '🎁',
    pill: 'Offres de lancement',
    tituloPre: 'Choisissez le ',
    tituloDestaque: 'bon kit',
    tituloPos: ' pour votre enfant',
    texto: 'Commencez par la robotique seule, ou prenez les 4 kits et plus de 200 projets. Paiement unique et accès immédiat.',
    de: 'Au lieu de',
    por: '',
    valorSeparado: 'Prix si achetés séparément :',
    pagamentoInfo: 'Paiement unique · Sans abonnement · Accès immédiat et à vie',
    garantiaLinha: `Garantie de ${g} jours : si cela ne vous convient pas, nous remboursons 100 %.`,
    mirim: {
      titulo: 'Kit robotique junior',
      subtitulo: '20 projets de robots et de machines que votre enfant construit avec ce que vous avez déjà à la maison.',
      mockupAlt: 'Robótica em Casa. Kit robotique junior. 20 projets',
      itens: [
        { pre: 'Kit robotique junior : ', destaque: '20 projets', pos: '' },
        { pre: 'Un pas à pas ', destaque: '100 % visuel', pos: ', que l’enfant peut suivre' },
        { pre: 'Accès privé à ', destaque: 'l’espace membres', pos: '' },
      ],
      cta: 'Commencer par la robotique →',
    },
    mega: {
      selo: '⭐ Le plus complet',
      titulo: 'Kit Mega Inventeur',
      subtitulo: 'Plus de 200 projets dans 4 kits, et beaucoup plus de création et de jeu pour votre enfant.',
      mockupAlt: 'Robotique pour enfants, Recyclables, Expériences scientifiques, Bricolage. Bonus : Opération Petit Agent',
      itens: [
        { icone: 'robot', pre: 'Robotique pour enfants : ', destaque: 'des robots et des machines qui bougent', pos: '' },
        { icone: 'recycle', pre: 'Recyclables : ', destaque: 'le « déchet » de la maison devient un jouet', pos: '' },
        { icone: 'flask', pre: 'Expériences scientifiques : ', destaque: 'des sciences avec ce qu’il y a dans la cuisine', pos: '' },
        { icone: 'scissors', pre: 'Bricolage : ', destaque: 'motricité fine et soin du geste', pos: '' },
        { icone: 'search', pre: 'Bonus : Opération Petit Agent', destaque: ', des missions secrètes', pos: ' à accomplir dans la maison' },
        { icone: 'check', pre: 'Accès privé à ', destaque: 'l’espace membres', pos: '' },
      ],
      cta: 'Je veux les 200+ projets maintenant →',
    },
    upsell: {
      pill: 'Attendez ! Offre exclusive',
      fechar: 'Fermer',
      titulo: 'Partez avec le Kit Mega Inventeur à une remise plus grande',
      texto:
        '4 ebooks complets — Robotique pour enfants, Recyclables, Expériences scientifiques et Bricolage. Uniquement sur cette page :',
      mockupAlt:
        'Robotique pour enfants, Recyclables, Expériences scientifiques, Bricolage. Bonus : Opération Petit Agent',
      aceitar: 'J’accepte cette offre',
      recusar: 'Continuer avec le Kit robotique junior',
    },
    confianca: [
      '🔒 Paiement sécurisé · Traité par Hotmart · Pix (paiement instantané brésilien), carte bancaire ou boleto (titre de paiement brésilien). Les prix sont en euros.',
      'L’accès est envoyé par e-mail dès la confirmation du paiement.',
      '⚠️ Produit numérique (PDF à imprimer). Aucun envoi physique.',
      'Les activités doivent toujours se faire sous la surveillance d’un adulte.',
    ],
  },

  garantia: {
    pillEmoji: '✅',
    pill: 'Aucun risque pour vous',
    titulo: `Garantie inconditionnelle de ${g} jours`,
    texto: `Si dans les ${g} jours le kit ne vous convient pas, pour n’importe quelle raison, nous remboursons 100 %. La demande se fait directement sur Hotmart, sans questions ni paperasse. C’est aussi votre droit de rétractation, prévu par le Code brésilien de la consommation.`,
    escudoAlt: '',
  },

  lancamento: {
    titulo: '⏳ Offre de lancement — pour une durée limitée',
    texto: (v) =>
      `Les prix spéciaux à partir de ${v.preco} ne sont valables que pendant la période de lancement. Après cette date, les kits reviennent au prix d’origine. Ne remettez pas à plus tard.`,
    unidades: ['heures', 'min', 'sec'],
    cta: 'Profiter du prix de lancement →',
    encerrado: 'La période de lancement est terminée.',
  },

  faq: {
    pillEmoji: '❓',
    pill: 'Questions fréquentes',
    titulo: 'Une question ?',
    itens: [
      {
        q: 'Comment est-ce que je reçois le kit ?',
        a: 'Dès la confirmation du paiement, vous recevez par e-mail l’accès à l’espace membres Hotmart, où se trouvent tous les PDF. Le Pix et la carte sont immédiats ; le boleto, un titre de paiement brésilien, peut prendre jusqu’à 3 jours ouvrés.',
      },
      {
        q: 'Le kit est-il physique ou numérique ?',
        a: 'Il est 100 % numérique : des PDF à imprimer ou à suivre sur téléphone, tablette ou ordinateur. Rien n’est envoyé par la poste.',
      },
      {
        q: 'Faut-il une imprimante ?',
        a: 'Non. Vous pouvez suivre le pas à pas à l’écran. Imprimer rend simplement les choses plus pratiques pour l’enfant.',
      },
      {
        q: 'Pour quel âge ?',
        a: 'Pour les enfants de 4 à 10 ans. Chaque projet indique son niveau, pour que vous choisissiez ce qui convient au vôtre.',
      },
      {
        q: 'Faudra-t-il acheter du matériel ?',
        a: 'Les projets utilisent ce que presque toutes les maisons ont déjà : carton, bouteilles, bâtonnets de glace, gobelets, pailles, ruban et colle. Chaque projet liste ce qu’il faut.',
      },
      {
        q: 'Mon enfant peut-il le faire seul ?',
        a: 'Les projets sont pensés pour que l’enfant participe vraiment, toujours avec un adulte à côté, surtout pour les étapes avec ciseaux, colle chaude, expériences et petites pièces (attention renforcée avant 6 ans).',
      },
      {
        q: 'Combien de temps dure l’accès ?',
        a: 'Pour toujours. Le paiement est unique, sans abonnement, et l’accès est à vie.',
      },
      {
        q: 'Puis-je l’utiliser avec plusieurs enfants ?',
        a: 'Oui. Le kit est pour votre famille, avec autant d’enfants que vous voulez.',
      },
      {
        q: 'Et si cela ne me plaît pas ?',
        a: `Vous avez ${g} jours de garantie. Si vous n’êtes pas satisfait, demandez le remboursement sur Hotmart et récupérez 100 % du montant.`,
      },
      {
        q: 'Comment contacter le support ?',
        a: `Par e-mail à ${site.empresa.emailSuporte}. Nous répondons sous 1 jour ouvré.`,
      },
    ],
  },

  ctaFinal: {
    tituloPre: 'Votre enfant mérite de découvrir ',
    tituloDestaque: 'ce qu’il est capable de créer',
    tituloPos: '',
    texto: 'Donnez-lui la chance de construire, inventer, expérimenter et être fier de ce que ses mains ont fait. Commencez aujourd’hui : l’accès est immédiat.',
    cta: 'Je veux créer avec mon enfant →',
    microcopy: `🔒 Paiement sécurisé · Garantie de ${g} jours · Accès immédiat`,
    mascoteAlt: '',
  },

  footer: {
    logoAlt: 'Robótica em Casa',
    copyright: `© 2026 ${site.marca} · ${site.empresa.nome} · ${site.empresa.endereco}`,
    suporte: `Support : ${site.empresa.emailSuporte}`,
    links: [
      { label: 'Politique de confidentialité', href: `${prefix}/politica-de-privacidade` },
      { label: 'Conditions d’utilisation', href: `${prefix}/termos-de-uso` },
      { label: 'Politique de cookies', href: `${prefix}/politica-de-cookies` },
    ],
    hotmart: 'Paiement traité en toute sécurité par Hotmart. Les prix sont en euros (EUR).',
    aviso:
      'Avertissement : toutes les activités doivent se faire sous la surveillance d’un adulte. Certains projets utilisent des ciseaux, de la colle chaude et de petites pièces, à ne pas laisser à portée des enfants de moins de 6 ans sans accompagnement.',
    meta: 'Ce site n’est pas affilié à Facebook, Instagram ou Meta Platforms, Inc.',
  },

  sticky: {
    produto: 'Kit Mega Inventeur',
    cta: 'Je veux le kit',
  },

  cookies: {
    texto: 'Nous utilisons des cookies pour améliorer votre expérience et mesurer nos publicités.',
    aceitar: 'Accepter',
    recusar: 'Refuser',
    link: 'Politique de cookies',
    href: `${prefix}/politica-de-cookies`,
  },

  a11y: {
    pular: 'Aller au contenu',
    fechar: 'Fermer',
    avisoCookies: 'Avis sur les cookies',
    linksLegais: 'Liens juridiques',
    ampliar: 'agrandir',
    idiomas: 'Langues',
  },

  legal: {
    avisoRevisao: '[À CONFIRMER AVEC UN AVOCAT]',
    atualizado: 'Dernière mise à jour : septembre 2026.',
    privacidade: {
      title: 'Politique de confidentialité',
      description: `Politique de confidentialité de ${site.marca} (${site.empresa.nome}) : données collectées, finalités, partage et droits.`,
      secoes: [
        {
          h: '1. Qui nous sommes',
          p: [
            `Cette politique s’applique au site ${site.marca}, exploité par ${site.empresa.nome}, CNPJ ${site.empresa.cnpj} (identifiant d’entreprise brésilien), adresse ${site.empresa.endereco}, ci-après « l’Entreprise ».`,
          ],
        },
        {
          h: '2. Données collectées',
          p: [
            'Nous collectons : (a) des données de navigation et des cookies, avec votre consentement, pour mesurer les publicités (Meta Pixel) ; (b) des données d’achat — nom, e-mail, CPF (identifiant fiscal brésilien) et données de paiement — collectées et traitées directement par Hotmart lors de la transaction.',
          ],
        },
        {
          h: '3. Finalités',
          p: [
            'Les données servent à livrer le produit numérique, envoyer des messages liés à l’achat, respecter les obligations légales et fiscales et, avec votre consentement, mesurer l’efficacité des publicités.',
          ],
        },
        {
          h: '4. Partage',
          p: [
            'Nous partageons des données avec Hotmart (paiement et espace membres) et Meta Platforms (mesure publicitaire, seulement après votre accord sur les cookies). Nous ne vendons pas de données personnelles.',
          ],
        },
        {
          h: '5. Vos droits (LGPD brésilienne, loi n° 13.709/2018)',
          p: [
            'Vous pouvez confirmer l’existence d’un traitement, accéder à vos données, les corriger, les anonymiser, les bloquer ou les supprimer, demander leur portabilité et retirer votre consentement à tout moment, gratuitement.',
          ],
        },
        {
          h: '6. Contact données',
          p: [
            `Pour exercer vos droits ou poser une question sur cette politique, écrivez à ${site.empresa.emailSuporte}.`,
          ],
        },
      ],
    },
    termos: {
      title: 'Conditions d’utilisation',
      description: `Conditions d’utilisation de ${site.marca} (${site.empresa.nome}) : licence, garantie, rétractation et propriété intellectuelle.`,
      secoes: [
        {
          h: '1. Le produit',
          p: [
            `${site.marca} est un produit numérique de ${site.empresa.nome} : des kits PDF de projets de robotique, sciences, recyclage et bricolage pour les 4-10 ans. Aucun envoi physique. Les activités se font toujours avec un adulte.`,
          ],
        },
        {
          h: '2. Licence',
          p: [
            'L’achat accorde une licence d’usage personnel et familial, non transférable et non exclusive. La revente, la redistribution, la publication ou l’usage commercial des PDF, en tout ou partie, est interdite.',
          ],
        },
        {
          h: '3. Accès',
          p: [
            'L’accès est envoyé par e-mail dès la confirmation du paiement, via l’espace membres Hotmart. Le paiement est unique et l’accès dure tant que la plateforme est active.',
          ],
        },
        {
          h: '4. Droit de rétractation et garantie',
          p: [
            `Selon l’article 49 du Code brésilien de la consommation, vous pouvez demander le remboursement dans les ${g} jours suivant l’achat, directement sur Hotmart, avec restitution de 100 % du montant payé.`,
          ],
        },
        {
          h: '5. Propriété intellectuelle',
          p: [
            `Tout le contenu (textes, illustrations, photos, marque et mascotte) appartient à ${site.empresa.nome} et est protégé par le droit d’auteur.`,
          ],
        },
        {
          h: '6. Contact',
          p: [`Questions sur ces conditions : ${site.empresa.emailSuporte}.`],
        },
      ],
    },
    cookies: {
      title: 'Politique de cookies',
      description: `Politique de cookies de ${site.marca} : ce que sont les cookies, lesquels nous utilisons et comment gérer votre choix.`,
      secoes: [
        {
          h: '1. Que sont les cookies',
          p: [
            'Les cookies sont de petits fichiers texte enregistrés dans votre navigateur. Ils aident le site à fonctionner et à comprendre comment il est utilisé.',
          ],
        },
        {
          h: '2. Quels cookies nous utilisons',
          p: [
            'Des cookies de préférence (ils retiennent votre choix sur la bannière) et, seulement si vous acceptez, des cookies publicitaires Meta Pixel (Meta Platforms), pour mesurer l’efficacité de nos annonces.',
          ],
        },
        {
          h: '3. Comment les gérer',
          p: [
            'Vous pouvez accepter ou refuser les cookies dans la bannière, et changer d’avis en effaçant les données du site dans votre navigateur. Si vous refusez, aucun cookie publicitaire n’est chargé.',
          ],
        },
        {
          h: '4. Contact',
          p: [`Questions sur les cookies : ${site.empresa.emailSuporte}.`],
        },
      ],
    },
  },
} satisfies Content;

export default content;
