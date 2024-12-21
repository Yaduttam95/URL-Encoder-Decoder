const textBox = document.getElementById("textBox");

document.getElementById("encodeButton").addEventListener("click", () => {
    var obj = textBox;
    var unencoded = obj.value;
    obj.value = encodeURIComponent(unencoded).replace(/'/g, "%27").replace(/"/g, "%22");
});

document.getElementById("decodeButton").addEventListener("click", () => {
    var obj = textBox;
    var encoded = obj.value;
    obj.value = decodeURIComponent(encoded.replace(/\+/g, " "));
});
