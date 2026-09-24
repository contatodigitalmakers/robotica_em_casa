/**
 * Banner de cookies (LGPD) + carregamento condicional do Meta Pixel.
 * O pixel SÓ carrega se o usuário aceitar e se metaPixelId estiver configurado.
 * A escolha fica em localStorage (com try/catch).
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

const banner = document.querySelector<HTMLElement>('[data-cookie-banner]');
const CHAVE = 'rec-consentimento';

function ler(): string | null {
  try {
    return localStorage.getItem(CHAVE);
  } catch {
    return null;
  }
}

function gravar(valor: string) {
  try {
    localStorage.setItem(CHAVE, valor);
  } catch {
    /* armazenamento indisponível: segue sem persistir */
  }
}

function carregarPixel() {
  const id = banner?.dataset.pixel;
  if (!id) return;
  const iniciar = () => {
    // snippet oficial do Meta Pixel (carregado somente após consentimento)
    const w = window as any;
    if (w.fbq) return;
    const n = (w.fbq = function (...args: unknown[]) {
      if (n.callMethod) n.callMethod(...args);
      else n.queue.push(args);
    });
    if (!w._fbq) w._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(s);
    w.fbq('init', id);
    w.fbq('track', 'PageView');
  };
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(iniciar, { timeout: 2000 });
  } else {
    setTimeout(iniciar, 2000);
  }
}

// InitiateCheckout no clique dos botões de checkout (só dispara se o pixel existir)
document.addEventListener('click', (e) => {
  const alvo = (e.target as Element | null)?.closest?.('[data-checkout]');
  const w = window as any;
  if (alvo && typeof w.fbq === 'function') w.fbq('track', 'InitiateCheckout');
});

if (banner) {
  const escolha = ler();
  if (escolha === 'aceito') {
    carregarPixel();
  } else if (escolha !== 'recusado') {
    banner.hidden = false;
    document.body.classList.add('consent-pendente');
  }

  const decidir = (valor: string) => {
    gravar(valor);
    banner.hidden = true;
    document.body.classList.remove('consent-pendente');
    if (valor === 'aceito') carregarPixel();
  };

  banner.querySelector('[data-aceitar]')?.addEventListener('click', () => decidir('aceito'));
  banner.querySelector('[data-recusar]')?.addEventListener('click', () => decidir('recusado'));
}

export {};
