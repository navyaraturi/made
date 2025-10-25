import http from "http";
import express from "express";
import { Server } from "socket.io";

const PORT = Bun.env.PORT || 3001;

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send(`MADE api is active at ${new Date()}`);
});

// Socket.io
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`User is connected with id: ${socket.id}`);
});

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

console.log("application started");
