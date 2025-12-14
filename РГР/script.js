const logBox = document.getElementById("log");


function log(text) {
const line = document.createElement("div");
line.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
logBox.appendChild(line);
}


document.getElementById("encrypt").onclick = () => {
const text = encText.value;
const key = encKey.value;


if (!text || !key) {
log("Помилка: введіть текст і ключ");
return;
}


const encrypted = CryptoJS.AES.encrypt(text, key).toString();
encOut.value = encrypted;
log("Текст зашифровано");
};


document.getElementById("decrypt").onclick = () => {
const text = decText.value;
const key = decKey.value;


if (!text || !key) {
log("Помилка: введіть шифр і ключ");
return;
}


try {
const bytes = CryptoJS.AES.decrypt(text, key);
const decrypted = bytes.toString(CryptoJS.enc.Utf8);


if (!decrypted) throw new Error();


decOut.value = decrypted;
log("Текст розшифровано");
} catch {
log("Помилка розшифрування (ключ невірний)");
}
};