document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('loginButton');
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    registerButton.addEventListener('click', () => {
        registrationForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    loginButton.addEventListener('click', () => {
        loginForm.style.display = 'block';
        registrationForm.style.display = 'none';
    });

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const favoriteGame = document.getElementById('favoriteGame').value;
        const profilePicture = document.getElementById('profilePicture').value;
        alert(Zarejestrowano użytkownika: ${ username }(${ email }));
        registrationForm.style.display = 'none';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;
        alert(Zalogowano użytkownika: ${ loginEmail });
        loginForm.style.display = 'none';
    });
});