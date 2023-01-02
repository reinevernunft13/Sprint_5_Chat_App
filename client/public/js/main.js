'use strict'

const accessToken = localStorage.getItem('accessToken');

console.log(accessToken);

if(!accessToken) {
    window.location.assign('./login.html');
}

const socket = io('http://localhost:4001', {
    reconnectionDelayMax: 10000,
    query: {
        'accessToken': localStorage.accessToken
    }
});

