/**
 * Repasse de UTMs: copia utm_*, src, sck e fbclid da URL para os links
 * de checkout da Hotmart, preservando parâmetros já existentes no link.
 */
const entrada = new URLSearchParams(window.location.search);
const repassar = new URLSearchParams();

entrada.forEach((valor, chave) => {
  if (chave.startsWith('utm_') || chave === 'src' || chave === 'sck' || chave === 'fbclid') {
    repassar.append(chave, valor);
  }
});

if (Array.from(repassar).length > 0) {
  document.querySelectorAll<HTMLAnchorElement>('a[data-checkout]').forEach((a) => {
    try {
      const url = new URL(a.href);
      repassar.forEach((valor, chave) => {
        if (!url.searchParams.has(chave)) url.searchParams.set(chave, valor);
      });
      a.href = url.toString();
    } catch {
      /* href inválido: ignora */
    }
  });
}

export {};
