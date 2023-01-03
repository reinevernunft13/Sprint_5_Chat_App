document.querySelector('.button-logout').addEventListener('click', () => {
    const leaveRoom = confirm('Are you sure that you want to log out?');
    if(leaveRoom){
        sessionStorage.clear();
        localStorage.clear();
        window.location.replace('./login.html');
    }
});