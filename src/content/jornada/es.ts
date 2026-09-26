import type { Jornada } from './pt-br';

const jornada = {
  meta: {
    title: 'La aventura del pequeño inventor | Oferta exclusiva',
    description:
      'Un mapa de aventuras para usar con el Kit Mega Inventor. El descuento solo existe en esta página, justo después de la compra.',
  },
  skip: 'Saltar al contenido',
  marcaAlt: 'Robótica em Casa',
  confirmacao: '¡Su pedido está confirmado! Los datos de acceso ya van camino a su correo.',
  pre: 'Esperen, antes de salir: ganaron un descuento que solo existe en esta página.',
  titulo: 'No dejen sus 200 proyectos olvidados en una carpeta.',
  subtitulo: (v) =>
    `Agreguen la aventura del pequeño inventor, de ${v.de} por solo ${v.por}: el mapa de aventuras que convierte cada proyecto en una misión que su hijo va a querer completar.`,
  capaAlt:
    'Un robot de cartón con mochila y gafas, caminando sobre un mapa de aventura de colores, con una medalla y un certificado al lado',
  problema: {
    titulo: 'Seamos sinceros.',
    paragrafos: [
      'Acaban de asegurar más de 200 proyectos. Hay mucha diversión esperándolos.',
      'Esto es lo que pasa en muchas casas: los primeros proyectos son un éxito… después llega una semana corrida, nadie decide qué hacer y los PDF se quedan quietos en una carpeta.',
      'No porque los proyectos no sean buenos.',
      'Sino porque el niño necesita un motivo para volver, y ustedes no tienen tiempo de inventar ese motivo todos los días.',
    ],
  },
  solucao: {
    titulo: 'La aventura del pequeño inventor le da ese motivo a su hijo.',
    intro:
      'Es un mapa de aventuras para imprimir que reúne todos los proyectos del Kit Mega Inventor en una gran travesía por cuatro territorios.',
    territorios: [
      { icone: 'robot', titulo: 'Tierra de los Robots' },
      { icone: 'recycle', titulo: 'Isla del Reciclaje' },
      { icone: 'flask', titulo: 'Valle de la Ciencia' },
      { icone: 'scissors', titulo: 'Pueblo de las Manualidades' },
    ],
    fecho:
      'Cada proyecto terminado se vuelve una parada nueva en el mapa. Cada territorio, una medalla. Cada nivel, un certificado. Y ya no tienen que decidir qué hacer: una carta de misión sorpresa decide por ustedes.',
  },
  dentro: {
    titulo: 'Qué incluye',
    itens: [
      {
        titulo: 'El mapa de la aventura',
        texto: 'un póster de colores para la pared, donde su hijo marca cada proyecto terminado',
      },
      {
        titulo: 'Medallas por categoría',
        texto: 'una por cada territorio completado',
      },
      {
        titulo: 'Certificados de nivel',
        texto: 'de Inventor Nivel 1 a Nivel 3, listos para la heladera',
      },
      {
        titulo: 'Mural de logros',
        texto: 'un espacio para mostrar las creaciones con orgullo',
      },
      {
        titulo: 'Cartas de misión sorpresa',
        texto: 'saquen una y el proyecto del día ya está elegido, sin discusión',
      },
    ],
  },
  como: {
    titulo: 'Cómo funciona',
    passos: [
      'Impriman el mapa y cuélguenlo donde su hijo lo vea.',
      'Saquen una carta de misión para elegir el proyecto del día.',
      'Ármenlo juntos, marquen la parada en el mapa y ganen la medalla.',
    ],
  },
  momento: {
    titulo: '¡Mira lo que hice!',
    texto:
      'Imaginen la escena: su hijo corre hasta la pared para pintar una parada nueva, se da vuelta y les dice: «¡Mira lo que hice!» Para eso existe la aventura.',
  },
  porque: {
    titulo: 'Por qué solo ahora',
    texto: (v) =>
      `Este descuento solo existe aquí, justo después de su compra. Fuera de esta página, la aventura del pequeño inventor cuesta ${v.de}. Si salen ahora, no van a volver a ver este precio.`,
  },
  oferta: {
    nome: 'La aventura del pequeño inventor',
    deRotulo: 'De',
    por: (v) => `Por solo ${v.por}`,
    economia: (v) => `Ahorran ${v.valor} (${v.percentual} de descuento)`,
    pagamento: 'Pago único · Acceso inmediato y de por vida · PDF para imprimir',
    clique: 'Se agrega a su pedido con un clic, con la misma forma de pago.',
    exclusivo: 'Descuento exclusivo para quien acaba de comprar el Kit Mega Inventor.',
    cta: (v) => `Sí, quiero la aventura por solo ${v.por}`,
    recusa: 'No, gracias, sigo sin la aventura',
  },
  garantia: (v) =>
    `Garantía de ${v.dias} días. Si no les hace sentido para su familia, escríbannos dentro de ${v.dias} días y devolvemos el 100 %.`,
  faq: {
    titulo: 'Preguntas rápidas',
    itens: [
      {
        q: '¿Incluye proyectos nuevos?',
        a: () =>
          'No. La aventura es un kit de progreso y motivación para usar junto con los proyectos del Kit Mega Inventor que acaban de comprar.',
      },
      {
        q: '¿Cómo la recibo?',
        a: () =>
          'Se agrega a la misma área de miembros de su Kit Mega Inventor, con acceso inmediato.',
      },
      {
        q: '¿Por qué el precio está tan bajo?',
        a: (v) =>
          `Porque este es un descuento exclusivo para quien acaba de comprar el Kit Mega Inventor. Fuera de esta página, la aventura cuesta ${v.de}.`,
      },
      {
        q: '¿Para qué edad es?',
        a: () => 'Para niños de 4 a 10 años.',
      },
    ],
  },
  nota: 'Hace falta un adulto cerca para recortar los materiales.',
  idiomas: 'Idiomas',
} satisfies Jornada;

export default jornada;
