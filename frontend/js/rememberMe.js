function showDisplay() {
    const loginContainer = document.querySelector('.loginContainer');
    
    const username = localStorage.getItem('username') || sessionStorage.getItem('username');
    
    loginContainer.style.display = 'none';
    displayContainer.style.display = 'block';
}
