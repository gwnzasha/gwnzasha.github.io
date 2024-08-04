const themeToggle = document.getElementById('theme-toggle');

    // Set the initial theme based on local storage or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '🌞' : '🌙';

    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', () => {
        let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '🌞' : '🌙';
        localStorage.setItem('theme', newTheme);
    });