const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const errorMessage = document.getElementById("errorMessage");

const characterSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+{}[]<>?/|~"
};


// Update displayed password length
lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
});


// Generate password
function generatePassword() {

    let characterPool = "";

    if (uppercase.checked) {
        characterPool += characterSets.uppercase;
    }

    if (lowercase.checked) {
        characterPool += characterSets.lowercase;
    }

    if (numbers.checked) {
        characterPool += characterSets.numbers;
    }

    if (symbols.checked) {
        characterPool += characterSets.symbols;
    }

    // Check if no character type is selected
    if (characterPool.length === 0) {
        passwordInput.value = "";
        errorMessage.textContent =
            "Please select at least one character type.";
        return;
    }

    errorMessage.textContent = "";

    const passwordLength = Number(lengthInput.value);
    let password = "";

    // Pick random characters from the pool
    for (let i = 0; i < passwordLength; i++) {

        const randomIndex = Math.floor(
            Math.random() * characterPool.length
        );

        password += characterPool[randomIndex];
    }

    passwordInput.value = password;
}


// Generate button
generateBtn.addEventListener("click", generatePassword);


// Copy password
copyBtn.addEventListener("click", async () => {

    const password = passwordInput.value;

    if (!password) {
        errorMessage.textContent = "Generate a password first.";
        return;
    }

    try {
        await navigator.clipboard.writeText(password);

        copyBtn.textContent = "Copied!";

        setTimeout(() => {
            copyBtn.textContent = "Copy";
        }, 1500);

    } catch (error) {
        errorMessage.textContent = "Unable to copy password.";
    }
});


// Generate a password when the page loads
generatePassword();