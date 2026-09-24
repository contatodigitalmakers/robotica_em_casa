/**
 * As fotos dos carrosséis ficam num <template> para não baixar no primeiro segundo.
 * A faixa é montada quando a seção chega a ~800px da tela, ou no idle se já estiver perto.
 */
const MARGEM = 800;

function montar(root: HTMLElement) {
  if (root.dataset.montado === 'true') return;
  const tpl = root.querySelector('template');
  if (!tpl) return;
  root.dataset.montado = 'true';
  tpl.replaceWith(tpl.content.cloneNode(true));
}

function perto(el: HTMLElement) {
  const caixa = el.getBoundingClientRect();
  return caixa.top < window.innerHeight + MARGEM && caixa.bottom > -MARGEM;
}

function noIdle(fn: () => void) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(fn, { timeout: 1200 });
  } else {
    setTimeout(fn, 1200);
  }
}

document.querySelectorAll<HTMLElement>('[data-defer-marquee]').forEach((root) => {
  if (perto(root)) {
    noIdle(() => montar(root));
    return;
  }

  if (!('IntersectionObserver' in window)) {
    montar(root);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      montar(root);
    },
    { rootMargin: `${MARGEM}px` },
  );
  io.observe(root);
});

export {};
