document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');
    
    modeToggle.addEventListener('change', function () {
        if (modeToggle.checked) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    });

    // Check the user's preference from localStorage
    if (localStorage.getItem('mode') === 'dark') {
        enableDarkMode();
        modeToggle.checked = true;
    }
});

function enableDarkMode() {
    document.body.style.backgroundColor = '#333';
    localStorage.setItem('mode', 'dark');
}

function enableLightMode() {
    document.body.style.backgroundColor = 'white';
    localStorage.setItem('mode', 'light');
}
