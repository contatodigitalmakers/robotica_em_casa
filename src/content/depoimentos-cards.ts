/** Relatos das mães fora do português. A base são os quatro prints reais. */

export type CardDepoimento = {
  nome: string;
  texto: string;
  fotoAlt: string;
};

export const cardsPorIdioma = {
  en: [
    {
      nome: 'Laura',
      texto:
        'I just wanted to say thank you. The materials are wonderful and so carefully put together. We already tried one activity at home and it was a hit. My son got excited and followed every step.',
      fotoAlt: 'Portrait of Laura, a mother with wavy brown hair and a warm smile',
    },
    {
      nome: 'Juliana',
      texto:
        'My son was enchanted by the projects and asked to start the next one right away. It was lovely to see him focused, making something, and proud of what he built.',
      fotoAlt: 'Portrait of Juliana, a mother with straight black hair and a gentle smile',
    },
    {
      nome: 'Mariana Alves',
      texto:
        'My daughter loved the projects. She was so excited to build the rocket, and then she invented other versions on her own. It was wonderful to see her away from the screen, focused and proud of what she made. The Mega Inventor Kit was worth it.',
      fotoAlt: 'Portrait of Mariana Alves, a mother with long dark hair and a bright smile',
    },
    {
      nome: 'Sophie',
      texto:
        'Thank you. I already looked through the materials and loved them. The projects are really fun and easy to follow. My son was thrilled.',
      fotoAlt: 'Portrait of Sophie, a mother with auburn hair and freckles',
    },
  ],
  es: [
    {
      nome: 'Camila',
      texto:
        'Solo quería agradecer. El material está precioso y muy bien cuidado. Ya probamos una actividad en casa y fue un éxito. Mi hijo se entusiasmó y pudo seguir cada paso.',
      fotoAlt: 'Retrato de Camila, una madre de cabello castaño ondulado y sonrisa cálida',
    },
    {
      nome: 'Juliana',
      texto:
        'Mi hijo quedó encantado con los proyectos y pidió hacer el siguiente enseguida. Fue muy lindo verlo concentrado, creando y orgulloso de lo que armó.',
      fotoAlt: 'Retrato de Juliana, una madre de cabello negro lacio y sonrisa suave',
    },
    {
      nome: 'Mariana Alves',
      texto:
        'A mi hija le encantaron los proyectos. Se emocionó al armar el cohete y después inventó otras versiones sola. Fue muy bueno verla lejos de la pantalla, concentrada y orgullosa de lo que hizo. Valió la pena el Kit Mega Inventor.',
      fotoAlt: 'Retrato de Mariana Alves, una madre de cabello largo y oscuro y sonrisa amplia',
    },
    {
      nome: 'Lucía',
      texto:
        'Muchas gracias. Ya vi los materiales y me encantaron. Los proyectos son muy divertidos y fáciles de entender. Mi hijo quedó emocionadísimo.',
      fotoAlt: 'Retrato de Lucía, una madre de cabello cobrizo y pecas',
    },
  ],
  fr: [
    {
      nome: 'Claire',
      texto:
        'Je voulais simplement vous remercier. Le matériel est magnifique et très soigné. Nous avons déjà essayé une activité à la maison et ce fut un succès. Mon fils était enthousiaste et a suivi chaque étape.',
      fotoAlt: 'Portrait de Claire, une mère aux cheveux châtains ondulés et au sourire chaleureux',
    },
    {
      nome: 'Juliana',
      texto:
        'Mon fils a été enchanté par les projets et a demandé à faire le suivant tout de suite. C’était très beau de le voir concentré, en train de créer, et fier de ce qu’il avait construit.',
      fotoAlt: 'Portrait de Juliana, une mère aux cheveux noirs lisses et au sourire doux',
    },
    {
      nome: 'Mariana Alves',
      texto:
        'Ma fille a adoré les projets. Elle était impatiente de construire la fusée, puis elle a inventé d’autres versions toute seule. C’était très beau de la voir loin de l’écran, concentrée et fière. Le Kit Mega Inventeur en valait la peine.',
      fotoAlt: 'Portrait de Mariana Alves, une mère aux longs cheveux foncés et au grand sourire',
    },
    {
      nome: 'Émilie',
      texto:
        'Merci beaucoup. J’ai déjà regardé les matériaux et je les ai adorés. Les projets sont vraiment chouettes et faciles à comprendre. Mon fils était ravi.',
      fotoAlt: 'Portrait d’Émilie, une mère aux cheveux roux et aux taches de rousseur',
    },
  ],
  it: [
    {
      nome: 'Chiara',
      texto:
        'Volevo solo ringraziare. Il materiale è meraviglioso e fatto con tanta cura. Abbiamo già provato un’attività a casa ed è stato un successo. Mio figlio si è entusiasmato e ha seguito ogni passaggio.',
      fotoAlt: 'Ritratto di Chiara, una mamma con capelli castani mossi e un sorriso caldo',
    },
    {
      nome: 'Juliana',
      texto:
        'Mio figlio è rimasto incantato dai progetti e ha chiesto di fare il prossimo subito. È stato bello vederlo concentrato, a creare, orgoglioso di ciò che ha costruito.',
      fotoAlt: 'Ritratto di Juliana, una mamma con capelli neri lisci e un sorriso dolce',
    },
    {
      nome: 'Mariana Alves',
      texto:
        'A mia figlia sono piaciuti tantissimo i progetti. Era entusiasta di costruire il razzo e poi ha inventato altre versioni da sola. È stato bello vederla lontana dallo schermo, concentrata e orgogliosa. Il Kit Mega Inventore ne è valso la pena.',
      fotoAlt: 'Ritratto di Mariana Alves, una mamma con capelli lunghi e scuri e un sorriso aperto',
    },
    {
      nome: 'Giulia',
      texto:
        'Grazie mille. Ho già visto i materiali e mi sono piaciuti molto. I progetti sono belli e facili da capire. Mio figlio era felicissimo.',
      fotoAlt: 'Ritratto di Giulia, una mamma con capelli ramati e lentiggini',
    },
  ],
} as const satisfies Record<string, readonly CardDepoimento[]>;

export type IdiomaCard = keyof typeof cardsPorIdioma;
