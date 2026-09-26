import type { Obrigado } from './pt-br';

const obrigado = {
  meta: {
    title: 'Thank you for your purchase | Robótica em Casa',
    description:
      'Your access to the materials has been sent by email. See how to open the member area and start today.',
  },
  skip: 'Skip to content',
  marcaAlt: 'Robótica em Casa',
  confirmacao: 'Purchase confirmed. Welcome to Robotics at Home.',
  titulo: 'Thank you for your purchase.',
  texto: 'Access to the materials has already been sent to your email. That is how you get to the projects.',
  passosTitulo: 'What to do now',
  passos: [
    {
      titulo: 'Open the email',
      texto: 'Also check spam and promotions. The sender is Hotmart.',
    },
    {
      titulo: 'Go to the member area',
      texto: 'The PDFs are there, ready to print or follow on screen.',
    },
    {
      titulo: 'Start with an adult nearby',
      texto: 'Pick a simple project and do it together today.',
    },
  ],
  suportePre: 'Any questions? Write to',
  suportePos: 'We reply within 1 business day.',
  nota: 'Activities should be done with an adult nearby. Some projects use scissors, hot glue, and small parts.',
  idiomas: 'Languages',
} satisfies Obrigado;

export default obrigado;
