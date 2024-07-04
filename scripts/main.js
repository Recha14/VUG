document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('password-strength-text');
    const strengthTextInfo = document.getElementById('password-strength-info');

    passwordInput.addEventListener('input', updatePasswordStrength);

    function updatePasswordStrength() {
        const strength = getPasswordStrength(passwordInput.value);
        strengthBar.style.width = strength.percent + '%';
        strengthBar.style.backgroundColor = strength.color;
        strengthText.textContent = strength.message;
        strengthTextInfo.textContent = strength.info;
    }

    function getPasswordStrength(password) {
        let strength = {
            percent: 0,
            message: '',
            color: 'red'
        };

        if (password.length === 0) {
            strength.message = '';
        } else if (password.length < 6) {
            strength.percent = 20;
            strength.message = 'Bardzo słabe';
            strength.info = 'Hasło powinno zawierać minimum 8 znaków, mała cyfra, duża cyfra, znak specjalny, liczbę';
            strength.color = 'red';
        } else {
            let score = 0;
            if (/[a-z]/.test(password)) score += 20; // lower case
            if (/[A-Z]/.test(password)) score += 20; // upper case
            if (/[0-9]/.test(password)) score += 20; // digits
            if (/[^A-Za-z0-9]/.test(password)) score += 20; // special characters
            if (password.length >= 8) score += 20; // length

            if (score <= 40) {
                strength.percent = score;
                strength.message = 'Słabe';
                strength.info = 'Hasło powinno zawierać minimum 8 znaków, mała cyfra, duża cyfra, znak specjalny, liczbę';
                strength.color = 'orange';
            } else if (score <= 80) {
                strength.percent = score;
                strength.message = 'Średnie';
                strength.info = 'Hasło powinno zawierać minimum 8 znaków, mała cyfra, duża cyfra, znak specjalny, liczbę';
                strength.color = 'yellow';
            } else {
                strength.percent = score;
                strength.message = 'Mocne';
                strength.info = 'Bardzo dobre hasło';
                strength.color = 'green';
            }
        }

        return strength;
    }
});