const joinRoom = (room) => {

    if(sessionStorage.roomId === room.roomId) {
        return;
    }
    /*sessionStorage.roomName = room.roomName;
    sessionStorage.roomId = room.roomId;*/
    // emit to server 'join-room' event
    let userName = sessionStorage.userName;
    let userId = sessionStorage.userId;
    const user = {
        userId: userId,
        userName: userName
    }
    
    socket.emit('join-room', room, user);
    // Update variables
    sessionStorage.roomName = room.roomName;
    sessionStorage.roomId = room.roomId;
    
    // sets room name
    document.getElementById("roomName").innerHTML = `#${room.roomName}`;

   //clear messages from former room
    document.getElementById("messageList").innerHTML = "";
   
    //clear forms
    document.getElementById("roomForm").newRoom.value = "";
    document.getElementById("messageForm").newMessage.value = "";
    document.getElementById("newMessage").focus();
}

const displayRoom = (room) => {

    const btn = document.createElement('button');
    if(room.roomName === 'general') {
        
            btn.classList.add('room-btn-active');
            joinRoom(room);
    }

    btn.textContent = room.roomName;
    btn.setAttribute('id', room.roomId);
    btn.classList.add('room-btn');
    
    btn.onclick = () => {

        if(sessionStorage.roomId) {
            document.getElementById(sessionStorage.roomId).classList.remove('room-btn-active');
        }

        btn.classList.add('room-btn-active');
        joinRoom(room);

    }

    const rooms = document.getElementById("roomList");
    rooms.append(btn);

    sortBtnList("roomList");
}

//displays number of active users
const displayRoomUsers = (room, users) => {
    let test = document.getElementById(room.roomId).textContent = `${room.roomName}[${users.length}]`;
    console.log(test);
    //document.getElementById(room.roomId).textContent = `${room.roomName}[${users.length}]`;
}

const createRoom = () => {
    const newRoomName = document.getElementById("roomForm").newRoom.value;
//if there's input in room form
    if(newRoomName) {
        socket.emit('new-room', newRoomName);
        document.getElementById("roomForm").newRoom.value = '';
        joinRoom(newRoomName)
      
     } else {
        return false;
    }
};