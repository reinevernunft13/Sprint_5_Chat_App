const sendMessage = () => {
    //retrieves message from chat-form input, room and user from sessionStorage
    const text = document.querySelector('.chat-form input[name="newMessage"]').value;
    const user = {userId: sessionStorage.userId, userName: sessionStorage.userName};
    const room = {roomId: sessionStorage.roomId, roomName: sessionStorage.roomName};
    
    //sends obj with message, room and user info to socket.io server
    if (text) {
        let message = {user, room, text};
        socket.emit('new-message', message);
        displayMessage(message);
        document.querySelector('.chat-form input[name="newMessage"]').value = '';
    }

    return false;
}

//outputs chat messages to DOM
const displayMessage = (message) =>{
    //shows current message list
    let messageList = document.getElementById("messageList");
    //creates html element with current message to append to current message list
    let li = document.createElement('li');
    li.classList.add('chat-li')
    li.textContent = message.text;

    //retrieve last inserted ul element 
    let ul = document.getElementById('lastMessage');

    // append if last message has same user.id as current
    if (ul && (ul.getAttribute('userId') === message.user.userId)) {
        
        ul.append(li)
    } else {
        if (ul) document.getElementById("lastMessage").removeAttribute("id");

        //create new ul element
        ul = document.createElement('ul');
        ul.setAttribute('id', 'lastMessage');
        ul.setAttribute('userId', message.user.userId)

         // MESSAGE SEPARATION 
         // align USER's messages to the right (css)
        if (message.user.userId === sessionStorage.userId) {
            
            ul.classList.add('myMessage')
        } else {
            // align other users's messages to the left (css)
            const name = document.createElement('li')
            name.textContent = message.user.userName;
            messageList.append(name);
            ul.classList.add('notMyMessage')
        }
        //append list element
        ul.append(li);
        //append ul to message list
        messageList.append(ul);
    }

    messageList.scrollTop = messageList.scrollHeight;
}
const displayJoinMessage = (message) => {

   document.getElementById('lastMessage').removeAttribute('id');

    let messageList = document.getElementById('messageList');

    let li = document.createElement('li');
    li.classList.add('chat-li-join')
    li.textContent = message;
    li.setAttribute('id', 'lastMessage');
    messageList.append(li);

    messageList.scrollTop = messageList.scrollHeight;
}

