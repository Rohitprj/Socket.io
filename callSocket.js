// const socket = new WebSocket("ws://localhost:3001");
// console.log("Client side connection", socket);

// socket.onmessage = (e) => console.log(e.data);

// socket.send("Hello from frontend");

const socket = new WebSocket("ws://localhost:3001");
console.log("Client side connection", socket);

socket.onopen = () => {
  console.log("Connection opened!");
  socket.send("Hello from frontend");
};

socket.onmessage = (e) => console.log("Received:", e.data);

socket.onerror = (err) => console.error("WebSocket error:", err);
