import type { JornadaDown } from './pt-br';

const jornadaDown = {
  meta: {
    title: 'Il viaggio del piccolo inventore | Ultima occasione',
    description:
      'Lo stesso viaggio del piccolo inventore, ora con un anno di accesso. Lo sconto esiste solo su questa pagina.',
  },
  skip: 'Vai al contenuto',
  marcaAlt: 'Robótica em Casa',
  confirmacao: 'Il vostro ordine è confermato! I dati di accesso sono già in viaggio verso la vostra email.',
  pre: "Va bene aver lasciato perdere l'offerta di prima. Senza pressione.",
  titulo: 'Ultima occasione per prendere il viaggio, nella versione più leggera.',
  subtitulo: (v) =>
    `Lo stesso viaggio del piccolo inventore, ora per solo ${v.por}, con un anno di accesso. Solo su questa pagina.`,
  capaAlt:
    'Un robot di cartone con zaino e occhiali, che cammina su una mappa colorata, con una medaglia e un certificato accanto',
  dentro: {
    titulo: 'Cosa c’è dentro',
    itens: [
      'La mappa del viaggio, un poster colorato da appendere',
      'Medaglie per categoria, una per ogni territorio',
      'Certificati da Inventore livello 1 a livello 3',
      'Il muro delle imprese per mostrare le creazioni',
      'Carte missione a sorpresa per scegliere il progetto del giorno',
    ],
  },
  como: {
    titulo: 'Come funziona',
    passos: [
      'Stampate la mappa e appendetela dove vostro figlio la vede.',
      'Pescate una carta missione per scegliere il progetto del giorno.',
      'Costruite insieme, segnate la tappa sulla mappa e conquistate la medaglia.',
    ],
  },
  oferta: {
    nome: 'Il viaggio del piccolo inventore',
    deRotulo: 'Da',
    por: (v) => `Per solo ${v.por}`,
    economia: (v) => `Risparmiate ${v.valor} (${v.percentual} di sconto)`,
    pagamento: 'Pagamento unico · PDF da stampare',
    acesso: 'Un anno di accesso nella stessa area membri',
    clique: 'Aggiunto al vostro ordine con un clic, con lo stesso metodo di pagamento.',
    exclusivo: 'Sconto riservato a chi ha appena comprato il Kit Mega Inventore.',
    cta: (v) => `Sì, voglio il viaggio per solo ${v.por}`,
    recusa: 'No grazie, continuo senza il viaggio',
  },
  garantia: (v) =>
    `Garanzia di ${v.dias} giorni. Se non fa per la vostra famiglia, scriveteci entro ${v.dias} giorni e restituiamo il 100%.`,
  faq: {
    titulo: 'Domande rapide',
    itens: [
      {
        q: 'Include progetti nuovi?',
        a: () =>
          'No. Il viaggio è un kit di progresso e motivazione, fatto per usare insieme ai progetti del Kit Mega Inventore che avete appena comprato.',
      },
      {
        q: 'Come lo ricevo?',
        a: () =>
          'Viene aggiunto alla stessa area membri del vostro Kit Mega Inventore, con accesso immediato.',
      },
      {
        q: 'Per quanto tempo ho accesso?',
        a: () =>
          'Per un anno. L’accesso non è a vita in questa offerta, ma potete stampare e tenere i PDF.',
      },
    ],
  },
  nota: 'Serve un adulto per ritagliare i materiali.',
  idiomas: 'Lingue',
} satisfies JornadaDown;

export default jornadaDown;
