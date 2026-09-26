import type { JornadaDown } from './pt-br';

const jornadaDown = {
  meta: {
    title: 'La aventura del pequeño inventor | Última oportunidad',
    description:
      'La misma aventura del pequeño inventor, ahora con un año de acceso. El descuento solo existe en esta página.',
  },
  skip: 'Saltar al contenido',
  marcaAlt: 'Robótica em Casa',
  confirmacao: '¡Su pedido está confirmado! Los datos de acceso ya van camino a su correo.',
  pre: 'Está bien haber dejado pasar la oferta anterior. Sin presión.',
  titulo: 'Última oportunidad de llevarse la aventura, de la forma más ligera.',
  subtitulo: (v) =>
    `La misma aventura del pequeño inventor, ahora por solo ${v.por}, con un año de acceso. Solo en esta página.`,
  capaAlt:
    'Un robot de cartón con mochila y gafas, caminando sobre un mapa de aventura de colores, con una medalla y un certificado al lado',
  dentro: {
    titulo: 'Qué incluye',
    itens: [
      'El mapa de la aventura, un póster de colores para la pared',
      'Medallas por categoría, una por cada territorio',
      'Certificados de Inventor Nivel 1 a Nivel 3',
      'Mural de logros para mostrar las creaciones',
      'Cartas de misión sorpresa para elegir el proyecto del día',
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
  oferta: {
    nome: 'La aventura del pequeño inventor',
    deRotulo: 'De',
    por: (v) => `Por solo ${v.por}`,
    economia: (v) => `Ahorran ${v.valor} (${v.percentual} de descuento)`,
    pagamento: 'Pago único · PDF para imprimir',
    acesso: 'Un año de acceso en la misma área de miembros',
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
        q: '¿Por cuánto tiempo tengo acceso?',
        a: () =>
          'Por un año. El acceso no es de por vida en esta oferta, pero pueden imprimir y guardar los PDF.',
      },
    ],
  },
  nota: 'Hace falta un adulto cerca para recortar los materiales.',
  idiomas: 'Idiomas',
} satisfies JornadaDown;

export default jornadaDown;
