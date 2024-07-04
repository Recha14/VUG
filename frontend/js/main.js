// Remember me
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedIn') === 'true' || sessionStorage.getItem('loggedIn') === 'true') {
        showDisplay();
    }
});
