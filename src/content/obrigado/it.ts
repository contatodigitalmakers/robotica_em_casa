import type { Obrigado } from './pt-br';

const obrigado = {
  meta: {
    title: 'Grazie per l’acquisto | Robótica em Casa',
    description:
      'L’accesso ai materiali è già stato inviato per email. Vedete come entrare nell’area membri e iniziare oggi.',
  },
  skip: 'Vai al contenuto',
  marcaAlt: 'Robótica em Casa',
  confirmacao: 'Acquisto confermato. Benvenuti in Robotica a casa.',
  titulo: 'Grazie per l’acquisto.',
  texto: 'L’accesso ai materiali è già stato inviato alla vostra email. È da lì che si arriva ai progetti.',
  passosTitulo: 'Cosa fare adesso',
  passos: [
    {
      titulo: 'Aprite l’email',
      texto: 'Controllate anche lo spam e le promozioni. Il mittente è Hotmart.',
    },
    {
      titulo: 'Entrate nell’area membri',
      texto: 'I PDF sono lì, pronti da stampare o da seguire sullo schermo.',
    },
    {
      titulo: 'Iniziate con un adulto accanto',
      texto: 'Scegliete un progetto semplice e fatelo insieme oggi.',
    },
  ],
  suportePre: 'Qualche dubbio? Scrivete a',
  suportePos: 'Rispondiamo entro 1 giorno lavorativo.',
  nota: 'Le attività si fanno con un adulto accanto. Alcuni progetti usano forbici, colla a caldo e pezzi piccoli.',
  idiomas: 'Lingue',
} satisfies Obrigado;

export default obrigado;
