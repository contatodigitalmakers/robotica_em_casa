/**
 * Resolver de conteúdo por idioma.
 * As páginas chamam getContent(Astro.currentLocale).
 */
import ptBR from './pt-br';
import en from './en';
import fr from './fr';
import es from './es';
import it from './it';
import type { Content } from './pt-br';

const mapa: Record<string, Content> = {
  'pt-br': ptBR,
  en,
  fr,
  es,
  it,
};

export function getContent(locale?: string): Content {
  return (locale && mapa[locale]) || ptBR;
}

export type { Content };
