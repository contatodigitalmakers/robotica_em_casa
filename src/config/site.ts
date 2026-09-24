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
  checkout: {
    mirim: 'https://pay.hotmart.com/CONFIRMAR',
    mega: 'https://pay.hotmart.com/CONFIRMAR',
    megaDesconto: 'https://pay.hotmart.com/CONFIRMAR',
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
