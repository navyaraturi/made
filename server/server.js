import express from "express";
import { Server } from "socket.io";

const PORT = Bun.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

console.log("application started");
