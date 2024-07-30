document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('passwordLogin').value;
        const rememberMe = rememberMeCheckbox.checked;
        
        if (username === 'admin' && password === 'passwordLogin') {
            if (rememberMe) {
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('username', username);
            } else {
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('username', username);
            }
            showDisplay();
        } else {
            alert('Wrong login or password !');
        }
    });
});