# 🔐 Random Password Generator

A simple, responsive, and user-friendly **Random Password Generator** built using **HTML5, CSS3, and JavaScript**.

The application allows users to generate random passwords with a customizable length and selectable character types such as uppercase letters, lowercase letters, numbers, and symbols.

---

## ✨ Features

* 🔢 Adjustable password length using a slider
* 🔠 Uppercase letters (`A-Z`)
* 🔡 Lowercase letters (`a-z`)
* 🔢 Numbers (`0-9`)
* 🔣 Symbols (`!@#$%^&*`)
* 🎲 Random password generation
* 📋 Copy password to clipboard
* ⚠️ Handles the case when no character type is selected
* 📱 Responsive design for desktop and mobile devices
* 🎨 Clean and modern user interface
* 🚀 Automatically generates a password when the page loads

---

## 🛠️ Technologies Used

| Technology | Purpose                                         |
| ---------- | ----------------------------------------------- |
| HTML5      | Page structure and UI elements                  |
| CSS3       | Styling, layout, responsiveness, and animations |
| JavaScript | Password generation and user interactions       |

---

## 📁 Project Structure

```text
random-password-generator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Description

#### `index.html`

Contains the structure of the application, including:

* Password display field
* Copy button
* Password length slider
* Character-type checkboxes
* Generate Password button
* Error message area

#### `style.css`

Contains the complete styling of the application:

* Gradient background
* Card layout
* Buttons
* Form controls
* Responsive design
* Hover effects

#### `script.js`

Contains the application's functionality:

* Character pool creation
* Random password generation
* Password length handling
* Checkbox handling
* Error handling
* Copy-to-clipboard functionality

---

## ⚙️ How It Works

### 1. Select Password Length

The user can select a password length between **4 and 50 characters** using the slider.

```javascript
const passwordLength = Number(lengthInput.value);
```

The selected length is displayed next to the slider.

---

### 2. Select Character Types

Users can choose which characters should be included in the password:

* Uppercase letters
* Lowercase letters
* Numbers
* Symbols

The application stores these characters in separate character sets:

```javascript
const characterSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+{}[]<>?/|~"
};
```

---

### 3. Build the Character Pool

JavaScript checks which checkboxes are selected.

For example:

```javascript
if (uppercase.checked) {
    characterPool += characterSets.uppercase;
}
```

If the user selects uppercase letters and numbers, the character pool will contain:

```text
ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
```

---

### 4. Generate Random Characters

The application uses `Math.random()` to select random characters from the character pool.

```javascript
const randomIndex = Math.floor(
    Math.random() * characterPool.length
);
```

The selected character is then added to the password:

```javascript
password += characterPool[randomIndex];
```

This process repeats until the requested password length is reached.

---

### 5. Handle No Selection

If the user unchecks every character type, the application prevents password generation and displays an error:

```javascript
if (characterPool.length === 0) {
    passwordInput.value = "";
    errorMessage.textContent =
        "Please select at least one character type.";
    return;
}
```

This prevents the application from trying to generate a password from an empty character pool.

---

### 6. Copy to Clipboard

The generated password can be copied using the **Copy** button.

The application uses the browser's Clipboard API:

```javascript
await navigator.clipboard.writeText(password);
```

After successfully copying, the button temporarily changes to:

```text
Copied!
```

---

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser such as:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

No backend or additional dependencies are required.

---

## 💻 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/random-password-generator.git
```

### 2. Navigate to the Project

```bash
cd random-password-generator
```

### 3. Open the Project

Open `index.html` in your browser.

You can also use **VS Code with Live Server** for development.

---

## 🎯 Learning Objectives

This project was created to practice:

* HTML form elements
* Checkbox inputs
* Range sliders
* DOM manipulation
* JavaScript event listeners
* String building
* Arrays/objects
* Conditional statements
* Loops
* `Math.random()`
* Clipboard API
* Basic error handling
* Responsive CSS

---

## 📚 Concepts Practiced

### DOM Selection

```javascript
document.getElementById("password");
```

### Event Listeners

```javascript
generateBtn.addEventListener("click", generatePassword);
```

### Checkbox Validation

```javascript
if (uppercase.checked) {
    ...
}
```

### Randomization

```javascript
Math.random();
```

### String Building

```javascript
characterPool += characterSets.numbers;
```

### Clipboard API

```javascript
navigator.clipboard.writeText(password);
```

---

## 📸 Screenshots

Add screenshots of your application here:

```markdown
![Password Generator Screenshot](screenshots/password-generator.png)
```

Recommended folder structure:

```text
random-password-generator/
│
├── screenshots/
│   └── password-generator.png
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🌐 Live Demo

Add your deployed project link here after hosting it:

**Live Demo:** [Your Live Demo](https://your-live-demo-url.com)

You can deploy this project using services such as GitHub Pages, Netlify, or Vercel.

---

## 🔮 Future Improvements

Possible improvements include:

* 🔒 Password strength indicator
* 📊 Strength meter
* 👁️ Show/hide generated password
* 📋 Improved clipboard feedback
* 🌙 Dark mode
* ⚡ Use `crypto.getRandomValues()` for stronger randomness
* 🎯 Guarantee at least one character from every selected category
* 📜 Password generation history
* ⚙️ Customizable symbol sets

---

## 🔐 Security Note

This project is primarily designed for **learning and demonstration purposes**.

The current implementation uses:

```javascript
Math.random()
```

For passwords protecting important real-world accounts, a cryptographically secure random number generator such as:

```javascript
crypto.getRandomValues()
```

is more appropriate.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add new feature"
```

5. Push the branch.

```bash
git push origin feature/new-feature
```

6. Open a Pull Request.

---



