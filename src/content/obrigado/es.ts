import type { Obrigado } from './pt-br';

const obrigado = {
  meta: {
    title: 'Gracias por su compra | Robótica em Casa',
    description:
      'El acceso a los materiales ya fue enviado por correo. Vean cómo entrar al área de miembros y empezar hoy.',
  },
  skip: 'Saltar al contenido',
  marcaAlt: 'Robótica em Casa',
  confirmacao: 'Compra confirmada. Bienvenidos a Robótica en Casa.',
  titulo: 'Gracias por su compra.',
  texto: 'El acceso a los materiales ya fue enviado a su correo. Por ahí entran a los proyectos.',
  passosTitulo: 'Qué hacer ahora',
  passos: [
    {
      titulo: 'Abran el correo',
      texto: 'Miren también el spam y las promociones. El remitente es Hotmart.',
    },
    {
      titulo: 'Entren al área de miembros',
      texto: 'Los PDF están ahí, listos para imprimir o seguir en la pantalla.',
    },
    {
      titulo: 'Empiecen con un adulto cerca',
      texto: 'Elijan un proyecto simple y háganlo juntos hoy.',
    },
  ],
  suportePre: '¿Les quedó alguna duda? Escriban a',
  suportePos: 'Respondemos en un plazo de 1 día hábil.',
  nota: 'Las actividades deben hacerse con un adulto cerca. Algunos proyectos usan tijera, silicona caliente y piezas pequeñas.',
  idiomas: 'Idiomas',
} satisfies Obrigado;

export default obrigado;
