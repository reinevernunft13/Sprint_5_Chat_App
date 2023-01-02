const apiUrl = 'http://localhost:4001';

const loginForm = document.querySelector("form");

const loginUser = async(evt) => {

    evt.preventDefault();
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {

        const response = await fetch(apiUrl + '/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                 userName,
                 password
            })
        });

        const data = await response.json();
        console.log(data);

        if(response.ok) {
            //console.log('Got the token!: ', data);
            //localStorage.setItem('accessToken', data);
            localStorage.setItem('accessToken', data.accessToken);
            //console.log(data.accessToken);
            alert('Success. You are logged in!');
            window.location.assign('./index.html');

        } else {
            alert(JSON.stringify(`${data.error}`));
        }

    } catch(err) {
        console.error(err.message);
    }
};

loginForm.addEventListener('submit', loginUser);