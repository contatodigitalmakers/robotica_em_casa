/**
 * CONTEÚDO PT-BR — todos os textos da página ficam aqui.
 * Nenhum componente pode ter texto "chumbado".
 * Preços, dias de garantia, nomes e e-mails são interpolados a partir de src/config/site.ts.
 * Para adicionar um idioma: copie este arquivo (es.ts, fr.ts...) mantendo o mesmo formato (tipo Content).
 */
import { site } from '../config/site';

const g = site.garantiaDias;

const content = {
  meta: {
    title:
      'Robótica em Casa | +200 projetos de robótica e ciência para crianças de 4 a 10 anos',
    description:
      'Kits digitais com mais de 200 projetos de robótica, ciência, reciclagem e artesanato para crianças de 4 a 10 anos, com materiais simples de casa. Acesso imediato.',
  },

  header: {
    logoAlt: 'Robótica em Casa — ir para o topo',
    cta: 'Quero o kit →',
  },

  hero: {
    pillEmoji: '✨',
    pill: '+200 projetos para crianças de 4 a 10 anos',
    tituloPre: 'Transforme o tempo de tela em ',
    tituloDestaque: 'tempo de criação',
    tituloPos: '.',
    subtitulo:
      'Projetos de robótica, ciência, reciclagem e artesanato para crianças de 4 a 10 anos, usando materiais simples que você já tem em casa.',
    cta: 'Quero ver o que meu filho pode criar →',
    microcopy: `Pagamento único · Acesso imediato · Garantia de ${g} dias`,
    mascoteAlt: 'Mascote da Robótica em Casa: um robô feito de caixa de papelão',
    destaques: [
      { titulo: '+200 projetos', texto: 'para seu filho ter muito tempo de diversão' },
      { titulo: 'Materiais simples', texto: 'papelão, garrafas, palitos e itens de casa' },
      { titulo: 'Mais criatividade', texto: 'ela inventa, testa e cria com as próprias mãos' },
    ],
  },

  alternativa: {
    pillEmoji: '🔥',
    pill: 'Cansou de tela? Que tal criar?',
    tituloPre: 'E se existisse algo ',
    tituloDestaque: 'mais divertido',
    tituloPos: ' do que a tela?',
    texto:
      'Quando a criança encontra algo interessante para montar, testar e descobrir, ela naturalmente se envolve mais, aprende fazendo e sente orgulho do que criou.',
    fotoAlt: 'Robô montado com tampa de garrafa, olhos móveis, papelão e rodinhas sobre a mesa da cozinha',
    beneficios: [
      {
        titulo: 'Mais foco, menos reclamação',
        texto:
          'Atividades que prendem a atenção e ajudam a criança a se concentrar brincando.',
        alt: 'Menino sorrindo ao lado de um robô desenhista feito com canetinhas',
      },
      {
        titulo: 'Aprendizado na prática',
        texto:
          'A criança aprende construindo, testando ideias e vendo o projeto ganhar vida.',
        alt: 'Menina montando um carrinho de madeira com motor e fios',
      },
      {
        titulo: 'Criatividade sem limites',
        texto:
          'Papel, cola e imaginação se transformam em descobertas que ela vai querer mostrar.',
        alt: 'Menino mostrando o pebolim de palitos de picolé que construiu',
      },
      {
        titulo: 'Mais autonomia e orgulho',
        texto:
          "O melhor momento é quando ela olha para o resultado e diz: 'Olha o que eu fiz!'",
        alt: 'Menino colando os olhos de uma lixeira jacaré feita de caixa de papelão',
      },
    ],
    ctaBox: {
      tituloPre: 'A alternativa que seu filho precisa ',
      tituloDestaque: 'está aqui',
      tituloPos: '.',
      texto:
        'Projetos criativos e divertidos para transformar o tempo livre em criação, descoberta e aprendizado. Para crianças de 4 a 10 anos.',
      perguntaPre: 'Quer ter acesso a ',
      perguntaDestaque: 'todos',
      perguntaPos: ' os projetos?',
      cta: 'Quero acessar os projetos →',
    },
  },

  porDentro: {
    pillEmoji: '📘',
    pill: 'Por dentro do kit',
    titulo: 'Veja os materiais e o passo a passo por dentro do kit',
    texto:
      'Cada projeto vem em páginas como estas: lista de materiais, passo a passo com fotos reais e nível de dificuldade. Pronto para imprimir e simples de seguir.',
    paginas: [
      { legenda: 'Projeto — Barco solar', alt: 'Página do projeto Construa um barco solar, com painéis solares e hélice' },
      { legenda: 'Passo a passo — Tabuleiro', alt: 'Página do passo a passo do tabuleiro de jogo, com cola quente e papel colorido' },
      { legenda: 'Passo a passo — Mão mecânica', alt: 'Página do passo a passo da mão mecânica feita com canudos' },
      { legenda: 'Projeto — Luzes de cordão', alt: 'Página do projeto Luzes de cordão de queijo suíço, com tubos de papelão e luzes de LED' },
      { legenda: 'Projeto — Lanterna de papel', alt: 'Página do projeto Lanterna de papel, com palitos de picolé e guardanapos' },
      { legenda: 'Materiais — Carrinho nitro', alt: 'Lista de materiais do carrinho nitro: palitos, pilhas, canudos, tampinhas e elásticos' },
      { legenda: 'Reciclável — Lixeira jacaré', alt: 'Página final do projeto Lixeira jacaré, com os últimos passos e a decoração' },
      { legenda: 'Experimento — Pote do céu', alt: 'Página do experimento Pote do céu e pôr do sol, com leite, água e lanterna' },
      { legenda: 'Projeto — Montanha-russa de canudo', alt: 'Página do projeto Montanha-russa de canudo, com lista de materiais e passo a passo' },
      { legenda: 'Experimento — Foguete efervescente', alt: 'Página do experimento Foguete efervescente, com tubo de comprimido e água' },
    ],
    dicaArraste: 'arraste para o lado →',
    anterior: 'Página anterior',
    proxima: 'Próxima página',
    fechar: 'Fechar imagem ampliada',
    cta: 'Quero acessar os projetos agora →',
  },

  historia: {
    pillEmoji: '💡',
    pill: 'Por que criamos o clube',
    tituloPre: 'Criado para mostrar às crianças que ',
    tituloDestaque: 'criar pode ser muito mais interessante',
    tituloPos: ' do que ficar na tela.',
    // CONFIRMAR: história real dos fundadores
    intro: `O ${site.nomeClube} não nasceu de uma pesquisa de mercado. Nasceu de um momento real: uma criança na tela, uma mãe exausta e a pergunta que não saía da cabeça: "e agora, o que eu ofereço no lugar?"`,
    cards: [
      {
        titulo: 'O problema que ninguém resolvia',
        texto:
          'Tirar o celular da mão da criança sem briga. Oferecer algo que ela escolhesse de verdade, não por obrigação.',
      },
      {
        titulo: 'A virada',
        texto:
          'Quando a criança tem nas mãos algo que desperta curiosidade de verdade, a tela deixa de ser a única opção.',
      },
      {
        titulo: 'Conteúdo feito para funcionar',
        texto:
          'Cada kit foi pensado para o que crianças de 4 a 10 anos realmente gostam de fazer. Não é teoria: é prática testada em casa.',
      },
      {
        titulo: 'Para a mãe que quer fazer diferente',
        texto:
          'Sem culpa e sem julgamento. Soluções reais para dias reais, prontas para imprimir e usar hoje.',
      },
    ],
    citacao: {
      textoPre: 'A gente não quer acabar com as telas. Queremos devolver às famílias ',
      destaque: 'o silêncio bom',
      textoPos:
        ': o da criança tão concentrada criando que nem lembra do celular.',
      assinatura: `Fundadores do ${site.nomeClube}`,
      cargo: site.fundadores.descricao,
      mascoteAlt: '', // decorativo
    },
    stats: [
      { valor: '+15 mil', rotulo: 'famílias atendidas' },
      { valor: '5', rotulo: 'áreas de desenvolvimento' },
      { valor: '4–10', rotulo: 'anos de faixa etária' },
      { valor: 'Acesso', rotulo: 'Área de membro digital, imprime os projetos e usa hoje' },
    ],
    missao: {
      pre: 'Nossa missão é simples: ',
      destaque: 'transformar o tempo livre da criança em tempo de criação.',
      pos: ' Robótica, ciência, arte e lógica: cada kit é uma porta aberta para um mundo de possibilidades com as próprias mãos.',
    },
    cta: 'Quero começar hoje →',
  },

  divisor: {
    frase: 'Onde a infância vira invenção.',
  },

  exemplos: {
    pillEmoji: '🧩',
    pill: 'Veja alguns exemplos',
    titulo: 'Tudo para seu filho começar a criar, descobrir e se orgulhar',
    texto:
      'Cada projeto tem um passo a passo visual e completo. Sem pesquisa, sem dúvida. A criança vê a imagem, entende o que fazer e começa a criar.',
    alts: [
      'Foguete de papelão com bico de tampinha azul, olhos móveis e rodinhas',
      'Caminhão de papelão azul com motor e rodas de tampinha verde',
      'Menina pingando corante em potes de um experimento colorido',
      'Helicóptero feito com garrafa, palitos de picolé e tampinhas',
      'Barco solar em bandeja verde, com painéis solares e hélice',
      'Menino montando um robô andador de palitos de picolé',
      'Menino sorrindo ao lado de um robô desenhista feito com canetinhas',
      'Menina montando um carrinho de madeira com motor e fios',
      'Menino colando os olhos de uma lixeira jacaré de papelão',
    ],
    legenda: 'Estes são só alguns dos mais de 200 projetos que seu filho pode criar.',
    anterior: 'Foto anterior',
    proxima: 'Próxima foto',
  },

  depoimentos: {
    pillEmoji: '❤️',
    pill: 'Relatos reais de quem já recebeu o kit',
    titulo: 'O que as mães estão dizendo no WhatsApp',
    texto: 'Prints reais de conversas com clientes, publicados com autorização.',
    alts: [
      'Conversa no WhatsApp em que a cliente agradece o material e conta que o filho acompanhou a atividade',
      'Conversa no WhatsApp da Juliana, com o filho concentrado montando um projeto na sala',
      'Conversa no WhatsApp da Mariana Alves sobre a filha que montou o foguete e o Kit Mega Inventor',
      'Conversa no WhatsApp em que a cliente agradece e diz que o filho ficou animado com os projetos',
    ],
    anterior: 'Depoimento anterior',
    proxima: 'Próximo depoimento',
  },

  ofertas: {
    pillEmoji: '🎁',
    pill: 'Ofertas de lançamento',
    tituloPre: 'Escolha o ',
    tituloDestaque: 'kit ideal',
    tituloPos: ' para o seu filho',
    texto:
      'Comece só com a Robótica ou leve os 4 kits com mais de 200 projetos. Pagamento único e acesso imediato.',
    de: 'De',
    por: 'por',
    valorSeparado: 'Valor se comprado separado:',
    pagamentoInfo: 'Pagamento único · Sem mensalidade · Acesso imediato e vitalício',
    garantiaLinha: `Garantia de ${g} dias: não gostou, devolvemos 100% do valor.`,
    mirim: {
      titulo: 'Kit Robótica Mirim',
      subtitulo:
        '20 projetos de robôs e máquinas que seu filho constrói com materiais que você já tem em casa.',
      mockupAlt: 'Mockup do Kit Robótica Mirim com 20 projetos de robótica',
      itens: [
        { pre: 'Kit Robótica Mirim: ', destaque: '20 projetos', pos: '' },
        { pre: 'Passo a passo ', destaque: '100% visual', pos: ', que a criança consegue acompanhar' },
        { pre: 'Acesso exclusivo à ', destaque: 'área de membros', pos: '' },
      ],
      cta: 'Começar com a Robótica →',
    },
    mega: {
      selo: '⭐ Mais completo',
      titulo: 'Kit Mega Inventor',
      subtitulo:
        'Mais de 200 projetos em 4 kits, muito mais tempo de criatividade e diversão para sua criança.',
      mockupAlt: 'Mockup do Kit Mega Inventor com os 4 kits e mais de 200 projetos',
      itens: [
        { icone: 'robot', pre: 'Robótica Infantil: ', destaque: 'robôs e máquinas que se movimentam', pos: '' },
        { icone: 'recycle', pre: 'Recicláveis: ', destaque: "o 'lixo' da casa vira brinquedo", pos: '' },
        { icone: 'flask', pre: 'Experimentos Científicos: ', destaque: 'ciência com o que tem na cozinha', pos: '' },
        { icone: 'scissors', pre: 'Artesanato: ', destaque: 'coordenação motora e capricho', pos: '' },
        { icone: 'search', pre: 'Bônus exclusivo: Operação Pequeno Agente', destaque: ', missões secretas', pos: ' para a criança cumprir pela casa' },
        { icone: 'check', pre: 'Acesso exclusivo à ', destaque: 'área de membros', pos: '' },
      ],
      cta: 'Quero os +200 projetos agora →',
    },
    upsell: {
      pill: 'Espere! Oferta exclusiva',
      fechar: 'Fechar',
      titulo: 'Leve o Kit Mega Inventor com desconto maior',
      texto:
        'São 4 ebooks completos — Robótica Infantil, Recicláveis, Experimentos Científicos e Artesanato. Só nesta página:',
      mockupAlt: 'Mockup do Kit Mega Inventor com os 4 kits e mais de 200 projetos',
      aceitar: 'Aceito essa oferta',
      recusar: 'Continuar com o Kit Robótica Mirim',
    },
    confianca: [
      '🔒 Compra 100% segura · Pagamento processado pela Hotmart · Pix, cartão ou boleto',
      'Acesso liberado por e-mail logo após a confirmação do pagamento.',
      '⚠️ Produto digital (PDFs para imprimir). Nenhum item físico é enviado.',
      'As atividades devem ser feitas sempre com supervisão de um adulto.',
    ],
  },

  garantia: {
    pillEmoji: '✅',
    pill: 'Sem risco nenhum para você',
    titulo: `Garantia incondicional de ${g} dias`,
    texto: `Se em até ${g} dias você não ficar satisfeito com o seu kit, por qualquer motivo, devolvemos 100% do seu dinheiro. É só pedir o reembolso direto pela Hotmart, sem perguntas e sem burocracia. Esse também é o seu direito de arrependimento, garantido pelo Código de Defesa do Consumidor.`,
    escudoAlt: '', // decorativo
  },

  lancamento: {
    titulo: '⏳ Oferta de lançamento — por tempo limitado',
    // montado com o menor preço real do config — nunca editar o valor aqui
    texto: (v: { preco: string }) =>
      `Os preços especiais a partir de ${v.preco} são válidos somente durante o período de lançamento. Após essa data, os kits voltam ao preço original. Não deixe para depois!`,
    unidades: ['horas', 'min', 'seg'],
    cta: 'Aproveitar o preço de lançamento →',
    encerrado: 'O período de lançamento terminou.',
  },

  faq: {
    pillEmoji: '❓',
    pill: 'Dúvidas frequentes',
    titulo: 'Ficou com alguma dúvida?',
    itens: [
      {
        q: 'Como recebo o kit?',
        a: 'Logo após a confirmação do pagamento, você recebe por e-mail o acesso à área de membros da Hotmart, onde estão todos os PDFs. No Pix e no cartão a liberação é imediata; no boleto, pode levar até 3 dias úteis.',
      },
      {
        q: 'O kit é físico ou digital?',
        a: 'É 100% digital: PDFs para imprimir ou usar direto no celular, tablet ou computador. Nenhum material é enviado pelo correio.',
      },
      {
        q: 'Preciso de impressora?',
        a: 'Não é obrigatório. Você pode seguir o passo a passo pela tela. Imprimir só deixa tudo mais prático para a criança.',
      },
      {
        q: 'Para qual idade é indicado?',
        a: 'Para crianças de 4 a 10 anos. Cada projeto indica o nível de dificuldade, para você escolher o que combina com o seu filho.',
      },
      {
        q: 'Vou precisar comprar materiais?',
        a: 'Os projetos usam coisas que quase toda casa tem: papelão, garrafas, palitos de picolé, copos, canudos, fita e cola. Cada projeto traz a lista do que é necessário.',
      },
      {
        q: 'Meu filho pode fazer sozinho?',
        a: 'Os projetos são pensados para a criança participar ativamente, mas sempre com a supervisão de um adulto, principalmente nas etapas com tesoura, cola quente, experimentos e peças pequenas (atenção redobrada com menores de 6 anos).',
      },
      {
        q: 'Por quanto tempo terei acesso?',
        a: 'Para sempre. O pagamento é único, sem mensalidade, e o acesso é vitalício.',
      },
      {
        q: 'Posso usar com mais de um filho?',
        // CONFIRMAR regras de uso por escolas/educadores
        a: 'Sim! O kit é para uso da sua família, com quantas crianças você quiser.',
      },
      {
        q: 'E se eu não gostar?',
        a: `Você tem ${g} dias de garantia. Se não ficar satisfeito, pede o reembolso pela Hotmart e recebe 100% do valor de volta.`,
      },
      {
        q: 'Como falo com o suporte?',
        // CONFIRMAR prazo
        a: `Pelo e-mail ${site.empresa.emailSuporte}. Respondemos em até 1 dia útil.`,
      },
    ],
  },

  ctaFinal: {
    tituloPre: 'Seu filho merece descobrir ',
    tituloDestaque: 'o que consegue criar',
    tituloPos: '',
    texto:
      'Dê a ele a chance de construir, inventar, experimentar e se orgulhar do que fez com as próprias mãos. Comece hoje: o acesso é imediato.',
    cta: 'Quero criar com meu filho agora →',
    microcopy: `🔒 Compra segura · Garantia de ${g} dias · Acesso imediato`,
    mascoteAlt: '', // decorativo
  },

  footer: {
    logoAlt: 'Robótica em Casa',
    copyright: `© 2026 ${site.marca} · ${site.empresa.nome} · ${site.empresa.endereco}`,
    suporte: `Suporte: ${site.empresa.emailSuporte}`,
    links: [
      { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
      { label: 'Termos de Uso', href: '/termos-de-uso' },
      { label: 'Política de Cookies', href: '/politica-de-cookies' },
    ],
    hotmart: 'Pagamento processado com segurança pela Hotmart.',
    aviso:
      'Aviso de segurança: todas as atividades devem ser realizadas com a supervisão de um adulto. Alguns projetos utilizam tesoura, cola quente e peças pequenas, que não devem ficar ao alcance de crianças menores de 6 anos sem acompanhamento.',
    meta: 'Este site não é afiliado ao Facebook, Instagram ou à Meta Platforms, Inc.',
  },

  sticky: {
    produto: 'Kit Mega Inventor',
    cta: 'Quero o kit',
  },

  cookies: {
    texto: 'Usamos cookies para melhorar sua experiência e medir nossos anúncios.',
    aceitar: 'Aceitar',
    recusar: 'Recusar',
    link: 'Política de Cookies',
    href: '/politica-de-cookies',
  },

  a11y: {
    pular: 'Pular para o conteúdo',
    fechar: 'Fechar',
    avisoCookies: 'Aviso de cookies',
    linksLegais: 'Links legais',
    ampliar: 'ampliar',
    idiomas: 'Idiomas',
  },

  legal: {
    avisoRevisao: '[CONFIRMAR COM ADVOGADO]',
    atualizado: 'Última atualização: setembro de 2026.',
    privacidade: {
      title: 'Política de Privacidade',
      description: `Política de Privacidade da ${site.marca} (${site.empresa.nome}): dados coletados, finalidade, compartilhamento e direitos do titular.`,
      secoes: [
        {
          h: '1. Quem somos',
          p: [
            `Esta Política de Privacidade é aplicada ao site ${site.marca}, operado por ${site.empresa.nome}, CNPJ ${site.empresa.cnpj}, com endereço em ${site.empresa.endereco}, doravante denominada "Empresa".`,
          ],
        },
        {
          h: '2. Dados coletados',
          p: [
            'Coletamos os seguintes dados: (a) dados de navegação e cookies, mediante seu consentimento, para medição de anúncios (Meta Pixel); (b) dados de compra — nome, e-mail, CPF e dados de pagamento — coletados e processados diretamente pela plataforma Hotmart no momento da transação.',
          ],
        },
        {
          h: '3. Finalidade do tratamento',
          p: [
            'Os dados são utilizados para: processar e entregar o produto digital; enviar comunicações sobre a compra; cumprir obrigações legais e fiscais; e, mediante consentimento, medir a efetividade de anúncios.',
          ],
        },
        {
          h: '4. Compartilhamento de dados',
          p: [
            'Compartilhamos dados com: Hotmart (processamento de pagamento e entrega da área de membros) e Meta Platforms (medição de anúncios, somente após seu consentimento de cookies). Não vendemos dados pessoais a terceiros.',
          ],
        },
        {
          h: '5. Direitos do titular (LGPD — Lei nº 13.709/2018)',
          p: [
            'Você tem direito a confirmar a existência de tratamento, acessar, corrigir, anonimizar, bloquear ou eliminar seus dados, além de solicitar a portabilidade e revogar o consentimento, a qualquer momento e de forma gratuita.',
          ],
        },
        {
          h: '6. Encarregado de dados (DPO)',
          p: [
            `Para exercer seus direitos ou tirar dúvidas sobre esta política, fale com nosso encarregado de dados pelo e-mail ${site.empresa.emailSuporte}.`,
          ],
        },
      ],
    },
    termos: {
      title: 'Termos de Uso',
      description: `Termos de Uso da ${site.marca} (${site.empresa.nome}): licença de uso, garantia, direito de arrependimento e propriedade intelectual.`,
      secoes: [
        {
          h: '1. O produto',
          p: [
            `${site.marca} é um produto digital da ${site.empresa.nome}: kits em PDF com projetos de robótica, ciência, reciclagem e artesanato para crianças de 4 a 10 anos. Nenhum item físico é enviado. As atividades devem ser feitas sempre com supervisão de um adulto.`,
          ],
        },
        {
          h: '2. Licença de uso',
          p: [
            'A compra concede licença de uso pessoal e familiar, intransferível e não exclusiva. É proibida a revenda, redistribuição, compartilhamento público ou uso comercial dos PDFs, no todo ou em parte.',
          ],
        },
        {
          h: '3. Acesso',
          p: [
            'O acesso é liberado por e-mail logo após a confirmação do pagamento, pela área de membros da Hotmart. O pagamento é único e o acesso é vitalício, enquanto a plataforma estiver ativa.',
          ],
        },
        {
          h: '4. Direito de arrependimento e garantia',
          p: [
            `Nos termos do art. 49 do Código de Defesa do Consumidor, você pode pedir o reembolso em até ${g} dias após a compra, diretamente pela Hotmart, com devolução de 100% do valor pago.`,
          ],
        },
        {
          h: '5. Propriedade intelectual',
          p: [
            `Todo o conteúdo (textos, ilustrações, fotos, marca e mascote) é de propriedade de ${site.empresa.nome} e protegido pela legislação de direitos autorais.`,
          ],
        },
        {
          h: '6. Contato',
          p: [`Dúvidas sobre estes termos: ${site.empresa.emailSuporte}.`],
        },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      description: `Política de Cookies da ${site.marca}: o que são cookies, quais usamos e como gerenciar seu consentimento.`,
      secoes: [
        {
          h: '1. O que são cookies',
          p: [
            'Cookies são pequenos arquivos de texto armazenados no seu navegador que ajudam o site a funcionar e a entender como ele é usado.',
          ],
        },
        {
          h: '2. Quais cookies usamos',
          p: [
            'Cookies de preferência (lembram sua escolha no banner de consentimento) e, somente se você aceitar, cookies de medição de publicidade do Meta Pixel (Meta Platforms), usados para medir a efetividade dos nossos anúncios.',
          ],
        },
        {
          h: '3. Como gerenciar',
          p: [
            'Você pode aceitar ou recusar os cookies no banner exibido no site e alterar sua escolha limpando os dados do site no seu navegador. Ao recusar, nenhum cookie de publicidade é carregado.',
          ],
        },
        {
          h: '4. Contato',
          p: [`Dúvidas sobre cookies: ${site.empresa.emailSuporte}.`],
        },
      ],
    },
  },
};

export default content;
export type Content = typeof content;
