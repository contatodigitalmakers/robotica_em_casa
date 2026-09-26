import type { Jornada } from './pt-br';

const jornada = {
  meta: {
    title: 'Il viaggio del piccolo inventore | Offerta esclusiva',
    description:
      'Una mappa delle avventure da usare con il Kit Mega Inventore. Lo sconto esiste solo su questa pagina, subito dopo l’acquisto.',
  },
  skip: 'Vai al contenuto',
  marcaAlt: 'Robótica em Casa',
  confirmacao: 'Il vostro ordine è confermato! I dati di accesso sono già in viaggio verso la vostra email.',
  pre: 'Aspettate, prima di uscire: avete uno sconto che esiste solo su questa pagina.',
  titulo: 'Non lasciate i vostri 200 progetti dimenticati in una cartella.',
  subtitulo: (v) =>
    `Aggiungete il viaggio del piccolo inventore, da ${v.de} a solo ${v.por}: la mappa delle avventure che trasforma ogni progetto in una missione che vostro figlio vorrà completare.`,
  capaAlt:
    'Un robot di cartone con zaino e occhiali, che cammina su una mappa colorata, con una medaglia e un certificato accanto',
  problema: {
    titulo: 'Diciamolo chiaro.',
    paragrafos: [
      'Avete appena messo al sicuro più di 200 progetti. C’è un sacco di divertimento che vi aspetta.',
      'Ecco cosa succede in tante case: i primi progetti sono un successo… poi arriva una settimana di corsa, nessuno sceglie cosa fare e i PDF restano fermi in una cartella.',
      'Non perché i progetti non siano belli.',
      'Ma perché un bambino ha bisogno di un motivo per tornare, e voi non avete tempo di inventare quel motivo ogni giorno.',
    ],
  },
  solucao: {
    titulo: 'Il viaggio del piccolo inventore dà a vostro figlio quel motivo.',
    intro:
      'È una mappa delle avventure da stampare che riunisce tutti i progetti del Kit Mega Inventore in un grande viaggio attraverso quattro territori.',
    territorios: [
      { icone: 'robot', titulo: 'Terra dei robot' },
      { icone: 'recycle', titulo: 'Isola del riciclo' },
      { icone: 'flask', titulo: 'Valle della scienza' },
      { icone: 'scissors', titulo: 'Villaggio dei lavoretti' },
    ],
    fecho:
      'Ogni progetto finito diventa una nuova tappa sulla mappa. Ogni territorio, una medaglia. Ogni livello, un certificato. E non dovete più decidere cosa fare: una carta missione a sorpresa decide per voi.',
  },
  dentro: {
    titulo: 'Cosa c’è dentro',
    itens: [
      {
        titulo: 'La mappa del viaggio',
        texto: 'un poster colorato da appendere, dove vostro figlio segna ogni progetto finito',
      },
      {
        titulo: 'Medaglie per categoria',
        texto: 'una per ogni territorio completato',
      },
      {
        titulo: 'Certificati di livello',
        texto: 'da Inventore livello 1 a livello 3, pronti per il frigorifero',
      },
      {
        titulo: 'Il muro delle imprese',
        texto: 'uno spazio per mostrare le creazioni con orgoglio',
      },
      {
        titulo: 'Carte missione a sorpresa',
        texto: 'ne pescate una e il progetto del giorno è scelto, senza discussioni',
      },
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
  momento: {
    titulo: 'Guarda cosa ho fatto!',
    texto:
      'Immaginate la scena: vostro figlio corre al muro per colorare una tappa nuova, si gira e vi dice: «Guarda cosa ho fatto!» È per questo che esiste il viaggio.',
  },
  porque: {
    titulo: 'Perché solo adesso',
    texto: (v) =>
      `Questo sconto esiste solo qui, subito dopo l’acquisto. Fuori da questa pagina, il viaggio del piccolo inventore costa ${v.de}. Se uscite ora, non rivedrete questo prezzo.`,
  },
  oferta: {
    nome: 'Il viaggio del piccolo inventore',
    deRotulo: 'Da',
    por: (v) => `Per solo ${v.por}`,
    economia: (v) => `Risparmiate ${v.valor} (${v.percentual} di sconto)`,
    pagamento: 'Pagamento unico · Accesso immediato e a vita · PDF da stampare',
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
        q: 'Perché il prezzo è così basso?',
        a: (v) =>
          `Perché è uno sconto riservato a chi ha appena comprato il Kit Mega Inventore. Fuori da questa pagina, il viaggio costa ${v.de}.`,
      },
      {
        q: 'Per quale età?',
        a: () => 'Per bambini dai 4 ai 10 anni.',
      },
    ],
  },
  nota: 'Serve un adulto per ritagliare i materiali.',
  idiomas: 'Lingue',
} satisfies Jornada;

export default jornada;
