import type { Obrigado } from './pt-br';
import ptBR from './pt-br';
import en from './en';
import es from './es';
import fr from './fr';
import it from './it';

const mapa: Record<string, Obrigado> = {
  'pt-br': ptBR,
  en,
  es,
  fr,
  it,
};

export function getObrigado(locale?: string): Obrigado {
  return (locale && mapa[locale]) || ptBR;
}

export type { Obrigado };
