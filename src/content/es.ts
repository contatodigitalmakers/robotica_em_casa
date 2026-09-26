/**
 * Español neutro de América Latina (ustedes).
 * Los nombres de marca y de kits siguen en portugués (están en las portadas).
 * Los precios están en euros.
 */
import type { Content } from './pt-br';
import { site } from '../config/site';

const g = site.garantiaDias;
const prefix = '/es';

const content = {
  meta: {
    title: 'Robótica em Casa | Más de 200 proyectos de robótica y ciencia para niños de 4 a 10 años',
    description:
      'Kits digitales con más de 200 proyectos de robótica, ciencia, reciclaje y manualidades para niños de 4 a 10 años, con materiales simples de casa. Acceso inmediato.',
  },

  header: {
    logoAlt: 'Robótica em Casa — ir al inicio',
    cta: 'Quiero el kit →',
  },

  hero: {
    pillEmoji: '✨',
    pill: 'Más de 200 proyectos para niños de 4 a 10 años',
    tituloPre: 'Conviertan el tiempo de pantalla en ',
    tituloDestaque: 'tiempo de crear',
    tituloPos: '.',
    subtitulo:
      'Proyectos de robótica, ciencia, reciclaje y manualidades para niños de 4 a 10 años, con materiales simples que ya tienen en casa.',
    cta: 'Quiero ver lo que mi hijo puede crear →',
    microcopy: `Pago único · Acceso inmediato · Garantía de ${g} días`,
    mascoteAlt: 'Mascota de Robótica em Casa: un robot hecho con una caja de cartón',
    destaques: [
      { titulo: 'Más de 200 proyectos', texto: 'para que su hijo tenga mucho con qué crear' },
      { titulo: 'Materiales simples', texto: 'cartón, botellas, palitos y cosas de la casa' },
      { titulo: 'Más creación', texto: 'inventa, prueba y arma con sus propias manos' },
    ],
  },

  alternativa: {
    pillEmoji: '🔥',
    pill: '¿Cansados de la pantalla? ¿Y si crean algo?',
    tituloPre: '¿Y si hubiera algo ',
    tituloDestaque: 'más divertido',
    tituloPos: ' que la pantalla?',
    texto:
      'Cuando el niño encuentra algo interesante para armar, probar y descubrir, se engancha, aprende haciendo y se siente orgulloso de lo que creó.',
    fotoAlt: 'Robot casero con tapa de botella, ojos móviles, cartón y rueditas, sobre la mesa de la cocina',
    beneficios: [
      {
        titulo: 'Más atención, menos peleas',
        texto: 'Actividades que sostienen la atención y ayudan al niño a concentrarse jugando.',
        alt: 'Niño sonriendo junto a un robot dibujante hecho con marcadores',
      },
      {
        titulo: 'Aprender haciendo',
        texto: 'El niño aprende construyendo, probando ideas y viendo cómo el proyecto cobra vida.',
        alt: 'Niña armando un carrito de madera con motor y cables',
      },
      {
        titulo: 'Espacio para inventar',
        texto: 'Papel, pegamento e imaginación se vuelven descubrimientos que va a querer mostrar.',
        alt: 'Niño mostrando el futbolín de palitos de helado que construyó',
      },
      {
        titulo: 'Autonomía y orgullo',
        texto: 'El mejor momento es cuando mira el resultado y dice: «¡Mira lo que hice!»',
        alt: 'Niño pegando los ojos de un bote de basura cocodrilo de cartón',
      },
    ],
    ctaBox: {
      tituloPre: 'La alternativa que su hijo necesita ',
      tituloDestaque: 'está aquí',
      tituloPos: '.',
      texto:
        'Proyectos creativos para convertir el tiempo libre en creación, descubrimiento y aprendizaje. Para niños de 4 a 10 años.',
      perguntaPre: '¿Quieren acceso a ',
      perguntaDestaque: 'todos',
      perguntaPos: ' los proyectos?',
      cta: 'Quiero los proyectos →',
    },
  },

  porDentro: {
    pillEmoji: '📘',
    pill: 'Dentro del kit',
    titulo: 'Vean los materiales y el paso a paso dentro del kit',
    texto:
      'Cada proyecto llega en páginas como estas: lista de materiales, paso a paso con fotos y nivel de dificultad. Listo para imprimir y fácil de seguir.',
    paginas: [
      { legenda: 'Proyecto — Barco solar', alt: 'Página del proyecto del barco solar, con paneles solares y hélice' },
      { legenda: 'Paso a paso — Tablero', alt: 'Página del paso a paso del tablero de juego, con silicona caliente y papel de color' },
      { legenda: 'Paso a paso — Mano mecánica', alt: 'Página del paso a paso de la mano mecánica hecha con popotes' },
      { legenda: 'Proyecto — Luces de cordón', alt: 'Página del proyecto de luces con tubos de cartón y LED' },
      { legenda: 'Proyecto — Linterna de papel', alt: 'Página del proyecto de linterna de papel, con palitos de helado y servilletas' },
      { legenda: 'Materiales — Carrito nitro', alt: 'Lista de materiales del carrito nitro: palitos, pilas, popotes, tapas y ligas' },
      { legenda: 'Reciclable — Bote cocodrilo', alt: 'Página final del bote cocodrilo, con los últimos pasos y la decoración' },
      { legenda: 'Experimento — Cielo en un frasco', alt: 'Página del experimento del cielo y el atardecer, con leche, agua y linterna' },
      { legenda: 'Proyecto — Montaña rusa de popotes', alt: 'Página del proyecto de montaña rusa de popotes, con materiales y pasos' },
      { legenda: 'Experimento — Cohete efervescente', alt: 'Página del experimento del cohete efervescente, con un tubo y agua' },
    ],
    dicaArraste: 'deslicen hacia el lado →',
    anterior: 'Página anterior',
    proxima: 'Página siguiente',
    fechar: 'Cerrar imagen ampliada',
    cta: 'Quiero los proyectos ahora →',
  },

  historia: {
    pillEmoji: '💡',
    pill: 'Por qué creamos el club',
    tituloPre: 'Creado para mostrarles a los niños que ',
    tituloDestaque: 'crear puede ser mucho más interesante',
    tituloPos: ' que quedarse en la pantalla.',
    intro: `${site.nomeClube} no nació de un estudio de mercado. Nació de un momento real: un niño en la pantalla, una madre agotada y la pregunta que no se le iba: «¿y ahora, qué le ofrezco en lugar de eso?»`,
    cards: [
      {
        titulo: 'El problema que nadie resolvía',
        texto: 'Sacar el celular de la mano sin pelea. Ofrecer algo que el niño elija de verdad, no por obligación.',
      },
      {
        titulo: 'El giro',
        texto: 'Cuando el niño tiene en las manos algo que despierta curiosidad de verdad, la pantalla deja de ser la única opción.',
      },
      {
        titulo: 'Contenido que funciona en casa',
        texto: 'Cada kit está pensado para lo que a los niños de 4 a 10 años les gusta hacer de verdad. No es teoría: es práctica probada en casa.',
      },
      {
        titulo: 'Para quien quiere una tarde distinta',
        texto: 'Sin culpa y sin juicio. Soluciones reales para días reales, listas para imprimir y usar hoy.',
      },
    ],
    citacao: {
      textoPre: 'No queremos acabar con las pantallas. Queremos devolverles a las familias ',
      destaque: 'el silencio bueno',
      textoPos: ': el del niño tan concentrado creando que se olvida del celular.',
      assinatura: `Fundadores del ${site.nomeClube}`,
      cargo: 'Padres, educadores y gente que cree en una infancia creativa',
      mascoteAlt: '',
    },
    stats: [
      { valor: '+15 mil', rotulo: 'familias atendidas' },
      { valor: '5', rotulo: 'áreas de desarrollo' },
      { valor: '4–10', rotulo: 'años de edad' },
      { valor: 'Acceso', rotulo: 'Área de miembros digital: impriman los proyectos y úsenlos hoy' },
    ],
    missao: {
      pre: 'Nuestra misión es simple: ',
      destaque: 'convertir el tiempo libre del niño en tiempo de crear.',
      pos: ' Robótica, ciencia, arte y lógica: cada kit abre un mundo de posibilidades con las propias manos.',
    },
    cta: 'Quiero empezar hoy →',
  },

  divisor: {
    frase: 'Donde la infancia se vuelve invención.',
  },

  exemplos: {
    pillEmoji: '🧩',
    pill: 'Algunos ejemplos',
    titulo: 'Todo para que su hijo empiece a crear, descubrir y sentirse orgulloso',
    texto:
      'Cada proyecto tiene un paso a paso visual y completo. Sin buscar, sin dudas. El niño ve la imagen, entiende qué hacer y empieza a crear.',
    alts: [
      'Cohete de cartón con punta de tapa azul, ojos móviles y rueditas',
      'Camión de cartón azul con motor y ruedas de tapa verde',
      'Niña echando colorante en frascos de un experimento de colores',
      'Helicóptero hecho con botella, palitos de helado y tapas',
      'Barco solar en una bandeja verde, con paneles solares y hélice',
      'Niño armando un robot que camina, de palitos de helado',
      'Niño sonriendo junto a un robot dibujante hecho con marcadores',
      'Niña armando un carrito de madera con motor y cables',
      'Niño pegando los ojos de un bote cocodrilo de cartón',
    ],
    legenda: 'Estos son solo algunos de los más de 200 proyectos que su hijo puede crear.',
    anterior: 'Foto anterior',
    proxima: 'Foto siguiente',
  },

  depoimentos: {
    pillEmoji: '❤️',
    pill: 'Relatos reales de madres que ya tienen el kit',
    titulo: 'Lo que cuentan las madres',
    texto: 'Relatos de madres que ya usan el kit con sus hijos.',
    alts: [
      'Conversación de WhatsApp en la que una clienta agradece el material y cuenta que su hijo siguió la actividad',
      'Conversación de WhatsApp de Juliana, con su hijo concentrado armando un proyecto en la sala',
      'Conversación de WhatsApp de Mariana Alves sobre su hija, que armó el cohete y el Kit Mega Inventor',
      'Conversación de WhatsApp en la que una clienta agradece y dice que su hijo se entusiasmó con los proyectos',
    ],
    anterior: 'Relato anterior',
    proxima: 'Relato siguiente',
  },

  ofertas: {
    pillEmoji: '🎁',
    pill: 'Ofertas de lanzamiento',
    tituloPre: 'Elijan el ',
    tituloDestaque: 'kit ideal',
    tituloPos: ' para su hijo',
    texto: 'Empiecen solo con robótica o llévense los 4 kits y más de 200 proyectos. Pago único y acceso inmediato.',
    de: 'De',
    por: 'por',
    valorSeparado: 'Precio si se compran por separado:',
    pagamentoInfo: 'Pago único · Sin mensualidad · Acceso inmediato y de por vida',
    garantiaLinha: `Garantía de ${g} días: si no les convence, devolvemos el 100 %.`,
    mirim: {
      titulo: 'Kit de robótica infantil',
      subtitulo: '20 proyectos de robots y máquinas que su hijo construye con lo que ya tienen en casa.',
      mockupAlt: 'Robótica em Casa. Kit de robótica infantil. 20 proyectos',
      itens: [
        { pre: 'Kit de robótica infantil: ', destaque: '20 proyectos', pos: '' },
        { pre: 'Paso a paso ', destaque: '100 % visual', pos: ', que el niño puede seguir' },
        { pre: 'Acceso exclusivo al ', destaque: 'área de miembros', pos: '' },
      ],
      cta: 'Empezar con robótica →',
    },
    mega: {
      selo: '⭐ Más completo',
      titulo: 'Kit Mega Inventor',
      subtitulo: 'Más de 200 proyectos en 4 kits, y mucho más tiempo de creación y juego para su hijo.',
      mockupAlt: 'Robótica infantil, Reciclables, Experimentos científicos, Manualidades. Bono: Operación Pequeño Agente',
      itens: [
        { icone: 'robot', pre: 'Robótica infantil: ', destaque: 'robots y máquinas que se mueven', pos: '' },
        { icone: 'recycle', pre: 'Reciclables: ', destaque: 'la «basura» de la casa se vuelve juguete', pos: '' },
        { icone: 'flask', pre: 'Experimentos científicos: ', destaque: 'ciencia con lo que hay en la cocina', pos: '' },
        { icone: 'scissors', pre: 'Manualidades: ', destaque: 'motricidad fina y cuidado', pos: '' },
        { icone: 'search', pre: 'Bono: Operación Pequeño Agente', destaque: ', misiones secretas', pos: ' para cumplir por la casa' },
        { icone: 'check', pre: 'Acceso exclusivo al ', destaque: 'área de miembros', pos: '' },
      ],
      cta: 'Quiero los más de 200 proyectos ahora →',
    },
    upsell: {
      pill: '¡Esperen! Oferta exclusiva',
      fechar: 'Cerrar',
      titulo: 'Llévense el Kit Mega Inventor con un descuento mayor',
      texto:
        'Son 4 ebooks completos — Robótica infantil, Reciclables, Experimentos científicos y Manualidades. Solo en esta página:',
      mockupAlt:
        'Robótica infantil, Reciclables, Experimentos científicos, Manualidades. Bono: Operación Pequeño Agente',
      aceitar: 'Acepto esta oferta',
      recusar: 'Continuar con el Kit de robótica infantil',
    },
    confianca: [
      '🔒 Compra segura · El pago lo procesa Hotmart · Pix (pago instantáneo de Brasil), tarjeta o boleto (comprobante bancario brasileño). Los precios están en euros.',
      'El acceso llega por correo en cuanto se confirma el pago.',
      '⚠️ Producto digital (PDF para imprimir). No se envía nada físico.',
      'Las actividades deben hacerse siempre con un adulto cerca.',
    ],
  },

  garantia: {
    pillEmoji: '✅',
    pill: 'Sin ningún riesgo para ustedes',
    titulo: `Garantía incondicional de ${g} días`,
    texto: `Si en un plazo de ${g} días el kit no les convence, por el motivo que sea, devolvemos el 100 %. Lo piden directo en Hotmart, sin preguntas ni trámites. También es su derecho de arrepentimiento, previsto por el Código de Defensa del Consumidor de Brasil.`,
    escudoAlt: '',
  },

  lancamento: {
    titulo: '⏳ Oferta de lanzamiento — por tiempo limitado',
    texto: (v) =>
      `Los precios especiales desde ${v.preco} solo son válidos durante el período de lanzamiento. Después de esa fecha, los kits vuelven al precio original. No lo dejen para después.`,
    unidades: ['horas', 'min', 'seg'],
    cta: 'Aprovechar el precio de lanzamiento →',
    encerrado: 'El período de lanzamiento terminó.',
  },

  faq: {
    pillEmoji: '❓',
    pill: 'Preguntas frecuentes',
    titulo: '¿Les quedó alguna duda?',
    itens: [
      {
        q: '¿Cómo recibo el kit?',
        a: 'En cuanto se confirma el pago, reciben por correo el acceso al área de miembros de Hotmart, donde están todos los PDF. Con Pix y tarjeta la liberación es inmediata; con boleto, un comprobante bancario de Brasil, puede tardar hasta 3 días hábiles.',
      },
      {
        q: '¿El kit es físico o digital?',
        a: 'Es 100 % digital: PDF para imprimir o seguir en el celular, la tablet o la computadora. No se envía nada por correo.',
      },
      {
        q: '¿Necesito impresora?',
        a: 'No es obligatorio. Pueden seguir el paso a paso en la pantalla. Imprimir solo lo hace más práctico para el niño.',
      },
      {
        q: '¿Para qué edad es?',
        a: 'Para niños de 4 a 10 años. Cada proyecto indica la dificultad, para que elijan lo que le va a su hijo.',
      },
      {
        q: '¿Voy a tener que comprar materiales?',
        a: 'Los proyectos usan cosas que casi toda casa tiene: cartón, botellas, palitos de helado, vasos, popotes, cinta y pegamento. Cada proyecto trae la lista de lo que hace falta.',
      },
      {
        q: '¿Mi hijo puede hacerlo solo?',
        a: 'Los proyectos están pensados para que el niño participe de verdad, siempre con un adulto cerca, sobre todo en los pasos con tijera, silicona caliente, experimentos y piezas pequeñas (más cuidado con menores de 6 años).',
      },
      {
        q: '¿Por cuánto tiempo tengo acceso?',
        a: 'Para siempre. El pago es único, sin mensualidad, y el acceso es de por vida.',
      },
      {
        q: '¿Puedo usarlo con más de un hijo?',
        a: 'Sí. El kit es para su familia, con todos los niños que quieran.',
      },
      {
        q: '¿Y si no me gusta?',
        a: `Tienen ${g} días de garantía. Si no quedan conformes, piden el reembolso en Hotmart y reciben el 100 % de vuelta.`,
      },
      {
        q: '¿Cómo hablo con soporte?',
        a: `Por correo a ${site.empresa.emailSuporte}. Respondemos en un plazo de 1 día hábil.`,
      },
    ],
  },

  ctaFinal: {
    tituloPre: 'Su hijo merece descubrir ',
    tituloDestaque: 'lo que es capaz de crear',
    tituloPos: '',
    texto: 'Denle la chance de construir, inventar, experimentar y sentirse orgulloso de lo que hizo con sus manos. Empiecen hoy: el acceso es inmediato.',
    cta: 'Quiero crear con mi hijo ahora →',
    microcopy: `🔒 Compra segura · Garantía de ${g} días · Acceso inmediato`,
    mascoteAlt: '',
  },

  footer: {
    logoAlt: 'Robótica em Casa',
    copyright: `© 2026 ${site.marca} · ${site.empresa.nome} · ${site.empresa.endereco}`,
    suporte: `Soporte: ${site.empresa.emailSuporte}`,
    links: [
      { label: 'Política de privacidad', href: `${prefix}/politica-de-privacidade` },
      { label: 'Términos de uso', href: `${prefix}/termos-de-uso` },
      { label: 'Política de cookies', href: `${prefix}/politica-de-cookies` },
    ],
    hotmart: 'El pago lo procesa Hotmart de forma segura. Los precios están en euros (EUR).',
    aviso:
      'Aviso de seguridad: todas las actividades deben hacerse con un adulto cerca. Algunos proyectos usan tijera, silicona caliente y piezas pequeñas, que no deben quedar al alcance de niños menores de 6 años sin compañía.',
    meta: 'Este sitio no está afiliado a Facebook, Instagram ni a Meta Platforms, Inc.',
  },

  sticky: {
    produto: 'Kit Mega Inventor',
    cta: 'Quiero el kit',
  },

  cookies: {
    texto: 'Usamos cookies para mejorar su experiencia y medir nuestros anuncios.',
    aceitar: 'Aceptar',
    recusar: 'Rechazar',
    link: 'Política de cookies',
    href: `${prefix}/politica-de-cookies`,
  },

  a11y: {
    pular: 'Saltar al contenido',
    fechar: 'Cerrar',
    avisoCookies: 'Aviso de cookies',
    linksLegais: 'Enlaces legales',
    ampliar: 'ampliar',
    idiomas: 'Idiomas',
  },

  legal: {
    avisoRevisao: '[CONFIRMAR CON UN ABOGADO]',
    atualizado: 'Última actualización: septiembre de 2026.',
    privacidade: {
      title: 'Política de privacidad',
      description: `Política de privacidad de ${site.marca} (${site.empresa.nome}): datos que recopilamos, para qué, con quién los compartimos y sus derechos.`,
      secoes: [
        {
          h: '1. Quiénes somos',
          p: [
            `Esta política se aplica al sitio ${site.marca}, operado por ${site.empresa.nome}, CNPJ ${site.empresa.cnpj} (identificación de empresa en Brasil), domicilio ${site.empresa.endereco}, en adelante la «Empresa».`,
          ],
        },
        {
          h: '2. Datos que recopilamos',
          p: [
            'Recopilamos: (a) datos de navegación y cookies, con su consentimiento, para medir anuncios (Meta Pixel); (b) datos de compra — nombre, correo, CPF (identificación fiscal de Brasil) y datos de pago — recopilados y tratados directamente por Hotmart en la transacción.',
          ],
        },
        {
          h: '3. Para qué los usamos',
          p: [
            'Los datos sirven para entregar el producto digital, enviar mensajes sobre la compra, cumplir obligaciones legales y fiscales y, con su consentimiento, medir el rendimiento de los anuncios.',
          ],
        },
        {
          h: '4. Con quién los compartimos',
          p: [
            'Compartimos datos con Hotmart (pago y área de miembros) y Meta Platforms (medición de anuncios, solo si aceptan las cookies). No vendemos datos personales.',
          ],
        },
        {
          h: '5. Sus derechos (LGPD de Brasil, Ley 13.709/2018)',
          p: [
            'Pueden confirmar que tratamos sus datos, acceder a ellos, corregirlos, anonimizarlos, bloquearlos o eliminarlos, pedir la portabilidad y retirar el consentimiento en cualquier momento, sin costo.',
          ],
        },
        {
          h: '6. Contacto de datos',
          p: [
            `Para ejercer sus derechos o consultar esta política, escriban a ${site.empresa.emailSuporte}.`,
          ],
        },
      ],
    },
    termos: {
      title: 'Términos de uso',
      description: `Términos de uso de ${site.marca} (${site.empresa.nome}): licencia, garantía, derecho de arrepentimiento y propiedad intelectual.`,
      secoes: [
        {
          h: '1. El producto',
          p: [
            `${site.marca} es un producto digital de ${site.empresa.nome}: kits en PDF con proyectos de robótica, ciencia, reciclaje y manualidades para niños de 4 a 10 años. No se envía nada físico. Las actividades se hacen siempre con un adulto cerca.`,
          ],
        },
        {
          h: '2. Licencia',
          p: [
            'La compra otorga una licencia de uso personal y familiar, intransferible y no exclusiva. Está prohibida la reventa, redistribución, publicación o uso comercial de los PDF, total o parcial.',
          ],
        },
        {
          h: '3. Acceso',
          p: [
            'El acceso se envía por correo en cuanto se confirma el pago, por el área de miembros de Hotmart. El pago es único y el acceso dura mientras la plataforma esté activa.',
          ],
        },
        {
          h: '4. Derecho de arrepentimiento y garantía',
          p: [
            `Según el artículo 49 del Código de Defensa del Consumidor de Brasil, pueden pedir el reembolso dentro de los ${g} días posteriores a la compra, directo en Hotmart, con devolución del 100 % de lo pagado.`,
          ],
        },
        {
          h: '5. Propiedad intelectual',
          p: [
            `Todo el contenido (textos, ilustraciones, fotos, marca y mascota) pertenece a ${site.empresa.nome} y está protegido por la ley de derechos de autor.`,
          ],
        },
        {
          h: '6. Contacto',
          p: [`Dudas sobre estos términos: ${site.empresa.emailSuporte}.`],
        },
      ],
    },
    cookies: {
      title: 'Política de cookies',
      description: `Política de cookies de ${site.marca}: qué son, cuáles usamos y cómo gestionar su elección.`,
      secoes: [
        {
          h: '1. Qué son las cookies',
          p: [
            'Las cookies son pequeños archivos de texto que se guardan en su navegador. Ayudan a que el sitio funcione y a entender cómo se usa.',
          ],
        },
        {
          h: '2. Qué cookies usamos',
          p: [
            'Cookies de preferencia (recuerdan su elección en el aviso) y, solo si aceptan, cookies de medición publicitaria de Meta Pixel (Meta Platforms), para medir el rendimiento de nuestros anuncios.',
          ],
        },
        {
          h: '3. Cómo gestionarlas',
          p: [
            'Pueden aceptar o rechazar las cookies en el aviso, y cambiar de idea borrando los datos de este sitio en el navegador. Si rechazan, no se carga ninguna cookie de publicidad.',
          ],
        },
        {
          h: '4. Contacto',
          p: [`Dudas sobre cookies: ${site.empresa.emailSuporte}.`],
        },
      ],
    },
  },
} satisfies Content;

export default content;
