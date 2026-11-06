// Nexus - interactividad básica

// 1. Cambio de tema claro/oscuro (persiste en localStorage)
(function initTheme() {
    const root = document.documentElement;
    const saved = localStorage.getItem('nexus-theme');
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const theme = saved || preferred;
    root.setAttribute('data-bs-theme', theme);

    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', () => {
            const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-bs-theme', next);
            localStorage.setItem('nexus-theme', next);
            btn.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
        });
    }
})();

// 2. Filtro de búsqueda en biblioteca/descubrir (manipulación del DOM)
(function initSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;
    const cards = document.querySelectorAll('.card');
    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        cards.forEach((card) => {
            const title = (card.querySelector('.card-title')?.textContent || '').toLowerCase();
            card.closest('.col')?.classList.toggle('d-none', q !== '' && !title.includes(q));
        });
    });
})();