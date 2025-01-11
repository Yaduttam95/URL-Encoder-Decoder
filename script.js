const themeToggleButton = document.getElementById("themeToggleButton");

let isDarkMode = false;

function toggleTheme() {
    if (isDarkMode) {
        document.body.style.filter = "invert(0)";
        document.body.style.backgroundColor = "#f9f9f9";
    } else {
        document.body.style.filter = "invert(1)";
        document.body.style.backgroundColor = "#000";
    }
    isDarkMode = !isDarkMode;
}

themeToggleButton.addEventListener("click", toggleTheme);