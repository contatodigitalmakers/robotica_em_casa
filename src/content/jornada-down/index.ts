import type { JornadaDown } from './pt-br';
import ptBR from './pt-br';
import en from './en';
import es from './es';
import fr from './fr';
import it from './it';

const mapa: Record<string, JornadaDown> = {
  'pt-br': ptBR,
  en,
  es,
  fr,
  it,
};

export function getJornadaDown(locale?: string): JornadaDown {
  return (locale && mapa[locale]) || ptBR;
}

export type { JornadaDown };
