(() => {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const icon = () => btn.textContent = document.documentElement.getAttribute('data-theme') === 'light' ? '◑' : '◐';
  icon();
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    icon();
  });
})();
