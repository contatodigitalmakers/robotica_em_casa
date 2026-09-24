/** Formatação de moeda e data sempre via Intl — nunca escrever preço/data à mão. */

const intlTag: Record<string, string> = {
  'pt-br': 'pt-BR',
  en: 'en',
  fr: 'fr',
  es: 'es-419',
  it: 'it',
};

function tag(locale?: string): string {
  return intlTag[locale ?? 'pt-br'] ?? 'pt-BR';
}

/** Euro, com o separador da língua da página. */
export function formatEUR(valor: number, locale?: string): string {
  return new Intl.NumberFormat(tag(locale), {
    style: 'currency',
    currency: 'EUR',
  }).format(valor);
}

/** Data e hora no fuso de Brasília, na língua da página. */
export function formatDataHoraBR(iso: string, locale?: string): string {
  return new Intl.DateTimeFormat(tag(locale), {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(iso));
}

/** Número grande no separador da língua da página: 15000 → "15.000" ou "15,000". */
export function formatNumero(n: number, locale?: string): string {
  return new Intl.NumberFormat(tag(locale)).format(n);
}
