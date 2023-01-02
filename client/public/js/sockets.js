socket.on('connect', () => {
      
    //display new message in chat
   socket.on('new-message', message => {
       displayMessage(message);
   })
   //emit join message to chat
   socket.on('new-join-message', message => {
       displayJoinMessage(message);
   })
   
   //new room created, updating user list
   socket.on('new-room', (room, users) => {
       displayRoom(room);
       displayRoomUsers(room, users);
   })

   socket.on('update-room-users', (room, users) => {
       
       // Display updated list
       if (sessionStorage.roomId === room.roomId) {
           displayUsers(users)
       }
       displayRoomUsers(room, users);
   })


   // Retrieve room list 
   socket.emit('get-rooms');
})