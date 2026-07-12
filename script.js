// Elementos generales
const loginForm = document.getElementById('login-form');
const resetSection = document.getElementById('reset-section');
const verifySection = document.getElementById('verify-section');
const createAccountSection = document.getElementById('create-account-section');
const passwordSection = document.getElementById('password-section');

// Inputs del formulario de inicio de sesión
const emailInput = document.getElementById('email');
const loginPasswordInput = document.getElementById('login-password');
const rememberCheckbox = document.getElementById('remember');

// Inputs y elementos de recuperación / verificación
const userEmailSpan = document.getElementById('user-email');
const verifyEmailSpan = document.getElementById('verify-email');
const continueButton = document.getElementById('continue-button');

// Inputs del formulario de crear cuenta
const newEmailInput = document.getElementById('new-email');

// Inputs de la sección de contraseña (crear cuenta)
const editEmailInput = document.getElementById('edit-email');
const createPasswordInput = document.getElementById('create-password');

// Función para ocultar todas las secciones, garantizando el uso consistente de la clase `.hidden`
function hideAllSections() {
    loginForm.classList.add('hidden');
    resetSection.classList.add('hidden');
    verifySection.classList.add('hidden');
    createAccountSection.classList.add('hidden');
    passwordSection.classList.add('hidden');
}

// Navegación
function showCreateAccount(event) {
    if(event) event.preventDefault();
    hideAllSections();
    createAccountSection.classList.remove('hidden');
    loginForm.reset();
}

function showLogin(event) {
    if(event) event.preventDefault();
    hideAllSections();
    loginForm.classList.remove('hidden');
}

function showReset(event) {
    if(event) event.preventDefault();
    const email = emailInput.value.trim();

    if (!email || !validateEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        continueButton.disabled = true;
        return;
    }
    userEmailSpan.textContent = email;
    
    hideAllSections();
    resetSection.classList.remove("hidden");
    continueButton.disabled = false;
}

function continueToPasswordSection() {
    const email = newEmailInput.value.trim();
    if (!email || !validateEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }
    editEmailInput.value = email;
    hideAllSections();
    passwordSection.classList.remove('hidden');
}

function editEmail() {
    editEmailInput.disabled = false;
    editEmailInput.focus();
}

// Función para mostrar u ocultar la contraseña (Accesibilidad mejorada)
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = passwordInput.parentElement.querySelector('.toggle-password');
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        if(eyeIcon) eyeIcon.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        if(eyeIcon) eyeIcon.textContent = "👁️";
    }
}

// Finalizar creación de cuenta
function finishCreateAccount() {
    const newEmail = editEmailInput.value.trim();
    if (!newEmail || !validateEmail(newEmail)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }
    alert("Cuenta creada con éxito para " + newEmail);
    showLogin();
}

// Verifica si hay datos guardados y los muestra al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const savedEmail = localStorage.getItem('rememberedEmail');

    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberCheckbox.checked = true;
    }
});

// Función para guardar el correo si "Acuérdate de mí" está marcado
function handleRememberMe() {
    const email = emailInput.value.trim();
    // Por seguridad ya NO guardamos la contraseña en LocalStorage, solo el correo.
    if (rememberCheckbox.checked && email) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail'); 
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function handleContinueReset() {
    const email = emailInput.value || "[correo no ingresado]";
    verifyEmailSpan.textContent = email;
    hideAllSections();
    verifySection.classList.remove("hidden");
}

function verifyCode() {
    alert("Código verificado correctamente.");
}

function resendEmail(event) {
    if(event) event.preventDefault();
    alert("Correo de verificación reenviado.");
}

// --- Asignación de Eventos ---

// Manejar el submit del login para evitar recarga de página al hacer click en iniciar sesión
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = emailInput.value.trim();
    const pass = loginPasswordInput.value.trim();
    
    if (email && pass) {
        alert("Iniciando sesión para " + email);
    }
});

// Botones de navegación
document.getElementById('create-account-link').addEventListener('click', showCreateAccount);
document.getElementById('forgot-password-link').addEventListener('click', showReset);

document.querySelectorAll('.back-to-login').forEach(link => {
    link.addEventListener('click', showLogin);
});

document.getElementById('btn-continue-password').addEventListener('click', continueToPasswordSection);
document.getElementById('btn-edit-email').addEventListener('click', editEmail);
document.getElementById('btn-handle-continue').addEventListener('click', handleContinueReset);
document.getElementById('resend-email').addEventListener('click', resendEmail);
document.getElementById('btn-finish-create-account').addEventListener('click', finishCreateAccount);
document.getElementById('continue-button').addEventListener('click', verifyCode);

emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();
    if (email && validateEmail(email)) {
        continueButton.disabled = false;
    } else {
        continueButton.disabled = true;
    }
});

// Checkbox "Acuérdate de mí"
rememberCheckbox.addEventListener('change', handleRememberMe);
