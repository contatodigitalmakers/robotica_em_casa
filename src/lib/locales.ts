/** Idiomas publicados. O português fica na raiz; os outros levam prefixo. */

export const locales = [
  { code: 'pt-br', htmlLang: 'pt-BR', og: 'pt_BR', hreflang: 'pt-BR', prefix: '', label: 'Português' },
  { code: 'en', htmlLang: 'en', og: 'en_US', hreflang: 'en', prefix: '/en', label: 'English' },
  { code: 'fr', htmlLang: 'fr', og: 'fr_FR', hreflang: 'fr', prefix: '/fr', label: 'Français' },
  { code: 'es', htmlLang: 'es-419', og: 'es_419', hreflang: 'es-419', prefix: '/es', label: 'Español' },
  { code: 'it', htmlLang: 'it', og: 'it_IT', hreflang: 'it', prefix: '/it', label: 'Italiano' },
] as const;

export type LocaleCode = (typeof locales)[number]['code'];

const prefixRe = /^\/(en|fr|es|it)(?=\/|$)/;

/** Caminho sem o prefixo de idioma. A raiz vira "/". */
export function pathWithoutLocale(pathname: string): string {
  const stripped = pathname.replace(prefixRe, '');
  if (stripped === '' || stripped === '/') return '/';
  return stripped.endsWith('/') ? stripped.slice(0, -1) : stripped;
}

/** Mesma página no idioma pedido. A versão em português não leva prefixo. */
export function localeHref(code: string, pathname: string): string {
  const loc = locales.find((l) => l.code === code) ?? locales[0];
  const rest = pathWithoutLocale(pathname);
  return rest === '/' ? loc.prefix || '/' : `${loc.prefix}${rest}`;
}

export function localeMeta(code?: string) {
  return locales.find((l) => l.code === code) ?? locales[0];
}
