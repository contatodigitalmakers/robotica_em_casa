/**
 * Sticky CTA mobile: aparece quando o hero sai da tela e some quando
 * a seção de ofertas ou o footer estão visíveis (IntersectionObserver).
 */
const barra = document.querySelector<HTMLElement>('[data-sticky]');

if (barra && window.matchMedia('(max-width: 767px)').matches && 'IntersectionObserver' in window) {
  barra.hidden = false;
  let heroFora = false;
  let bloqueado = false;

  const atualiza = () => {
    if (heroFora && !bloqueado) barra.setAttribute('data-visivel', '');
    else barra.removeAttribute('data-visivel');
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.target.hasAttribute('data-hero')) heroFora = !e.isIntersecting;
        else bloqueado = e.isIntersecting; // #ofertas ou footer visíveis
      }
      atualiza();
    },
    { threshold: 0 }
  );

  for (const sel of ['[data-hero]', '[data-ofertas]', '[data-footer]']) {
    const el = document.querySelector(sel);
    if (el) observer.observe(el);
  }
}

export {};
