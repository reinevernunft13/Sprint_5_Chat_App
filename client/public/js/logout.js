document.querySelector('.button-logout').addEventListener('click', () => {
    const leaveRoom = confirm('Are you sure that you want to log out?');
    if(leaveRoom){
        localStorage.clear();
        sessionStorage.clear();
        window.location.replace('./login.html');
    }
});