'use strict'

const apiUrl = 'http://localhost:4001';

const registerForm = document.querySelector("form");

const registerUser = async(event) => {
    
    event.preventDefault();
    //const email = document.getElementById('email').value
    const userName = document.getElementById('username').value
	const password = document.getElementById('password').value
    const confirmPassword = document.getElementById("confirmPassword").value;

    try {

        const response = await fetch(apiUrl + '/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userName,
                password,
                confirmPassword
            })
        });
    
        const data = await response.json();
        console.log(data);
    
        if(response.ok) {
        // everything went fine
            localStorage.setItem('accessToken', data.accessToken);
            console.log(data.accessToken);
            alert('Registration successful!');
            window.location.assign('./index.html');
            
        } else {
            alert('Ooops, something went wrong: ' + JSON.stringify(data.error));
            console.log(data.error);
        }
    } catch(err) {
        console.error(err.message);
   
    }
};

registerForm.addEventListener('submit', registerUser);





