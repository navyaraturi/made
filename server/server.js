import express from "express";
import { Server } from "socket.io";

const PORT = Bun.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.send(`MADE api is active at ${new Date()}`);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

console.log("application started");
