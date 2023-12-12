// a WebSocket server using the ws library in Node.js

const WebSocket = require("ws"); // WebSocket  instance
const ws = new WebSocket.Server({port:8080}) // The WebSocket.Server class is usually used to create a WebSocket server



// Connection Event Handling :
/*
The connection event is emitted when a new WebSocket connection is established.
In this event handler,
you log the message "user connected" to the console.
The socket parameter represents the WebSocket connection for the connected client.
You can use this socket object to send and receive messages to and from the connected client.
So, when a WebSocket connection is made to your server, the server logs "web socket server created" to the console,
and when a user connects, it logs "user connected." This sets up a basic WebSocket server that can handle connections from WebSocket clients.
*/
ws.on("connection",(socket)=>{
    console.log("user connected");
    socket.on("message",(data)=>{
        const receivedString = data.toString('utf-8');
        console.log("data recieved from client to server ",receivedString)
        socket.send("data recieved from server to client ",receivedString)
    })

    socket.on("close",()=>{
        console.log("disconnected");
    })
})
