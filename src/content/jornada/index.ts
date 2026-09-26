import type { Jornada } from './pt-br';
import ptBR from './pt-br';
import en from './en';
import es from './es';
import fr from './fr';
import it from './it';

const mapa: Record<string, Jornada> = {
  'pt-br': ptBR,
  en,
  es,
  fr,
  it,
};

export function getJornada(locale?: string): Jornada {
  return (locale && mapa[locale]) || ptBR;
}

export type { Jornada };
