const form = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const phoneInput = document.querySelector("#phone");

const nameMessage = document.querySelector("#nameMessage");
const emailMessage = document.querySelector("#emailMessage");
const passwordMessage = document.querySelector("#passwordMessage");
const confirmMessage = document.querySelector("#confirmMessage");
const phoneMessage = document.querySelector("#phoneMessage");

const strengthFill = document.querySelector("#strengthFill");

const submitBtn = document.querySelector("#submitBtn");

const validations = {
    name: false,
    email: false,
    password: false,
    confirm: false,
    phone: false
};

function validateName() {

    const value = nameInput.value.trim();

    if (value.length >= 2 && value.length <= 50) {

        validations.name = true;

        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");

        nameMessage.textContent = "✅ Valid name";
        nameMessage.className = "success";
    }

    else {

        validations.name = false;

        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");

        nameMessage.textContent =
            "❌ Name must be 2-50 characters";

        nameMessage.className = "error";
    }

    updateSubmitButton();
}

function validateEmail() {

    const value = emailInput.value.trim();

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(value)) {

        validations.email = true;

        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");

        emailMessage.textContent = "✅ Valid email";
        emailMessage.className = "success";
    }

    else {

        validations.email = false;

        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");

        emailMessage.textContent =
            "❌ Invalid email format";

        emailMessage.className = "error";
    }

    updateSubmitButton();
}

function validatePassword() {

    const value = passwordInput.value;

    let strength = 0;

    if (value.length >= 8) {
        strength++;
    }

    if (/[A-Za-z]/.test(value) && /\d/.test(value)) {
        strength++;
    }

    if (
        /[a-z]/.test(value) &&
        /[A-Z]/.test(value) &&
        /\d/.test(value) &&
        /[^A-Za-z0-9]/.test(value)
    ) {
        strength++;
    }

    if (strength === 1) {

        strengthFill.style.width = "33%";
        strengthFill.style.background = "#ef4444";

        passwordMessage.textContent = "Weak password";
        passwordMessage.className = "error";
    }

    if (strength === 2) {

        strengthFill.style.width = "66%";
        strengthFill.style.background = "#eab308";

        passwordMessage.textContent = "Medium password";
        passwordMessage.className = "success";
    }

    if (strength === 3) {

        strengthFill.style.width = "100%";
        strengthFill.style.background = "#22c55e";

        passwordMessage.textContent = "Strong password";
        passwordMessage.className = "success";
    }

    if (strength === 0) {

        strengthFill.style.width = "0%";

        passwordMessage.textContent =
            "Password too short";

        passwordMessage.className = "error";
    }

    validations.password = strength >= 2;

    validateConfirm();

    updateSubmitButton();
}

function validateConfirm() {

    if (
        confirmInput.value &&
        confirmInput.value === passwordInput.value
    ) {

        validations.confirm = true;

        confirmInput.classList.add("valid");
        confirmInput.classList.remove("invalid");

        confirmMessage.textContent =
            "✅ Password matched";

        confirmMessage.className = "success";
    }

    else {

        validations.confirm = false;

        confirmInput.classList.add("invalid");
        confirmInput.classList.remove("valid");

        confirmMessage.textContent =
            "❌ Password does not match";

        confirmMessage.className = "error";
    }

    updateSubmitButton();
}

function validatePhone() {

    let value =
        phoneInput.value.replace(/\D/g, "");

    value = value.substring(0, 10);

    if (value.length > 4 && value.length <= 7) {

        value =
            value.slice(0, 4) +
            "-" +
            value.slice(4);
    }

    if (value.length > 7) {

        value =
            value.slice(0, 4) +
            "-" +
            value.slice(4, 7) +
            "-" +
            value.slice(7);
    }

    phoneInput.value = value;

    const digits =
        value.replace(/\D/g, "");

    if (digits.length === 10) {

        validations.phone = true;

        phoneInput.classList.add("valid");
        phoneInput.classList.remove("invalid");

        phoneMessage.textContent =
            "✅ Valid phone number";

        phoneMessage.className = "success";
    }

    else {

        validations.phone = false;

        phoneInput.classList.add("invalid");
        phoneInput.classList.remove("valid");

        phoneMessage.textContent =
            "❌ Phone must be 10 digits";

        phoneMessage.className = "error";
    }

    updateSubmitButton();
}

function updateSubmitButton() {

    const isValid =
        Object.values(validations)
            .every(value => value);

    submitBtn.disabled = !isValid;
}

function showSuccessModal() {

    const modal = document.createElement("div");

    modal.classList.add("modal");

    const content = document.createElement("div");

    content.classList.add("modal-content");

    const title = document.createElement("h2");

    title.textContent =
        "Đăng ký thành công!";

    const info = document.createElement("p");

    info.innerHTML = `
        Name: ${nameInput.value}<br>
        Email: ${emailInput.value}<br>
        Phone: ${phoneInput.value}
    `;

    const closeBtn =
        document.createElement("button");

    closeBtn.textContent = "Close";

    closeBtn.classList.add("close-modal");

    content.append(
        title,
        info,
        closeBtn
    );

    modal.appendChild(content);

    document.body.appendChild(modal);

    closeBtn.addEventListener("click", () => {
        modal.remove();
    });
}

nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

passwordInput.addEventListener(
    "input",
    validatePassword
);

confirmInput.addEventListener(
    "input",
    validateConfirm
);

phoneInput.addEventListener(
    "input",
    validatePhone
);

form.addEventListener("submit", (e) => {

    e.preventDefault();

    showSuccessModal();

    form.reset();

    strengthFill.style.width = "0%";

    submitBtn.disabled = true;
});