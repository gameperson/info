// theme-switch.js
function toggleTheme() {
    document.body.classList.toggle('light-theme');  // Toggle the light theme class

    // Get all theme icons
    const icons = document.querySelectorAll('img[aria-label="Toggle Theme"]');
    
    // Set the icon source to the light mode icon
    icons.forEach(icon => {
        icon.src = '../images/bulb_white.png'; // Change to the desired icon
    });
}
