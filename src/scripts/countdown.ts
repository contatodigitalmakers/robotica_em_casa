/**
 * Contador de lançamento: conta até uma DATA FIXA (igual para todos os
 * visitantes, nunca reinicia, nunca usa cookie/localStorage). Quando a data
 * passa, a seção some sozinha no cliente.
 */
const secao = document.querySelector<HTMLElement>('[data-countdown]');

if (secao) {
  const fim = new Date(secao.dataset.countdown || '').getTime();
  const nums = Array.from(secao.querySelectorAll<HTMLElement>('[data-unidade]'));
  const pad = (n: number) => String(n).padStart(2, '0');

  const tick = () => {
    const diff = fim - Date.now();
    if (!Number.isFinite(fim) || diff <= 0) {
      window.clearInterval(timer);
      secao.remove();
      return;
    }
    const s = Math.floor(diff / 1000);
    const valores = [
      Math.floor(s / 86400),
      Math.floor(s / 3600) % 24,
      Math.floor(s / 60) % 60,
      s % 60,
    ];
    nums.forEach((el, i) => {
      el.textContent = pad(valores[i] ?? 0);
    });
  };

  const timer = window.setInterval(tick, 1000);
  tick();
}

export {};
