const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 3001 });

server.on("connection", (socket) => {
  console.log("Client connected");
  socket.send("Let's learn WebSocket");
  socket.on("message", (message) => {
    console.log("Our message", message);
    socket.send("Hello from WebSocket server");
  });
});

console.log("WebSocket is running at ws://localhost:3001");
