/**
 * Testo italiano, con il voi formale.
 * I nomi del marchio e dei kit restano in portoghese (sono sulle copertine).
 * I prezzi sono in euro.
 */
import type { Content } from './pt-br';
import { site } from '../config/site';

const g = site.garantiaDias;
const prefix = '/it';

const content = {
  meta: {
    title: 'Robótica em Casa | Oltre 200 progetti di robotica e scienze per bambini dai 4 ai 10 anni',
    description:
      'Kit digitali con oltre 200 progetti di robotica, scienze, riciclo e lavoretti per bambini dai 4 ai 10 anni, con materiali semplici di casa. Accesso immediato.',
  },

  header: {
    logoAlt: 'Robótica em Casa — torna in cima',
    cta: 'Voglio il kit →',
  },

  hero: {
    pillEmoji: '✨',
    pill: 'Oltre 200 progetti per bambini dai 4 ai 10 anni',
    tituloPre: 'Trasformate il tempo davanti allo schermo in ',
    tituloDestaque: 'tempo per creare',
    tituloPos: '.',
    subtitulo:
      'Progetti di robotica, scienze, riciclo e lavoretti per bambini dai 4 ai 10 anni, con materiali semplici che avete già in casa.',
    cta: 'Voglio vedere cosa può creare mio figlio →',
    microcopy: `Pagamento unico · Accesso immediato · Garanzia di ${g} giorni`,
    mascoteAlt: 'Mascotte di Robótica em Casa: un robot fatto con una scatola di cartone',
    destaques: [
      { titulo: 'Oltre 200 progetti', texto: 'perché vostro figlio abbia tanto da creare' },
      { titulo: 'Materiali semplici', texto: 'cartone, bottiglie, bastoncini e cose di casa' },
      { titulo: 'Più creazione', texto: 'inventa, prova e costruisce con le proprie mani' },
    ],
  },

  alternativa: {
    pillEmoji: '🔥',
    pill: 'Stanchi degli schermi? E se creaste qualcosa?',
    tituloPre: 'E se ci fosse qualcosa di ',
    tituloDestaque: 'più divertente',
    tituloPos: ' di uno schermo?',
    texto:
      'Quando un bambino trova qualcosa di interessante da montare, provare e scoprire, si coinvolge, impara facendo ed è orgoglioso di ciò che ha creato.',
    fotoAlt: 'Robot fatto in casa con tappo di bottiglia, occhi mobili, cartone e rotelle, sul tavolo della cucina',
    beneficios: [
      {
        titulo: 'Più attenzione, meno litigi',
        texto: 'Attività che tengono desta l’attenzione e aiutano il bambino a concentrarsi giocando.',
        alt: 'Bambino sorridente accanto a un robot disegnatore fatto con i pennarelli',
      },
      {
        titulo: 'Imparare facendo',
        texto: 'Il bambino impara costruendo, provando idee e vedendo il progetto prendere vita.',
        alt: 'Bambina che monta una macchinina di legno con motore e fili',
      },
      {
        titulo: 'Spazio per inventare',
        texto: 'Carta, colla e immaginazione diventano scoperte che vorrà far vedere.',
        alt: 'Bambino che mostra il calcetto di bastoncini del gelato che ha costruito',
      },
      {
        titulo: 'Autonomia e orgoglio',
        texto: 'Il momento più bello è quando guarda il risultato e dice: «Guarda cosa ho fatto!»',
        alt: 'Bambino che incolla gli occhi di un cestino coccodrillo di cartone',
      },
    ],
    ctaBox: {
      tituloPre: 'L’alternativa di cui vostro figlio ha bisogno ',
      tituloDestaque: 'è qui',
      tituloPos: '.',
      texto:
        'Progetti creativi per trasformare il tempo libero in creazione, scoperta e apprendimento. Per bambini dai 4 ai 10 anni.',
      perguntaPre: 'Volete accedere a ',
      perguntaDestaque: 'tutti',
      perguntaPos: ' i progetti?',
      cta: 'Voglio i progetti →',
    },
  },

  porDentro: {
    pillEmoji: '📘',
    pill: 'Dentro il kit',
    titulo: 'Guardate i materiali e i passaggi dentro il kit',
    texto:
      'Ogni progetto arriva su pagine come queste: lista dei materiali, passaggi con foto e livello di difficoltà. Pronto da stampare e semplice da seguire.',
    paginas: [
      { legenda: 'Progetto — Barca solare', alt: 'Pagina del progetto della barca solare, con pannelli solari ed elica' },
      { legenda: 'Passo dopo passo — Tabellone', alt: 'Pagina dei passaggi del tabellone, con colla a caldo e carta colorata' },
      { legenda: 'Passo dopo passo — Mano meccanica', alt: 'Pagina dei passaggi della mano meccanica fatta con le cannucce' },
      { legenda: 'Progetto — Luci a catena', alt: 'Pagina del progetto delle luci con tubi di cartone e LED' },
      { legenda: 'Progetto — Lanterna di carta', alt: 'Pagina del progetto della lanterna di carta, con bastoncini e tovaglioli' },
      { legenda: 'Materiali — Macchinina nitro', alt: 'Lista dei materiali della macchinina nitro: bastoncini, pile, cannucce, tappi ed elastici' },
      { legenda: 'Riciclo — Cestino coccodrillo', alt: 'Ultima pagina del cestino coccodrillo, con i passaggi finali e la decorazione' },
      { legenda: 'Esperimento — Cielo in un barattolo', alt: 'Pagina dell’esperimento del cielo e del tramonto, con latte, acqua e torcia' },
      { legenda: 'Progetto — Montagne russe di cannucce', alt: 'Pagina del progetto delle montagne russe di cannucce, con materiali e passaggi' },
      { legenda: 'Esperimento — Razzo frizzante', alt: 'Pagina dell’esperimento del razzo frizzante, con un tubetto e acqua' },
    ],
    dicaArraste: 'scorrete di lato →',
    anterior: 'Pagina precedente',
    proxima: 'Pagina successiva',
    fechar: 'Chiudi immagine ingrandita',
    cta: 'Voglio i progetti adesso →',
  },

  historia: {
    pillEmoji: '💡',
    pill: 'Perché abbiamo creato il club',
    tituloPre: 'Creato per mostrare ai bambini che ',
    tituloDestaque: 'creare può essere molto più interessante',
    tituloPos: ' che restare davanti a uno schermo.',
    intro: `${site.nomeClube} non è nato da una ricerca di mercato. È nato da un momento vero: un bambino sullo schermo, una madre stanca e la domanda che non le usciva dalla testa: «e adesso, cosa gli propongo al posto di quello?»`,
    cards: [
      {
        titulo: 'Il problema che nessuno risolveva',
        texto: 'Togliere il telefono di mano senza litigare. Offrire qualcosa che il bambino scelga davvero, non per obbligo.',
      },
      {
        titulo: 'La svolta',
        texto: 'Quando il bambino ha tra le mani qualcosa che accende davvero la curiosità, lo schermo smette di essere l’unica opzione.',
      },
      {
        titulo: 'Contenuti che funzionano in casa',
        texto: 'Ogni kit è pensato per ciò che ai bambini dai 4 ai 10 anni piace fare davvero. Non è teoria: è pratica provata in casa.',
      },
      {
        titulo: 'Per chi vuole un pomeriggio diverso',
        texto: 'Senza sensi di colpa e senza giudizi. Soluzioni concrete per giornate vere, pronte da stampare e usare oggi.',
      },
    ],
    citacao: {
      textoPre: 'Non vogliamo eliminare gli schermi. Vogliamo restituire alle famiglie ',
      destaque: 'il silenzio buono',
      textoPos: ': quello del bambino così concentrato a creare che si dimentica del telefono.',
      assinatura: `Fondatori del ${site.nomeClube}`,
      cargo: 'Genitori, educatori e persone che tengono a un’infanzia creativa',
      mascoteAlt: '',
    },
    stats: [
      { valor: '+15 mila', rotulo: 'famiglie raggiunte' },
      { valor: '5', rotulo: 'aree di sviluppo' },
      { valor: '4–10', rotulo: 'anni di età' },
      { valor: 'Accesso', rotulo: 'Area membri digitale: stampate i progetti e usateli oggi' },
    ],
    missao: {
      pre: 'La nostra missione è semplice: ',
      destaque: 'trasformare il tempo libero del bambino in tempo per creare.',
      pos: ' Robotica, scienze, arte e logica: ogni kit è una porta su ciò che può fare con le proprie mani.',
    },
    cta: 'Voglio iniziare oggi →',
  },

  divisor: {
    frase: 'Dove l’infanzia diventa invenzione.',
  },

  exemplos: {
    pillEmoji: '🧩',
    pill: 'Qualche esempio',
    titulo: 'Tutto perché vostro figlio inizi a creare, scoprire ed essere orgoglioso',
    texto:
      'Ogni progetto ha un passo dopo passo visivo e completo. Niente ricerche, niente dubbi. Il bambino vede l’immagine, capisce cosa fare e inizia a creare.',
    alts: [
      'Razzo di cartone con la punta di un tappo blu, occhi mobili e rotelle',
      'Camion di cartone blu con motore e ruote di tappi verdi',
      'Bambina che versa colorante in barattoli per un esperimento colorato',
      'Elicottero fatto con una bottiglia, bastoncini del gelato e tappi',
      'Barca solare in un vassoio verde, con pannelli solari ed elica',
      'Bambino che monta un robot che cammina, di bastoncini del gelato',
      'Bambino sorridente accanto a un robot disegnatore fatto con i pennarelli',
      'Bambina che monta una macchinina di legno con motore e fili',
      'Bambino che incolla gli occhi di un cestino coccodrillo di cartone',
    ],
    legenda: 'Questi sono solo alcuni degli oltre 200 progetti che vostro figlio può creare.',
    anterior: 'Foto precedente',
    proxima: 'Foto successiva',
  },

  depoimentos: {
    pillEmoji: '❤️',
    pill: 'Racconti veri di mamme che hanno già il kit',
    titulo: 'Cosa dicono le mamme',
    texto: 'Parole di mamme che usano già il kit con i loro bambini.',
    alts: [
      'Chat WhatsApp in cui una cliente ringrazia per il materiale e racconta che il figlio ha seguito l’attività',
      'Chat WhatsApp di Juliana, con il figlio concentrato a costruire un progetto in salotto',
      'Chat WhatsApp di Mariana Alves sulla figlia che ha costruito il razzo e il Kit Mega Inventor',
      'Chat WhatsApp in cui una cliente ringrazia e dice che il figlio si è entusiasmato per i progetti',
    ],
    anterior: 'Racconto precedente',
    proxima: 'Racconto successivo',
  },

  ofertas: {
    pillEmoji: '🎁',
    pill: 'Offerte di lancio',
    tituloPre: 'Scegliete il ',
    tituloDestaque: 'kit giusto',
    tituloPos: ' per vostro figlio',
    texto: 'Iniziate solo con la robotica, oppure prendete i 4 kit e oltre 200 progetti. Pagamento unico e accesso immediato.',
    de: 'Da',
    por: 'a',
    valorSeparado: 'Prezzo se acquistati separatamente:',
    pagamentoInfo: 'Pagamento unico · Nessun abbonamento · Accesso immediato e a vita',
    garantiaLinha: `Garanzia di ${g} giorni: se non fa per voi, rimborsiamo il 100%.`,
    mirim: {
      titulo: 'Kit di robotica junior',
      subtitulo: '20 progetti di robot e macchine che vostro figlio costruisce con ciò che avete già in casa.',
      mockupAlt: 'Robótica em Casa. Kit di robotica junior. 20 progetti',
      itens: [
        { pre: 'Kit di robotica junior: ', destaque: '20 progetti', pos: '' },
        { pre: 'Un passo dopo passo ', destaque: 'tutto visivo', pos: ', che il bambino riesce a seguire' },
        { pre: 'Accesso riservato all’', destaque: 'area membri', pos: '' },
      ],
      cta: 'Iniziare con la robotica →',
    },
    mega: {
      selo: '⭐ Il più completo',
      titulo: 'Kit Mega Inventore',
      subtitulo: 'Oltre 200 progetti in 4 kit, e molto più tempo per creare e giocare.',
      mockupAlt: 'Robotica per bambini, Riciclo, Esperimenti scientifici, Lavoretti. Bonus: Operazione Piccolo Agente',
      itens: [
        { icone: 'robot', pre: 'Robotica per bambini: ', destaque: 'robot e macchine che si muovono', pos: '' },
        { icone: 'recycle', pre: 'Riciclo: ', destaque: 'il «rifiuto» di casa diventa un gioco', pos: '' },
        { icone: 'flask', pre: 'Esperimenti scientifici: ', destaque: 'scienze con ciò che c’è in cucina', pos: '' },
        { icone: 'scissors', pre: 'Lavoretti: ', destaque: 'motricità fine e cura', pos: '' },
        { icone: 'search', pre: 'Bonus: Operazione Piccolo Agente', destaque: ', missioni segrete', pos: ' da completare in casa' },
        { icone: 'check', pre: 'Accesso riservato all’', destaque: 'area membri', pos: '' },
      ],
      cta: 'Voglio gli oltre 200 progetti adesso →',
    },
    upsell: {
      pill: 'Aspettate! Offerta esclusiva',
      fechar: 'Chiudi',
      titulo: 'Prendete il Kit Mega Inventore con uno sconto maggiore',
      texto:
        '4 ebook completi — Robotica per bambini, Riciclo, Esperimenti scientifici e Lavoretti. Solo su questa pagina:',
      mockupAlt:
        'Robotica per bambini, Riciclo, Esperimenti scientifici, Lavoretti. Bonus: Operazione Piccolo Agente',
      aceitar: 'Accetto questa offerta',
      recusar: 'Continuare con il Kit di robotica junior',
    },
    confianca: [
      '🔒 Acquisto sicuro · Pagamento gestito da Hotmart · Pix (pagamento istantaneo brasiliano), carta o boleto (bollettino bancario brasiliano). I prezzi sono in euro.',
      'L’accesso arriva via e-mail appena il pagamento è confermato.',
      '⚠️ Prodotto digitale (PDF da stampare). Non viene spedito nulla di fisico.',
      'Le attività vanno sempre fatte con un adulto accanto.',
    ],
  },

  garantia: {
    pillEmoji: '✅',
    pill: 'Nessun rischio per voi',
    titulo: `Garanzia incondizionata di ${g} giorni`,
    texto: `Se entro ${g} giorni il kit non vi convince, per qualsiasi motivo, rimborsiamo il 100%. La richiesta si fa direttamente su Hotmart, senza domande e senza burocrazia. È anche il vostro diritto di recesso, previsto dal Codice brasiliano di tutela dei consumatori.`,
    escudoAlt: '',
  },

  lancamento: {
    titulo: '⏳ Offerta di lancio — per un tempo limitato',
    texto: (v) =>
      `I prezzi speciali a partire da ${v.preco} valgono solo durante il periodo di lancio. Dopo quella data, i kit tornano al prezzo originale. Non rimandate.`,
    unidades: ['ore', 'min', 'sec'],
    cta: 'Approfittare del prezzo di lancio →',
    encerrado: 'Il periodo di lancio è terminato.',
  },

  faq: {
    pillEmoji: '❓',
    pill: 'Domande frequenti',
    titulo: 'Vi è rimasta qualche domanda?',
    itens: [
      {
        q: 'Come ricevo il kit?',
        a: 'Appena il pagamento è confermato, ricevete via e-mail l’accesso all’area membri di Hotmart, dove ci sono tutti i PDF. Con Pix e carta l’accesso è immediato; con il boleto, un bollettino bancario brasiliano, può servire fino a 3 giorni lavorativi.',
      },
      {
        q: 'Il kit è fisico o digitale?',
        a: 'È digitale al 100%: PDF da stampare o da seguire su telefono, tablet o computer. Non viene spedito nulla.',
      },
      {
        q: 'Mi serve una stampante?',
        a: 'No. Potete seguire i passaggi sullo schermo. Stampare rende solo tutto più comodo per il bambino.',
      },
      {
        q: 'Per quale età è indicato?',
        a: 'Per bambini dai 4 ai 10 anni. Ogni progetto indica la difficoltà, così scegliete quello adatto a vostro figlio.',
      },
      {
        q: 'Dovrò comprare i materiali?',
        a: 'I progetti usano cose che quasi ogni casa ha già: cartone, bottiglie, bastoncini del gelato, bicchieri, cannucce, nastro e colla. Ogni progetto elenca ciò che serve.',
      },
      {
        q: 'Mio figlio può farlo da solo?',
        a: 'I progetti sono pensati perché il bambino partecipi davvero, sempre con un adulto accanto, soprattutto nei passaggi con forbici, colla a caldo, esperimenti e pezzi piccoli (più attenzione sotto i 6 anni).',
      },
      {
        q: 'Per quanto tempo ho l’accesso?',
        a: 'Per sempre. Il pagamento è unico, senza abbonamento, e l’accesso è a vita.',
      },
      {
        q: 'Posso usarlo con più di un figlio?',
        a: 'Sì. Il kit è per la vostra famiglia, con tutti i bambini che volete.',
      },
      {
        q: 'E se non mi piace?',
        a: `Avete ${g} giorni di garanzia. Se non siete soddisfatti, chiedete il rimborso su Hotmart e ricevete indietro il 100%.`,
      },
      {
        q: 'Come contatto l’assistenza?',
        a: `Via e-mail a ${site.empresa.emailSuporte}. Rispondiamo entro 1 giorno lavorativo.`,
      },
    ],
  },

  ctaFinal: {
    tituloPre: 'Vostro figlio merita di scoprire ',
    tituloDestaque: 'cosa riesce a creare',
    tituloPos: '',
    texto: 'Dategli la possibilità di costruire, inventare, sperimentare ed essere orgoglioso di ciò che ha fatto con le sue mani. Iniziate oggi: l’accesso è immediato.',
    cta: 'Voglio creare con mio figlio adesso →',
    microcopy: `🔒 Acquisto sicuro · Garanzia di ${g} giorni · Accesso immediato`,
    mascoteAlt: '',
  },

  footer: {
    logoAlt: 'Robótica em Casa',
    copyright: `© 2026 ${site.marca} · ${site.empresa.nome} · ${site.empresa.endereco}`,
    suporte: `Assistenza: ${site.empresa.emailSuporte}`,
    links: [
      { label: 'Informativa sulla privacy', href: `${prefix}/politica-de-privacidade` },
      { label: 'Termini di utilizzo', href: `${prefix}/termos-de-uso` },
      { label: 'Informativa sui cookie', href: `${prefix}/politica-de-cookies` },
    ],
    hotmart: 'Pagamento elaborato in modo sicuro da Hotmart. I prezzi sono in euro (EUR).',
    aviso:
      'Avviso di sicurezza: tutte le attività vanno fatte con un adulto accanto. Alcuni progetti usano forbici, colla a caldo e pezzi piccoli, che non vanno lasciati a portata dei bambini sotto i 6 anni senza supervisione.',
    meta: 'Questo sito non è affiliato a Facebook, Instagram o Meta Platforms, Inc.',
  },

  sticky: {
    produto: 'Kit Mega Inventore',
    cta: 'Voglio il kit',
  },

  cookies: {
    texto: 'Usiamo i cookie per migliorare la vostra esperienza e misurare le nostre pubblicità.',
    aceitar: 'Accetta',
    recusar: 'Rifiuta',
    link: 'Informativa sui cookie',
    href: `${prefix}/politica-de-cookies`,
  },

  a11y: {
    pular: 'Vai al contenuto',
    fechar: 'Chiudi',
    avisoCookies: 'Avviso sui cookie',
    linksLegais: 'Link legali',
    ampliar: 'ingrandisci',
    idiomas: 'Lingue',
  },

  legal: {
    avisoRevisao: '[DA CONFERMARE CON UN AVVOCATO]',
    atualizado: 'Ultimo aggiornamento: settembre 2026.',
    privacidade: {
      title: 'Informativa sulla privacy',
      description: `Informativa sulla privacy di ${site.marca} (${site.empresa.nome}): dati raccolti, finalità, condivisioni e diritti.`,
      secoes: [
        {
          h: '1. Chi siamo',
          p: [
            `Questa informativa si applica al sito ${site.marca}, gestito da ${site.empresa.nome}, CNPJ ${site.empresa.cnpj} (codice fiscale dell’impresa in Brasile), indirizzo ${site.empresa.endereco}, di seguito «l’Azienda».`,
          ],
        },
        {
          h: '2. Dati raccolti',
          p: [
            'Raccogliamo: (a) dati di navigazione e cookie, con il vostro consenso, per misurare le pubblicità (Meta Pixel); (b) dati d’acquisto — nome, e-mail, CPF (codice fiscale brasiliano) e dati di pagamento — raccolti e trattati direttamente da Hotmart al momento dell’acquisto.',
          ],
        },
        {
          h: '3. Perché li usiamo',
          p: [
            'I dati servono a consegnare il prodotto digitale, inviare comunicazioni sull’acquisto, rispettare obblighi legali e fiscali e, con il vostro consenso, misurare l’efficacia delle pubblicità.',
          ],
        },
        {
          h: '4. Con chi li condividiamo',
          p: [
            'Condividiamo dati con Hotmart (pagamento e area membri) e Meta Platforms (misurazione pubblicitaria, solo dopo il consenso ai cookie). Non vendiamo dati personali.',
          ],
        },
        {
          h: '5. I vostri diritti (LGPD brasiliana, legge n. 13.709/2018)',
          p: [
            'Potete confermare che trattiamo i vostri dati, accedervi, correggerli, anonimizzarli, bloccarli o cancellarli, chiederne la portabilità e revocare il consenso in qualsiasi momento, senza costi.',
          ],
        },
        {
          h: '6. Contatto privacy',
          p: [
            `Per esercitare i vostri diritti o chiedere informazioni su questa informativa, scrivete a ${site.empresa.emailSuporte}.`,
          ],
        },
      ],
    },
    termos: {
      title: 'Termini di utilizzo',
      description: `Termini di utilizzo di ${site.marca} (${site.empresa.nome}): licenza, garanzia, recesso e proprietà intellettuale.`,
      secoes: [
        {
          h: '1. Il prodotto',
          p: [
            `${site.marca} è un prodotto digitale di ${site.empresa.nome}: kit in PDF con progetti di robotica, scienze, riciclo e lavoretti per bambini dai 4 ai 10 anni. Non viene spedito nulla di fisico. Le attività vanno sempre fatte con un adulto accanto.`,
          ],
        },
        {
          h: '2. Licenza',
          p: [
            'L’acquisto concede una licenza d’uso personale e familiare, non trasferibile e non esclusiva. È vietata la rivendita, la redistribuzione, la pubblicazione o l’uso commerciale dei PDF, in tutto o in parte.',
          ],
        },
        {
          h: '3. Accesso',
          p: [
            'L’accesso viene inviato via e-mail appena il pagamento è confermato, tramite l’area membri di Hotmart. Il pagamento è unico e l’accesso dura finché la piattaforma è attiva.',
          ],
        },
        {
          h: '4. Diritto di recesso e garanzia',
          p: [
            `Ai sensi dell’articolo 49 del Codice brasiliano di tutela dei consumatori, potete chiedere il rimborso entro ${g} giorni dall’acquisto, direttamente su Hotmart, con restituzione del 100% di quanto pagato.`,
          ],
        },
        {
          h: '5. Proprietà intellettuale',
          p: [
            `Tutti i contenuti (testi, illustrazioni, foto, marchio e mascotte) appartengono a ${site.empresa.nome} e sono protetti dal diritto d’autore.`,
          ],
        },
        {
          h: '6. Contatto',
          p: [`Domande su questi termini: ${site.empresa.emailSuporte}.`],
        },
      ],
    },
    cookies: {
      title: 'Informativa sui cookie',
      description: `Informativa sui cookie di ${site.marca}: cosa sono, quali usiamo e come gestire la vostra scelta.`,
      secoes: [
        {
          h: '1. Cosa sono i cookie',
          p: [
            'I cookie sono piccoli file di testo salvati nel browser. Aiutano il sito a funzionare e a capire come viene usato.',
          ],
        },
        {
          h: '2. Quali cookie usiamo',
          p: [
            'Cookie di preferenza (ricordano la vostra scelta sul banner) e, solo se accettate, cookie pubblicitari di Meta Pixel (Meta Platforms), per misurare l’efficacia delle nostre inserzioni.',
          ],
        },
        {
          h: '3. Come gestirli',
          p: [
            'Potete accettare o rifiutare i cookie nel banner e cambiare idea cancellando i dati di questo sito nel browser. Se rifiutate, non viene caricato nessun cookie pubblicitario.',
          ],
        },
        {
          h: '4. Contatto',
          p: [`Domande sui cookie: ${site.empresa.emailSuporte}.`],
        },
      ],
    },
  },
} satisfies Content;

export default content;
