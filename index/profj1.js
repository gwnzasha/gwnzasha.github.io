document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.getElementById('theme-toggle').classList.toggle('dark-mode', newTheme === 'dark');
    document.getElementById('theme-toggle').classList.toggle('light-mode', newTheme === 'light');
});
