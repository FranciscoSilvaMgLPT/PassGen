function updateLengthOutput() {
    var length = document.getElementById("length").value;
    document.getElementById("lengthOutput").textContent = length;
}

function generatePassword() {
    var length = document.getElementById("length").value;
    var useUppercase = document.getElementById("uppercase").checked;
    var useNumbers = document.getElementById("numbers").checked;
    var useSymbols = document.getElementById("symbols").checked;

    var charset = "abcdefghijklmnopqrstuvwxyz";
    if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) charset += "0123456789";
    if (useSymbols) charset += "!@#$%^&*()-_=+";

    var password = "";
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById("password").value = password;
}

function copyToClipboard() {
    var passwordInput = document.getElementById("password");
    passwordInput.select();
    document.execCommand("copy");
    alert("Senha copiada para a área de transferência: " + passwordInput.value);
}

document.getElementById("length").addEventListener("input", updateLengthOutput);
