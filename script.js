const btn = document.getElementById('theme-toggle');
const html = document.documentElement;

html.dataset.theme = localStorage.getItem('theme') || 'light';

btn.addEventListener('click', () => {
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', html.dataset.theme);
});
