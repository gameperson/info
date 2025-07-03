// theme-switch.js
function toggleTheme() {
    const body = document.body;
    const isLight = body.classList.toggle('light-theme');

    // Pick icon name based on theme
    const iconName = isLight ? 'bulb_dark.png' : 'bulb_white.png';

    // Match all theme icons (update selector if needed)
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(icon => {
        icon.src = `/info/res/images/${iconName}`;
    });

    // Optionally, persist preference
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// On page load: set theme from saved preference
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        document.body.classList.add('light-theme');
    }
});