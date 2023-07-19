
const themeToggle = document.getElementById('themeToggle');

const themeStylesheet = document.getElementById('themeStylesheet');

const currentTheme = localStorage.getItem('theme') || 'light';

themeStylesheet.href = currentTheme == 'light' ? 'light.css' : 'dark.css';

function toggleTheme() {
    document.body.classList.toggle('dark');
  
  themeStylesheet.href = themeStylesheet.href.includes('light.css') ? 'dark.css' : 'light.css';
  
  const newTheme = themeStylesheet.href.includes('light.css') ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
}

themeToggle.addEventListener('click', toggleTheme);
