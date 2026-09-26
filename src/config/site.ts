/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * Todos os dados editáveis (preços, links, números, datas) ficam aqui.
 * Os componentes NUNCA escrevem preço/número à mão — sempre interpolam daqui.
 * Itens marcados com CONFIRMAR precisam ser preenchidos antes do lançamento.
 */
export const site = {
  marca: 'Robótica em Casa',
  nomeClube: 'Clube Pequenos Criadores',
  url: 'https://CONFIRMAR.com.br',
  empresa: {
    nome: 'Klf Education',
    cnpj: 'CONFIRMAR',
    endereco: 'CONFIRMAR',
    emailSuporte: 'suport@digitalmnakerss.com',
  },
  /**
   * Checkouts da Hotmart por idioma.
   * es tem página própria. pt-br, fr e it usam os links de en até terem os seus.
   * mirim = oferta de 9,90 · megaDesconto = 19 · mega = 29.
   */
  checkout: {
    en: {
      mirim: 'https://pay.hotmart.com/R107767862M?off=30dy9et1&checkoutMode=10',
      megaDesconto: 'https://pay.hotmart.com/R107767862M?off=qhpe1r8k&checkoutMode=10',
      mega: 'https://pay.hotmart.com/R107767862M?off=5j8dl14m&checkoutMode=10',
    },
    es: {
      mirim: 'https://pay.hotmart.com/H107767964Q?off=0bf42m4r&checkoutMode=10',
      megaDesconto: 'https://pay.hotmart.com/H107767964Q?off=hn6mgttu&checkoutMode=10',
      mega: 'https://pay.hotmart.com/H107767964Q?off=t8sc9j81&checkoutMode=10',
    },
  },
  precos: {
    mirim: { atual: 9.9, anteriorReal: null as number | null },
    mega: {
      atual: 29,
      anteriorReal: null as number | null,
      valorSeparado: null as number | null,
    },
    megaDesconto: { atual: 19 },
  },
  garantiaDias: 7, // CONFIRMAR
  lancamento: {
    fimISO: null as string | null, // ex.: '2026-10-01T23:59:59-03:00' — data fixa e real
    precoDepois: { mirim: null as number | null, mega: null as number | null },
  },
  provaSocial: {
    familias: null as number | null, // ex.: 15000 — SÓ se for real e comprovável
    anosDesenvolvimento: null as number | null,
  },
  depoimentos: { ativo: true },
  fundadores: {
    nomes: 'CONFIRMAR',
    descricao: 'Pais, educadores e apaixonados por infâncias criativas',
  },
  metaPixelId: null as string | null,
};

/** Links de checkout da página. Espanhol tem os próprios; as outras línguas usam o inglês. */
export function checkoutDo(locale?: string) {
  return locale === 'es' ? site.checkout.es : site.checkout.en;
}
