/**
 * Galerias scroll-snap: setas prev/next (desktop) + lightbox com <dialog> nativo.
 * Sem biblioteca. O <dialog> já prende o foco e devolve o foco ao fechar.
 */
function initGallery(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('[data-gallery-track]');
  const prev = root.querySelector<HTMLButtonElement>('[data-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-next]');

  if (track && prev && next) {
    const passo = () => {
      const item = track.querySelector('li');
      return item ? item.getBoundingClientRect().width + 20 : 300;
    };
    prev.addEventListener('click', () => track.scrollBy({ left: -passo(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: passo(), behavior: 'smooth' }));
  }

  const dialog = root.querySelector<HTMLDialogElement>('[data-lightbox]');
  if (!dialog) return;

  const img = dialog.querySelector('img');
  const caption = dialog.querySelector('.lightbox__caption');
  if (!img) return;

  // delegação: os botões nascem depois, quando o carrossel sai do <template>
  root.addEventListener('click', (event) => {
    const alvo = event.target;
    if (!(alvo instanceof Element)) return;
    const btn = alvo.closest<HTMLButtonElement>('[data-full]');
    if (!btn) return;
    img.src = btn.dataset.full || '';
    img.alt = btn.querySelector('img')?.alt || '';
    if (caption) caption.textContent = btn.dataset.caption || '';
    dialog.showModal();
  });

  dialog.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close(); // clique fora
  });
  dialog.addEventListener('close', () => {
    img.src = ''; // libera a imagem ao fechar (ESC, × ou clique fora)
  });
}

document.querySelectorAll<HTMLElement>('[data-gallery]').forEach(initGallery);

export {};
