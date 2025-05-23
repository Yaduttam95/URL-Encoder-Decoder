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

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('urlContent', (data) => {
        if (data.urlContent) {
            document.getElementById('textBox').value = data.urlContent;
        }
    });
});

document.getElementById("encodeButton").addEventListener("click", () => {
    let obj = document.getElementById('textBox');
    let unencoded = obj.value;
    
    let encoded = encodeURIComponent(unencoded).replace(/'/g, "%27").replace(/"/g, "%22");
    obj.value = encoded;

    
    chrome.storage.local.set({ 'urlContent': obj.value });
});

document.getElementById("decodeButton").addEventListener("click", () => {
    let obj = document.getElementById('textBox');
    let encoded = obj.value;
    
    let decoded = decodeURIComponent(encoded.replace(/\+/g, " "));
    obj.value = decoded;

    
    chrome.storage.local.set({ 'urlContent': obj.value });
});