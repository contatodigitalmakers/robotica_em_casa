/**
 * Contador da oferta de lançamento.
 * "hoje": fim do dia civil em Brasília (23:59:59-03:00). À meia-noite recomeça
 * sozinho. Data ISO: conta até essa data fixa e a seção some quando passa.
 * Nunca usa cookie nem localStorage.
 */
const secao = document.querySelector<HTMLElement>('[data-countdown]');

if (secao) {
  const modoHoje = secao.dataset.countdown === 'hoje';
  const nums = Array.from(secao.querySelectorAll<HTMLElement>('[data-unidade]'));
  const pad = (n: number) => String(n).padStart(2, '0');

  const fimDoDiaBrasilia = (agora = Date.now()) => {
    const dia = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Sao_Paulo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    let fim = new Date(`${dia.format(agora)}T23:59:59-03:00`).getTime();
    if (fim <= agora) fim = new Date(`${dia.format(agora + 60_000)}T23:59:59-03:00`).getTime();
    return fim;
  };

  const alvo = () =>
    modoHoje ? fimDoDiaBrasilia() : new Date(secao.dataset.countdown || '').getTime();

  const tick = () => {
    const fim = alvo();
    const diff = fim - Date.now();
    if (!modoHoje && (!Number.isFinite(fim) || diff <= 0)) {
      window.clearInterval(timer);
      secao.remove();
      return;
    }
    const s = Math.max(0, Math.floor(diff / 1000));
    const valores = modoHoje
      ? [Math.floor(s / 3600), Math.floor(s / 60) % 60, s % 60]
      : [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60];
    nums.forEach((el, i) => {
      el.textContent = pad(valores[i] ?? 0);
    });
  };

  const timer = window.setInterval(tick, 1000);
  tick();
}

export {};
