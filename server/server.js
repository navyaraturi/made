import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello there");
});

app.listen(3000, () => {
  console.log(`server started on port 3000`);
});

console.log("application started");
